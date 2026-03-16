"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowEffectProps {
  colors: string[];
  mode?: "breathe" | "colorShift";
  className?: string;
}

export function GlowEffect({ colors, mode = "breathe", className }: GlowEffectProps) {
  const controls = useAnimation();

  useEffect(() => {
    if (mode === "breathe") {
      controls.start({
        opacity: [0, 0.6, 0],
        scale: [0.8, 1.2, 0.8],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    } else {
      controls.start({
        background: colors.map(
          (c) => `radial-gradient(circle, ${c}40 0%, transparent 70%)`
        ),
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [colors, mode, controls]);

  return (
    <motion.div
      animate={controls}
      className={cn(
        "absolute inset-0 rounded-2xl pointer-events-none",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${colors[0]}30 0%, transparent 70%)`,
        filter: "blur(20px)",
      }}
    />
  );
}
