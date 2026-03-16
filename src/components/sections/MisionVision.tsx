"use client";

import {
  IconTarget,
  IconEye,
  IconQuote,
  IconHeart,
  IconShieldCheck,
  IconUsers,
  IconWorld,
  IconLock,
  IconSparkles,
} from "@tabler/icons-react";
import { InView, InViewStagger, inViewChildVariants, inViewSlideLeft, inViewSlideRight } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/text-reveal";

const valores = [
  { icon: IconHeart, label: "Amor por los animales", color: "text-red-400" },
  { icon: IconShieldCheck, label: "Responsabilidad profesional", color: "text-accent-sky" },
  { icon: IconUsers, label: "Empatia", color: "text-accent-green" },
  { icon: IconWorld, label: "Libertad de viajar juntos", color: "text-accent-teal" },
  { icon: IconLock, label: "Seguridad y bienestar", color: "text-warm-brown" },
  { icon: IconSparkles, label: "Compromiso", color: "text-accent-sky" },
];

export default function MisionVision() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-brown/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Eslogan with text reveal */}
        <div className="text-center mb-16 md:mb-20">
          <InView
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 text-accent-teal text-sm font-medium mb-6">
              <IconQuote size={16} />
              Nuestro eslogan
            </div>
          </InView>

          <TextReveal
            text="Viajar juntos es su derecho, hacerlo seguro es nuestra mision"
            className="max-w-3xl mx-auto"
          />
        </div>

        {/* Misión y Visión cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
          <InView variants={inViewSlideLeft} transition={{ duration: 0.7 }}>
            <div className="h-full p-8 rounded-2xl bg-bg-card/60 border border-accent-teal/10 hover:border-accent-teal/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center mb-5">
                <IconTarget size={26} className="text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Mision</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                Facilitar que las personas viajen junto a sus mascotas en la cabina de cualquier
                medio de transporte, sin importar su raza, peso o tamano. A traves de nuestros
                certificados de apoyo emocional o de servicio, garantizamos que los animales
                acompanen a sus humanos de forma segura, evitando situaciones de estres o peligro.
              </p>
              <p className="text-text-muted leading-relaxed text-sm mt-3">
                Trabajamos para que cada viaje sea una experiencia segura, tranquila y llena de
                momentos inolvidables para humanos y mascotas.
              </p>
            </div>
          </InView>

          <InView variants={inViewSlideRight} transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="h-full p-8 rounded-2xl bg-bg-card/60 border border-accent-green/10 hover:border-accent-green/25 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-green/10 flex items-center justify-center mb-5">
                <IconEye size={26} className="text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">Vision</h3>
              <p className="text-text-muted leading-relaxed text-sm">
                Ser una empresa reconocida a nivel nacional e internacional por transformar la
                forma en que las mascotas viajan, promoviendo un mundo donde los animales puedan
                acompanar a sus familias con respeto, seguridad y bienestar.
              </p>
              <p className="text-text-muted leading-relaxed text-sm mt-3">
                Buscamos convertirnos en un referente en asesoria, certificacion y acompanamiento
                para quienes desean compartir sus experiencias de viaje con sus mascotas.
              </p>
            </div>
          </InView>
        </div>

        {/* Valores */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-text-primary">Nuestros valores</h3>
        </InView>

        <InViewStagger staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {valores.map((val) => (
            <motion.div
              key={val.label}
              variants={inViewChildVariants}
              className="flex flex-col items-center text-center p-4 rounded-xl bg-bg-card/40 border border-white/5 hover:border-white/10 transition-colors"
            >
              <val.icon size={24} className={`${val.color} mb-2`} />
              <span className="text-xs text-text-muted leading-tight">{val.label}</span>
            </motion.div>
          ))}
        </InViewStagger>
      </div>
    </section>
  );
}
