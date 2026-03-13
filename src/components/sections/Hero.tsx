"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { IconPaw } from "@tabler/icons-react";
import { BASE_PATH } from "@/lib/utils";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = "Tu mejor amigo merece viajar contigo".split(" ");

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Paw prints background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="paw-particle absolute"
            style={{
              left: `${10 + i * 12}%`,
              animationDuration: `${12 + i * 3}s`,
              animationDelay: `${i * 1.5}s`,
            }}
          >
            <IconPaw size={20} />
          </div>
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />

      {/* Parallax floating images */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 -left-10 md:left-16 w-32 h-40 md:w-48 md:h-60 rounded-2xl overflow-hidden opacity-40 md:opacity-50 rotate-[-8deg]"
      >
        <Image
          src={`${BASE_PATH}/images/patronus.jpeg`}
          alt="Patronus"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute top-32 -right-5 md:right-20 w-28 h-36 md:w-40 md:h-52 rounded-2xl overflow-hidden opacity-40 md:opacity-50 rotate-[6deg]"
      >
        <Image
          src={`${BASE_PATH}/images/clientes/2.jpeg`}
          alt="Cliente feliz"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-40 left-8 md:left-32 w-24 h-32 md:w-36 md:h-44 rounded-2xl overflow-hidden opacity-30 md:opacity-40 rotate-[4deg]"
      >
        <Image
          src={`${BASE_PATH}/images/clientes/5.jpeg`}
          alt="Cliente feliz"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-24"
      >
        {/* Central image */}
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(50% at 50% 50%)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 ring-4 ring-accent-blue/30 shadow-2xl shadow-accent-blue/20"
        >
          <Image
            src={`${BASE_PATH}/images/blue.jpeg`}
            alt="Blue - Pitbull viajero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Headline word-by-word */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.8 + i * 0.12, duration: 0.5 }}
              className={`inline-block mr-3 ${
                word === "mejor" || word === "contigo"
                  ? "text-gradient"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mb-10 leading-relaxed"
        >
          Certificados de apoyo emocional para que tu mascota viaje en cabina,
          sin importar su raza, peso o tamano
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent-blue/25 hover:scale-105"
          >
            Obtener Certificado
          </a>
          <a
            href="#proceso"
            className="px-8 py-4 border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 font-semibold rounded-xl transition-all"
          >
            Conoce el proceso
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
