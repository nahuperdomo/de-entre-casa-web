"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/sections/ContactForm";
import { CONTACT } from "@/lib/constants";

export default function ContactoPage() {
  return (
    <div className="pt-20">
      <section className="bg-crema py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Contacto</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl text-tierra mb-4">
              Hablemos de tu evento
            </h1>
            <p className="font-jost font-light text-tierra/70 max-w-2xl mx-auto">
              Completá el formulario y te respondemos a la brevedad, o
              contactanos directamente por WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Formulario */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm">
              <ContactForm />
            </div>

            {/* Info lateral */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp CTA */}
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white rounded-2xl p-6 hover:bg-[#20BA5C] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-jost font-medium">WhatsApp</span>
                </div>
                <p className="font-jost font-light text-sm text-white/90">
                  Respuesta inmediata. Escribinos y te asesoramos.
                </p>
              </a>

              {/* Datos de contacto */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-playfair text-lg text-tierra mb-4">
                  Datos de contacto
                </h3>
                <ul className="space-y-3 font-jost font-light text-sm text-tierra/70">
                  <li className="flex gap-3">
                    <span className="text-bronce">📍</span>
                    {CONTACT.address}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronce">📞</span>
                    {CONTACT.phone}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronce">✉️</span>
                    {CONTACT.email}
                  </li>
                  <li className="flex gap-3">
                    <span className="text-bronce">🕐</span>
                    {CONTACT.hours}
                  </li>
                </ul>
              </div>

              {/* Redes */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-playfair text-lg text-tierra mb-4">
                  Seguinos en redes
                </h3>
                <div className="flex gap-3">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage text-campo font-jost text-sm hover:bg-campo hover:text-white transition-all"
                  >
                    Instagram
                  </a>
                  <a
                    href={CONTACT.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-sage text-campo font-jost text-sm hover:bg-campo hover:text-white transition-all"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
