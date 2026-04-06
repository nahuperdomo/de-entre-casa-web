"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import { STATS } from "@/lib/constants";

export default function StatsStrip() {
  return (
    <section className="bg-tierra py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((stat, i) => (
            <AnimateInView key={stat.label} delay={i * 0.15}>
              <p className="font-playfair text-4xl text-crema">{stat.value}</p>
              <p className="font-jost font-light text-sm text-crema/70 mt-1">
                {stat.label}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  );
}
