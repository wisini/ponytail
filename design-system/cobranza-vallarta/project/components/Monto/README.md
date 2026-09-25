# Monto

A peso amount in es-MX format ("$8,900.00") in Nunito with tabular figures, plus a small MXN tag.

- **Consumer provides:** `valor` (pesos), optional `tamano="grande"` for totals and the saldo, `tono` (`pagado`, `vencido`, `remolino`) only when the color adds meaning, and `moneda={false}` in dense lists.
- Amounts never use the display face: Macaron's figures are decorative and don't line up.
- Always show two decimals.
