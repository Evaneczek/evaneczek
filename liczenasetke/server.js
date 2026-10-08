/* Liczę na Setkę · serwer: strona, konta (Google i link na e-mail), loginy uczniów, postępy, płatności Stripe.
   Bez zewnętrznych bibliotek: node:http, node:sqlite (Node 22.13+), fetch.
   Konfiguracja przez zmienne środowiskowe (lista w README-WDROZENIE.md). */
"use strict";
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { DatabaseSync } = require("node:sqlite");

// ---------- konfiguracja ----------
const ENV = process.env;
const PORT = Number(ENV.PORT || 8080);
const BASE_URL = (ENV.BASE_URL || `http://localhost:${PORT}`).replace(/\/$/, "");
const PUBLIC = path.resolve(ENV.PUBLIC_DIR || path.join(__dirname, "public"));
const DB_PATH = ENV.DB_PATH || path.join(__dirname, "dane.db");
const SECURE = BASE_URL.startsWith("https://");
const DEV = ENV.DEV === "1";                        // tylko do testów: link logujący wraca w odpowiedzi
const STRIPE_KEY = ENV.STRIPE_SECRET_KEY || "";
let STRIPE_WH = ENV.STRIPE_WEBHOOK_SECRET || "";
const PRICE = { exam: ENV.STRIPE_PRICE_EXAM || "", monthly: ENV.STRIPE_PRICE_MONTHLY || "" };
const STRIPE_API = ENV.STRIPE_API || "https://api.stripe.com";
const STRIPE_TOS = ENV.STRIPE_TOS === "1";          // zgoda na regulamin w Stripe Checkout (wymaga adresu regulaminu w ustawieniach Stripe)
const GOOGLE_ID = ENV.GOOGLE_CLIENT_ID || "";
const GOOGLE_TOKENINFO = ENV.GOOGLE_TOKENINFO || "https://oauth2.googleapis.com/tokeninfo";
const RESEND_KEY = ENV.RESEND_API_KEY || "";
const RESEND_API = ENV.RESEND_API || "https://api.resend.com";
const MAIL_FROM = ENV.MAIL_FROM || "Liczę na Setkę <kontakt@liczenasetke.pl>";
const REPLY_TO = ENV.REPLY_TO || "liczenasetke@gmail.com";
const BACKUP_TO = ENV.BACKUP_TO || REPLY_TO;   // dokąd idzie codzienna kopia bazy   // odpowiedzi rodziców na nasze maile trafiają do skrzynki supportu
// dostęp „Do dnia egzaminu”: do końca 11 maja 2027 r. czasu polskiego
const EXAM_END = Date.parse(ENV.EXAM_END || "2027-05-11T23:59:59+02:00");
// konta z darmowym pełnym dostępem do dnia egzaminu (właściciel kursu, testy); lista rozdzielona przecinkami w GIFT_EMAILS
const GIFT = new Set((ENV.GIFT_EMAILS || "klimczakjanek@gmail.com").split(",").map(e => e.trim().toLowerCase()).filter(Boolean));
const FREE = new Set(["dane-procenty.js"]);          // darmowy temat
const SESSION_DAYS = 180;
const DAY = 86400000;

// ---------- baza ----------
try { fs.mkdirSync(path.dirname(DB_PATH), { recursive: true }); } catch (e) {}
const db = new DatabaseSync(DB_PATH);
db.exec(`
PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY, email TEXT UNIQUE NOT NULL, google_sub TEXT, created_at INTEGER NOT NULL,
  stripe_customer TEXT, exam_until INTEGER, sub_id TEXT, sub_status TEXT, sub_period_end INTEGER,
  sub_cancel_at_end INTEGER DEFAULT 0, revoked_at INTEGER);
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, login TEXT UNIQUE NOT NULL, pin_hash TEXT, name TEXT, created_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL, student_id INTEGER, role TEXT NOT NULL, expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS magic (
  token_hash TEXT PRIMARY KEY, email TEXT NOT NULL, next TEXT, expires INTEGER NOT NULL, used INTEGER DEFAULT 0);
CREATE TABLE IF NOT EXISTS progress (student_id INTEGER PRIMARY KEY, data TEXT NOT NULL, updated_at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS activity (student_id INTEGER NOT NULL, day TEXT NOT NULL, PRIMARY KEY (student_id, day));
CREATE TABLE IF NOT EXISTS stripe_events (id TEXT PRIMARY KEY, at INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT, stripe_id TEXT, amount INTEGER, at INTEGER NOT NULL);
`);
const q = sql => db.prepare(sql);
for (const sql of ["ALTER TABLE students ADD COLUMN pin_shown INTEGER DEFAULT 0", "ALTER TABLE users ADD COLUMN weekly_opt INTEGER DEFAULT 1",
  "ALTER TABLE users ADD COLUMN marketing INTEGER DEFAULT 0", "ALTER TABLE magic ADD COLUMN code_hash TEXT", "ALTER TABLE magic ADD COLUMN tries INTEGER DEFAULT 0",
  "CREATE TABLE IF NOT EXISTS claims (cs TEXT PRIMARY KEY, at INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS weekly_snap (student_id INTEGER PRIMARY KEY, data TEXT NOT NULL, at INTEGER NOT NULL)",
  "CREATE TABLE IF NOT EXISTS reviews (id INTEGER PRIMARY KEY, user_id INTEGER NOT NULL, student_id INTEGER, rating INTEGER NOT NULL, who TEXT, name TEXT, city TEXT, text TEXT NOT NULL, consent INTEGER DEFAULT 0, at INTEGER NOT NULL)"])
  try { db.exec(sql); } catch (e) { /* już jest */ }
const CONTACT = ENV.CONTACT_EMAIL || "kontakt@liczenasetke.pl";
const META_PIXEL_ID = ENV.META_PIXEL_ID || "1601014341758092";   // numer Piksela Meta jest publiczny (widać go w kodzie każdej strony z pikselem)
// panel /admin.html: tylko dla tych adresów (lista rozdzielona przecinkami w ADMIN_EMAILS)
const ADMINS = new Set((ENV.ADMIN_EMAILS || "klimczakjanek@gmail.com,liczenasetke@gmail.com").split(",").map(e => e.trim().toLowerCase()).filter(Boolean));
// statystyki strony bez cookies: zdarzenia z zanonimizowanym, codziennie zmienianym identyfikatorem odwiedzającego
for (const sql of [
  `CREATE TABLE IF NOT EXISTS events (id INTEGER PRIMARY KEY, at INTEGER NOT NULL, day TEXT NOT NULL, visitor TEXT, session_key TEXT, name TEXT NOT NULL,
    path TEXT, source TEXT, medium TEXT, campaign TEXT, content TEXT, referrer_host TEXT, device TEXT, meta TEXT)`,
  "CREATE INDEX IF NOT EXISTS ev_day ON events (day)", "CREATE INDEX IF NOT EXISTS ev_name ON events (name, day)",
  "CREATE INDEX IF NOT EXISTS ev_visitor ON events (visitor)", "CREATE INDEX IF NOT EXISTS ev_session ON events (session_key)",
  `CREATE TABLE IF NOT EXISTS ad_spend (day TEXT NOT NULL, source TEXT NOT NULL DEFAULT 'meta', campaign TEXT NOT NULL DEFAULT '', content TEXT NOT NULL,
    spend_pln REAL NOT NULL DEFAULT 0, impressions INTEGER NOT NULL DEFAULT 0, clicks INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (day, source, content))`])
  try { db.exec(sql); } catch (e) { /* już jest */ }

// ---------- narzędzia ----------
const sha = s => crypto.createHash("sha256").update(s).digest("hex");
const token = () => crypto.randomBytes(32).toString("base64url");
const now = () => Date.now();
function hashPin(pin, salt = crypto.randomBytes(16).toString("hex")) {
  return salt + ":" + crypto.scryptSync(String(pin), salt, 32).toString("hex");
}
// klucz tylko do odczytu statystyk (zmienna STATS_TOKEN w Railway, min. 32 znaki); bez tej zmiennej nie działa
function statsToken(req) {
  const t = process.env.STATS_TOKEN || "", h = String(req.headers.authorization || "");
  if (t.length < 32 || !h.startsWith("Bearer ")) return false;
  const a = crypto.createHash("sha256").update(h.slice(7)).digest(), b = crypto.createHash("sha256").update(t).digest();
  return crypto.timingSafeEqual(a, b);
}
function checkPin(pin, stored) {
  if (!stored) return false;
  const [salt, h] = stored.split(":");
  const a = Buffer.from(h, "hex"), b = crypto.scryptSync(String(pin), salt, 32);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
const validEmail = e => typeof e === "string" && e.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const safeNext = n => (typeof n === "string" && /^[a-z0-9-]{1,40}$/.test(n)) ? n : "";
const warsawDay = (t = now()) => new Date(t).toLocaleDateString("sv-SE", { timeZone: "Europe/Warsaw" });
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function log(...a) { console.log(new Date().toISOString(), ...a); }

// prosty limit prób (w pamięci): klucz -> [znaczniki czasu]
const hits = new Map();
function limited(key, max, ms) {
  const t = now(), arr = (hits.get(key) || []).filter(x => t - x < ms);
  arr.push(t); hits.set(key, arr);
  return arr.length > max;
}

// ---------- program kursu z public/program.js (tytuły tematów w mailach) ----------
let TOPICS = [];
try {
  const src = fs.readFileSync(path.join(PUBLIC, "program.js"), "utf8");
  const prog = JSON.parse(src.slice(src.indexOf("["), src.lastIndexOf("]") + 1));
  TOPICS = prog.flatMap(d => d.topics.map(t => ({ ...t, dzial: d.label })));
} catch (e) { log("nie udało się wczytać programu kursu:", e.message); }

// ---------- konta ----------
function userByEmail(email) { return q("SELECT * FROM users WHERE email = ?").get(email.toLowerCase()); }
function ensureUser(email, googleSub) {
  email = email.toLowerCase();
  let u = userByEmail(email);
  if (!u) {
    const r = q("INSERT INTO users (email, google_sub, created_at) VALUES (?, ?, ?)").run(email, googleSub || null, now());
    u = q("SELECT * FROM users WHERE id = ?").get(r.lastInsertRowid);
    createStudent(u.id, "");               // każde konto ma od razu jedno miejsce na postępy dziecka
    log("nowe konto", u.id);
  } else if (googleSub && !u.google_sub) {
    q("UPDATE users SET google_sub = ? WHERE id = ?").run(googleSub, u.id);
  }
  return u;
}
function slugName(name) {
  const m = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };
  return String(name || "").toLowerCase().replace(/[ąćęłńóśźż]/g, c => m[c]).replace(/[^a-z]/g, "").slice(0, 12) || "uczen";
}
function createStudent(userId, name) {
  const base = slugName(name);
  let login;
  do { login = base + "-" + crypto.randomInt(1000, 10000); } while (q("SELECT 1 FROM students WHERE login = ?").get(login));
  const pin = String(crypto.randomInt(0, 1000000)).padStart(6, "0");
  const r = q("INSERT INTO students (user_id, login, pin_hash, name, created_at) VALUES (?, ?, ?, ?, ?)")
    .run(userId, login, hashPin(pin), String(name || "").slice(0, 40), now());
  return { id: Number(r.lastInsertRowid), login, pin };
}
function students(userId) { return q("SELECT id, login, name, pin_shown AS pinShown FROM students WHERE user_id = ? ORDER BY id").all(userId); }
function access(u) {
  if (!u) return { active: false };
  const t = now(), rev = u.revoked_at && u.revoked_at > 0;
  const exam = (!rev && u.exam_until && u.exam_until > t) || (GIFT.has(String(u.email).toLowerCase()) && EXAM_END > t);
  const subOk = !rev && ["active", "trialing", "past_due"].includes(u.sub_status) && (u.sub_period_end || 0) + 3 * DAY > t;
  return {
    active: !!(exam || subOk),
    plan: exam ? "exam" : subOk ? "monthly" : null,
    until: exam ? (u.exam_until && u.exam_until > t ? u.exam_until : EXAM_END) : subOk ? u.sub_period_end : null,
    cancelAtEnd: !!u.sub_cancel_at_end,
    canManage: !!(u.sub_id && u.stripe_customer)
  };
}

