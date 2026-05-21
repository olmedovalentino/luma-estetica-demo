export const site = {
  businessName: "Creativo Muebles",
  tagline: "Muebles a medida en Cordoba",
  shortDescription:
    "Disenamos y fabricamos cocinas, placares, vestidores y muebles personalizados en Cordoba.",
  location: "Cordoba, Argentina",
  locationLabel: "Cordoba, Argentina · Muebles a medida",
  heroTitle: "Muebles disenados para transformar tus espacios",
  heroSubtitle:
    "Disenamos y fabricamos cocinas, placares, vestidores y muebles personalizados para espacios funcionales, calidos y con identidad propia.",
  primaryCta: "Consultar proyecto",
  secondaryCta: "Ver trabajos",
  logoUrl: "/images/creativo-muebles/logo.jpg",
  whatsappNumber: "",
  whatsappDisplay: "",
  whatsappMessage: "Hola, quiero consultar por un proyecto.",
  whatsappUrl: "#",
  instagramUrl: "https://www.instagram.com/creativomuebles/",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerNavigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Preguntas", href: "#preguntas" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const categoryProjects = [
  {
    title: "Cocinas a medida",
    description: "Disenos funcionales para aprovechar cada espacio.",
    image: "/images/creativo-muebles/cocina.jpg",
    alt: "Cocina a medida de Creativo Muebles",
    objectPosition: "center 52%",
  },
  {
    title: "Placares",
    description: "Guardado a medida con distribucion personalizada.",
    image: "/images/creativo-muebles/placard.jpg",
    alt: "Placard a medida de Creativo Muebles",
    objectPosition: "center 48%",
  },
  {
    title: "Vestidores",
    description: "Orden, comodidad y visual limpia para tu hogar.",
    image: "/images/creativo-muebles/vestidor.jpg",
    alt: "Vestidor a medida de Creativo Muebles",
    objectPosition: "center 46%",
  },
  {
    title: "Muebles personalizados",
    description: "Soluciones para rincones y necesidades especificas.",
    image: "/images/creativo-muebles/mueble-personalizado.jpg",
    alt: "Mueble personalizado de Creativo Muebles",
    objectPosition: "center 55%",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta",
    description: "Escuchamos la idea y el espacio a resolver.",
  },
  {
    number: "02",
    title: "Medidas",
    description: "Definimos dimensiones, distribucion y detalles.",
  },
  {
    number: "03",
    title: "Fabricacion",
    description: "Trabajamos cada pieza en taller propio.",
  },
  {
    number: "04",
    title: "Instalacion",
    description: "Dejamos el ambiente listo para usar.",
  },
] as const;

export const portfolioItems = [
  {
    title: "Cocina a medida",
    image: "/images/creativo-muebles/proyecto-1.jpg",
    alt: "Proyecto de cocina a medida de Creativo Muebles",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 52%",
  },
  {
    title: "Placard funcional",
    image: "/images/creativo-muebles/proyecto-2.jpg",
    alt: "Proyecto de placard funcional de Creativo Muebles",
    span: "",
    objectPosition: "center 50%",
  },
  {
    title: "Vestidor personalizado",
    image: "/images/creativo-muebles/proyecto-3.jpg",
    alt: "Proyecto de vestidor personalizado de Creativo Muebles",
    span: "",
    objectPosition: "center 48%",
  },
  {
    title: "Mueble de guardado",
    image: "/images/creativo-muebles/proyecto-4.jpg",
    alt: "Proyecto de mueble de guardado de Creativo Muebles",
    span: "",
    objectPosition: "center 54%",
  },
  {
    title: "Diseno para hogar",
    image: "/images/creativo-muebles/proyecto-5.jpg",
    alt: "Proyecto integral para hogar de Creativo Muebles",
    span: "md:col-span-2",
    objectPosition: "center 54%",
  },
  {
    title: "Detalles de terminacion",
    image: "/images/creativo-muebles/proyecto-6.jpg",
    alt: "Detalle de terminacion de Creativo Muebles",
    span: "",
    objectPosition: "center 50%",
  },
] as const;

export const benefits = [
  "Mejor aprovechamiento del espacio",
  "Diseno adaptado a tu necesidad",
  "Terminaciones pensadas para tu hogar",
  "Fabricacion a medida",
] as const;

export const faqs = [
  {
    question: "Hacen muebles a medida?",
    answer:
      "Si, trabajamos proyectos personalizados segun el espacio, la necesidad y el estilo buscado.",
  },
  {
    question: "Que tipo de muebles realizan?",
    answer:
      "Cocinas, placares, vestidores y muebles personalizados para distintos ambientes del hogar.",
  },
  {
    question: "Como puedo pedir un presupuesto?",
    answer:
      "Podes escribir por WhatsApp o Instagram con fotos, ideas o medidas aproximadas del espacio.",
  },
  {
    question: "Trabajan en Cordoba?",
    answer: "Si, Creativo Muebles trabaja en Cordoba, Argentina.",
  },
] as const;
