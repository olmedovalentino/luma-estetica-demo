export const site = {
  businessName: "Kōra Studio Beauty",
  logoLineOne: "Kōra Studio",
  logoLineTwo: "Relax & Beauty",
  tagline: "Cosmetología, cosmiatría, cejas, pestañas y relax en Nueva Córdoba",
  shortDescription:
    "Kōra Studio Beauty es un espacio de cuidado facial, cejas, pestañas y relax en Nueva Córdoba. Trabajamos con atención personalizada, resultados sutiles y una experiencia pensada para que cada visita se sienta tranquila, cuidada y natural.",
  aboutText:
    "En Kōra creemos que el cuidado personal también es una pausa. Combinamos cosmetología, cosmiatría y tratamientos de belleza para acompañar tu piel, tu mirada y tu bienestar con una atención cercana y personalizada.",
  heroTitle: "Cuidado facial, cejas, pestañas y relax en Nueva Córdoba",
  heroSubtitle:
    "Un espacio de belleza y bienestar para cuidar tu piel, realzar tu mirada y regalarte un momento de pausa.",
  heroNote: "Atención con cita previa · Obispo Oro 351",
  heroCtaPrimary: "Reservar turno",
  heroCtaSecondary: "Ver servicios",
  servicesIntro:
    "Tratamientos pensados para acompañar tu piel, tu mirada y tu bienestar con una atención cuidada y personalizada.",
  aboutEyebrow: "Sobre la marca",
  aboutTitle: "Un espacio para cuidarte con calma",
  galleryEyebrow: "Galería",
  galleryTitle: "Un espacio pensado para tu momento de cuidado",
  galleryDescription:
    "Detalles cálidos, ambiente tranquilo y una experiencia pensada para que te sientas cómoda desde que llegás.",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Resolvemos tus dudas antes de reservar",
  faqDescription: "Respuestas claras para que la experiencia sea simple desde el primer mensaje.",
  contactEyebrow: "Ubicación y contacto",
  contactTitle: "Estamos en Nueva Córdoba",
  contactDescription:
    "Te esperamos en Obispo Oro 351, oficina 3. La atención es con cita previa para que cada visita sea cómoda y personalizada.",
  footerDescription:
    "Cuidado facial, cejas, pestañas y relax en un espacio sereno, cálido y pensado para vos.",
  whatsappNumber: "5493517657141",
  whatsappDisplay: "+54 9 351 765 7141",
  whatsappMessage: "Hola, quiero consultar por un turno.",
  whatsappUrl: "https://wa.me/543517657141?text=Hola%2C%20quiero%20consultar%20por%20un%20turno.",
  instagramUrl: "https://www.instagram.com/kora.studioks",
  tiktokUrl: "https://www.tiktok.com/@kora.beautystudio",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Obispo%20Oro%20351%20oficina%203%2C%20Nueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Obispo%20Oro%20351%20oficina%203%2C%20Nueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed",
  address: "Obispo Oro 351, oficina 3. Nueva Córdoba, Córdoba Capital, Argentina.",
  addressShort: "Nueva Córdoba, Córdoba Capital",
  locationLabel: "Nueva Córdoba · Córdoba Capital",
  availability: "Atención con cita previa",
  bookingNote: "Coordiná tu turno por WhatsApp",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre la marca", href: "#sobre" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Ubicación", href: "#ubicacion" },
  ],
  footerNavigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre la marca", href: "#sobre" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ],
  trustPoints: [
    "Atención personalizada",
    "Cosmetología y cosmiatría",
    "Resultados sutiles y naturales",
    "Turnos con cita previa",
  ],
  contactPoints: [
    "Obispo Oro 351, oficina 3",
    "Nueva Córdoba, Córdoba Capital",
    "Atención con cita previa",
    "Coordiná tu turno por WhatsApp",
  ],
} as const;

