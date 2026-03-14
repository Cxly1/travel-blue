"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  IconBrandWhatsapp,
  IconClipboardCheck,
  IconFileCertificate,
  IconPlane,
} from "@tabler/icons-react";
import { InView, InViewStagger, inViewChildVariants } from "@/components/ui/in-view";

const steps = [
  {
    number: "01",
    title: "Contactanos",
    description:
      "Escribenos por WhatsApp y cuentanos sobre tu mascota y tu plan de viaje. Te asesoramos sin costo.",
    icon: IconBrandWhatsapp,
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    number: "02",
    title: "Evaluacion",
    description:
      "Nuestro equipo de profesionales evalua tu caso y determina el tipo de certificado que necesitas.",
    icon: IconClipboardCheck,
    color: "text-accent-sky",
    bg: "bg-accent-sky/10",
  },
  {
    number: "03",
    title: "Certificacion",
    description:
      "Recibe tu certificado oficial de apoyo emocional o de servicio, avalado por profesionales con cedula.",
    icon: IconFileCertificate,
    color: "text-accent-blue",
    bg: "bg-accent-blue/10",
  },
  {
    number: "04",
    title: "Viaja libre",
    description:
      "Tu mascota viaja contigo en cabina. Sin importar raza, peso o tamano. Disfruten juntos cada aventura.",
    icon: IconPlane,
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="proceso" ref={containerRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <InView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-sky/10 text-accent-sky text-sm font-medium mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Solo <span className="text-gradient">4 pasos</span> para viajar juntos
          </h2>
        </InView>

        {/* Progress bar */}
        <div className="relative mb-12 hidden md:block">
          <div className="h-1 bg-bg-card rounded-full" />
          <motion.div
            style={{ width: progressWidth }}
            className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-warm-brown via-accent-teal to-accent-green"
          />
        </div>

        {/* Steps */}
        <InViewStagger className="grid grid-cols-1 md:grid-cols-4 gap-6" staggerDelay={0.12}>
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="glass rounded-2xl p-6 text-center relative group hover:border-warm-brown/20 transition-all"
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl ${step.bg} flex items-center justify-center mb-4`}
              >
                <step.icon size={28} className={step.color} />
              </div>

              <span className="text-4xl font-bold text-bg-card/80 absolute top-3 right-4 group-hover:text-warm-brown/10 transition-colors">
                {step.number}
              </span>

              <h3 className="text-lg font-bold text-text-primary mb-2">
                {step.title}
              </h3>

              <p className="text-text-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </InViewStagger>
      </div>
    </section>
  );
}
