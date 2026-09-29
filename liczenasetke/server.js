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
const META_PIXEL_ID = ENV.META_PIXEL_ID || "1051003501090987";   // numer Piksela Meta jest publiczny (widać go w kodzie każdej strony z pikselem)

// ---------- narzędzia ----------
const sha = s => crypto.createHash("sha256").update(s).digest("hex");
const token = () => crypto.randomBytes(32).toString("base64url");
const now = () => Date.now();
function hashPin(pin, salt = crypto.randomBytes(16).toString("hex")) {
  return salt + ":" + crypto.scryptSync(String(pin), salt, 32).toString("hex");
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
  const exam = !rev && u.exam_until && u.exam_until > t;
  const subOk = !rev && ["active", "trialing", "past_due"].includes(u.sub_status) && (u.sub_period_end || 0) + 3 * DAY > t;
  return {
    active: !!(exam || subOk),
    plan: exam ? "exam" : subOk ? "monthly" : null,
    until: exam ? u.exam_until : subOk ? u.sub_period_end : null,
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
    // przejście z planu miesięcznego na „do egzaminu”: subskrypcja kończy się z opłaconym miesiącem, bez kolejnych płatności
    if (hadSub) try {
      const sub = await stripe("POST", "/v1/subscriptions/" + u.sub_id, { cancel_at_period_end: true });
      applySubscription(sub, u.id); log("przejście na plan do egzaminu, subskrypcja wygaśnie", u.id);
    } catch (e) { log("nie udało się wyłączyć subskrypcji po przejściu:", e.message); }
  } else if (s.mode === "subscription" && s.subscription) {
    const sub = typeof s.subscription === "object" ? s.subscription : await stripe("GET", "/v1/subscriptions/" + s.subscription);
    applySubscription(sub, u.id);
    q("INSERT INTO payments (user_id, kind, stripe_id, amount, at) VALUES (?, 'monthly', ?, ?, ?)").run(u.id, sub.id, s.amount_total || 0, now());
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
      if (o.amount_refunded < o.amount) break;
      const u = q("SELECT * FROM users WHERE stripe_customer = ?").get(o.customer);
      if (u) { q("UPDATE users SET revoked_at = ?, exam_until = NULL WHERE id = ?").run(now(), u.id); log("zwrot, dostęp wyłączony", u.id); }
      break;
    }
  }
}

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
      metadata: { user_id: s ? String(s.user.id) : undefined, plan },
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
    body.consent_collection = { promotions: "auto", terms_of_service: STRIPE_TOS ? "required" : undefined };
    // „Managed Payments” (dodatkowe 3,5% prowizji) bywa domyślnie włączone na koncie: wyłączamy je dla naszych płatności
    if (setting("mp_param") !== "brak") body.managed_payments = { enabled: false };
    // wygląd strony płatności: logo, żółte przyciski, kremowe tło (jeśli Stripe odrzuci, płatność otwiera się w standardowym wyglądzie)
    const brand = BASE_URL.startsWith("https://") && setting("branding") !== "brak" ? { branding_settings: {
      display_name: "Liczę na Setkę", background_color: "#fbf6ea", button_color: "#ffc233", border_style: "rounded", font_family: "nunito",
      logo: { type: "url", url: BASE_URL + "/logo-stripe.png" }, icon: { type: "url", url: BASE_URL + "/ikona-512.png" } } } : {};
    try {
      let cs;
      try { cs = await stripe("POST", "/v1/checkout/sessions", { ...body, ...brand }); if (brand.branding_settings) setSetting("branding", "ok"); }
      catch (e) {
        if (/managed_payments/.test(e.message) && /unknown parameter/i.test(e.message)) {
          // starsza wersja API nie zna tego parametru: próbujemy bez niego
          setSetting("mp_param", "brak"); delete body.managed_payments;
          try { cs = await stripe("POST", "/v1/checkout/sessions", { ...body, ...brand }); if (brand.branding_settings) setSetting("branding", "ok"); return json(res, 200, { url: cs.url }); }
          catch (e2) { e = e2; }
        }
        if (!brand.branding_settings) throw e;
        log("Stripe: wygląd płatności odrzucony:", e.message); setSetting("branding", "brak"); setSetting("branding_error", e.message.slice(0, 300));
        cs = await stripe("POST", "/v1/checkout/sessions", body);
      }
      return json(res, 200, { url: cs.url });
    } catch (e) { log(e.message); setSetting("checkout_error", e.message.slice(0, 300)); return json(res, 502, { error: "Nie udało się otworzyć płatności. Spróbuj ponownie za chwilę." }); }
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
}, 3600000).unref();

// po każdym wdrożeniu jeszcze raz próbujemy wyglądu płatności (mógł zostać poprawiony)
try { q("DELETE FROM settings WHERE key IN ('branding', 'checkout_error', 'branding_error', 'mp_param')").run(); } catch (e) {}
stripeSetup();
server.listen(PORT, () => log(`Serwer działa: ${BASE_URL} (port ${PORT}, pliki: ${PUBLIC}, baza: ${DB_PATH})`));
module.exports = { server };
