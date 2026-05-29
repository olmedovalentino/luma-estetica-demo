export const site = {
  businessName: "Refacciones Luques",
  tagline: "Refacciones y mantenimiento para tu casa o negocio",
  shortPitch:
    "Soluciones en pintura, impermeabilizacion, electricidad, plomeria y arreglos generales en Cordoba y alrededores.",
  whatsappNumber: "5493512402931",
  whatsappDisplay: "+54 351 240-2931",
  whatsappMessage:
    "Hola Refacciones Luques, queria consultar por un presupuesto",
  instagramUrl: "https://www.instagram.com/refaccionesluques/",
  instagramHandle: "@refaccionesluques",
  address: "Cordoba Capital y alrededores",
  city: "Cordoba Capital",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Soluciones", href: "#soluciones" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const confidencePoints = [
  "Cordoba y alrededores",
  "Presupuesto por WhatsApp",
  "Hogares y comercios",
  "Refacciones, pintura e impermeabilizacion",
] as const;

export const problems = [
  "Humedad o filtraciones",
  "Paredes deterioradas",
  "Pintura desgastada",
  "Arreglos electricos",
  "Perdidas o problemas de plomeria",
  "Terminaciones pendientes",
] as const;

export const services = [
  {
    title: "Pintura interior y exterior",
    description:
      "Preparacion de superficies, pintura de ambientes, frentes, muros y espacios comerciales.",
    code: "P01",
  },
  {
    title: "Impermeabilizaciones",
    description:
      "Tratamiento de techos, filtraciones y humedad con soluciones pensadas para cada superficie.",
    code: "I02",
  },
  {
    title: "Refacciones generales",
    description:
      "Arreglos, renovaciones y mejoras para viviendas, locales y espacios de trabajo.",
    code: "R03",
  },
  {
    title: "Electricidad e iluminacion",
    description:
      "Reparaciones, instalaciones, cambios de artefactos y mejoras de iluminacion.",
    code: "E04",
  },
  {
    title: "Plomeria",
    description:
      "Solucion de perdidas, cambios de griferia, conexiones y arreglos sanitarios generales.",
    code: "PL05",
  },
  {
    title: "Albanileria y ceramicos",
    description:
      "Reparacion de mamposteria, colocacion de ceramicos y terminaciones prolijas.",
    code: "A06",
  },
] as const;

export const processSteps = [
  "Nos contas que necesitas",
  "Evaluamos el trabajo",
  "Te pasamos presupuesto",
  "Coordinamos dia y horario",
  "Ejecutamos el trabajo con prolijidad",
  "Entregamos el espacio listo",
] as const;

export const gallery = [
  "Pintura exterior",
  "Impermeabilizacion",
  "Refaccion de vivienda",
  "Arreglo de comercio",
  "Terminaciones",
] as const;

export const faqs = [
  {
    question: "Trabajan en Cordoba Capital?",
    answer:
      "Si. Refacciones Luques trabaja en Cordoba Capital y tambien coordina trabajos en zonas cercanas.",
  },
  {
    question: "Hacen presupuestos por WhatsApp?",
    answer:
      "Si. Podes enviar fotos, videos o una descripcion del problema para recibir orientacion y coordinar un presupuesto.",
  },
  {
    question: "Realizan trabajos para comercios?",
    answer:
      "Si. Atendemos casas, departamentos, locales, oficinas y negocios que necesitan mantenimiento o refacciones.",
  },
  {
    question: "Hacen impermeabilizaciones?",
    answer:
      "Si. Trabajamos filtraciones, techos y superficies con humedad, evaluando el origen del problema antes de avanzar.",
  },
  {
    question: "Tambien hacen pintura interior y exterior?",
    answer:
      "Si. Realizamos pintura de interiores, exteriores, frentes, muros y espacios comerciales.",
  },
  {
    question: "Pueden resolver varios arreglos en una misma obra?",
    answer:
      "Si. Podemos combinar pintura, electricidad, plomeria, albanileria e impermeabilizacion para ordenar el trabajo con un solo equipo.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
