export const site = {
  businessName: "Luma Estetica",
  tagline: "Cuidado facial, corporal y belleza integral en Cordoba",
  shortPitch:
    "Un espacio calido y profesional para regalarte un momento de bienestar. Reserva tu turno por WhatsApp de forma simple.",
  whatsappNumber: "5493512345678",
  whatsappMessage: "Hola Luma, quiero consultar por un turno.",
  address: "Nueva Cordoba, Cordoba Capital",
  city: "Cordoba Capital",
  hours: "Lunes a viernes de 9:00 a 19:00 | Sabados de 9:00 a 13:00",
  mapsUrl: "https://www.google.com/maps",
  navigation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre Luma", href: "#sobre" },
    { label: "Galeria", href: "#galeria" },
    { label: "Ubicacion", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export const services = [
  {
    title: "Limpieza facial profunda",
    description:
      "Renova la piel con un tratamiento suave, pensado para limpiar, equilibrar e iluminar el rostro.",
    accent: "bg-[#f5ebe4]",
  },
  {
    title: "Depilacion",
    description:
      "Servicios prolijos y comodos para una piel suave, con atencion cuidadosa en cada detalle.",
    accent: "bg-[#efe5dc]",
  },
  {
    title: "Perfilado de cejas",
    description:
      "Define la mirada con un diseno natural que respeta tus facciones y realza tu expresion.",
    accent: "bg-[#f7f1ec]",
  },
  {
    title: "Lifting de pestanas",
    description:
      "Un efecto sutil y elegante para levantar la mirada sin necesidad de maquillaje diario.",
    accent: "bg-[#eadfd8]",
  },
  {
    title: "Tratamientos corporales",
    description:
      "Opciones para acompanar tu cuidado corporal con protocolos orientados al bienestar.",
    accent: "bg-[#f3e9e2]",
  },
  {
    title: "Belleza de manos",
    description:
      "Manicuria prolija, limpia y delicada para acompanarte con un acabado cuidado.",
    accent: "bg-[#eee8e4]",
  },
] as const;

export const aboutText =
  "En Luma Estetica combinamos atencion personalizada, productos de calidad y un ambiente calido para que cada visita sea una experiencia de cuidado.";

export const confidencePoints = [
  "Atencion personalizada",
  "Productos seleccionados",
  "Ambiente privado",
  "Resultados naturales",
] as const;

export const reserveSteps = [
  {
    step: "1",
    title: "Elegi el tratamiento",
    description: "Explora los servicios y elegi la opcion que mejor se adapte a lo que queres.",
  },
  {
    step: "2",
    title: "Escribinos por WhatsApp",
    description: "Consultamos disponibilidad y te orientamos con cualquier duda antes de reservar.",
  },
  {
    step: "3",
    title: "Coordinamos tu turno",
    description: "Te confirmamos el horario y ya queda listo tu momento de cuidado.",
  },
] as const;

export const gallery = [
  {
    title: "Cabina facial",
    description: "Un espacio sereno para tratamientos de limpieza e hidratacion facial.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Tratamientos corporales",
    description: "Ambiente comodo y ordenado para rutinas orientadas al bienestar.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6f0d6d?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Cuidado de cejas y pestanas",
    description: "Detalles prolijos que acompanian una mirada mas definida y natural.",
    image:
      "https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=900&q=80",
    span: "",
  },
  {
    title: "Espacio de relajacion",
    description: "Una estetica suave y calida que invita a bajar el ritmo.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    span: "lg:col-span-2",
  },
] as const;

export const testimonials = [
  {
    quote: "Me encanto la atencion, super calida y profesional. El lugar transmite mucha paz.",
    name: "Julieta M.",
    note: "Tratamiento facial",
  },
  {
    quote: "Fui por cejas y sali feliz. Se nota que cuidan mucho cada detalle.",
    name: "Camila R.",
    note: "Perfilado de cejas",
  },
  {
    quote: "Coordinar el turno por WhatsApp fue facil y me atendieron puntual.",
    name: "Micaela S.",
    note: "Lifting de pestanas",
  },
] as const;

export const faqs = [
  {
    question: "Como reservo un turno?",
    answer: "Escribinos por WhatsApp y te compartimos la disponibilidad para coordinar tu visita.",
  },
  {
    question: "Donde estan ubicadas?",
    answer:
      "Estamos en Nueva Cordoba, Cordoba Capital. Si queres, tambien te enviamos la ubicacion exacta por WhatsApp.",
  },
  {
    question: "Con cuanto tiempo debo reservar?",
    answer:
      "Recomendamos reservar con anticipacion, sobre todo si queres horario de tarde o sabado.",
  },
  {
    question: "Que tratamiento me conviene si es mi primera vez?",
    answer:
      "Podemos orientarte por mensaje para recomendarte una opcion segun lo que quieras mejorar o cuidar.",
  },
  {
    question: "Aceptan efectivo o transferencia?",
    answer: "Si, podes consultar por los medios de pago disponibles antes de reservar tu turno.",
  },
  {
    question: "Puedo consultar por WhatsApp antes de reservar?",
    answer:
      "Si, claro. Es la mejor forma de resolver dudas antes de elegir el servicio ideal para vos.",
  },
] as const;

export function buildWhatsappUrl(message: string) {
  const phone = site.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
