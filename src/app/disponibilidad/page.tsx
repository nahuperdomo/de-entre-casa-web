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
      <section className="bg-crema py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Disponibilidad</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl text-tierra mb-4">
              Consultá fechas disponibles
            </h1>
            <p className="font-jost font-light text-tierra/70 max-w-2xl mx-auto">
              Seleccioná una fecha en el calendario para verificar disponibilidad.
              Las fechas marcadas en rojo ya están reservadas.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <Calendar />
          </div>

          <div className="text-center mt-10">
            <p className="font-jost font-light text-tierra/60 text-sm mb-4">
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
