export const whatsappNumber = "";
export const whatsappUrl = "#";
export const instagramUrl = "https://www.instagram.com/estudiosens";
export const mapsUrl = "";

export const site = {
  businessName: "Estudio Sens",
  logoLineOne: "Sens",
  logoLineTwo: "Estudio",
  tagline: "Una postura positiva",
  shortDescription: "Pilates, postura y bienestar en Cordoba Capital.",
  aboutText:
    "En Estudio Sens trabajamos el movimiento desde una mirada integral, combinando pilates, salud postural y acompanamiento profesional para que cada persona pueda entrenar de forma consciente, segura y personalizada.",
  heroEyebrow: "Cordoba Capital · Movimiento consciente",
  heroTitle: "Pilates, postura y bienestar en Cordoba",
  heroSubtitle:
    "Un espacio para moverte mejor, fortalecer tu cuerpo y cuidar tu postura con acompanamiento profesional.",
  heroNote: "Clases personalizadas · Profesionales de la salud y la actividad fisica",
  heroCtaPrimary: "Consultar por WhatsApp",
  heroCtaSecondary: "Ver servicios",
  servicesEyebrow: "Servicios",
  servicesTitle: "Clases y propuestas del estudio",
  servicesIntro:
    "Seis propuestas claras para trabajar postura, fuerza, movilidad y bienestar desde una mirada profesional.",
  servicesListTitle: "Tambien podes consultar por",
  aboutEyebrow: "Sobre el estudio",
  aboutTitle: "Un espacio para moverte mejor",
  consultationEyebrow: "Consulta",
  consultationTitle: "Consulta por tu clase",
  consultationDescription:
    "Contanos que estas buscando y te orientamos sobre la clase o propuesta que mejor se adapte a vos.",
  galleryEyebrow: "Galeria",
  galleryTitle: "Movimiento, espacio y bienestar",
  galleryDescription:
    "Un entorno pensado para entrenar con conciencia, acompanamiento y cuidado.",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes",
  faqDescription:
    "Informacion simple para entender la propuesta del estudio y consultar con claridad.",
  contactEyebrow: "Ubicacion y contacto",
  contactTitle: "Estamos en Cordoba Capital",
  contactDescription:
    "Consulta disponibilidad, horarios y modalidad por WhatsApp. Clases y propuestas orientadas al movimiento consciente.",
  footerDescription: "Una postura positiva",
  whatsappNumber,
  whatsappUrl,
  instagramUrl,
  mapsUrl,
  address: "Cordoba Capital",
  addressShort: "Cordoba Capital",
  locationLabel: "Cordoba Capital",
  availability: "Consulta ubicacion, horarios y disponibilidad por WhatsApp",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Consulta", href: "#consulta" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  footerNavigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Consulta", href: "#consulta" },
    { label: "Contacto", href: "#ubicacion" },
  ],
  trustPoints: [
    "Profesionales de la salud y la actividad fisica",
    "Clases personalizadas",
    "Pilates postural y Kinesiopilates",
    "Movimiento consciente",
  ],
  contactPoints: [
    "Cordoba Capital",
    "Consulta ubicacion y horarios por WhatsApp",
    "Pilates, postura y bienestar",
  ],
  socialLinks: [
    { label: "WhatsApp", href: whatsappUrl, icon: "whatsapp" },
    { label: "Instagram", href: instagramUrl, icon: "instagram" },
  ],
} as const;

