"use client";

import Image from "next/image";
import AnimateInView from "@/components/ui/AnimateInView";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const espacios = [
  {
    title: "Salón principal",
    capacity: "Hasta 200 personas",
    description:
      "Espacio amplio con techos altos y vista al jardín. Climatizado, con iluminación regulable y sistema de sonido integrado.",
    image: "/images/salon-1.jpg",
  },
  {
    title: "Jardín y parque",
    capacity: "Hasta 300 personas",
    description:
      "Espacio al aire libre con árboles añosos, iluminación cálida y sector de fogón. Ideal para ceremonias y cocktails.",
    image: "/images/salon-2.jpg",
  },
  {
    title: "Salón íntimo",
    capacity: "Hasta 50 personas",
    description:
      "Ambiente acogedor para reuniones más reducidas, cumpleaños o eventos corporativos exclusivos.",
    image: "/images/salon-3.jpg",
  },
  {
    title: "Cocina abierta",
    capacity: "Show cooking",
    description:
      "Cocina semi-abierta donde los invitados pueden disfrutar del proceso gastronómico en vivo.",
    image: "/images/salon-4.jpg",
  },
];

export default function ElSalonPage() {

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/salon-1.jpg"
          alt="El Salón De Entre Casa Gourmet"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-tierra/60 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-5xl text-crema mb-4">
              El Salón
            </h1>
            <p className="font-jost font-light text-crema/80 text-lg">
              Espacios versátiles rodeados de naturaleza
            </p>
          </div>
        </div>
      </section>

      {/* Espacios */}
      <section className="bg-crema py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <SectionLabel>Nuestros espacios</SectionLabel>
            <h2 className="font-playfair text-3xl md:text-4xl text-tierra">
              Un lugar para cada momento
            </h2>
          </div>

          <div className="space-y-20">
            {espacios.map((espacio, i) => (
              <AnimateInView
                key={espacio.title}
                delay={i * 0.15}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={espacio.image}
                    alt={espacio.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 rounded-full bg-sage text-campo font-jost text-xs font-medium mb-3">
                    {espacio.capacity}
                  </span>
                  <h3 className="font-playfair text-2xl md:text-3xl text-tierra mb-4">
                    {espacio.title}
                  </h3>
                  <p className="font-jost font-light text-tierra/70 leading-relaxed">
                    {espacio.description}
                  </p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionLabel>Servicios incluidos</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-12">
            Todo lo que necesitás
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🎵", label: "Sonido" },
              { icon: "💡", label: "Iluminación" },
              { icon: "🅿️", label: "Estacionamiento" },
              { icon: "🌿", label: "Jardín" },
              { icon: "❄️", label: "Climatización" },
              { icon: "🍽️", label: "Vajilla" },
              { icon: "👨‍🍳", label: "Cocina propia" },
              { icon: "🛎️", label: "Coordinación" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-sage/50 rounded-2xl p-6 flex flex-col items-center gap-2"
              >
                <span className="text-2xl">{s.icon}</span>
                <span className="font-jost text-sm text-tierra">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/contacto">Agendar visita</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
