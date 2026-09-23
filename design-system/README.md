# Design systems

## Extracted from Ponytail

Ponytail has no token file; its visual language lives in its assets. Values sampled exactly:

| Where | Value | Role |
| --- | --- | --- |
| `assets/waitlist-banner.png` | `#0e0d0b` | page ground |
| | `#15130f` | terminal window |
| | `#2a2620` | window border |
| | `#d8d3c5` | headline text |
| | `#8b8270` | secondary text |
| | `#e08a4a` | accent (eyebrow, button) |
| | `#e0705f` `#d8a757` `#83c167` | window lights |
| `assets/benchmark-*.svg` | `#8b949e` `#d9822b` `#2da44e` `#8957e5` `#cf222e` | chart series (baseline, caveman, ponytail, …) |
| | `-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif` | chart type |
| | `rx=2` | bar corners |
| `README.md` badges | `#111111`, flat-square | badge stamp |

Also: a monospace terminal voice ("He's building something. / Won't say what."), uppercase mono buttons with a trailing →, a ~12px-radius window and a 6px button, and hand-inked black-line illustration.

## cobranza-vallarta/

A new system built from that language for collecting payments on a group trip to Puerto Vallarta. `project/` is the published Design System artifact's file tree (tokens, brand book, `window.Cobranza` React components, previews, cover).
