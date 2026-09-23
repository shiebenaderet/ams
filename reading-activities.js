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
      if (typeof onStageChange === 'function') onStageChange();
    });

    paint();
    return box;
  }

  /* Set once the stepper exists. panel() calls it after every Check so the nav can
     react -- a finished stage turns "Next" into the obvious thing to press. */
  var onStageChange = null;

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

  var ROUND_SHORT = { 1: 'First two', 2: 'All three' };
  var LABEL = { match: 'Matching', cloze: 'Fill the blank', pair: 'Which one is it?' };

  /* ------------------------------------------------------------------- stepper */
  /* One stage on screen at a time. Stacked, Level 2 opens on nine matching rows
     followed by nine cloze sentences followed by the pairs -- a scroll that reads
     as a worksheet, which is the shape the twelve-word reference sheet exists to
     avoid. One stage at a time is the same idea applied here: a sequence of small
     asks with the end in sight.

     Every stage builder already returns a detached node and already owns its own
     slice of `state`, so the stepper only decides which node is in the document.
     Grading, retries and persistence are untouched by it. */
  var STEPS = [];
  CFG.rounds.forEach(function (r) {
    ['match', 'cloze', 'pair'].forEach(function (kind) {
      if (r[kind] && r[kind].length) {
        STEPS.push({ kind: kind, round: r.round, items: r[kind],
                     rlabel: r.label, rnote: r.note, id: kind + r.round });
      }
    });
  });
  if (CFG.sentence && CFG.sentence.length) {
    STEPS.push({ kind: 'sentence', items: CFG.sentence, id: 'sentence' });
  }
  var LAST = STEPS.length;              // the results screen sits one past the end
  var stage = el('div', 'ract-stagewrap');
  var bar = el('div', 'ract-nav');
  var back = el('button', 'ract-step ract-back', '&larr; Back');
  var fwd = el('button', 'ract-step ract-fwd', 'Next &rarr;');
  var prog = el('span', 'ract-prog');
  back.type = fwd.type = 'button';
  bar.appendChild(back); bar.appendChild(prog); bar.appendChild(fwd);

  function complete(sp) {
    if (sp.kind === 'sentence') return true;   // never scored, never blocking
    return st(sp.id).done.length === sp.items.length;
  }
  function firstUnfinished() {
    for (var i = 0; i < STEPS.length; i++) if (!complete(STEPS[i])) return i;
    return LAST;
  }

  var at = typeof state.__step === 'number' ? state.__step : firstUnfinished();
  if (at > LAST) at = LAST;

  function show(i, scroll) {
    at = i; state.__step = i; save(state);
    stage.innerHTML = '';
    if (i === LAST) {
      stage.appendChild(results());
      prog.innerHTML = 'Done';
      fwd.style.display = 'none';
    } else {
      var sp = STEPS[i];
      /* The round caption rides with the step rather than wrapping a group of
         them, because a student now sees one stage and needs to know which round
         it belongs to without scrolling back to a heading. */
      if (sp.rlabel) {
        stage.appendChild(el('h4', 'ract-rlab', sp.rlabel));
        stage.appendChild(el('p', 'ract-help', sp.rnote));
      }
      stage.appendChild(
        sp.kind === 'match' ? matchStage(sp.round, sp.items) :
        sp.kind === 'cloze' ? clozeStage(sp.round, sp.items) :
        sp.kind === 'pair' ? pairStage(sp.round, sp.items) :
                             sentenceStage(sp.items));
      prog.innerHTML = 'Step ' + (i + 1) + ' of ' + (LAST + 1);
      fwd.style.display = '';
      fwd.innerHTML = (i === LAST - 1) ? 'See your score &rarr;' : 'Next &rarr;';
    }
    back.style.visibility = i === 0 ? 'hidden' : '';
    if (onStageChange) onStageChange();
    if (scroll) root.scrollIntoView({ block: 'start' });
  }
  back.addEventListener('click', function () { show(Math.max(0, at - 1), true); });
  fwd.addEventListener('click', function () { show(Math.min(LAST, at + 1), true); });

  /* ------------------------------------------------------------------- results */
  function results() {
    var box = el('section', 'ract-sum');
    var rows = '', got = 0, poss = 0, tries = 0;
    STEPS.forEach(function (sp) {
      if (sp.kind === 'sentence') return;
      var s = st(sp.id), n = s.done.length;
      got += n; poss += sp.items.length; tries += s.tries;
      rows += '<tr><td>' + ROUND_SHORT[sp.round] + '</td><td>' + LABEL[sp.kind] +
        '</td><td class="' + (n === sp.items.length ? 'ract-won' : '') + '">' +
        n + '/' + sp.items.length + '</td><td>' +
        (s.tries ? s.tries + (s.tries === 1 ? ' try' : ' tries') : '&ndash;') +
        '</td></tr>';
    });
    box.innerHTML =
      '<h4>Show your teacher</h4>' +
      '<table class="ract-tbl"><thead><tr><th>Round</th><th>Activity</th>' +
      '<th>Score</th><th>Tries</th></tr></thead><tbody>' + rows +
      '<tr class="ract-tot"><td colspan="2">Altogether</td><td class="' +
      (got === poss ? 'ract-won' : '') + '">' + got + '/' + poss + '</td><td>' +
      tries + (tries === 1 ? ' try' : ' tries') + '</td></tr></tbody></table>' +
      '<p class="ract-help">Writing is not scored &mdash; it is saved on this computer.</p>';
    var again = el('button', 'ract-restart', 'Start over');
    again.type = 'button';
    again.addEventListener('click', function () {
      /* Confirmed, because this is the one control that destroys work -- and a
         student reaching for "start over" before the map quiz should not lose a
         score they meant to show someone. */
      if (!window.confirm('Clear your answers and start these activities again?')) return;
      try { localStorage.removeItem(LSK); } catch (e) {}
      state = {};
      location.reload();
    });
    box.appendChild(again);
    return box;
  }

  /* --------------------------------------------------------------------- build */
  root.appendChild(el('h3', 'ract-h', 'Practice the words'));
  root.appendChild(el('p', 'ract-lead', CFG.lead));
  var panelBox = el('section', 'ract-round');
  panelBox.appendChild(stage);
  panelBox.appendChild(bar);
  root.appendChild(panelBox);
  onStageChange = function () {
    var sp = STEPS[at];
    if (sp && complete(sp)) fwd.classList.add('ract-ready');
    else fwd.classList.remove('ract-ready');
  };
  show(at, false);
}
