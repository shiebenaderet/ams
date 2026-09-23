/* The vocabulary activities at the foot of each leveled colonial-regions reading,
   defined once for all three levels.

   Called as READING_ACTIVITIES({...}) at the foot of each reading page, with that
   level's items serialized by tools/build-regions.py. The name is prefixed for the
   reason nav.js's globals and SORT_DECK are: a file loaded on several pages must
   not claim names as generic as build(), load() or save().

   LSK namespaces this level's localStorage. Two levels sharing a key would show
   each other's scores with nothing on the page to explain it -- the same bug
   tests/sort-deck.test.js holds 'tsort:' + DECK apart to prevent. Every read and
   write is wrapped: storage throws in private windows and comes back empty after a
   clear, and the activity has to render correctly either way.

   WHY THE SCORE IS CUMULATIVE
   On attempt 2 the stage reports 7/9 -> 9/9, never 2/2. A two-item retry scored
   2/2 reads as a perfect score to a 13-year-old, and to a parent reading over a
   shoulder. The tries count carries the effort story separately, which is why it
   is shown rather than hidden: 9/9 in four tries is visibly different from 9/9 in
   one, without either being a failure.

   The sentence stage is never marked. A sentence cannot be auto-scored, and
   pretending otherwise would teach that the checkmark is the point. */
