"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BASE_PATH } from "@/lib/utils";
import { InView } from "@/components/ui/in-view";

const testimonials = [
  {
    quote:
      "Ya aca podemos entrar con ella a todos lados. Nos quedamos en un hotel y sin problema ni costo extra por ser perro de servicio.",
    name: "Cliente verificado",
    role: "Viajo con su mascota a hotel",
    image: `${BASE_PATH}/images/clientes/satisfecho-1.jpeg`,
  },
  {
    quote:
      "Gracias porque fue verdaderamente especial viajar con ellos asi.",
    name: "Cliente verificado",
    role: "Viajo con sus mascotas",
    image: `${BASE_PATH}/images/clientes/satisfecho-2.jpeg`,
  },
  {
    quote:
      "Muchas gracias por sus servicios, estuvo todo bien sin ninguna complicacion.",
    name: "Cliente verificado",
    role: "Certificado de apoyo emocional",
    image: `${BASE_PATH}/images/clientes/satisfecho-3.jpeg`,
  },
  {
    quote:
      "Muchisimas gracias! Agradezco mucho todo el apoyo.",
    name: "Cliente verificado",
    role: "Certificado de servicio",
    image: `${BASE_PATH}/images/clientes/satisfecho-4.jpeg`,
  },
  {
    quote:
      "Ella pudo volar en la cabina conmigo sin problemas.",
    name: "Cliente verificado",
    role: "Viajo en cabina con su mascota",
    image: `${BASE_PATH}/images/clientes/satisfecho-5.jpeg`,
  },
  {
    quote:
      "Revisaron muy bien el papeleo pero lo aceptaron. Gracias por su ayuda!",
    name: "Cliente verificado",
    role: "Documentacion aceptada en aerolinea",
    image: `${BASE_PATH}/images/clientes/satisfecho-6.jpeg`,
  },
  {
    quote:
      "Mamba fue muy feliz y todo salio perfecto!",
    name: "Cliente verificado",
    role: "Viajo con Mamba",
    image: `${BASE_PATH}/images/clientes/satisfecho-7.jpeg`,
  },
  {
    quote:
      "Muchas gracias por sus servicios, ayer abordamos sin problema.",
    name: "Cliente verificado",
    role: "Abordaje exitoso",
    image: `${BASE_PATH}/images/clientes/satisfecho-8.jpeg`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            Testimonios reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
        </InView>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
