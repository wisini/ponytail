# Estado

A rounded chip saying where a viajero stands on payments. It always has a word and a ✦; it never relies on color alone.

| estado | means | color |
| --- | --- | --- |
| `pagado` | liquidado, saldo $0 | `pagado` on `pagado-tenue` |
| `al-corriente` | has abonos, nothing due within 7 days | `remolino` on `remolino-tenue` |
| `pendiente` | an abono is due within 7 days | `pendiente` on `pendiente-tenue` (star yellow) |
| `vencido` | past the fecha límite | `vencido` on `vencido-tenue` |
| `sin-abonos` | no anticipo yet | `neutro` on `neutro-tenue` |

- **Consumer provides:** `estado`, and `dias` for vencido (days late: "Vencido · 6 días") or pendiente (days left: "Pendiente · 3 días").
- These are the only colors outside navy and white; keep them to chips and never use them as fills larger than a chip.
