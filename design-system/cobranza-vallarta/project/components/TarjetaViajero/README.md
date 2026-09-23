# TarjetaViajero

One viajero's ledger card: name and folio, room type, Estado, BarraAbono, then Saldo and Próximo abono as a two-column definition list.

- **Consumer provides:** `nombre`, `folio` ("PV-0142"), `habitacion`, `pagado`, `total`, `estado` (+ `dias`), optional `proximo` `{ monto, fecha }` with the date short ("15 sep"), and footer actions as `children` — one primario at most.
- Lay cards in a grid inside a Ventana, `space-6` apart; sort vencido first, then pendiente, then the rest by apellido.
- The header strip is `superficie-alta`; the card uses `radius-lg` like the Ventana around it.
