# Monto

A peso amount in es-MX format ("$8,900.00") in the mono face with tabular figures, followed by a black `sello` stamp reading MXN.

- **Consumer provides:** `valor` (number, pesos), optional `tamano="grande"` for totals and the saldo, `tono` (`pagado`, `vencido`, `sol`) only when the color adds meaning, `moneda={false}` inside dense tables where the column header already says MXN.
- Always two decimals. Right-align amounts in columns. Never write "MN", "M.N." or "pesos" beside it.
