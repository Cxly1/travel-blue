"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

interface InViewProps {
  children: React.ReactNode;
  variants?: Variants;
  transition?: object;
  viewOptions?: { once?: boolean; margin?: `${number}px` };
  className?: string;
  as?: "div" | "section" | "span";
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function InView({
  children,
  variants = defaultVariants,
  transition = { duration: 0.6, ease: "easeOut" as const },
  viewOptions,
  className = "",
  as = "div",
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" as `${number}px`, ...viewOptions });
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </Component>
  );
}

export function InViewStagger({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" as `${number}px` });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const inViewChildVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const inViewSlideLeft: Variants = {
  hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export const inViewSlideRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export const inViewScale: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(6px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};
