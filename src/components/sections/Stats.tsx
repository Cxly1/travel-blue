"use client";

import { motion } from "framer-motion";
import { CountAnimation } from "@/components/ui/count-animation";
import { IconPaw, IconPlane, IconWorld, IconStar } from "@tabler/icons-react";

const stats = [
  {
    value: 2500,
    prefix: "+",
    suffix: "",
    label: "Mascotas certificadas",
    icon: IconPaw,
    decimals: 0,
  },
  {
    value: 15,
    prefix: "+",
    suffix: "",
    label: "Aerolineas compatibles",
    icon: IconPlane,
    decimals: 0,
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Validez internacional",
    icon: IconWorld,
    decimals: 0,
  },
  {
    value: 4.9,
    prefix: "+",
    suffix: "",
    label: "Calificacion promedio",
    icon: IconStar,
    decimals: 1,
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay: i * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-4"
              >
                <stat.icon size={28} className="text-accent-blue" />
              </motion.div>

              <span className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                <CountAnimation
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </span>

              <span className="text-sm text-text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
