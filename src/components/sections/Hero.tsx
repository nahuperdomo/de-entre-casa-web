"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMounted } from "@/lib/useIsMounted";
import Button from "@/components/ui/Button";

export default function Hero() {
  const mounted = useIsMounted();

  // En SSR: renderizar visible. En cliente: animar.
  const anim = (delay: number) =>
    mounted
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        }
      : {};

  return (
    <section className="relative min-h-screen bg-crema overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-6">
            <motion.span
              {...anim(0.1)}
              className="inline-block px-4 py-1.5 rounded-full bg-sage text-campo font-jost text-xs font-medium tracking-widest uppercase"
            >
              52 km de Montevideo · Eventos privados
            </motion.span>

            <motion.h1
              {...anim(0.2)}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl text-tierra leading-tight"
            >
              Tu evento especial,{" "}
              <em className="italic text-bronce">
                rodeado de campo y buena mesa
              </em>
            </motion.h1>

            <motion.p
              {...anim(0.3)}
              className="font-jost font-light text-lg text-tierra/70 max-w-lg"
            >
              Celebrá en un espacio único con gastronomía artesanal propia.
              Bodas, cumpleaños y eventos corporativos con sabor a campo
              uruguayo.
            </motion.p>

            <motion.div
              {...anim(0.4)}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button href="/contacto">Reservar fecha</Button>
              <Button variant="outline" href="/galeria">
                Ver galería
              </Button>
            </motion.div>
          </div>

          {/* Grid de fotos */}
          <motion.div
            {...anim(0.5)}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >
            {[1, 2, 3, 4].map((n, i) => (
              <div
                key={n}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[3/4]" : i === 1 ? "aspect-square" : i === 2 ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={`/images/hero-${n}.jpg`}
                  alt={`De Entre Casa Gourmet - imagen ${n}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority={i < 2}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
