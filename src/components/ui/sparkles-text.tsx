"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
}

function generateSparkle(colors: string[]): Sparkle {
  return {
    id: crypto.randomUUID(),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 2,
    scale: Math.random() * 0.5 + 0.5,
  };
}

export function SparklesText({
  children,
  colors = ["#38B6FF", "#00BF63", "#004AAD"],
  sparklesCount = 8,
  className = "",
}: {
  children: React.ReactNode;
  colors?: string[];
  sparklesCount?: number;
  className?: string;
}) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const initSparkles = useCallback(() => {
    return Array.from({ length: sparklesCount }, () => generateSparkle(colors));
  }, [sparklesCount, colors]);

  useEffect(() => {
    setSparkles(initSparkles());
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) =>
          Math.random() > 0.7 ? generateSparkle(colors) : s
        )
      );
    }, 1500);
    return () => clearInterval(interval);
  }, [colors, initSparkles]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.svg
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, sparkle.scale, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2,
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1,
            }}
            className="pointer-events-none absolute z-20"
            style={{ left: sparkle.x, top: sparkle.y }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0L9.4 6.6L16 8L9.4 9.4L8 16L6.6 9.4L0 8L6.6 6.6L8 0Z"
              fill={sparkle.color}
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </span>
  );
}
