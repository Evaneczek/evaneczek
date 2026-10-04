/* Liczę na Setkę · wspólny skrypt: nagłówek, stopka, zapis postępów (osobno dla każdego tematu) */
(function () {
  "use strict";

  // Każda strona i podstrona zaczyna się od góry: przeglądarka nie przywraca miejsca, w którym się było
  // (wyjątek: link do konkretnej sekcji, np. cennik.html#pytania)
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const toTop = () => { if (!location.hash) window.scrollTo({ top: 0, left: 0, behavior: "instant" }); };
  toTop();
  window.addEventListener("DOMContentLoaded", toTop);
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", e => { if (e.persisted) toTop(); });

  const SAMPLE = "procenty"; // przykładowa lekcja dostępna bez konta
  // „Przykładowa lekcja” prowadzi do programu kursu z podświetlonym tematem, a nie prosto do lekcji
  const SAMPLE_LINK = "kurs.html?lekcja=przykladowa";

  const NAV = [
    { id: "jak", href: "jak-to-dziala.html", label: "Jak to działa" },
    { id: "lekcja", href: SAMPLE_LINK, label: "Przykładowa lekcja" },
    { id: "rodzic", href: "dla-rodzica.html", label: "Dla rodzica" },
    { id: "cennik", href: "cennik.html", label: "Cennik" }
  ];

  const LOGO = '<span class="blocks" aria-hidden="true"><i>÷</i><i>%</i><i>=</i></span><span class="brand-name">Liczę na Setkę</span>';

  // Po zakupie strona zamienia się w „Mój kurs”: bez przykładowej lekcji, cennika i informacji sprzedażowych.
  // Pamiętamy to w przeglądarce, żeby menu nie mrugało przy każdym wejściu (serwer i tak potwierdza dostęp).
  const ACC = "m8-access";
  const hasAccess = () => { try { return localStorage.getItem(ACC) === "1"; } catch (e) { return false; } };
  if (hasAccess()) {
    document.documentElement.classList.add("has-access");
    // strona główna i cennik to informacje dla kupujących: po zakupie od razu „Mój kurs”
    const hp = document.getElementById("site-header");
    const pg = hp && hp.dataset.page;
    if (pg === "home" || pg === "cennik") location.replace("kurs.html");
  }
  function renderHeader(host) {
    const page = host.dataset.page || "";
    const cur = id => id === page ? ' aria-current="page"' : "";
    if (hasAccess()) {
      host.outerHTML = `
      <header class="site-header" data-page="${page}">
        <div class="container">
          <a class="brand" href="kurs.html" aria-label="Liczę na Setkę, mój kurs">${LOGO}</a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
          <nav class="nav" id="main-nav" aria-label="Główne menu">
            <a href="kurs.html"${cur("kurs")}>Mój kurs</a>
            <a class="nav-login" href="konto.html"${cur("konto")}>Moje konto</a>
          </nav>
        </div>
      </header>`;
      return menuToggle();
    }
    const links = NAV.map(n => `<a href="${n.href}"${n.id === page ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");
    host.outerHTML = `
      <header class="site-header" data-page="${page}">
        <div class="container">
          <a class="brand" href="./" aria-label="Liczę na Setkę, strona główna">${LOGO}</a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav">Menu</button>
          <nav class="nav" id="main-nav" aria-label="Główne menu">
            ${links}
            <a class="nav-login" href="logowanie.html"${page === "login" ? ' aria-current="page"' : ""}>Zaloguj się</a>
            <a class="nav-cta" href="cennik.html">Rozpocznij</a>
          </nav>
        </div>
      </header>`;
    menuToggle();
  }
  function menuToggle() {
    const btn = document.querySelector(".menu-btn");
    const nav = document.getElementById("main-nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Zamknij" : "Menu";
    });
  }

  function renderFooter(host) {
    host.outerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="cols">
            <div>
              <a class="brand" href="./">${LOGO}</a>
              <p>Kurs matematyki do egzaminu ósmoklasisty 2027. Zadania są autorskie, a zakres materiału ułożyliśmy na podstawie wymagań egzaminacyjnych CKE.</p>
            </div>
            ${hasAccess() ? `<div>
              <h4>Mój kurs</h4>
              <ul>
                <li><a href="kurs.html">Wszystkie tematy</a></li>
                <li><a href="test-startowy.html">Test startowy</a></li>
                <li><a href="egzamin-probny-1.html">Egzamin próbny 1</a></li>
                <li><a href="egzamin-probny-2.html">Egzamin próbny 2</a></li>
                <li><a href="opinie.html">Napisz opinię</a></li>
              </ul>
            </div>
            <div>
              <h4>Konto i pomoc</h4>
              <ul>
                <li><a href="konto.html">Moje konto</a></li>
                <li><a href="regulamin.html">Regulamin</a></li>
                <li><a href="polityka-prywatnosci.html">Polityka prywatności</a></li>
              </ul>
            </div>` : `<div>
              <h4>Kurs</h4>
              <ul>
                <li><a href="jak-to-dziala.html">Jak to działa</a></li>
                <li><a href="${SAMPLE_LINK}">Przykładowa lekcja</a></li>
                <li><a href="kurs.html">Program kursu</a></li>
                <li><a href="opinie.html">Napisz opinię</a></li>
                <li><a href="cennik.html">Cennik</a></li>
              </ul>
            </div>
            <div>
              <h4>Dla rodzica</h4>
              <ul>
                <li><a href="dla-rodzica.html">Panel rodzica</a></li>
                <li><a href="cennik.html#pytania">Częste pytania</a></li>
                <li><a class="foot-login" href="logowanie.html">Zaloguj się</a></li>
                <li><a href="regulamin.html">Regulamin</a></li>
                <li><a href="polityka-prywatnosci.html">Polityka prywatności</a></li>
              </ul>
            </div>`}
          </div>
          <div class="bottom">© 2026 Liczę na Setkę (liczenasetke.pl) · Kontakt: <a data-contact href="mailto:kontakt@liczenasetke.pl">kontakt@liczenasetke.pl</a> · Egzamin ósmoklasisty z matematyki: 11 maja 2027</div>
        </div>
      </footer>`;
  }

  // ---------- Postępy (zapis w przeglądarce) ----------
  const KEY = "matma8-v3";
  let state = { t: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || "null");
    if (saved && typeof saved === "object" && saved.t) state = saved;
    else {
      // przeniesienie postępów z poprzedniej wersji (jeden temat: procenty)
      const old = JSON.parse(localStorage.getItem("matma8-v2") || "null");
      if (old && typeof old === "object") {
        state.t[SAMPLE] = {
          revealed: old.revealed || {}, learned: !!old.learned, practice: old.practice || {},
          test: old.test || null, learnTasks: old.learnTasks || {}, practiceIdx: old.practiceIdx || 0, lastScore: old.lastScore
        };
      }
    }
  } catch (e) { /* pamięć przeglądarki niedostępna: działamy bez zapisu */ }

  function findTopic(slug) {
    for (const d of (window.PROGRAM || [])) for (const t of d.topics) if (t.slug === slug) return t;
    return null;
  }

  const M8 = {
    get state() { return state; },
    save() { state._at = Date.now(); try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} if (M8.onSave) M8.onSave(); },
    topic(slug) {
      if (!state.t[slug]) state.t[slug] = { revealed: {}, practice: {}, learnTasks: {} };
      return state.t[slug];
    },
    progress(slug) {
      slug = slug || SAMPLE;
      const S = state.t[slug] || {};
      const info = findTopic(slug) || {};
      const meta = S.meta || {};
      const practice = S.practice || {};
      const learnPct = S.learned ? 100 : (S.learnPct || 0);
      const good = Object.values(practice).filter(p => p && p.correct).length;
      const tried = Object.values(practice).filter(p => p && p.checked).length;
      const score = S.test && S.test.done ? S.test.score : null;
      return {
        learnPct, good, tried, score,
        practiceTotal: meta.practiceTotal || info.tasks || 12,
        testMax: meta.testMax || info.pts || 7,
        pass: meta.pass || Math.ceil((meta.testMax || info.pts || 7) * 0.85)
      };
    },
    // Wypełnia elementy z atrybutami data-progress-text / data-progress-bar (opcjonalnie data-topic)
    paint() {
      document.querySelectorAll("[data-progress-text], [data-progress-bar]").forEach(n => {
        const p = M8.progress(n.dataset.topic);
        const kind = n.dataset.progressText || n.dataset.progressBar;
        if (n.dataset.progressText) {
          n.textContent = {
            learn: p.learnPct === 100 ? "zrobione" : p.learnPct === 0 ? "nie rozpoczęto" : p.learnPct + "%",
            practice: p.good + " / " + p.practiceTotal + " zadań",
            test: p.score === null ? "jeszcze nie" : p.score + " / " + p.testMax + " pkt"
          }[kind];
        } else {
          const v = { learn: p.learnPct, practice: Math.round(p.good / p.practiceTotal * 100), test: p.score === null ? 0 : Math.round(p.score / p.testMax * 100) }[kind];
          n.style.width = v + "%";
          n.classList.toggle("zero", v === 0);
        }
      });
    }
  };
  window.M8 = M8;

  // ---------- Statystyki strony bez cookies ----------
  // Klucz sesji i źródło wejścia (UTM, strona, z której ktoś przyszedł) są tylko w sessionStorage tej karty, nie w cookies.
  // Serwer zapisuje zdarzenie z zanonimizowanym, codziennie zmienianym identyfikatorem; bez adresu IP i bez danych osobowych.
  M8.stat = (() => {
    try {
      let sk = sessionStorage.getItem("m8-sk");
      if (!sk) { sk = Math.random().toString(36).slice(2, 12) + Date.now().toString(36); sessionStorage.setItem("m8-sk", sk); }
      let src = JSON.parse(sessionStorage.getItem("m8-src") || "null");
      if (!src) {
        const qs = new URLSearchParams(location.search), utm = {};
        ["source", "medium", "campaign", "content"].forEach(k => { const v = qs.get("utm_" + k); if (v) utm[k] = v.slice(0, 80); });
        let ref = "";
        try { const r = document.referrer ? new URL(document.referrer) : null; if (r && r.host !== location.host) ref = r.host; } catch (e) {}
        src = { utm, ref }; sessionStorage.setItem("m8-src", JSON.stringify(src));
      }
      return { sk, utm: src.utm, ref: src.ref };
    } catch (e) { return { sk: "", utm: {}, ref: "" }; }
  })();
  M8.ev = (name, meta) => {
    try {
      if (location.protocol === "file:") return;
      const body = JSON.stringify({ name, path: location.pathname, sk: M8.stat.sk, utm: M8.stat.utm, ref: M8.stat.ref, meta });
      if (navigator.sendBeacon) navigator.sendBeacon("/api/e", new Blob([body], { type: "application/json" }));
      else fetch("/api/e", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(() => {});
    } catch (e) {}
  };
  M8.ev("view");
  if (/cennik\.html$/.test(location.pathname)) M8.ev("pricing_view");
  if (/^\/(index\.html)?$|cennik\.html$/.test(location.pathname)) {
    const sent = {};
    addEventListener("scroll", () => {
      const h = document.documentElement, k = (h.scrollTop + innerHeight) / h.scrollHeight;
      [50, 90].forEach(p => { if (!sent[p] && k >= p / 100) { sent[p] = 1; M8.ev("scroll_" + p); } });
    }, { passive: true });
  }

  const h = document.getElementById("site-header");
  if (h) renderHeader(h);
  const f = document.getElementById("site-footer");
  if (f) renderFooter(f);
  M8.paint();

  // ---------- Konto na serwerze: logowanie, dostęp, zapis postępów ----------
  // Na liczenasetke.pl działa serwer (/api). W podglądzie bez serwera wszystko działa jak dawniej, lokalnie.
  M8.api = async (url, opts = {}) => {
    const r = await fetch(url, { credentials: "same-origin", ...opts,
      headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
      body: opts.body && typeof opts.body !== "string" ? JSON.stringify(opts.body) : opts.body });
    let j = {}; try { j = await r.json(); } catch (e) {}
    if (!r.ok) { const err = new Error(j.error || "Błąd połączenia. Spróbuj ponownie."); err.status = r.status; err.data = j; throw err; }
    return j;
  };
  M8.online = false;
  M8.me = null;
  M8.saveNow = async () => {
    if (!M8.me || !M8.me.role) return;
    try { await M8.api("/api/progress", { method: "PUT", body: { data: state, at: state._at || Date.now(), active: true } }); } catch (e) {}
  };
  let syncTimer = null;
  M8.onSave = () => { if (M8.me && M8.me.role) { clearTimeout(syncTimer); syncTimer = setTimeout(M8.saveNow, 1500); } };
  window.addEventListener("pagehide", () => { if (syncTimer) { clearTimeout(syncTimer); syncTimer = null;
    if (M8.me && M8.me.role && navigator.sendBeacon) { /* ostatni zapis przy zamykaniu strony */
      fetch("/api/progress", { method: "PUT", keepalive: true, credentials: "same-origin", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: state, at: state._at || Date.now(), active: true }) }).catch(() => {}); } } });

  // Po zalogowaniu: postępy z serwera zastępują lokalne, jeśli są nowsze. Postępy z darmowego tematu
  // zrobione przed założeniem konta przechodzą na konto.
  M8.syncProgress = async (me) => {
    if (!me || !me.role || !me.learner) return false;
    const local = state, sameLearner = local._learner === me.learner;
    const hasLocal = Object.keys(local.t || {}).length > 0;
    if (sameLearner && (local._at || 0) >= (me.progressAt || 0)) return false;
    const srv = await M8.api("/api/progress").catch(() => null);
    if (srv && srv.data && (!sameLearner || (srv.at || 0) > (local._at || 0))) {
      state = srv.data; state._learner = me.learner; state._at = srv.at;
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
      return true;
    }
    if (!srv || !srv.data) {
      // konto bez postępów: zabieramy te z przeglądarki (np. darmowy temat), jeśli nie należą do innego ucznia
      if (!local._learner) { local._learner = me.learner; M8.save(); if (hasLocal) await M8.saveNow(); }
      else if (local._learner !== me.learner) { state = { t: {}, _learner: me.learner, _at: Date.now() }; M8.save(); return true; }
    }
    return false;
  };

  M8.ready = (async () => {
    let me = null;
    try { const r = await fetch("/api/me", { credentials: "same-origin" }); if (r.ok && (r.headers.get("content-type") || "").includes("json")) me = await r.json(); } catch (e) {}
    if (!me) return null;
    M8.online = true; M8.me = me;
    // nagłówek: zalogowany widzi „Moje konto”, a z dostępem „Kurs” zamiast „Rozpocznij”
    const login = document.querySelector(".nav-login"), cta = document.querySelector(".nav-cta");
    if (me.role && login) { login.textContent = "Moje konto"; login.href = "konto.html"; }
    const fl = document.querySelector(".foot-login");
    if (me.role && fl) { fl.textContent = "Moje konto"; fl.href = "konto.html"; }
    if (me.access && me.access.active && cta) { cta.textContent = "Kurs"; cta.href = "kurs.html"; }
    const acc = !!(me.role && me.access && me.access.active);
    if (acc !== hasAccess()) {
      try { acc ? localStorage.setItem(ACC, "1") : localStorage.removeItem(ACC); } catch (e) {}
      document.documentElement.classList.toggle("has-access", acc);
      const h = document.querySelector(".site-header"), f = document.querySelector(".site-footer");
      if (h) renderHeader(h);
      if (f) renderFooter(f);
      const fl2 = document.querySelector(".foot-login");
      if (me.role && fl2) { fl2.textContent = "Moje konto"; fl2.href = "konto.html"; }
      const l2 = document.querySelector(".nav-login");
      if (me.role && l2) { l2.textContent = "Moje konto"; l2.href = "konto.html"; }
      M8.config.then(c => { if (c.contact) document.querySelectorAll("[data-contact]").forEach(a => { a.href = "mailto:" + c.contact; a.textContent = c.contact; }); });
    }
    if (me.role) {
      const changed = await M8.syncProgress(me);
      // strona z postępami narysowała się ze starych danych: jednorazowe odświeżenie
      if (changed && (window.TEMAT || document.getElementById("prog")) && !sessionStorage.getItem("m8-sync-reload")) {
        sessionStorage.setItem("m8-sync-reload", "1"); location.reload(); return me;
      }
      sessionStorage.removeItem("m8-sync-reload");
    }
    document.dispatchEvent(new CustomEvent("m8:me", { detail: me }));
    return me;
  })();

  // Przyciski zakupu (cennik, strona główna, panel): data-buy="exam" albo "monthly"
  M8.buy = async (plan, btn) => {
    const me = await M8.ready;
    if (!me) { alert("Płatności działają na stronie liczenasetke.pl. To jest podgląd strony."); return; }
    // bez logowania też można kupić: Stripe zapyta o e-mail, a konto założy się samo
    if (me.role === "student") { alert("Dostęp kupuje rodzic. Zaloguj się na konto rodzica."); return; }
    if (me.access && me.access.active && !(me.access.plan === "monthly" && plan === "exam")) { location.href = "konto.html"; return; }
    M8.track("InitiateCheckout", { value: plan === "exam" ? 199 : 49, currency: "PLN" });
    M8.ev("plan_click", { plan });
    const label = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Otwieram płatność…"; }
    try { const r = await M8.api("/api/checkout", { method: "POST", body: { plan, sk: M8.stat.sk, utm: M8.stat.utm, ref: M8.stat.ref } }); location.href = r.url; }
    catch (e) { if (e.data && e.data.url) location.href = e.data.url; else alert(e.message); if (btn) { btn.disabled = false; btn.textContent = label; } }
  };
  document.querySelectorAll("[data-buy]").forEach(b => b.addEventListener("click", e => { e.preventDefault(); M8.buy(b.dataset.buy, b); }));

  // ---------- Łagodne pojawianie się sekcji przy przewijaniu ----------
  const REVEAL = ".res-copy, .res-card, .made-card, .o2-lead, .o2-scope, .o2-card, .o2-extras, .ef-copy, .ef-chart, .ef-fact, .review-strip .rs-inner, .lp-head, .offer-card, .cke-copy, .cke-visual, .lp-step, .stat-big, .lp-statement p, .quality > *, .split > *, .lp-compare-wrap, .plan, .faq details, .cta-inner, .beta, .prog-dzial, .inside > *, .tempo > div, .walk-row > *";
  const calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!calm && "IntersectionObserver" in window) {
    const els = Array.from(document.querySelectorAll(REVEAL)).filter(el => !el.closest(".lp-hero, .page-hero"));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(el => {
      const sib = Array.from(el.parentElement.children).filter(c => c.matches(REVEAL));
      el.style.setProperty("--rd", Math.min(sib.indexOf(el), 5) * 70 + "ms");
      el.classList.add("rv");
      io.observe(el);
    });
    // zabezpieczenie: to, co przewinięto szybkim skokiem (np. link z kotwicą), też ma się pokazać
    let tick = false;
    const sweep = () => {
      tick = false;
      const lim = window.innerHeight * 0.95;
      els.forEach(el => { if (!el.classList.contains("in") && el.getBoundingClientRect().top < lim) { el.classList.add("in"); io.unobserve(el); } });
    };
    window.addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(sweep); } }, { passive: true });
    window.addEventListener("load", () => setTimeout(sweep, 300));
  }

  // ---------- Liczniki: liczba „dobiega” do wartości, gdy pojawi się na ekranie (bez animacji zostaje gotowy tekst) ----------
  const nums = document.querySelectorAll("[data-count]");
  if (nums.length && !calm && "IntersectionObserver" in window) {
    const fmt = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
    const run = el => {
      const to = Number(el.dataset.count), suf = el.dataset.suffix || "", t0 = performance.now(), dur = 1400;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = fmt(Math.round(to * e)) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    // w kodzie strony zostaje prawdziwa liczba; odliczanie od zera startuje dopiero, gdy licznik jest na ekranie
    const io2 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { io2.unobserve(e.target); run(e.target); } }), { threshold: 0.3 });
    nums.forEach(el => io2.observe(el));
  }

  // ---------- Zgoda na cookies marketingowe i Piksel Meta ----------
  // Okienko pokazuje się dopiero, gdy wpiszemy numer Piksela. Bez numeru strona nie używa cookies marketingowych.
  let META_PIXEL_ID = "";   // numer Piksela przychodzi z serwera (zmienna META_PIXEL_ID w Railway)
  const CKEY = "matma8-cookies";
  const getConsent = () => { try { return localStorage.getItem(CKEY); } catch (e) { return null; } };
  const setConsent = v => { try { localStorage.setItem(CKEY, v); } catch (e) {} };
  function loadPixel() {
    if (!META_PIXEL_ID || window.fbq) return;
    /* standardowy kod Meta, ładowany dopiero po zgodzie */
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID); window.fbq("track", "PageView");
    pending.splice(0).forEach(([ev, params]) => window.fbq("track", ev, params));
  }
  function cookieBanner() {
    if (document.querySelector(".cookie-bar")) return;
    const bar = document.createElement("div");
    bar.className = "cookie-bar"; bar.setAttribute("role", "dialog"); bar.setAttribute("aria-label", "Zgoda na cookies");
    bar.innerHTML = `<p><b>Cookies.</b> Kurs zapisuje postępy w przeglądarce, bo bez tego nie działa. Za Twoją zgodą włączymy też Piksel Meta, żeby sprawdzać, czy nasze reklamy trafiają do właściwych osób. <a href="polityka-prywatnosci.html#p7">Więcej</a></p>
      <div class="cookie-btns"><button type="button" class="btn btn-small btn-ghost" data-c="no">Tylko niezbędne</button><button type="button" class="btn btn-small btn-yellow" data-c="yes">Zgadzam się</button></div>`;
    bar.addEventListener("click", e => {
      const c = e.target.dataset && e.target.dataset.c; if (!c) return;
      setConsent(c); bar.remove(); if (c === "yes") loadPixel();
    });
    document.body.appendChild(bar);
  }
  // zdarzenia sprzed wczytania piksela czekają w kolejce; bez zgody na cookies nic nie jest wysyłane
  const pending = [];
  M8.track = (ev, params) => {
    try { if (window.fbq) window.fbq("track", ev, params || {}); else if (getConsent() !== "no") pending.push([ev, params || {}]); } catch (e) {}
    if (ev === "Lead") M8.ev("login");
  };
  M8.config = (async () => {
    try { const r = await fetch("/api/config", { credentials: "same-origin" }); if (r.ok && (r.headers.get("content-type") || "").includes("json")) return await r.json(); } catch (e) {}
    return {};
  })();
  M8.config.then(cfg => {
    META_PIXEL_ID = cfg.metaPixelId || "";
    if (cfg.contact) document.querySelectorAll("[data-contact]").forEach(a => { a.href = "mailto:" + cfg.contact; a.textContent = cfg.contact; });
    if (META_PIXEL_ID) { const c = getConsent(); if (c === "yes") loadPixel(); else if (c !== "no") cookieBanner(); }
  });
  document.querySelectorAll("[data-cookie-settings]").forEach(b => b.addEventListener("click", () => {
    if (META_PIXEL_ID) cookieBanner();
    else b.replaceWith(Object.assign(document.createElement("span"), { textContent: "teraz strona nie używa cookies marketingowych, więc nie ma czego ustawiać" }));
  }));

  // ---------- Cena w przeliczeniu na dzień do egzaminu (liczona na bieżąco, więc zawsze prawdziwa) ----------
  const EXAM = new Date("2027-05-11T09:00:00+02:00");
  document.querySelectorAll("[data-perday]").forEach(el => {
    const days = Math.ceil((EXAM - new Date()) / 86400000);
    if (days < 7) return;
    const v = Number(el.dataset.perday) / days;
    el.textContent = v < 1 ? `To mniej niż 1 zł dziennie do egzaminu (ok. ${Math.ceil(v * 100)} gr).`
      : `To ok. ${v.toFixed(2).replace(".", ",")} zł dziennie do egzaminu.`;
    el.hidden = false;
  });

  // ---------- Przycisk przyklejony na dole ekranu (telefon): pojawia się po minięciu przycisku z góry strony,
  // chowa się przy cenach, na końcu strony i w stopce, żeby nie zasłaniał innych przycisków ----------
  const sticky = document.querySelector(".sticky-cta");
  const trig = document.querySelector(".lp-hero .lp-cta, [data-sticky-after]");
  if (sticky && trig && "IntersectionObserver" in window) {
    const link = sticky.querySelector("a");
    let past = false;
    const blockers = new Set();
    const upd = () => {
      const on = past && blockers.size === 0;
      sticky.classList.toggle("on", on);
      sticky.setAttribute("aria-hidden", on ? "false" : "true");
      if (link) link.tabIndex = on ? 0 : -1;
    };
    new IntersectionObserver(([e]) => { past = !e.isIntersecting && e.boundingClientRect.top < 0; upd(); }).observe(trig);
    const io3 = new IntersectionObserver(es => { es.forEach(e => e.isIntersecting ? blockers.add(e.target) : blockers.delete(e.target)); upd(); });
    document.querySelectorAll(".plans, .lp-final, .site-footer, [data-sticky-hide]").forEach(el => io3.observe(el));
  }
})();
