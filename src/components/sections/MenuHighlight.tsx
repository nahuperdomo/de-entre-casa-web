"use client";

import Image from "next/image";
import AnimateInView from "@/components/ui/AnimateInView";
import { MENU_HIGHLIGHTS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function MenuHighlight() {
  return (
    <section className="bg-crema py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <AnimateInView direction="right">
            <SectionLabel>Gastronomía</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-8">
              La mesa es el centro de cada celebración
            </h2>

            <div className="space-y-6">
              {MENU_HIGHLIGHTS.map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-bronce flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-playfair italic text-lg text-tierra">
                      {item.name}
                    </p>
                    <p className="font-jost font-light text-sm text-tierra/50">
                      {item.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="secondary" href="/gastronomia">
                Ver propuestas gastronómicas
              </Button>
            </div>
          </AnimateInView>

          {/* Mosaico de fotos de comida */}
          <AnimateInView direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food-1.jpg"
                    alt="Plato gourmet"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food-2.jpg"
                    alt="Entrada artesanal"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food-3.jpg"
                    alt="Postre casero"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/food-4.jpg"
                    alt="Mesa servida"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
