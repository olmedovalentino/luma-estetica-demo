export const site = {
  businessName: "Paredes Aire",
  shortName: "Paredes",
  tagline: "Instalacion y service de aires acondicionados",
  shortPitch:
    "Soluciones para hogares, comercios y espacios de trabajo: instalacion, mantenimiento, reparacion y carga de gas.",
  whatsappNumber: "5493510000000",
  whatsappMessage:
    "Hola Paredes Aire, quiero consultar por instalacion o service de aire acondicionado.",
  locationLabel: "Cordoba, Argentina",
  coverageSummary: "Cordoba Capital y zonas cercanas",
  hours: "Atencion coordinada por WhatsApp de lunes a sabado",
  locationUrl:
    "https://www.google.com/maps/search/?api=1&query=Cordoba%20Capital%2C%20Cordoba%2C%20Argentina",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Zonas", href: "#zonas" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const hero = {
  eyebrow: "Cordoba, Argentina - Climatizacion profesional",
  title: "Instalacion y service de aires acondicionados",
  description: site.shortPitch,
  primaryCta: "Pedir presupuesto",
  secondaryCta: "Ver servicios",
  image:
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Tecnico trabajando en una instalacion de aire acondicionado",
  notes: [
    "Atencion para hogares y comercios",
    "Diagnostico tecnico claro",
    "Coordinacion rapida por WhatsApp",
  ],
} as const;

export const serviceHighlights = [
  "Instalacion prolija",
  "Mantenimiento preventivo",
  "Asistencia para equipos split",
] as const;

export const services = [
  {
    title: "Instalacion de aires acondicionados",
    description: "Montaje seguro, nivelacion, pruebas y puesta en marcha.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Service y mantenimiento",
    description: "Limpieza, control general y revision para sostener el rendimiento.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Recarga de gas",
    description: "Chequeo de presion y carga cuando el equipo realmente lo necesita.",
    image:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reparacion de equipos",
    description: "Deteccion de fallas y solucion tecnica para equipos residenciales o comerciales.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Venta con instalacion",
    description: "Asesoramiento para elegir equipo y dejarlo funcionando en el mismo servicio.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Diagnostico tecnico",
    description: "Evaluacion inicial para cotizar con datos concretos y sin vueltas.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const projects = [
  {
    title: "Instalacion domiciliaria",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Service tecnico",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mantenimiento",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Equipo instalado",
    image:
      "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Trabajo comercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Revision tecnica",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22731a27f4?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const coverageZones = [
  "Cordoba Capital",
  "Nueva Cordoba",
  "Zona Norte",
  "Zona Sur",
  "Villa Allende",
  "Mendiolaza",
] as const;

export const coverageCards = [
  {
    title: "Visitas coordinadas",
    description: "Organizamos turnos para responder rapido y con mejor precision.",
  },
  {
    title: "Atencion residencial y comercial",
    description: "Trabajos para casas, locales, oficinas y espacios de trabajo.",
  },
  {
    title: "Cotizacion por WhatsApp",
    description: "Podemos orientarte con fotos, ubicacion y datos basicos del equipo.",
  },
] as const;

export const faqs = [
  {
    question: "Hacen presupuesto por WhatsApp?",
    answer:
      "Si. Con fotos del equipo, ubicacion y tipo de trabajo podemos darte una orientacion inicial y coordinar visita si hace falta.",
  },
  {
    question: "Instalan equipos nuevos?",
    answer:
      "Si, realizamos instalaciones nuevas y tambien podemos asesorarte si todavia no elegiste el equipo.",
  },
  {
    question: "Realizan recarga de gas?",
    answer:
      "Si, pero primero revisamos el estado general del equipo para confirmar si corresponde hacer la carga.",
  },
  {
    question: "Atienden comercios?",
    answer:
      "Si, trabajamos en viviendas, oficinas, locales y otros espacios comerciales de Cordoba y alrededores.",
  },
  {
    question: "Que datos necesitan para cotizar?",
    answer:
      "Nos sirve saber la zona, el tipo de equipo, si es instalacion o service y sumar fotos del lugar o del aire acondicionado.",
  },
] as const;

export const contactCards = [
  {
    label: "WhatsApp",
    value: "Numero a confirmar",
  },
  {
    label: "Cobertura",
    value: site.coverageSummary,
  },
  {
    label: "Modalidad",
    value: "Coordinacion directa por mensaje",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
