# Mr. B's 8th Grade Social Studies — Course Site

Public course website for 8th grade American Studies at Alderwood Middle School, published at [mrbsocialstudies.org](https://mrbsocialstudies.org). Static HTML/CSS/JS, no build step, deployed via GitHub Pages.

## Where things stand (2026–2027 school year)

The site was rebuilt in August 2026 around a new **8-unit structure** (previously 10 units). Current status:

- **Units 1–6** (Foundations & Identity through A Nation Divided): built out with driving questions, supporting questions, week ranges, and signature project descriptions.
- **Unit 7 — A Changing Nation**: page exists but has no activities or readings yet. This is a from-scratch unit; the plan is to build it out in the Feb–Mar 2027 window so it doesn't compete with spring grading.
- **Unit 8 — Reform & Civic Action**: page exists but also has no activity links yet.
- **families.html**: reviewed and fixed — school year corrected to 2026–2027, course description updated to cover the full year (was truncated at "through the Civil War").
- **endofyear.html**: removed. It was a functional reflection form (Google Form-backed) built around the old 10-unit structure; rebuilding it for 8 units wasn't worth it right now, so the nav slot now links out to the Study Site instead.
- **standards.html** has not been reviewed against the new unit structure yet — `standards.html` / `standards-data.js` are likely still keyed to the old 10-unit numbering; current standards alignment work actually lives in the private `ams-planning` repo (`Unit-Outcomes-Alignment.html`, `Curriculum-Map.html`, `Syllabus-Standards-Map.html`, and the `WA-Grade8-Canvas-Outcomes*.csv` files).
- Old unit pages from the previous structure are kept locally in `_retired-units/` (gitignored, not deployed) in case any content needs to be salvaged.
- **This site does not sync with `ams-planning` — it is updated by hand.** That repo holds the real schedule (`course-calendar.js` is the source of truth for which week each unit runs). The predictable places this site goes stale: unit **week ranges** on `index.html`, **signature projects** on the cards and unit pages, and anything on `families.html` describing how the course actually runs. Two of eight week ranges were wrong when this was last checked, so it is worth cross-checking against the planning repo rather than memory.

There's no formal version number for this site (it's a static page, not a package) — the source of truth for "what changed and when" is `git log`. Notable milestones:

- **Aug 2026** — realigned from 10 units to the 2026–27 eight-unit structure (`nav.js`, `index.html`, `units/`).
- **Aug 2026** — `planning/` split into the private `ams-planning` repo. `mrbsocialstudies.org` DNS moved to Cloudflare; the planning hub is now deployed there (Cloudflare Worker) behind Cloudflare Access (login-gated by email allowlist) — see `ams-planning`'s README for the full setup.
- **Aug 2026** — removed `endofyear.html` (stale 10-unit reflection form), fixed `families.html`'s stale year and truncated course description.
- **Aug 2026 (17th)** — corrected two stale unit schedules and named every signature project. Units 2 and 3 still showed pre-cascade pacing (Unit 2 as weeks 6–8 after it grew to 6–11; Unit 3 as 9–19 after compressing to 12–19) — the other six already matched. Each unit card now names the project students build; "Voices of the Revolution" had appeared *nowhere* on this site and the Constitutional CBA once, though they are the two keystones the year drives toward. Unit 1's project was described as an identity map and is actually a **redesigned Statue of Liberty**, explained one change at a time in a one-page handout.
- **Aug 2026 (17th)** — added **"What the 1–4 Scores Mean"** to `families.html`. The percentage categories (50/40/10) and the four-level outcome scores were both true here and never reconciled, so a family reading Canvas saw a percentage *and* 1–4 scores with nothing explaining the relationship. The page now says what each answers — the percentage is how consistently work is kept up, the 1–4 is how well a specific skill was learned — and that a 3 is the target rather than a ceiling.

## Layout

```
index.html          Homepage — hero + unit cards grouped by semester
nav.js               Injects the shared nav bar into every page (unit list, active-page highlighting, mobile toggle)
style.css            Shared stylesheet (CSS custom properties, card grid, responsive breakpoints)
units/               One HTML page per unit (8 total)
families.html        Parent/guardian-facing page: contact info, expectations, how to support learning at home
standards.html        Standards progression map (needs a pass — see above)
standards-data.js     Data backing standards.html
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

`ams-planning` is deployed via a Cloudflare Worker at `plan.mrbsocialstudies.org`, behind Cloudflare Access (login-gated by one-time-PIN, allowlisted by email) — genuinely private now, not just unlinked. `mrbsocialstudies.org`'s DNS lives on Cloudflare as of Aug 2026 (all pre-existing subdomains re-added after the nameserver migration). See `ams-planning`'s README for the full setup history.

## Contributing / editing

This is a single-teacher course site with no CI or build process. Edit HTML/CSS/JS directly, verify locally (e.g. `python3 -m http.server` and click through), then commit and push to `main` — GitHub Pages deploys on push automatically.
