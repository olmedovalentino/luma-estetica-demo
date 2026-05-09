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
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Depilación",
    description: "Servicios prolijos y cómodos para una piel suave y cuidada.",
    accent: "bg-[#efe5dc]",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Perfilado de cejas",
    description: "Definí la mirada con un diseño natural que respeta tus facciones.",
    accent: "bg-[#f7f1ec]",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lifting de pestañas",
    description: "Un efecto sutil y elegante para levantar la mirada sin maquillaje diario.",
    accent: "bg-[#eadfd8]",
    image:
      "https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Tratamientos corporales",
    description: "Opciones para acompañar tu cuidado corporal con foco en bienestar.",
    accent: "bg-[#f3e9e2]",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Belleza de manos",
    description: "Manicuría prolija y delicada para un acabado cuidado y natural.",
    accent: "bg-[#eee8e4]",
    image:
      "https://images.unsplash.com/photo-1521624055850-6f9a4f63c2dc?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Espacio de relajación",
    description: "Un entorno cómodo y cuidado para bajar el ritmo.",
    image:
      "https://images.unsplash.com/photo-1504164996022-09080787b6b3?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Detalles de cuidado",
    description: "Productos, textura y pequeños gestos que acompañan la experiencia.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Ambiente privado",
    description: "Una estética suave y cálida que invita a sentirte cómoda desde que llegás.",
    image:
      "https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=900&q=80",
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
