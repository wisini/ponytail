Cobranza Vallarta is the phone app a trip organizer uses to collect money for a group trip to Puerto Vallarta: who has paid the anticipo, who owes the next abono, who is late. It looks like Van Gogh's *Starry Night* redrawn in navy and white: a deep night sky, white stars, blue swirls. It keeps Ponytail's manners: says little, states the money, gets out of the way. The organizer opens it with one hand, sees what is owed, and registers an abono with their thumb.

## Voice

Say little. State the money. The UI speaks Spanish (es-MX), tú form, short sentences with a period.

- Titulares state the number: "Faltan $41,300." · "Todo pagado." · "2 vencidos."
- Short subtitles: "No dice mucho. Cobra a tiempo." · "Sin prisa. Sin pendientes."
- Reminders are plain and specific, never pleading: "Hola Mariana, tu segundo abono de $2,450.00 vence el 15 de sep. Folio PV-0142."
- Vocabulary is fixed: **anticipo**, **abono**, **saldo**, **liquidar / liquidado**, **fecha límite**, **folio** (PV-0000), **recibo**, **viajero** (never "cliente").
- No exclamation marks, no emoji. Lateness is a fact ("Vencido · 6 días"), not a scolding.
- Money is always `$8,900.00` plus the MXN tag. Dates are short and lowercase: "15 sep", "12–16 nov".

## Color: la noche estrellada

Navy and white first; everything else is a small, meaningful exception. **Noche estrellada** (dark) is the default theme. **Día** (light) is for daylight and receipts: the same system inverted, with a white sky and navy ink.

- Sky: `fondo` (#0a1433) carries the **cielo** texture: scattered `cielo-estrellas` dots and two faint concentric `cielo-remolino` swirls. Content sits on `superficie` cards, never directly on the swirls.
- Text: `tinta` (near-white) on `fondo`, `superficie` and `superficie-alta`; secondary text in `tinta-suave`.
- `estrella` is the one strong mark: the primary button fill (white by night, navy by day), the ✦ ceja and the focus ring. Text on it is `sobre-estrella`.
- `remolino` (swirl blue) is for progress, links and trip facts. `cobalto` is only for large brand fields such as the cover and empty-state art.
- Status colors are the only exceptions to navy and white, and they stay chip-sized: `pagado` sea-green, `pendiente` the pale yellow of Van Gogh's stars, `vencido` soft coral, `neutro` grey-blue. Each has a `-tenue` ground, and each always comes with its word.

## Type

- `display` is **Macaron**, with **Fredoka** (Google Fonts) as the fallback until the Macaron font file is added to `fonts/`. Use it for `titular`, `subtitulo`, `ceja`, `boton` and `nombre`: the voice of the screen.
- `sans` is **Nunito** for `cuerpo`, `nota` and every number (`monto`, `monto-grande`), always with tabular figures. Never set money in the display face.
- Body and inputs are 16px minimum, so phones don't zoom when a field gets focus. One `titular` per screen.

## Mobile layout and the thumb zone

- Design at **390 × 844** (`pantalla-ancho` × `pantalla-alto`) and check at 360 wide. It's one column up to 480px, with a `space-4` side gutter.
- **Every action lives bottom-right, in the DockPulgar**, where the right thumb rests. The primario ("Registrar abono", with +, 60px, `estrella`) sits nearest the corner, and up to two quieto buttons stack above it. Nothing is tappable in the top corners.
- Tap targets are at least `toque-min` (48px). Keep `space-3` between stacked targets.
- Content ends with `space-dock` padding so it scrolls clear of the dock. The header respects the top safe-area inset and the dock respects the bottom one.
- Shapes are soft, like the swirls: `radius-lg` (22px) for cards, `radius-md` for inputs, `radius-full` pills for every button, `radius-sm` for chips.
- Shadows: `sombra-dock` only on the floating dock buttons. Focus is `anillo-foco`.

## Imagery and iconography

- The painting lives in the texture, the swirl blue and the ✦ star. Don't use photos, beach clip art or emoji.
- Glyphs are typographic: ✦ for status and eyebrows, + on the primary action, · as a separator.
- There's no logo yet: set the name in `display` in `tinta`.

## Components

`window.Cobranza` (React 18):
- **Pantalla**: a phone screen with a header, scrolling content and the dock
- **DockPulgar**: bottom-right thumb actions
- **Boton**: primario or quieto pills
- **Estado**: status chips
- **Monto**: an amount with its MXN tag
- **BarraAbono**: paid vs total
- **TarjetaViajero**: one viajero's ledger card

People, folios and amounts in the previews are samples.
