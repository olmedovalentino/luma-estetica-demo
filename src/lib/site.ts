const whatsappNumber = "";

export function createWhatsAppUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);

  if (!whatsappNumber) {
    return `https://wa.me/?text=${encodedMessage}`;
  }

  return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
}

export const site = {
  businessName: "Urani Studio",
  logoLineOne: "Urani",
  logoLineTwo: "Studio",
  tagline: "Nails & Lashes",
  shortDescription: "Nails & Lashes en el Centro de Córdoba.",
  aboutText:
    "En Urani Studio trabajamos uñas y pestañas con atención personalizada, buscando que cada diseño se adapte a tu estilo y que cada visita se sienta cómoda, cuidada y prolija.",
  heroEyebrow: "Centro de Córdoba · Alvear 53",
  heroTitle: "Nails & Lashes en Córdoba",
  heroSubtitle:
    "Un espacio para realzar tu estilo con uñas, pestañas y diseños personalizados.",
  heroNote: "Turnos con reserva previa",
  heroCtaPrimary: "Consultar por WhatsApp",
  heroCtaSecondary: "Ver servicios",
  servicesEyebrow: "Servicios",
  servicesTitle: "Servicios principales",
  servicesIntro:
    "Seis propuestas visuales y personalizadas para uñas, pestañas y diseños con identidad propia.",
  aboutEyebrow: "Sobre la marca",
  aboutTitle: "Un estudio para cuidar cada detalle",
  bookingEyebrow: "Turnos",
  bookingTitle: "Solicitá tu turno",
  bookingDescription:
    "Elegí el servicio que te interesa, dejá tus datos y coordinamos por WhatsApp.",
  bookingNote:
    "Podés consultar disponibilidad por WhatsApp y te respondemos para confirmar día y horario.",
  galleryEyebrow: "Galería",
  galleryTitle: "Diseños, detalles y mirada",
  galleryDescription:
    "Una selección visual de trabajos, estilos y detalles del estudio.",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes",
  faqDescription:
    "Información simple para consultar disponibilidad y elegir tu próximo turno.",
  contactEyebrow: "Ubicación y contacto",
  contactTitle: "Estamos en el Centro de Córdoba",
  contactDescription:
    "Alvear 53. Centro de Córdoba. Atención con reserva previa.",
  footerDescription: "Nails & Lashes",
  // Replace with the confirmed WhatsApp number, for example: "5493510000000".
  whatsappNumber,
  whatsappUrl: createWhatsAppUrl("Hola! Quiero consultar disponibilidad en Urani Studio."),
  instagramUrl: "https://www.instagram.com/urani.studio",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Alvear%2053%2C%20Centro%2C%20C%C3%B3rdoba%2C%20Argentina",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Alvear%2053%2C%20Centro%20de%20C%C3%B3rdoba%2C%20Argentina&output=embed",
  address: "Alvear 53, Centro, Córdoba, Argentina.",
  addressShort: "Alvear 53, Centro de Córdoba",
  locationLabel: "Centro de Córdoba",
  availability: "Turnos con reserva previa",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Turnos", href: "#turnos" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  footerNavigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Turnos", href: "#turnos" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  trustPoints: [
    "Diseños personalizados",
    "Nails & lashes",
    "Atención con reserva previa",
    "Centro de Córdoba",
  ],
  socialLinks: [
    { label: "WhatsApp", href: createWhatsAppUrl("Hola! Quiero consultar disponibilidad en Urani Studio."), icon: "whatsapp" },
    { label: "Instagram", href: "https://www.instagram.com/urani.studio", icon: "instagram" },
  ],
} as const;

