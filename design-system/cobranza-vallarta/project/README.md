Cobranza Vallarta is the tool a trip organizer uses to collect money for a group trip to Puerto Vallarta: who has paid the anticipo, who owes the next abono, who is late. It inherits Ponytail's personality whole — the quiet senior dev in a terminal window who says one line and it works — and points it at pesos. The organizer should open it, see what is owed, register an abono, and close it.

## Voice

Say little. State the money. The UI speaks Spanish (es-MX), tú form, short declarative sentences with a period.

- Titulares state the number: "Faltan $41,300." · "Todo pagado." · "2 vencidos."
- Subtitles in the Ponytail cadence, two short clauses: "No dice mucho. Cobra a tiempo." · "Sin prisa. Sin pendientes."
- Reminders are plain and specific, never pleading: "Hola Mariana, tu segundo abono de $2,450.00 vence el 15 de sep. Folio PV-0142."
- Vocabulary is fixed: **anticipo** (first payment that holds the seat), **abono** (each later payment), **saldo** (what remains), **liquidar / liquidado** (paid in full), **fecha límite**, **folio** (PV-0000), **recibo**, **viajero** (never "cliente").
- No exclamation marks, no emoji, no "¡Urgente!". Lateness is a fact ("Vencido · 6 días"), not a scolding.
- Money is always `$8,900.00` plus the MXN stamp; dates are short and lowercase: "15 sep", "12–16 nov 2026".

## Color

Two themes. **Noche** (dark) is the brand's home and the default — Ponytail's banner ground `fondo` #0e0d0b with the window `superficie` #15130f and `tinta` #d8d3c5. **Día** (light) is for printing receipts and daylight phones.

- Text: `tinta` on `fondo`, `superficie` and `superficie-alta`; secondary text in `tinta-suave` on the same.
- One brand hue, `sol` (Ponytail's orange; the sunset over the bahía). Spend it on the single primario button, the `ceja` eyebrow and the focus ring. Text on a sol fill is `sobre-sol`, never white in Noche.
- `bahia` (Pacific teal) marks trip facts that are not money — destination, dates, hotel, links — and the "Al corriente" status.
- Status colors are the banner's three window lights: `vencido`, `pendiente`, `pagado`, plus `neutro` (Ponytail's chart gray) for "Sin abonos". Each has a `-tenue` ground for its chip. Status is always a word and a color; pagado and vencido are close in lightness in Noche, so never show one by color alone.
- `sello` (#111111) with `tinta-sello` is the flat black stamp — Ponytail's shields.io badge — used for MXN and folios.
- Borders: `linea` for decorative hairlines; `linea-fuerte` for inputs and quiet buttons (3:1).

## Type

Mono carries the brand, sans carries the reading.

- `mono` (Fira Mono from Google Fonts; falls back to the platform mono) for everything numeric or brand-voiced: `titular`, `monto-grande`, `monto`, `ceja`, `boton`, `ruta`. Always tabular figures for money.
- `sans` (the system stack Ponytail's charts use) for `cuerpo`, `nombre`, `nota`.
- One `titular` per screen. `ceja` is uppercase with 0.06em tracking and a leading ●.

## Layout and shape

- Every screen is one **Ventana** (terminal window, three lights, a path like `~/viajes/vallarta-nov26`) on `fondo`. Inside, padding `space-6` (`space-12` on desktop), sections `space-8` apart, cards `space-6` apart.
- Corners are nearly square: `radius-xs` (2px) for chips, stamps and bars; `radius-md` (6px) for buttons and inputs; `radius-lg` (12px) for Ventana and TarjetaViajero only.
- No shadows except `anillo-foco`: a 2px gap in `superficie`, then a solid 2px `sol` ring, on every focused control.
- Lists of viajeros sort vencido → pendiente → the rest by apellido. Amounts right-align.
- Phones: one column, `space-4` gutter; the Ventana keeps its title bar.

## Imagery and iconography

- No photos of beaches, no palm-tree clip art, no emoji. The place lives in the words ("Puerto Vallarta · 12–16 nov") and in `bahia`.
- Glyphs are typographic: ● for status and eyebrows, → on the primary button, · as a separator. No icon font.
- Illustration, if any, follows Ponytail's hand-inked black line with a white sticker outline; none ships with this system yet.
- There is no Cobranza Vallarta logo: set the name in `mono` 700 in `tinta`. Don't borrow the Ponytail face as a mark.

## Components

`window.Cobranza` (React 18): **Ventana** (screen frame), **Boton** (primario / quieto), **Estado** (pagado, al-corriente, pendiente, vencido, sin-abonos), **Monto** (pesos + MXN stamp), **BarraAbono** (paid vs total), **TarjetaViajero** (one viajero's ledger). Read each card's README before use; example people, folios and amounts in previews are samples, not real accounts.
