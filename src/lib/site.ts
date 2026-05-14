export const site = {
  businessName: "Belleza Mediterránea",
  logoLineOne: "Belleza",
  logoLineTwo: "Mediterránea",
  tagline: "Estética · Salud · Movimiento",
  shortDescription: "Estética, salud y movimiento en el Centro de Córdoba.",
  aboutText:
    "En Belleza Mediterránea combinamos estética, masajes y trabajo corporal para acompañar el cuidado de tu piel y tu cuerpo con atención personalizada.",
  heroEyebrow: "Centro de Córdoba · Obispo Trejo 179",
  heroTitle: "Estética, salud y movimiento en Córdoba",
  heroSubtitle:
    "Un espacio para cuidar tu piel, aliviar tensiones y reconectar con tu bienestar.",
  heroNote: "Atención con turno previo · Ambos sexos",
  heroCtaPrimary: "Consultar por WhatsApp",
  heroCtaSecondary: "Ver servicios",
  servicesEyebrow: "Servicios",
  servicesTitle: "Tratamientos pensados para tu bienestar",
  servicesIntro:
    "Seis propuestas principales para acompañar el cuidado facial, corporal y el alivio de tensiones.",
  servicesListTitle: "También podés consultar por",
  aboutEyebrow: "Sobre la marca",
  aboutTitle: "Un espacio integral para tu bienestar",
  galleryEyebrow: "Galería",
  galleryTitle: "Un espacio para cuidarte",
  galleryDescription:
    "Tratamientos, masajes y bienestar en un ambiente pensado para que te sientas cómoda desde que llegás.",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes",
  faqDescription: "Información clara para reservar y elegir tu tratamiento con tranquilidad.",
  contactEyebrow: "Ubicación y contacto",
  contactTitle: "Estamos en el Centro de Córdoba",
  contactDescription:
    "Obispo Trejo 179. Zona Manzana Jesuítica. Atención con turno previo.",
  footerDescription: "Estética · Salud · Movimiento",
  whatsappNumber: "543516698256",
  whatsappDisplay: "+54 9 351 669 8256",
  whatsappMessage: "Hola, quiero consultar por un turno.",
  whatsappUrl:
    "https://wa.me/543516698256?text=Hola%2C%20quiero%20consultar%20por%20un%20turno.",
  instagramUrl: "https://www.instagram.com/esteticabellezamediterranea",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Obispo%20Trejo%20179%2C%20Centro%20de%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Obispo%20Trejo%20179%2C%20Centro%20de%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina&output=embed",
  address: "Obispo Trejo 179, Centro de Córdoba, Córdoba Capital, Argentina.",
  addressShort: "Obispo Trejo 179, Centro de Córdoba",
  locationLabel: "Centro de Córdoba · Manzana Jesuítica",
  availability: "Atención con turno previo",
  serviceAudience: "Ambos sexos",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  footerNavigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  trustPoints: [
    "Estética facial y corporal",
    "Masajes y bienestar",
    "Terapia Postural Activa",
    "Atención con turno previo",
  ],
  contactPoints: [
    "Obispo Trejo 179",
    "Zona Manzana Jesuítica",
    "Atención con turno previo",
  ],
  socialLinks: [
    { label: "WhatsApp", href: "https://wa.me/543516698256?text=Hola%2C%20quiero%20consultar%20por%20un%20turno.", icon: "whatsapp" },
    { label: "Instagram", href: "https://www.instagram.com/esteticabellezamediterranea", icon: "instagram" },
  ],
} as const;