// ---------- sesje ----------
function cookies(req) {
  const out = {};
  (req.headers.cookie || "").split(";").forEach(p => { const i = p.indexOf("="); if (i > 0) out[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return out;
}
function startSession(res, userId, role, studentId) {
  const t = token();
  q("INSERT INTO sessions (token_hash, user_id, student_id, role, expires) VALUES (?, ?, ?, ?, ?)")
    .run(sha(t), userId, studentId || null, role, now() + SESSION_DAYS * DAY);
  res.setHeader("Set-Cookie", `sid=${t}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}${SECURE ? "; Secure" : ""}`);
}
function session(req) {
  const t = cookies(req).sid;
  if (!t) return null;
  const s = q("SELECT * FROM sessions WHERE token_hash = ?").get(sha(t));
  if (!s || s.expires < now()) return null;
  const u = q("SELECT * FROM users WHERE id = ?").get(s.user_id);
  if (!u) return null;
  const learner = s.student_id || (students(u.id)[0] || {}).id || null;
  return { ...s, user: u, learner };
}
function endSession(req, res) {
  const t = cookies(req).sid;
  if (t) q("DELETE FROM sessions WHERE token_hash = ?").run(sha(t));
  res.setHeader("Set-Cookie", `sid=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${SECURE ? "; Secure" : ""}`);
}

// ---------- e-mail ----------
async function sendMail(to, subject, html, attachments) {
  if (!RESEND_KEY) { log("[e-mail bez wysyłki]", to, subject); return true; }
  const r = await fetch(RESEND_API + "/emails", {
    method: "POST", headers: { Authorization: "Bearer " + RESEND_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ from: MAIL_FROM, to: [to], reply_to: REPLY_TO, subject, html, attachments })
  });
  if (!r.ok) log("błąd wysyłki e-mail", r.status, await r.text());
  return r.ok;
}
const mailWrap = body => `<div style="font-family:Arial,sans-serif;font-size:16px;line-height:1.5;color:#16181d;max-width:520px">${body}
  <p style="color:#5e5a51;font-size:13px;margin-top:28px">Liczę na Setkę · kurs matematyki do egzaminu ósmoklasisty · <a href="${BASE_URL}/">liczenasetke.pl</a></p></div>`;

// ---------- Stripe ----------
function form(obj, prefix = "", out = []) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === "object") form(v, key, out);
    else out.push(encodeURIComponent(key) + "=" + encodeURIComponent(String(v)));
  }
  return out.join("&");
}
async function stripe(method, pathname, body) {
  const r = await fetch(STRIPE_API + pathname, {
    method, headers: { Authorization: "Bearer " + STRIPE_KEY, "Content-Type": "application/x-www-form-urlencoded" },
    body: body ? form(body) : undefined
  });
  const j = await r.json();
  if (!r.ok) throw new Error("Stripe " + r.status + ": " + (j.error && j.error.message));
  return j;
}
function verifyStripe(raw, header) {
  if (!STRIPE_WH || !header) return false;
  const parts = Object.fromEntries(header.split(",").map(p => p.split("=")).map(([k, ...v]) => [k, v.join("=")]));
  const sigs = header.split(",").filter(p => p.startsWith("v1=")).map(p => p.slice(3));
  const ts = Number(parts.t);
  if (!ts || Math.abs(now() / 1000 - ts) > 600) return false;
  const expected = crypto.createHmac("sha256", STRIPE_WH).update(ts + "." + raw).digest("hex");
  return sigs.some(s => s.length === expected.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expected)));
}
function periodEnd(sub) {
  const e = sub.current_period_end || (sub.items && sub.items.data && sub.items.data[0] && sub.items.data[0].current_period_end);
  return e ? e * 1000 : null;
}
function applySubscription(sub, userId) {
  const u = userId ? q("SELECT * FROM users WHERE id = ?").get(userId)
    : q("SELECT * FROM users WHERE sub_id = ? OR stripe_customer = ?").get(sub.id, sub.customer);
  if (!u) { log("subskrypcja bez konta", sub.id); return; }
  q("UPDATE users SET sub_id = ?, sub_status = ?, sub_period_end = ?, sub_cancel_at_end = ?, stripe_customer = COALESCE(stripe_customer, ?), revoked_at = NULL WHERE id = ?")
    .run(sub.id, sub.status, periodEnd(sub), sub.cancel_at_period_end ? 1 : 0, sub.customer, u.id);
}
// ---------- Stripe: automatyczna konfiguracja ----------
// Wystarczy STRIPE_SECRET_KEY: serwer sam tworzy produkty z cenami (199 zł, 49 zł/mies.) i webhook,
// a sekret webhooka zapisuje w bazie. Ceny i sekret można też podać ręcznie w zmiennych.
const LOOKUP = { exam: "lns_exam_199", monthly: "lns_monthly_49" };
const EVENTS = ["checkout.session.completed", "checkout.session.async_payment_succeeded", "customer.subscription.created",
  "customer.subscription.updated", "customer.subscription.deleted", "charge.refunded", "checkout.session.expired"];
const EVENTS_V = "2";
const setting = k => { const r = q("SELECT value FROM settings WHERE key = ?").get(k); return r ? r.value : ""; };
const setSetting = (k, v) => q("INSERT INTO settings (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value").run(k, v);
async function stripeSetup() {
  if (!STRIPE_KEY) return;
  const mode = /_live_/.test(STRIPE_KEY) ? "live" : "test";
  try {
    const found = await stripe("GET", "/v1/prices?active=true&lookup_keys[]=" + LOOKUP.exam + "&lookup_keys[]=" + LOOKUP.monthly);
    const PROD = {};
    for (const pr of found.data || []) for (const k of Object.keys(LOOKUP)) if (pr.lookup_key === LOOKUP[k]) { if (!PRICE[k]) PRICE[k] = pr.id; PROD[k] = typeof pr.product === "object" ? pr.product.id : pr.product; }
    const IMGS = { exam: "/produkt-egzamin.png", monthly: "/produkt-miesiecznie.png" };
    const img = k => BASE_URL.startsWith("https://") ? { 0: BASE_URL + IMGS[k] } : undefined;
    // obrazki produktów na stronie płatności (aktualizowane raz na wersję obrazków)
    const IMG_V = "2";
    if (setting("prodimg_" + mode) !== IMG_V && BASE_URL.startsWith("https://")) {
      for (const k of Object.keys(PROD)) await stripe("POST", "/v1/products/" + PROD[k], { images: img(k) }).catch(e => log("Stripe: obrazek produktu:", e.message));
      if (Object.keys(PROD).length) setSetting("prodimg_" + mode, IMG_V);
    }
    if (!PRICE.exam) {
      const prod = await stripe("POST", "/v1/products", { name: "Kurs do dnia egzaminu", images: img("exam"),
        description: "Dostęp do całego kursu matematyki do egzaminu ósmoklasisty do 11 maja 2027 r. Jedna płatność, nic się nie odnawia." });
      PRICE.exam = (await stripe("POST", "/v1/prices", { product: prod.id, currency: "pln", unit_amount: 19900, lookup_key: LOOKUP.exam })).id;
      log("Stripe: utworzono cenę 199 zł", PRICE.exam);
    }
    if (!PRICE.monthly) {
      const prod = await stripe("POST", "/v1/products", { name: "Kurs miesięcznie", images: img("monthly"),
        description: "Dostęp do całego kursu matematyki do egzaminu ósmoklasisty. Płatność co miesiąc, rezygnacja w każdej chwili." });
      PRICE.monthly = (await stripe("POST", "/v1/prices", { product: prod.id, currency: "pln", unit_amount: 4900, recurring: { interval: "month" }, lookup_key: LOOKUP.monthly })).id;
      log("Stripe: utworzono cenę 49 zł/mies.", PRICE.monthly);
    }
  } catch (e) { log("Stripe: nie udało się przygotować cen:", e.message); }
  // portal klienta: rezygnacja z subskrypcji na koniec opłaconego okresu, historia płatności, zmiana karty
  if (BASE_URL.startsWith("https://")) {
    const pk = "portal_" + mode;
    if (!setting(pk)) try {
      const pc = await stripe("POST", "/v1/billing_portal/configurations", {
        business_profile: { headline: "Liczę na Setkę: zarządzaj subskrypcją kursu", privacy_policy_url: BASE_URL + "/polityka-prywatnosci.html", terms_of_service_url: BASE_URL + "/regulamin.html" },
        default_return_url: BASE_URL + "/konto.html",
        features: { subscription_cancel: { enabled: true, mode: "at_period_end" }, invoice_history: { enabled: true }, payment_method_update: { enabled: true } } });
      setSetting(pk, pc.id); log("Stripe: portal klienta skonfigurowany", pc.id);
    } catch (e) { log("Stripe: portal klienta:", e.message); setSetting("portal_error", e.message); }
  }
  if (ENV.STRIPE_WEBHOOK_SECRET || !BASE_URL.startsWith("https://")) return;
  const url = BASE_URL + "/api/stripe/webhook", key = "wh_" + mode + "_" + url;
  const saved = setting(key);
  try {
    const list = await stripe("GET", "/v1/webhook_endpoints?limit=100");
    const mine = (list.data || []).filter(w => w.url === url);
    if (saved && mine.length) {
      STRIPE_WH = saved;
      if (setting("wh_events_" + mode) !== EVENTS_V) {
        await stripe("POST", "/v1/webhook_endpoints/" + mine[0].id, { enabled_events: Object.fromEntries(EVENTS.map((e, i) => [i, e])) });
        setSetting("wh_events_" + mode, EVENTS_V); log("Stripe: zaktualizowano zdarzenia webhooka");
      }
      return;
    }
    for (const w of mine) await stripe("DELETE", "/v1/webhook_endpoints/" + w.id);   // sekretu starego nie da się odczytać
    const wh = await stripe("POST", "/v1/webhook_endpoints", { url, enabled_events: Object.fromEntries(EVENTS.map((e, i) => [i, e])),
      description: "Liczę na Setkę: dostęp po płatności" });
    setSetting(key, wh.secret); STRIPE_WH = wh.secret; setSetting("wh_events_" + mode, EVENTS_V);
    log("Stripe: utworzono webhook", wh.id);
  } catch (e) { log("Stripe: nie udało się utworzyć webhooka:", e.message); }
}

