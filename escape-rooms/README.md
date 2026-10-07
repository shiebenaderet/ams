# Escape rooms

Group puzzle rooms played in class. **Students open these**, so the hub
(`index.html`) is linked from the nav bar and each room also gets a card on its
unit page.

Each room is one self-contained lock page here, `<topic>-<year>.html`. The
printed puzzles, group sheet and teacher answer key are **not** published: they
live in the private `ams-planning` repo with the build script, which writes the
lock page here directly. Codes are stored only as hashes, and the teacher code
too.

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

Group progress saves in each Chromebook's browser; Teacher » Reset clears it between periods.
