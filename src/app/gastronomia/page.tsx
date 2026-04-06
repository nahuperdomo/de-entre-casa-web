"use client";

import Image from "next/image";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const propuestas = [
  {
    title: "Menú Campo",
    description:
      "Asado de tira, cordero al asador, embutidos artesanales, ensaladas de huerta y guarniciones de estación. Incluye mesa dulce casera.",
    items: ["Asado de tira", "Cordero al asador", "Embutidos artesanales", "Mesa dulce"],
  },
  {
    title: "Menú Gourmet",
    description:
      "Propuesta de autor con entrada, plato principal y postre. Cocina de fusión con productos locales de primera calidad.",
    items: ["Entrada de estación", "Plato principal de autor", "Postre artesanal", "Petit fours"],
  },
  {
    title: "Menú Brunch",
    description:
      "Ideal para eventos diurnos. Mesa fría y caliente, jugos naturales, cafetería completa y repostería casera.",
    items: ["Mesa fría artesanal", "Estación caliente", "Jugos naturales", "Repostería casera"],
  },
];

export default function GastronomiaPage() {

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/food-1.jpg"
          alt="Gastronomía De Entre Casa Gourmet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-tierra/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-crema mb-4">
              Gastronomía
            </h1>
            <p className="font-jost font-light text-crema/80 text-lg">
              Cocina artesanal propia, del campo a tu mesa
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="bg-crema py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionLabel>Nuestra filosofía</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-6">
            Cada plato cuenta una historia
          </h2>
          <p className="font-jost font-light text-tierra/70 text-lg leading-relaxed">
            Trabajamos con productores locales y cocinamos todo en nuestro
            espacio. Desde el pan casero hasta los postres, cada detalle está
            pensado para que la mesa sea el centro de tu celebración. Nuestra
            cocina combina lo mejor de la tradición uruguaya con toques de autor.
          </p>
        </div>
      </section>

      {/* Propuestas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Propuestas</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-tierra">
              Menús a medida para cada evento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {propuestas.map((p, i) => (
              <AnimateInView
                key={p.title}
                delay={i * 0.15}
                className="bg-crema rounded-2xl p-8"
              >
                <h3 className="font-playfair text-2xl text-tierra mb-3">
                  {p.title}
                </h3>
                <p className="font-jost font-light text-tierra/70 text-sm mb-6">
                  {p.description}
                </p>
                <ul className="space-y-2">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-jost text-sm text-tierra/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-bronce" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimateInView>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-jost font-light text-tierra/60 mb-4">
              Todos los menús son personalizables. Consultanos tu idea.
            </p>
            <Button href="/contacto">Pedir propuesta</Button>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="bg-sage py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/images/food-${n}.jpg`}
                  alt={`Plato gourmet ${n}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