function userForSession(s) {
  const userId = Number(s.client_reference_id || (s.metadata && s.metadata.user_id)) || 0;
  let u = userId ? q("SELECT * FROM users WHERE id = ?").get(userId) : null;
  const email = (s.customer_details && s.customer_details.email) || s.customer_email;
  if (!u && validEmail(email || "")) u = ensureUser(email);     // zakup bez logowania: konto zakłada się samo
  return u;
}
async function onCheckoutDone(s) {
  let u = userForSession(s);
  if (!u) { log("płatność bez konta i bez e-maila", s.id); return; }
  const isNew = u.created_at > now() - 10 * 60000;
  if (s.consent && s.consent.promotions === "opt_in") q("UPDATE users SET marketing = 1 WHERE id = ?").run(u.id);
  const hadSub = u.sub_id && ["active", "trialing", "past_due"].includes(u.sub_status) && !u.sub_cancel_at_end;
  if (s.customer) q("UPDATE users SET stripe_customer = ? WHERE id = ?").run(s.customer, u.id);
  if (s.mode === "payment") {
    if (s.payment_status !== "paid") return;   // płatność odroczona: czekamy na async_payment_succeeded
    q("UPDATE users SET exam_until = ?, revoked_at = NULL WHERE id = ?").run(EXAM_END, u.id);
    q("INSERT INTO payments (user_id, kind, stripe_id, amount, at) VALUES (?, 'exam', ?, ?, ?)").run(u.id, s.payment_intent || s.id, s.amount_total || 0, now());
    stripeMetaEvent("purchase", s, { plan: "exam", kwota: s.amount_total || 0, pi: s.payment_intent || s.id });
    // przejście z planu miesięcznego na „do egzaminu”: subskrypcja kończy się z opłaconym miesiącem, bez kolejnych płatności
    if (hadSub) try {
      const sub = await stripe("POST", "/v1/subscriptions/" + u.sub_id, { cancel_at_period_end: true });
      applySubscription(sub, u.id); log("przejście na plan do egzaminu, subskrypcja wygaśnie", u.id);
    } catch (e) { log("nie udało się wyłączyć subskrypcji po przejściu:", e.message); }
  } else if (s.mode === "subscription" && s.subscription) {
    const sub = typeof s.subscription === "object" ? s.subscription : await stripe("GET", "/v1/subscriptions/" + s.subscription);
    applySubscription(sub, u.id);
    q("INSERT INTO payments (user_id, kind, stripe_id, amount, at) VALUES (?, 'monthly', ?, ?, ?)").run(u.id, sub.id, s.amount_total || 0, now());
    stripeMetaEvent("purchase", s, { plan: "monthly", kwota: s.amount_total || 0, pi: sub.id });
  }
  const plan = s.mode === "payment" ? "„Do dnia egzaminu” (dostęp do 11 maja 2027 r.)" : "„Miesięcznie” (odnawiany co miesiąc, rezygnacja w panelu rodzica)";
  await sendMail(u.email, "Dostęp do kursu Liczę na Setkę jest aktywny", mailWrap(`
    <h2 style="margin:0 0 12px">Dziękujemy! Dostęp jest aktywny.</h2>
    <p>Plan: <b>${plan}</b>.</p>
    ${isNew ? `<p>Konto założyliśmy na ten adres e-mail. Logujesz się bez hasła: przyciskiem „Kontynuuj z Google” (jeśli to adres Google) albo kodem wysłanym na ten adres.</p>` : ""}
    ${hadSub && s.mode === "payment" ? `<p>Twoja subskrypcja miesięczna wyłączy się sama na koniec opłaconego miesiąca. Kolejnych płatności już nie będzie.</p>` : ""}
    <p>Dziecko może zacząć od testu startowego: pokaże, od którego tematu zacząć. Login i PIN dla dziecka ustawisz w panelu rodzica.</p>
    <p><a href="${BASE_URL}/konto.html" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Przejdź do panelu rodzica</a></p>
    <p>Masz 14 dni od zakupu na zwrot pieniędzy bez podawania przyczyny: wystarczy odpowiedzieć na tę wiadomość albo napisać na ${CONTACT}.
    Regulamin kursu: <a href="${BASE_URL}/regulamin.html">${BASE_URL}/regulamin.html</a>.</p>`));
}
// porzucona płatność: jedno przypomnienie, tylko za zgodą na wiadomości (zaznaczoną w płatności albo wcześniej)
async function onCheckoutExpired(o) {
  stripeMetaEvent("checkout_abandoned", o, { plan: (o.metadata && o.metadata.plan) || "" });
  const email = ((o.customer_details && o.customer_details.email) || o.customer_email || "").toLowerCase();
  let u = Number(o.client_reference_id) ? q("SELECT * FROM users WHERE id = ?").get(Number(o.client_reference_id)) : (email ? userByEmail(email) : null);
  const to = (u && u.email) || email;
  const consent = (o.consent && o.consent.promotions === "opt_in") || (u && u.marketing);
  if (!to || !validEmail(to) || !consent) return;
  if (u && access(u).active) return;
  const key = "rem_" + to;
  if (Number(setting(key) || 0) > now() - 14 * DAY) return;
  setSetting(key, String(now()));
  const back = (o.after_expiration && o.after_expiration.recovery && o.after_expiration.recovery.url) || BASE_URL + "/cennik.html";
  await sendMail(to, "Płatność za kurs czeka na dokończenie", mailWrap(`
    <h2 style="margin:0 0 12px">Zostało tylko dokończyć płatność</h2>
    <p>Zaczęliście zakup kursu matematyki do egzaminu ósmoklasisty, ale płatność nie została dokończona. Nic nie zostało pobrane.</p>
    <p><a href="${back}" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Dokończ zakup</a></p>
    <p>Pełny dostęp: 20 tematów, test startowy, 2 egzaminy próbne i panel rodzica. Po zakupie masz 14 dni na zwrot pieniędzy bez podawania przyczyny.</p>
    <p>Masz pytanie? Odpowiedz na tę wiadomość albo napisz na ${CONTACT}.</p>
    <p style="color:#5e5a51;font-size:13px">To jedyne przypomnienie. Dostajesz je, bo przy płatności była zaznaczona zgoda na wiadomości od nas.</p>`));
  log("przypomnienie o płatności wysłane");
}
async function onStripeEvent(ev) {
  const o = ev.data && ev.data.object;
  switch (ev.type) {
    case "checkout.session.completed":
    case "checkout.session.async_payment_succeeded":
      if (ev.type === "checkout.session.async_payment_succeeded") o.payment_status = "paid";
      await onCheckoutDone(o); break;
    case "customer.subscription.created":
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      applySubscription(o, Number(o.metadata && o.metadata.user_id) || null); break;
    case "checkout.session.expired": await onCheckoutExpired(o); break;
    case "charge.refunded": {
      // zwrot (gwarancja 14 dni): odbieramy dostęp; subskrypcję trzeba też anulować w panelu Stripe
      { // statystyki: zwrot przypisany do źródła zakupu (po identyfikatorze płatności)
        const pe = o.payment_intent && q("SELECT * FROM events WHERE name = 'purchase' AND meta LIKE ? ORDER BY at DESC LIMIT 1").get('%"pi":"' + o.payment_intent + '"%');
        addEvent({ name: "refund", path: "/stripe", session_key: pe && pe.session_key, visitor: pe && pe.visitor, device: pe && pe.device, source: pe && pe.source,
          medium: pe && pe.medium, campaign: pe && pe.campaign, content: pe && pe.content, meta: { kwota: o.amount_refunded || 0, pi: o.payment_intent || "" } });
      }
      if (o.amount_refunded < o.amount) break;
      const u = q("SELECT * FROM users WHERE stripe_customer = ?").get(o.customer);
      if (u) { q("UPDATE users SET revoked_at = ?, exam_until = NULL WHERE id = ?").run(now(), u.id); log("zwrot, dostęp wyłączony", u.id); }
      break;
    }
  }
}

// ---------- statystyki strony (bez cookies, bez danych osobowych) ----------
// Odwiedzający = skrót z dziennej soli + IP + przeglądarki. Sól zmienia się codziennie i stara jest kasowana,
// więc z zapisanych danych nie da się odtworzyć ani IP, ani tego, że to ta sama osoba w różne dni.
const EV_NAMES = new Set(["view", "lesson_start", "lesson_step", "practice_start", "practice_done", "test_start", "test_done",
  "free_cta_click", "pricing_view", "plan_click", "login", "scroll_50", "scroll_90"]);
