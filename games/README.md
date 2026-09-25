# Games

Teacher-run classroom games, published here so they have a real URL to share
with colleagues. **Deliberately not linked from `index.html`** — that page is
for students and families, and these are not that. Reach them by direct link.

## which-came-first.html

A stand-up-sit-down timeline game for the first week. Nineteen rounds, each
pairing one event from the course against one from pop culture. Every gap is at
least eleven years, so it rewards reasoning rather than guessing — the earlier
version had fourteen pairs under five years apart, five of them one year apart.

Self-contained: one file, no stylesheet or script dependencies, every image
embedded. Built from `Week1-Which-Came-First.html` in the private
`ams-planning` repo; regenerate with `node tools/build-standalone-game.js`
there rather than editing this copy, which will otherwise drift.

**Images.** The historical photographs are public domain, licence-checked
individually against the Wikimedia Commons API rather than assumed from the
subject's age. The pop-culture rounds use generated typographic cards in the
course palette — they imitate no brand's logo or lettering, which is what keeps
this page publishable.

## triangle-trade.html

The Week 5 trading simulation. The teacher runs it from one laptop, the Dock, and
projects it. Five regions trade in rounds, each a Negotiation phase followed by a
Shipping phase, and the game logs every voyage and its chance cards. Each class period
keeps its own game.

Built from `Triangle-Trade.html`, `triangle-trade-data.js` and `triangle-trade-logic.js`
in the private `ams-planning` repo. Regenerate with `node tools/build-triangle-trade.js`
there rather than editing this copy.

**No server.** Games save in that browser's storage. Backups are JSON files with
names like `Triangle-Trade_Period-2_2026-09-30_10-47_end-of-day.json`, written to a
folder the teacher picks (Chrome/Edge) or to Downloads. The June version synced
through a Cloudflare Worker with a shared PIN; that code is gone.

**Rosters stay on the laptop.** "Load roster" reads the planning hub's Grouping Tool
export in the browser and keeps only first name, last initial and reading version (0-3)
for suggesting teams. It drops IDs and scores on read, and nothing is sent anywhere.

The readings the game links to are at the site root (`triangle-trade-readings.html`,
`triangle-trade-level-0.html` ... `-3.html`, and a PDF of each), built by
`tools/build-triangle-readings.py` in `ams-planning`. Unlike the game, the readings
are linked from the Unit 1 page, because students read them. The needs lists are
secret in the game, so they are not on those pages; the teacher prints them as cards.
