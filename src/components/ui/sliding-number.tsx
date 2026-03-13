"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform, AnimatePresence } from "framer-motion";

function Digit({ value, className = "" }: { value: string; className?: string }) {
  return (
    <div className={`relative inline-flex h-[1em] overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function SlidingNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 28,
  });

  const display = useTransform(spring, (v) => {
    if (decimals > 0) return v.toFixed(decimals);
    return Math.floor(v).toLocaleString();
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, spring, value]);

  useEffect(() => {
    const unsub = display.on("change", (v) => setDisplayValue(v));
    return unsub;
  }, [display]);

  const chars = displayValue.split("");

  return (
    <span ref={ref} className="tabular-nums inline-flex items-baseline">
      {prefix && <span>{prefix}</span>}
      {chars.map((char, i) => (
        <Digit key={`${i}-${char}`} value={char} />
      ))}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