const BOT = /bot|crawl|spider|slurp|headless|lighthouse|preview|facebookexternalhit|meta-externalagent|monitor|curl|wget|python|axios/i;
function daySalt(day = warsawDay()) {
  const k = "salt_" + day;
  let v = setting(k);
  if (!v) {
    v = crypto.randomBytes(16).toString("hex"); setSetting(k, v);
    q("DELETE FROM settings WHERE key LIKE 'salt_%' AND key < ?").run("salt_" + warsawDay(now() - DAY));   // zostaje tylko dziś i wczoraj
  }
  return v;
}
const visitorOf = req => sha(daySalt() + "|" + ip(req) + "|" + (req.headers["user-agent"] || "")).slice(0, 24);
const deviceOf = ua => /iPad|Tablet/i.test(ua) ? "tablet" : /Mobi|Android|iPhone/i.test(ua) ? "mobile" : "desktop";
const clip = (v, n = 80) => (typeof v === "string" ? v : v == null ? "" : String(v)).replace(/[\u0000-\u001f]/g, "").trim().slice(0, n);
// źródło wejścia: UTM-y mają pierwszeństwo, potem host strony, z której ktoś przyszedł
function sourceOf(u, refHost) {
  const src = clip(u.source, 40).toLowerCase();
  if (src) return { source: src, medium: clip(u.medium, 40).toLowerCase(), campaign: clip(u.campaign), content: clip(u.content) };
  const h = clip(refHost, 100).toLowerCase(), base = { medium: "", campaign: "", content: "" };
  if (!h) return { source: "bezpośrednio", ...base };
  if (/(^|\.)google\./.test(h)) return { source: "google", ...base, medium: "organic" };
  if (/(^|\.)(bing|duckduckgo|yahoo)\./.test(h)) return { source: h.split(".").slice(-2, -1)[0], ...base, medium: "organic" };
  if (/facebook|instagram|fb\.com|messenger/.test(h)) return { source: "meta", ...base, medium: "bez-utm" };
  return { source: h.replace(/^www\./, ""), ...base, medium: "referral" };
}
// kto się nie liczy do statystyk: admini i osoby z aktywnym dostępem (kupujący), żeby lejek pokazywał tylko nowych rodziców
function skipStats(req) { const s = session(req); return !!(s && (ADMINS.has(String(s.user.email).toLowerCase()) || access(s.user).active)); }
function addEvent(e) {
  q(`INSERT INTO events (at, day, visitor, session_key, name, path, source, medium, campaign, content, referrer_host, device, meta)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(e.at || now(), warsawDay(e.at || now()), e.visitor || null, e.session_key || null, e.name,
    e.path || null, e.source || null, e.medium || null, e.campaign || null, e.content || null, e.referrer_host || null, e.device || null,
    e.meta ? JSON.stringify(e.meta).slice(0, 600) : null);
}
function clientEvent(req, b) {
  const ua = req.headers["user-agent"] || "";
  if (!EV_NAMES.has(b.name) || BOT.test(ua) || !ua) return;
  if (limited("ev:" + ip(req), 240, 600000)) return;
  if (skipStats(req)) return;
  const u = b.utm && typeof b.utm === "object" ? b.utm : {}, refHost = clip(b.ref, 100);
  const meta = {};
  if (b.meta && typeof b.meta === "object") for (const [k, v] of Object.entries(b.meta).slice(0, 6)) if (/^[a-z]{1,12}$/.test(k)) meta[k] = typeof v === "number" ? v : clip(v, 40);
  addEvent({ name: b.name, path: clip(b.path, 120).split("?")[0], session_key: clip(b.sk, 40) || null, visitor: visitorOf(req), device: deviceOf(ua),
    referrer_host: refHost, ...sourceOf(u, refHost), meta: Object.keys(meta).length ? meta : null });
}
// zdarzenia z płatności (serwer): przypisane do sesji i źródła zapisanych w metadanych płatności Stripe
function stripeMetaEvent(name, o, extra = {}) {
  const md = o.metadata || {};
  addEvent({ name, session_key: md.sk || null, visitor: md.vis || null, device: md.dev || null, source: md.src || null, medium: md.med || null,
    campaign: md.cmp || null, content: md.cnt || null, path: "/stripe", meta: extra });
}

// do metadanych płatności: sesja, odwiedzający i źródło wejścia (żeby zakup przypisać do reklamy)
function statMeta(req, b) {
  const u = b.utm && typeof b.utm === "object" ? b.utm : {}, src = sourceOf(u, clip(b.ref, 100));
  return { sk: clip(b.sk, 40) || undefined, vis: visitorOf(req), dev: deviceOf(req.headers["user-agent"] || ""),
    src: src.source || undefined, med: src.medium || undefined, cmp: src.campaign || undefined, cnt: src.content || undefined };
}
// ---------- panel admina: obliczenia ----------
const pct = (a, b) => b ? Math.round(a / b * 1000) / 10 : 0;
function sessionsIn(from, to, f) {
  // każda sesja = zestaw zdarzeń z tym samym kluczem sesji; źródło i urządzenie z pierwszego zdarzenia sesji
  const rows = q("SELECT session_key AS k, visitor, name, path, source, medium, campaign, content, device, meta, at FROM events WHERE day BETWEEN ? AND ? AND session_key IS NOT NULL ORDER BY at").all(from, to);
  const S = new Map();
  for (const r of rows) {
    let s = S.get(r.k);
    if (!s) { s = { k: r.k, visitor: r.visitor, first: null, ev: [], source: null, medium: null, campaign: null, content: null, device: r.device, paths: [] }; S.set(r.k, s); }
    if (!s.source && r.source) Object.assign(s, { source: r.source, medium: r.medium, campaign: r.campaign, content: r.content });
    if (!s.device && r.device) s.device = r.device;
    if (r.name === "view") { if (!s.first) s.first = r.path; s.paths.push(r.path); }
    s.ev.push(r);
  }
  let list = [...S.values()].filter(s => s.ev.some(e => e.name === "view" || e.path === "/stripe"));
  if (f.source) list = list.filter(s => (s.source || "bezpośrednio") === f.source);
  if (f.device) list = list.filter(s => s.device === f.device);
  for (const s of list) {
    const has = n => s.ev.some(e => e.name === n);
    s.flags = { visit: s.ev.some(e => e.name === "view"), lesson: has("lesson_start"), testDone: s.ev.some(e => e.name === "test_done" && /procenty/.test(e.path || "")),
      pricing: has("pricing_view"), plan: has("plan_click"), checkout: has("checkout_start"), purchase: has("purchase") };
    s.revenue = s.ev.filter(e => e.name === "purchase").reduce((a, e) => a + (JSON.parse(e.meta || "{}").kwota || 0), 0)
      - s.ev.filter(e => e.name === "refund").reduce((a, e) => a + (JSON.parse(e.meta || "{}").kwota || 0), 0);
  }
  return list;
}
function spendIn(from, to) {
  return q("SELECT source, campaign, content, SUM(spend_pln) AS spend, SUM(impressions) AS imp, SUM(clicks) AS clicks FROM ad_spend WHERE day BETWEEN ? AND ? GROUP BY source, content").all(from, to);
}
function tiles(list, spend) {
  const n = k => list.filter(s => s.flags[k]).length;
  const visitors = new Set(list.filter(s => s.flags.visit).map(s => s.visitor)).size, purchases = n("purchase"), revenue = list.reduce((a, s) => a + s.revenue, 0) / 100;
  const sp = spend.reduce((a, r) => a + (r.spend || 0), 0);
  return { visitors, sessions: n("visit"), lessons: n("lesson"), pricing: n("pricing"), checkouts: n("checkout"), purchases,
    revenue: Math.round(revenue * 100) / 100, spend: Math.round(sp * 100) / 100, cpa: purchases ? Math.round(sp / purchases * 100) / 100 : null, roas: sp ? Math.round(revenue / sp * 100) / 100 : null };
}
const FUNNEL = [["visit", "Wejście na stronę"], ["lesson", "Darmowa lekcja: start"], ["testDone", "Test darmowy ukończony"], ["pricing", "Cennik"],
  ["plan", "Klik planu"], ["checkout", "Płatność rozpoczęta"], ["purchase", "Zakup"]];
function funnel(list, steps = FUNNEL) {
  const out = steps.map(([k, label]) => ({ k, label, n: list.filter(s => s.flags[k]).length }));
  out.forEach((st, i) => { st.ofStart = pct(st.n, out[0].n); st.ofPrev = i ? pct(st.n, out[i - 1].n) : 100; });
  // największy spadek liczony tylko tam, gdzie poprzedni krok ma co najmniej 5 osób (inaczej to szum)
  let worst = null;
  out.forEach((st, i) => { if (i && out[i - 1].n >= 5) { const drop = 100 - st.ofPrev; if (!worst || drop > worst.drop) worst = { i, drop, from: out[i - 1].label, to: st.label }; } });
  return { steps: out, worst };
}
function adsTable(list, spend) {
  const key = s => [s.source || "bezpośrednio", s.campaign || "", s.content || ""].join("\u0001");
  const G = new Map();
  for (const s of list) {
    const k = key(s); let g = G.get(k);
    if (!g) { g = { source: s.source || "bezpośrednio", campaign: s.campaign || "", content: s.content || "", sessions: 0, lesson: 0, pricing: 0, checkout: 0, purchase: 0, revenue: 0, spend: 0, imp: 0, clicks: 0 }; G.set(k, g); }
    g.sessions += s.flags.visit ? 1 : 0; g.lesson += s.flags.lesson; g.pricing += s.flags.pricing; g.checkout += s.flags.checkout; g.purchase += s.flags.purchase; g.revenue += s.revenue / 100;
  }
  for (const r of spend) {   // koszty dopasowane po nazwie reklamy = utm_content
    let g = [...G.values()].find(x => x.source === r.source && x.content === r.content);
    if (!g) { g = { source: r.source, campaign: r.campaign || "", content: r.content, sessions: 0, lesson: 0, pricing: 0, checkout: 0, purchase: 0, revenue: 0, spend: 0, imp: 0, clicks: 0 }; G.set(key(g) + "\u0002", g); }
    g.spend += r.spend || 0; g.imp += r.imp || 0; g.clicks += r.clicks || 0;
  }
  return [...G.values()].map(g => ({ ...g, lessonPct: pct(g.lesson, g.sessions), pricingPct: pct(g.pricing, g.sessions), conv: pct(g.purchase, g.sessions),
    spend: Math.round(g.spend * 100) / 100, revenue: Math.round(g.revenue * 100) / 100, cpa: g.purchase ? Math.round(g.spend / g.purchase * 100) / 100 : null,
    roas: g.spend ? Math.round(g.revenue / g.spend * 100) / 100 : null })).sort((a, b) => b.sessions - a.sessions || b.spend - a.spend);
}
function lessonStats(list) {
  const L = list.filter(s => s.flags.lesson);
  const maxStep = s => Math.max(0, ...s.ev.filter(e => e.name === "lesson_step" && /procenty/.test(e.path || "")).map(e => JSON.parse(e.meta || "{}").krok || 0));
  const reached = {};
  for (const s of L) { const m = maxStep(s); for (let k = 0; k <= m; k++) reached[k] = (reached[k] || 0) + 1; }
  // jeden wynik na sesję (ostatni), żeby odświeżenie strony z wynikiem nie liczyło testu drugi raz
  const tests = list.map(s => s.ev.filter(e => e.name === "test_done" && /procenty/.test(e.path || "")).pop()).filter(Boolean).map(e => JSON.parse(e.meta || "{}"));
  const has = n => list.filter(s => s.ev.some(e => e.name === n && /procenty/.test(e.path || ""))).length;
  return { starts: L.length, reached, practiceStart: has("practice_start"), practiceDone: has("practice_done"), testStart: has("test_start"), testDone: tests.length,
    ctaClicks: list.filter(s => s.ev.some(e => e.name === "free_cta_click")).length,
    avgScore: tests.length ? Math.round(tests.reduce((a, t) => a + (t.wynik || 0), 0) / tests.length * 10) / 10 : null, testMax: tests.length ? tests[0].max : null };
}
function paymentStats(from, to) {
  const ev = q("SELECT name, at, source, content, meta FROM events WHERE day BETWEEN ? AND ? AND name IN ('checkout_start','purchase','checkout_abandoned','refund') ORDER BY at DESC").all(from, to);
  const c = n => ev.filter(e => e.name === n).length;
  const P = ev.filter(e => e.name === "purchase").map(e => ({ at: e.at, source: e.source || "nieznane", content: e.content || "", ...JSON.parse(e.meta || "{}") }));
  const refunds = ev.filter(e => e.name === "refund").reduce((a, e) => a + (JSON.parse(e.meta || "{}").kwota || 0), 0) / 100;
  return { started: c("checkout_start"), paid: c("purchase"), abandoned: c("checkout_abandoned"), refunds: c("refund"), refundPln: refunds,
    exam: P.filter(p => p.plan === "exam").length, monthly: P.filter(p => p.plan === "monthly").length,
    gross: P.reduce((a, p) => a + (p.kwota || 0), 0) / 100, recent: P.slice(0, 20).map(p => ({ at: p.at, plan: p.plan, kwota: (p.kwota || 0) / 100, source: p.source, content: p.content })) };
}
function daily(from, to, f) {
  const rows = q(`SELECT day, COUNT(DISTINCT CASE WHEN name = 'view' THEN visitor END) AS visitors, SUM(name = 'purchase') AS purchases FROM events
    WHERE day BETWEEN ? AND ? ${f.source ? "AND COALESCE(source, 'bezpośrednio') = ?" : ""} ${f.device ? "AND device = ?" : ""} GROUP BY day`).all(from, to, ...[f.source, f.device].filter(Boolean));
  const sp = Object.fromEntries(q("SELECT day, SUM(spend_pln) AS s FROM ad_spend WHERE day BETWEEN ? AND ? GROUP BY day").all(from, to).map(r => [r.day, r.s]));
  const out = [], byDay = Object.fromEntries(rows.map(r => [r.day, r]));
  for (let t = Date.parse(from + "T12:00:00Z"); t <= Date.parse(to + "T12:00:00Z") && out.length < 400; t += DAY) {
    const d = new Date(t).toISOString().slice(0, 10), r = byDay[d] || {};
    out.push({ day: d, visitors: r.visitors || 0, purchases: r.purchases || 0, spend: Math.round((sp[d] || 0) * 100) / 100 });
  }
  return out;
}
function pageStats(list) {
  const views = {}, exits = {};
  for (const s of list) { s.paths.forEach(p => { views[p] = (views[p] || 0) + 1; }); if (s.paths.length) { const l = s.paths[s.paths.length - 1]; exits[l] = (exits[l] || 0) + 1; } }
  const top = o => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([path, n]) => ({ path, n }));
  const scroll = {};
  for (const p of ["/", "/cennik.html"]) {
    const seen = list.filter(s => s.paths.includes(p)).length;
    const sc = n => list.filter(s => s.ev.some(e => e.name === n && e.path === p)).length;
    scroll[p] = { views: seen, s50: pct(sc("scroll_50"), seen), s90: pct(sc("scroll_90"), seen) };
  }
  const dev = {};
  for (const d of ["mobile", "desktop", "tablet"]) { const L = list.filter(s => s.device === d); dev[d] = { sessions: L.length, purchases: L.filter(s => s.flags.purchase).length, conv: pct(L.filter(s => s.flags.purchase).length, L.length), pricing: pct(L.filter(s => s.flags.pricing).length, L.length) }; }
  return { top: top(views), exits: top(exits), scroll, devices: dev };
}
function insights(t, fun, ads, les, pages) {
  const out = [];
  if (t.sessions < 100 && t.spend < 80) return ["Za mało danych na wnioski (potrzeba ok. 100 wejść albo 80 zł wydatków na reklamy). Poczekaj kilka dni."];
  for (const a of ads) if (a.spend >= 80 && a.purchase === 0) out.push(`Reklama „${a.content || a.campaign || a.source}”: 0 zakupów przy wydanych ${a.spend.toFixed(0)} zł. Rozważ wyłączenie albo zmianę kreacji.`);
  const good = ads.filter(a => a.cpa != null && a.spend >= 50).sort((a, b) => a.cpa - b.cpa)[0];
  if (good) out.push(`Najtańszy zakup: „${good.content || good.source}”, ${good.cpa.toFixed(0)} zł za zakup. Warto przesunąć tu budżet.`);
  if (fun.worst) out.push(`Najwięcej osób odpada między krokami „${fun.worst.from}” → „${fun.worst.to}” (${Math.round(fun.worst.drop)}% nie przechodzi dalej).`);
  const m = pages.devices.mobile, d = pages.devices.desktop;
  if (m.sessions >= 50 && d.sessions >= 30 && m.conv && d.conv && d.conv / m.conv >= 2) out.push(`Na telefonie konwersja (${m.conv}%) jest ${Math.round(d.conv / m.conv)}× niższa niż na komputerze (${d.conv}%). Sprawdź stronę i płatność na telefonie.`);
  if (les.starts >= 30) {
    const ks = Object.keys(les.reached).map(Number).sort((a, b) => a - b);
    let worst = null;
    for (let i = 1; i < ks.length; i++) { const drop = 1 - les.reached[ks[i]] / les.reached[ks[i - 1]]; if (!worst || drop > worst.drop) worst = { k: ks[i - 1], drop }; }
    if (worst && worst.drop >= 0.25) out.push(`W darmowej lekcji najwięcej osób rezygnuje po kroku ${worst.k} (${Math.round(worst.drop * 100)}% nie idzie dalej).`);
  }
  if (t.pricing >= 30 && t.checkouts / t.pricing < 0.05) out.push(`Z cennika do płatności przechodzi tylko ${pct(t.checkouts, t.pricing)}% osób. Warto przetestować inny układ cennika.`);
  return out.length ? out.slice(0, 5) : ["Brak wyraźnych problemów w tym okresie."];
}
function adminStats(f) {
  const today = warsawDay(), from = /^\d{4}-\d{2}-\d{2}$/.test(f.from) ? f.from : warsawDay(now() - 6 * DAY), to = /^\d{4}-\d{2}-\d{2}$/.test(f.to) ? f.to : today;
  const filt = { source: clip(f.source, 60), device: ["mobile", "desktop", "tablet"].includes(f.device) ? f.device : "" };
  const list = sessionsIn(from, to, filt);
  let spend = spendIn(from, to);
  if (filt.source) spend = spend.filter(r => r.source === filt.source);
  if (filt.device) spend = [];   // koszty reklam nie mają podziału na urządzenia
  // poprzedni okres tej samej długości (do porównania na kafelkach)
  const len = Math.round((Date.parse(to) - Date.parse(from)) / DAY) + 1;
  const pFrom = new Date(Date.parse(from) - len * DAY).toISOString().slice(0, 10), pTo = new Date(Date.parse(from) - DAY).toISOString().slice(0, 10);
  const t = tiles(list, spend), prev = tiles(sessionsIn(pFrom, pTo, filt), filt.device ? [] : spendIn(pFrom, pTo).filter(r => !filt.source || r.source === filt.source));
  const fun = funnel(list), ads = adsTable(list, spend), les = lessonStats(list), pages = pageStats(list);
  const entryHome = funnel(list.filter(s => s.first === "/" || s.first === "/index.html"), [["visit", "Wejście na stronę główną"], ["pricing", "Cennik"], ["checkout", "Płatność"], ["purchase", "Zakup"]]);
  const entryLesson = funnel(list.filter(s => /procenty/.test(s.first || "")), [["visit", "Wejście prosto na lekcję"], ["testDone", "Test ukończony"], ["pricing", "Cennik"], ["purchase", "Zakup"]]);
  const sources = [...new Set(q("SELECT DISTINCT COALESCE(source, 'bezpośrednio') AS s FROM events WHERE day >= ?").all(warsawDay(now() - 400 * DAY)).map(r => r.s))].sort();
  return { from, to, prevFrom: pFrom, prevTo: pTo, tiles: t, prev, funnel: fun, entryHome, entryLesson, ads, lesson: les, payments: paymentStats(from, to),
    daily: daily(from, to, filt), pages, insights: insights(t, fun, ads, les, pages), sources, firstDay: (q("SELECT MIN(day) AS d FROM events").get() || {}).d || today };
}
// import kosztów z CSV wyeksportowanego z Menedżera reklam (polska albo angielska wersja nagłówków)
function parseCsv(text) {
  const lines = String(text).replace(/^﻿/, "").split(/\r?\n/).filter(l => l.trim());
  if (!lines.length) return [];
  const sep = (lines[0].match(/;/g) || []).length > (lines[0].match(/,/g) || []).length ? ";" : ",";
  const split = l => { const out = []; let cur = "", qd = false; for (let i = 0; i < l.length; i++) { const ch = l[i];
    if (ch === '"') { if (qd && l[i + 1] === '"') { cur += '"'; i++; } else qd = !qd; } else if (ch === sep && !qd) { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out.map(x => x.trim()); };
  const head = split(lines[0]).map(h => h.toLowerCase());
  const col = res => head.findIndex(h => res.some(r => r.test(h)));
  const iDay = col([/^dzień|^day|początek raportowania|reporting starts|^data|^date/]), iAd = col([/nazwa reklamy|ad name/]), iCamp = col([/nazwa kampanii|campaign name/]);
  const iSpend = col([/wydana kwota|amount spent|wydatki|spend/]), iImp = col([/^wyświetlenia|^impressions/]), iClk = col([/kliknięcia linku|link clicks|kliknięcia w link/]);
  if (iDay < 0 || iAd < 0 || iSpend < 0) throw new Error("Nie znaleziono kolumn: dzień, nazwa reklamy, wydana kwota. Eksportuj raport z podziałem na dni i reklamy.");
  const num = v => Number(String(v || "0").replace(/\s|zł|PLN/gi, "").replace(",", ".")) || 0;
  return lines.slice(1).map(split).map(r => ({ day: String(r[iDay] || "").slice(0, 10), content: clip(r[iAd]), campaign: iCamp >= 0 ? clip(r[iCamp]) : "",
    spend: num(r[iSpend]), imp: iImp >= 0 ? Math.round(num(r[iImp])) : 0, clicks: iClk >= 0 ? Math.round(num(r[iClk])) : 0 }))
    .filter(r => /^\d{4}-\d{2}-\d{2}$/.test(r.day) && r.content);
}
function saveSpend(rows, source = "meta") {
  const st = q(`INSERT INTO ad_spend (day, source, campaign, content, spend_pln, impressions, clicks) VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(day, source, content) DO UPDATE SET campaign = excluded.campaign, spend_pln = excluded.spend_pln, impressions = excluded.impressions, clicks = excluded.clicks`);
  for (const r of rows) st.run(r.day, clip(source, 40) || "meta", r.campaign || "", r.content, Math.max(0, r.spend), Math.max(0, r.imp || 0), Math.max(0, r.clicks || 0));
  return rows.length;
}
const isAdmin = req => { const s = session(req); return !!(s && s.role === "parent" && ADMINS.has(String(s.user.email).toLowerCase())); };

// ---------- HTTP ----------
function send(res, status, body, type = "application/json; charset=utf-8", extra = {}) {
  res.writeHead(status, { "Content-Type": type, "Cache-Control": "no-store", ...extra });
  res.end(typeof body === "string" || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
const json = (res, status, obj) => send(res, status, obj);
function readBody(req, limit = 1_000_000) {
  return new Promise((ok, fail) => {
    let size = 0; const chunks = [];
    req.on("data", c => { size += c.length; if (size > limit) { fail(new Error("za duże")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => ok(Buffer.concat(chunks).toString("utf8")));
    req.on("error", fail);
  });
}
async function jsonBody(req) { try { return JSON.parse(await readBody(req) || "{}"); } catch (e) { return {}; } }
function sameOrigin(req) {
  const o = req.headers.origin;
  return !o || o === BASE_URL || (!SECURE && /^http:\/\/localhost(:\d+)?$/.test(o));
}
// adres klienta: X-Real-IP albo ostatni wpis X-Forwarded-For dopisany przez serwer pośredniczący Railway
// (pierwszy wpis może podać sam klient, więc nie nadaje się do limitów prób)
const ip = req => String(req.headers["x-real-ip"] || "").trim() || (req.headers["x-forwarded-for"] || "").split(",").pop().trim() || req.socket.remoteAddress;

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".ico": "image/x-icon", ".json": "application/json", ".xml": "application/xml; charset=utf-8", ".woff2": "font/woff2" };

function serveStatic(req, res, pathname, versioned) {
  if (pathname === "/") pathname = "/index.html";
  let file;
  try { file = path.join(PUBLIC, decodeURIComponent(pathname)); } catch (e) { return send(res, 400, "Zły adres", "text/plain"); }
  if (!file.startsWith(PUBLIC + path.sep)) return send(res, 404, "Nie ma takiej strony", "text/plain; charset=utf-8");
  const base = path.basename(file);
  // panel admina: dla wszystkich poza adminami wygląda jak nieistniejąca strona
  if (base === "admin.html") {
    if (!isAdmin(req)) { const nf = path.join(PUBLIC, "404.html"); return send(res, 404, fs.existsSync(nf) ? fs.readFileSync(nf) : "Nie ma takiej strony", TYPES[".html"]); }
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
  }
  // treść płatnych tematów, testu startowego i egzaminów tylko z aktywnym dostępem
  if (/^dane-.+\.js$/.test(base) && !FREE.has(base)) {
    const s = session(req);
    if (!s || !access(s.user).active) return send(res, 402, "/* Ta część kursu wymaga dostępu. */", TYPES[".js"]);
  }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      const nf = path.join(PUBLIC, "404.html");
      return fs.existsSync(nf) ? send(res, 404, fs.readFileSync(nf), TYPES[".html"]) : send(res, 404, "Nie ma takiej strony", "text/plain; charset=utf-8");
    }
    const ext = path.extname(file);
    // pliki z wersją w adresie (?v=…) mogą leżeć w pamięci przeglądarki długo; reszta jest sprawdzana przy każdym wejściu
    const cache = base.startsWith("dane-") && !FREE.has(base) ? "private, no-store"
      : (versioned && (ext === ".css" || ext === ".js")) || ext === ".woff2" ? "public, max-age=31536000, immutable"
      : ext === ".png" || ext === ".svg" ? "public, max-age=86400" : "no-cache";
    const etag = `"${st.size.toString(36)}-${Math.floor(st.mtimeMs).toString(36)}"`;
    if (cache === "no-cache" && req.headers["if-none-match"] === etag) { res.writeHead(304, { ETag: etag, "Cache-Control": cache }); return res.end(); }
    res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream", "Cache-Control": cache, ETag: etag,
      "Content-Length": st.size, "X-Content-Type-Options": "nosniff", "Referrer-Policy": "strict-origin-when-cross-origin" });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
}

// ---------- API ----------
async function api(req, res, url) {
  const p = url.pathname, m = req.method;

  // Stripe wysyła zdarzenia tutaj (podpis sprawdzamy na surowym tekście)
  if (p === "/api/stripe/webhook" && m === "POST") {
    const raw = await readBody(req);
    if (!verifyStripe(raw, req.headers["stripe-signature"])) return json(res, 400, { error: "zły podpis" });
    const ev = JSON.parse(raw);
    if (q("SELECT 1 FROM stripe_events WHERE id = ?").get(ev.id)) return json(res, 200, { ok: true, dup: true });
    try { await onStripeEvent(ev); } catch (e) { log("błąd zdarzenia Stripe", ev.type, e.message); return json(res, 500, { error: "błąd" }); }
    q("INSERT INTO stripe_events (id, at) VALUES (?, ?)").run(ev.id, now());
    return json(res, 200, { ok: true });
  }
  if (m !== "GET" && !sameOrigin(req)) return json(res, 403, { error: "Niedozwolone źródło żądania" });

  // statystyki strony: zdarzenie z przeglądarki (sendBeacon), zawsze 204, żeby nigdy nie spowolnić ani nie zepsuć strony
  if (p === "/api/e" && m === "POST") {
    try { const raw = await readBody(req, 2048); clientEvent(req, JSON.parse(raw || "{}")); } catch (e) { /* błędne zdarzenie pomijamy */ }
    res.writeHead(204, { "Cache-Control": "no-store" }); return res.end();
  }
  // same statystyki kluczem: tylko GET /api/admin/stats (liczby i nazwy reklam, bez danych osobowych); koszty i reszta panelu dalej tylko po zalogowaniu
  if (p === "/api/admin/stats" && m === "GET" && statsToken(req)) {
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
    return json(res, 200, adminStats(Object.fromEntries(url.searchParams)));
  }
  // panel admina (tylko adresy z ADMIN_EMAILS); dla innych udajemy, że adresu nie ma
  if (p.startsWith("/api/admin/")) {
    if (!isAdmin(req)) return json(res, 404, { error: "Nie ma takiego adresu." });
    res.setHeader("X-Robots-Tag", "noindex, nofollow");
    if (p === "/api/admin/stats" && m === "GET") return json(res, 200, adminStats(Object.fromEntries(url.searchParams)));
    if (p === "/api/admin/spend" && m === "GET")
      return json(res, 200, { rows: q("SELECT * FROM ad_spend ORDER BY day DESC, content LIMIT 500").all() });
    if (p === "/api/admin/spend" && m === "POST") {
      let b; try { b = JSON.parse(await readBody(req, 3_000_000) || "{}"); } catch (e) { return json(res, 400, { error: "zły format" }); }
      try {
        let rows;
        if (typeof b.csv === "string") rows = parseCsv(b.csv);
        else rows = (Array.isArray(b.rows) ? b.rows : []).map(r => ({ day: String(r.day || ""), content: clip(r.content), campaign: clip(r.campaign),
          spend: Number(String(r.spend || 0).replace(",", ".")) || 0, imp: Number(r.imp) || 0, clicks: Number(r.clicks) || 0 })).filter(r => /^\d{4}-\d{2}-\d{2}$/.test(r.day) && r.content);
        if (!rows.length) return json(res, 400, { error: "Brak wierszy do zapisania (sprawdź datę i nazwę reklamy)." });
        return json(res, 200, { ok: true, saved: saveSpend(rows, b.source || "meta") });
      } catch (e) { return json(res, 400, { error: e.message }); }
    }
    if (p === "/api/admin/spend" && m === "DELETE") {
      const b = await jsonBody(req);
      q("DELETE FROM ad_spend WHERE day = ? AND content = ? AND source = ?").run(String(b.day || ""), String(b.content || ""), String(b.source || "meta"));
      return json(res, 200, { ok: true });
    }
    return json(res, 404, { error: "Nie ma takiego adresu." });
  }

  if (p === "/api/config" && m === "GET")
    return json(res, 200, { googleClientId: GOOGLE_ID, metaPixelId: META_PIXEL_ID, contact: CONTACT, payments: !!(STRIPE_KEY && PRICE.exam && PRICE.monthly), webhook: !!STRIPE_WH,
      stripeMode: STRIPE_KEY ? (/_live_/.test(STRIPE_KEY) ? "live" : "test") : null, email: !!RESEND_KEY,
      branding: setting("branding") || null, brandingError: setting("branding_error") || null, checkoutError: setting("checkout_error") || null, portal: !!setting("portal_" + (/_live_/.test(STRIPE_KEY) ? "live" : "test")) });

  if (p === "/api/me" && m === "GET") {
    const s = session(req);
    if (!s) return json(res, 200, { role: null });
    const st = students(s.user.id), pr = s.learner && q("SELECT updated_at FROM progress WHERE student_id = ?").get(s.learner);
    return json(res, 200, {
      role: s.role, email: s.role === "parent" ? s.user.email : undefined,
      student: s.role === "student" ? st.find(x => x.id === s.student_id) : undefined,
      students: s.role === "parent" ? st : undefined, learner: s.learner,
      access: access(s.user), progressAt: pr ? pr.updated_at : 0, weekly: s.role === "parent" ? !!s.user.weekly_opt : undefined
    });
  }

  // --- logowanie ---
  if (p === "/api/auth/google" && m === "POST") {
    const b = await jsonBody(req);
    if (!GOOGLE_ID || typeof b.credential !== "string") return json(res, 400, { error: "Logowanie przez Google nie jest skonfigurowane." });
    if (limited("g:" + ip(req), 30, 600000)) return json(res, 429, { error: "Za dużo prób. Spróbuj za kilka minut." });
    const r = await fetch(GOOGLE_TOKENINFO + "?id_token=" + encodeURIComponent(b.credential));
    const t = await r.json().catch(() => ({}));
    const okIss = t.iss === "accounts.google.com" || t.iss === "https://accounts.google.com";
    if (!r.ok || t.aud !== GOOGLE_ID || !okIss || String(t.email_verified) !== "true" || !validEmail(t.email) || Number(t.exp) * 1000 < now())
      return json(res, 401, { error: "Nie udało się potwierdzić konta Google." });
    const u = ensureUser(t.email, t.sub);
    startSession(res, u.id, "parent");
    return json(res, 200, { ok: true });
  }
  if (p === "/api/auth/email" && m === "POST") {
    const b = await jsonBody(req), email = String(b.email || "").trim().toLowerCase();
    if (!validEmail(email)) return json(res, 400, { error: "Wpisz poprawny adres e-mail." });
    if (limited("e:" + email, 5, 3600000) || limited("ei:" + ip(req), 20, 3600000)) return json(res, 429, { error: "Wysłaliśmy już kilka linków. Sprawdź skrzynkę (także folder Oferty i Spam) albo spróbuj za godzinę." });
    const t = token(), code = String(crypto.randomInt(0, 1000000)).padStart(6, "0");
    q("INSERT INTO magic (token_hash, email, next, expires, code_hash) VALUES (?, ?, ?, ?, ?)").run(sha(t), email, safeNext(b.next), now() + 30 * 60000, sha(email + ":" + code));
    const link = `${BASE_URL}/api/auth/link?t=${t}`;
    const sent = await sendMail(email, `Kod logowania: ${code} · Liczę na Setkę`, mailWrap(`
      <h2 style="margin:0 0 12px">Twój kod do logowania</h2>
      <p style="font-size:34px;font-weight:bold;letter-spacing:8px;background:#fff0c7;border:2px solid #16181d;border-radius:12px;padding:10px 18px;display:inline-block;margin:4px 0">${code}</p>
      <p>Wpisz ten kod na stronie logowania. Możesz też kliknąć przycisk poniżej (zaloguje Cię w przeglądarce, w której otworzy się link):</p>
      <p><a href="${link}" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Zaloguj się do kursu</a></p>
      <p>Kod i link działają przez 30 minut. Jeśli nie prosisz o logowanie, po prostu zignoruj tę wiadomość.</p>`));
    if (!sent) return json(res, 502, { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę." });
    return json(res, 200, DEV ? { ok: true, devLink: link, devCode: code } : { ok: true });
  }
  if (p === "/api/auth/code" && m === "POST") {
    const b = await jsonBody(req), email = String(b.email || "").trim().toLowerCase(), code = String(b.code || "").replace(/\D/g, "");
    if (limited("c:" + ip(req), 30, 900000)) return json(res, 429, { error: "Za dużo prób. Spróbuj za kilka minut." });
    const row = q("SELECT * FROM magic WHERE email = ? AND used = 0 AND expires > ? AND code_hash IS NOT NULL ORDER BY expires DESC LIMIT 1").get(email, now());
    if (!row) return json(res, 401, { error: "Kod wygasł. Wyślij nowy." });
    if (row.tries >= 5) return json(res, 429, { error: "Za dużo błędnych prób. Wyślij nowy kod." });
    if (row.code_hash !== sha(email + ":" + code)) { q("UPDATE magic SET tries = tries + 1 WHERE token_hash = ?").run(row.token_hash); return json(res, 401, { error: "Nieprawidłowy kod. Sprawdź go w mailu." }); }
    q("UPDATE magic SET used = 1 WHERE token_hash = ?").run(row.token_hash);
    const u = ensureUser(email);
    startSession(res, u.id, "parent");
    return json(res, 200, { ok: true });
  }
  if (p === "/api/auth/link" && m === "GET") {
    const t = url.searchParams.get("t") || "";
    const row = q("SELECT * FROM magic WHERE token_hash = ?").get(sha(t));
    if (!row || row.used || row.expires < now()) return send(res, 302, "", "text/plain", { Location: "/logowanie.html?blad=link" });
    q("UPDATE magic SET used = 1 WHERE token_hash = ?").run(sha(t));
    const u = ensureUser(row.email);
    startSession(res, u.id, "parent");
    return send(res, 302, "", "text/plain", { Location: "/logowanie.html?zalogowano=1" + (row.next ? "&next=" + row.next : "") });
  }
  if (p === "/api/auth/student" && m === "POST") {
    const b = await jsonBody(req), login = String(b.login || "").trim().toLowerCase();
    if (limited("s:" + ip(req), 20, 900000) || limited("sl:" + login, 8, 900000)) return json(res, 429, { error: "Za dużo prób. Poczekaj 15 minut albo poproś rodzica o nowy PIN." });
    const st = q("SELECT * FROM students WHERE login = ?").get(login);
    if (!st || !checkPin(String(b.pin || ""), st.pin_hash)) return json(res, 401, { error: "Nieprawidłowy login albo PIN." });
    startSession(res, st.user_id, "student", st.id);
    return json(res, 200, { ok: true });
  }
  if (p === "/api/auth/logout" && m === "POST") { endSession(req, res); return json(res, 200, { ok: true }); }

  // --- płatności ---
  // płatność działa także bez logowania: Stripe pyta o e-mail, a konto zakłada się samo po płatności
  if (p === "/api/checkout" && m === "POST") {
    const s = session(req);
    if (s && s.role !== "parent") return json(res, 403, { error: "Dostęp kupuje rodzic. Zaloguj się na konto rodzica." });
    const b = await jsonBody(req), plan = b.plan === "monthly" ? "monthly" : "exam";
    if (!STRIPE_KEY || !PRICE[plan]) return json(res, 503, { error: "Płatności nie są jeszcze włączone." });
    if (limited("co:" + ip(req), 30, 3600000)) return json(res, 429, { error: "Za dużo prób. Spróbuj za chwilę." });
    const acc = s ? access(s.user) : { active: false };
    if (acc.active && !(acc.plan === "monthly" && plan === "exam")) return json(res, 409, { error: "Masz już aktywny dostęp.", url: "/konto.html" });
    const body = {
      mode: plan === "exam" ? "payment" : "subscription",
      line_items: { 0: { price: PRICE[plan], quantity: 1 } },
      success_url: `${BASE_URL}/konto.html?platnosc=ok&plan=${plan}&cs={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cennik.html?platnosc=anulowana`,
      client_reference_id: s ? String(s.user.id) : undefined,
      metadata: { user_id: s ? String(s.user.id) : undefined, plan, ...statMeta(req, b) },
      expires_at: Math.floor(now() / 1000) + 3 * 3600,
      after_expiration: { recovery: { enabled: true, allow_promotion_codes: false } },
      locale: "pl",
      custom_text: { submit: { message: "Dostęp włączy się od razu po płatności. Masz 14 dni na zwrot pieniędzy bez podawania przyczyny (regulamin: liczenasetke.pl/regulamin.html)." } }
    };
    if (s && s.user.stripe_customer) body.customer = s.user.stripe_customer; else if (s) body.customer_email = s.user.email;
    if (plan === "exam" && !(s && s.user.stripe_customer)) body.customer_creation = "always";
    const meta = { metadata: { user_id: s ? String(s.user.id) : undefined } };
    if (plan === "exam") body.payment_intent_data = meta; else body.subscription_data = meta;
    // zgoda na wiadomości (np. jedno przypomnienie o niedokończonej płatności); regulamin: gdy jest ustawiony w Stripe
    body.consent_collection = { promotions: setting("drop_promotions") ? undefined : "auto", terms_of_service: STRIPE_TOS ? "required" : undefined };
    if (!body.consent_collection.promotions && !body.consent_collection.terms_of_service) delete body.consent_collection;
    // „Managed Payments” (dodatkowe 3,5% prowizji) bywa domyślnie włączone na koncie: wyłączamy je dla naszych płatności
    if (setting("mp_param") !== "brak") body.managed_payments = { enabled: false };
    // wygląd strony płatności: logo, żółte przyciski, kremowe tło (jeśli Stripe odrzuci, płatność otwiera się w standardowym wyglądzie)
    let brand = BASE_URL.startsWith("https://") && setting("branding") !== "brak" ? { branding_settings: {
      display_name: "Liczę na Setkę", background_color: "#fbf6ea", button_color: "#ffc233", border_style: "rounded", font_family: "nunito",
      logo: { type: "url", url: BASE_URL + "/logo-stripe.png" }, icon: { type: "url", url: BASE_URL + "/ikona-512.png" } } } : {};
    // Dodatki (zgoda na wiadomości, wyłączenie Managed Payments, wygląd) są opcjonalne: jeśli Stripe odrzuci któryś z nich,
    // zapamiętujemy to i próbujemy bez niego, żeby płatność zawsze się otworzyła.
    let lastErr;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        const cs = await stripe("POST", "/v1/checkout/sessions", { ...body, ...brand });
        if (brand.branding_settings) setSetting("branding", "ok");
        if (!skipStats(req)) stripeMetaEvent("checkout_start", { metadata: body.metadata }, { plan });
        return json(res, 200, { url: cs.url });
      } catch (e) {
        lastErr = e; const msg = e.message || "";
        log("Stripe: płatność odrzucona, próba bez dodatku:", msg.slice(0, 200));
        if (/consent_collection/.test(msg) && body.consent_collection && body.consent_collection.promotions) {
          setSetting("drop_promotions", "1"); delete body.consent_collection.promotions;
          if (!body.consent_collection.terms_of_service) delete body.consent_collection;
        } else if (/consent_collection/.test(msg) && body.consent_collection) {
          delete body.consent_collection;
        } else if (/managed_payments/.test(msg) && body.managed_payments) {
          setSetting("mp_param", "brak"); delete body.managed_payments;
        } else if (brand.branding_settings) {
          setSetting("branding", "brak"); setSetting("branding_error", msg.slice(0, 300)); brand = {};
        } else if (body.custom_text) {
          delete body.custom_text;
        } else break;
      }
    }
    log(lastErr && lastErr.message); setSetting("checkout_error", String(lastErr && lastErr.message).slice(0, 300));
    return json(res, 502, { error: "Nie udało się otworzyć płatności. Spróbuj ponownie za chwilę." });
  }
  // powrót z płatności bez logowania: logujemy rodzica na konto założone z e-maila podanego w Stripe
  if (p === "/api/checkout/claim" && m === "POST") {
    const b = await jsonBody(req), cs = String(b.cs || "");
    if (!/^cs_[A-Za-z0-9_]+$/.test(cs)) return json(res, 400, { error: "zły identyfikator" });
    if (limited("cl:" + ip(req), 20, 3600000)) return json(res, 429, { error: "Za dużo prób." });
    if (q("SELECT 1 FROM claims WHERE cs = ?").get(cs)) return json(res, 409, { error: "Ta płatność była już użyta do logowania. Zaloguj się przez Google albo kodem z maila." });
    let o; try { o = await stripe("GET", "/v1/checkout/sessions/" + cs); } catch (e) { return json(res, 404, { error: "Nie znaleziono płatności." }); }
    if (o.status !== "complete" || o.created * 1000 < now() - 3 * 3600000) return json(res, 400, { error: "Płatność nie jest zakończona." });
    const u = userForSession(o);
    if (!u) return json(res, 400, { error: "Brak adresu e-mail w płatności." });
    q("INSERT INTO claims (cs, at) VALUES (?, ?)").run(cs, now());
    startSession(res, u.id, "parent");
    return json(res, 200, { ok: true });
  }
  // wypis z cotygodniowego podsumowania jednym kliknięciem z maila
  if (p === "/api/weekly/off" && m === "GET") {
    const uid = Number(url.searchParams.get("u")), t = url.searchParams.get("t") || "";
    if (!uid || t !== unsubToken(uid)) return send(res, 400, "Nieprawidłowy link.", "text/plain; charset=utf-8");
    q("UPDATE users SET weekly_opt = 0 WHERE id = ?").run(uid);
    return send(res, 302, "", "text/plain", { Location: "/konto.html?podsumowanie=wylaczone" });
  }
  if (p === "/api/dev/backup" && m === "POST" && DEV) return json(res, 200, { ok: await sendBackup() });
  if (p === "/api/dev/weekly" && m === "POST" && DEV) { const n = await sendWeekly(true); return json(res, 200, { sent: n }); }

  // wszystko dalej wymaga zalogowania
  const s = session(req);
  if (!s) return json(res, 401, { error: "Zaloguj się." });

  // --- opinie: zapis w bazie i kopia na skrzynkę supportu (publikujemy ręcznie, tylko za zgodą autora) ---
  if (p === "/api/reviews" && m === "POST") {
    const b = await jsonBody(req);
    const rating = Number(b.rating), text = String(b.text || "").trim().slice(0, 3000);
    const who = String(b.who || "").trim().slice(0, 60), name = String(b.name || "").trim().slice(0, 40), city = String(b.city || "").trim().slice(0, 40);
    if (!(rating >= 1 && rating <= 5 && Number.isInteger(rating))) return json(res, 400, { error: "Wybierz ocenę od 1 do 5 gwiazdek." });
    if (text.length < 10) return json(res, 400, { error: "Napisz kilka słów opinii (co najmniej 10 znaków)." });
    if (b.consent && !name) return json(res, 400, { error: "Do publikacji podaj imię i pierwszą literę nazwiska." });
    if (limited("rv:" + s.user.id, 5, DAY)) return json(res, 429, { error: "Dziękujemy, dziś już wysłano kilka opinii. Spróbuj jutro." });
    q("INSERT INTO reviews (user_id, student_id, rating, who, name, city, text, consent, at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
      .run(s.user.id, s.role === "student" ? s.student_id : null, rating, who, name, city, text, b.consent ? 1 : 0, now());
    sendMail(REPLY_TO, `Nowa opinia: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}`, mailWrap(`<p><b>Ocena:</b> ${rating}/5<br><b>Kto:</b> ${esc(who)} (${s.role === "student" ? "konto ucznia" : "konto rodzica"}, ${esc(s.user.email)})<br>
      <b>Podpis:</b> ${esc(name || "brak")}${city ? ", " + esc(city) : ""}<br><b>Zgoda na publikację:</b> ${b.consent ? "tak" : "nie"}</p>
      <p style="white-space:pre-wrap;background:#fbf6ea;padding:12px 14px;border-radius:10px">${esc(text)}</p>`)).catch(() => {});
    return json(res, 200, { ok: true });
  }

  // --- postępy ucznia ---
  if (p === "/api/progress" && m === "GET") {
    const row = s.learner && q("SELECT data, updated_at FROM progress WHERE student_id = ?").get(s.learner);
    return json(res, 200, row ? { data: JSON.parse(row.data), at: row.updated_at } : { data: null, at: 0 });
  }
  if (p === "/api/progress" && m === "PUT") {
    const raw = await readBody(req, 2_000_000);
    let b; try { b = JSON.parse(raw); } catch (e) { return json(res, 400, { error: "zły format" }); }
    if (!s.learner || !b || typeof b.data !== "object") return json(res, 400, { error: "zły format" });
    const at = Math.min(Number(b.at) || now(), now());
    q("INSERT INTO progress (student_id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(student_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at")
      .run(s.learner, JSON.stringify(b.data), at);
    if (b.active) q("INSERT OR IGNORE INTO activity (student_id, day) VALUES (?, ?)").run(s.learner, warsawDay());
    return json(res, 200, { ok: true, at });
  }

  if (s.role !== "parent") return json(res, 403, { error: "Tylko dla rodzica." });

  // --- uczniowie ---
  if (p === "/api/students" && m === "POST") {
    const b = await jsonBody(req);
    if (students(s.user.id).length >= 5) return json(res, 400, { error: "Najwyżej 5 loginów na konto." });
    return json(res, 200, createStudent(s.user.id, String(b.name || "").trim()));
  }
  let mm;
  if ((mm = p.match(/^\/api\/students\/(\d+)(\/pin|\/summary)?$/))) {
    const st = q("SELECT * FROM students WHERE id = ? AND user_id = ?").get(Number(mm[1]), s.user.id);
    if (!st) return json(res, 404, { error: "Nie ma takiego ucznia." });
    if (mm[2] === "/pin" && m === "POST") {
      const pin = String(crypto.randomInt(0, 1000000)).padStart(6, "0");
      q("UPDATE students SET pin_hash = ?, pin_shown = 1 WHERE id = ?").run(hashPin(pin), st.id);
      q("DELETE FROM sessions WHERE student_id = ?").run(st.id);
      return json(res, 200, { login: st.login, pin });
    }
    if (mm[2] === "/summary" && m === "GET") {
      const row = q("SELECT data, updated_at FROM progress WHERE student_id = ?").get(st.id);
      const days = q("SELECT day FROM activity WHERE student_id = ? AND day >= ? ORDER BY day").all(st.id, warsawDay(now() - 30 * DAY)).map(r => r.day);
      return json(res, 200, { data: row ? JSON.parse(row.data) : null, at: row ? row.updated_at : 0, days, today: warsawDay() });
    }
    if (!mm[2] && m === "PATCH") {
      const b = await jsonBody(req);
      q("UPDATE students SET name = ? WHERE id = ?").run(String(b.name || "").trim().slice(0, 40), st.id);
      return json(res, 200, { ok: true });
    }
    if (!mm[2] && m === "DELETE") {
      if (students(s.user.id).length <= 1) return json(res, 400, { error: "Konto musi mieć co najmniej jeden login ucznia." });
      q("DELETE FROM students WHERE id = ?").run(st.id);
      q("DELETE FROM progress WHERE student_id = ?").run(st.id);
      q("DELETE FROM activity WHERE student_id = ?").run(st.id);
      q("DELETE FROM sessions WHERE student_id = ?").run(st.id);
      return json(res, 200, { ok: true });
    }
  }

  if (p === "/api/portal" && m === "POST") {
    if (!s.user.stripe_customer) return json(res, 400, { error: "Brak subskrypcji do zarządzania." });
    try {
      const pc = setting("portal_" + (/_live_/.test(STRIPE_KEY) ? "live" : "test"));
      const ps = await stripe("POST", "/v1/billing_portal/sessions", { customer: s.user.stripe_customer, return_url: `${BASE_URL}/konto.html`, locale: "pl", configuration: pc || undefined });
      return json(res, 200, { url: ps.url });
    } catch (e) { log(e.message); return json(res, 502, { error: "Nie udało się otworzyć ustawień subskrypcji." }); }
  }

  if (p === "/api/account" && m === "PATCH") {
    const b = await jsonBody(req);
    if (typeof b.weekly === "boolean") q("UPDATE users SET weekly_opt = ? WHERE id = ?").run(b.weekly ? 1 : 0, s.user.id);
    return json(res, 200, { ok: true });
  }
  // --- usunięcie konta (RODO) ---
  if (p === "/api/account" && m === "DELETE") {
    const b = await jsonBody(req);
    if (b.confirm !== "USUŃ") return json(res, 400, { error: "Wpisz USUŃ, aby potwierdzić." });
    if (access(s.user).plan === "monthly" && !s.user.sub_cancel_at_end) return json(res, 400, { error: "Najpierw wyłącz subskrypcję w ustawieniach płatności." });
    const ids = students(s.user.id).map(x => x.id);
    for (const id of ids) { q("DELETE FROM progress WHERE student_id = ?").run(id); q("DELETE FROM activity WHERE student_id = ?").run(id); }
    q("DELETE FROM students WHERE user_id = ?").run(s.user.id);
    q("DELETE FROM reviews WHERE user_id = ?").run(s.user.id);
    q("DELETE FROM sessions WHERE user_id = ?").run(s.user.id);
    // dane o płatnościach zostają (obowiązek księgowy), bez adresu e-mail
    q("UPDATE users SET email = ?, google_sub = NULL WHERE id = ?").run("usuniete-" + s.user.id + "@" + "brak", s.user.id);
    endSession(req, res);
    return json(res, 200, { ok: true });
  }

  return json(res, 404, { error: "Nie ma takiego adresu." });
}

const server = http.createServer(async (req, res) => {
  try {
    // nagłówki bezpieczeństwa dla każdej odpowiedzi: tylko HTTPS, bez osadzania strony w cudzych ramkach, bez kamery i lokalizacji
    if (SECURE) res.setHeader("Strict-Transport-Security", "max-age=31536000");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    // jeden adres strony: www i adres techniczny Railway przekierowują na BASE_URL (poza webhookiem Stripe)
    const host = (req.headers.host || "").toLowerCase(), want = new URL(BASE_URL).host;
    if (SECURE && host && host !== want && !req.url.startsWith("/api/stripe/") && (host === "www." + want || host.endsWith(".up.railway.app")))
      return send(res, 301, "", "text/plain", { Location: BASE_URL + req.url });
    const url = new URL(req.url, BASE_URL);
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);
    if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Metoda niedozwolona", "text/plain; charset=utf-8");
    return serveStatic(req, res, url.pathname, url.searchParams.has("v"));
  } catch (e) {
    log("błąd", e && e.stack || e);
    if (!res.headersSent) json(res, 500, { error: "Coś poszło nie tak. Spróbuj ponownie." });
  }
});

// ---------- cotygodniowe podsumowanie nauki (niedziela wieczorem) ----------
function secret() {
  let v = ENV.APP_SECRET || setting("app_secret");
  if (!v) { v = crypto.randomBytes(32).toString("hex"); setSetting("app_secret", v); }
  return v;
}
const unsubToken = uid => crypto.createHmac("sha256", secret()).update("weekly:" + uid).digest("hex").slice(0, 32);
function scores(data) {
  const t = (data && data.t) || {}, out = {};
  for (const x of TOPICS) {
    const S = t[x.slug]; if (!S) continue;
    const max = (S.meta && S.meta.testMax) || x.pts, sc = S.test && S.test.done ? S.test.score : S.lastScore;
    if (sc != null) out[x.slug] = { score: sc, max, title: x.title };
  }
  return out;
}
function weeklyHtml(u) {
  const weekAgo = warsawDay(now() - 6 * DAY);
  const parts = students(u.id).map(st => {
    const row = q("SELECT data FROM progress WHERE student_id = ?").get(st.id);
    const data = row ? JSON.parse(row.data) : null, sc = scores(data);
    const snapRow = q("SELECT data FROM weekly_snap WHERE student_id = ?").get(st.id), snap = snapRow ? JSON.parse(snapRow.data) : {};
    q("INSERT INTO weekly_snap (student_id, data, at) VALUES (?, ?, ?) ON CONFLICT(student_id) DO UPDATE SET data = excluded.data, at = excluded.at").run(st.id, JSON.stringify(sc), now());
    const days = q("SELECT COUNT(*) AS n FROM activity WHERE student_id = ? AND day >= ?").get(st.id, weekAgo).n;
    const fresh = Object.entries(sc).filter(([k, v]) => !snap[k] || snap[k].score !== v.score);
    const weak = Object.values(sc).filter(v => v.score / v.max < 0.8).sort((a, b) => a.score / a.max - b.score / b.max).slice(0, 3);
    const name = esc(st.name || "Twoje dziecko");
    return `<div style="border:2px solid #16181d;border-radius:14px;padding:14px 16px;margin:12px 0;background:#fffdf8">
      <p style="margin:0 0 6px;font-size:18px"><b>${name}</b></p>
      <p style="margin:0 0 8px">${days ? `Nauka w tym tygodniu: <b>${days} ${days === 1 ? "dzień" : "dni"}</b>.` : "W tym tygodniu nie było nauki. Wystarczą 2–3 krótkie sesje w tygodniu, żeby zdążyć przed egzaminem."}</p>
      ${fresh.length ? `<p style="margin:0 0 4px"><b>Nowe wyniki testów:</b></p><ul style="margin:0 0 8px;padding-left:20px">${fresh.map(([, v]) => `<li>${esc(v.title)}: <b>${v.score} / ${v.max} pkt</b></li>`).join("")}</ul>` : ""}
      ${weak.length ? `<p style="margin:0 0 4px"><b>Warto powtórzyć:</b> ${weak.map(v => esc(v.title)).join(", ")}.</p>` : ""}
    </div>`;
  }).join("");
  return mailWrap(`<h2 style="margin:0 0 6px">Podsumowanie tygodnia</h2>
    <p style="margin:0 0 6px">Oto, jak minął tydzień w kursie Liczę na Setkę.</p>${parts}
    <p><a href="${BASE_URL}/konto.html" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Zobacz szczegóły w panelu rodzica</a></p>
    <p style="color:#5e5a51;font-size:13px">Dostajesz to podsumowanie raz w tygodniu jako posiadacz dostępu do kursu. <a href="${BASE_URL}/api/weekly/off?u=${u.id}&t=${unsubToken(u.id)}">Wyłącz podsumowania</a> (możesz je też włączyć i wyłączyć w panelu rodzica).</p>`);
}
async function sendWeekly(force) {
  let n = 0;
  for (const u of q("SELECT * FROM users WHERE weekly_opt = 1 AND email NOT LIKE 'usuniete-%'").all()) {
    if (!access(u).active) continue;
    try { if (await sendMail(u.email, "Podsumowanie tygodnia: nauka matematyki", weeklyHtml(u))) n++; } catch (e) { log("podsumowanie:", e.message); }
    await new Promise(r => setTimeout(r, force ? 0 : 600));   // limit wysyłki usługi e-mail
  }
  log("cotygodniowe podsumowania wysłane:", n);
  return n;
}
setInterval(() => {
  const d = new Date(), wd = d.toLocaleDateString("en-US", { timeZone: "Europe/Warsaw", weekday: "short" });
  const hr = Number(d.toLocaleString("en-US", { timeZone: "Europe/Warsaw", hour: "2-digit", hour12: false }));
  const key = "weekly_" + warsawDay();
  if (wd === "Sun" && hr >= 18 && !setting(key)) { setSetting(key, "1"); sendWeekly(false); }
}, 15 * 60000).unref();

// codzienna kopia bazy na skrzynkę supportu (Railway w darmowym planie nie robi kopii wolumenu).
// VACUUM INTO daje spójny plik nawet w trakcie pracy serwera; kopia jest spakowana gzipem.
async function sendBackup() {
  const tmp = path.join(path.dirname(DB_PATH), "kopia-" + Date.now() + ".db");
  try {
    db.exec(`VACUUM INTO '${tmp.replace(/'/g, "''")}'`);
    const gz = require("node:zlib").gzipSync(fs.readFileSync(tmp));
    const n = q("SELECT COUNT(*) AS n FROM users").get().n, p = q("SELECT COUNT(*) AS n FROM payments").get().n;
    const ok = await sendMail(BACKUP_TO, `Kopia bazy ${warsawDay()} (konta: ${n}, płatności: ${p})`, mailWrap(`<p>Automatyczna kopia bazy kursu z ${warsawDay()}.</p>
      <p>Konta rodziców: <b>${n}</b>, zapisane płatności: <b>${p}</b>.</p>
      <p style="color:#5e5a51;font-size:13px">Plik zawiera dane osobowe (adresy e-mail, postępy). Nie przekazuj go dalej. W razie awarii odeślij go, żeby odtworzyć konta.</p>`),
      [{ filename: `liczenasetke-baza-${warsawDay()}.db.gz`, content: gz.toString("base64") }]);
    log("kopia bazy wysłana:", ok, gz.length, "B");
    return ok;
  } catch (e) { log("kopia bazy:", e.message); return false; }
  finally { try { fs.unlinkSync(tmp); } catch (e) {} }
}
setInterval(() => {
  const hr = Number(new Date().toLocaleString("en-US", { timeZone: "Europe/Warsaw", hour: "2-digit", hour12: false }));
  const key = "backup_" + warsawDay();
  if (hr >= 4 && RESEND_KEY && !setting(key)) { setSetting(key, "1"); sendBackup(); }
}, 15 * 60000).unref();

// sprzątanie: stare sesje i linki
setInterval(() => {
  q("DELETE FROM sessions WHERE expires < ?").run(now());
  q("DELETE FROM magic WHERE expires < ?").run(now() - DAY);
  q("DELETE FROM events WHERE at < ?").run(now() - 400 * DAY);   // statystyki trzymamy ok. 13 miesięcy
}, 3600000).unref();

// po każdym wdrożeniu jeszcze raz próbujemy wyglądu płatności (mógł zostać poprawiony)
try { q("DELETE FROM settings WHERE key IN ('branding', 'checkout_error', 'branding_error', 'mp_param', 'drop_promotions')").run(); } catch (e) {}
stripeSetup();
server.listen(PORT, () => log(`Serwer działa: ${BASE_URL} (port ${PORT}, pliki: ${PUBLIC}, baza: ${DB_PATH})`));
module.exports = { server };
