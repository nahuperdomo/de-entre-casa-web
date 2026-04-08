// Datos de contacto y configuración del sitio

export const SITE_NAME = "De Entre Casa Gourmet";
export const SITE_DESCRIPTION =
  "Salón de eventos gourmet a 57km de Montevideo. Bodas, cumpleaños y eventos empresariales con cocina artesanal propia.";

export const CONTACT = {
  phone: "+5988519430",
  email: "info@deentrecasagourmet.com.uy",
  address: "Ruta 5 km 57, Canelones, Uruguay",
  hours: "Lunes a Sábado, 9:00 – 19:00",
  instagram: "https://instagram.com/deentrecasagourmet",
  facebook: "https://facebook.com/deentrecasagourmet",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5988519430",
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      "Hola! Quiero consultar disponibilidad para un evento"
    )}`;
  },
};

export const NAV_LINKS = [
  { label: "Eventos", href: "/eventos" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "El salón", href: "/el-salon" },
  { label: "Galería", href: "/galeria" },
  { label: "Cómo llegar", href: "/como-llegar" },
  { label: "Contacto", href: "/contacto" },
];

export const STATS = [
  { value: "+200", label: "personas de capacidad" },
  { value: "57 km", label: "desde Montevideo" },
  { value: "100%", label: "cocina propia" },
];

export const MENU_HIGHLIGHTS = [
  { name: "Cordero al asador de campo", category: "Plato principal" },
  { name: "Tabla artesanal de quesos y embutidos", category: "Entrada" },
  { name: "Tiramisú con dulce de leche casero", category: "Postre" },
  { name: "Risotto de hongos silvestres", category: "Plato principal" },
];

export const EVENT_TYPES = [
  {
    title: "Bodas",
    description:
      "Tu día soñado en un entorno natural con gastronomía de autor. Nos encargamos de cada detalle.",
    image: "/images/gallery-1.jpg",
  },
  {
    title: "Cumpleaños",
    description:
      "Festejá rodeado de verde con la mejor mesa. Propuestas para todas las edades.",
    image: "/images/gallery-2.jpg",
  },
  {
    title: "Eventos corporativos",
    description:
      "Jornadas de trabajo, team building y cenas empresariales en un ambiente único.",
    image: "/images/gallery-3.jpg",
  },
  {
    title: "Quinceañeros",
    description:
      "Una fiesta inolvidable con ambientación personalizada y menú a medida.",
    image: "/images/gallery-4.jpg",
  },
];

export const GALLERY_CATEGORIES = [
  "Todos",
  "Bodas",
  "Gastronomía",
  "Salón",
  "Detalles",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_IMAGES: {
  src: string;
  alt: string;
  category: GalleryCategory;
}[] = [
  { src: "/images/gallery-1.jpg", alt: "Decoración de boda con arco dorado y torta", category: "Bodas" },
  { src: "/images/gallery-2.jpg", alt: "Mesa elegante junto a la chimenea", category: "Bodas" },
  { src: "/images/gallery-3.jpg", alt: "Parrillada gourmet con fuego vivo", category: "Gastronomía" },
  { src: "/images/gallery-4.jpg", alt: "Preparación de tablas de fiambres y quesos", category: "Gastronomía" },
  { src: "/images/gallery-5.jpg", alt: "Salón principal con mesas y techo de madera", category: "Salón" },
  { src: "/images/gallery-6.jpg", alt: "Fogón exterior con vista al salón iluminado", category: "Salón" },
  { src: "/images/gallery-7.jpg", alt: "Vinos junto a la chimenea de ladrillos", category: "Detalles" },
  { src: "/images/gallery-8.jpg", alt: "Lámparas artesanales y mesas preparadas", category: "Detalles" },
  { src: "/images/gallery-9.jpg", alt: "Mesa de torta nupcial con luces cálidas", category: "Bodas" },
  { src: "/images/gallery-10.jpg", alt: "Parrilla de ladrillos vista desde el comedor", category: "Gastronomía" },
  { src: "/images/gallery-11.jpg", alt: "Restaurante de día con vista al jardín", category: "Salón" },
  { src: "/images/gallery-12.jpg", alt: "Mesa romántica para dos con velas y luces", category: "Detalles" },
];
