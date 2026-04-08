import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import MenuHighlight from "@/components/sections/MenuHighlight";
import Testimonials from "@/components/sections/Testimonials";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <MenuHighlight />

      {/* CTA intermedio */}
      <section className="bg-white py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-bronce blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-campo blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <SectionLabel>Tu evento soñado</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-4">
            Cada celebración merece un lugar{" "}
            <em className="italic text-bronce">especial</em>
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="font-jost font-light text-tierra/70 mb-8 leading-relaxed">
            Bodas, cumpleaños, eventos corporativos y quinceañeros. Nos
            encargamos de todo para que vos solo disfrutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/eventos">Ver tipos de eventos</Button>
            <Button variant="outline" href="/el-salon">
              Conocer el salón
            </Button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA final */}
      <section className="bg-campo py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-campo via-transparent to-tierra/30" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-crema mb-4">
            ¿Listo para tu próximo evento?
          </h2>
          <div className="decorative-line mx-auto mb-6 opacity-40" />
          <p className="font-jost font-light text-crema/80 mb-8 leading-relaxed">
            Consultá disponibilidad y armemos juntos una propuesta a tu medida.
          </p>
          <Button href="/disponibilidad" className="!bg-crema !text-campo hover:!bg-white hover:!shadow-lg">
            Consultar fecha
          </Button>
        </div>
      </section>
    </>
  );
}
