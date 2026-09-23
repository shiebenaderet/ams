/* Definition pop-ups on the vocabulary words inside the colonial-regions readings.

   WHY THIS IS NOT title=""
   tools/student_glosses.py opens by rejecting exactly that: a title attribute is
   invisible to most screen readers, unreachable on a touchscreen, and frequently
   skipped by Google Translate because it is attribute text rather than document
   text. The students these readings are scaffolded for are the ones using
   read-aloud and translation, so a tooltip would be invisible to precisely the
   readers it exists for -- and it would fail silently, because the page would
   look right to a sighted teacher checking it with a mouse.

   So the definition is never duplicated into an attribute. Each marked word
   carries aria-describedby pointing at the <dd> in the page's own word box, which
   is real text, already in the reading order, and already translated when the
   page is. This script only moves that same text into a visible bubble.

   Built as a single reused bubble rather than one per word: a Level 3 reading
   marks about forty occurrences, and forty hidden copies of a definition would
   be read aloud mid-sentence by a screen reader walking the text. */
(function () {
  function init() {
    var pops = document.querySelectorAll('.vpop');
    if (!pops.length) return;

    var bubble = document.createElement('div');
    bubble.className = 'vpop-bubble';
    bubble.setAttribute('role', 'status');
    bubble.hidden = true;
    document.body.appendChild(bubble);
    var open = null;

    /* The bubble shows the plain line only. The <dd> holds plain and academic,
       and both run together read as one long sentence in a small box mid-reading;
       the academic line is a scroll away in the word box. Screen readers still get
       the whole <dd>, through aria-describedby. */
    function defFor(btn) {
      var d = document.getElementById(btn.getAttribute('aria-describedby'));
      if (!d) return '';
      var s = d.querySelector('.vs');
      return (s || d).textContent.trim();
    }

    function show(btn) {
      var text = defFor(btn);
      if (!text) return;
      bubble.textContent = text;
      bubble.hidden = false;
      var r = btn.getBoundingClientRect();
      var top = r.bottom + window.scrollY + 8;
      bubble.style.top = top + 'px';
      /* Clamped to the viewport so a word at the right edge does not push the
         bubble off the page -- which on a phone means a horizontal scrollbar on
         a reading that otherwise has none. */
      var w = Math.min(bubble.offsetWidth, window.innerWidth - 16);
      bubble.style.maxWidth = (window.innerWidth - 16) + 'px';
      var left = r.left + window.scrollX + r.width / 2 - w / 2;
      left = Math.max(8, Math.min(left, window.innerWidth - w - 8));
      bubble.style.left = left + 'px';
      btn.setAttribute('aria-expanded', 'true');
      open = btn;
    }
    function hide() {
      bubble.hidden = true;
      if (open) open.setAttribute('aria-expanded', 'false');
      open = null;
    }

    [].forEach.call(pops, function (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('mouseenter', function () { show(btn); });
      btn.addEventListener('mouseleave', function () { if (open === btn) hide(); });
      btn.addEventListener('focus', function () { show(btn); });
      btn.addEventListener('blur', function () { if (open === btn) hide(); });
      /* Tap: toggle, and stop the click becoming a second event that closes it.
         A touchscreen never sends mouseenter, so without this the whole feature
         is mouse-only -- the exact failure the title="" version would have had. */
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (open === btn) hide(); else show(btn);
      });
    });

    document.addEventListener('click', function () { if (open) hide(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) { open.focus(); hide(); }
    });
    window.addEventListener('scroll', function () { if (open) hide(); }, { passive: true });
    window.addEventListener('resize', function () { if (open) hide(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
