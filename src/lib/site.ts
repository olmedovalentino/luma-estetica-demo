export const site = {
  businessName: "FARIAS AIRES ACONDICIONADOS",
  brandName: "Farías Aires Acondicionados",
  shortName: "Farías Aires",
  tagline: "Climatización · Service · Instalación",
  shortDescription:
    "Instalación, service, mantenimiento y venta de aires acondicionados en Córdoba y alrededores.",
  heroEyebrow: "Córdoba y alrededores · Más de 8 años en climatización",
  heroTitle: "Instalación, service y venta de aires acondicionados",
  heroSubtitle:
    "Soluciones en climatización para hogares y comercios: instalación de equipos, mantenimiento, recarga de gas, service y calderas.",
  heroNote:
    "Atención en Córdoba Capital, Carlos Paz, Río Ceballos, Siquiman y zonas cercanas.",
  heroCtaPrimary: "Pedir presupuesto",
  heroCtaSecondary: "Ver servicios",
  heroVisualLabel: "Climatización",
  heroVisualTitle: "Instalación, service y soluciones para hogares y comercios",
  servicesEyebrow: "Servicios principales",
  servicesTitle: "Soluciones claras para cada necesidad de climatización",
  servicesIntro:
    "Instalación, service, mantenimiento y diagnóstico técnico para resolver cada trabajo con una atención prolija y directa.",
  equipmentEyebrow: "Venta de equipos",
  equipmentTitle: "Equipos + instalación en un solo lugar",
  equipmentDescription:
    "Además del service y mantenimiento, Farías Aires ofrece venta de equipos de aire acondicionado con instalación incluida, para que puedas resolver todo el proceso con un mismo equipo de trabajo.",
  equipmentCtaLabel: "Consultar por un equipo",
  equipmentVisualLabel: "Equipos",
  equipmentVisualTitle: "Asesoramiento, venta e instalación dentro del mismo servicio",
  aboutEyebrow: "Sobre Farías Aires",
  aboutTitle: "Más de 8 años trabajando en climatización",
  aboutText:
    "Farías Aires Acondicionados es un emprendimiento local especializado en climatización. Comenzaron con instalación y service de equipos split, y con el tiempo sumaron venta de equipos, mantenimiento, recarga de gas y service de calderas.",
  aboutVisualLabel: "Farías Aires",
  aboutVisualTitle: "Más de 8 años de trabajo sostenido en climatización",
  galleryEyebrow: "Trabajos realizados",
  galleryTitle: "Trabajos realizados",
  galleryDescription:
    "Instalaciones, mantenimiento y soluciones de climatización en distintos puntos de Córdoba y alrededores.",
  zonesEyebrow: "Cobertura",
  zonesTitle: "Zonas de atención",
  zonesDescription:
    "Trabajamos en Córdoba Capital y alrededores, incluyendo Carlos Paz, Río Ceballos, Siquiman y zonas cercanas.",
  zonesCtaLabel: "Consultar disponibilidad por WhatsApp",
  faqEyebrow: "Preguntas frecuentes",
  faqTitle: "Preguntas frecuentes",
  faqDescription:
    "Información simple para consultar por instalación, service, venta de equipos y mantenimiento.",
  contactEyebrow: "Contacto",
  contactTitle: "Pedí tu presupuesto por WhatsApp",
  contactDescription:
    "Contanos qué servicio necesitás, en qué zona estás y te orientamos con la mejor opción.",
  contactCtaLabel: "Pedir presupuesto por WhatsApp",
  footerDescription: "Climatización · Service · Instalación",
  whatsappNumber: "5493517345516",
  whatsappDisplay: "+54 9 3517 34-5516",
  whatsappMessage: "Hola, quiero consultar por un presupuesto.",
  whatsappUrl:
    "https://wa.me/5493517345516?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto.",
  instagramUrl: "https://www.instagram.com/fariasairesac/",
  instagramHandle: "@fariasairesac",
  availability: "Horario comercial",
  locationLabel: "Córdoba y alrededores",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Equipos", href: "#equipos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Zonas", href: "#zonas" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  footerNavigation: [
    { label: "Servicios", href: "#servicios" },
    { label: "Equipos", href: "#equipos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Zonas", href: "#zonas" },
    { label: "Contacto", href: "#contacto" },
  ],
  trustPoints: [
    "Atención en Córdoba y alrededores",
    "Instalación, service y mantenimiento",
    "Venta de equipos con instalación",
    "Presupuestos por WhatsApp",
  ],
  equipmentPoints: [
    "Asesoramiento según el ambiente",
    "Venta de equipos",
    "Instalación incluida",
    "Presupuesto por WhatsApp",
  ],
  contactPoints: [
    "WhatsApp: +54 9 3517 34-5516",
    "Instagram: @fariasairesac",
    "Córdoba y alrededores",
    "Horario comercial",
  ],
  zones: [
    "Córdoba Capital",
    "Villa Carlos Paz",
    "Río Ceballos",
    "Siquiman",
    "Alrededores",
    "Consultar otras zonas",
  ],
  socialLinks: [
    {
      label: "WhatsApp",
      href: "https://wa.me/5493517345516?text=Hola%2C%20quiero%20consultar%20por%20un%20presupuesto.",
      icon: "whatsapp",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/fariasairesac/",
      icon: "instagram",
    },
  ],
  media: {
    logo: "/images/farias-aires/logo.jpg",
    hero: null,
    about: null,
    services: {
      instalacion: null,
      service: null,
      ventaEquipos: null,
      calderas: null,
      mantenimiento: null,
      recargaGas: null,
    },
    gallery: [null, null, null, null],
  },
} as const;

