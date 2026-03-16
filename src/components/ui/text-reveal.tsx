"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={cn("flex flex-wrap justify-center gap-x-2 gap-y-1", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <Word key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </div>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(progress, range, [
    "rgb(168, 154, 138)",
    "rgb(245, 240, 234)",
  ]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="text-2xl md:text-3xl lg:text-4xl font-bold transition-none"
    >
      {word}
    </motion.span>
  );
}
