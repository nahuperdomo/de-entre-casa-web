"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import GalleryMosaic from "@/components/sections/GalleryMosaic";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function GaleriaPage() {
  return (
    <div className="pt-20">
      <section className="bg-crema py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <SectionLabel>Galería</SectionLabel>
            <h1 className="font-playfair text-4xl md:text-5xl text-tierra mb-4">
              Momentos que inspiran
            </h1>
            <p className="font-jost font-light text-tierra/70 max-w-2xl mx-auto">
              Cada evento tiene su propia historia. Acá te mostramos algunos de
              los momentos que nos llenan de orgullo.
            </p>
          </div>

          <GalleryMosaic images={GALLERY_IMAGES} columns={3} />
        </div>
      </section>
    </div>
  );
}
