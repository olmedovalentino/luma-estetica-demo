export const site = {
  businessName: "Effeflex",
  tagline: "Letras corporeas, neon LED y carteleria comercial",
  shortPitch:
    "Carteles, letras y neon LED para marcas que quieren verse mas.",
  whatsappNumber: "5493512195377",
  whatsappLabel: "+54 351 219-5377",
  whatsappMessage: "Hola Effeflex, queria consultar por un presupuesto",
  instagram: "https://www.instagram.com/effeflex/",
  instagramLabel: "@effeflex",
  address: "Cordoba, Argentina",
  scope: "De Cordoba a todo el pais",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Trabajos", href: "#trabajos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const benefits = [
  {
    title: "Mayor visibilidad",
    description: "Mas miradas.",
  },
  {
    title: "Imagen mas profesional",
    description: "Mejor presencia.",
  },
  {
    title: "Diseno personalizado",
    description: "A medida.",
  },
] as const;

export const services = [
  {
    title: "Letras corporeas",
    description: "Volumen e impacto para tu marca.",
  },
  {
    title: "Neon LED personalizado",
    description: "Frases, logos y formas luminosas.",
  },
  {
    title: "Carteleria comercial",
    description: "Fachadas, interiores y vidrieras.",
  },
  {
    title: "Carteles acrilicos",
    description: "Terminacion limpia y moderna.",
  },
  {
    title: "Carteleria en polifan",
    description: "Liviana, versatil y visual.",
  },
  {
    title: "Salientes boton y pastilla",
    description: "Presencia desde la vereda.",
  },
  {
    title: "Carteles luminosos",
    description: "Luz LED para destacar.",
  },
  {
    title: "Diseno y fabricacion",
    description: "De la idea a la pieza final.",
  },
] as const;

export const businessTypes = [
  "Locales comerciales",
  "Bares y restaurantes",
  "Tiendas de ropa",
  "Peluquerias y barberias",
  "Gimnasios",
  "Oficinas",
  "Stands y eventos",
  "Marcas personales",
] as const;

export const portfolio = [
  "Letras corporeas LED",
  "Neon personalizado",
  "Cartel luminoso exterior",
  "Carteleria para local",
  "Saliente comercial",
  "Logo en acrilico",
] as const;

export const process = [
  "Idea",
  "Asesoramiento",
  "Propuesta",
  "Fabricacion",
  "Entrega",
] as const;

export const differentiators = [
  "Fabricacion personalizada",
  "Tecnologia LED de bajo consumo",
  "Materiales pensados para interior y exterior",
  "Presupuesto gratuito por WhatsApp",
] as const;

export const faqs = [
  {
    question: "Hacen letras corporeas personalizadas?",
    answer:
      "Si. Se fabrican a medida segun logo, tamano, material e iluminacion.",
  },
  {
    question: "Fabrican neon LED a medida?",
    answer:
      "Si. Para frases, logos, simbolos, vidrieras, interiores y eventos.",
  },
  {
    question: "Hacen carteles para exterior?",
    answer:
      "Si. Se define material e iluminacion segun ubicacion y uso.",
  },
  {
    question: "Puedo pedir presupuesto por WhatsApp?",
    answer:
      "Si. Envia logo, medidas aproximadas, referencias y fotos del lugar.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
