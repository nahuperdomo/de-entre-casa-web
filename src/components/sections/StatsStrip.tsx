"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import { STATS } from "@/lib/constants";

export default function StatsStrip() {
  return (
    <section className="bg-tierra py-14 md:py-18 relative overflow-hidden">
      {/* Decoración sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-40 h-40 rounded-full bg-lino blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 rounded-full bg-bronce blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((stat, i) => (
            <AnimateInView key={stat.label} delay={i * 0.15}>
              <div className="group">
                <p className="font-playfair text-4xl md:text-5xl text-crema tracking-tight">
                  {stat.value}
                </p>
                <div className="decorative-line mx-auto mt-3 mb-2 opacity-30" />
                <p className="font-jost font-light text-sm text-crema/60 tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
