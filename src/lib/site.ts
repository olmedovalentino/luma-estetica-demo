export const site = {
  businessName: "Creativo Muebles",
  tagline: "Muebles a medida en Córdoba",
  shortDescription:
    "Diseñamos y fabricamos cocinas, placares, vestidores y muebles personalizados en Córdoba.",
  location: "Córdoba, Argentina",
  locationLabel: "Córdoba, Argentina · Muebles a medida",
  heroTitle: "Muebles a medida para transformar tus espacios",
  heroSubtitle:
    "Diseñamos y fabricamos cocinas, placares, vestidores y muebles personalizados, pensados para aprovechar cada espacio con diseño, funcionalidad y buena terminación.",
  primaryCta: "Consultar por WhatsApp",
  secondaryCta: "Ver trabajos",
  logoUrl: "/images/creativo-muebles/logo.jpg",
  whatsappNumber: "543515590818",
  whatsappDisplay: "+54 351 559-0818",
  whatsappMessage:
    "Hola, vengo desde la página web. Quería consultar por un proyecto de muebles a medida.",
  whatsappUrl:
    "https://wa.me/543515590818?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20web.%20Quer%C3%ADa%20consultar%20por%20un%20proyecto%20de%20muebles%20a%20medida.",
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
    description: "Diseños funcionales para aprovechar cada espacio.",
    image: "/images/creativo-muebles/cocina.jpg",
    alt: "Cocina a medida de Creativo Muebles",
    objectPosition: "center 52%",
  },
  {
    title: "Placares",
    description: "Guardado a medida con distribución personalizada.",
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
    description: "Soluciones para rincones y necesidades específicas.",
    image: "/images/creativo-muebles/mueble-personalizado.jpg",
    alt: "Mueble personalizado de Creativo Muebles",
    objectPosition: "center 55%",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Escuchamos tu idea y el espacio a resolver.",
  },
  {
    number: "02",
    title: "Medidas y diseño",
    description: "Definimos medidas, distribución y materiales.",
  },
  {
    number: "03",
    title: "Presupuesto",
    description: "Ordenamos la propuesta y el alcance del proyecto.",
  },
  {
    number: "04",
    title: "Fabricación e instalación",
    description: "Fabricamos e instalamos para dejar todo listo.",
  },
] as const;

export const portfolioItems = [
  {
    title: "Mueble a medida",
    image: "/images/creativo-muebles/proyecto-1.jpg",
    alt: "Proyecto de mueble a medida de Creativo Muebles",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 50%",
  },
  {
    title: "Proyecto terminado",
    image: "/images/creativo-muebles/proyecto-2.jpg",
    alt: "Proyecto terminado de Creativo Muebles",
    span: "",
    objectPosition: "center 50%",
  },
  {
    title: "Placard / Guardado",
    image: "/images/creativo-muebles/proyecto-3.jpg",
    alt: "Proyecto de placard o guardado de Creativo Muebles",
    span: "",
    objectPosition: "center 48%",
  },
  {
    title: "Cocina personalizada",
    image: "/images/creativo-muebles/proyecto-4.jpg",
    alt: "Proyecto de cocina personalizada de Creativo Muebles",
    span: "",
    objectPosition: "center 52%",
  },
  {
    title: "Proyecto terminado",
    image: "/images/creativo-muebles/proyecto-5.jpg",
    alt: "Proyecto terminado de Creativo Muebles",
    span: "md:col-span-2",
    objectPosition: "center 54%",
  },
  {
    title: "Detalle de terminación",
    image: "/images/creativo-muebles/proyecto-6.jpg",
    alt: "Detalle de terminación de Creativo Muebles",
    span: "",
    objectPosition: "center 50%",
  },
] as const;

export const benefits = [
  "Mejor aprovechamiento del espacio",
  "Diseño adaptado a tu necesidad",
  "Terminaciones pensadas para tu hogar",
  "Fabricación a medida",
] as const;

export const faqs = [
  {
    question: "¿Hacen muebles a medida?",
    answer:
      "Sí, trabajamos proyectos personalizados según el espacio, la necesidad y el estilo buscado.",
  },
  {
    question: "¿Qué tipo de muebles realizan?",
    answer:
      "Cocinas, placares, vestidores y muebles personalizados para distintos ambientes del hogar.",
  },
  {
    question: "¿Cómo puedo pedir un presupuesto?",
    answer:
      "Podés escribir por WhatsApp o Instagram con fotos, ideas o medidas aproximadas del espacio.",
  },
  {
    question: "¿Trabajan en Córdoba?",
    answer: "Sí, Creativo Muebles trabaja en Córdoba, Argentina.",
  },
] as const;