export const services = [
  {
    title: "Tratamientos faciales",
    description:
      "Limpiezas y tratamientos personalizados para cuidar la piel, mejorar su textura y recuperar luminosidad.",
    image: "/images/belleza-mediterranea/servicio-faciales.jpg",
    alt: "Tratamientos faciales en Belleza Mediterránea",
    accent: "bg-[#B8795F]",
    imagePosition: "object-center [object-position:center_34%]",
  },
  {
    title: "Masajes",
    description:
      "Masajes relajantes y terapéuticos para aliviar tensiones y regalarte una pausa de bienestar.",
    image: "/images/belleza-mediterranea/servicio-masajes.jpg",
    alt: "Masajes relajantes en Belleza Mediterránea",
    accent: "bg-[#7E8768]",
    imagePosition: "object-center [object-position:center_42%]",
  },
  {
    title: "Terapia Postural Activa",
    description:
      "Trabajo corporal orientado a mejorar postura, movilidad y bienestar físico.",
    image: "/images/belleza-mediterranea/servicio-tpa.jpg",
    alt: "Terapia Postural Activa en Belleza Mediterránea",
    accent: "bg-[#9BAA92]",
    imagePosition: "object-center [object-position:center_26%]",
  },
  {
    title: "Depilación",
    description:
      "Opciones de depilación con cera y definitiva, pensadas para una experiencia cómoda y cuidada.",
    image: "/images/belleza-mediterranea/servicio-depilacion.jpg",
    alt: "Servicio de depilación en Belleza Mediterránea",
    accent: "bg-[#C9987D]",
    imagePosition: "object-center [object-position:center_32%]",
  },
  {
    title: "Tratamientos corporales",
    description:
      "Tratamientos estéticos corporales para acompañar el cuidado del cuerpo y la piel.",
    image: "/images/belleza-mediterranea/servicio-corporal.jpg",
    alt: "Tratamientos corporales en Belleza Mediterránea",
    accent: "bg-[#8D9578]",
    imagePosition: "object-center [object-position:center_36%]",
  },
  {
    title: "Bruxismo y ATM",
    description:
      "Abordajes orientados a aliviar molestias vinculadas a tensión mandibular, bruxismo y ATM.",
    image: "/images/belleza-mediterranea/servicio-bruxismo-atm.jpg",
    alt: "Abordaje de bruxismo y ATM en Belleza Mediterránea",
    accent: "bg-[#B68A74]",
    imagePosition: "object-center [object-position:center_28%]",
  },
] as const;

export const secondaryServices = [
  "Limpiezas faciales",
  "Cosmetología",
  "Cosmiatría",
  "Depilación con cera",
  "Depilación definitiva",
  "Bienestar corporal",
] as const;

export const gallery = [
  {
    title: "Cabina de atención",
    description: "Un ambiente prolijo y sereno para cada turno.",
    image: "/images/belleza-mediterranea/galeria-cabina.jpg",
    alt: "Cabina de atención de Belleza Mediterránea",
    span: "lg:col-span-2 lg:row-span-2",
    imagePosition: "object-center [object-position:center_50%]",
  },
  {
    title: "Cuidado facial",
    description: "Protocolos pensados para tu piel.",
    image: "/images/belleza-mediterranea/servicio-faciales.jpg",
    alt: "Cuidado facial en Belleza Mediterránea",
    span: "",
    imagePosition: "object-center [object-position:center_34%]",
  },
  {
    title: "Masajes",
    description: "Pausa y alivio para bajar tensiones.",
    image: "/images/belleza-mediterranea/galeria-relax.jpg",
    alt: "Espacio de masajes en Belleza Mediterránea",
    span: "",
    imagePosition: "object-center [object-position:center_46%]",
  },
  {
    title: "Bienestar corporal",
    description: "Tratamientos y movimiento en un mismo espacio.",
    image: "/images/belleza-mediterranea/galeria-espacio.jpg",
    alt: "Bienestar corporal en Belleza Mediterránea",
    span: "lg:col-span-2",
    imagePosition: "object-center [object-position:center_48%]",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo reservo un turno?",
    answer:
      "Podés escribir por WhatsApp para consultar disponibilidad y coordinar el servicio que necesitás.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Estamos en Obispo Trejo 179, Centro de Córdoba, zona Manzana Jesuítica.",
  },
  {
    question: "¿La atención es con turno previo?",
    answer:
      "Sí, trabajamos con turno previo para organizar cada atención de forma cómoda y personalizada.",
  },
  {
    question: "¿Cómo sé qué tratamiento me conviene?",
    answer:
      "Podés consultar por WhatsApp y te orientamos según lo que estés buscando: cuidado facial, masajes, depilación, TPA o bienestar corporal.",
  },
] as const;
