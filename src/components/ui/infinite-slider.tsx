"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SliderImage {
  src: string;
  alt: string;
}

export function InfiniteSlider({
  images,
  speed = 30,
  gap = 16,
  height = 200,
  className = "",
}: {
  images: SliderImage[];
  speed?: number;
  gap?: number;
  height?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);

  const doubled = [...images, ...images];

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2);
    }
  }, [images]);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        ref={containerRef}
        animate={
          contentWidth > 0
            ? { x: [0, -contentWidth] }
            : undefined
        }
        transition={
          contentWidth > 0
            ? {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: speed,
                  ease: "linear",
                },
              }
            : undefined
        }
        className="flex will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative shrink-0 rounded-xl overflow-hidden"
            style={{ height: `${height}px`, width: `${height * 1.3}px` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes={`${height * 1.3}px`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
