export const site = {
  businessName: "Paredes Aire",
  shortName: "Paredes",
  tagline: "Instalacion y service de aires acondicionados",
  shortPitch:
    "Soluciones para hogares, comercios y espacios de trabajo: instalacion, mantenimiento, reparacion y carga de gas.",
  whatsappNumber: "5493515120474",
  whatsappLabel: "+54 9 3515 12-0474",
  whatsappMessage:
    "Hola Paredes Aire, quiero consultar por instalacion o service de aire acondicionado.",
  instagramUrl: "https://www.instagram.com/paredesclimatizacioncba/",
  instagramLabel: "@paredesclimatizacioncba",
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
  image:
    "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-5463575.jpg&fm=jpg",
  imageAlt: "Tecnico trabajando en una instalacion de aire acondicionado",
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
      "https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-5463576.jpg&fm=jpg",
  },
  {
    title: "Service y mantenimiento",
    description: "Limpieza, control general y revision para sostener el rendimiento.",
    image:
      "https://images.pexels.com/photos/5463580/pexels-photo-5463580.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-5463580.jpg&fm=jpg",
  },
  {
    title: "Recarga de gas",
    description: "Chequeo de presion y carga cuando el equipo realmente lo necesita.",
    image:
      "https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-6471912.jpg&fm=jpg",
  },
  {
    title: "Reparacion de equipos",
    description: "Deteccion de fallas y solucion tecnica para equipos residenciales o comerciales.",
    image:
      "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-5463581.jpg&fm=jpg",
  },
  {
    title: "Venta con instalacion",
    description: "Asesoramiento para elegir equipo y dejarlo funcionando en el mismo servicio.",
    image:
      "https://images.pexels.com/photos/24828656/pexels-photo-24828656.jpeg?cs=srgb&dl=pexels-paolo-rossa-1121474291-24828656.jpg&fm=jpg",
  },
  {
    title: "Diagnostico tecnico",
    description: "Evaluacion inicial para cotizar con datos concretos y sin vueltas.",
    image:
      "https://images.pexels.com/photos/6471914/pexels-photo-6471914.jpeg?cs=srgb&dl=pexels-jose-andres-pacheco-cortes-3641213-6471914.jpg&fm=jpg",
  },
] as const;

export const projects = [
  {
    title: "Villa Allende",
    image:
      "https://images.pexels.com/photos/7614543/pexels-photo-7614543.jpeg?cs=srgb&dl=pexels-artbovich-7614543.jpg&fm=jpg",
  },
  {
    title: "Mendiolaza",
    image:
      "https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg?cs=srgb&dl=pexels-anytiffng-3302537.jpg&fm=jpg",
  },
  {
    title: "Nueva Cordoba",
    image:
      "https://images.pexels.com/photos/18495294/pexels-photo-18495294.jpeg?cs=srgb&dl=pexels-soulkidphotography-18495294.jpg&fm=jpg",
  },
  {
    title: "Zona Norte",
    image:
      "https://images.pexels.com/photos/19059039/pexels-photo-19059039.jpeg?cs=srgb&dl=pexels-armuxui-19059039.jpg&fm=jpg",
  },
  {
    title: "Cordoba Capital",
    image:
      "https://images.pexels.com/photos/6316054/pexels-photo-6316054.jpeg?cs=srgb&dl=pexels-artbovich-6316054.jpg&fm=jpg",
  },
  {
    title: "Zona Sur",
    image:
      "https://images.pexels.com/photos/7746094/pexels-photo-7746094.jpeg?cs=srgb&dl=pexels-artbovich-7746094.jpg&fm=jpg",
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
    title: "Coordinacion simple",
    description: "Nos escribis por WhatsApp, vemos la zona y coordinamos sin vueltas.",
  },
  {
    title: "Visitas en zonas cercanas",
    description: "Atendemos Cordoba Capital y alrededores con agenda ordenada.",
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
    value: site.whatsappLabel,
  },
  {
    label: "Instagram",
    value: site.instagramLabel,
  },
  {
    label: "Cobertura",
    value: site.coverageSummary,
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