export const services = [
  {
    title: "Limpiezas faciales",
    description: "Protocolos faciales pensados para limpiar, renovar e iluminar la piel según sus necesidades.",
    image: "/images/cliente/servicio-limpieza-facial.jpg",
    alt: "Tratamiento de limpieza facial en Kōra Studio Beauty",
    accent: "bg-[#6f7a5a]",
  },
  {
    title: "Limpieza Glass Skin",
    description: "Tratamiento orientado a lograr una piel más luminosa, fresca y con efecto glow.",
    image: "/images/cliente/servicio-glass-skin.jpg",
    alt: "Tratamiento Glass Skin para una piel luminosa",
    accent: "bg-[#758063]",
  },
  {
    title: "Hydralips",
    description: "Cuidado específico para labios, pensado para hidratarlos y mejorar su aspecto natural.",
    image: "/images/cliente/servicio-hydralips.jpg",
    alt: "Tratamiento Hydralips para labios hidratados",
    accent: "bg-[#b7a58a]",
  },
  {
    title: "Cejas",
    description: "Perfilado, laminado y diseño de cejas para enmarcar la mirada de forma sutil y prolija.",
    image: "/images/cliente/servicio-cejas.jpg",
    alt: "Servicio de cejas con perfilado y diseño",
    accent: "bg-[#3e4634]",
  },
  {
    title: "Pestañas",
    description: "Lifting y tinte de pestañas para realzar la mirada sin necesidad de maquillaje diario.",
    image: "/images/cliente/servicio-pestanas.jpg",
    alt: "Lifting y tinte de pestañas",
    accent: "bg-[#6f7a5a]",
  },
  {
    title: "Masajes relajantes",
    description: "Masajes de espalda, cuello o cuerpo completo para bajar tensiones y regalarte una pausa.",
    image: "/images/cliente/servicio-masajes.jpg",
    alt: "Masaje relajante en un espacio de bienestar",
    accent: "bg-[#e8dccb]",
  },
] as const;

export const fullServices = [
  {
    title: "Limpiezas faciales",
    items: ["Limpieza profunda", "Limpieza Radiance", "Limpieza Detox", "Limpieza Glass Skin", "Limpieza + exosomas"],
  },
  {
    title: "Cejas y pestañas",
    items: [
      "Lifting de pestañas",
      "Tinte de pestañas",
      "Perfilado de cejas",
      "Laminado de cejas",
      "Perfilado + laminado",
      "Lifting + perfilado + laminado",
    ],
  },
  {
    title: "Labios y relax",
    items: [
      "Hydralips",
      "Masaje relajante espalda y cuello, 1 hora",
      "Masaje relajante cuerpo completo, 1 hora",
    ],
  },
] as const;

export const gallery = [
  {
    title: "Cabina de atención",
    description: "Luz suave, orden y una atmósfera serena para sentirte cómoda desde que llegás.",
    image: "/images/cliente/galeria-cabina.jpg",
    alt: "Cabina de atención de Kōra Studio Beauty",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Cuidado facial",
    description: "Un espacio pensado para acompañar tu piel con calma y detalle.",
    image: "/images/cliente/galeria-espacio.jpg",
    alt: "Espacio de cuidado facial y relax",
    span: "",
  },
  {
    title: "Detalles de productos",
    description: "Texturas, aromas y pequeños gestos que hacen más agradable la experiencia.",
    image: "/images/cliente/galeria-productos.jpg",
    alt: "Productos de belleza y cuidado en Kōra Studio Beauty",
    span: "",
  },
  {
    title: "Momento de pausa",
    description: "Una estética cálida y natural que acompaña tu momento de bienestar.",
    image: "/images/cliente/galeria-detalles.jpg",
    alt: "Detalles decorativos y de ambiente en Kōra Studio Beauty",
    span: "lg:col-span-2",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo reservo un turno?",
    answer:
      "Podés escribir por WhatsApp o mensaje directo de Instagram. Coordinamos el servicio, día y horario disponible.",
  },
  {
    question: "¿Dónde están ubicadas?",
    answer: "Estamos en Nueva Córdoba, en Obispo Oro 351, oficina 3.",
  },
  {
    question: "¿Qué tratamiento me conviene si es mi primera vez?",
    answer:
      "Podés consultar por WhatsApp y te orientamos según lo que quieras mejorar o cuidar: piel, cejas, pestañas o relax.",
  },
  {
    question: "¿La atención es con turno previo?",
    answer: "Sí, trabajamos con cita previa para que cada atención sea tranquila, ordenada y personalizada.",
  },
] as const;

