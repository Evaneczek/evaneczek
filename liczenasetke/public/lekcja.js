/* Liczę na Setkę · silnik lekcji. Treść tematu przychodzi z window.TEMAT (plik dane-<temat>.js).
   Strony: nauka (rozgrzewka, mini-lekcje z „Teraz ty”, podsumowanie tematu), ćwiczenia, test.
   Typy zadań: abcd, pf, fields, table, pair (dobieranie), tn (tak/nie z uzasadnieniem), self (otwarte z samooceną). */
(function () {
  "use strict";
  const M8 = window.M8;
  const T = window.TEMAT;
  if (M8 && !T) {
    // treść tematu nie przyszła z serwera: ta część kursu wymaga zalogowania i dostępu
    // plansza w miejscu treści, pod tytułem strony (querySelector z listą wybrałby <main>, bo jest pierwszy w dokumencie)
    const host = ["main .workspace .container", "main .section .container", "main"].map(q => document.querySelector(q)).find(Boolean) || document.body;
    host.querySelectorAll(".exam-rules").forEach(e => e.remove());
    const box = document.createElement("div");
    box.className = "locked box";
    box.innerHTML = `<div class="locked-ico" aria-hidden="true">🔒</div><h2>Ten temat jest w pełnej wersji kursu</h2>
      <p>Darmowy jest cały temat „Procenty”. Pozostałe tematy, test startowy i egzaminy próbne otwierają się po zakupie dostępu.</p>
      <div class="btn-row"><a class="btn btn-yellow" href="cennik.html">Zobacz plany i ceny</a><a class="btn btn-ghost" href="logowanie.html">Mam już dostęp, zaloguj mnie</a></div>
      <p class="locked-free"><a class="text-link" href="procenty.html">albo wypróbuj za darmo temat „Procenty” →</a></p>`;
    M8.ready.then(me => {
      if (me && me.role && me.access && !me.access.active && me.role === "student")
        box.querySelector("p").textContent = "Dostęp do kursu nie jest aktywny. Poproś rodzica o sprawdzenie panelu rodzica.";
      if (me && me.role) box.querySelector(".btn-ghost").remove();
    });
    host.prepend(box);
    return;
  }
  if (!M8 || !T) return;
  // statystyki: kroki darmowego tematu (pozostałe tematy otwierają tylko kupujący, których i tak nie liczymy)
  const seenStep = new Set();
  const stat = (name, meta) => { if (T.slug === "procenty" && M8.ev) M8.ev(name, meta); };
  // ---------- darmowy temat: sprzedaż tylko w naturalnych momentach i tylko dla osób bez pełnego dostępu ----------
  const FREE = T.slug === "procenty";
  const buyer = me => !!(me && me.access && me.access.active) || document.documentElement.classList.contains("has-access");
  // karta zachęty: na dole karty tematu, po ostatnim poziomie ćwiczeń i pod wynikiem testu
  function freeCta(where, place) {
    if (!FREE) return;
    M8.ready.then(me => {
      if (buyer(me)) return;
      const c = {
        hub: ["Darmowy temat · 1 z 20", "Cały egzamin z matematyki w jednym kursie", "btn-yellow", "Zobacz plany i ceny"],
        practice: ["Ćwiczenia zrobione", "Tak wygląda każdy z 20 tematów kursu", "btn-plain", "Zobacz pełny kurs"],
        test: ["To był 1 z 20 tematów", "Tak wygląda każdy z 20 tematów kursu", "btn-yellow", "Zobacz pełny kurs"]
      }[where];
      const end = el("div", { class: "free-cta box", "data-where": where });
      end.addEventListener("click", e => { if (e.target.closest("a[href='cennik.html']")) stat("free_cta_click"); });
      end.innerHTML = `<div class="eyebrow">${c[0]}</div><h3>${c[1]}</h3>
        <ul class="fc-list"><li>wszystkie tematy z egzaminu, krok po kroku</li><li>test startowy i 2 egzaminy próbne na czas</li><li>panel rodzica</li></ul>
        <p class="fc-price">199 zł do dnia egzaminu · 14 dni na zwrot pieniędzy</p>
        <div class="btn-row"><a class="btn ${c[2]}" href="cennik.html">${c[3]}</a><a class="text-link" href="kurs.html">Program kursu</a></div>`;
      place(end);
    });
  }
  if (FREE && !document.querySelector(".step-tabs")) {
    const host = document.querySelector("main .section .container");
    if (host) freeCta("hub", n => host.appendChild(n));
  }
  // ---------- tryb nauki (strony Naucz się / Ćwicz / Sprawdź się): na telefonie krótka ścieżka „← Temat”, kompaktowe kroki, prosta stopka ----------
  const MOBILE = window.matchMedia("(max-width: 640px)");
  const tabsNav = document.querySelector(".page-hero .step-tabs");
  if (tabsNav) {
    document.body.classList.add("learn-mode");
    const crumbs = document.querySelector(".page-hero .crumbs");
    if (crumbs) crumbs.insertAdjacentHTML("beforebegin", `<a class="back-link" href="${T.slug}.html"><span aria-hidden="true">←</span> ${T.title}</a>`);
    // klawiatura ekranowa otwarta: przyklejony pasek z przyciskiem wraca na swoje miejsce pod zadaniem, żeby go nie zasłaniała
    let kbT = null;
    document.addEventListener("focusin", e => { if (e.target.matches("input, textarea")) { clearTimeout(kbT); document.body.classList.add("kb-open"); } });
    document.addEventListener("focusout", e => { if (e.target.matches("input, textarea")) kbT = setTimeout(() => document.body.classList.remove("kb-open"), 150); });
  }
  // przewinięcie do początku nowego ekranu (tylko telefon, gdy jego góra jest poza widokiem)
  function toTop(node) {
    if (!MOBILE.matches || !node) return;
    const t = node.getBoundingClientRect().top;
    if (t < 0 || t > innerHeight * 0.6) node.scrollIntoView({ block: "start" });
  }
  // pasek postępu przyklejony u góry (telefon): stan + cienki pasek + rozwijana lista (spis lekcji / numery zadań); na komputerze widać samą listę jak dotąd
  function progTop(nav, listLabel, id) {
    const box = el("div", { class: "prog-top" });
    nav.id = id;
    const btn = el("button", { class: "pt-btn", type: "button", "aria-expanded": "false", "aria-controls": id },
      `<span class="pt-k"></span><span class="pt-t"></span><span class="pt-more">${listLabel} <span class="pt-arr" aria-hidden="true">▾</span></span>`);
    const bar = el("span", { class: "pt-bar", "aria-hidden": "true" }, "<i></i>");
    box.appendChild(btn); box.appendChild(bar); box.appendChild(nav);
    const set = open => { box.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
    btn.addEventListener("click", () => set(!box.classList.contains("open")));
    nav.addEventListener("click", e => { if (e.target.closest("button")) set(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && box.classList.contains("open")) { set(false); btn.focus(); } });
    document.addEventListener("click", e => { if (!box.contains(e.target)) set(false); });
    return {
      box,
      update(k, t, pct) {
        btn.querySelector(".pt-k").textContent = k;
        btn.querySelector(".pt-t").textContent = t;
        bar.firstChild.style.width = Math.max(0, Math.min(100, pct)) + "%";
      }
    };
  }
  const S = M8.topic(T.slug);
  S.learnTasks = S.learnTasks || {};
  S.practice = S.practice || {};
  S.revealed = S.revealed || {};

  const TEST_SECONDS = (T.test_minutes || 20) * 60;
  const TEST_MAX = T.test.reduce((s, t) => s + (t.pts || 1), 0);
  const PASS = T.pass || Math.ceil(TEST_MAX * 0.85);
  const EX_STEPS = (T.examples || []).reduce((s, e) => s + e.steps.length, 0);
  const KIND = T.kind || "topic";   // topic, exam (egzamin próbny), diag (test startowy)
  S.meta = { practiceTotal: (T.practice || []).length, testMax: TEST_MAX, pass: PASS, kind: KIND };
  M8.save();

  // ---------- pomocnicze ----------
  function el(tag, attrs = {}, html) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) { if (k === "class") n.className = v; else n.setAttribute(k, v); }
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function toNumber(raw) {
    if (raw == null) return NaN;
    const mixed = String(raw).replace(/−/g, "-").match(/^\s*(-?)(\d+)\s+(\d+)\s*\/\s*(\d+)\s*$/);
    if (mixed) { const v = Number(mixed[2]) + Number(mixed[3]) / Number(mixed[4]); return mixed[1] ? -v : v; }
    const s = String(raw).toLowerCase().replace(/[²³π]/g, "").replace(/[cdmk]?m[23](?![0-9])/g, "").replace(/zł|zl|%|°c|°|stopni[ae]?|cm|km|uczniów|uczniow/g, "").replace(/\s+/g, "").replace(/(kg|km|dm|mm|cm|ha|arów|arow|ary|ar|a|gramów|gramow|gramy|gram|g|stron|osób|osob|zadań|zadan|litrów|litrow|litra|litry|l|m|sekund|s|minut|min|h|lat|dni)\.?$/, "").replace(/,/g, ".").replace(/−/g, "-");
    if (/^-?\d+(\.\d+)?\/\d+(\.\d+)?$/.test(s)) { const [a, b] = s.split("/").map(Number); return b ? a / b : NaN; }
    if (!/^-?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
    return Number(s);
  }
  const same = (a, b) => Math.abs(a - b) < 1e-6;
  const norm = x => String(x ?? "").toUpperCase().replace(/\s+/g, "");
  // pola z „≈” (wynik przybliżony) przyjmują też zaokrąglenie, np. 63,6 zamiast 63,585
  const tolOf = f => f.tol ?? (/≈/.test(f.label || "") ? 0.05 : 0);
  const fieldOk = (f, v) => f.text ? norm(v) === norm(f.ans) : (same(toNumber(v), f.ans) || Math.abs(toNumber(v) - f.ans) <= tolOf(f) + 1e-9);
  const LETTERS = ["A", "B", "C", "D"];
  const plural = (n, one, few, many) => n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many;
  const fmtMath = t => String(t).replace(/\[\[(.+?)\]\]/g, '<span class="m">$1</span>');

  function chartSvg(c) {
    if (c.kind === "pie") return pieSvg(c);
    if (c.kind === "cols") return colsSvg(c);
    if (c.kind === "axis") return axisSvg(c);
    if (c.kind === "line") return lineSvg(c);
    const x0 = 122, scale = c.scale || 9;
    let g = "";
    c.rows.forEach(([name, v, shown], i) => {
      const y = 10 + i * 40;
      g += `<text class="lbl" x="0" y="${y + 17}">${name}</text>`;
      if (shown === false) {
        g += `<rect class="empty" x="${x0}" y="${y}" width="${v * scale}" height="24" rx="6"/>`;
        g += `<text class="val q" x="${x0 + v * scale + 12}" y="${y + 17}">? ${c.unit || "%"}</text>`;
      } else {
        g += `<rect class="b" x="${x0}" y="${y}" width="${v * scale}" height="24" rx="6"/>`;
        g += `<text class="val" x="${x0 + v * scale + 12}" y="${y + 17}">${v}${c.unit || "%"}</text>`;
      }
    });
    const h = 20 + c.rows.length * 40;
    return `<svg class="chart" viewBox="0 0 520 ${h}" role="img" aria-label="${c.alt || "Diagram"}">${g}</svg>`;
  }
  // diagram kołowy z legendą; wiersz [nazwa, procent, false] = wycinek bez podanej wartości
  function pieSvg(c) {
    const cx = 210, cy = 110, r = 100;
    let a0 = -Math.PI / 2, g = "", leg = "";
    c.rows.forEach(([name, v, shown], i) => {
      const a1 = a0 + v / 100 * 2 * Math.PI;
      const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
      const big = v > 50 ? 1 : 0;
      g += `<path class="s${i % 5}${shown === false ? " unk" : ""}" d="M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${big} 1 ${x1.toFixed(1)},${y1.toFixed(1)} Z"/>`;
      const am = (a0 + a1) / 2, tx = cx + r * 0.62 * Math.cos(am), ty = cy + r * 0.62 * Math.sin(am);
      const vt = c.deg ? numPl(Math.round(v * 3.6 * 10) / 10) + "°" : numPl(v) + "%";
      if (v >= (c.deg ? 10 : 8)) g += `<text class="pv" x="${tx.toFixed(1)}" y="${(ty + 5).toFixed(1)}" text-anchor="middle">${shown === false ? "?" : c.noVals ? "" : vt}</text>`;
      const lx = 10 + (i % 2) * 210, ly = 250 + Math.floor(i / 2) * 34;
      leg += `<rect class="s${i % 5}${shown === false ? " unk" : ""}" x="${lx}" y="${ly - 16}" width="20" height="20" rx="4"/><text class="lbl" x="${lx + 30}" y="${ly}">${name}${shown === false || c.noVals ? "" : " " + vt}</text>`;
      a0 = a1;
    });
    const h = 240 + Math.ceil(c.rows.length / 2) * 34;
    return `<svg class="chart pie" viewBox="0 0 420 ${h}" role="img" aria-label="${c.alt || "Diagram kołowy"}">${g}${leg}</svg>`;
  }
  // diagram słupkowy pionowy z osią i siatką; oś może zaczynać się od c.min (nie od zera)
  function colsSvg(c) {
    const min = c.min || 0, max = c.max, step = c.step, lines = Math.round((max - min) / step), W = Math.max(420, 68 + c.rows.length * 92), top = 26, y0 = top + Math.max(220, lines * 28), H = y0 + 54, x0 = 58;
    const sy = v => y0 - (v - min) / (max - min) * (y0 - top);
    let g = "";
    for (let k = 0; k <= lines; k++) {
      const v = min + k * step;
      g += `<line class="grid" x1="${x0}" y1="${sy(v)}" x2="${W - 10}" y2="${sy(v)}"/><text class="ax" x="${x0 - 8}" y="${sy(v) + 5}" text-anchor="end">${numPl(v)}</text>`;
    }
    // c.series = ["chłopcy", "dziewczęta"]: w wierszu [nazwa, wartość 1, wartość 2]; wiersz [nazwa, v, false] = słupek nieznany („?”)
    const ser = c.series || [null], k = ser.length;
    const n = c.rows.length, slot = (W - 10 - x0) / n, bw = Math.min(k > 1 ? 34 : 60, slot * 0.58 / k);
    c.rows.forEach((row, i) => {
      const name = row[0], unknown = row[2] === false && k === 1;
      const xs = x0 + slot * i + (slot - bw * k) / 2;
      ser.forEach((_, j) => {
        const v = row[1 + j], x = xs + j * bw;
        g += `<rect class="${unknown ? "unk" : k > 1 ? "s" + j : "b"}" x="${x}" y="${sy(v)}" width="${bw}" height="${y0 - sy(v)}"/>`;
        if (c.vals || unknown) g += `<text class="val${k > 1 ? " sm" : ""}" x="${x + bw / 2}" y="${sy(v) - 8}" text-anchor="middle">${unknown ? "?" : numPl(v)}</text>`;
      });
      g += colLabel(name, xs + bw * k / 2, y0 + 28, slot, n > 3 ? 15 : 18);
    });
    g += `<line class="axis" x1="${x0}" y1="${top - 6}" x2="${x0}" y2="${y0}"/><line class="axis" x1="${x0}" y1="${y0}" x2="${W - 10}" y2="${y0}"/>`;
    if (c.ylabel) g += `<text class="ax" x="${x0 + 8}" y="${top - 8}">${c.ylabel}</text>`;
    let leg = "", HH = H;
    if (k > 1) {
      ser.forEach((nm, j) => { const lx = x0 + j * 170; leg += `<rect class="s${j}" x="${lx}" y="${H + 2}" width="20" height="20" rx="4"/><text class="lbl sm" x="${lx + 28}" y="${H + 18}">${nm}</text>`; });
      HH = H + 34;
    }
    return `<svg class="chart cols" viewBox="0 0 ${W} ${HH}" role="img" aria-label="${c.alt || "Diagram słupkowy"}">${g}${leg}</svg>`;
  }
  // liczba po polsku: przecinek dziesiętny, minus typograficzny
  function numPl(v) { return String(Math.round(v * 1000) / 1000).replace(".", ",").replace("-", "−"); }
  // wykres w układzie współrzędnych: c.x = {min, max, step, label, cats?}, c.y = {min, max, step, label},
  // c.series = [{pts: [[x, y], …], name}] albo c.pts; c.dots rysuje punkty, c.vals podpisuje wartości, c.marks = [[x, y, "A"]]
  function lineSvg(c) {
    const X = c.x, Y = c.y, cats = X.cats, W = 460, left = 58, right = 24, top = 34, bot = 58;
    const nx = cats ? cats.length - 1 : Math.round((X.max - X.min) / X.step), ny = Math.round((Y.max - Y.min) / Y.step);
    const plotH = Math.max(200, Math.min(300, ny * 34)), H = top + plotH + bot;
    const xmin = cats ? 0 : X.min, xmax = cats ? cats.length - 1 : X.max;
    const pad = cats ? 0.5 : 0, span = xmax - xmin + 2 * pad;
    const sx = x => left + (x - xmin + pad) / span * (W - left - right), sy = y => top + plotH - (y - Y.min) / (Y.max - Y.min) * plotH;
    let g = "";
    for (let k = 0; k <= ny; k++) {
      const v = Y.min + k * Y.step;
      g += `<line class="grid" x1="${left}" y1="${sy(v)}" x2="${W - right}" y2="${sy(v)}"/><text class="ax" x="${left - 8}" y="${sy(v) + 5}" text-anchor="end">${numPl(v)}</text>`;
    }
    for (let k = 0; k <= nx; k++) {
      const v = cats ? k : X.min + k * X.step, lab = cats ? cats[k] : numPl(v);
      g += `<line class="grid" x1="${sx(v)}" y1="${top}" x2="${sx(v)}" y2="${top + plotH}"/>`;
      if (!X.every || k % X.every === 0) g += `<text class="ax${cats && cats.length > 7 ? " sm" : ""}" x="${sx(v)}" y="${top + plotH + 24}" text-anchor="middle">${lab}</text>`;
    }
    g += `<line class="axis" x1="${left}" y1="${top - 10}" x2="${left}" y2="${top + plotH}"/><line class="axis" x1="${left}" y1="${top + plotH}" x2="${W - right + 8}" y2="${top + plotH}"/>`;
    g += `<path class="arrow" d="M${left},${top - 16} l-6,12 h12 z"/><path class="arrow" d="M${W - right + 14},${top + plotH} l-12,-6 v12 z"/>`;
    if (Y.label) g += `<text class="ax lab" x="${left + 10}" y="${top - 12}">${Y.label}</text>`;
    if (X.label) g += `<text class="ax lab" x="${W - right}" y="${top + plotH + 48}" text-anchor="end">${X.label}</text>`;
    const series = c.series || [{ pts: c.pts }];
    series.forEach((se, j) => {
      const d = se.pts.map(([x, y], i) => (i ? "L" : "M") + sx(x).toFixed(1) + "," + sy(y).toFixed(1)).join(" ");
      g += `<path class="ln s${j}${se.dash ? " dash" : ""}" d="${d}"/>`;
      if (c.dots !== false) se.pts.forEach(([x, y]) => { g += `<circle class="dot s${j}" cx="${sx(x).toFixed(1)}" cy="${sy(y).toFixed(1)}" r="4.5"/>`; });
      if (c.vals) se.pts.forEach(([x, y]) => { g += `<text class="val" x="${sx(x).toFixed(1)}" y="${(sy(y) - 11).toFixed(1)}" text-anchor="middle">${numPl(y)}</text>`; });
    });
    (c.marks || []).forEach(([x, y, t]) => { g += `<text class="mk" x="${(sx(x) + 8).toFixed(1)}" y="${(sy(y) - 10).toFixed(1)}">${t}</text>`; });
    let leg = "", HH = H;
    if (series.length > 1 && series.every(se => se.name)) {
      series.forEach((se, j) => { const lx = left + j * 170; leg += `<line class="ln s${j}${se.dash ? " dash" : ""}" x1="${lx}" y1="${H + 10}" x2="${lx + 28}" y2="${H + 10}"/><text class="lbl sm" x="${lx + 36}" y="${H + 16}">${se.name}</text>`; });
      HH = H + 28;
    }
    return `<svg class="chart line" viewBox="0 0 ${W} ${HH}" role="img" aria-label="${c.alt || "Wykres"}">${g}${leg}</svg>`;
  }
  // podpis słupka: długa nazwa z kilku słów idzie w dwie linijki, a za długa dostaje mniejszą czcionkę
  function colLabel(name, x, y, slot, base) {
    const txt = String(name), fits = t => t.length * base * 0.66 <= slot * 0.94;
    const lines = !fits(txt) && txt.includes(" ") ? [txt.slice(0, txt.lastIndexOf(" ")), txt.slice(txt.lastIndexOf(" ") + 1)] : [txt];
    const fs = Math.min(base, Math.floor(slot * 0.94 / (Math.max(...lines.map(l => l.length)) * 0.66)));
    const ty = lines.length > 1 ? y - 6 : y;
    return `<text class="lbl" style="font-size:${fs}px" x="${x}" y="${ty}" text-anchor="middle">${lines.map((l, i) => `<tspan x="${x}" dy="${i ? "1.1em" : 0}">${l}</tspan>`).join("")}</text>`;
  }
  // oś liczbowa: c.ticks = liczba równych części, c.labels = {nr kreski: "liczba"}, c.points = {nr kreski: "A"}
  function axisSvg(c) {
    const W = 420, x0 = 24, x1 = W - 34, y = 62, n = c.ticks, dx = (x1 - x0) / n;
    let g = `<line class="axis" x1="${x0 - 14}" y1="${y}" x2="${x1 + 22}" y2="${y}"/><path class="arrow" d="M${x1 + 26},${y} l-12,-6 v12 z"/>`;
    for (let i = 0; i <= n; i++) {
      const x = x0 + i * dx, big = c.labels && c.labels[i] !== undefined;
      g += `<line class="tick" x1="${x}" y1="${y - (big ? 9 : 6)}" x2="${x}" y2="${y + (big ? 9 : 6)}"/>`;
      if (big) g += `<text class="lbl" x="${x}" y="${y + 32}" text-anchor="middle">${c.labels[i]}</text>`;
      if (c.points && c.points[i] !== undefined) g += `<circle class="pt" cx="${x}" cy="${y}" r="6"/><text class="pl" x="${x}" y="${y - 18}" text-anchor="middle">${c.points[i]}</text>`;
    }
    return `<svg class="chart axis-line" viewBox="0 0 ${W} 104" role="img" aria-label="${c.alt || "Oś liczbowa"}">${g}</svg>`;
  }
  // tabela danych w treści zadania
  function dataTable(d) {
    return `<div class="table-scroll"><table class="data">${d.head ? "<tr>" + d.head.map(h => `<th>${h}</th>`).join("") + "</tr>" : ""}${d.rows.map(r => "<tr>" + r.map((x, k) => k === 0 ? `<th>${x}</th>` : `<td>${x}</td>`).join("") + "</tr>").join("")}</table></div>`;
  }

  // ---------- rozwiązanie zwykłym językiem ----------
  function solutionBlock(task) {
    const wrap = el("div", { class: "sol-wrap" });
    const btn = el("button", { class: "btn btn-small sol-btn", type: "button", "aria-expanded": "false" }, "Pokaż rozwiązanie");
    const box = el("div", { class: "solution" });
    box.hidden = true;
    box.innerHTML = `<div class="sol-title">Rozwiązanie</div>
      <div class="sol-text">${(task.sol || []).map(p => `<p>${fmtMath(p)}</p>`).join("")}
      ${task.answer ? `<p class="sol-answer"><b>Odpowiedź:</b> ${fmtMath(task.answer)}</p>` : ""}</div>
      ${task.tip ? `<div class="sol-tip"><b>Rada</b><span>${fmtMath(task.tip)}</span></div>` : ""}`;
    btn.addEventListener("click", () => {
      const open = box.hidden;
      box.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Ukryj rozwiązanie" : "Pokaż rozwiązanie";
    });
    wrap.appendChild(btn); wrap.appendChild(box);
    wrap.hidden = true;
    wrap.open = () => { box.hidden = false; btn.textContent = "Ukryj rozwiązanie"; btn.setAttribute("aria-expanded", "true"); };
    return wrap;
  }

  // =========================================================
  // KARTA ZADANIA
  // =========================================================
  function buildTask(task, num, mode, saved, hooks = {}) {
    const card = el("article", { class: "task", id: mode + "-" + task.id });
    const top = el("div", { class: "task-top" });
    if (num) top.appendChild(el("span", { class: "task-no" }, "Zadanie " + num));
    if (task.pts && mode === "test") top.appendChild(el("span", { class: "task-pts" }, task.pts + " pkt"));
    if (top.children.length) card.appendChild(top);
    card.appendChild(el("p", { class: "task-q" }, fmtMath(task.q)));
    if (task.chart) card.insertAdjacentHTML("beforeend", chartSvg(task.chart));
    if (task.data) card.insertAdjacentHTML("beforeend", dataTable(task.data));
    if (task.vis) card.insertAdjacentHTML("beforeend", visual(task.vis));
    if (task.note) card.appendChild(el("p", { class: "task-note" }, task.note));

    const answer = saved && saved.answer ? JSON.parse(JSON.stringify(saved.answer)) : {};
    const controls = [];
    let locked = false;

    const fb = el("div", { class: "feedback", "aria-live": "polite" }); fb.hidden = true;
    const sol = solutionBlock(task);
    const actions = el("div", { class: "task-actions" });
    const checkBtn = el("button", { class: "btn btn-small btn-ink", type: "button" }, "Sprawdź");
    const hint = el("span", { class: "hint" });

    function pick(container, value, label, key, group, isAnswer, cls) {
      const b = el("button", { class: "opt" + (cls ? " " + cls : ""), type: "button", role: "radio", "aria-checked": String(answer[key] === value) },
        `<span class="l">${value}</span>${label ? "<span>" + fmtMath(label) + "</span>" : ""}`);
      b.addEventListener("click", () => {
        if (locked) return;
        answer[key] = value;
        group.forEach(x => x.setAttribute("aria-checked", String(x === b)));
        if (hooks.onChange) hooks.onChange(answer);
        if (mode === "practice" && task.type === "abcd") api.check();
      });
      group.push(b); container.appendChild(b);
      controls.push({ kind: "opt", node: b, chosen: () => answer[key] === value, isAnswer });
    }
    function input(key, unit, aria, check, show, why) {
      const wrap = el("div", { class: "inp" });
      const id = "in-" + mode + "-" + task.id + "-" + key;
      const inp = el("input", { id, type: "text", inputmode: "decimal", autocomplete: "off", "aria-label": aria });
      inp.value = answer[key] || "";
      inp.addEventListener("input", () => { answer[key] = inp.value; if (hooks.onChange) hooks.onChange(answer); });
      inp.addEventListener("keydown", e => { if (e.key === "Enter" && mode === "practice") checkBtn.click(); });
      wrap.appendChild(inp);
      if (unit) wrap.appendChild(el("span", { class: "unit" }, unit));
      const fix = el("span", { class: "fix" }); fix.hidden = true;
      controls.push({ kind: "inp", node: wrap, key, check, show, fix, why });
      return { wrap, id, fix };
    }

    // ----- rysowanie według typu -----
    if (task.type === "abcd") {
      const box = el("div", { class: "opts" + (task.opts.some(o => String(o).length > 18) ? " long" : ""), role: "radiogroup", "aria-label": "Odpowiedzi" });
      const group = [];
      task.opts.forEach((o, k) => pick(box, LETTERS[k], o, "choice", group, k === task.ok));
      card.appendChild(box);
    }
    if (task.type === "pf") {
      const t = el("table", { class: "pf" });
      task.items.forEach((it, k) => {
        const tr = el("tr");
        tr.appendChild(el("td", {}, fmtMath(it.t)));
        const td = el("td", { class: "pfb", role: "radiogroup", "aria-label": "Prawda czy fałsz" });
        const group = [];
        ["P", "F"].forEach(v => pick(td, v, "", "pf" + k, group, it.ok === v));
        tr.appendChild(td); t.appendChild(tr);
      });
      card.appendChild(t);
    }
    if (task.type === "pair") {
      const box = el("div", { class: "pair" });
      task.parts.forEach((p, k) => {
        const row = el("div", { class: "pair-row" });
        row.appendChild(el("div", { class: "pair-label" }, fmtMath(p.label)));
        const g = el("div", { class: "pair-opts", role: "radiogroup", "aria-label": p.label });
        const group = [];
        Object.entries(p.opts).forEach(([L, txt]) => pick(g, L, txt, "p" + k, group, p.ok === L));
        row.appendChild(g);
        box.appendChild(row);
      });
      card.appendChild(box);
    }
    if (task.type === "tn") {
      const box = el("div", { class: "tn" });
      const r1 = el("div", { class: "tn-row", role: "radiogroup", "aria-label": "Tak albo nie" });
      const g1 = [];
      pick(r1, "T", "Tak", "tn", g1, task.ok === "T");
      pick(r1, "N", "Nie", "tn", g1, task.ok === "N");
      box.appendChild(r1);
      box.appendChild(el("div", { class: "tn-because" }, "ponieważ"));
      const r2 = el("div", { class: "tn-reasons", role: "radiogroup", "aria-label": "Uzasadnienie" });
      const g2 = [];
      Object.entries(task.reasons).forEach(([n, txt]) => pick(r2, n, txt, "r", g2, task.okReason === n));
      box.appendChild(r2);
      card.appendChild(box);
    }
    if (task.type === "fields") {
      const box = el("div", { class: "fields" });
      task.fields.forEach((f, k) => {
        const fw = el("div", { class: "field" });
        if (f.choice) {
          fw.appendChild(el("label", {}, fmtMath(f.label)));
          const row = el("div", { class: "choice-row", role: "radiogroup", "aria-label": f.label });
          const group = [];
          f.choice.forEach(v => pick(row, v, "", "f" + k, group, f.ans === v));
          fw.appendChild(row);
        } else {
          const whyFn = f.why ? v => { const hit = f.why.find(([val]) => f.text ? norm(v) === norm(val) : same(toNumber(v), val)); return hit ? hit[1] : ""; } : null;
          const { wrap, id, fix } = input("f" + k, f.unit, f.label, () => fieldOk(f, answer["f" + k]), f.show, whyFn);
          if (f.text) wrap.querySelector("input").setAttribute("inputmode", "text");
          fw.appendChild(el("label", { for: id }, fmtMath(f.label)));
          fw.appendChild(wrap);
          fw.appendChild(fix);
        }
        box.appendChild(fw);
      });
      card.appendChild(box);
    }
    if (task.type === "table") {
      const scroll = el("div", { class: "table-scroll" });
      const t = el("table", { class: "fill" });
      t.appendChild(el("tr", {}, task.head.map(h => `<th>${h}</th>`).join("")));
      task.rows.forEach((row, r) => {
        const tr = el("tr");
        row.forEach((c, k) => {
          const td = el("td");
          if (c.given) td.textContent = c.given;
          else {
            const key = "r" + r + "c" + k;
            const { wrap, fix } = input(key, c.unit, task.head[k] + ", wiersz " + (r + 1), () => {
              const raw = String(answer[key] || "");
              if (c.frac && !raw.includes("/")) return false;
              return same(toNumber(raw), c.ans);
            }, c.show);
            td.appendChild(wrap); td.appendChild(fix);
          }
          tr.appendChild(td);
        });
        t.appendChild(tr);
      });
      scroll.appendChild(t); card.appendChild(scroll);
    }

    // ----- zadanie otwarte z samooceną -----
    let selfBox = null;
    const selfPts = () => (answer.self || []).reduce((s, v, i) => s + (v ? task.criteria[i].pts : 0), 0);
    const selfMax = task.type === "self" ? task.criteria.reduce((s, c) => s + c.pts, 0) : 0;
    function buildSelf() {
      selfBox = el("div", { class: "self-box" });
      selfBox.innerHTML = `<div class="self-title">Oceń swoje rozwiązanie tak jak egzaminator</div>
        <p class="self-lead">Porównaj to, co masz na kartce, z rozwiązaniem powyżej. Zaznacz to, co masz dobrze.</p>`;
      answer.self = answer.self || task.criteria.map(() => false);
      task.criteria.forEach((c, i) => {
        const id = "self-" + mode + "-" + task.id + "-" + i;
        const row = el("label", { class: "self-row", for: id });
        const cb = el("input", { type: "checkbox", id });
        cb.checked = !!answer.self[i];
        cb.addEventListener("change", () => {
          answer.self[i] = cb.checked;
          selfSum.textContent = selfPts() + " / " + selfMax + " pkt";
          if (hooks.onChange) hooks.onChange(answer);
          if (hooks.onSelfScore) hooks.onSelfScore(selfPts());
        });
        row.appendChild(cb);
        row.appendChild(el("span", {}, fmtMath(c.t)));
        row.appendChild(el("b", {}, "+" + c.pts + " pkt"));
        selfBox.appendChild(row);
      });
      const sum = el("div", { class: "self-sum" });
      sum.appendChild(el("span", {}, "Twój wynik:"));
      const selfSum = el("b", {}, selfPts() + " / " + selfMax + " pkt");
      sum.appendChild(selfSum);
      selfBox.appendChild(sum);
      return selfBox;
    }

    function isComplete() {
      if (task.type === "self") return true;
      if (task.type === "abcd") return !!answer.choice;
      if (task.type === "pf") return task.items.every((_, k) => answer["pf" + k]);
      if (task.type === "pair") return task.parts.every((_, k) => answer["p" + k]);
      if (task.type === "tn") return !!answer.tn && !!answer.r;
      const filled = controls.filter(c => c.kind === "inp").every(c => String(answer[c.key] ?? "").trim() !== "");
      const chosen = (task.fields || []).every((f, k) => !f.choice || answer["f" + k]);
      return filled && chosen;
    }
    function evaluate() {
      const pts = task.pts || 1;
      if (task.type === "self") { const p = selfPts(); return { correct: p === selfMax, points: p }; }
      if (task.type === "abcd") { const ok = answer.choice === LETTERS[task.ok]; return { correct: ok, points: ok ? pts : 0 }; }
      if (task.type === "pf") { const ok = task.items.every((it, k) => answer["pf" + k] === it.ok); return { correct: ok, points: ok ? pts : 0 }; }
      if (task.type === "pair") { const ok = task.parts.every((p, k) => answer["p" + k] === p.ok); return { correct: ok, points: ok ? pts : 0 }; }
      if (task.type === "tn") { const ok = answer.tn === task.ok && answer.r === task.okReason; return { correct: ok, points: ok ? pts : 0 }; }
      if (task.type === "fields") {
        const res = task.fields.map((f, k) => f.choice ? answer["f" + k] === f.ans : fieldOk(f, answer["f" + k]));
        const good = res.filter(Boolean).length, ok = good === res.length;
        return { correct: ok, points: task.perField ? good : (ok ? pts : 0) };
      }
      const ok = controls.every(c => c.check());
      return { correct: ok, points: ok ? pts : 0 };
    }
    function mark() {
      controls.forEach(c => {
        c.node.classList.remove("is-ok", "is-bad");
        if (c.kind === "opt") {
          if (c.isAnswer) c.node.classList.add("is-ok");
          else if (c.chosen()) c.node.classList.add("is-bad");
        } else {
          const ok = c.check();
          c.node.classList.add(ok ? "is-ok" : "is-bad");
          c.fix.hidden = ok;
          if (!ok) {
            const w = c.why ? c.why(answer[c.key]) : "";
            c.fix.innerHTML = "Poprawnie: " + c.show + (w ? `<span class="fix-why">${fmtMath(w)}</span>` : "");
          }
        }
      });
    }
    function feedbackText(r) {
      if (task.type === "abcd") {
        if (r.correct) return { head: "Dobrze!", body: "" };
        return { head: "Nie tym razem. Poprawna odpowiedź to " + LETTERS[task.ok] + ".", body: (task.why && task.why[answer.choice]) || "" };
      }
      if (r.correct) return { head: "Dobrze! Wszystko się zgadza.", body: "" };
      const body = (task.type === "fields" || task.type === "table")
        ? "Pod błędnymi polami jest poprawny wynik. Otwórz rozwiązanie, żeby zobaczyć, jak go policzyć."
        : "Poprawne odpowiedzi są zaznaczone na zielono. Otwórz rozwiązanie, żeby zobaczyć dlaczego.";
      return { head: "Nie wszystko się zgadza.", body };
    }
    function lock() {
      locked = true;
      card.classList.add("done");
      card.querySelectorAll(".inp input").forEach(i => { i.disabled = true; });
      checkBtn.hidden = true;
    }
    function showFb(r, prefix) {
      const t = feedbackText(r);
      fb.hidden = false;
      fb.className = "feedback " + (r.correct ? "ok" : "bad");
      fb.innerHTML = `<b>${prefix || ""}${t.head}</b>${t.body ? `<p>${fmtMath(t.body)}</p>` : ""}`;
    }

    const api = {
      card, answer, isComplete, evaluate, actions, hint,
      check() {
        if (task.type === "self") {
          lock();
          sol.hidden = false; sol.open();
          if (!selfBox) card.insertBefore(buildSelf(), actions);
          const save = el("button", { class: "btn btn-small btn-ink", type: "button" }, "Zapisz ocenę");
          save.addEventListener("click", () => {
            const r = evaluate();
            fb.hidden = false;
            fb.className = "feedback " + (r.correct ? "ok" : "bad");
            fb.innerHTML = `<b>${r.points} / ${selfMax} pkt</b><p>${r.correct ? "Pełne rozwiązanie. Tak trzymaj!" : "Sprawdź w rozwiązaniu, czego zabrakło. Następnym razem zapisz to na kartce."}</p>`;
            save.remove();
            if (hooks.onChecked) hooks.onChecked(r, answer);
          });
          actions.insertBefore(save, actions.firstChild);
          return null;
        }
        if (!isComplete()) { hint.textContent = "Najpierw zaznacz lub wpisz wszystkie odpowiedzi."; return null; }
        hint.textContent = "";
        const r = evaluate();
        mark(); lock(); showFb(r);
        sol.hidden = false;
        if (hooks.onChecked) hooks.onChecked(r, answer);
        return r;
      },
      reveal() {
        lock();
        sol.hidden = false;
        if (task.type === "self") {
          sol.open();
          if (!selfBox) card.appendChild(buildSelf());
          return { correct: false, points: selfPts() };
        }
        const r = evaluate();
        mark(); showFb(r, `${r.points} / ${task.pts || 1} pkt · `);
        return r;
      },
      restore() {
        if (saved && saved.checked) {
          if (task.type === "self") {
            lock(); sol.hidden = false;
            card.insertBefore(buildSelf(), actions);
            const r = evaluate();
            showFb({ correct: r.correct }, "");
            fb.innerHTML = `<b>${r.points} / ${selfMax} pkt</b>`;
          } else if (isComplete()) api.check();
        }
      }
    };

    if (mode === "practice") {
      if (task.type === "self") {
        checkBtn.textContent = "Pokaż rozwiązanie i oceń się";
        card.appendChild(el("p", { class: "task-note", style: "margin-top:4px" }, "Rozwiąż zadanie na kartce. Potem porównaj swoje rozwiązanie z naszym i oceń się według punktacji."));
      }
      if (task.type !== "abcd") actions.appendChild(checkBtn);
      actions.appendChild(hint);
      checkBtn.addEventListener("click", () => api.check());
    } else if (task.type === "self") {
      card.appendChild(el("p", { class: "task-note", style: "margin-top:4px" }, "Zapisz pełne rozwiązanie na kartce. Po zakończeniu testu ocenisz je według punktacji."));
    }
    card.appendChild(fb);
    card.appendChild(sol);
    card.appendChild(actions);
    return api;
  }

  // =========================================================
  // NAUKA
  // =========================================================
  function miniTask(host, task, title) {
    const b = buildTask(task, null, "practice", S.learnTasks[task.id], {
      onChange: a => { S.learnTasks[task.id] = Object.assign(S.learnTasks[task.id] || {}, { answer: a }); M8.save(); },
      onChecked: (r, a) => { S.learnTasks[task.id] = { answer: a, checked: true, correct: r.correct }; M8.save(); document.dispatchEvent(new Event("m8:checked")); }
    });
    b.card.classList.add("mini");
    b.card.insertAdjacentHTML("afterbegin", `<div class="mini-title">${title}</div>`);
    host.appendChild(b.card);
    b.restore();
  }
  // ---------- obrazki do lekcji (proste SVG) ----------
  const VIS = {
    chart: v => chartSvg(v),
    // kratka 10 × 10 z zamalowanymi n polami
    grid(v) {
      let g = "";
      for (let i = 0; i < 100; i++) {
        const x = (i % 10) * 22, y = Math.floor(i / 10) * 22;
        g += `<rect x="${x + 1}" y="${y + 1}" width="20" height="20" rx="3" class="${i < v.n ? "on" : "off"}"/>`;
      }
      return `<svg class="vis-grid" viewBox="0 0 222 222" role="img" aria-label="${v.alt}">${g}</svg>`;
    },
    // pasek całości z zaznaczoną częścią
    bar(v) {
      const W = 460, w = Math.round(W * v.p / 100);
      return `<svg class="vis-bar" viewBox="0 0 500 96" role="img" aria-label="${v.alt}">
        <rect x="20" y="20" width="${W}" height="40" rx="8" class="whole"/>
        <rect x="20" y="20" width="${w}" height="40" rx="8" class="part"/>
        <text x="${20 + w / 2}" y="46" text-anchor="middle" class="in">${v.partLabel}</text>
        ${v.p < 85 ? `<text x="${20 + w + (W - w) / 2}" y="46" text-anchor="middle" class="in dark">${v.restLabel || ""}</text>` : ""}
        <text x="20" y="84" class="cap">0</text><text x="${20 + W}" y="84" text-anchor="end" class="cap">${v.wholeLabel}</text></svg>`;
    },
    // dwa paski: przed i po zmianie
    change(v) {
      const unit = 380 / Math.max(100, v.after), W = Math.round(100 * unit), w2 = Math.round(v.after * unit);
      const mark = v.after > 100
        ? `<line x1="${110 + W}" y1="8" x2="${110 + W}" y2="114" class="mark"/><text x="${110 + W + (w2 - W) / 2}" y="97" text-anchor="middle" class="in">+${v.after - 100}%</text>`
        : `<text x="${110 + w2 + (W - w2) / 2}" y="97" text-anchor="middle" class="cap">−${100 - v.after}%</text>`;
      const mid = v.after > 100 ? 110 + W / 2 : 110 + w2 / 2;
      return `<svg class="vis-bar" viewBox="0 0 500 130" role="img" aria-label="${v.alt}">
        <text x="0" y="36" class="cap">${v.l1}</text><rect x="110" y="14" width="${W}" height="34" rx="8" class="whole"/>
        <text x="${110 + W / 2}" y="37" text-anchor="middle" class="in dark">100%</text>
        <text x="0" y="96" class="cap">${v.l2}</text><rect x="110" y="74" width="${w2}" height="34" rx="8" class="part"/>
        <text x="${mid}" y="97" text-anchor="middle" class="in">${v.after}%</text>${mark}</svg>`;
    }
  };
  const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  // waga: lewa i prawa strona równania na szalkach
  VIS.scale = v => {
    const L = esc(v.left), R = esc(v.right);
    return `<svg class="vis-bar vis-scale" viewBox="0 0 500 170" role="img" aria-label="${esc(v.alt || "Waga: " + v.left + " = " + v.right)}">
      <path class="stand" d="M250,58 L226,150 L274,150 Z"/><rect class="stand" x="200" y="150" width="100" height="10" rx="4"/>
      <line class="beam" x1="40" y1="58" x2="460" y2="58"/><circle class="pivot" cx="250" cy="58" r="7"/>
      <line class="beam thin" x1="60" y1="58" x2="60" y2="74"/><line class="beam thin" x1="180" y1="58" x2="180" y2="74"/>
      <line class="beam thin" x1="320" y1="58" x2="320" y2="74"/><line class="beam thin" x1="440" y1="58" x2="440" y2="74"/>
      <rect class="part" x="30" y="74" width="180" height="48" rx="10"/><rect class="part" x="290" y="74" width="180" height="48" rx="10"/>
      <text class="in" x="120" y="104" text-anchor="middle">${L}</text><text class="in" x="380" y="104" text-anchor="middle">${R}</text>
      ${v.note ? `<text class="cap" x="250" y="30" text-anchor="middle">${esc(v.note)}</text>` : ""}</svg>`;
  };
  // paski (model do zadań tekstowych): każdy wiersz to osoba/wielkość złożona z części
  VIS.tape = v => {
    const x0 = 118, W = 300, unit = W / Math.max(...v.rows.map(r => r.parts.reduce((a, p) => a + (p.w || 1), 0)));
    let g = "", y = 12;
    v.rows.forEach(r => {
      let x = x0;
      g += `<text class="cap lbl" x="0" y="${y + 26}">${esc(r.label)}</text>`;
      r.parts.forEach(p => {
        const w = (p.w || 1) * unit;
        g += `<rect class="${p.c ? "whole" : "part"}" x="${x}" y="${y}" width="${w}" height="38" rx="6"/><text class="in" x="${x + w / 2}" y="${y + 25}" text-anchor="middle">${esc(p.t)}</text>`;
        x += w;
      });
      if (r.sum) g += `<text class="cap" x="${x + 10}" y="${y + 25}">${esc(r.sum)}</text>`;
      y += 50;
    });
    if (v.total) g += `<text class="cap" x="${x0}" y="${y + 14}">${esc(v.total)}</text>`;
    const h = y + (v.total ? 26 : 4);
    return `<svg class="vis-bar vis-tape" viewBox="0 0 500 ${h}" role="img" aria-label="${esc(v.alt || "Model paskowy")}">${g}</svg>`;
  };
  // prostokąt podzielony na części: mnożenie sumy przez sumę lub jednomian
  VIS.area = v => {
    const cw = v.cw || v.cols.map(() => 1), rh = v.rh || v.rows.map(() => 1);
    const W = 340, H = Math.min(220, 70 * rh.reduce((a, b) => a + b, 0) + 40), x0 = 90, y0 = 40;
    const sx = W / cw.reduce((a, b) => a + b, 0), sy = (H - 40) / rh.reduce((a, b) => a + b, 0);
    let g = "", x = x0;
    v.cols.forEach((c, i) => { g += `<text class="cap" x="${x + cw[i] * sx / 2}" y="${y0 - 12}" text-anchor="middle">${esc(c)}</text>`; x += cw[i] * sx; });
    let y = y0;
    v.rows.forEach((r, j) => {
      g += `<text class="cap" x="${x0 - 12}" y="${y + rh[j] * sy / 2 + 5}" text-anchor="end">${esc(r)}</text>`;
      let xx = x0;
      v.cols.forEach((c, i) => {
        g += `<rect class="${(i + j) % 2 ? "whole" : "part"}" x="${xx}" y="${y}" width="${cw[i] * sx}" height="${rh[j] * sy}"/>`;
        g += `<text class="in" x="${xx + cw[i] * sx / 2}" y="${y + rh[j] * sy / 2 + 6}" text-anchor="middle">${esc(v.cells[j][i])}</text>`;
        xx += cw[i] * sx;
      });
      y += rh[j] * sy;
    });
    return `<svg class="vis-bar vis-area" viewBox="0 0 ${x0 + W + 20} ${y + 10}" role="img" aria-label="${esc(v.alt || "Prostokąt podzielony na części")}">${g}</svg>`;
  };
  // geometria: punkty (x, y w jednostkach, y w górę), wielokąty, odcinki, okręgi, podpisy boków i kątów, kratka, osie
  VIS.shape = v => {
    const P = v.pts, ks = Object.keys(P), xs = ks.map(k => P[k][0]), ys = ks.map(k => P[k][1]);
    (v.circles || []).forEach(c => { xs.push(P[c.c][0] - c.r, P[c.c][0] + c.r); ys.push(P[c.c][1] - c.r, P[c.c][1] + c.r); });
    (v.arcs || []).forEach(c => { for (let d = c.a1; d <= c.a2; d += 15) { xs.push(P[c.c][0] + c.r * Math.cos(d * Math.PI / 180)); ys.push(P[c.c][1] + c.r * Math.sin(d * Math.PI / 180)); } });
    let x1 = Math.min(...xs), x2 = Math.max(...xs), y1 = Math.min(...ys), y2 = Math.max(...ys);
    if (v.axes) { x1 = Math.min(x1, 0); x2 = Math.max(x2, 0); y1 = Math.min(y1, 0); y2 = Math.max(y2, 0); }
    if (v.grid || v.axes) {
      x1 = Math.floor(x1) - 1; x2 = Math.ceil(x2) + 1; y1 = Math.floor(y1) - 1; y2 = Math.ceil(y2) + 1;
      // zbyt wąski układ (np. jeden punkt na osi) poszerzamy, żeby rysunek nie był przesadnie powiększony
      if (x2 - x1 < 6) { const d = (6 - (x2 - x1)) / 2; x1 = Math.floor(x1 - d); x2 = Math.ceil(x2 + d); }
      if (y2 - y1 < 5) { const d = (5 - (y2 - y1)) / 2; y1 = Math.floor(y1 - d); y2 = Math.ceil(y2 + d); }
    }
    const s = Math.min(340 / (x2 - x1 || 1), (v.axes ? 300 : 230) / (y2 - y1 || 1)), m = 34;
    const num = i => i < 0 ? "−" + -i : String(i);
    const X = x => m + (x - x1) * s, Y = y => m + (y2 - y) * s, W = 2 * m + (x2 - x1) * s, H = 2 * m + (y2 - y1) * s;
    const S = k => [X(P[k][0]), Y(P[k][1])];
    const cx = ks.reduce((a, k) => a + S(k)[0], 0) / ks.length, cy = ks.reduce((a, k) => a + S(k)[1], 0) / ks.length;
    const away = (x, y, d) => { let dx = x - cx, dy = y - cy, n = Math.hypot(dx, dy); if (n < 1) { dx = 0; dy = -1; n = 1; } return [x + dx / n * d, y + dy / n * d + 5]; };
    let g = "";
    if (v.grid) for (let i = x1; i <= x2; i++) g += `<line class="gl" x1="${X(i)}" y1="${Y(y1)}" x2="${X(i)}" y2="${Y(y2)}"/>`;
    if (v.grid) for (let j = y1; j <= y2; j++) g += `<line class="gl" x1="${X(x1)}" y1="${Y(j)}" x2="${X(x2)}" y2="${Y(j)}"/>`;
    if (v.axes) {
      g += `<line class="ax" x1="${X(x1)}" y1="${Y(0)}" x2="${X(x2) + 10}" y2="${Y(0)}"/><line class="ax" x1="${X(0)}" y1="${Y(y1)}" x2="${X(0)}" y2="${Y(y2) - 10}"/>`;
      g += `<text class="cap" x="${X(x2) + 8}" y="${Y(0) + 20}">x</text><text class="cap" x="${X(0) + 8}" y="${Y(y2) - 4}">y</text>`;
      const st = Math.max(1, Math.ceil((x2 - x1) / 12));
      for (let i = x1 + 1; i < x2; i++) if (i && i % st === 0) g += `<text class="tk" x="${X(i)}" y="${Y(0) + 15}" text-anchor="middle">${num(i)}</text>`;
      for (let j = y1 + 1; j < y2; j++) if (j && j % st === 0) g += `<text class="tk" x="${X(0) - 6}" y="${Y(j) + 4}" text-anchor="end">${num(j)}</text>`;
      g += `<text class="tk" x="${X(0) - 6}" y="${Y(0) + 15}" text-anchor="end">0</text>`;
    }
    // circlesFirst: koło pod wielokątami (np. figura wpisana w koło), domyślnie koło na wierzchu
    const drawPolys = () => {
      (v.polys || []).forEach((p, i) => { g += `<polygon class="${(v.shade || []).includes(i) ? "fig sh" : "fig"}" points="${p.map(k => S(k).join(",")).join(" ")}"/>`; });
    };
    const drawCircles = () => {
      (v.circles || []).forEach(c => { g += `<circle class="${c.sh ? "fig sh" : "fig"}" cx="${S(c.c)[0]}" cy="${S(c.c)[1]}" r="${c.r * s}"/>`; });
      // łuki: wycinek (pie) albo odcinek koła / półkole (a1 → a2 w stopniach, przeciwnie do ruchu wskazówek zegara)
      (v.arcs || []).forEach(a => {
        const [ox, oy] = S(a.c), R = a.r * s, rad = d => d * Math.PI / 180;
        const p1 = [ox + R * Math.cos(rad(a.a1)), oy - R * Math.sin(rad(a.a1))], p2 = [ox + R * Math.cos(rad(a.a2)), oy - R * Math.sin(rad(a.a2))];
        const big = (a.a2 - a.a1) % 360 > 180 ? 1 : 0;
        g += `<path class="${a.sh ? "fig sh" : "fig"}${a.open ? " open" : ""}" d="${a.pie ? `M${ox} ${oy} L` : "M"}${p1[0]} ${p1[1]} A${R} ${R} 0 ${big} 0 ${p2[0]} ${p2[1]}${a.open ? "" : " Z"}"/>`;
      });
    };
    if (v.circlesFirst) { drawCircles(); drawPolys(); } else { drawPolys(); drawCircles(); }
    (v.segs || []).forEach(([a, b]) => { g += `<line class="dash" x1="${S(a)[0]}" y1="${S(a)[1]}" x2="${S(b)[0]}" y2="${S(b)[1]}"/>`; });
    (v.angles || []).forEach(a => {
      const [vx, vy] = S(a.at), u = k => { const [x, y] = S(k), n = Math.hypot(x - vx, y - vy); return [(x - vx) / n, (y - vy) / n]; };
      const u1 = u(a.from), u2 = u(a.to), r = a.r || 24, cr = u1[0] * u2[1] - u1[1] * u2[0];
      let bx = u1[0] + u2[0], by = u1[1] + u2[1], bn = Math.hypot(bx, by) || 1; bx /= bn; by /= bn;
      if (a.right) g += `<path class="arc" d="M${vx + u1[0] * 14} ${vy + u1[1] * 14} L${vx + (u1[0] + u2[0]) * 14} ${vy + (u1[1] + u2[1]) * 14} L${vx + u2[0] * 14} ${vy + u2[1] * 14}"/>`;
      else g += `<path class="arc" d="M${vx + u1[0] * r} ${vy + u1[1] * r} A${r} ${r} 0 0 ${cr > 0 ? 1 : 0} ${vx + u2[0] * r} ${vy + u2[1] * r}"/>`;
      if (a.t) g += `<text class="ang" x="${vx + bx * (r + 16)}" y="${vy + by * (r + 16) + 5}" text-anchor="middle">${esc(a.t)}</text>`;
    });
    // podpis boku: odsunięty prostopadle od odcinka (na zewnątrz figury albo na stronę wskazaną znakiem d),
    // tym dalej, im szerszy napis i bardziej pionowy odcinek
    (v.sides || []).forEach(([a, b, t, d]) => {
      const [ax, ay] = S(a), [bx, by] = S(b), mx = (ax + bx) / 2, my = (ay + by) / 2, len = Math.hypot(bx - ax, by - ay) || 1;
      let nx = -(by - ay) / len, ny = (bx - ax) / len;
      const sign = d === undefined ? ((mx - cx) * nx + (my - cy) * ny >= 0 ? 1 : -1) : (d < 0 ? -1 : 1);
      if (d === undefined && Math.abs((mx - cx) * nx + (my - cy) * ny) < 1) { nx = 0; ny = 1; }
      const w = String(t).length * 7.6, gap = 9 + Math.abs(nx) * w / 2 + Math.abs(ny) * 7;
      g += `<text class="in" x="${mx + sign * nx * gap}" y="${my + sign * ny * gap + 5}" text-anchor="middle">${esc(t)}</text>`;
    });
    (v.texts || []).forEach(([k, t, dx, dy]) => { g += `<text class="in" x="${S(k)[0] + (dx || 0)}" y="${S(k)[1] + (dy || 0) + 5}" text-anchor="middle">${esc(t)}</text>`; });
    // długie podpisy punktów (np. „A(−4, −1)”) przy brzegu rysunku: poszerzamy viewBox, żeby nie wychodziły poza ramkę
    let vx0 = 0, vx1 = W;
    ks.forEach(k => {
      if ((v.hide || []).includes(k)) return;
      const [x, y] = S(k), nm = v.names && k in v.names ? v.names[k] : k;
      // podpis odsunięty od kropki tym dalej, im dłuższy napis (np. „A(3, 2)” nie zasłania punktu)
      let dx = x - cx, dy = y - cy, n = Math.hypot(dx, dy);
      if (n < 1) { dx = 0; dy = -1; n = 1; }
      dx /= n; dy /= n;
      const w = String(nm).length * 9, gap = 12 + Math.abs(dx) * w / 2 + Math.abs(dy) * 4;
      const lx = x + dx * gap, ly = y + dy * gap + 5;
      if (nm) { vx0 = Math.min(vx0, lx - w / 2 - 4); vx1 = Math.max(vx1, lx + w / 2 + 4); }
      g += `${v.nodots ? "" : `<circle class="pt" cx="${x}" cy="${y}" r="3"/>`}${nm ? `<text class="lab" x="${lx}" y="${ly}" text-anchor="middle">${esc(nm)}</text>` : ""}`;
    });
    return `<svg class="vis-shape${v.grid ? " on-grid" : ""}" style="max-width:min(100%, ${Math.round(Math.max(vx1 - vx0, 220))}px)" viewBox="${vx0} 0 ${vx1 - vx0} ${H}" role="img" aria-label="${esc(v.alt || "Rysunek geometryczny")}">${g}</svg>`;
  };
  VIS.solid = v => {
    const k = v.depth || 0.5, a = (v.tilt || 40) * Math.PI / 180, pts = {};
    Object.entries(v.pts3).forEach(([n, [x, y, z]]) => { pts[n] = [x + k * y * Math.cos(a), z + k * y * Math.sin(a)]; });
    return VIS.shape(Object.assign({ nodots: true }, v, { pts, alt: v.alt || "Rysunek bryły" }));
  };
  // tabela danych jako obrazek w lekcji
  VIS.table = v => dataTable(v);
  // kule w pudełku: v.balls = [["r", 3], ["b", 2, "7"]] (kolor, ile, opcjonalny napis) albo v.list = [["w", "1"], …]
  const BALL = { r: "czerwona", b: "niebieska", g: "zielona", y: "żółta", w: "biała", k: "czarna" };
  VIS.urn = v => {
    const list = v.list || [].concat(...v.balls.map(([c, n, t]) => Array.from({ length: n }, () => [c, t || ""])));
    // kule z numerami układamy jak tekst (od góry, od lewej), żeby numery czytało się po kolei; kolorowe leżą od dna pudełka
    const labeled = list.some(([, t]) => t), per = v.per || (labeled && list.length <= 16 ? Math.ceil(list.length / 2) : Math.min(8, Math.max(4, Math.ceil(Math.sqrt(list.length * 2)))));
    const rows = Math.ceil(list.length / per), R = 17, D = 42;
    const bw = per * D + 26, bh = rows * D + 30, W = bw + 20, H = bh + 22;
    let g = `<path class="box" d="M10,12 V${bh + 6} Q10,${bh + 16} 20,${bh + 16} H${bw} Q${bw + 10},${bh + 16} ${bw + 10},${bh + 6} V12"/>`;
    list.forEach(([c, t], i) => {
      const r = labeled ? Math.floor(i / per) : rows - 1 - Math.floor(i / per), col = i % per, x = 10 + 13 + D / 2 + col * D, y = 16 + 14 + D / 2 + r * D - 6;
      g += `<circle class="ball ${c}${v.hl && v.hl.includes(i) ? " hl" : ""}" cx="${x}" cy="${y}" r="${R}"/>`;
      if (t) g += `<text class="bt ${c}" x="${x}" y="${y + 6}" text-anchor="middle">${esc(t)}</text>`;
    });
    return `<svg class="vis-urn" style="max-width:min(100%, ${W * 1.1}px)" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(v.alt || "Kule w pudełku")}">${g}</svg>`;
  };
  // ścianki kostki do gry: v.faces = [1, 2, …], v.hl = ścianki wyróżnione (zdarzenie sprzyjające)
  const PIPS = { 1: [[1, 1]], 2: [[0, 0], [2, 2]], 3: [[0, 0], [1, 1], [2, 2]], 4: [[0, 0], [2, 0], [0, 2], [2, 2]], 5: [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]], 6: [[0, 0], [2, 0], [0, 1], [2, 1], [0, 2], [2, 2]] };
  VIS.dice = v => {
    const faces = v.faces || [1, 2, 3, 4, 5, 6], S = 54, G = 14, W = faces.length * (S + G) - G + 8, H = S + 8;
    let g = "";
    faces.forEach((f, i) => {
      const x = 4 + i * (S + G), y = 4;
      g += `<rect class="die${v.hl && v.hl.includes(f) ? " hl" : ""}" x="${x}" y="${y}" width="${S}" height="${S}" rx="10"/>`;
      (PIPS[f] || []).forEach(([a, b]) => { g += `<circle class="pip" cx="${x + 13 + a * 14}" cy="${y + 13 + b * 14}" r="5"/>`; });
    });
    return `<svg class="vis-dice" style="max-width:min(100%, ${W}px)" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(v.alt || "Ścianki kostki do gry")}">${g}</svg>`;
  };
  // wyniki rzutu monetami: v.rows = [["O", "O"], ["O", "R"], …]; v.hl = numery wierszy wyróżnionych
  VIS.coins = v => {
    const rows = v.rows, n = Math.max(...rows.map(r => r.length)), R = 19, cw = n * 46 + 18, perLine = Math.max(1, Math.min(rows.length, Math.floor(440 / (cw + 12))));
    const lines = Math.ceil(rows.length / perLine), W = perLine * (cw + 12) - 12 + 4, H = lines * 58;
    let g = "";
    rows.forEach((r, i) => {
      const bx = 2 + (i % perLine) * (cw + 12), by = 2 + Math.floor(i / perLine) * 58;
      g += `<rect class="cbox${v.hl && v.hl.includes(i) ? " hl" : ""}" x="${bx}" y="${by}" width="${cw}" height="52" rx="12"/>`;
      r.forEach((t, j) => { const x = bx + 9 + R + 4 + j * 46, y = by + 26; g += `<circle class="coin" cx="${x}" cy="${y}" r="${R}"/><text class="ct" x="${x}" y="${y + 6}" text-anchor="middle">${esc(t)}</text>`; });
    });
    return `<svg class="vis-coins" style="max-width:min(100%, ${W}px)" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(v.alt || "Wyniki rzutu monetami")}">${g}</svg>`;
  };
  // ponumerowane kartki, losy albo kule w rzędach: v.from, v.to (albo v.nums), v.hl = wyróżnione numery, v.per = ile w rzędzie
  VIS.cards = v => {
    const nums = v.nums || Array.from({ length: v.to - v.from + 1 }, (_, i) => v.from + i), per = v.per || Math.min(10, nums.length);
    const S = nums.length > 40 ? 32 : 40, G = 6, W = per * (S + G) - G + 4, H = Math.ceil(nums.length / per) * (S + G) - G + 4;
    const hl = new Set(v.hl || []);
    let g = "";
    nums.forEach((nr, i) => {
      const x = 2 + (i % per) * (S + G), y = 2 + Math.floor(i / per) * (S + G);
      g += `<rect class="card${hl.has(nr) ? " hl" : ""}" x="${x}" y="${y}" width="${S}" height="${S}" rx="7"/><text class="nt${S < 40 ? " sm" : ""}" x="${x + S / 2}" y="${y + S / 2 + 5}" text-anchor="middle">${nr}</text>`;
    });
    return `<svg class="vis-cards" style="max-width:min(100%, ${W * 1.05}px)" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(v.alt || "Ponumerowane kartki")}">${g}</svg>`;
  };
  const visual = v => v && VIS[v.type] ? `<figure class="vis">${VIS[v.type](v)}${v.caption ? `<figcaption>${fmtMath(v.caption)}</figcaption>` : ""}</figure>` : "";

  function saveLearnPct() {
    if (T.lessons) {
      const done = T.lessons.filter((l, i) => (S.revealed[i] || 0) >= l.example.steps.length).length;
      S.learnPct = S.learned ? 100 : Math.round(done / T.lessons.length * 100);
    } else {
      const seen = T.examples.reduce((s, e, i) => s + Math.min(e.steps.length, S.revealed[i] || 0), 0);
      S.learnPct = S.learned ? 100 : Math.round(seen / EX_STEPS * 100);
    }
    M8.save();
  }

  // przykład z odsłanianiem kroków; po odsłonięciu całości pokazuje zadania „Teraz ty”
  function exampleCard(ex, i, youTasks) {
    const card = el("article", { class: "example box" });
    card.appendChild(el("div", { class: "etag" }, ex.tag || "Przykład"));
    card.appendChild(el("div", { class: "q" }, fmtMath(ex.q)));
    const ol = el("ol");
    ex.steps.forEach(s => { const li = el("li", {}, fmtMath(s)); li.hidden = true; ol.appendChild(li); });
    card.appendChild(ol);
    const res = el("div", { class: "result" }, fmtMath(ex.result)); res.hidden = true; card.appendChild(res);
    let tip = null;
    if (ex.tip) { tip = el("div", { class: "tip" }, fmtMath(ex.tip)); tip.hidden = true; card.appendChild(tip); }
    const btn = el("button", { class: "btn btn-small", type: "button" });
    card.appendChild(btn);
    const you = el("div", { class: "you" }); you.hidden = true;
    card.appendChild(you);
    const items = [...ol.children];
    let shown = S.revealed[i] || 0;
    let youBuilt = false;
    function render() {
      items.forEach((li, k) => { li.hidden = k >= shown; });
      const all = shown >= items.length;
      res.hidden = !all; if (tip) tip.hidden = !all; btn.hidden = all;
      btn.textContent = shown === 0 ? "Pokaż pierwszy krok" : shown === items.length - 1 ? "Pokaż ostatni krok i wynik" : "Pokaż następny krok";
      if (all && youTasks.length) {
        you.hidden = false;
        if (!youBuilt) {
          youTasks.forEach((t, k) => miniTask(you, t, youTasks.length > 1 ? `Teraz ty (${k + 1} z ${youTasks.length})` : "Teraz ty: podobne zadanie"));
          youBuilt = true;
        }
      }
    }
    btn.addEventListener("click", () => { shown = Math.min(items.length, shown + 1); S.revealed[i] = shown; saveLearnPct(); render(); document.dispatchEvent(new Event("m8:checked")); });
    render();
    return card;
  }

  function renderCheat(host) {
    if (!T.cheat) return;
    const c = el("div", { class: "cheat box" });
    c.innerHTML = `<div class="cheat-head">${T.cheat.title}</div><ol>` + T.cheat.rules.map((r, i) =>
      `<li><span class="rn">${i + 1}</span><div><div class="rt">${fmtMath(r.t)}</div>` +
      (r.f && r.f.length ? `<div class="rf">${r.f.map(f => `<span class="fbox">${f}</span>`).join("")}</div>` : "") +
      (r.e ? `<div class="re">${fmtMath(r.e)}</div>` : "") + `</div></li>`).join("") + `</ol>`;
    host.appendChild(c);
    if (T.memo) {
      const m = el("div", { class: "memo box" });
      m.innerHTML = `<h3>${T.memo.title}</h3>` +
        (T.memo.rows ? `<div class="table-scroll"><table class="conv">${T.memo.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join("")}</tr>`).join("")}</table></div>` : "") +
        (T.memo.note ? `<p>${fmtMath(T.memo.note)}</p>` : "");
      host.appendChild(m);
    }
  }
  // najważniejsze błędy z tematu (najwyżej trzy) jako krótka lista w podsumowaniu
  function renderTraps(host) {
    if (!T.traps || !T.traps.length) return;
    const t = el("div", { class: "traps box" });
    t.innerHTML = `<h3>Uważaj na te błędy</h3>` + T.traps.map(x => `<div class="trap"><div class="name">${x.name}</div>
      <div class="bad"><b>✗ Źle:</b> ${fmtMath(x.bad)}</div><div class="good"><b>✓ Dobrze:</b> ${fmtMath(x.good)}</div></div>`).join("");
    host.appendChild(t);
  }

  // ---------- NAUKA: mini-lekcje, jedna na ekranie ----------
  function initLessons(host) {
    const L = T.lessons;
    const steps = [{ kind: "warm", title: "Rozgrzewka" }]
      .concat(L.map((l, i) => ({ kind: "lesson", i, title: l.title })))
      .concat([{ kind: "sum", title: "Podsumowanie" }]);
    const nav = el("div", { class: "lesson-nav", role: "tablist", "aria-label": "Lekcje" });
    const top = progTop(nav, "Spis", "lesson-list");
    const stage = el("div");
    host.appendChild(top.box); host.appendChild(stage);
    // darmowa lekcja, pierwsze wejście: krótka orientacja nad rozgrzewką (jednorazowa)
    let intro = null;
    const INTRO = "m8-free-intro";
    const introSeen = () => { try { return localStorage.getItem(INTRO) === "1"; } catch (e) { return true; } };
    const introDone = () => { try { localStorage.setItem(INTRO, "1"); } catch (e) {} if (intro) { intro.remove(); intro = null; } };
    const nPr = (T.practice || []).length;
    if (FREE && !S.lessonIdx && !introSeen() && !buyer(null)) {
      intro = el("div", { class: "free-intro" });
      intro.innerHTML = `<div class="fi-head"><span class="fi-badge">Darmowa lekcja</span><button class="fi-x" type="button" aria-label="Zamknij informację">✕</button></div>
        <p class="fi-t">${T.title} w 3 krokach</p>
        <ol class="fi-steps"><li><span><b>Naucz się:</b> rozgrzewka i ${L.length} ${plural(L.length, "krótka lekcja", "krótkie lekcje", "krótkich lekcji")}</span></li><li><span><b>Ćwicz:</b> ${nPr} ${plural(nPr, "zadanie", "zadania", "zadań")}, wynik od razu</span></li><li><span><b>Sprawdź się:</b> test na czas, ${T.test_minutes || 20} ${plural(T.test_minutes || 20, "minuta", "minuty", "minut")}</span></li></ol>
        <p class="fi-note">Bez zakładania konta. Postęp zapisuje się w tej przeglądarce.</p>`;
      intro.querySelector(".fi-x").addEventListener("click", introDone);
      host.insertBefore(intro, top.box);
      M8.ready.then(me => { if (buyer(me) && intro) { intro.remove(); intro = null; } });
    }
    const panes = [], nexts = [];
    const chips = steps.map((s, k) => {
      const b = el("button", { type: "button", role: "tab" },
        s.kind === "lesson" ? `<span class="n">${s.i + 1}</span><span class="t">${s.title}</span>` : `<span class="t">${s.title}</span>`);
      b.addEventListener("click", () => go(k));
      nav.appendChild(b);
      return b;
    });
    const stepDone = j => {
      const s = steps[j];
      if (s.kind === "lesson") return (S.revealed[s.i] || 0) >= L[s.i].example.steps.length;
      if (s.kind === "warm") return !!(S.learnTasks[T.warmup.id] && S.learnTasks[T.warmup.id].checked);
      return true;
    };

    function pane(k) {
      if (panes[k]) return panes[k];
      const s = steps[k];
      const p = el("section", { class: "lesson" });
      if (s.kind === "warm") {
        p.innerHTML = `<div class="eyebrow">Zanim zaczniesz</div><h2>Rozgrzewka z pamięci</h2>
          <p class="lesson-intro">Trzy szybkie rachunki, które będą Ci dziś potrzebne. Najpierw spróbuj z pamięci, dopiero potem sprawdź.</p>`;
        miniTask(p, T.warmup, "Rozgrzewka");
      } else if (s.kind === "lesson") {
        const l = L[s.i];
        p.innerHTML = `<div class="eyebrow">Lekcja ${s.i + 1} z ${L.length}</div><h2>${l.title}</h2>
          <p class="lesson-intro">${fmtMath(l.intro)}</p>
          <div class="rule-box"><div class="rule-t">${fmtMath(l.rule.t)}</div>
            ${l.rule.f && l.rule.f.length ? `<div class="rf">${l.rule.f.map(f => `<span class="fbox">${f}</span>`).join("")}</div>` : ""}
            ${l.rule.e ? `<div class="rule-e">${fmtMath(l.rule.e)}</div>` : ""}</div>
          ${visual(l.visual)}`;
        p.appendChild(exampleCard(l.example, s.i, l.you || []));
      } else {
        p.innerHTML = `<div class="eyebrow">Podsumowanie</div><h2>Podsumowanie tematu</h2>
          <p class="lesson-intro">Najważniejsze z całego tematu na jednym ekranie. Wróć tu przed testem.</p>`;
        renderCheat(p);
        renderTraps(p);
        // koniec kroku 1: zachęta do ćwiczeń (bez sprzedaży)
        const lv = LEVELS.length > 1 ? ` na ${LEVELS.length} poziomach` : "";
        p.insertAdjacentHTML("beforeend", `<div class="learn-done"><b>Krok 1 zrobiony!</b><span>Teraz krok 2: ${nPr} ${plural(nPr, "zadanie", "zadania", "zadań")}${lv}. Każde sprawdzisz od razu, a przy każdym jest rozwiązanie.</span></div>`);
      }
      const bar = el("div", { class: "lesson-actions" });
      if (k > 0) { const b = el("button", { class: "btn btn-small btn-ghost", type: "button" }, "← Wstecz"); b.addEventListener("click", () => go(k - 1)); bar.appendChild(b); }
      bar.appendChild(el("span", { class: "spacer" }));
      if (k < steps.length - 1) {
        const n = el("button", { class: "btn btn-yellow btn-next", type: "button" }, k === 0 ? "Zaczynamy lekcję 1 →" : k === steps.length - 2 ? "Podsumowanie →" : "Następna lekcja →");
        n.addEventListener("click", () => go(k + 1));
        bar.appendChild(n); nexts[k] = n;
      } else {
        const a = el("a", { class: "btn btn-yellow btn-next ready", href: T.slug + "-cwiczenia.html" }, "Przejdź do ćwiczeń →");
        a.addEventListener("click", () => { S.learned = true; saveLearnPct(); });
        bar.appendChild(a);
      }
      p.appendChild(bar);
      stage.appendChild(p);
      panes[k] = p;
      return p;
    }
    function paintNav(k) {
      chips.forEach((c, j) => {
        c.setAttribute("aria-current", String(j === k));
        c.classList.toggle("done", steps[j].kind !== "sum" && stepDone(j));
      });
      // na telefonie przycisk „dalej” świeci na żółto, gdy ekran jest zrobiony: przykład odsłonięty i „Teraz ty” sprawdzone
      // (wcześniej też działa, tylko jest spokojniejszy, żeby główną akcją było zadanie na ekranie)
      const youDone = j => steps[j].kind !== "lesson" || (L[steps[j].i].you || []).every(t => S.learnTasks[t.id] && S.learnTasks[t.id].checked);
      nexts.forEach((n, j) => { if (n) n.classList.toggle("ready", stepDone(j) && youDone(j)); });
      const s = steps[k];
      top.update("Krok 1 z 3 · Naucz się",
        s.kind === "lesson" ? `Lekcja ${s.i + 1} z ${L.length}: ${s.title}` : s.kind === "warm" ? "Rozgrzewka" : "Podsumowanie tematu",
        (k + 1) / steps.length * 100);
    }
    function go(k) {
      k = Math.max(0, Math.min(steps.length - 1, k));
      S.lessonIdx = k; M8.save();
      if (k > 0) introDone();
      if (!seenStep.has(k)) { seenStep.add(k); stat("lesson_step", { krok: k }); }
      pane(k);
      panes.forEach((p, j) => { if (p) p.hidden = j !== k; });
      paintNav(k);
      host.scrollIntoView({ block: "start" });
    }
    const start = Math.min(S.lessonIdx || 0, steps.length - 1);
    seenStep.add(start); stat("lesson_step", { krok: start });
    pane(start); panes.forEach((p, j) => { if (p) p.hidden = j !== start; }); paintNav(start);
    document.addEventListener("m8:checked", () => paintNav(S.lessonIdx || 0));
  }

  function initLearn() {
    stat("lesson_start");
    const lessonHost = document.getElementById("lessons");
    if (T.lessons && lessonHost) {
      document.querySelectorAll(".legacy-learn").forEach(n => { n.hidden = true; });
      initLessons(lessonHost);
      return;
    }
    // stary układ: ściąga + przykłady
    const warm = document.getElementById("warmup");
    if (warm && T.warmup) miniTask(warm, T.warmup, "Rozgrzewka z pamięci");
    const cheat = document.getElementById("cheat");
    if (cheat) renderCheat(cheat);
    const traps = document.getElementById("traps");
    if (traps && T.traps) {
      traps.innerHTML = T.traps.map(t => `<div class="trap"><div class="name">${t.name}</div>
        <div class="bad"><b>✗ Źle:</b> ${fmtMath(t.bad)}</div><div class="good"><b>✓ Dobrze:</b> ${fmtMath(t.good)}</div></div>`).join("");
    }
    const host = document.getElementById("examples");
    T.examples.forEach((ex, i) => host.appendChild(exampleCard(ex, i, ex.you ? [ex.you] : [])));
    const done = document.getElementById("learn-done");
    if (done) done.addEventListener("click", () => { S.learned = true; saveLearnPct(); });
  }

  // =========================================================
  // ĆWICZENIA: poziomy, jedno zadanie na ekranie, powtórka z nowymi liczbami
  // =========================================================
  const LEVELS = T.levels || [{ n: 1, name: "Zadania", desc: "" }];
  const levelOf = t => t.level || 1;

  function initPractice(host) {
    stat("practice_start");
    const P = T.practice;
    S.variant = S.variant || {};
    let level = Math.min(S.practiceLevel || 1, LEVELS.length);
    const tabs = el("div", { class: "level-tabs", role: "tablist", "aria-label": "Poziomy" });
    const intro = el("p", { class: "level-desc" });
    const nav = el("div", { class: "task-nav", role: "tablist", "aria-label": "Numery zadań" });
    const top = progTop(nav, "Numery", "task-list");
    const stage = el("div");
    const summary = el("div", { class: "summary box" }); summary.hidden = true;
    if (LEVELS.length > 1) host.appendChild(tabs);
    host.appendChild(intro); host.appendChild(top.box); host.appendChild(stage); host.appendChild(summary);
    const countEl = document.getElementById("practice-count");

    const tabBtns = LEVELS.map(L => {
      const b = el("button", { type: "button", role: "tab" }, `<span class="n">${L.n}</span><span><b>${L.name}</b><small></small></span>`);
      b.addEventListener("click", () => setLevel(L.n));
      tabs.appendChild(b);
      return b;
    });

    let list = [], built = [], navBtns = [], idx = 0;
    const variants = t => [t, t.twin, t.twin2].filter(Boolean);
    const vIdx = t => { const v = S.variant[t.id]; return (v === true ? 1 : (v || 0)) % variants(t).length; };
    const taskFor = t => { const i = vIdx(t); return i ? Object.assign({}, variants(t)[i], { id: t.id + (i === 1 ? "-b" : "-c"), level: t.level }) : t; };

    function build(i) {
      const base = list[i];
      const t = taskFor(base);
      const b = buildTask(t, i + 1, "practice", S.practice[base.id], {
        onChange: a => { S.practice[base.id] = Object.assign(S.practice[base.id] || {}, { answer: a }); M8.save(); },
        onChecked: (r, a) => {
          const p = S.practice[base.id] || {};
          S.practice[base.id] = { answer: a, checked: true, correct: r.correct || !!p.correct, last: r.correct };
          M8.save(); paint();
        }
      });
      if (vIdx(base)) b.card.querySelector(".task-top").insertAdjacentHTML("beforeend", '<span class="pill yellow">Powtórka z nowymi liczbami</span>');
      const prev = el("button", { class: "btn btn-small btn-ghost", type: "button", "aria-label": "Poprzednie zadanie" }, '<span aria-hidden="true">←</span><span class="bl"> Wstecz</span>');
      const last = i === list.length - 1;
      const next = el("button", { class: "btn btn-small btn-yellow btn-next", type: "button" }, `<span class="bl">${last ? "Podsumowanie poziomu" : "Następne zadanie"} </span><span aria-hidden="true">→</span>`);
      next.setAttribute("aria-label", last ? "Podsumowanie poziomu" : "Następne zadanie");
      b.actions.classList.add("pr-actions");
      if (t.type === "abcd") b.actions.classList.add("pick");
      prev.hidden = i === 0;
      prev.classList.add("btn-prev");
      prev.addEventListener("click", () => go(i - 1, true));
      next.addEventListener("click", () => { if (last) showSummary(); else go(i + 1, true); });
      b.actions.appendChild(el("span", { class: "spacer" }));
      b.actions.appendChild(prev); b.actions.appendChild(next);
      b.restore();
      return b;
    }
    function rebuild(i) {
      const old = built[i];
      built[i] = build(i);
      if (old) stage.replaceChild(built[i].card, old.card); else stage.appendChild(built[i].card);
    }
    function setLevel(n) {
      level = n; S.practiceLevel = n; M8.save();
      const L = LEVELS.find(x => x.n === n);
      intro.innerHTML = L.desc ? fmtMath(L.desc) : "";
      intro.hidden = !L.desc;
      list = P.filter(t => levelOf(t) === n);
      stage.innerHTML = ""; nav.innerHTML = ""; built = [];
      navBtns = list.map((t, i) => {
        const b = el("button", { type: "button", role: "tab", "aria-label": "Zadanie " + (i + 1) }, String(i + 1));
        b.addEventListener("click", () => go(i, true));
        nav.appendChild(b);
        return b;
      });
      list.forEach((_, i) => rebuild(i));
      const saved = (S.levelIdx || {})[n] || 0;
      go(Math.min(saved, list.length - 1));
    }
    function paint() {
      let goodAll = 0;
      P.forEach(t => { const p = S.practice[t.id]; if (p && p.correct) goodAll++; });
      if (countEl) countEl.textContent = "Dobrze: " + goodAll + " / " + P.length;
      LEVELS.forEach((L, k) => {
        const lt = P.filter(t => levelOf(t) === L.n);
        const g = lt.filter(t => S.practice[t.id] && S.practice[t.id].correct).length;
        tabBtns[k].querySelector("small").textContent = g + " / " + lt.length + " dobrze";
        tabBtns[k].setAttribute("aria-current", String(L.n === level));
        tabBtns[k].classList.toggle("done", g === lt.length);
      });
      let goodL = 0;
      list.forEach((t, i) => {
        const p = S.practice[t.id];
        if (p && p.correct) goodL++;
        navBtns[i].classList.toggle("ok", !!(p && p.checked && p.last));
        navBtns[i].classList.toggle("bad", !!(p && p.checked && p.last === false));
        navBtns[i].setAttribute("aria-current", String(i === idx && summary.hidden));
        if (built[i]) built[i].actions.querySelector(".btn-next").classList.toggle("ready", !!(p && p.checked));
      });
      const L = LEVELS.find(x => x.n === level);
      top.update("Krok 2 z 3 · Ćwicz" + (LEVELS.length > 1 ? " · " + L.name : ""),
        summary.hidden ? `Zadanie ${idx + 1} z ${list.length} · dobrze ${goodL}` : `Podsumowanie poziomu · dobrze ${goodL} z ${list.length}`,
        summary.hidden ? (idx + 1) / list.length * 100 : 100);
    }
    function go(i, user) {
      idx = Math.max(0, Math.min(list.length - 1, i));
      S.levelIdx = S.levelIdx || {}; S.levelIdx[level] = idx; M8.save();
      summary.hidden = true;
      built.forEach((b, k) => { b.card.hidden = k !== idx; });
      paint();
      if (user) toTop(top.box);
    }
    function showSummary() {
      stat("practice_done");
      built.forEach(b => { b.card.hidden = true; });
      const wrong = list.map((t, i) => ({ t, i })).filter(({ t }) => { const p = S.practice[t.id]; return !p || !p.checked || p.last === false; });
      const good = list.length - wrong.length;
      const L = LEVELS.find(x => x.n === level);
      const nextL = LEVELS.find(x => x.n === level + 1);
      summary.innerHTML = `<div class="eyebrow">Podsumowanie: ${L.name}</div>
        <div class="sum-big">${good} / ${list.length}</div>
        <p>${wrong.length === 0 ? (nextL ? "Wszystko dobrze. Możesz przejść na kolejny poziom." : "Wszystko dobrze. Czas na test.") :
          "Zadania do powtórki: " + wrong.map(w => w.i + 1).join(", ") + ". Najlepiej wróć do nich jutro: dostaniesz podobne zadania z nowymi liczbami, więc przećwiczysz sposób, a nie zapamiętany wynik."}</p>`;
      const row = el("div", { class: "btn-row" });
      if (wrong.length) {
        const again = el("button", { class: "btn btn-ink", type: "button" }, "Powtórz zadania z błędem");
        again.addEventListener("click", () => {
          wrong.forEach(({ t, i }) => {
            delete S.practice[t.id];
            if (t.twin) S.variant[t.id] = (vIdx(t) + 1) % variants(t).length;
            rebuild(i);
          });
          M8.save(); go(wrong[0].i);
        });
        row.appendChild(again);
      }
      if (nextL) {
        const nb = el("button", { class: "btn btn-yellow", type: "button" }, "Poziom " + nextL.n + ": " + nextL.name + " →");
        nb.addEventListener("click", () => { setLevel(nextL.n); window.scrollTo(0, 0); });
        row.appendChild(nb);
      } else row.insertAdjacentHTML("beforeend", `<a class="btn btn-yellow" href="${T.slug}-test.html">Przejdź do testu →</a>`);
      summary.appendChild(row);
      summary.hidden = false;
      paint();
      toTop(top.box);
      // koniec ostatniego poziomu w darmowym temacie: spokojna karta o pełnym kursie
      if (!nextL) freeCta("practice", n => { summary.querySelectorAll(".free-cta").forEach(x => x.remove()); if (!summary.hidden) summary.appendChild(n); });
    }
    setLevel(level);
  }

  // =========================================================
  // TEST
  // =========================================================
  // =========================================================
  // PODSUMOWANIE ARKUSZA: egzamin próbny (działy i tematy do powtórki) albo test startowy (od czego zacząć)
  // =========================================================
  function topicInfo(slug) {
    for (const d of (window.PROGRAM || [])) for (const t of d.topics) if (t.slug === slug) return { dzial: d, topic: t };
    return { dzial: { label: "", name: "" }, topic: { slug, title: slug } };
  }
  function renderSummary(box, pts) {
    const byDzial = new Map(), byTopic = new Map();
    T.test.forEach((t, i) => {
      const slug = t.topics[0], info = topicInfo(slug), got = pts[i] || 0, max = t.pts || 1;
      const d = byDzial.get(info.dzial.label) || { name: info.dzial.name, label: info.dzial.label, got: 0, max: 0 };
      d.got += got; d.max += max; byDzial.set(info.dzial.label, d);
      const tp = byTopic.get(slug) || { info, got: 0, max: 0, lost: [] };
      tp.got += got; tp.max += max; if (got < max) tp.lost.push(i + 1); byTopic.set(slug, tp);
    });
    const dOrder = (window.PROGRAM || []).map(d => d.label);
    const bars = [...byDzial.values()].sort((a, b) => dOrder.indexOf(a.label) - dOrder.indexOf(b.label)).map(d => `<div class="es-row"><span class="es-name"><small>${d.label}</small>${d.name}</span>
      <span class="es-bar"><i style="width:${Math.round(d.got / d.max * 100)}%"></i></span><b>${d.got} / ${d.max}</b></div>`).join("");
    const score = pts.reduce((a, b) => a + (b || 0), 0), pct = Math.round(score / TEST_MAX * 100);
    if (KIND === "exam") {
      const todo = [...byTopic.values()].filter(x => x.got < x.max).sort((a, b) => (b.max - b.got) - (a.max - a.got));
      const list = todo.length ? `<ul class="es-todo">${todo.map(x => `<li><a href="${x.info.topic.slug}.html">${x.info.topic.title}</a>
        <span>stracone ${x.max - x.got} pkt · zadani${x.lost.length > 1 ? "a" : "e"} ${x.lost.join(", ")}</span></li>`).join("")}</ul>`
        : `<p>Wszystkie zadania na pełne punkty. Gratulacje!</p>`;
      const rek = (pct * 0.35).toFixed(2).replace(/\.?0+$/, "").replace(".", ",");
      box.innerHTML = `<h3>Wynik według działów</h3>${bars}
        <h3>Co powtórzyć przed egzaminem</h3>${list}
        <p class="es-note">Dla porównania: średni wynik z matematyki na egzaminie ósmoklasisty w 2026 roku to 55%. W rekrutacji do szkoły średniej wynik procentowy z matematyki mnoży się przez 0,35, więc ${pct}% daje ${rek} z 35 punktów. Egzamin próbny nie przewiduje dokładnego wyniku w maju, ale dobrze pokazuje, co jeszcze ćwiczyć.</p>`;
    } else {
      // test startowy: temat „umie”, gdy wszystkie jego zadania są dobrze
      const known = {};
      byTopic.forEach((x, slug) => { known[slug] = x.got === x.max; });
      S.diag = known; M8.save();
      const order = [];
      (window.PROGRAM || []).forEach(d => d.topics.forEach(t => { if (t.slug in known) order.push({ d, t }); }));
      const first = order.find(o => !known[o.t.slug]);
      const groups = (window.PROGRAM || []).filter(d => d.topics.some(t => t.slug in known)).map(d => `<div class="dg-dzial"><small>${d.label}</small><b>${d.name}</b>
        <ul>${d.topics.filter(t => t.slug in known).map(t => `<li class="${known[t.slug] ? "ok" : "todo"}"><a href="${t.slug}.html">${t.title}</a><span>${known[t.slug] ? "✓ umie" : "do nauki"}</span></li>`).join("")}</ul></div>`).join("");
      box.innerHTML = `<h3>Od czego zacząć</h3>
        <p class="dg-start">${first ? `Zacznijcie od tematu <a href="${first.t.slug}.html">${first.t.title}</a> (${first.d.label}). Potem idźcie po kolei według programu kursu.`
          : "Wszystkie tematy poszły dobrze. Przerabiajcie kurs po kolei, ale szybciej: w każdym temacie od razu ćwiczenia i test."}</p>
        <p class="es-note">Tematy z ✓ dziecko może przejść szybciej: przeczytać podsumowanie tematu, rozwiązać kilka zadań z ćwiczeń i od razu zrobić test. Tematy „do nauki” warto przerobić w całości. Wynik testu startowego zobaczysz też w programie kursu.</p>
        <h3>Wynik według działów</h3>${bars}<div class="dg-grid">${groups}</div>`;
    }
  }

  function initTest(host) {
    let timerId = null;
    const hasSelf = T.test.some(t => t.type === "self");
    const fmt = s => String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
    const verdictTopic = score => score >= PASS
      ? { cls: "good", msg: "Świetnie! Ten temat masz opanowany. Możesz przejść do kolejnego." }
      : score >= Math.ceil(TEST_MAX * 0.55)
        ? { cls: "mid", msg: "Dobrze. Otwórz rozwiązania zadań z błędem i przeczytaj je spokojnie. Jutro rozwiąż te zadania jeszcze raz." }
        : { cls: "low", msg: "To normalne na początku. Wróć do podsumowania tematu i przykładów, zrób ponownie ćwiczenia z błędem, a za 2 dni powtórz test." };
    const verdictExam = score => {
      const pct = Math.round(score / TEST_MAX * 100);
      return pct >= 80 ? { cls: "good", msg: `${pct}%. Bardzo dobry wynik. Przed egzaminem powtórz jeszcze tematy z listy poniżej, żeby nie tracić punktów na drobnych błędach.` }
        : pct >= 55 ? { cls: "mid", msg: `${pct}%. Dobry wynik, ale punkty do zdobycia wciąż są. Najwięcej dadzą tematy z listy poniżej: wróć do nich, a potem ${T.slug === "egzamin-probny-1" ? "rozwiąż drugi egzamin próbny" : "zrób jeszcze raz testy tych tematów"}.` }
        : { cls: "low", msg: `${pct}%. To dopiero próba, a lista poniżej pokazuje, co przerobić. Wróć do tych tematów, zrób ćwiczenia i testy, a potem ${T.slug === "egzamin-probny-1" ? "rozwiąż drugi egzamin próbny" : "za kilka tygodni rozwiąż ten egzamin jeszcze raz"}.` };
    };
    const verdictDiag = score => ({ cls: score >= Math.ceil(TEST_MAX * 0.8) ? "good" : score >= Math.ceil(TEST_MAX * 0.5) ? "mid" : "low",
      msg: "To nie jest ocena, tylko mapa: pokazuje, co dziecko już umie, a co trzeba przerobić. Poniżej jest plan, od czego zacząć." });
    const verdict = KIND === "exam" ? verdictExam : KIND === "diag" ? verdictDiag : verdictTopic;

    function start() {
      clearInterval(timerId);
      host.innerHTML = "";
      const box = el("div", { class: "test-start box" });
      box.innerHTML = KIND === "topic" ? `<h2>Test: ${T.title.toLowerCase()}</h2>
        <div class="test-facts"><span>${T.test.length} zadań</span><span>${TEST_MAX} punktów</span><span>${T.test_minutes || 20} minut</span></div>
        <p style="color:var(--muted)">Bez notatek, jak na egzaminie. Obliczenia zapisuj na kartce. Wynik, poprawne odpowiedzi i rozwiązania zobaczysz po zakończeniu.${hasSelf ? " Zadania otwarte ocenisz samodzielnie według punktacji." : ""}</p>`
        : `<h2>${KIND === "exam" ? "Start egzaminu" : "Start testu"}</h2><p style="color:var(--muted)">${T.start_note}</p>`;
      const b = el("button", { class: "btn btn-yellow", type: "button" }, KIND === "exam" ? "Rozpocznij egzamin" : KIND === "diag" ? "Rozpocznij test startowy" : "Rozpocznij test");
      b.addEventListener("click", () => { S.test = { started: Date.now(), answers: {}, done: false }; M8.save(); stat("test_start"); run(); });
      box.appendChild(b);
      if (S.lastScore != null) box.appendChild(el("p", { class: "mono", style: "color:var(--muted);font-size:14px" }, "Ostatni wynik: " + S.lastScore + " / " + TEST_MAX + " pkt"));
      host.appendChild(box);
    }
    function scoreCard() {
      const card = el("div", { class: "score-card box" });
      const big = el("span", { class: "big" });
      const msg = el("p");
      card.appendChild(el("span", { class: "eyebrow" }, "Twój wynik"));
      card.appendChild(big); card.appendChild(msg);
      if (hasSelf) card.appendChild(el("p", { class: "self-note" }, "Wynik zmieni się, gdy ocenisz zadania otwarte poniżej."));
      const again = el("button", { class: "btn btn-small", type: "button" }, KIND === "exam" ? "Rozwiąż egzamin jeszcze raz" : "Rozwiąż test jeszcze raz");
      again.addEventListener("click", () => { S.test = null; M8.save(); start(); M8.paint(); window.scrollTo(0, 0); });
      card.appendChild(again);
      card.update = score => {
        const v = verdict(score);
        card.className = "score-card box " + v.cls;
        big.textContent = score + " / " + TEST_MAX + " pkt";
        msg.textContent = v.msg;
        if (card.summary) card.summary(score);
      };
      return card;
    }
    function showResults(builtFn) {
      host.innerHTML = "";
      const card = scoreCard();
      host.appendChild(card);
      const pts = [];
      if (KIND !== "topic") {
        const sum = el("div", { class: "exam-sum box" });
        host.appendChild(sum);
        card.summary = () => renderSummary(sum, pts);
      }
      const recalc = () => {
        const score = pts.reduce((a, b) => a + b, 0);
        S.test.score = score; S.lastScore = score; M8.save(); M8.paint();
        if (!seenStep.has("test")) { seenStep.add("test"); stat("test_done", { wynik: score, max: TEST_MAX }); }
        card.update(score);
      };
      T.test.forEach((t, i) => {
        const b = buildTask(t, i + 1, "test", { answer: S.test.answers[t.id] }, {
          onChange: a => { S.test.answers[t.id] = a; M8.save(); },
          onSelfScore: p => { pts[i] = p; recalc(); }
        });
        host.appendChild(b.card);
        pts[i] = b.reveal().points;
      });
      S.test.done = true;
      recalc();
      if (KIND === "topic") freeCta("test", n => { if (card.isConnected) card.after(n); });
      return card;
    }
    function run() {
      host.innerHTML = "";
      const bar = el("div", { class: "timer-bar" });
      const time = el("span", { class: "time" });
      const finish = el("button", { class: "btn btn-small btn-yellow", type: "button" }, "Zakończ i sprawdź");
      const cnt = el("span", { class: "answered" });
      bar.appendChild(el("span", { class: "lbl" }, "Pozostały czas")); bar.appendChild(time); bar.appendChild(cnt);
      bar.appendChild(el("span", { class: "spacer" })); bar.appendChild(finish);
      host.appendChild(bar);
      const apis = [];
      // licznik zadań zamkniętych z odpowiedzią (zadania otwarte rozwiązuje się na kartce)
      const nSelf = T.test.filter(t => t.type === "self").length;
      const count = () => {
        const closed = apis.filter((x, i) => T.test[i].type !== "self");
        cnt.textContent = "Odpowiedzi: " + closed.filter(x => x.isComplete()).length + "/" + closed.length + (nSelf ? " · " + nSelf + " na kartce" : "");
      };
      T.test.forEach((t, i) => {
        const b = buildTask(t, i + 1, "test", { answer: S.test.answers[t.id] }, { onChange: a => { S.test.answers[t.id] = a; M8.save(); count(); } });
        host.appendChild(b.card); apis.push(b);
      });
      count();
      const end = el("div", { class: "task-actions" });
      const finish2 = el("button", { class: "btn btn-yellow", type: "button" }, KIND === "exam" ? "Zakończ egzamin i zobacz wynik" : "Zakończ test i zobacz wynik");
      end.appendChild(finish2); host.appendChild(end);
      function grade() {
        clearInterval(timerId);
        const card = showResults();
        card.scrollIntoView({ block: "start" });
      }
      function tick() {
        const left = Math.max(0, TEST_SECONDS - Math.floor((Date.now() - S.test.started) / 1000));
        time.textContent = fmt(left);
        if (left === 0) grade();
      }
      finish.addEventListener("click", grade);
      finish2.addEventListener("click", grade);
      tick();
      timerId = setInterval(tick, 1000);
    }
    if (S.test && S.test.done) showResults();
    else if (S.test && S.test.started && Date.now() - S.test.started < TEST_SECONDS * 1000) run();
    else { if (S.test && !S.test.done) { S.test = null; M8.save(); } start(); }
  }

  // =========================================================
  // STRONA TEMATU: status kroków
  // =========================================================
  function paintSteps() {
    const p = M8.progress(T.slug);
    const status = {
      "1": p.learnPct === 100 ? "Zrobione" : p.learnPct > 0 ? "W trakcie: " + p.learnPct + "%" : "Nie rozpoczęto",
      "2": p.tried === 0 ? "Nie rozpoczęto" : "Dobrze: " + p.good + " / " + p.practiceTotal,
      "3": p.score === null ? "Nie rozpoczęto" : "Wynik: " + p.score + " / " + p.testMax + " pkt"
    };
    const done = { "1": p.learnPct === 100, "2": p.good === p.practiceTotal, "3": p.score !== null && p.score >= PASS };
    document.querySelectorAll("[data-step-status]").forEach(n => { n.textContent = status[n.dataset.stepStatus]; });
    document.querySelectorAll("[data-step]").forEach(n => { n.classList.toggle("done", !!done[n.dataset.step]); });
  }

  if (document.getElementById("examples") || document.getElementById("lessons")) initLearn();
  const practice = document.getElementById("practice-app");
  if (practice) initPractice(practice);
  const test = document.getElementById("test-area");
  if (test) initTest(test);
  paintSteps();
})();
