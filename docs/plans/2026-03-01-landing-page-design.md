# Landing Page Design — Mr. B's 8th Grade Social Studies

## Overview

A static GitHub Pages site serving as the central hub for 8th Grade Social Studies at Alderwood Middle School. Hosted at `ams.mrbsocialstudies.org`. Built with plain HTML/CSS and a small JS nav loader — no frameworks, no build tools.

## Site Structure

```
ams/
├── index.html              ← Welcome page with unit grid
├── style.css               ← Shared styles (modern, responsive)
├── nav.js                  ← Shared nav bar loader
├── units/
│   ├── start-of-year.html
│   ├── 13-colonies.html
│   ├── triangle-trade.html
│   ├── revolutionary-voices.html
│   ├── constitution.html
│   ├── capstone-1.html
│   ├── scotus.html
│   ├── early-republic.html
│   ├── westward-expansion.html
│   ├── civil-war.html
│   └── capstone-2.html
├── CNAME
└── readme.md
```

## Homepage (`index.html`)

- Header: "Mr. B's 8th Grade Social Studies" + welcome message
- Responsive grid of 10 unit cards (number + title, links to unit page)
- Clean, modern design

## Unit Page Template

Each unit page follows this layout:

1. Shared nav bar (injected by `nav.js`)
2. Unit header (number + title)
3. Guiding question — large, prominent essential question
4. Sub-questions — supporting inquiry questions
5. Activities & games — cards linking to GitHub Pages sites/repos
6. Readings — YAWP MS (middle school) + American YAWP (advanced) chapter links

Units without content yet show a "Coming soon" placeholder.

## Shared Navigation (`nav.js`)

A small script that injects a consistent nav bar into every page. Unit list is defined in a single array — update once, all pages reflect the change.

## Unit-to-Content Mapping

| Unit | Activities/Repos | YAWP MS Chapters | American YAWP Chapters |
|------|-----------------|-------------------|----------------------|
| General/Start of Year | firstescape | Ch 1: Indigenous America | Ch 1: Indigenous America |
| Unit 1 - 13 Colonies | colonial-unrest | Ch 2-4: Colliding Cultures, British North America, Colonial Society | Ch 2-4 |
| Unit 2 - Triangle Trade | *(none yet)* | Ch 2: Colliding Cultures, Ch 4: Colonial Society | Ch 2, Ch 4 |
| Unit 3 - Revolutionary Voices | revolutionaryvoices, revolutionreview | Ch 5: The American Revolution | Ch 5 |
| Unit 4 - The Constitution | constitutionreview | Ch 6: A New Nation | Ch 6 |
| Unit 5 - Semester Capstone | *(none yet)* | — | — |
| Unit 6 - SCOTUS | scotus | Ch 6: A New Nation, Ch 9: Democracy in America | Ch 6, Ch 9 |
| Unit 7 - Early Republic | earlyrepublic, warof1812, lewis-and-clark | Ch 7-8: The Early Republic, The Market Revolution | Ch 7-8 |
| Unit 8 - Westward Expansion | *(possibly lewis-and-clark)* | Ch 12: Manifest Destiny | Ch 12 |
| Unit 9 - Civil War | civil-war-battle-simulation, civilwargame | Ch 13-14: The Sectional Crisis, The Civil War | Ch 13-14 |
| Unit 10 - Semester 2 Capstone | *(none yet)* | — | — |

## Design Decisions

- **HTML + JS nav loader** over pure HTML (easier incremental updates) or Jekyll (unnecessary complexity)
- **Separate pages per unit** over single-page (cleaner, independent editing)
- **Guiding questions** anchor each unit page pedagogically
- **Dual YAWP links** support differentiation (middle school + advanced)
- **No build tools** — edit files, push, done

## Incremental Development

Designed for ongoing updates:
- Add activities by editing a single unit HTML file
- Add units by creating one HTML file + one line in `nav.js`
- Guiding questions refined over time
