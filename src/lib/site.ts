export const site = {
  businessName: "Effeflex",
  tagline: "Letras corporeas, neon LED y carteleria comercial",
  shortPitch:
    "Disenamos y fabricamos piezas visuales para que negocios, locales y marcas se vean mas profesionales y llamen mas la atencion.",
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
    description: "Piezas pensadas para destacar tu local de dia y de noche.",
  },
  {
    title: "Imagen mas profesional",
    description: "Carteleria prolija, consistente y alineada a la identidad de tu marca.",
  },
  {
    title: "Diseno personalizado",
    description: "Materiales, iluminacion, escala y terminacion definidos para cada proyecto.",
  },
] as const;

export const services = [
  {
    title: "Letras corporeas",
    description: "Volumen, presencia y terminaciones a medida para logos y nombres comerciales.",
  },
  {
    title: "Neon LED personalizado",
    description: "Frases, isotipos y formas luminosas con alto impacto visual y bajo consumo.",
  },
  {
    title: "Carteleria comercial",
    description: "Soluciones para fachadas, interiores, vidrieras y comunicacion de marca.",
  },
  {
    title: "Carteles acrilicos",
    description: "Piezas limpias, modernas y resistentes para marcas que buscan precision.",
  },
  {
    title: "Carteleria en polifan",
    description: "Opciones livianas, versatiles y visuales para interiores, stands y locales.",
  },
  {
    title: "Salientes boton y pastilla",
    description: "Carteles salientes para ganar presencia desde la vereda y orientar clientes.",
  },
  {
    title: "Carteles luminosos",
    description: "Frentes y piezas con iluminacion LED para que tu negocio no pase desapercibido.",
  },
  {
    title: "Diseno y fabricacion",
    description: "Acompanamiento integral desde la idea hasta la pieza terminada.",
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
  "Nos contas tu idea o necesidad",
  "Te asesoramos con materiales y estilo",
  "Preparamos una propuesta",
  "Fabricamos tu cartel a medida",
  "Coordinamos entrega o instalacion",
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
      "Si. Trabajamos letras corporeas a medida segun logo, tamano, material, terminacion e iluminacion necesaria.",
  },
  {
    question: "Fabrican neon LED a medida?",
    answer:
      "Si. Podemos producir neon LED personalizado para frases, logos, simbolos, interiores, vidrieras y eventos.",
  },
  {
    question: "Trabajan para locales comerciales?",
    answer:
      "Si. Realizamos carteleria para comercios, gastronomia, tiendas, oficinas, gimnasios, stands y marcas personales.",
  },
  {
    question: "Hacen carteles para exterior?",
    answer:
      "Si. Te asesoramos con materiales e iluminacion segun la ubicacion, exposicion y objetivo del cartel.",
  },
  {
    question: "Puedo pedir presupuesto por WhatsApp?",
    answer:
      "Si. Es el canal mas directo para enviar medidas, referencias, logo, fotos del espacio y recibir orientacion.",
  },
  {
    question: "Trabajan solo en Cordoba?",
    answer:
      "Estamos en Cordoba y trabajamos proyectos con alcance a todo el pais, coordinando cada caso segun la pieza.",
  },
  {
    question: "Que datos necesito enviar para pedir una cotizacion?",
    answer:
      "Idealmente logo o texto, medidas aproximadas, lugar de instalacion, tipo de uso, referencias visuales y fotos del espacio.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
