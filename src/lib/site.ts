export const site = {
  businessName: "Lima Limón Deco",
  tagline: "Decoración textil, tapicería y diseño de interiores",
  shortDescription:
    "Cortinas, tapicería, sillones a medida, alfombras y detalles deco pensados para cada ambiente.",
  location: "Pilar, Buenos Aires",
  locationLabel: "Pilar, Buenos Aires",
  heroTitle: "Diseño textil y decoración para transformar tus espacios",
  heroSubtitle:
    "Cortinas, tapicería, sillones a medida, alfombras y detalles deco pensados para cada ambiente.",
  primaryCta: "Consultar por WhatsApp",
  secondaryCta: "Ver proyectos",
  logoUrl: "/images/lima-limon/logo.png",
  instagramHandle: "@limalimondeco",
  whatsappNumber: "5491163974778",
  whatsappDisplay: "11 6397 4778",
  whatsappMessage:
    "Hola Lima Limón, quería hacer una consulta por sus servicios",
  whatsappUrl:
    "https://wa.me/5491163974778?text=Hola%20Lima%20Lim%C3%B3n%2C%20quer%C3%ADa%20hacer%20una%20consulta%20por%20sus%20servicios",
  instagramUrl: "https://www.instagram.com/limalimondeco/",
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
    title: "Cortinas a medida",
    description: "Diseño, confección y asesoramiento para vestir cada ventana con la caída ideal.",
    image: "/images/lima-limon/cortina.png",
    alt: "Cortinas a medida de Lima Limón Deco",
  },
  {
    title: "Tapicería y retapizados",
    description: "Renovamos sillones, sillas y piezas con telas elegidas para cada uso.",
    image: "/images/lima-limon/retapizado.png",
    alt: "Tapicería y retapizados de Lima Limón Deco",
  },
  {
    title: "Sillones a medida",
    description: "Sillones nuevos y personalizados para integrar comodidad, proporción y estilo.",
    image: "/images/lima-limon/sillon.png",
    alt: "Sillones a medida de Lima Limón Deco",
  },
  {
    title: "Fundas, almohadones y alfombras",
    description: "Textiles y detalles para sumar textura, color y calidez al hogar.",
    image: "/images/lima-limon/funda.png",
    alt: "Fundas, almohadones y alfombras de Lima Limón Deco",
  },
] as const;

export const projects = [
  {
    title: "Cortinas",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-1.png",
    alt: "Inspiración de cortinas de Lima Limón Deco",
  },
  {
    title: "Retapizados",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-2.png",
    alt: "Inspiración de retapizados de Lima Limón Deco",
  },
  {
    title: "Sillones",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-3.png",
    alt: "Inspiración de sillones de Lima Limón Deco",
  },
  {
    title: "Almohadones",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-4.png",
    alt: "Inspiración de almohadones de Lima Limón Deco",
  },
  {
    title: "Alfombras",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-5.png",
    alt: "Inspiración de alfombras de Lima Limón Deco",
  },
  {
    title: "Limpieza de tapizados",
    category: "Servicio",
    image: "/images/lima-limon/proyecto-6.png",
    alt: "Limpieza de tapizados de Lima Limón Deco",
  },
] as const;

export const reasons = [
  {
    title: "Atención personalizada",
    description: "Acompañamos cada elección según el ambiente, el uso y el estilo buscado.",
  },
  {
    title: "Trabajos a medida",
    description: "Cortinas, fundas, sillones y tapicería pensados para cada espacio.",
  },
  {
    title: "Géneros seleccionados",
    description: "Trabajamos con opciones nacionales e importadas para distintas necesidades.",
  },
] as const;

export const faqs = [
  {
    question: "¿Hacen cortinas a medida?",
    answer: "Sí. Asesoramos en telas, sistemas y medidas para resolver cortinas según cada ambiente.",
  },
  {
    question: "¿Puedo consultar por WhatsApp?",
    answer: "Sí. Podés escribirnos y contarnos qué necesitás para recibir una primera orientación.",
  },
  {
    question: "¿Trabajan con retapizado de sillones?",
    answer: "Sí. Realizamos tapicería, retapizados y restauración de sillones, sillas y otras piezas.",
  },
  {
    question: "¿Hacen limpieza de tapizados?",
    answer: "Sí. Ofrecemos limpieza de tapizados para sillones, sillas y superficies textiles del hogar.",
  },
] as const;
