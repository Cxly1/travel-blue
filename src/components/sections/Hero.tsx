"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { IconPaw } from "@tabler/icons-react";
import { BASE_PATH } from "@/lib/utils";
import { SparklesText } from "@/components/ui/sparkles-text";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

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

      {/* Background gradient with parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-warm-brown/8 via-accent-teal/3 to-transparent will-change-transform"
      />

      {/* Parallax floating images — solo Blue y Patronus */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-20 -left-10 md:left-16 w-32 h-40 md:w-48 md:h-60 rounded-2xl overflow-hidden opacity-40 md:opacity-50 rotate-[-8deg] will-change-transform"
      >
        <Image
          src={`${BASE_PATH}/images/patronus-inicio.jpeg`}
          alt="Patronus en ventanilla de avion"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: y4 }}
        className="absolute top-32 -right-5 md:right-20 w-28 h-36 md:w-40 md:h-52 rounded-2xl overflow-hidden opacity-40 md:opacity-50 rotate-[6deg] will-change-transform"
      >
        <Image
          src={`${BASE_PATH}/images/patronus.jpeg`}
          alt="Patronus"
          fill
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-40 left-8 md:left-32 w-24 h-32 md:w-36 md:h-44 rounded-2xl overflow-hidden opacity-25 md:opacity-35 rotate-[4deg] will-change-transform hidden md:block"
      >
        <Image
          src={`${BASE_PATH}/images/blue.jpeg`}
          alt="Blue"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-24 will-change-transform"
      >
        {/* Rising glow under circle */}
        <div className="absolute top-24 md:top-16 w-64 h-64 md:w-80 md:h-80 bg-accent-teal/10 rounded-full blur-[80px] pointer-events-none animate-pulse" />

        {/* Central logo with breathing glow ring */}
        <motion.div
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: "circle(50% at 50% 50%)" }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 shadow-2xl shadow-accent-teal/20"
          style={{
            boxShadow: "0 0 0 4px rgba(0,151,178,0.3), 0 0 30px rgba(56,182,255,0.15), 0 0 60px rgba(104,68,31,0.15)",
            animation: "breathe-ring 3s ease-in-out infinite",
          }}
        >
          <Image
            src={`${BASE_PATH}/images/logo.jpeg`}
            alt="Travel Blue Ascendio Logo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Headline with sparkles on key phrases */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="inline-block mr-3"
          >
            <SparklesText colors={["#38B6FF", "#00BF63", "#0097B2"]} sparklesCount={8}>
              <span className="text-gradient">Travel Blue Ascendio</span>
            </SparklesText>
          </motion.span>
          {["tu", "aliado", "para", "viajar", "con"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.1 + i * 0.08, duration: 0.6, ease: "easeOut" }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.55, duration: 0.6, ease: "easeOut" }}
            className="inline-block mr-3"
          >
            <SparklesText colors={["#38B6FF", "#00BF63", "#0097B2"]} sparklesCount={6}>
              <span className="text-gradient">tu mascota</span>
            </SparklesText>
          </motion.span>
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
          transition={{ delay: 2.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#contacto"
            className="px-8 py-4 bg-accent-teal hover:bg-accent-teal/90 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent-teal/25 hover:scale-105"
          >
            Obtener Certificado
          </a>
          <a
            href="#proceso"
            className="px-8 py-4 border border-warm-brown/30 text-accent-sky hover:bg-warm-brown/10 font-semibold rounded-xl transition-all"
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
