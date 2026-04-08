"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import { CONTACT } from "@/lib/constants";

export default function ComoLlegarPage() {
  return (
    <div className="pt-20">
      <section className="bg-crema py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Ubicación</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl text-tierra mb-4">
              Cómo llegar
            </h1>
            <p className="font-jost font-light text-tierra/70 max-w-2xl mx-auto">
              Estamos a solo 52 km de Montevideo, sobre Ruta 1. Un viaje corto
              hacia un lugar inolvidable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209741.0!2d-56.3!3d-34.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMwJzAwLjAiUyA1NsKwMTgnMDAuMCJX!5e0!3m2!1ses!2suy!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Ubicación De Entre Casa Gourmet"
              />
            </div>

            {/* Instrucciones */}
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-2xl text-tierra mb-4">
                  Desde Montevideo
                </h2>
                <ol className="space-y-4 font-jost font-light text-tierra/80">
                  <li className="flex gap-3">
                    <span className="font-playfair text-bronce font-medium">1.</span>
                    <span>
                      Tomá Ruta 1 en dirección oeste hacia Colonia.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-playfair text-bronce font-medium">2.</span>
                    <span>
                      Continuá por Ruta 1 durante aproximadamente 50 km.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-playfair text-bronce font-medium">3.</span>
                    <span>
                      En el km 52, buscá nuestra señalización sobre el lado
                      derecho.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-playfair text-bronce font-medium">4.</span>
                    <span>
                      Girá a la derecha y seguí el camino de entrada (500
                      metros). ¡Llegaste!
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bg-sage/50 rounded-2xl p-6">
                <h3 className="font-playfair text-lg text-tierra mb-3">
                  Datos útiles
                </h3>
                <ul className="space-y-2 font-jost font-light text-sm text-tierra/70">
                  <li>⏱️ Tiempo estimado: 45-55 minutos</li>
                  <li>🅿️ Estacionamiento amplio y gratuito</li>
                  <li>📍 {CONTACT.address}</li>
                  <li>📞 {CONTACT.phone}</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-playfair text-lg text-tierra mb-3">
                  ¿Necesitás transporte para tus invitados?
                </h3>
                <p className="font-jost font-light text-sm text-tierra/70 mb-4">
                  Coordinamos servicio de combis y buses desde Montevideo para
                  que nadie se preocupe por el viaje.
                </p>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jost text-sm font-medium text-campo hover:underline"
                >
                  Consultanos por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
