import type * as React from 'react';

/** One phone screen (designed at 390 × 844): starry header with ceja/titulo/subtitulo, scrolling content, and `acciones` rendered in the bottom-right DockPulgar. */
export interface PantallaProps { ceja?: string; titulo?: string; subtitulo?: string; acciones?: React.ReactNode; className?: string; children?: React.ReactNode }
export declare function Pantalla(props: PantallaProps): React.ReactElement;

/** Bottom-right action stack for the right thumb. Children top→bottom; the last (nearest the thumb) is the primario. Max three. */
export interface DockPulgarProps { etiqueta?: string; children?: React.ReactNode }
export declare function DockPulgar(props: DockPulgarProps): React.ReactElement;

/** Pill button, ≥48px tall. 'primario' (estrella fill, 60px) once per Pantalla, inside the dock. */
export interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variante?: 'primario' | 'quieto'; icono?: React.ReactNode }
export declare function Boton(props: BotonProps): React.ReactElement;

export type EstadoPago = 'pagado' | 'al-corriente' | 'pendiente' | 'vencido' | 'sin-abonos';
/** Status chip: word + ✦, never color alone. `dias` = days late (vencido) or days left (pendiente). */
export interface EstadoProps { estado: EstadoPago; dias?: number }
export declare function Estado(props: EstadoProps): React.ReactElement;

/** Peso amount, es-MX format, tabular. `moneda={false}` hides the MXN tag. */
export interface MontoProps { valor: number; tamano?: 'normal' | 'grande'; moneda?: string | false; tono?: 'pagado' | 'vencido' | 'remolino' }
export declare function Monto(props: MontoProps): React.ReactElement;

/** Paid-vs-total bar with "$x de $y · n%" underneath. */
export interface BarraAbonoProps { pagado: number; total: number }
export declare function BarraAbono(props: BarraAbonoProps): React.ReactElement;

/** One traveller's ledger card. Children render as right-aligned footer actions. */
export interface TarjetaViajeroProps {
  nombre: string; folio?: string; habitacion?: string;
  pagado: number; total: number; estado: EstadoPago; dias?: number;
  proximo?: { monto: number; fecha: string };
  children?: React.ReactNode;
}
export declare function TarjetaViajero(props: TarjetaViajeroProps): React.ReactElement;

/** Formats a number as "$8,900.00". */
export declare function pesos(n: number): string;

declare global { interface Window { Cobranza: { Pantalla: typeof Pantalla; DockPulgar: typeof DockPulgar; Boton: typeof Boton; Estado: typeof Estado; Monto: typeof Monto; BarraAbono: typeof BarraAbono; TarjetaViajero: typeof TarjetaViajero; pesos: typeof pesos } } }
