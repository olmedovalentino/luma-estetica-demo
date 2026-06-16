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
    image:
      "https://images.unsplash.com/photo-1629119882643-804ea903f8db?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Neon LED personalizado",
    description: "Frases, logos y formas luminosas.",
    image:
      "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carteleria comercial",
    description: "Fachadas, interiores y vidrieras.",
    image:
      "https://images.unsplash.com/photo-1675297656417-2eed7e3aaec1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carteles acrilicos",
    description: "Terminacion limpia y moderna.",
    image:
      "https://images.unsplash.com/photo-1750767303706-7d93c2d0f03f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carteleria en polifan",
    description: "Liviana, versatil y visual.",
    image:
      "https://images.unsplash.com/photo-1604066867775-43f48e3957d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Salientes boton y pastilla",
    description: "Presencia desde la vereda.",
    image:
      "https://images.unsplash.com/photo-1695189623052-b25432fd9886?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Carteles luminosos",
    description: "Luz LED para destacar.",
    image:
      "https://images.unsplash.com/photo-1571470804270-af65e8b3d106?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Diseno y fabricacion",
    description: "De la idea a la pieza final.",
    image:
      "https://images.unsplash.com/photo-1661298889141-14da83db9821?auto=format&fit=crop&w=900&q=80",
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
  {
    title: "Letras corporeas LED",
    image:
      "https://images.unsplash.com/photo-1645911449646-c0fcb364b268?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Neon personalizado",
    image:
      "https://images.unsplash.com/photo-1709316457778-7fdd7f84bf27?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Cartel luminoso exterior",
    image:
      "https://images.unsplash.com/photo-1587018710457-e3dbc199bab3?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Carteleria para local",
    image:
      "https://images.unsplash.com/photo-1550711273-843b73169f58?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Saliente comercial",
    image:
      "https://images.unsplash.com/photo-1637666639858-e914177a9146?auto=format&fit=crop&w=1100&q=80",
  },
  {
    title: "Logo en acrilico",
    image:
      "https://images.unsplash.com/photo-1760895223972-57b1d858d77e?auto=format&fit=crop&w=1100&q=80",
  },
] as const;

export const process = [
  "Idea",
  "Asesoramiento",
  "Propuesta",
  "Fabricacion",
  "Entrega",
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
