# Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static GitHub Pages landing page for Mr. B's 8th Grade Social Studies course, with a homepage linking to 10 unit pages, each containing guiding questions, activity links, and textbook readings.

**Architecture:** Plain HTML/CSS site with a shared JS nav loader. No frameworks or build tools. Each unit gets its own HTML page under `units/`. A single `nav.js` injects consistent navigation into every page. A single `style.css` provides a clean, modern, responsive design.

**Tech Stack:** HTML5, CSS3 (CSS Grid, custom properties), vanilla JavaScript

---

### Task 1: Create shared stylesheet (`style.css`)

**Files:**
- Create: `style.css`

**Step 1: Write the stylesheet**

The stylesheet should define:
- CSS custom properties for a clean, modern color palette (blues/grays, professional but approachable)
- Base reset and typography (system font stack)
- `.nav` styles — horizontal nav bar with links to all units, hamburger menu on mobile
- `.hero` styles — centered header area for homepage and unit headers
- `.guiding-question` — large italic question text, visually prominent
- `.sub-questions` — smaller supporting questions list
- `.card-grid` — responsive CSS Grid for unit cards and activity cards
- `.card` — card component with hover effect, subtle shadow
- `.readings` — styled section for textbook links with "Middle School" / "Advanced" labels
- `.placeholder` — friendly "Coming soon" state
- Responsive breakpoints: single column on mobile, 2 cols on tablet, 3 cols on desktop

**Step 2: Verify by opening in browser**

Open `style.css` directly — it won't render anything yet, but confirm no syntax errors.

**Step 3: Commit**

```bash
git add style.css
git commit -m "feat: add shared stylesheet with modern responsive design"
```

---

### Task 2: Create shared nav loader (`nav.js`)

**Files:**
- Create: `nav.js`

**Step 1: Write the nav loader**

The script should:
- Define a `UNITS` array with objects: `{ number, title, slug }` for all 10 units:
  - `{ number: "", title: "Start of Year", slug: "start-of-year" }`
  - `{ number: "1", title: "13 Colonies", slug: "13-colonies" }`
  - `{ number: "2", title: "The Triangle Trade", slug: "triangle-trade" }`
  - `{ number: "3", title: "Revolutionary Voices", slug: "revolutionary-voices" }`
  - `{ number: "4", title: "The Constitution", slug: "constitution" }`
  - `{ number: "5", title: "Semester Capstone", slug: "capstone-1" }`
  - `{ number: "6", title: "SCOTUS", slug: "scotus" }`
  - `{ number: "7", title: "The Early Republic", slug: "early-republic" }`
  - `{ number: "8", title: "Westward Expansion", slug: "westward-expansion" }`
  - `{ number: "9", title: "The Civil War", slug: "civil-war" }`
  - `{ number: "10", title: "Semester 2 Capstone", slug: "capstone-2" }`
- On `DOMContentLoaded`, find `<nav id="main-nav">` and inject:
  - A site title link ("Mr. B's Social Studies" linking to `../index.html` or `/index.html` depending on depth)
  - A list of unit links, each pointing to `units/{slug}.html`
  - Detect if we're on the homepage or a unit page to set correct relative paths
  - Highlight the current page's link as active
  - A hamburger toggle button for mobile

**Step 2: Commit**

```bash
git add nav.js
git commit -m "feat: add shared nav loader with unit navigation"
```

---

### Task 3: Create homepage (`index.html`)

**Files:**
- Create: `index.html`

**Step 1: Write the homepage**

The page should include:
- Standard HTML5 boilerplate with `<meta charset>`, viewport meta, title "Mr. B's 8th Grade Social Studies"
- Link to `style.css`
- `<nav id="main-nav"></nav>` placeholder (populated by nav.js)
- Hero section with:
  - `<h1>Mr. B's 8th Grade Social Studies</h1>`
  - Welcome paragraph: something like "Welcome to our course hub. Choose a unit below to explore activities, games, and readings."
- A `<section class="card-grid">` with 10 unit cards (plus the start-of-year), each card being an `<a>` linking to the corresponding `units/{slug}.html` with:
  - Unit number (or icon for start-of-year)
  - Unit title
- `<script src="nav.js"></script>` at the end of body

**Step 2: Open in browser and verify**

Open `index.html` in a browser. Confirm:
- Header renders
- Unit cards display in a grid
- Nav bar appears
- Cards link to correct unit paths

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add homepage with unit card grid"
```

---

### Task 4: Create the `units/` directory and unit page template

**Files:**
- Create: `units/` directory

**Step 1: Create the directory**

```bash
mkdir -p units
```

**Step 2: Commit (empty directory won't commit — this is just prep)**

Continue to Task 5.

---

### Task 5: Create unit pages — Start of Year

**Files:**
- Create: `units/start-of-year.html`

**Step 1: Write the unit page**

Include:
- HTML5 boilerplate, link to `../style.css`
- `<nav id="main-nav"></nav>`
- Unit header: "Start of Year"
- Guiding question: *"What does it mean to think like a historian?"*
- Sub-questions:
  - *"How do we analyze primary and secondary sources?"*
  - *"What can we learn from the people who came before us?"*
- Activities section with one card:
  - **First Day Escape Room** — "Work with your team to solve puzzles and get to know each other." Links to `https://shiebenaderet.github.io/firstescape/`
