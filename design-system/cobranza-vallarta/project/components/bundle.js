/* @ds-bundle: {"format":4,"namespace":"Cobranza","components":[{"name":"Pantalla"},{"name":"DockPulgar"},{"name":"Boton"},{"name":"Estado"},{"name":"Monto"},{"name":"BarraAbono"},{"name":"TarjetaViajero"}]} */
(function () {
  var h = window.React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  var fmt = new Intl.NumberFormat('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function pesos(n) { return '$' + fmt.format(n); }

  var ETIQUETAS = { pagado: 'Pagado', 'al-corriente': 'Al corriente', pendiente: 'Pendiente', vencido: 'Vencido', 'sin-abonos': 'Sin abonos' };

  // A phone screen: starry header, scrolling content, and the thumb dock pinned bottom-right.
  function Pantalla(p) {
    return h('div', { className: cx('cv-pantalla cv-cielo', p.className) },
      h('header', { className: 'cv-pantalla-cab' },
        p.ceja ? h('div', { className: 'cv-ceja' }, '✦ ' + p.ceja) : null,
        p.titulo ? h('h1', { className: 'cv-titular' }, p.titulo) : null,
        p.subtitulo ? h('p', { className: 'cv-pantalla-sub' }, p.subtitulo) : null),
      h('main', { className: 'cv-pantalla-cuerpo' }, p.children),
      p.acciones ? h(DockPulgar, null, p.acciones) : null);
  }

  // Bottom-right action stack. Children top→bottom; the LAST child sits nearest the thumb and should be the primario.
  function DockPulgar(p) {
    return h('nav', { className: 'cv-dock', 'aria-label': p.etiqueta || 'Acciones' }, p.children);
  }

  function Boton(p) {
    var variante = p.variante || 'quieto';
    var rest = Object.assign({}, p); delete rest.variante; delete rest.className; delete rest.children; delete rest.icono;
    return h('button', Object.assign({ type: 'button' }, rest, { className: cx('cv-btn', 'cv-btn-' + variante, p.className) }),
      p.icono ? h('span', { className: 'cv-btn-icono', 'aria-hidden': 'true' }, p.icono) : null,
      h('span', null, p.children));
  }

  function Estado(p) {
    var e = p.estado || 'sin-abonos';
    var texto = ETIQUETAS[e] || e;
    if (e === 'vencido' && p.dias) texto += ' · ' + p.dias + (p.dias === 1 ? ' día' : ' días');
    if (e === 'pendiente' && p.dias != null) texto += ' · ' + p.dias + (p.dias === 1 ? ' día' : ' días');
    return h('span', { className: 'cv-estado cv-estado-' + e }, h('span', { className: 'cv-punto', 'aria-hidden': 'true' }, '✦'), texto);
  }

  function Monto(p) {
    return h('span', { className: cx('cv-monto', p.tamano === 'grande' && 'cv-monto-grande', p.tono && 'cv-tono-' + p.tono) },
      pesos(p.valor || 0), p.moneda === false ? null : h('span', { className: 'cv-moneda' }, p.moneda || 'MXN'));
  }

  function BarraAbono(p) {
    var total = p.total || 0, pagado = Math.min(p.pagado || 0, total);
    var pct = total ? Math.round((pagado / total) * 100) : 0;
    return h('div', { className: 'cv-barra' },
      h('div', { className: 'cv-barra-pista', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': total, 'aria-valuenow': pagado, 'aria-label': 'Abonado' },
        h('div', { className: 'cv-barra-lleno', style: { width: pct + '%' } })),
      h('div', { className: 'cv-barra-texto' },
        h('span', null, pesos(pagado), ' de ', pesos(total)),
        h('span', { className: 'cv-barra-pct' }, pct + '%')));
  }

  function TarjetaViajero(p) {
    var saldo = Math.max((p.total || 0) - (p.pagado || 0), 0);
    return h('article', { className: 'cv-tarjeta' },
      h('header', { className: 'cv-tarjeta-cab' },
        h('div', null,
          h('div', { className: 'cv-nombre' }, p.nombre),
          h('div', { className: 'cv-nota' }, [p.folio && 'Folio ' + p.folio, p.habitacion].filter(Boolean).join(' · '))),
        h(Estado, { estado: p.estado, dias: p.dias })),
      h('div', { className: 'cv-tarjeta-cuerpo' },
        h(BarraAbono, { pagado: p.pagado, total: p.total }),
        h('dl', { className: 'cv-datos' },
          h('div', null, h('dt', null, 'Saldo'), h('dd', null, h(Monto, { valor: saldo, moneda: false }))),
          p.proximo ? h('div', null, h('dt', null, 'Próximo abono'), h('dd', null, h(Monto, { valor: p.proximo.monto, moneda: false }), h('span', { className: 'cv-nota' }, ' · ' + p.proximo.fecha))) : null)),
      p.children ? h('footer', { className: 'cv-tarjeta-pie' }, p.children) : null);
  }

  window.Cobranza = Object.assign(window.Cobranza || {}, { Pantalla: Pantalla, DockPulgar: DockPulgar, Boton: Boton, Estado: Estado, Monto: Monto, BarraAbono: BarraAbono, TarjetaViajero: TarjetaViajero, pesos: pesos });
})();
