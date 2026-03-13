"use client";

import { FAQAccordion } from "@/components/ui/faq-accordion";
import { InView } from "@/components/ui/in-view";

const faqItems = [
  {
    question: "Es valido el certificado en todas las aerolineas?",
    answer:
      "Si, nuestro certificado es valido a nivel nacional e internacional. Esta avalado por profesionales con cedula (Psiquiatra, Entrenador y Veterinario). Sin embargo, es importante que verifiques los requisitos internos de cada aerolinea, ya que algunas solicitan formularios adicionales para viajar con animal de apoyo emocional o de servicio.",
  },
  {
    question: "Mi perro es grande, puede viajar en cabina?",
    answer:
      "Absolutamente. Nuestro certificado permite que tu mascota viaje en cabina sin importar su raza, peso o tamano. Hemos ayudado a pitbulls, pastores alemanes, gran daneses y muchas razas mas a viajar comoda y seguramente en cabina junto a sus duenos.",
  },
  {
    question: "Cuanto tiempo tarda el proceso?",
    answer:
      "El proceso es rapido y eficiente. Desde el primer contacto hasta recibir tu certificado, generalmente toma pocos dias. Te asesoramos paso a paso para que todo sea lo mas sencillo posible.",
  },
  {
    question: "Funciona para viajes internacionales?",
    answer:
      "Si, nuestro certificado tiene validez internacional. Sin embargo, cada pais tiene requisitos especificos para el ingreso de mascotas (vacunas, carnet, documentos adicionales), por lo que te recomendamos investigar los requisitos del pais de destino. Nosotros te orientamos en el proceso.",
  },
  {
    question: "Que necesito para empezar?",
    answer:
      "Solo necesitas contactarnos por WhatsApp y contarnos sobre tu mascota y tu plan de viaje. Nuestro equipo te guiara en todo el proceso. Es muy importante que tu mascota tenga todas sus vacunas y desparasitaciones al dia, ya que el transporte elegido te pedira su carnet.",
  },
  {
    question: "Que pasa si la aerolinea no acepta mi certificado?",
    answer:
      "Nuestros certificados estan avalados por profesionales certificados con cedulas profesionales verificables. En caso de cualquier inconveniente, nuestro equipo te brinda soporte y asesoria para resolver la situacion. Tambien te orientamos sobre los formularios internos que cada aerolinea puede solicitar.",
  },
  {
    question: "Sirve para otros transportes ademas de aviones?",
    answer:
      "Si. Nuestro certificado te permite acceder a todo tipo de transporte: avion, tren, autobus, barco y mas. Ademas, con el certificado de servicio puedes ingresar a restaurantes, hoteles y tiendas comerciales con tu mascota.",
  },
  {
    question: "Mi mascota necesita algun entrenamiento especial?",
    answer:
      "Contamos con un entrenador profesional certificado en nuestro equipo que puede evaluar y preparar a tu mascota si es necesario. El comportamiento adecuado es importante para una experiencia de viaje exitosa, y te asesoramos sobre lo que tu mascota necesita.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/3 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6">
        <InView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-sky text-sm font-medium mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Resolvemos tus <span className="text-gradient">dudas</span>
          </h2>
        </InView>

        <InView
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FAQAccordion items={faqItems} />
        </InView>
      </div>
    </section>
  );
}
