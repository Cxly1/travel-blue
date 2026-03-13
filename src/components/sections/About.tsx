"use client";

import Image from "next/image";
import { BASE_PATH } from "@/lib/utils";
import {
  IconBrain,
  IconStethoscope,
  IconDog,
} from "@tabler/icons-react";
import { InView, InViewStagger, inViewChildVariants, inViewSlideLeft, inViewSlideRight } from "@/components/ui/in-view";
import { SparklesText } from "@/components/ui/sparkles-text";

const credentials = [
  {
    icon: IconBrain,
    title: "Psiquiatra Certificado",
    description: "Evaluacion profesional de apoyo emocional con cedula verificable",
  },
  {
    icon: IconDog,
    title: "Entrenador Profesional",
    description: "Preparacion y certificacion de comportamiento animal",
  },
  {
    icon: IconStethoscope,
    title: "Veterinario Titulado",
    description: "Valoracion de salud y aptitud para viaje de tu mascota",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <InView variants={inViewSlideLeft} transition={{ duration: 0.7, ease: "easeOut" }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-6">
              Nuestra historia
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Inspirados por{" "}
              <SparklesText colors={["#38B6FF", "#00BF63", "#0097B2"]} sparklesCount={5}>
                <span className="text-gradient">Blue & Patronus</span>
              </SparklesText>
            </h2>

            <p className="text-text-muted leading-relaxed mb-4">
              Somos un grupo certificado creado por un Psiquiatra, un Entrenador
              y un Veterinario, todos con sus cedulas profesionales. Nuestra
              mision nacio de una conviccion simple pero poderosa.
            </p>

            <p className="text-text-muted leading-relaxed mb-4">
              Queremos ayudarte a viajar con tu mascota en la cabina de cualquier
              transporte, sin importar la raza, el peso o el tamano, evitando que
              sufran en el maletero &mdash; desde su perdida, asfixia, e incluso la
              muerte.
            </p>

            <p className="text-text-primary font-medium leading-relaxed mb-8">
              A traves de nuestros certificados de apoyo emocional o de servicio,
              tu mascota puede acompanarte en aviones, trenes, autobuses, barcos
              y mas &mdash; con validez nacional e internacional.
            </p>

            {/* Credential cards */}
            <InViewStagger staggerDelay={0.1} className="space-y-3">
              {credentials.map((cred) => (
                <InView
                  key={cred.title}
                  variants={inViewChildVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-bg-card/50 border border-accent-blue/5 hover:border-accent-blue/15 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <cred.icon size={22} className="text-accent-sky" />
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold text-sm">
                      {cred.title}
                    </h4>
                    <p className="text-text-muted text-sm mt-0.5">
                      {cred.description}
                    </p>
                  </div>
                </InView>
              ))}
            </InViewStagger>
          </InView>

          {/* Image side */}
          <InView variants={inViewSlideRight} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-accent-blue/10">
              <Image
                src={`${BASE_PATH}/images/blue.jpeg`}
                alt="Blue - nuestro pitbull inspirador"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <InView
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-left-8 glass rounded-xl px-5 py-3"
            >
              <p className="text-accent-green font-semibold text-sm">
                Profesionales certificados
              </p>
              <p className="text-text-muted text-xs mt-0.5">
                Psiquiatra + Entrenador + Veterinario
              </p>
            </InView>

            {/* Small Patronus image */}
            <InView
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -top-4 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden ring-4 ring-bg-primary shadow-xl"
            >
              <Image
                src={`${BASE_PATH}/images/patronus-inicio.jpeg`}
                alt="Patronus - poodle viajero"
                fill
                className="object-cover"
              />
            </InView>
          </InView>
        </div>
      </div>
    </section>
  );
}
