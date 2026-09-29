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
const STRIPE_WH = ENV.STRIPE_WEBHOOK_SECRET || "";
const PRICE = { exam: ENV.STRIPE_PRICE_EXAM || "", monthly: ENV.STRIPE_PRICE_MONTHLY || "" };
const STRIPE_API = ENV.STRIPE_API || "https://api.stripe.com";
const STRIPE_TOS = ENV.STRIPE_TOS === "1";          // zgoda na regulamin w Stripe Checkout (wymaga adresu regulaminu w ustawieniach Stripe)
const GOOGLE_ID = ENV.GOOGLE_CLIENT_ID || "";
const GOOGLE_TOKENINFO = ENV.GOOGLE_TOKENINFO || "https://oauth2.googleapis.com/tokeninfo";
const RESEND_KEY = ENV.RESEND_API_KEY || "";
const RESEND_API = ENV.RESEND_API || "https://api.resend.com";
const MAIL_FROM = ENV.MAIL_FROM || "Liczę na Setkę <kontakt@liczenasetke.pl>";
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
CREATE TABLE IF NOT EXISTS payments (
  id INTEGER PRIMARY KEY, user_id INTEGER, kind TEXT, stripe_id TEXT, amount INTEGER, at INTEGER NOT NULL);
`);
const q = sql => db.prepare(sql);

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
function students(userId) { return q("SELECT id, login, name FROM students WHERE user_id = ? ORDER BY id").all(userId); }
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
async function sendMail(to, subject, html) {
  if (!RESEND_KEY) { log("[e-mail bez wysyłki]", to, subject); return true; }
  const r = await fetch(RESEND_API + "/emails", {
    method: "POST", headers: { Authorization: "Bearer " + RESEND_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ from: MAIL_FROM, to: [to], subject, html })
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
async function onCheckoutDone(s) {
  const userId = Number(s.client_reference_id || (s.metadata && s.metadata.user_id));
  const u = q("SELECT * FROM users WHERE id = ?").get(userId);
  if (!u) { log("płatność bez konta", s.id); return; }
  if (s.customer) q("UPDATE users SET stripe_customer = ? WHERE id = ?").run(s.customer, u.id);
  if (s.mode === "payment") {
    if (s.payment_status !== "paid") return;   // płatność odroczona: czekamy na async_payment_succeeded
    q("UPDATE users SET exam_until = ?, revoked_at = NULL WHERE id = ?").run(EXAM_END, u.id);
    q("INSERT INTO payments (user_id, kind, stripe_id, amount, at) VALUES (?, 'exam', ?, ?, ?)").run(u.id, s.payment_intent || s.id, s.amount_total || 0, now());
  } else if (s.mode === "subscription" && s.subscription) {
    const sub = typeof s.subscription === "object" ? s.subscription : await stripe("GET", "/v1/subscriptions/" + s.subscription);
    applySubscription(sub, u.id);
    q("INSERT INTO payments (user_id, kind, stripe_id, amount, at) VALUES (?, 'monthly', ?, ?, ?)").run(u.id, sub.id, s.amount_total || 0, now());
  }
  const plan = s.mode === "payment" ? "„Do dnia egzaminu” (dostęp do 11 maja 2027 r.)" : "„Miesięcznie” (odnawiany co miesiąc, rezygnacja w panelu rodzica)";
  await sendMail(u.email, "Dostęp do kursu Liczę na Setkę jest aktywny", mailWrap(`
    <h2 style="margin:0 0 12px">Dziękujemy! Dostęp jest aktywny.</h2>
    <p>Plan: <b>${plan}</b>.</p>
    <p>Dziecko może zacząć od testu startowego: pokaże, od którego tematu zacząć. Login i PIN dla dziecka ustawisz w panelu rodzica.</p>
    <p><a href="${BASE_URL}/konto.html" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Przejdź do panelu rodzica</a></p>
    <p>Masz 14 dni od zakupu na zwrot pieniędzy bez podawania przyczyny: wystarczy odpowiedzieć na tę wiadomość.
    Regulamin kursu: <a href="${BASE_URL}/regulamin.html">${BASE_URL}/regulamin.html</a>.</p>`));
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
const ip = req => (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket.remoteAddress;

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8", ".ico": "image/x-icon", ".json": "application/json" };

function serveStatic(req, res, pathname) {
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
    const cache = ext === ".html" || base.startsWith("dane-") ? "no-cache" : "public, max-age=3600";
    res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream", "Cache-Control": base.startsWith("dane-") && !FREE.has(base) ? "private, no-store" : cache,
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
    return json(res, 200, { googleClientId: GOOGLE_ID, payments: !!(STRIPE_KEY && PRICE.exam), email: true });

  if (p === "/api/me" && m === "GET") {
    const s = session(req);
    if (!s) return json(res, 200, { role: null });
    const st = students(s.user.id), pr = s.learner && q("SELECT updated_at FROM progress WHERE student_id = ?").get(s.learner);
    return json(res, 200, {
      role: s.role, email: s.role === "parent" ? s.user.email : undefined,
      student: s.role === "student" ? st.find(x => x.id === s.student_id) : undefined,
      students: s.role === "parent" ? st : undefined, learner: s.learner,
      access: access(s.user), progressAt: pr ? pr.updated_at : 0
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
    const t = token();
    q("INSERT INTO magic (token_hash, email, next, expires) VALUES (?, ?, ?, ?)").run(sha(t), email, safeNext(b.next), now() + 30 * 60000);
    const link = `${BASE_URL}/api/auth/link?t=${t}`;
    const sent = await sendMail(email, "Twój link do logowania w kursie Liczę na Setkę", mailWrap(`
      <h2 style="margin:0 0 12px">Zaloguj się jednym kliknięciem</h2>
      <p><a href="${link}" style="display:inline-block;background:#ffc233;color:#16181d;border:2px solid #16181d;border-radius:10px;padding:10px 18px;font-weight:bold;text-decoration:none">Zaloguj się do kursu</a></p>
      <p>Link działa przez 30 minut i tylko raz. Jeśli nie prosisz o logowanie, po prostu zignoruj tę wiadomość.</p>`));
    if (!sent) return json(res, 502, { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę." });
    return json(res, 200, DEV ? { ok: true, devLink: link } : { ok: true });
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

  // wszystko dalej wymaga zalogowania
  const s = session(req);
  if (!s) return json(res, 401, { error: "Zaloguj się." });

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
      q("UPDATE students SET pin_hash = ? WHERE id = ?").run(hashPin(pin), st.id);
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

  // --- płatności ---
  if (p === "/api/checkout" && m === "POST") {
    const b = await jsonBody(req), plan = b.plan === "monthly" ? "monthly" : "exam";
    if (!STRIPE_KEY || !PRICE[plan]) return json(res, 503, { error: "Płatności nie są jeszcze włączone." });
    if (access(s.user).active) return json(res, 409, { error: "Masz już aktywny dostęp.", url: "/konto.html" });
    const body = {
      mode: plan === "exam" ? "payment" : "subscription",
      line_items: { 0: { price: PRICE[plan], quantity: 1 } },
      success_url: `${BASE_URL}/konto.html?platnosc=ok`,
      cancel_url: `${BASE_URL}/cennik.html?platnosc=anulowana`,
      client_reference_id: String(s.user.id),
      metadata: { user_id: String(s.user.id), plan },
      locale: "pl",
      custom_text: { submit: { message: "Dostęp włączy się od razu po płatności. Masz 14 dni na zwrot pieniędzy bez podawania przyczyny (regulamin: liczenasetke.pl/regulamin.html)." } }
    };
    if (s.user.stripe_customer) body.customer = s.user.stripe_customer; else body.customer_email = s.user.email;
    if (plan === "exam" && !s.user.stripe_customer) body.customer_creation = "always";
    if (plan === "exam") body.payment_intent_data = { metadata: { user_id: String(s.user.id) } };
    else body.subscription_data = { metadata: { user_id: String(s.user.id) } };
    if (STRIPE_TOS) body.consent_collection = { terms_of_service: "required" };
    try {
      const cs = await stripe("POST", "/v1/checkout/sessions", body);
      return json(res, 200, { url: cs.url });
    } catch (e) { log(e.message); return json(res, 502, { error: "Nie udało się otworzyć płatności. Spróbuj ponownie za chwilę." }); }
  }
  if (p === "/api/portal" && m === "POST") {
    if (!s.user.stripe_customer) return json(res, 400, { error: "Brak subskrypcji do zarządzania." });
    try {
      const ps = await stripe("POST", "/v1/billing_portal/sessions", { customer: s.user.stripe_customer, return_url: `${BASE_URL}/konto.html`, locale: "pl" });
      return json(res, 200, { url: ps.url });
    } catch (e) { log(e.message); return json(res, 502, { error: "Nie udało się otworzyć ustawień subskrypcji." }); }
  }

  // --- usunięcie konta (RODO) ---
  if (p === "/api/account" && m === "DELETE") {
    const b = await jsonBody(req);
    if (b.confirm !== "USUŃ") return json(res, 400, { error: "Wpisz USUŃ, aby potwierdzić." });
    if (access(s.user).plan === "monthly" && !s.user.sub_cancel_at_end) return json(res, 400, { error: "Najpierw wyłącz subskrypcję w ustawieniach płatności." });
    const ids = students(s.user.id).map(x => x.id);
    for (const id of ids) { q("DELETE FROM progress WHERE student_id = ?").run(id); q("DELETE FROM activity WHERE student_id = ?").run(id); }
    q("DELETE FROM students WHERE user_id = ?").run(s.user.id);
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
    // jeden adres strony: www i adres techniczny Railway przekierowują na BASE_URL (poza webhookiem Stripe)
    const host = (req.headers.host || "").toLowerCase(), want = new URL(BASE_URL).host;
    if (SECURE && host && host !== want && !req.url.startsWith("/api/stripe/") && (host === "www." + want || host.endsWith(".up.railway.app")))
      return send(res, 301, "", "text/plain", { Location: BASE_URL + req.url });
    const url = new URL(req.url, BASE_URL);
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);
    if (req.method !== "GET" && req.method !== "HEAD") return send(res, 405, "Metoda niedozwolona", "text/plain; charset=utf-8");
    return serveStatic(req, res, url.pathname);
  } catch (e) {
    log("błąd", e && e.stack || e);
    if (!res.headersSent) json(res, 500, { error: "Coś poszło nie tak. Spróbuj ponownie." });
  }
});

// sprzątanie: stare sesje i linki
setInterval(() => {
  q("DELETE FROM sessions WHERE expires < ?").run(now());
  q("DELETE FROM magic WHERE expires < ?").run(now() - DAY);
}, 3600000).unref();

server.listen(PORT, () => log(`Serwer działa: ${BASE_URL} (port ${PORT}, pliki: ${PUBLIC}, baza: ${DB_PATH})`));
module.exports = { server };
