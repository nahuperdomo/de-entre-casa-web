"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote:
      "La comida fue espectacular y el lugar tiene una magia especial. Nuestros invitados no paraban de felicitarnos por la elección.",
    author: "María & Gonzalo",
    event: "Boda - Marzo 2024",
  },
  {
    quote:
      "Organizamos un evento corporativo y superó todas las expectativas. El equipo es súper profesional y la gastronomía de primer nivel.",
    author: "Laura Méndez",
    event: "Evento corporativo - Mayo 2024",
  },
  {
    quote:
      "Los quince de mi hija fueron un sueño. El salón decorado, la comida increíble y la atención impecable. ¡Gracias totales!",
    author: "Claudia Rodríguez",
    event: "Quinceañero - Julio 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sage py-20 md:py-28 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-campo/5 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-bronce/5 blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionLabel>Testimonios</SectionLabel>
        <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-4">
          Lo que dicen quienes nos eligieron
        </h2>
        <div className="decorative-line mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimateInView key={t.author} delay={i * 0.15}>
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-500 h-full flex flex-col">
                <svg
                  className="w-8 h-8 text-bronce/30 mb-4 mx-auto flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>
                <p className="font-jost font-light text-tierra/80 leading-relaxed mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="decorative-line mx-auto mb-4 opacity-50" />
                  <p className="font-playfair italic text-tierra">{t.author}</p>
                  <p className="font-jost font-light text-xs text-tierra/50 mt-1">
                    {t.event}
                  </p>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
