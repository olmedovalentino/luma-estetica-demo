export const site = {
  businessName: "Luma Estética",
  tagline: "Cuidado facial, corporal y belleza integral en Córdoba",
  shortPitch:
    "Un espacio cálido y profesional para regalarte un momento de bienestar. Reservá tu turno por WhatsApp de forma simple.",
  whatsappNumber: "5493512345678",
  whatsappMessage: "Hola Luma, quiero consultar por un turno.",
  address: "Nueva Córdoba, Córdoba Capital",
  city: "Córdoba Capital",
  hours: "Lunes a viernes de 9:00 a 19:00 | Sábados de 9:00 a 13:00",
  mapsUrl: "https://www.google.com/maps",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre Luma", href: "#sobre" },
    { label: "Galería", href: "#galeria" },
    { label: "Preguntas", href: "#faq" },
    { label: "Ubicación", href: "#ubicacion" },
  ],
} as const;

export const services = [
  {
    title: "Limpieza facial profunda",
    description: "Renová la piel con un tratamiento suave que limpia, equilibra e ilumina.",
    accent: "bg-[#f5ebe4]",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Depilación",
    description: "Servicios prolijos y cómodos para una piel suave y cuidada.",
    accent: "bg-[#efe5dc]",
    image:
      "https://images.unsplash.com/photo-1620916566395-1fcb4b0a5f2f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Perfilado de cejas",
    description: "Definí la mirada con un diseño natural que respeta tus facciones.",
    accent: "bg-[#f7f1ec]",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifting de pestañas",
    description: "Un efecto sutil y elegante para levantar la mirada sin maquillaje diario.",
    accent: "bg-[#eadfd8]",
    image:
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tratamientos corporales",
    description: "Opciones para acompañar tu cuidado corporal con foco en bienestar.",
    accent: "bg-[#f3e9e2]",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6f0d6d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Belleza de manos",
    description: "Manicuría prolija y delicada para un acabado cuidado y natural.",
    accent: "bg-[#eee8e4]",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export const aboutText =
  "En Luma Estética creemos que cada tratamiento debe sentirse personal. Combinamos atención personalizada, productos seleccionados y un ambiente tranquilo para que disfrutes una experiencia de cuidado real, sin apuros.";

export const confidencePoints = [
  "Atención personalizada",
  "Productos seleccionados",
  "Ambiente privado",
  "Resultados naturales",
] as const;

export const gallery = [
  {
    title: "Cabina facial",
    description: "Luz suave, orden y una atmósfera serena para tratamientos faciales.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tratamientos corporales",
    description: "Un entorno cómodo y cuidado para rutinas de bienestar.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6f0d6d?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Cejas y pestañas",
    description: "Detalles prolijos que acompañan una mirada más definida.",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Espacio de relajación",
    description: "Una estética suave y cálida que invita a bajar el ritmo.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    span: "lg:col-span-2",
  },
] as const;

export const faqs = [
  {
    question: "¿Cómo reservo un turno?",
    answer: "Escribinos por WhatsApp y te compartimos la disponibilidad para coordinar tu visita.",
  },
  {
    question: "¿Dónde están ubicadas?",
    answer:
      "Estamos en Nueva Córdoba, Córdoba Capital. También podemos enviarte la ubicación exacta por WhatsApp.",
  },
  {
    question: "¿Qué tratamiento me conviene si es mi primera vez?",
    answer:
      "Podemos orientarte por mensaje para recomendarte una opción según lo que quieras mejorar o cuidar.",
  },
  {
    question: "¿Aceptan efectivo o transferencia?",
    answer: "Sí, podés consultar por los medios de pago disponibles antes de reservar tu turno.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  const phone = site.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
