"use client";

import {
  IconBrandWhatsapp,
  IconClipboardCheck,
  IconFileCertificate,
  IconPlane,
} from "@tabler/icons-react";
import { InView } from "@/components/ui/in-view";
import { Timeline } from "@/components/ui/timeline";

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
  return (
    <section id="proceso" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <InView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-sky/10 text-accent-sky text-sm font-medium mb-4">
            Proceso simple
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Solo <span className="text-gradient">4 pasos</span> para viajar juntos
          </h2>
        </InView>

        <Timeline items={steps} />
      </div>
    </section>
  );
}
