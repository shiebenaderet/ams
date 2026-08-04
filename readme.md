# Mr. B's 8th Grade Social Studies — Course Site

Public course website for 8th grade American Studies at Alderwood Middle School, published at [mrbsocialstudies.org](https://mrbsocialstudies.org). Static HTML/CSS/JS, no build step, deployed via GitHub Pages.

## Where things stand (2026–2027 school year)

The site was rebuilt in August 2026 around a new **8-unit structure** (previously 10 units). Current status:

- **Units 1–6** (Foundations & Identity through A Nation Divided): built out with driving questions, supporting questions, week ranges, and signature project descriptions.
- **Unit 7 — A Changing Nation**: page exists but has no activities or readings yet. This is a from-scratch unit; the plan is to build it out in the Feb–Mar 2027 window so it doesn't compete with spring grading.
- **Unit 8 — Reform & Civic Action**: page exists but also has no activity links yet.
- **families.html** and **standards.html** have not been reviewed against the new unit structure yet — `families.html` still shows the old "2025–2026" school year and should be corrected. `standards.html` / `standards-data.js` are likely still keyed to the old 10-unit numbering; current standards alignment work actually lives in the `planning/` folder (`Unit-Outcomes-Alignment.html` and the `WA-Grade8-Canvas-Outcomes*.csv` files).
- **endofyear.html** may still reference retired unit/capstone names.
- Old unit pages from the previous structure are kept locally in `_retired-units/` (gitignored, not deployed) in case any content needs to be salvaged.

There's no formal version number for this site (it's a static page, not a package) — the source of truth for "what changed and when" is `git log`. Notable milestones:

- **Aug 2026** — realigned from 10 units to the 2026–27 eight-unit structure (`nav.js`, `index.html`, `units/`).

## Layout

```
index.html          Homepage — hero + unit cards grouped by semester
nav.js               Injects the shared nav bar into every page (unit list, active-page highlighting, mobile toggle)
style.css            Shared stylesheet (CSS custom properties, card grid, responsive breakpoints)
units/               One HTML page per unit (8 total)
families.html        Parent/guardian-facing page: contact info, expectations, how to support learning at home
standards.html        Standards progression map (needs a pass — see above)
standards-data.js     Data backing standards.html
endofyear.html        End-of-year reflection page
CNAME                 GitHub Pages custom domain config (mrbsocialstudies.org)
planning/             Internal curriculum planning docs — gitignored here, lives in the private ams-planning repo (see below)
_retired-units/       Old (pre-realignment) unit pages, kept for reference; gitignored
docs/plans/            Historical implementation plans from earlier build passes
```

### How a unit page fits together

Each page in `units/` follows the same shape: a driving question, three supporting questions, a week range + historical era, a plain-language "signature project" description, and (where built out) activity and reading links. `nav.js` reads a shared `SEMESTER_1` / `SEMESTER_2` list at the top of the file to build the dropdown nav and highlight whichever unit page is active — that list is the single place to update if a unit is renamed, reordered, or added.

## planning/

The curriculum planning hub (curriculum maps, standards alignment, classroom routines, Week 1 game files, unit content briefs) used to live in this public repo, reachable only if someone knew/guessed the URL — obscurity, not real privacy. It now lives in a separate **private** repo: [`ams-planning`](https://github.com/shiebenaderet/ams-planning). A local, gitignored copy is still kept at `planning/` in this working directory for convenience, but it is not tracked or pushed from here.

Note: the planning docs were public in this repo's history before the split (commits before Aug 2026); that history was left as-is rather than rewritten, since nothing sensitive (credentials, student data) was in there — just curriculum material.

The plan is to deploy `ams-planning` via Cloudflare Pages with Cloudflare Access (login-gated, allowlisted by email) so it's actually private rather than just unlinked. Not yet done as of Aug 2026.

## Contributing / editing

This is a single-teacher course site with no CI or build process. Edit HTML/CSS/JS directly, verify locally (e.g. `python3 -m http.server` and click through), then commit and push to `main` — GitHub Pages deploys on push automatically.
