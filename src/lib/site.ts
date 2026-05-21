export const site = {
  businessName: "Creativo Muebles",
  tagline: "Muebles a medida en Cordoba",
  shortDescription:
    "Disenamos y fabricamos cocinas, placares, vestidores y muebles personalizados para hogares en Cordoba.",
  location: "Cordoba, Argentina",
  locationLabel: "Cordoba, Argentina · Muebles a medida",
  heroTitle: "Muebles disenados para transformar tus espacios",
  heroSubtitle:
    "Disenamos y fabricamos cocinas, placares, vestidores y muebles personalizados para que cada ambiente sea funcional, comodo y con identidad propia.",
  primaryCta: "Consultar proyecto",
  secondaryCta: "Ver trabajos",
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
    description:
      "Disenos funcionales pensados para aprovechar cada espacio y acompanar el uso diario.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    alt: "Cocina a medida con tonos de madera y luz natural",
    objectPosition: "center 52%",
  },
  {
    title: "Placares",
    description:
      "Soluciones de guardado a medida, con distribucion interior adaptada a cada necesidad.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    alt: "Placard contemporaneo integrado a un dormitorio",
    objectPosition: "center 48%",
  },
  {
    title: "Vestidores",
    description:
      "Espacios organizados, comodos y visuales para ordenar ropa, accesorios y objetos personales.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    alt: "Vestidor luminoso con estantes y cajoneras a medida",
    objectPosition: "center 45%",
  },
  {
    title: "Muebles personalizados",
    description:
      "Muebles pensados para resolver rincones, ambientes y necesidades especificas del hogar.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80&sat=-10",
    alt: "Mueble personalizado de guardado con madera clara",
    objectPosition: "center 56%",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta inicial",
    description:
      "Entendemos que necesitas, que espacio queres resolver y que estilo buscas.",
  },
  {
    number: "02",
    title: "Propuesta y medidas",
    description:
      "Definimos medidas, distribucion, materiales y detalles del proyecto.",
  },
  {
    number: "03",
    title: "Fabricacion",
    description:
      "Trabajamos el mueble en taller con terminaciones pensadas para cada ambiente.",
  },
  {
    number: "04",
    title: "Instalacion",
    description:
      "Coordinamos la colocacion para dejar el espacio listo para usar.",
  },
] as const;

export const portfolioItems = [
  {
    title: "Cocina a medida",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    alt: "Cocina a medida con isla y terminaciones calidas",
    span: "md:col-span-2 md:row-span-2",
    objectPosition: "center 52%",
  },
  {
    title: "Placard funcional",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Placard funcional en dormitorio moderno",
    span: "",
    objectPosition: "center 48%",
  },
  {
    title: "Vestidor personalizado",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Vestidor personalizado con estanterias abiertas",
    span: "",
    objectPosition: "center 45%",
  },
  {
    title: "Mueble de guardado",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    alt: "Mueble de guardado en living con diseno minimalista",
    span: "",
    objectPosition: "center 54%",
  },
  {
    title: "Diseno para hogar",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20",
    alt: "Interior de hogar con muebles integrados",
    span: "md:col-span-2",
    objectPosition: "center 56%",
  },
  {
    title: "Detalles de terminacion",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle de terminacion en madera y herrajes",
    span: "",
    objectPosition: "center 50%",
  },
] as const;

export const benefits = [
  "Aprovechas mejor cada centimetro",
  "Elegis distribucion, estilo y terminaciones",
  "Adaptas el diseno a tu forma de vivir",
  "Logras un resultado mas integrado al espacio",
] as const;

export const faqs = [
  {
    question: "¿Hacen muebles a medida?",
    answer:
      "Si, trabajamos proyectos personalizados segun el espacio, la necesidad y el estilo buscado.",
  },
  {
    question: "¿Que tipo de muebles realizan?",
    answer:
      "Principalmente cocinas, placares, vestidores y muebles personalizados para distintos ambientes del hogar.",
  },
  {
    question: "¿Como puedo pedir un presupuesto?",
    answer:
      "Podes escribir por WhatsApp o Instagram contando que necesitas y, si tenes, enviar fotos o medidas aproximadas del espacio.",
  },
  {
    question: "¿Trabajan en Cordoba?",
    answer: "Si, Creativo Muebles trabaja en Cordoba, Argentina.",
  },
] as const;