export const services = [
  {
    title: "Uñas",
    description:
      "Manicuría y diseños pensados para cuidar tus manos y reflejar tu estilo.",
    image: "/images/urani/servicio-unas.jpg",
    alt: "Servicio de uñas en Urani Studio",
    accent: "bg-[#C98E95]",
    imagePosition: "object-center [object-position:center_45%]",
  },
  {
    title: "Soft Gel",
    description:
      "Extensiones livianas y prolijas para lograr uñas delicadas, resistentes y naturales.",
    image: "/images/urani/servicio-soft-gel.jpg",
    alt: "Servicio de soft gel en Urani Studio",
    accent: "bg-[#D8B6A4]",
    imagePosition: "object-center [object-position:center_40%]",
  },
  {
    title: "Esculpidas",
    description: "Uñas esculpidas con forma, largo y diseño personalizado.",
    image: "/images/urani/servicio-esculpidas.jpg",
    alt: "Servicio de uñas esculpidas en Urani Studio",
    accent: "bg-[#B77B84]",
    imagePosition: "object-center [object-position:center_44%]",
  },
  {
    title: "Nail Art",
    description:
      "Diseños creativos, detalles y terminaciones para llevar tus uñas a otro nivel.",
    image: "/images/urani/servicio-nail-art.jpg",
    alt: "Servicio de nail art en Urani Studio",
    accent: "bg-[#8B736B]",
    imagePosition: "object-center [object-position:center_44%]",
  },
  {
    title: "Pestañas",
    description:
      "Servicios para realzar la mirada con un resultado prolijo y natural.",
    image: "/images/urani/servicio-pestanas.jpg",
    alt: "Servicio de pestañas en Urani Studio",
    accent: "bg-[#A87A78]",
    imagePosition: "object-center [object-position:center_38%]",
  },
  {
    title: "Anime Lash",
    description:
      "Un estilo de pestañas con efecto visual marcado, delicado y personalizado.",
    image: "/images/urani/servicio-anime-lash.jpg",
    alt: "Servicio de anime lash en Urani Studio",
    accent: "bg-[#7F6762]",
    imagePosition: "object-center [object-position:center_54%]",
  },
] as const;

export const bookingServices = [
  "Uñas",
  "Soft Gel",
  "Esculpidas",
  "Nail Art",
  "Pestañas",
  "Anime Lash",
] as const;

export const bookingDayOptions = [
  "Hoy",
  "Mañana",
  "Esta semana",
  "Próxima semana",
] as const;

export const bookingTimeOptions = [
  "Mañana",
  "Tarde",
  "Último horario disponible",
] as const;

export const gallery = [
  {
    title: "Uñas",
    description: "Detalles delicados y terminaciones cuidadas.",
    image: "/images/urani/galeria-unas.jpg",
    alt: "Detalles de uñas en Urani Studio",
    span: "lg:col-span-2 lg:row-span-2",
    imagePosition: "object-center [object-position:center_44%]",
  },
  {
    title: "Espacio",
    description: "Un rincón prolijo, cálido y visual.",
    image: "/images/urani/galeria-espacio.jpg",
    alt: "Espacio de atención de Urani Studio",
    span: "",
    imagePosition: "object-center [object-position:center_52%]",
  },
  {
    title: "Pestañas",
    description: "Mirada definida con un resultado personalizado.",
    image: "/images/urani/galeria-pestanas.jpg",
    alt: "Trabajo de pestañas en Urani Studio",
    span: "",
    imagePosition: "object-center [object-position:center_42%]",
  },
  {
    title: "Detalles",
    description: "Texturas y estética del estudio.",
    image: "/images/urani/galeria-detalles.jpg",
    alt: "Detalles visuales de Urani Studio",
    span: "lg:col-span-2",
    imagePosition: "object-center [object-position:center_40%]",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo reservo un turno?",
    answer:
      "Podés escribir por WhatsApp o mensaje directo de Instagram para consultar disponibilidad y coordinar tu turno.",
  },
  {
    question: "¿Dónde están ubicadas?",
    answer: "Estamos en Alvear 53, Centro de Córdoba.",
  },
  {
    question: "¿Qué servicio me conviene si es mi primera vez?",
    answer:
      "Podés consultar por WhatsApp y te orientamos según lo que estés buscando: uñas, soft gel, esculpidas, nail art o pestañas.",
  },
  {
    question: "¿La atención es con reserva previa?",
    answer:
      "Sí, trabajamos con turnos coordinados previamente para organizar cada atención de forma cómoda.",
  },
] as const;
