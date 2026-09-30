# Games

Teacher-run classroom games, published here so they have a real URL to share
with colleagues. **Deliberately not linked from `index.html`** — that page is
for students and families, and these are not that. Reach them by direct link. (Colonial Trade Regions is the exception: it's a student activity, so it has a card on the Unit 1 page.)

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

The How to Play guide (`triangle-trade-how-to-play.html` at the site root, with a
two-page student PDF and a teacher PDF) is built by `tools/build-triangle-trade-guide.js`
in `ams-planning`. Its Present button shows one panel at a time for the board, and
`?teacher` adds the pause questions, likely misunderstandings and the debrief plan.
The game links to it from a How to Play button.

## colonial-trade-regions.html

Student prep for the Triangle Trade simulation (Unit 1, Week 6). Students explore
the five regions on the Atlantic map, fill in their Part 3 chart row by row, then
unlock a goods-matching game and a drag-and-drop version of the chart. Seven chart
cells spell a secret code that opens a "Certified Trader" card. Includes a word bank
(the simulation's own VOCAB at Levels 0-3, plus a definition of every trade good),
a dyslexia-friendly font toggle, and progress saved in each student's browser.
The 🔑 button opens a code box. Each region gives a code when its row is filled in (HARBOR, BREADBASKET, INDIGO, SUGAR, CROWN), and each shows a Merchant's Secret, a trading tip for that region. Teacher codes, also on Ctrl+K: `triangle` unlocks every step, `reset` clears progress, `videos` opens a page of all six word bank videos.

Images and fonts live in `colonial-trade-regions/` so the page itself stays small
(about 100 KB); nothing loads from another site. Fonts are OFL (Pirata One,
IM Fell English, IM Fell English SC, and OpenDyslexic from `../fonts`). Region
backgrounds are public-domain engravings and paintings from Wikimedia Commons
(Carwitham's Boston, the 1768 Philadelphia prospect, Coram's Mulberry Plantation,
a Library of Congress indigo works engraving); the base map is from d-maps.com.
The other photos came from the Week 6 Day 1 slide deck.

Videos (Mr. B chose or approved each one): making indigo dye (Story mfg.), rice processing at Hampton Plantation (SC State Parks), tobacco harvesting (George Washington's Mount Vernon), 18th-century farming at Colonial Williamsburg (for wheat), the sugar plantations of Barbados (starts at 3:36), and a short history of whale oil (Kimray). They play from the Word Bank and each region's Merchant's Secret, embedded from youtube-nocookie.com with an "Open it on YouTube" link in case a school filter blocks the embed. They're listed in `VIDEOS` in the page's script.

The source is a working file in the Claude session that built it, not a file in
`ams-planning`, so edit this copy directly.
