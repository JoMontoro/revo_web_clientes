const mapping = {
  automotriz: {
    seguridad: 'Cuñas para vehículos',
    piso: 'Pisos de caucho',
    estacionamiento: 'Topes de estacionamiento',
    materia: 'Caucho granulado',
    cables: 'Protectores para cables',
  },
  mineria: {
    seguridad: 'Cuñas para vehículos',
    piso: 'Pisos de caucho',
    estacionamiento: 'Topes de estacionamiento',
    materia: 'Caucho granulado',
    cables: 'Protectores para cables',
  },
  construccion: {
    seguridad: 'Topes de estacionamiento',
    piso: 'Losetas amortiguantes',
    estacionamiento: 'Topes de estacionamiento',
    materia: 'Caucho granulado',
    cables: 'Protectores para cables',
  },
  municipal: {
    seguridad: 'Topes de estacionamiento',
    piso: 'Losetas amortiguantes',
    estacionamiento: 'Topes de estacionamiento',
    materia: 'Caucho granulado',
    cables: 'Protectores para cables',
  },
  deportivo: {
    seguridad: 'Pisos de caucho',
    piso: 'Losetas amortiguantes',
    estacionamiento: 'Topes de estacionamiento',
    materia: 'Caucho granulado',
    cables: 'Protectores para cables',
  },
};

export function calculateMatch(sector, necesidad, qty) {
  const product = mapping[sector]?.[necesidad];
  if (!product) return null;

  let match = 78;
  if (sector === 'mineria' && necesidad === 'cables') match = 92;
  if (necesidad === 'piso') match = 88;
  if (necesidad === 'materia') match = 95;
  if (qty > 1000) match -= 4;

  const cityFactor = 0;
  const days = Math.max(7, 10 + cityFactor + Math.ceil(qty / 700));
  const priority = match >= 90 ? 'Alta' : match >= 80 ? 'Media-alta' : 'Media';

  return { product, match, days, priority };
}

export function calculateMatchFull(data) {
  const product = mapping[data.sector]?.[data.necesidad];
  if (!product) return null;

  let match = 78;
  if (data.sector === 'mineria' && data.necesidad === 'cables') match = 92;
  if (data.necesidad === 'piso') match = 88;
  if (data.necesidad === 'materia') match = 95;
  if (Number(data.cantidad) > 1000) match -= 4;

  const cityFactor = data.ciudad === 'Lima' ? 0 : 3;
  const days = Math.max(7, 10 + cityFactor + Math.ceil(Number(data.cantidad) / 700));
  const mode = data.ciudad === 'Lima' ? 'Entrega directa' : 'Carga consolidada';
  const priority = match >= 90 ? 'Alta' : match >= 80 ? 'Media-alta' : 'Media';

  return { product, match, days, mode, priority };
}
