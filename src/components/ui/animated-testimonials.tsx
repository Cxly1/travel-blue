"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
}) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(next, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, next]);

  const randomRotations = testimonials.map((_, i) => {
    const seed = i * 7 + 3;
    return (seed % 20) - 10;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      {/* Image stack */}
      <div className="relative h-72 md:h-96 w-full">
        <AnimatePresence>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, rotate: randomRotations[i] }}
              animate={{
                opacity: i === active ? 1 : 0.7,
                scale: i === active ? 1 : 0.95,
                rotate: i === active ? 0 : randomRotations[i],
                zIndex: i === active ? 40 : testimonials.length - Math.abs(active - i),
                y: i === active ? 0 : (i - active) * 8,
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="absolute inset-0 origin-bottom"
            >
              <Image
                src={t.image}
                alt={t.name}
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-6">
              &ldquo;{testimonials[active].quote.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}&rdquo;
            </motion.blockquote>
            <p className="text-accent-blue font-semibold text-lg">
              {testimonials[active].name}
            </p>
            <p className="text-text-muted text-sm">
              {testimonials[active].role}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-bg-card border border-accent-blue/20 text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-all"
          >
            <IconChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full bg-bg-card border border-accent-blue/20 text-text-muted hover:text-accent-blue hover:border-accent-blue/50 transition-all"
          >
            <IconChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