function READING_ACTIVITIES(CFG) {
  var LSK = 'ract:' + CFG.level;
  var root = document.getElementById('activities');
  if (!root) return;

  function load() {
    try { return JSON.parse(localStorage.getItem(LSK)) || {}; }
    catch (e) { return {}; }
  }
  function save(s) {
    try { localStorage.setItem(LSK, JSON.stringify(s)); } catch (e) {}
  }
  var state = load();

  function st(id) {
    if (!state[id]) state[id] = { done: [], tries: 0, text: '' };
    return state[id];
  }
  function norm(s) {
    return String(s).toLowerCase().replace(/[^a-z ]/g, '').replace(/\s+/g, ' ').trim();
  }
  /* A plural is not a wrong answer. The cloze sentence "Massachusetts was founded
     by ____" needs the answer 'Puritans', but a student who writes 'Puritan' knows
     the word -- and on paper a human marking the sheet would never count that
     wrong. Exact string equality would, so the grader stems both sides. */
  function same(a, b) {
    a = norm(a); b = norm(b);
    if (a === b) return true;
    var stem = function (x) { return x.replace(/(?:es|s)$/, ''); };
    return !!a && stem(a) === stem(b);
  }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* One stage panel: the items, a Check button, and a score line. `grade` returns
     the array of item indexes that are currently correct. */
  function panel(id, title, help, items, render, grade) {
    var box = el('section', 'ract-stage');
    box.appendChild(el('h4', null, title));
    if (help) box.appendChild(el('p', 'ract-help', help));
    var list = el('div', 'ract-items');
    box.appendChild(list);

    var bar = el('div', 'ract-bar');
    var btn = el('button', 'ract-check', 'Check');
    btn.type = 'button';
    var score = el('span', 'ract-score');
    bar.appendChild(btn);
    bar.appendChild(score);
    box.appendChild(bar);

    var s = st(id);

    function paint() {
      list.innerHTML = '';
      items.forEach(function (it, i) {
        var locked = s.done.indexOf(i) >= 0;
        list.appendChild(render(it, i, locked));
      });
      var n = s.done.length, total = items.length;
      if (n === total) {
        score.className = 'ract-score ract-won';
        score.innerHTML = total + '/' + total + ' &middot; ' +
          s.tries + (s.tries === 1 ? ' try' : ' tries');
        btn.style.display = 'none';
      } else {
        score.className = 'ract-score';
        score.innerHTML = s.tries
          ? n + '/' + total + ' so far &middot; attempt ' + (s.tries + 1) +
            ' &mdash; only the ones you missed are left'
          : '';
        btn.textContent = s.tries ? 'Check the rest' : 'Check';
      }
    }

    btn.addEventListener('click', function () {
      var right = grade(items, s.done);
      var gained = right.filter(function (i) { return s.done.indexOf(i) < 0; });
      /* A press only counts as a try if something was actually still open. */
      if (s.done.length < items.length) s.tries += 1;
      s.done = s.done.concat(gained);
      save(state);
      paint();
      summary();
    });

    paint();
    return box;
  }

  /* ---------------------------------------------------------------- matching */
  function matchStage(round, items) {
    var id = 'match' + round;
    var s = st(id);
    var pool = items.map(function (it) { return it.term; }).sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });
    var picks = {};
    function render(it, i, locked) {
      var row = el('div', 'ract-row' + (locked ? ' ract-ok' : ''));
      row.appendChild(el('span', 'ract-def', it.def));
      if (locked) {
        row.appendChild(el('span', 'ract-ans', it.term));
      } else {
        var sel = document.createElement('select');
        sel.className = 'ract-sel';
        sel.appendChild(new Option('choose a word…', ''));
        pool.forEach(function (t) { sel.appendChild(new Option(t, t)); });
        sel.value = picks[i] || '';
        sel.addEventListener('change', function () { picks[i] = sel.value; });
        row.appendChild(sel);
        if (s.tries && !locked) row.appendChild(el('span', 'ract-again', 'try again'));
      }
      return row;
    }
    function grade(its, done) {
      var ok = done.slice();
      its.forEach(function (it, i) {
        if (ok.indexOf(i) < 0 && same(picks[i] || '', it.term)) ok.push(i);
      });
      return ok;
    }
    return panel(id, 'Matching', 'Every word is in the box at the top of this reading.',
                 items, render, grade);
  }

  /* ------------------------------------------------------------------- cloze */
  function clozeStage(round, items) {
    var id = 'cloze' + round;
    var s = st(id);
    var typed = {};
    var bank = items.map(function (it) { return it.answer; })
      .sort(function (a, b) { return a.toLowerCase() < b.toLowerCase() ? -1 : 1; });
    function render(it, i, locked) {
      var row = el('div', 'ract-row' + (locked ? ' ract-ok' : ''));
      var parts = it.text.split('____');
      var p = el('span', 'ract-sent');
      p.innerHTML = parts[0];
      if (locked) {
        p.appendChild(el('b', 'ract-ans', it.answer));
      } else {
        var inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'ract-in';
        inp.setAttribute('aria-label', 'missing word');
        inp.value = typed[i] || '';
        inp.addEventListener('input', function () { typed[i] = inp.value; });
        p.appendChild(inp);
      }
      var tail = el('span', null, parts[1] || '');
      p.appendChild(tail);
      row.appendChild(p);
      if (!locked && s.tries) row.appendChild(el('span', 'ract-again', 'try again'));
      return row;
    }
    function grade(its, done) {
      var ok = done.slice();
      its.forEach(function (it, i) {
        if (ok.indexOf(i) < 0 && same(typed[i] || '', it.answer)) ok.push(i);
      });
      return ok;
    }
    var st_ = panel(id, 'Fill the blank', 'Word bank: ' + bank.join(' · '),
                    items, render, grade);
    return st_;
  }

  /* ------------------------------------------------------- discrimination pairs */
  function pairStage(round, items) {
    var id = 'pair' + round;
    var s = st(id);
    var picks = {};
    function render(it, i, locked) {
      var row = el('div', 'ract-row ract-pair' + (locked ? ' ract-ok' : ''));
      row.appendChild(el('p', 'ract-scen', it.scenario));
      if (locked) {
        row.appendChild(el('p', 'ract-why', '<b>' + it.answer + '</b> &mdash; ' + it.why));
      } else {
        var opts = el('div', 'ract-opts');
        it.options.forEach(function (o) {
          var b = el('button', 'ract-opt' + (picks[i] === o ? ' ract-picked' : ''), o);
          b.type = 'button';
          b.addEventListener('click', function () {
            picks[i] = o;
            [].forEach.call(opts.children, function (c) {
              c.className = 'ract-opt' + (c.textContent === o ? ' ract-picked' : '');
            });
          });
          opts.appendChild(b);
        });
        row.appendChild(opts);
        if (s.tries) row.appendChild(el('span', 'ract-again', 'try again'));
      }
      return row;
    }
    function grade(its, done) {
      var ok = done.slice();
      its.forEach(function (it, i) {
        if (ok.indexOf(i) < 0 && same(picks[i] || '', it.answer)) ok.push(i);
      });
      return ok;
    }
    return panel(id, 'Which one is it?',
                 'Read the situation, then choose. The answer explains itself.',
                 items, render, grade);
  }

  /* -------------------------------------------------- sentence writing (no mark) */
  function sentenceStage(items) {
    var box = el('section', 'ract-stage ract-write');
    box.appendChild(el('h4', null, 'Write a sentence <span class="ract-opt-tag">optional</span>'));
    items.forEach(function (it, i) {
      var id = 'sent' + i, s = st(id);
      var row = el('div', 'ract-row');
      row.appendChild(el('p', 'ract-scen', it.prompt));
      var ta = document.createElement('textarea');
      ta.className = 'ract-ta';
      ta.rows = 2;
      ta.value = s.text || '';
      var note = el('span', 'ract-saved', s.text ? 'saved' : '');
      ta.addEventListener('input', function () {
        s.text = ta.value;
        note.textContent = ta.value ? 'saved' : '';
        save(state);
      });
      row.appendChild(ta);
      row.appendChild(el('p', 'ract-why', '<b>Check yourself:</b> ' + it.check));
      row.appendChild(note);
      box.appendChild(row);
    });
    return box;
  }

  /* ----------------------------------------------------------- teacher summary */
  var sumBox = el('section', 'ract-sum');
  function summary() {
    var rows = '', anyTries = 0;
    CFG.rounds.forEach(function (r) {
      ['match', 'cloze', 'pair'].forEach(function (kind) {
        var items = r[kind];
        if (!items || !items.length) return;
        var s = st(kind + r.round), n = s.done.length;
        anyTries += s.tries;
        rows += '<tr><td>' + ROUND_SHORT[r.round] + '</td><td>' + LABEL[kind] +
          '</td><td class="' + (n === items.length ? 'ract-won' : '') + '">' +
          n + '/' + items.length + '</td><td>' +
          (s.tries ? s.tries + (s.tries === 1 ? ' try' : ' tries') : '&ndash;') +
          '</td></tr>';
      });
    });
    sumBox.innerHTML =
      '<h4>Show your teacher</h4>' +
      '<table class="ract-tbl"><thead><tr><th>Round</th><th>Activity</th>' +
      '<th>Score</th><th>Tries</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="ract-help">Writing is not scored &mdash; it is saved on this computer.</p>';
  }
  var ROUND_SHORT = { 1: 'First two', 2: 'All three' };
  var LABEL = { match: 'Matching', cloze: 'Fill the blank', pair: 'Which one is it?' };

  /* --------------------------------------------------------------------- build */
  root.appendChild(el('h3', 'ract-h', 'Practice the words'));
  root.appendChild(el('p', 'ract-lead', CFG.lead));

  CFG.rounds.forEach(function (r) {
    var sec = el('section', 'ract-round');
    sec.appendChild(el('h4', 'ract-rlab', r.label));
    sec.appendChild(el('p', 'ract-help', r.note));
    if (r.match.length) sec.appendChild(matchStage(r.round, r.match));
    if (r.cloze.length) sec.appendChild(clozeStage(r.round, r.cloze));
    if (r.pair.length) sec.appendChild(pairStage(r.round, r.pair));
    root.appendChild(sec);
  });
  if (CFG.sentence && CFG.sentence.length) root.appendChild(sentenceStage(CFG.sentence));
  root.appendChild(sumBox);
  summary();
}
