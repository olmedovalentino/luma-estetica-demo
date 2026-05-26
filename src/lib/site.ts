export const site = {
  businessName: "Diseño Amoblamientos",
  tagline: "Amoblamientos a medida en Córdoba",
  shortDescription:
    "Cocinas, placares, vestidores y muebles personalizados pensados para resolver mejor cada espacio.",
  location: "Córdoba, Argentina",
  locationLabel: "Córdoba, Argentina",
  heroTitle: "Diseño y fabricación de amoblamientos a medida",
  heroSubtitle:
    "Creamos cocinas, placares, vestidores y muebles personalizados pensados para aprovechar mejor cada espacio.",
  primaryCta: "Consultar por WhatsApp",
  secondaryCta: "Ver proyectos",
  logoUrl: "/images/diseno-amoblamientos/logo.jpg",
  instagramHandle: "@disenoamoblamientos",
  whatsappNumber: "5493513082515",
  whatsappDisplay: "+54 9 351 308 2515",
  whatsappMessage:
    "Hola, vengo desde la página web. Quisiera consultar por un proyecto de amoblamientos a medida.",
  whatsappUrl:
    "https://wa.me/5493513082515?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20web.%20Quisiera%20consultar%20por%20un%20proyecto%20de%20amoblamientos%20a%20medida.",
  instagramUrl: "https://www.instagram.com/disenoamoblamientos/",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Por qué elegirnos", href: "#por-que-elegirnos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerNavigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const services = [
  {
    title: "Cocinas",
    description: "Diseño funcional, buena circulación y terminaciones limpias.",
    image: "/images/diseno-amoblamientos/cocina.jpg",
    alt: "Cocina realizada por Diseño Amoblamientos",
  },
  {
    title: "Placares",
    description: "Interiores pensados para ordenar mejor y aprovechar cada pared.",
    image: "/images/diseno-amoblamientos/placard.jpg",
    alt: "Placard realizado por Diseño Amoblamientos",
  },
  {
    title: "Vestidores",
    description: "Composición clara, guardado cómodo y diseño a medida.",
    image: "/images/diseno-amoblamientos/vestidor.jpg",
    alt: "Vestidor realizado por Diseño Amoblamientos",
  },
  {
    title: "Muebles personalizados",
    description: "Piezas que se integran al ambiente con proporción y carácter.",
    image: "/images/diseno-amoblamientos/mueble-personalizado.jpg",
    alt: "Mueble personalizado realizado por Diseño Amoblamientos",
  },
] as const;

export const projects = [
  {
    title: "Proyecto 01",
    category: "Cocina integral",
    image: "/images/diseno-amoblamientos/proyecto-1.jpg",
    alt: "Proyecto de cocina integral de Diseño Amoblamientos",
    className: "lg:col-span-7",
  },
  {
    title: "Proyecto 02",
    category: "Placard lineal",
    image: "/images/diseno-amoblamientos/proyecto-2.jpg",
    alt: "Proyecto de placard lineal de Diseño Amoblamientos",
    className: "lg:col-span-5",
  },
  {
    title: "Proyecto 03",
    category: "Vestidor abierto",
    image: "/images/diseno-amoblamientos/proyecto-3.jpg",
    alt: "Proyecto de vestidor abierto de Diseño Amoblamientos",
    className: "lg:col-span-4",
  },
  {
    title: "Proyecto 04",
    category: "Mueble auxiliar",
    image: "/images/diseno-amoblamientos/proyecto-4.jpg",
    alt: "Proyecto de mueble auxiliar de Diseño Amoblamientos",
    className: "lg:col-span-4",
  },
  {
    title: "Proyecto 05",
    category: "Frente de placard",
    image: "/images/diseno-amoblamientos/proyecto-5.jpg",
    alt: "Proyecto de frente de placard de Diseño Amoblamientos",
    className: "lg:col-span-4",
  },
  {
    title: "Proyecto 06",
    category: "Amoblamiento personalizado",
    image: "/images/diseno-amoblamientos/proyecto-6.jpg",
    alt: "Proyecto de amoblamiento personalizado de Diseño Amoblamientos",
    className: "lg:col-span-6",
  },
] as const;

export const reasons = [
  {
    title: "Diseño a medida",
    description: "Cada propuesta se adapta al ambiente, al uso y a las medidas reales.",
  },
  {
    title: "Mejor aprovechamiento",
    description: "Buscamos orden, funcionalidad y una presencia visual equilibrada.",
  },
  {
    title: "Proceso claro",
    description: "Acompañamos desde la primera consulta hasta la instalación final.",
  },
] as const;

export const faqs = [
  {
    question: "¿Hacen muebles a medida?",
    answer: "Sí. Cada proyecto se diseña según el espacio y la necesidad de uso.",
  },
  {
    question: "¿Puedo consultar por WhatsApp?",
    answer: "Sí. Podés escribirnos y contarnos tu idea para recibir una primera orientación.",
  },
  {
    question: "¿Trabajan cocinas, placares y vestidores?",
    answer: "Sí. Desarrollamos esos rubros y también muebles personalizados.",
  },
  {
    question: "¿Incluyen instalación?",
    answer: "Sí. El servicio contempla diseño, fabricación e instalación.",
  },
] as const;
