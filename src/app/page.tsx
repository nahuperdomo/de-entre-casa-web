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
      <section className="bg-white py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <SectionLabel>Tu evento soñado</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl text-tierra mb-4">
            Cada celebración merece un lugar{" "}
            <em className="italic text-bronce">especial</em>
          </h2>
          <p className="font-jost font-light text-tierra/70 mb-8">
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
      <section className="bg-campo py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl text-crema mb-4">
            ¿Listo para tu próximo evento?
          </h2>
          <p className="font-jost font-light text-crema/80 mb-8">
            Consultá disponibilidad y armemos juntos una propuesta a tu medida.
          </p>
          <Button href="/contacto" className="bg-crema text-campo hover:bg-white">
            Reservar fecha
          </Button>
        </div>
      </section>
    </>
  );
}
