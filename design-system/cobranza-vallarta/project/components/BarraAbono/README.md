# BarraAbono

How much of the trip a viajero has paid: an 8px `pagado` fill on a `linea` track, with "$4,000.00 de $8,900.00" and the percentage underneath.

- **Consumer provides:** `pagado` and `total` in pesos. Overpayment is clamped to 100%.
- The bar is always green: progress is good news even when an abono is late. Lateness belongs to Estado.
- Flat corners (`radius-xs`), no animation, no striping.