export const services = [
  {
    title: "Pilates Postural",
    description:
      "Clases orientadas a mejorar postura, fuerza, control corporal y bienestar general.",
    image: "/images/estudio-sens/servicio-pilates-postural.jpg",
    alt: "Pilates postural en Estudio Sens",
    accent: "bg-[#6F7C61]",
    imagePosition: "object-center [object-position:center_50%]",
  },
  {
    title: "Pilates MiX",
    description:
      "Una propuesta dinamica de circuito para trabajar movilidad, estabilidad y tonificacion.",
    image: "/images/estudio-sens/servicio-pilates-mix.jpg",
    alt: "Pilates mix en Estudio Sens",
    accent: "bg-[#87947A]",
    imagePosition: "object-center [object-position:center_48%]",
  },
  {
    title: "Kinesiopilates",
    description:
      "Trabajo personalizado que combina principios de pilates con una mirada profesional del movimiento.",
    image: "/images/estudio-sens/servicio-kinesiopilates.jpg",
    alt: "Kinesiopilates en Estudio Sens",
    accent: "bg-[#4E5B46]",
    imagePosition: "object-center [object-position:center_46%]",
  },
  {
    title: "Clases personalizadas",
    description:
      "Acompanamiento adaptado a cada persona, objetivo y necesidad fisica.",
    image: "/images/estudio-sens/servicio-clases-personalizadas.jpg",
    alt: "Clases personalizadas en Estudio Sens",
    accent: "bg-[#B5A28D]",
    imagePosition: "object-center [object-position:center_44%]",
  },
  {
    title: "Formacion Sens",
    description:
      "Espacios de formacion para profesionales interesados en movimiento, postura y bienestar.",
    image: "/images/estudio-sens/servicio-formacion.jpg",
    alt: "Formacion Sens en Estudio Sens",
    accent: "bg-[#7C756D]",
    imagePosition: "object-center [object-position:center_40%]",
  },
  {
    title: "Movimiento consciente",
    description:
      "Una forma de entrenar con control, respiracion y atencion al cuerpo.",
    image: "/images/estudio-sens/servicio-movimiento.jpg",
    alt: "Movimiento consciente en Estudio Sens",
    accent: "bg-[#303B2C]",
    imagePosition: "object-center [object-position:center_50%]",
  },
] as const;

export const secondaryServices = [
  "Mejorar postura",
  "Ganar fuerza",
  "Recuperar movilidad",
  "Empezar actividad fisica",
  "Consultar formacion",
] as const;

export const gallery = [
  {
    title: "Espacio",
    description: "Un lugar cuidado para entrenar con calma y foco.",
    image: "/images/estudio-sens/galeria-espacio.jpg",
    alt: "Espacio de Estudio Sens",
    span: "lg:col-span-2 lg:row-span-2",
    imagePosition: "object-center [object-position:center_52%]",
  },
  {
    title: "Clases",
    description: "Trabajo guiado, tecnico y cercano.",
    image: "/images/estudio-sens/galeria-clases.jpg",
    alt: "Clases en Estudio Sens",
    span: "",
    imagePosition: "object-center [object-position:center_50%]",
  },
  {
    title: "Equipamiento",
    description: "Elementos y herramientas para acompanar cada proceso.",
    image: "/images/estudio-sens/galeria-equipamiento.jpg",
    alt: "Equipamiento de Estudio Sens",
    span: "",
    imagePosition: "object-center [object-position:center_48%]",
  },
  {
    title: "Movimiento",
    description: "Cuerpo, control y bienestar en una misma practica.",
    image: "/images/estudio-sens/galeria-detalles.jpg",
    alt: "Movimiento en Estudio Sens",
    span: "lg:col-span-2",
    imagePosition: "object-center [object-position:center_46%]",
  },
] as const;

export const faqs = [
  {
    question: "Como puedo consultar por una clase?",
    answer:
      "Podes escribir por WhatsApp para consultar disponibilidad, modalidad y que clase se adapta mejor a lo que buscas.",
  },
  {
    question: "Que servicio me conviene si es mi primera vez?",
    answer:
      "Podes contar tu objetivo o necesidad y te orientamos entre Pilates Postural, Pilates MiX, Kinesiopilates u otra propuesta del estudio.",
  },
  {
    question: "Las clases son personalizadas?",
    answer:
      "El enfoque del estudio busca acompanar a cada persona segun su condicion, objetivos y proceso.",
  },
  {
    question: "Donde estan ubicados?",
    answer:
      "Estamos en Cordoba Capital. Consulta por WhatsApp para confirmar ubicacion, horarios y disponibilidad.",
  },
] as const;
