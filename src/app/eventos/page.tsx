"use client";

import Image from "next/image";
import AnimateInView from "@/components/ui/AnimateInView";
import { EVENT_TYPES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function EventosPage() {

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/gallery-1.jpg"
          alt="Eventos De Entre Casa Gourmet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-tierra/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-crema mb-4">
              Eventos
            </h1>
            <p className="font-jost font-light text-crema/80 text-lg">
              Cada celebración es única, como vos
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de evento */}
      <section className="bg-crema py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>Nuestras propuestas</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-tierra">
              ¿Qué estás celebrando?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_TYPES.map((event, i) => (
              <AnimateInView
                key={event.title}
                delay={i * 0.15}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tierra/80 via-tierra/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-playfair text-2xl text-crema mb-2">
                    {event.title}
                  </h3>
                  <p className="font-jost font-light text-crema/80 text-sm">
                    {event.description}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>¿Cómo funciona?</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-tierra">
              De la idea a la celebración
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Consultá",
                desc: "Contactanos por WhatsApp o formulario con tu idea y fecha tentativa.",
              },
              {
                step: "02",
                title: "Visitá",
                desc: "Te invitamos a conocer el espacio y charlar sobre tu evento.",
              },
              {
                step: "03",
                title: "Planificamos",
                desc: "Armamos juntos la propuesta gastronómica y todos los detalles.",
              },
              {
                step: "04",
                title: "Celebrá",
                desc: "Nosotros nos encargamos de todo. Vos solo disfrutá.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 items-start"
              >
                <span className="font-playfair text-3xl text-bronce/30 flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-playfair text-xl text-tierra mb-1">
                    {item.title}
                  </h3>
                  <p className="font-jost font-light text-tierra/70">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/contacto">Empezar ahora</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
