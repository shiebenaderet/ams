# Escape rooms

Group puzzle rooms played in class. **Students open these**, so the hub
(`index.html`) is linked from the nav bar and each room also gets a card on its
unit page.

Each room is one self-contained lock page here, `<topic>-<year>.html`. The
printed puzzles, group sheet and teacher answer key are **not** published: they
live in the private `ams-planning` repo with the build script, which writes the
lock page here directly. Codes are stored only as hashes, and the teacher code
too.

## Leaderboard

`dashboard.html` is one live leaderboard for every room. When a group signs in on a lock
page (period + each member's favorite character), the page reports every unlock, hint and
wrong code to the `study-tools` Supabase project through the `escape_*` functions. The
tables are closed to the public; the page's key can only call those functions, and a group
can only update its own row (each run has a secret). Times come from the server clock.
Ranking: most locks, then time to the last lock plus one minute per hint.

Teacher tools on the dashboard (Ctrl+K, or the Teacher link): rename or hide a group,
clear a period's board (hidden, not erased), download a CSV. The passphrase is checked in
the database and stored only as a bcrypt hash. Built by `tools/build-escape-dashboard.py`
in `ams-planning` from `tools/escape-rooms.json`; add new rooms there.

## Rooms

| Room | Unit | Lock page | Built by (ams-planning) |
|---|---|---|---|
| The Proclamation Line | 2 | `proclamation-1763.html` | `tools/build-escape-proclamation.py` |

## Adding a room

1. In `ams-planning`, copy `tools/build-escape-proclamation.py` and change its data block
   (the template `tools/escape-locks-template.html` is shared; don't fork it).
2. Run the build with this repo checked out beside it; the lock page lands here.
3. Add a card under the unit's heading in `index.html` (add the heading if it's the
   unit's first room), a card on `units/<unit>.html`, and a row above.

Group progress saves in each Chromebook's browser. Teacher tools (Skip lock, Reset) are hidden: press Ctrl+K on a lock page, or tap its title five times on a touchscreen, then enter the teacher code. Reset each Chromebook between periods.
