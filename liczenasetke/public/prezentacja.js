/* Liczę na Setkę · prezentacja kursu na stronie „Jak to działa”: kroki po lewej, okno kursu z odgrywanymi scenkami po prawej. */
// Prezentacja kursu: aktywny krok, przejścia ekranów i scenki z kursorem (na telefonie każdy krok ma swoje okno)
(function () {
  const tour = document.querySelector(".tour");
  if (!tour) return;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 900px)");
  const stepsEl = tour.querySelector(".tour-steps");
  const steps = [...tour.querySelectorAll(".tour-step")];
  const frame = tour.querySelector(".tour-stage .ts-frame");
  const box = frame.querySelector(".ts-screens"), url = frame.querySelector(".ts-url");
  const screens = [...box.querySelectorAll(".ts-screen")], dots = [...frame.querySelectorAll(".ts-dots i")];
  const $ = (s, q) => s.querySelector(q), $$ = (s, q) => [...s.querySelectorAll(q)];

  // ---------- scenki ----------
  const timers = new Map();
  const stop = s => { (timers.get(s) || []).forEach(clearTimeout); timers.set(s, []); };
  const later = (s, ms, fn) => timers.get(s).push(setTimeout(fn, ms));
  const show = (s, q) => $$(s, q).forEach(e => e.classList.add("show"));
  const hideAll = s => { $$(s, ".k").forEach(e => e.classList.remove("show")); const c = $(s, ".scr-cursor"); if (c) c.classList.remove("v"); };
  const pos = (el, s) => { let x = 0, y = 0; while (el && el !== s) { x += el.offsetLeft; y += el.offsetTop; el = el.offsetParent; } return [x, y]; };
  const cursorTo = (s, el) => {
    const c = $(s, ".scr-cursor"); if (!c || !el) return;
    const [x, y] = pos(el, s);
    c.style.setProperty("--cx", (x + el.offsetWidth * .55) + "px"); c.style.setProperty("--cy", (y + el.offsetHeight * .5) + "px");
    c.classList.add("v");
  };
  const click = (s, el) => {
    const c = $(s, ".scr-cursor"); if (c) { c.classList.remove("click"); void c.offsetWidth; c.classList.add("click"); }
    if (el) { el.classList.add("press"); later(s, 170, () => el.classList.remove("press")); }
  };
  const mmss = t => String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0");

  const scenes = [
    // 1. lekcja: kursor odsłania kolejne kroki przykładu
    (s, loop) => {
      const btn = $(s, ".scr-btn");
      hideAll(s); btn.classList.remove("gone"); btn.textContent = "Pokaż pierwszy krok";
      later(s, 500, () => cursorTo(s, btn));
      later(s, 1350, () => { click(s, btn); show(s, ".k1"); btn.textContent = "Pokaż ostatni krok i wynik"; });
      later(s, 2800, () => { click(s, btn); show(s, ".k2"); later(s, 380, () => show(s, ".k3")); later(s, 480, () => btn.classList.add("gone")); });
      later(s, 3700, () => $(s, ".scr-cursor").classList.remove("v"));
      later(s, 8600, loop);
    },
    // 2. ćwiczenia: zła odpowiedź, poprawna na zielono, wyjaśnienie, rozwiązanie, powtórka
    (s, loop) => {
      const bad = $(s, ".o-bad"), ok = $(s, ".o-ok"), btn = $(s, ".scr-btn");
      hideAll(s); $$(s, ".opt").forEach(o => o.classList.remove("is-ok", "is-bad"));
      later(s, 600, () => cursorTo(s, bad));
      later(s, 1450, () => { click(s, bad); bad.classList.add("is-bad"); later(s, 260, () => ok.classList.add("is-ok")); });
      later(s, 1950, () => show(s, ".k1"));
      later(s, 3000, () => cursorTo(s, btn));
      later(s, 3850, () => { click(s, btn); show(s, ".k2"); });
      later(s, 4900, () => { show(s, ".k3"); $(s, ".scr-cursor").classList.remove("v"); });
      later(s, 11000, loop);
    },
    // 3. test: zadania zaliczane po kolei, czas leci, potem wynik i pieczątka
    (s, loop) => {
      const qd = $$(s, ".scr-qdots i"), t = $(s, ".t"), c = $(s, ".scr-score .c");
      hideAll(s); qd.forEach(d => d.classList.remove("on", "half")); t.textContent = "35:00"; c.textContent = "0";
      let sec = 35 * 60;
      qd.forEach((d, i) => later(s, 450 + i * 240, () => { d.classList.add(i === 9 ? "half" : "on"); sec -= 70; t.textContent = mmss(sec); }));
      const T = 450 + qd.length * 240 + 350;
      later(s, T, () => show(s, ".k1"));
      for (let k = 1; k <= 13; k++) later(s, T + 150 + k * 55, () => { c.textContent = k; });
      later(s, T + 1050, () => show(s, ".k2"));
      later(s, T + 7200, loop);
    },
    // 4. panel rodzica: dni nauki zapalają się po kolei, potem podpowiedź dla rodzica
    (s, loop) => {
      const d = $$(s, ".pp-days .d");
      hideAll(s); d.forEach(x => x.classList.remove("on"));
      d.forEach((x, i) => later(s, 500 + i * 400, () => x.classList.add("on")));
      later(s, 500 + d.length * 400 + 350, () => show(s, ".k1"));
      later(s, 9000, loop);
    },
  ];
  const finalState = s => {
    $$(s, ".k").forEach(e => e.classList.add("show"));
    const i = +s.dataset.i;
    if (i === 0) $(s, ".scr-btn").classList.add("gone");
    if (i === 1) { $(s, ".o-bad").classList.add("is-bad"); $(s, ".o-ok").classList.add("is-ok"); }
    if (i === 2) { $$(s, ".scr-qdots i").forEach((d, k) => d.classList.add(k === 9 ? "half" : "on")); $(s, ".t").textContent = "22:10"; }
    if (i === 3) $$(s, ".pp-days .d").forEach(x => x.classList.add("on"));
  };
  const play = s => {
    stop(s);
    if (calm) return;
    const loop = () => { stop(s); scenes[+s.dataset.i](s, loop); };
    scenes[+s.dataset.i](s, loop);
  };
  screens.forEach(s => { timers.set(s, []); finalState(s); });
  if (!calm) tour.classList.add("anim");

  // ---------- komputer: przyklejone okno, ekran zależy od kroku na środku ekranu ----------
  let active = -1, visible = false;
  const setActive = i => {
    if (i === active) return;
    active = i;
    steps.forEach((st, k) => { st.classList.toggle("active", k === i); st.classList.toggle("done", k < i); });
    screens.forEach((s, k) => { s.classList.toggle("on", k === i); if (k !== i) stop(s); });
    dots.forEach((d, k) => d.classList.toggle("on", k === i));
    url.textContent = screens[i].dataset.url;
    if (visible) play(screens[i]);
  };
  // krok zmienia się dopiero, gdy jego tytuł dojedzie do środka okna kursu (wcześniej dziecko nie zdążyłoby zobaczyć scenki)
  const pick = () => {
    if (narrow.matches) return;
    const f = frame.getBoundingClientRect(), cy = f.top + f.height * .5;
    let i = 0;
    steps.forEach((st, k) => { if (st.querySelector("h3").getBoundingClientRect().top <= cy) i = k; });
    setActive(i);
  };
  // scenki grają tylko wtedy, gdy okno kursu jest dobrze widoczne
  const frameIO = new IntersectionObserver(es => es.forEach(e => {
    visible = e.isIntersecting;
    if (narrow.matches) return;
    if (visible && active >= 0) play(screens[active]); else screens.forEach(stop);
  }), { threshold: 0.6 });

  // pasek postępu przy krokach
  let tick = false;
  const rail = () => {
    tick = false;
    if (narrow.matches) return;
    const f = frame.getBoundingClientRect(), cy = f.top + f.height * .5;
    const nums = steps.map(st => { const r = st.querySelector(".ts-n").getBoundingClientRect(); return r.top + r.height / 2; });
    const p = Math.min(1, Math.max(0, (cy - nums[0]) / (nums[nums.length - 1] - nums[0])));
    stepsEl.style.setProperty("--p", p.toFixed(3));
    pick();
  };
  window.addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(rail); } }, { passive: true });

  // ---------- telefon: pod każdym krokiem własne okno, scenka rusza, gdy okno jest na ekranie ----------
  const solos = [];
  const soloIO = new IntersectionObserver(es => es.forEach(e => {
    const s = e.target.querySelector(".ts-screen");
    if (s) { if (e.isIntersecting) play(s); else stop(s); }
  }), { threshold: 0.5 });
  const toNarrow = () => {
    screens.forEach((s, i) => {
      stop(s); finalState(s);
      const f = document.createElement("div");
      f.className = "ts-frame solo";
      f.innerHTML = `<div class="kp-bar" aria-hidden="true"><i></i><i></i><i></i><span>${s.dataset.url}</span></div><div class="ts-screens"></div>`;
      f.querySelector(".ts-screens").appendChild(s);
      s.classList.add("on");
      steps[i].querySelector(".ts-body").appendChild(f);
      solos.push(f); soloIO.observe(f);
    });
  };
  const toWide = () => {
    soloIO.disconnect();
    screens.forEach(s => { stop(s); finalState(s); s.classList.remove("on"); box.appendChild(s); });
    solos.splice(0).forEach(f => f.remove());
    active = -1; setActive(0);
  };
  const apply = () => { if (narrow.matches) toNarrow(); else toWide(); };
  apply();
  narrow.addEventListener("change", apply);
  frameIO.observe(frame);
  rail();
})();
