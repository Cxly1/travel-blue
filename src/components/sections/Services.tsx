"use client";

import { motion } from "framer-motion";
import {
  IconHeartHandshake,
  IconCertificate,
  IconUserCheck,
  IconArrowRight,
} from "@tabler/icons-react";
import { InView, InViewStagger } from "@/components/ui/in-view";

const services = [
  {
    icon: IconHeartHandshake,
    title: "Certificado de Apoyo Emocional",
    description:
      "Certificacion avalada por psiquiatra con cedula profesional. Valido para vuelos nacionales e internacionales en cualquier aerolinea.",
    features: ["Vuelos nacionales", "Vuelos internacionales", "Todas las razas"],
    accent: "#0097B2",
    accentClass: "text-accent-teal",
    bgClass: "bg-accent-teal/8",
    borderHover: "hover:border-accent-teal/30",
  },
  {
    icon: IconCertificate,
    title: "Certificado de Servicio",
    description:
      "Acceso a restaurantes, hoteles, tiendas y todo tipo de transporte. Tu mascota te acompana con documentacion oficial verificable.",
    features: ["Restaurantes y hoteles", "Tiendas comerciales", "Transporte terrestre"],
    accent: "#00BF63",
    accentClass: "text-accent-green",
    bgClass: "bg-accent-green/8",
    borderHover: "hover:border-accent-green/30",
  },
  {
    icon: IconUserCheck,
    title: "Asesoria Completa",
    description:
      "Entrenamiento personalizado, documentacion completa y acompanamiento en todo el proceso para que viajen sin preocupaciones.",
    features: ["Entrenamiento incluido", "Documentacion completa", "Soporte continuo"],
    accent: "#38B6FF",
    accentClass: "text-accent-sky",
    bgClass: "bg-accent-sky/8",
    borderHover: "hover:border-accent-sky/30",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <InView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-warm-brown/10 text-warm-brown text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            La solucion perfecta para{" "}
            <span className="text-gradient">cada necesidad</span>
          </h2>
        </InView>

        <InViewStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className={`group relative p-6 md:p-8 rounded-2xl bg-bg-card/80 border border-warm-brown/8 ${service.borderHover} transition-all duration-300`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.bgClass} flex items-center justify-center mb-5`}
              >
                <service.icon size={24} className={service.accentClass} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2.5 text-sm text-text-muted"
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: service.accent, opacity: 0.6 }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.accentClass} opacity-70 group-hover:opacity-100 transition-opacity`}
              >
                Mas informacion
                <IconArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </InViewStagger>
      </div>
    </section>
  );
}
