"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconPaw,
  IconHeart,
} from "@tabler/icons-react";

export default function CTAFooter() {
  return (
    <>
      {/* CTA Section */}
      <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-accent-blue/15 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-16 h-16 mx-auto rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-8"
            >
              <IconPaw size={32} className="text-accent-blue" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tu mascota merece{" "}
              <span className="text-gradient">viajar a tu lado</span>
            </h2>

            <p className="text-text-muted text-lg mb-10 max-w-xl mx-auto">
              No dejes que tu mejor amigo viaje en la bodega. Certificalo hoy y
              viajen juntos, seguros y felices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/523334056022"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-500/25"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <IconBrandWhatsapp size={22} />
                </motion.span>
                Escribenos por WhatsApp
              </motion.a>

              <motion.a
                href="https://www.instagram.com/travelblueascendio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 font-semibold rounded-xl transition-colors"
              >
                <IconBrandInstagram size={22} />
                Siguenos en Instagram
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="Travel Blue Ascendio"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold text-text-primary">
                    Travel Blue Ascendio
                  </p>
                  <p className="text-xs text-text-muted">
                    Certificacion de mascotas
                  </p>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                Grupo certificado con cedulas profesionales. Ayudamos a tu
                mascota a viajar en cabina de cualquier transporte.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">
                Links rapidos
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Inicio", href: "#inicio" },
                  { name: "Nosotros", href: "#nosotros" },
                  { name: "Servicios", href: "#servicios" },
                  { name: "Proceso", href: "#proceso" },
                  { name: "Galeria", href: "#galeria" },
                  { name: "FAQ", href: "#faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-accent-blue transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact / Social / Legal */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">
                Contacto
              </h4>
              <div className="space-y-2 mb-4">
                <a
                  href="https://wa.me/523334056022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-green-400 transition-colors"
                >
                  <IconBrandWhatsapp size={18} />
                  33 3405 6022
                </a>
                <br />
                <a
                  href="https://wa.me/5255473311​12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-green-400 transition-colors"
                >
                  <IconBrandWhatsapp size={18} />
                  55 4733 1112
                </a>
              </div>
              <a
                href="https://www.instagram.com/travelblueascendio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-blue transition-colors"
              >
                <IconBrandInstagram size={18} />
                @travelblueascendio
              </a>

              <div className="mt-6 p-4 rounded-xl bg-bg-card/50 border border-accent-blue/5">
                <p className="text-xs text-text-muted leading-relaxed">
                  Grupo certificado con cedulas profesionales verificables.
                  Psiquiatra, Entrenador Profesional y Veterinario Titulado.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-text-muted">
              &copy; {new Date().getFullYear()} Travel Blue Ascendio. Todos los derechos reservados.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-text-muted">
              Hecho con <IconHeart size={14} className="text-red-400" /> por mascotas, para mascotas
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
