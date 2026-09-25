# TarjetaViajero

One viajero's ledger card: name (display face) and folio, room, Estado, BarraAbono, then Saldo and Próximo abono.

- **Consumer provides:** `nombre`, `folio` ("PV-0142"), `habitacion`, `pagado`, `total`, `estado` (+ `dias`), an optional `proximo` `{ monto, fecha }` with a short date ("15 sep"), and optional footer actions as `children`, right-aligned.
- Full width in a Pantalla, `space-4` apart. Sort vencido first, then pendiente, then the rest by apellido.
- Prefer making the whole card tappable (open the viajero) over adding footer buttons; screen-level actions belong in the dock.
- `superficie` card, `superficie-alta` header strip, `radius-lg` corners.
