"use client";

import { motion } from "framer-motion";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BASE_PATH } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Gracias a Travel Blue, mi pitbull viajo conmigo en cabina por primera vez. Nunca pense que fuera posible con un perro de su tamano. El proceso fue rapido y el certificado funciono sin ningun problema.",
    name: "Andrea M.",
    role: "Viajo con su pitbull a Cancun",
    image: `${BASE_PATH}/images/clientes/1.jpeg`,
  },
  {
    quote:
      "Pense que era imposible llevar a mi gran danes en el avion. Travel Blue me demostro lo contrario. Mi perro viajo tranquilo a mi lado y el personal de la aerolinea acepto todo sin complicaciones.",
    name: "Carlos R.",
    role: "Viajo con su gran danes a CDMX",
    image: `${BASE_PATH}/images/clientes/4.jpeg`,
  },
  {
    quote:
      "Mis dos chihuahuas ahora me acompanan a todos lados, no solo en vuelos sino tambien en restaurantes y hoteles. El certificado de servicio cambio nuestra vida por completo.",
    name: "Laura G.",
    role: "Viaja con sus chihuahuas a nivel nacional",
    image: `${BASE_PATH}/images/clientes/6.jpeg`,
  },
  {
    quote:
      "Tenia mucho miedo de mandar a mi pastor aleman en la bodega del avion. Con el certificado de Travel Blue pudo viajar en cabina conmigo. Se porto increible y yo viaje tranquila.",
    name: "Sofia P.",
    role: "Viajo con su pastor aleman a Monterrey",
    image: `${BASE_PATH}/images/clientes/5.jpeg`,
  },
  {
    quote:
      "El equipo de Travel Blue es super profesional. Me asesoraron en todo, desde el entrenamiento hasta los documentos que necesitaba. Mi dachshund ahora es un experto viajero.",
    name: "Roberto L.",
    role: "Viaja frecuentemente con su dachshund",
    image: `${BASE_PATH}/images/clientes/8.jpeg`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Lo que dicen nuestros{" "}
            <span className="text-gradient">clientes</span>
          </h2>
        </motion.div>

        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
