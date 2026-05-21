export const site = {
  businessName: "Norte Equipa",
  tagline: "Equipamiento y muebles a medida en Cordoba",
  shortDescription:
    "Soluciones de mobiliario y equipamiento a medida para hogares y espacios comerciales.",
  heroEyebrow: "Cordoba, Argentina · Equipamiento a medida",
  heroTitle: "Mobiliario pensado para ordenar, equipar y potenciar cada espacio",
  heroSubtitle:
    "Desarrollamos cocinas, placares, vestidores, guardados y amoblamientos comerciales con una propuesta clara, funcional y profesional.",
  primaryCta: "Consultar por WhatsApp",
  secondaryCta: "Ver catalogo",
  logoUrl: "/images/norte-equipa/logo.jpg",
  whatsappNumber: "",
  whatsappDisplay: "WhatsApp a confirmar",
  whatsappMessage: "Hola, vengo desde la web y quiero consultar por un proyecto.",
  whatsappUrl: "#",
  instagramUrl: "#",
  location: "Cordoba, Argentina",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Productos", href: "#productos" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Sobre nosotros", href: "#sobre" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const productCategories = [
  {
    title: "Cocinas a medida",
    description: "Diseno funcional para el uso diario.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=80",
    alt: "Cocina a medida moderna",
    objectPosition: "center 52%",
  },
  {
    title: "Placares",
    description: "Guardado integrado y mejor aprovechamiento.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    alt: "Placard moderno de piso a techo",
    objectPosition: "center 48%",
  },
  {
    title: "Vestidores",
    description: "Orden visual y circulacion comoda.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80",
    alt: "Vestidor con estantes y cajones",
    objectPosition: "center 46%",
  },
  {
    title: "Muebles de guardado",
    description: "Soluciones para organizar mejor cada ambiente.",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    alt: "Mueble de guardado en un interior contemporaneo",
    objectPosition: "center 54%",
  },
  {
    title: "Amoblamientos comerciales",
    description: "Mobiliario pensado para exhibir y trabajar mejor.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    alt: "Equipamiento comercial de lineas modernas",
    objectPosition: "center 50%",
  },
  {
    title: "Muebles personalizados",
    description: "Piezas a medida para necesidades puntuales.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80&sat=-15",
    alt: "Mueble personalizado de terminacion sobria",
    objectPosition: "center 56%",
  },
] as const;

export const catalogFilters = [
  "Cocinas",
  "Placares",
  "Vestidores",
  "Guardado",
  "Comercial",
  "Personalizados",
] as const;

export const catalogHighlights = [
  {
    title: "Linea hogar",
    subtitle: "Cocinas, guardados y dormitorios",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    span: "lg:col-span-2 lg:row-span-2",
    objectPosition: "center 54%",
  },
  {
    title: "Soluciones comerciales",
    subtitle: "Exhibicion, atencion y orden visual",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    span: "",
    objectPosition: "center 50%",
  },
  {
    title: "Diseno a medida",
    subtitle: "Adaptado al espacio y al uso real",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    span: "",
    objectPosition: "center 54%",
  },
  {
    title: "Terminaciones",
    subtitle: "Materiales, lineas limpias y detalle",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2",
    objectPosition: "center 50%",
  },
] as const;

export const projects = [
  {
    title: "Cocina integral",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80",
    objectPosition: "center 52%",
  },
  {
    title: "Guardado de piso a techo",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    objectPosition: "center 48%",
  },
  {
    title: "Vestidor funcional",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    objectPosition: "center 46%",
  },
  {
    title: "Equipamiento comercial",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
    objectPosition: "center 50%",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Consulta inicial",
    description: "Relevamos la necesidad, el espacio y el objetivo del proyecto.",
  },
  {
    number: "02",
    title: "Medidas y propuesta",
    description: "Ordenamos distribucion, materiales y primera propuesta visual.",
  },
  {
    number: "03",
    title: "Diseno y fabricacion",
    description: "Avanzamos con el desarrollo tecnico y la produccion a medida.",
  },
  {
    number: "04",
    title: "Instalacion final",
    description: "Coordinamos la entrega para dejar el espacio listo para usar.",
  },
] as const;

export const trustPoints = [
  "Trabajo a medida",
  "Diseno funcional",
  "Acompanamiento en el proceso",
  "Soluciones para hogares y comercios",
] as const;

export const faqs = [
  {
    question: "Que tipo de proyectos realizan?",
    answer:
      "Trabajamos cocinas, placares, vestidores, muebles de guardado, equipamiento comercial y desarrollos personalizados.",
  },
  {
    question: "La web puede crecer con mas categorias o productos?",
    answer:
      "Si. La estructura esta pensada como base para escalar luego a un catalogo mas amplio o a paginas por linea de producto.",
  },
  {
    question: "Trabajan solo para hogares?",
    answer:
      "No. La propuesta contempla tanto hogares como espacios comerciales que necesitan orden, exhibicion y funcionalidad.",
  },
  {
    question: "Como se inicia una consulta?",
    answer:
      "La forma ideal es centralizar el primer contacto por WhatsApp para entender necesidad, medidas aproximadas y tipo de proyecto.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  if (!site.whatsappNumber) {
    return "#";
  }

  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
