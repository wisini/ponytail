# Pantalla

One phone screen, designed at 390 × 844 (`pantalla-ancho` × `pantalla-alto`): a starry header, content that scrolls, and the screen's actions in the bottom-right DockPulgar.

- **Consumer provides:** `ceja` (trip and dates: "Puerto Vallarta · 12–16 nov"), `titulo` (the money: "Faltan $41,300."), optional `subtitulo`, `acciones` (an array of Boton, primario last), and the content as `children`.
- The ground is `fondo` with the `cv-cielo` texture: scattered `cielo-estrellas` dots and two faint `cielo-remolino` swirls. Keep content on `superficie` cards so text never sits on the swirls.
- One column, `space-4` side gutter, cards `space-4` apart. Content ends with `space-dock` of padding so the last card scrolls clear of the dock.
- Never put actions in the header or the top corners: the top of a 6" screen is out of the thumb's reach. Actions go in `acciones`.
- Respects the safe areas: the header adds the top inset and the dock adds the bottom inset.
