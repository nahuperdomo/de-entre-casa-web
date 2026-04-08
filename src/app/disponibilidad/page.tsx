import SectionLabel from "@/components/ui/SectionLabel";
import Calendar from "@/components/sections/Calendar";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Disponibilidad | De Entre Casa Gourmet",
  description:
    "Consultá las fechas disponibles para tu evento en De Entre Casa Gourmet.",
};

export default function DisponibilidadPage() {
  return (
    <div className="pt-20">
      <section className="bg-crema py-20 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-campo blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full bg-bronce blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Disponibilidad</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl text-tierra mb-4">
              Consultá fechas disponibles
            </h1>
            <div className="decorative-line mx-auto mb-6" />
            <p className="font-jost font-light text-tierra/70 max-w-2xl mx-auto leading-relaxed">
              Seleccioná una fecha en el calendario para verificar disponibilidad.
              Las fechas marcadas en rojo ya están reservadas.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-500">
            <Calendar />
          </div>

          <div className="text-center mt-12">
            <p className="font-jost font-light text-tierra/50 text-sm mb-5 tracking-wide">
              ¿Tenés una fecha en mente? Contactanos directamente
            </p>
            <Button href="/contacto" variant="outline">
              Ir a contacto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
