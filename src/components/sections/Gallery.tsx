"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { BASE_PATH } from "@/lib/utils";
import { InView, InViewStagger } from "@/components/ui/in-view";

const images = [
  { src: `${BASE_PATH}/images/clientes/1.jpeg`, alt: "Perro sonriendo en asiento de avion Viva" },
  { src: `${BASE_PATH}/images/clientes/2.jpeg`, alt: "Chihuahua con chamarra rosa en ventana de avion" },
  { src: `${BASE_PATH}/images/clientes/3.jpeg`, alt: "Beagle con chaleco de servicio en camioneta" },
  { src: `${BASE_PATH}/images/clientes/4.jpeg`, alt: "Gran danes durmiendo en asientos de avion" },
  { src: `${BASE_PATH}/images/clientes/5.jpeg`, alt: "Mujer con pastor aleman mirando ventana de avion" },
  { src: `${BASE_PATH}/images/clientes/6.jpeg`, alt: "Chihuahuas con chaleco SERVICE DOG en avion" },
  { src: `${BASE_PATH}/images/clientes/7.jpeg`, alt: "Dos perros de servicio en primera clase" },
  { src: `${BASE_PATH}/images/clientes/8.jpeg`, alt: "Dachshund sentado en asiento de avion" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function navigate(dir: 1 | -1) {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  }

  return (
    <section id="galeria" className="relative py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <InView className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium mb-4">
            Galeria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ellos ya viajan con sus{" "}
            <span className="text-gradient">mejores amigos</span>
          </h2>
        </InView>

        {/* Masonry grid */}
        <InViewStagger className="columns-2 md:columns-3 gap-4 space-y-4" staggerDelay={0.08}>
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={{
                hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
              }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-xl"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 3 === 0 ? 800 : i % 3 === 1 ? 600 : 700}
                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-text-primary text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </InViewStagger>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
            >
              <IconX size={28} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(-1);
              }}
              className="absolute left-4 p-2 text-white/60 hover:text-white transition-colors z-10"
            >
              <IconChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(1);
              }}
              className="absolute right-4 p-2 text-white/60 hover:text-white transition-colors z-10"
            >
              <IconChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
