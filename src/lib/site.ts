export const site = {
  businessName: "Diseño Amoblamientos",
  tagline: "Amoblamientos a medida en Córdoba",
  shortDescription:
    "Diseño y fabricación de cocinas, placares, vestidores y muebles a medida en Córdoba, Argentina.",
  location: "Córdoba, Argentina",
  locationLabel: "Córdoba, Argentina",
  heroTitle: "Diseño y fabricación de amoblamientos a medida",
  heroSubtitle:
    "Creamos cocinas, placares, vestidores y muebles personalizados pensados para aprovechar mejor cada espacio.",
  primaryCta: "Escribir por WhatsApp",
  secondaryCta: "Ver proyectos",
  logoUrl: "/images/diseno-amoblamientos/logo.svg",
  instagramHandle: "@disenoamoblamientos",
  whatsappNumber: "5493513082515",
  whatsappDisplay: "+54 9 351 308-2515",
  whatsappMessage:
    "Hola, vengo desde la página web. Quisiera consultar por un proyecto de amoblamientos a medida.",
  whatsappUrl:
    "https://wa.me/5493513082515?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20web.%20Quisiera%20consultar%20por%20un%20proyecto%20de%20amoblamientos%20a%20medida.",
  instagramUrl: "https://www.instagram.com/disenoamoblamientos/",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Categorías", href: "#categorias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerNavigation: [
    { label: "Categorías", href: "#categorias" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const categories = [
  {
    title: "Cocinas",
    description: "Diseño funcional y presencia limpia para el uso diario.",
    image: "/images/diseno-amoblamientos/categoria-cocinas.svg",
    alt: "Visual de cocinas a medida de Diseño Amoblamientos",
  },
  {
    title: "Placares",
    description: "Guardado resuelto con estructura, orden y proporción.",
    image: "/images/diseno-amoblamientos/categoria-placares.svg",
    alt: "Visual de placares a medida de Diseño Amoblamientos",
  },
  {
    title: "Vestidores",
    description: "Recorridos claros y distribución pensada para cada espacio.",
    image: "/images/diseno-amoblamientos/categoria-vestidores.svg",
    alt: "Visual de vestidores de Diseño Amoblamientos",
  },
  {
    title: "Muebles a medida",
    description: "Piezas diseñadas para integrarse con naturalidad al ambiente.",
    image: "/images/diseno-amoblamientos/categoria-muebles.svg",
    alt: "Visual de muebles a medida de Diseño Amoblamientos",
  },
] as const;

export const projects = [
  {
    title: "Cocina integral",
    category: "Cocinas",
    image: "/images/diseno-amoblamientos/proyecto-1.svg",
    alt: "Proyecto de cocina integral de Diseño Amoblamientos",
    className: "md:col-span-8 md:row-span-2",
  },
  {
    title: "Placard lineal",
    category: "Placares",
    image: "/images/diseno-amoblamientos/proyecto-2.svg",
    alt: "Proyecto de placard lineal de Diseño Amoblamientos",
    className: "md:col-span-4",
  },
  {
    title: "Vestidor abierto",
    category: "Vestidores",
    image: "/images/diseno-amoblamientos/proyecto-3.svg",
    alt: "Proyecto de vestidor abierto de Diseño Amoblamientos",
    className: "md:col-span-4",
  },
  {
    title: "Amoblamiento auxiliar",
    category: "Muebles a medida",
    image: "/images/diseno-amoblamientos/proyecto-4.svg",
    alt: "Proyecto de mueble a medida de Diseño Amoblamientos",
    className: "md:col-span-5",
  },
  {
    title: "Frente de placard",
    category: "Placares",
    image: "/images/diseno-amoblamientos/proyecto-5.svg",
    alt: "Proyecto de frente de placard de Diseño Amoblamientos",
    className: "md:col-span-3",
  },
  {
    title: "Composición a medida",
    category: "Amoblamientos personalizados",
    image: "/images/diseno-amoblamientos/proyecto-6.svg",
    alt: "Proyecto de amoblamiento personalizado de Diseño Amoblamientos",
    className: "md:col-span-4",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta",
    description: "Escuchamos la necesidad, el uso esperado y el tipo de ambiente.",
  },
  {
    number: "02",
    title: "Medidas",
    description: "Relevamos el espacio para definir proporciones y posibilidades reales.",
  },
  {
    number: "03",
    title: "Fabricación",
    description: "Desarrollamos cada pieza con foco en estructura, terminación y ajuste.",
  },
  {
    number: "04",
    title: "Instalación",
    description: "Montamos el proyecto final para que quede integrado al lugar.",
  },
] as const;

export const reasons = [
  "Diseño a medida",
  "Optimización del espacio",
  "Terminaciones cuidadas",
  "Acompañamiento en el proceso",
  "Fabricación e instalación",
] as const;

export const faqs = [
  {
    question: "¿Hacen muebles a medida?",
    answer:
      "Sí. Cada proyecto se desarrolla según medidas, uso del espacio y necesidades reales de cada ambiente.",
  },
  {
    question: "¿Puedo pedir presupuesto por WhatsApp?",
    answer:
      "Sí. Podés escribir directamente por WhatsApp para contarnos tu idea y avanzar con una primera orientación.",
  },
  {
    question: "¿Trabajan cocinas, placares y vestidores?",
    answer:
      "Sí. Diseñamos y fabricamos cocinas, placares, vestidores y otros amoblamientos personalizados.",
  },
  {
    question: "¿Hacen diseño e instalación?",
    answer:
      "Sí. Acompañamos el proceso desde la propuesta inicial hasta la instalación final del amoblamiento.",
  },
  {
    question: "¿Se puede adaptar el proyecto al espacio disponible?",
    answer:
      "Sí. El objetivo es resolver cada ambiente con una propuesta funcional, proporcionada y adaptada al lugar.",
  },
] as const;
