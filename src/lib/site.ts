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
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const services = [
  {
    title: "Limpieza facial profunda",
    description:
      "Renová la piel con un tratamiento suave, pensado para limpiar, equilibrar e iluminar el rostro.",
    accent: "bg-[#f5ebe4]",
    icon: "✦",
  },
  {
    title: "Depilación",
    description:
      "Servicios prolijos y cómodos para una piel suave, con atención cuidadosa en cada detalle.",
    accent: "bg-[#efe5dc]",
    icon: "◌",
  },
  {
    title: "Perfilado de cejas",
    description:
      "Definí la mirada con un diseño natural que respeta tus facciones y realza tu expresión.",
    accent: "bg-[#f7f1ec]",
    icon: "⌁",
  },
  {
    title: "Lifting de pestañas",
    description:
      "Un efecto sutil y elegante para levantar la mirada sin necesidad de maquillaje diario.",
    accent: "bg-[#eadfd8]",
    icon: "◠",
  },
  {
    title: "Tratamientos corporales",
    description:
      "Opciones para acompañar tu cuidado corporal con protocolos orientados al bienestar.",
    accent: "bg-[#f3e9e2]",
    icon: "✺",
  },
  {
    title: "Belleza de manos",
    description:
      "Manicuría prolija, limpia y delicada para acompañarte con un acabado cuidado.",
    accent: "bg-[#eee8e4]",
    icon: "⋄",
  },
] as const;

export const aboutText =
  "En Luma Estética creemos que cada tratamiento debe sentirse personal. Combinamos técnica, productos seleccionados y un ambiente tranquilo para que disfrutes una experiencia de cuidado real, sin apuros.";

export const confidencePoints = [
  "Atención personalizada",
  "Productos seleccionados",
  "Ambiente privado",
  "Resultados naturales",
] as const;

export const reserveSteps = [
  {
    step: "1",
    title: "Elegí el tratamiento",
    description: "Explorá los servicios y elegí la opción que mejor se adapte a lo que querés.",
  },
  {
    step: "2",
    title: "Escribinos por WhatsApp",
    description: "Consultamos disponibilidad y te orientamos con cualquier duda antes de reservar.",
  },
  {
    step: "3",
    title: "Coordinamos tu turno",
    description: "Te confirmamos el horario y queda listo tu momento de cuidado.",
  },
] as const;

export const gallery = [
  {
    title: "Cabina facial",
    description: "Un espacio sereno para tratamientos de limpieza e hidratación facial.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tratamientos corporales",
    description: "Ambiente cómodo y ordenado para rutinas orientadas al bienestar.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6f0d6d?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Cuidado de cejas y pestañas",
    description: "Detalles prolijos que acompañan una mirada más definida y natural.",
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

export const testimonials = [
  {
    quote: "Me encantó la atención, súper cálida y profesional. El lugar transmite mucha paz.",
    name: "Julieta M.",
    note: "Tratamiento facial",
  },
  {
    quote: "Fui por cejas y salí feliz. Se nota que cuidan mucho cada detalle.",
    name: "Camila R.",
    note: "Perfilado de cejas",
  },
  {
    quote: "Coordinar el turno por WhatsApp fue fácil y me atendieron puntual.",
    name: "Micaela S.",
    note: "Lifting de pestañas",
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
      "Estamos en Nueva Córdoba, Córdoba Capital. Si querés, también te enviamos la ubicación exacta por WhatsApp.",
  },
  {
    question: "¿Con cuánto tiempo debo reservar?",
    answer:
      "Recomendamos reservar con anticipación, sobre todo si querés horario de tarde o sábado.",
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
  {
    question: "¿Puedo consultar por WhatsApp antes de reservar?",
    answer: "Sí, claro. Es la mejor forma de resolver dudas antes de elegir el servicio ideal para vos.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  const phone = site.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
