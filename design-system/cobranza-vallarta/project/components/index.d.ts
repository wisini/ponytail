import type * as React from 'react';

/** A Ponytail-style terminal window: three status lights and a path. The container for every screen. */
export interface VentanaProps { ruta?: string; titulo?: string; className?: string; children?: React.ReactNode }
export declare function Ventana(props: VentanaProps): React.ReactElement;

/** Uppercase mono button. 'primario' (sol fill, trailing →) at most once per ventana. */
export interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variante?: 'primario' | 'quieto' }
export declare function Boton(props: BotonProps): React.ReactElement;

export type EstadoPago = 'pagado' | 'al-corriente' | 'pendiente' | 'vencido' | 'sin-abonos';
/** Status chip: word + dot, never color alone. `dias` = days late (vencido) or days until due (pendiente). */
export interface EstadoProps { estado: EstadoPago; dias?: number }
export declare function Estado(props: EstadoProps): React.ReactElement;

/** Peso amount, es-MX format, tabular. `moneda={false}` hides the MXN stamp inside dense tables. */
export interface MontoProps { valor: number; tamano?: 'normal' | 'grande'; moneda?: string | false; tono?: 'pagado' | 'vencido' | 'sol' }
export declare function Monto(props: MontoProps): React.ReactElement;

/** Paid-vs-total bar with "$x de $y · n%" underneath. */
export interface BarraAbonoProps { pagado: number; total: number }
export declare function BarraAbono(props: BarraAbonoProps): React.ReactElement;

/** One traveller's ledger: name, folio, room, status, progress, saldo and next abono. Children render as footer actions. */
export interface TarjetaViajeroProps {
  nombre: string; folio?: string; habitacion?: string;
  pagado: number; total: number; estado: EstadoPago; dias?: number;
  proximo?: { monto: number; fecha: string };
  children?: React.ReactNode;
}
export declare function TarjetaViajero(props: TarjetaViajeroProps): React.ReactElement;

/** Formats a number as "$8,900.00". */
export declare function pesos(n: number): string;

declare global { interface Window { Cobranza: { Ventana: typeof Ventana; Boton: typeof Boton; Estado: typeof Estado; Monto: typeof Monto; BarraAbono: typeof BarraAbono; TarjetaViajero: typeof TarjetaViajero; pesos: typeof pesos } } }
