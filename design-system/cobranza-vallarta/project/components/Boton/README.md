# Boton

A pill button in the display face; `quieto` (outlined) is the default. **Primario** (the `estrella` fill with `sobre-estrella` text, 60px tall) appears once per Pantalla, as the bottom item of the DockPulgar.

- **Consumer provides:** `variante` (`primario` | `quieto`), an optional `icono` ("+" on the primario), the label as `children`, and the usual button props.
- Labels are sentence case, verb first, two or three words: "Registrar abono", "Enviar recordatorios", "Ver recibo".
- The tap target is at least 48px (`toque-min`). Pressing scales the button to 97%; there's no motion when reduced motion is set. Focus shows `anillo-foco`.
- In a card footer, buttons align right, on the thumb's side.
