"use client";

import { motion } from "framer-motion";
import { SlidingNumber } from "@/components/ui/sliding-number";
import { IconPaw, IconPlane, IconWorld, IconStar } from "@tabler/icons-react";
import { InViewStagger, inViewChildVariants } from "@/components/ui/in-view";

const stats = [
  {
    value: 2500,
    prefix: "+",
    suffix: "",
    label: "Mascotas certificadas",
    icon: IconPaw,
    decimals: 0,
    iconColor: "text-accent-sky",
    iconBg: "bg-accent-sky/10",
  },
  {
    value: 15,
    prefix: "+",
    suffix: "",
    label: "Aerolineas compatibles",
    icon: IconPlane,
    decimals: 0,
    iconColor: "text-accent-blue",
    iconBg: "bg-accent-blue/10",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Validez internacional",
    icon: IconWorld,
    decimals: 0,
    iconColor: "text-accent-green",
    iconBg: "bg-accent-green/10",
  },
  {
    value: 4.9,
    prefix: "+",
    suffix: "",
    label: "Calificacion promedio",
    icon: IconStar,
    decimals: 1,
    iconColor: "text-accent-teal",
    iconBg: "bg-accent-teal/10",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <InViewStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4" staggerDelay={0.12}>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={inViewChildVariants}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200 } },
                }}
                className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center mb-4`}
              >
                <stat.icon size={28} className={stat.iconColor} />
              </motion.div>

              <span className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                <SlidingNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>

              <span className="text-sm text-text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </InViewStagger>
      </div>
    </section>
  );
}
