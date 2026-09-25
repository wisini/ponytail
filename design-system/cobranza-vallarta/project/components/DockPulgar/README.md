# DockPulgar

The screen's actions, stacked in the bottom-right corner where the right thumb rests, floating over the content as you scroll.

- **Consumer provides:** up to three Boton as `children`, top to bottom. The **last one sits nearest the thumb and is the primario** ("Registrar abono", with `icono="+"`); secondary actions (quieto) stack above it.
- Inset `space-4` from the right and bottom edges, plus `env(safe-area-inset-bottom)`; buttons `space-3` apart, right-aligned, each with `sombra-dock`, the only shadow in the system.
- Every button is at least `toque-min` (48px) tall; the primario is `pulgar-principal` (60px).
- Pantalla renders it for you from `acciones`; use it directly only outside a Pantalla.
- More than three actions: put the rest behind a "Más" button in the dock that opens a bottom sheet. Don't grow the stack.
- Left-handed mode, if you add one, mirrors the dock to bottom-left; nothing else moves.