- Readings section:
  - YAWP MS: [Introduction](https://americanyawpms.com/introduction.html), [Ch 1: Indigenous America](https://americanyawpms.com/ch1.html)
  - American YAWP: [Ch 1: Indigenous America](http://www.americanyawp.com/text/01-the-new-world)
- `<script src="../nav.js"></script>`

**Step 2: Open in browser, verify layout**

**Step 3: Commit**

```bash
git add units/start-of-year.html
git commit -m "feat: add Start of Year unit page"
```

---

### Task 6: Create unit pages — Unit 1: 13 Colonies

**Files:**
- Create: `units/13-colonies.html`

**Content:**
- Guiding question: *"Why did people leave everything they knew to start over in an unknown land?"*
- Sub-questions:
  - *"What were the political, religious, and economic motives for colonization?"*
  - *"How did colonial life differ across the three colonial regions?"*
- Activities:
  - **Colonial Unrest** — "Explore the growing tensions in the colonies." Links to `https://shiebenaderet.github.io/colonial-unrest/`
- Readings:
  - YAWP MS: [Ch 2: Colliding Cultures](https://americanyawpms.com/ch2.html), [Ch 3: British North America](https://americanyawpms.com/ch3.html), [Ch 4: Colonial Society](https://americanyawpms.com/ch4.html)
  - American YAWP: [Ch 2](http://www.americanyawp.com/text/02-colliding-cultures), [Ch 3](http://www.americanyawp.com/text/03-british-north-america), [Ch 4](http://www.americanyawp.com/text/04-colonial-society)

**Commit:** `git commit -m "feat: add 13 Colonies unit page"`

---

### Task 7: Create unit pages — Unit 2: The Triangle Trade

**Files:**
- Create: `units/triangle-trade.html`

**Content:**
- Guiding question: *"How did the Triangle Trade shape the economies and societies of three continents?"*
- Sub-questions:
  - *"What were the human costs of the transatlantic slave trade?"*
  - *"How did trade networks connect Europe, Africa, and the Americas?"*
- Activities: Placeholder — "Coming soon"
- Readings:
  - YAWP MS: [Ch 2: Colliding Cultures](https://americanyawpms.com/ch2.html), [Ch 4: Colonial Society](https://americanyawpms.com/ch4.html)
  - American YAWP: [Ch 2](http://www.americanyawp.com/text/02-colliding-cultures), [Ch 4](http://www.americanyawp.com/text/04-colonial-society)

**Commit:** `git commit -m "feat: add Triangle Trade unit page"`

---

### Task 8: Create unit pages — Unit 3: Revolutionary Voices

**Files:**
- Create: `units/revolutionary-voices.html`

**Content:**
- Guiding question: *"Whose voices shaped the fight for American independence — and whose were left out?"*
- Sub-questions:
  - *"What arguments did colonists make for breaking away from Britain?"*
  - *"How did different groups experience the Revolution differently?"*
- Activities:
  - **Revolutionary Voices** — "Hear from the people who lived through the Revolution." Links to `https://shiebenaderet.github.io/revolutionaryvoices/`
  - **Revolution Review** — "Review the key ideas leading up to the Revolution." Links to `https://shiebenaderet.github.io/revolutionreview/`
- Readings:
  - YAWP MS: [Ch 5: The American Revolution](https://americanyawpms.com/ch5.html)
  - American YAWP: [Ch 5](http://www.americanyawp.com/text/05-the-american-revolution/)

**Commit:** `git commit -m "feat: add Revolutionary Voices unit page"`

---

### Task 9: Create unit pages — Unit 4: The Constitution

**Files:**
- Create: `units/constitution.html`

**Content:**
- Guiding question: *"How did the founders attempt to balance power, liberty, and order in a new government?"*
- Sub-questions:
  - *"What compromises were necessary to create the Constitution?"*
  - *"How does the Constitution still shape our lives today?"*
- Activities:
  - **Constitution Review** — "Review the key ideas of the Constitution." Links to `https://shiebenaderet.github.io/constitutionreview/`
- Readings:
  - YAWP MS: [Ch 6: A New Nation](https://americanyawpms.com/ch6.html)
  - American YAWP: [Ch 6](http://www.americanyawp.com/text/06-a-new-nation)

**Commit:** `git commit -m "feat: add Constitution unit page"`

---

### Task 10: Create unit pages — Unit 5: Semester Capstone

**Files:**
- Create: `units/capstone-1.html`

**Content:**
- Guiding question: *"What have you learned about the birth of a nation — and what questions remain?"*
- Sub-questions: Placeholder — "Sub-questions coming soon."
- Activities: Placeholder — "Capstone project details coming soon."
- Readings: No specific chapters — this is a synthesis/project unit.

**Commit:** `git commit -m "feat: add Semester 1 Capstone unit page"`

---

### Task 11: Create unit pages — Unit 6: SCOTUS

**Files:**
- Create: `units/scotus.html`

**Content:**
- Guiding question: *"How does the Supreme Court shape the meaning of justice in America?"*
- Sub-questions:
  - *"What power does judicial review give the Court?"*
  - *"How have landmark cases changed American society?"*
- Activities:
  - **SCOTUS Debate Project** — "Research and debate landmark Supreme Court cases." Links to `https://scotus.mrbsocialstudies.org/`
- Readings:
  - YAWP MS: [Ch 6: A New Nation](https://americanyawpms.com/ch6.html), [Ch 9: Democracy in America](https://americanyawpms.com/ch9.html)
  - American YAWP: [Ch 6](http://www.americanyawp.com/text/06-a-new-nation), [Ch 9](http://www.americanyawp.com/text/09-democracy-in-america)

**Commit:** `git commit -m "feat: add SCOTUS unit page"`

---

### Task 12: Create unit pages — Unit 7: The Early Republic

**Files:**
- Create: `units/early-republic.html`

**Content:**
- Guiding question: *"How did the young nation navigate its first challenges and define its identity?"*
- Sub-questions:
  - *"What precedents did the early presidents set?"*
  - *"How did foreign and domestic conflicts test the new government?"*
- Activities:
  - **Early Republic** — "Explore the challenges of the early United States." Links to `https://shiebenaderet.github.io/earlyrepublic/`
  - **War of 1812** — "An interactive strategy game set during the War of 1812." Links to `http://1812.mrbsocialstudies.org/`
  - **Lewis & Clark** — "Follow Lewis and Clark's Journey of Discovery." Links to `https://shiebenaderet.github.io/lewis-and-clark/`
- Readings:
  - YAWP MS: [Ch 7: The Early Republic](https://americanyawpms.com/ch7.html), [Ch 8: The Market Revolution](https://americanyawpms.com/ch8.html)
  - American YAWP: [Ch 7](http://www.americanyawp.com/text/07-the-early-republic), [Ch 8](http://www.americanyawp.com/text/08-the-market-revolution)

**Commit:** `git commit -m "feat: add Early Republic unit page"`

---

### Task 13: Create unit pages — Unit 8: Westward Expansion

**Files:**
- Create: `units/westward-expansion.html`

**Content:**
- Guiding question: *"What drove Americans westward — and what was the cost of expansion?"*
- Sub-questions:
  - *"How did Manifest Destiny justify expansion?"*
  - *"What impact did westward expansion have on Indigenous peoples and Mexican communities?"*
- Activities: Placeholder — "Coming soon"
- Readings:
  - YAWP MS: [Ch 12: Manifest Destiny](https://americanyawpms.com/ch12.html)
  - American YAWP: [Ch 12](http://www.americanyawp.com/text/12-manifest-destiny)

**Commit:** `git commit -m "feat: add Westward Expansion unit page"`

---

### Task 14: Create unit pages — Unit 9: The Civil War

**Files:**
- Create: `units/civil-war.html`

**Content:**
- Guiding question: *"Why did the nation tear itself apart — and what did it cost to put it back together?"*
- Sub-questions:
  - *"What role did slavery play in causing the Civil War?"*
  - *"How did the war transform American society?"*
- Activities:
  - **Civil War Battle Simulation** — "A strategy game for learning history through tactical decision making." Links to `https://shiebenaderet.github.io/civil-war-battle-simulation/`
  - **Civil War Game** — "Another interactive Civil War experience." Links to `https://shiebenaderet.github.io/civilwargame/`
- Readings:
  - YAWP MS: [Ch 13: The Sectional Crisis](https://americanyawpms.com/ch13.html), [Ch 14: The Civil War](https://americanyawpms.com/ch14.html)
  - American YAWP: [Ch 13](http://www.americanyawp.com/text/13-the-sectional-crisis), [Ch 14](http://www.americanyawp.com/text/14-the-civil-war)

**Commit:** `git commit -m "feat: add Civil War unit page"`

---

### Task 15: Create unit pages — Unit 10: Semester 2 Capstone

**Files:**
- Create: `units/capstone-2.html`

**Content:**
- Guiding question: *"How did the forces of the first century of American history shape the nation we know today?"*
- Sub-questions: Placeholder — "Sub-questions coming soon."
- Activities: Placeholder — "Capstone project details coming soon."
- Readings: No specific chapters — synthesis/project unit.

**Commit:** `git commit -m "feat: add Semester 2 Capstone unit page"`

---

### Task 16: Final verification and deploy

**Step 1: Open `index.html` in browser**

Verify:
- Homepage renders with all 10 unit cards
- Nav bar appears on homepage
- Each unit card links correctly

**Step 2: Click through every unit page**

Verify for each:
- Nav bar renders and highlights current page
- Guiding question displays prominently
- Activity links open correct external sites
- Reading links open correct YAWP chapters
- Placeholder units show "Coming soon" gracefully
- Mobile responsive (resize browser)

**Step 3: Push to GitHub**

```bash
git push origin main
```

**Step 4: Verify live site**

Visit `https://ams.mrbsocialstudies.org/` and confirm it loads.