export const services = [
  {
    title: "Instalación de aires acondicionados",
    description:
      "Instalación profesional de equipos split para hogares y comercios, con asesoramiento y trabajo prolijo.",
    image: site.media.services.instalacion,
    alt: "Instalación de aire acondicionado",
    accent: "bg-[#E43125]",
    placeholderLabel: "Instalaciones",
  },
  {
    title: "Service y mantenimiento",
    description:
      "Revisión, limpieza y mantenimiento para mejorar el rendimiento y prolongar la vida útil del equipo.",
    image: site.media.services.service,
    alt: "Service y mantenimiento de aire acondicionado",
    accent: "bg-[#111111]",
    placeholderLabel: "Service",
  },
  {
    title: "Venta de equipos con instalación",
    description:
      "Venta de aires acondicionados con posibilidad de incluir instalación en el servicio.",
    image: site.media.services.ventaEquipos,
    alt: "Venta de equipos de aire acondicionado",
    accent: "bg-[#E43125]",
    placeholderLabel: "Equipos",
  },
  {
    title: "Calderas",
    description: "Service y mantenimiento de calderas durante temporada de invierno.",
    image: site.media.services.calderas,
    alt: "Service de calderas",
    accent: "bg-[#111111]",
    placeholderLabel: "Calderas",
  },
  {
    title: "Recarga de gas",
    description:
      "Carga y revisión del sistema para equipos con bajo rendimiento o problemas de refrigeración.",
    image: site.media.services.recargaGas,
    alt: "Recarga de gas para aire acondicionado",
    accent: "bg-[#E43125]",
    placeholderLabel: "Gas",
  },
  {
    title: "Diagnóstico técnico",
    description:
      "Revisión de fallas, pérdidas, bajo rendimiento o problemas de funcionamiento.",
    image: site.media.services.mantenimiento,
    alt: "Diagnóstico técnico de climatización",
    accent: "bg-[#111111]",
    placeholderLabel: "Diagnóstico",
  },
] as const;

export const gallery = [
  {
    title: "Instalaciones",
    description: "Montaje de equipos en hogares y comercios.",
    image: site.media.gallery[0],
    alt: "Instalaciones realizadas por Farías Aires",
    span: "lg:col-span-2",
  },
  {
    title: "Service",
    description: "Revisión y solución de fallas.",
    image: site.media.gallery[1],
    alt: "Service de aire acondicionado",
    span: "",
  },
  {
    title: "Mantenimiento",
    description: "Limpieza y puesta a punto.",
    image: site.media.gallery[2],
    alt: "Mantenimiento de climatización",
    span: "",
  },
  {
    title: "Equipos y calderas",
    description: "Trabajos en climatización durante todo el año.",
    image: site.media.gallery[3],
    alt: "Equipos y calderas Farías Aires",
    span: "lg:col-span-2",
  },
] as const;

export const faqs = [
  {
    question: "¿Trabajan solo en Córdoba Capital?",
    answer:
      "No, también realizan trabajos en Córdoba y alrededores, incluyendo Carlos Paz, Río Ceballos, Siquiman y zonas cercanas.",
  },
  {
    question: "¿Hacen venta de equipos?",
    answer:
      "Sí, además del service e instalación, ofrecen venta de equipos con posibilidad de instalación incluida.",
  },
  {
    question: "¿Realizan mantenimiento de calderas?",
    answer:
      "Sí, también trabajan con service y mantenimiento de calderas, especialmente en temporada de invierno.",
  },
  {
    question: "¿Cómo pido un presupuesto?",
    answer:
      "Podés escribir por WhatsApp contando qué necesitás, la zona y, si es posible, enviando fotos del equipo o del espacio.",
  },
] as const;
