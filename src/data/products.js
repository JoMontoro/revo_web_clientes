export const products = [
  {
    id: 'topes',
    nameKey: 'productos.name1',
    descKey: 'productos.desc1',
    benefitKey: 'productos.benefit1',
    tagKeys: ['productos.tag1a', 'productos.tag1b'],
    sectors: ['automotriz', 'construccion', 'municipal'],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300&q=80',
    alt: 'Topes de estacionamiento',
    detail: {
      icon: 'bi-sign-stop-fill',
      tagline: { es: 'Bloqueo inteligente para flujos vehiculares seguros.', en: 'Smart blocking for safe vehicle flows.' },
      use: { es: 'Concesionarios, estacionamientos, centros comerciales y almacenes.', en: 'Dealerships, parking lots, malls, and warehouses.' },
      ideal: { es: 'Ideal para zonas de alto tránsito que necesitan control de estacionamiento y protección de bordes.', en: 'Ideal for high-traffic zones needing parking control and edge protection.' },
      advantage: { es: 'Organiza el espacio, protege el pavimento y reduce el riesgo de golpes contra muros.', en: 'Organizes space, protects pavement, and reduces risk of wall impacts.' },
      benefit: { es: 'Protege pavimentos y mejora la seguridad del flujo vehicular con una instalación rápida y duradera.', en: 'Protects pavement and improves vehicle flow safety with quick, durable installation.' },
      specs: {
        es: ['Caucho reciclado de alta densidad', 'Elementos reflectivos opcionales', 'Instalación mediante anclajes', 'Dimensiones ajustables según proveedor'],
        en: ['High-density recycled rubber', 'Optional reflective elements', 'Anchor installation', 'Adjustable dimensions per supplier']
      },
      validation: { es: 'Validación dimensional, resistencia al impacto y fijación.', en: 'Dimensional validation, impact resistance, and fixation.' }
    }
  },
  {
    id: 'protectores',
    nameKey: 'productos.name2',
    descKey: 'productos.desc2',
    benefitKey: 'productos.benefit2',
    tagKeys: ['productos.tag2a', 'productos.tag2b'],
    sectors: ['mineria', 'construccion'],
    image: 'https://images.unsplash.com/photo-1581092335871-4bf1c4c3c5c6?w=300&q=80',
    alt: 'Protectores para cables',
    detail: {
      icon: 'bi-plug-fill',
      tagline: { es: 'Cobertura resistente para tendidos eléctricos y mangueras.', en: 'Durable cover for electrical lines and hoses.' },
      use: { es: 'Minería, industria y zonas de mantenimiento con tránsito de equipos.', en: 'Mining, industry, and maintenance areas with equipment traffic.' },
      ideal: { es: 'Ideal para instalaciones que requieren seguridad adicional en áreas con maquinaria móvil.', en: 'Ideal for installations requiring extra safety in areas with mobile machinery.' },
      advantage: { es: 'Minimiza cortes, abrasión y fallas en cables, manteniendo la operación más estable.', en: 'Minimizes cuts, abrasion, and cable failures, keeping operations more stable.' },
      benefit: { es: 'Reduce el desgaste y protege conexiones críticas contra cortes, abrasión y agresión mecánica.', en: 'Reduces wear and protects critical connections against cuts, abrasion, and mechanical aggression.' },
      specs: {
        es: ['Canales para cables o mangueras', 'Superficie antideslizante', 'Módulos transportables', 'Diseño según carga esperada'],
        en: ['Channels for cables or hoses', 'Non-slip surface', 'Portable modules', 'Design per expected load']
      },
      validation: { es: 'Requiere ensayos de carga, abrasión y compatibilidad con el ambiente de operación.', en: 'Requires load, abrasion, and compatibility tests with the operating environment.' }
    }
  },
  {
    id: 'losetas',
    nameKey: 'productos.name3',
    descKey: 'productos.desc3',
    benefitKey: 'productos.benefit3',
    tagKeys: ['productos.tag3a', 'productos.tag3b'],
    sectors: ['municipal', 'deportivo', 'construccion'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80',
    alt: 'Losetas amortiguantes',
    detail: {
      icon: 'bi-grid-3x3-gap-fill',
      tagline: { es: 'Superficies seguras que reducen el impacto y mejoran el confort.', en: 'Safe surfaces that reduce impact and improve comfort.' },
      use: { es: 'Parques infantiles, gimnasios, colegios, patios y zonas deportivas.', en: 'Playgrounds, gyms, schools, courtyards, and sports areas.' },
      ideal: { es: 'Perfecta para espacios con niños, entrenamientos y áreas de alto tráfico peatonal.', en: 'Perfect for spaces with children, training, and high pedestrian traffic areas.' },
      advantage: { es: 'Absorbe golpes, protege a los usuarios y aporta un acabado moderno y cálido.', en: 'Absorbs impacts, protects users, and provides a modern, warm finish.' },
      benefit: { es: 'Mejora la seguridad y el confort, minimizando golpes en superficies de alto tránsito.', en: 'Improves safety and comfort, minimizing hits on high-traffic surfaces.' },
      specs: {
        es: ['Superficie amortiguante', 'Formato modular', 'Diferentes espesores', 'Aplicación interior o exterior según formulación'],
        en: ['Cushioned surface', 'Modular format', 'Different thicknesses', 'Indoor or outdoor application per formulation']
      },
      validation: { es: 'Validación de absorción de impacto, deslizamiento y durabilidad.', en: 'Impact absorption, slip, and durability validation.' }
    }
  },
  {
    id: 'cunas',
    nameKey: 'productos.name4',
    descKey: 'productos.desc4',
    benefitKey: 'productos.benefit4',
    tagKeys: ['productos.tag4a', 'productos.tag4b'],
    sectors: ['automotriz', 'mineria'],
    image: 'https://images.unsplash.com/photo-1590674899484-d5640d0f7b3a?w=600&q=80',
    alt: 'Cuñas para vehículos',
    detail: {
      icon: 'bi-truck-front-fill',
      tagline: { es: 'Seguridad simple para estacionamientos y zonas de carga.', en: 'Simple safety for parking and loading zones.' },
      use: { es: 'Vehículos pesados, talleres, transporte y operaciones mineras.', en: 'Heavy vehicles, workshops, transport, and mining operations.' },
      ideal: { es: 'Útil en rampas, estaciones de carga y parqueos de flotas pesadas.', en: 'Useful in ramps, loading stations, and heavy fleet parking.' },
      advantage: { es: 'Mantiene los vehículos inmóviles y protege al personal frente a movimientos no deseados.', en: 'Keeps vehicles stationary and protects personnel from unwanted movements.' },
      benefit: { es: 'Ayuda a asegurar vehículos inmóviles y reduce los riesgos de desplazamientos en zonas de trabajo.', en: 'Helps secure stationary vehicles and reduces displacement risks in work zones.' },
      specs: {
        es: ['Diseño antideslizante', 'Asa o cuerda opcional', 'Tamaño según diámetro de rueda', 'Material de alta resistencia'],
        en: ['Non-slip design', 'Optional handle or rope', 'Size per wheel diameter', 'High-resistance material']
      },
      validation: { es: 'Requiere prueba de carga y validación de uso seguro.', en: 'Requires load test and safe use validation.' }
    }
  },
  {
    id: 'pisos',
    nameKey: 'productos.name5',
    descKey: 'productos.desc5',
    benefitKey: 'productos.benefit5',
    tagKeys: ['productos.tag5a', 'productos.tag5b'],
    sectors: ['automotriz', 'construccion', 'deportivo'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    alt: 'Pisos de caucho',
    detail: {
      icon: 'bi-layers-fill',
      tagline: { es: 'Cobertura técnica para áreas de trabajo con alto desgaste.', en: 'Technical coverage for high-wear work areas.' },
      use: { es: 'Gimnasios, talleres, áreas técnicas y espacios de alta circulación.', en: 'Gyms, workshops, technical areas, and high-traffic spaces.' },
      ideal: { es: 'Especial para espacios que necesitan mayor ergonomía y protección de superficies.', en: 'Special for spaces needing more ergonomics and surface protection.' },
      advantage: { es: 'Reduce el ruido, mejora el confort y protege el suelo ante impacto y derrames.', en: 'Reduces noise, improves comfort, and protects the floor from impacts and spills.' },
      benefit: { es: 'Reduce la fatiga del personal, protege superficies y brinda seguridad antideslizante en sectores productivos.', en: 'Reduces staff fatigue, protects surfaces, and provides non-slip safety in productive sectors.' },
      specs: {
        es: ['Formato loseta o rollo', 'Propiedades amortiguantes', 'Superficie antideslizante', 'Espesor según aplicación'],
        en: ['Tile or roll format', 'Cushioned properties', 'Non-slip surface', 'Thickness per application']
      },
      validation: { es: 'Validación de desgaste, adherencia y comportamiento frente a aceites cuando corresponda.', en: 'Wear, adhesion, and oil behavior validation when applicable.' }
    }
  },
  {
    id: 'granulado',
    nameKey: 'productos.name6',
    descKey: 'productos.desc6',
    benefitKey: 'productos.benefit6',
    tagKeys: ['productos.tag6a', 'productos.tag6b'],
    sectors: ['construccion', 'municipal', 'deportivo'],
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80',
    alt: 'Caucho granulado',
    detail: {
      icon: 'bi-circle-fill',
      tagline: { es: 'Materia prima circular para soluciones técnicas a medida.', en: 'Circular raw material for customized technical solutions.' },
      use: { es: 'Fabricantes de pisos, topes, protectores, mobiliario y soluciones técnicas.', en: 'Manufacturers of floors, bumpers, protectors, furniture, and technical solutions.' },
      ideal: { es: 'Pensado para empresas que integran materiales reciclados en sus productos.', en: 'Designed for companies that integrate recycled materials into their products.' },
      advantage: { es: 'Permite producir con trazabilidad y control, sin perder versatilidad de uso.', en: 'Enables production with traceability and control, without losing versatility.' },
      benefit: { es: 'Permite a los fabricantes incorporar material reciclado en grandes volúmenes sin perder flexibilidad de diseño.', en: 'Enables manufacturers to incorporate recycled material in large volumes without losing design flexibility.' },
      specs: {
        es: ['Granulometrías configurables', 'Contenido de acero y fibra controlado', 'Venta por kilogramo o tonelada', 'Trazabilidad por lote'],
        en: ['Configurable granulometry', 'Controlled steel and fiber content', 'Sold by kilogram or ton', 'Batch traceability']
      },
      validation: { es: 'Control de granulometría, humedad, limpieza y uniformidad.', en: 'Granulometry, moisture, cleanliness, and uniformity control.' }
    }
  }
];
