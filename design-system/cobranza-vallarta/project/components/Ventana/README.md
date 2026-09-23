# Ventana

The terminal window every screen lives in — Ponytail's banner frame, carried over whole. Three lights in the title bar (vencido, pendiente, pagado: the same three colors as the status system), then a path in `ruta` style naming the trip: `~/viajes/vallarta-nov26`.

- **Consumer provides:** `ruta` (the trip slug as a path), `children`.
- One Ventana per screen; don't nest them. Cards inside use TarjetaViajero, not another Ventana.
- Inside: at most one `ceja` (● + uppercase, sol) and one `titular` — the titular states the money: "Faltan $41,300.", "Todo pagado."
- Padding is `space-6`; corners `radius-lg`; border `linea` on `superficie`, over `fondo`.
