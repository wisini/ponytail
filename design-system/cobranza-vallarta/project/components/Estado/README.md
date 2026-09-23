# Estado

A flat-square chip naming where a viajero stands on payments — always a word and a dot, never color alone.

| estado | means | color |
| --- | --- | --- |
| `pagado` | liquidado, saldo $0 | `pagado` on `pagado-tenue` |
| `al-corriente` | has abonos, nothing due in 7 days | `bahia` on `bahia-tenue` |
| `pendiente` | an abono is due within 7 days | `pendiente` on `pendiente-tenue` |
| `vencido` | past the fecha límite | `vencido` on `vencido-tenue` |
| `sin-abonos` | no anticipo yet | `neutro` on `neutro-tenue` |

- **Consumer provides:** `estado`, and `dias` for vencido (days late → "Vencido · 6 días") or pendiente (days left → "Pendiente · vence en 3 días").
- Pagado (green) and vencido (red) are close in lightness in the Noche theme; the word is what separates them. Never drop the label to save space.
