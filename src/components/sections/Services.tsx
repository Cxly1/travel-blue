"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  IconHeartHandshake,
  IconCertificate,
  IconUserCheck,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconHeartHandshake,
    title: "Certificado de Apoyo Emocional",
    description:
      "Certificacion avalada por psiquiatra con cedula profesional. Valido para vuelos nacionales e internacionales en cualquier aerolinea. Tu mascota viaja en cabina contigo, sin importar su tamano.",
    features: ["Vuelos nacionales", "Vuelos internacionales", "Todas las razas"],
    color: "blue" as const,
  },
  {
    icon: IconCertificate,
    title: "Certificado de Servicio",
    description:
      "Acceso completo a restaurantes, hoteles, tiendas comerciales y todo tipo de transporte. Tu mascota te acompana a donde vayas con documentacion oficial verificable.",
    features: ["Restaurantes y hoteles", "Tiendas comerciales", "Transporte terrestre"],
    color: "green" as const,
  },
  {
    icon: IconUserCheck,
    title: "Asesoria Completa",
    description:
      "Entrenamiento personalizado, documentacion completa y acompanamiento en todo el proceso. Te guiamos paso a paso para que tu mascota y tu viajen sin preocupaciones.",
    features: ["Entrenamiento incluido", "Documentacion completa", "Soporte continuo"],
    color: "sky" as const,
  },
];

const colorMap = {
  blue: {
    bg: "bg-accent-blue/10",
    text: "text-accent-blue",
    border: "border-accent-blue/20",
    glow: "group-hover:shadow-accent-blue/10",
  },
  green: {
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    border: "border-accent-green/20",
    glow: "group-hover:shadow-accent-green/10",
  },
  sky: {
    bg: "bg-accent-sky/10",
    text: "text-accent-sky",
    border: "border-accent-sky/20",
    glow: "group-hover:shadow-accent-sky/10",
  },
};

export default function Services() {
  return (
    <section id="servicios" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            Nuestros servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            La solucion perfecta para{" "}
            <span className="text-gradient">cada necesidad</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = colorMap[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <TiltCard
                  className={`group relative h-full p-6 md:p-8 rounded-2xl bg-bg-card border ${colors.border} hover:border-opacity-50 transition-all duration-300 hover:shadow-2xl ${colors.glow} cursor-default`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-6`}
                  >
                    <service.icon size={28} className={colors.text} />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm text-text-muted"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace("/10", "")} ${colors.text}`}
                          style={{
                            backgroundColor: "currentColor",
                            opacity: 0.5,
                          }}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contacto"
                    className={`inline-flex items-center text-sm font-semibold ${colors.text} hover:underline`}
                  >
                    Mas informacion &rarr;
                  </a>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
