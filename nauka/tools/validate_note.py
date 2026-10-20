#!/usr/bin/env python3
"""Sprawdza notatkę Atlasu (format z nauka/INSTRUKCJA.md) dla przedmiotu językowego.
Użycie: python3 nauka/tools/validate_note.py [--theory] note1.json [note2.json ...]
(--theory: przedmioty teoretyczne; bez flagi: językowe)
Wypisuje ERR (trzeba poprawić) i WARN (sprawdź), na końcu podsumowanie."""
import json, re, sys
from collections import Counter

errs, warns = [], []
def E(f, m): errs.append(f'ERR  {f}: {m}')
def W(f, m): warns.append(f'WARN {f}: {m}')

LIST = lambda v: v if isinstance(v, list) else []
POS = {'n', 'v', 'adj', 'adv', 'phr'}
ART = {'der', 'die', 'das', None}
EV = {'kolokwium', 'egzamin', 'sprawdzian', 'zaliczenie', 'projekt', 'prezentacja', 'inne'}
ymd = re.compile(r'^\d{4}-\d{2}-\d{2}$')
allq = {}

THEORY = '--theory' in sys.argv
for path in [a for a in sys.argv[1:] if not a.startswith('--')]:
    f = path.split('/')[-1]
    try:
        n = json.load(open(path, encoding='utf-8'))
    except Exception as e:
        E(f, f'nie da się wczytać JSON: {e}'); continue
    for k in ['title', 'summary', 'sections', 'highYield', 'flashcards', 'quiz'] + (['terms', 'people', 'examQuestions'] if THEORY else ['vocab', 'grammar']):
        if k not in n: E(f, f'brak pola {k}')
    if THEORY:
        tm = LIST(n.get('terms'))
        if not (5 <= len(tm) <= 20): W(f, f'terms: {len(tm)} (zalecane 5–20)')
        for i, t in enumerate(tm):
            if not t.get('term') or not t.get('def'): E(f, f'terms[{i}] bez term/def')
            if t.get('quote') and not t.get('source'): W(f, f'terms[{i}] „{t.get("term")}”: quote bez source')
        for i, x in enumerate(LIST(n.get('people'))):
            if not x.get('name') or not x.get('idea'): E(f, f'people[{i}] bez name/idea')
        eqs = LIST(n.get('examQuestions'))
        if not (2 <= len(eqs) <= 8): W(f, f'examQuestions: {len(eqs)} (zalecane: ze slajdów + 2–4 własne)')
        if any(LIST(n.get(k)) for k in ['vocab', 'grammar', 'exercises', 'texts']): W(f, 'pola językowe (vocab/grammar/exercises/texts) w przedmiocie teoretycznym')
    secs = LIST(n.get('sections'))
    ns = len(secs)
    def sec_ok(x, where):
        s = x.get('sec') if isinstance(x, dict) else None
        if s is None: W(f, f'{where}: brak sec'); return
        if not isinstance(s, int) or not (0 <= s < ns): E(f, f'{where}: sec={s!r} poza zakresem 0..{ns-1}')
    if not (4 <= ns <= 10): W(f, f'sections: {ns} (zalecane 4–10)')
    for i, s in enumerate(secs):
        if not (s.get('heading') or '').strip() or not (s.get('body') or '').strip(): E(f, f'sections[{i}] bez heading/body')
    hy = LIST(n.get('highYield'))
    if not (5 <= len(hy) <= 10): W(f, f'highYield: {len(hy)} (zalecane 5–10)')
    if n.get('lectureDate') not in (None, '') and not ymd.match(str(n.get('lectureDate'))): E(f, 'lectureDate nie RRRR-MM-DD')
    for i, d in enumerate(LIST(n.get('deadlines'))):
        if d.get('type') not in EV: E(f, f'deadlines[{i}].type={d.get("type")!r}')
        if d.get('date') is not None and not ymd.match(str(d.get('date'))): E(f, f'deadlines[{i}].date')
        if not d.get('title'): E(f, f'deadlines[{i}] bez title')
    for i, x in enumerate(LIST(n.get('examInfo'))):
        if not isinstance(x, dict) or not x.get('text'): E(f, f'examInfo[{i}] bez text')
    # vocab
    voc = LIST(n.get('vocab'))
    seen_w = Counter()
    for i, v in enumerate(voc):
        w = v.get('w')
        if not w or not v.get('pl'): E(f, f'vocab[{i}] bez w/pl'); continue
        seen_w[w] += 1
        if v.get('pos') not in POS: E(f, f'vocab[{i}] {w}: pos={v.get("pos")!r}')
        if v.get('art') not in ART: E(f, f'vocab[{i}] {w}: art={v.get("art")!r}')
        if v.get('pos') == 'n' and w[:1].islower(): W(f, f'vocab[{i}] {w}: rzeczownik małą literą?')
        if v.get('art') and not v.get('plural'): W(f, f'vocab[{i}] {w}: rzeczownik z rodzajnikiem bez plural (wpisz „–”, jeśli brak)')
        if v.get('pos') == 'v' and not v.get('forms'): W(f, f'vocab[{i}] {w}: czasownik bez forms (3. os. lp.)')
        if not v.get('ex'): W(f, f'vocab[{i}] {w}: brak przykładu ex')
    for w, c in seen_w.items():
        if c > 1: E(f, f'vocab: „{w}” powtórzone {c}×')
    # grammar
    for i, g in enumerate(LIST(n.get('grammar'))):
        if not g.get('rule'): E(f, f'grammar[{i}] bez rule')
        ex = LIST(g.get('examples'))
        if len(ex) < 2: W(f, f'grammar[{i}] „{g.get("title")}”: tylko {len(ex)} przykładów (zalecane 3–5)')
        for j, e in enumerate(ex):
            if not e.get('t') or not e.get('pl'): E(f, f'grammar[{i}].examples[{j}] bez t/pl')
        if '==' not in (g.get('rule', '') + ''.join(e.get('t', '') for e in ex) + g.get('pattern', '') or ''): W(f, f'grammar[{i}]: brak zaznaczenia ==…==')
        sec_ok(g, f'grammar[{i}]')
    for i, m in enumerate(LIST(n.get('mistakes'))):
        if not m.get('right') or not m.get('why'): E(f, f'mistakes[{i}] bez right/why')
    for i, x in enumerate(LIST(n.get('exercises'))):
        items = LIST(x.get('items'))
        if not items: E(f, f'exercises[{i}] bez items')
        for j, it in enumerate(items):
            if not it.get('q') or not it.get('a'): E(f, f'exercises[{i}].items[{j}] bez q/a')
    for i, t in enumerate(LIST(n.get('texts'))):
        if not t.get('text') or not t.get('pl'): E(f, f'texts[{i}] bez text/pl')
    for i, q in enumerate(LIST(n.get('examQuestions'))):
        if not q.get('q') or not q.get('outline'): E(f, f'examQuestions[{i}] bez q/outline')
        sec_ok(q, f'examQuestions[{i}]')
    # flashcards
    fc = LIST(n.get('flashcards'))
    if not (15 <= len(fc) <= 40): W(f, f'flashcards: {len(fc)} (zalecane 15–40)')
    ids = Counter()
    vocab_forms = {re.sub(r'\W+', ' ', (v.get('w') or '').replace('|', '')).strip().lower() for v in voc}
    for i, c in enumerate(fc):
        cid = c.get('id', '')
        ids[cid] += 1
        if not re.match(r'^c[a-z0-9]{8}$', cid or ''): E(f, f'flashcards[{i}].id={cid!r} (ma być "c" + 8 znaków a-z0-9)')
        if not c.get('q') or not c.get('a'): E(f, f'flashcards[{i}] bez q/a')
        if len((c.get('a') or '').split()) > 15: W(f, f'flashcards[{i}]: odpowiedź > 15 słów')
        a_norm = re.sub(r'\W+', ' ', re.sub(r'^(der|die|das)\s+', '', (c.get('a') or '').lower())).strip()
        if a_norm in vocab_forms: W(f, f'flashcards[{i}] dubluje słówko z vocab: {c.get("a")!r}')
        sec_ok(c, f'flashcards[{i}]')
        key = (c.get('q') or '').strip().lower()
        if key in allq and allq[key] != f: E(f, f'flashcards[{i}] to samo pytanie co w {allq[key]}: {c.get("q")!r}')
        allq.setdefault(key, f)
    for cid, k in ids.items():
        if k > 1: E(f, f'flashcards: id {cid} powtórzone')
    qs = Counter(c.get('q') for c in fc)
    for q, k in qs.items():
        if k > 1: E(f, f'flashcards: pytanie powtórzone: {q!r}')
    # quiz
    qz = LIST(n.get('quiz'))
    if not (8 <= len(qz) <= 15): W(f, f'quiz: {len(qz)} (zalecane 8–15)')
    pos, longest = Counter(), 0
    for i, q in enumerate(qz):
        o = LIST(q.get('options'))
        if len(o) != 4: E(f, f'quiz[{i}]: {len(o)} odpowiedzi (ma być 4)')
        a = q.get('answer')
        if not isinstance(a, int) or not (0 <= a < len(o)): E(f, f'quiz[{i}].answer={a!r}'); continue
        pos[a] += 1
        if len(set(x.strip().lower() for x in o)) != len(o): E(f, f'quiz[{i}]: powtórzone odpowiedzi')
        lens = [len(x) for x in o]
        if lens[a] == max(lens) and lens.count(max(lens)) == 1: longest += 1
        ex = LIST(q.get('explain'))
        if len(ex) != len(o) or not all((x or '').strip() for x in ex): E(f, f'quiz[{i}].explain: {len(ex)} elementów (ma być {len(o)}, niepuste)')
        if not (q.get('why') or '').strip(): E(f, f'quiz[{i}] bez why')
        for bad in ['wszystkie powyższe', 'żadna z powyższych', 'wszystkie odpowiedzi', 'żadna odpowiedź']:
            if any(bad in (x or '').lower() for x in o): E(f, f'quiz[{i}]: odpowiedź typu „{bad}”')
        sec_ok(q, f'quiz[{i}]')
    if len(qz) >= 8:
        for p in range(4):
            if pos[p] < 2: E(f, f'quiz: poprawna odpowiedź na pozycji {p} tylko {pos[p]}× (min. 2)')
    if qz and longest > max(2, round(len(qz) / 4) + 1): W(f, f'quiz: poprawna odpowiedź jest najdłuższa w {longest}/{len(qz)} pytań')
    # bold count per bullet
    for i, s in enumerate(secs):
        for line in (s.get('body') or '').split('\n'):
            if line.count('**') // 2 > 2 and not line.strip().startswith('|'): W(f, f'sections[{i}]: >2 pogrubienia w linii: {line[:60]!r}')
    tags = LIST(n.get('tags'))
    if len(tags) > 8: W(f, 'tags > 8')
    print(f'{f}: sections {ns}, highYield {len(hy)}, vocab {len(voc)}, grammar {len(LIST(n.get("grammar")))}, mistakes {len(LIST(n.get("mistakes")))}, '
          f'exercises {len(LIST(n.get("exercises")))}, texts {len(LIST(n.get("texts")))}, examQuestions {len(LIST(n.get("examQuestions")))}, '
          f'flashcards {len(fc)}, quiz {len(qz)} (pozycje {dict(sorted(pos.items()))}, najdłuższa poprawna {longest})')

print('\n'.join(errs + warns) or 'OK: brak uwag')
print(f'\n{len(errs)} ERR, {len(warns)} WARN')
sys.exit(1 if errs else 0)
