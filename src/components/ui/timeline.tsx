"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  bg: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Central line track */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-warm-brown/10" />
      {/* Animated fill */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-warm-brown via-accent-teal to-accent-green"
      />

      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <TimelineEntry key={item.number} item={item} index={index} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

function TimelineEntry({
  item,
  index,
  progress,
}: {
  item: TimelineItem;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const isLeft = index % 2 === 0;
  const start = index / 4;
  const end = Math.min(start + 0.3, 1);
  const entryOpacity = useTransform(progress, [start, end], [0, 1]);
  const entryY = useTransform(progress, [start, end], [40, 0]);

  const dotStyle = [
    { bg: "bg-warm-brown/15", border: "border-warm-brown/40" },
    { bg: "bg-accent-blue/15", border: "border-accent-blue/40" },
    { bg: "bg-accent-teal/15", border: "border-accent-teal/40" },
    { bg: "bg-accent-green/15", border: "border-accent-green/40" },
  ][index] ?? { bg: "bg-warm-brown/15", border: "border-warm-brown/40" };

  return (
    <motion.div
      style={{ opacity: entryOpacity, y: entryY }}
      className={cn(
        "relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_48px_1fr] gap-4 md:gap-8 items-start"
      )}
    >
      {/* Left content (desktop) */}
      <div className={cn("hidden md:block", isLeft ? "" : "order-3")}>
        {isLeft && <EntryCard item={item} />}
      </div>

      {/* Center dot */}
      <div className={cn("relative flex justify-center", isLeft ? "" : "md:order-2")}>
        <div
          className={cn("w-12 h-12 rounded-full flex items-center justify-center z-10 border-2", dotStyle.bg, dotStyle.border)}
        >
          <item.icon size={22} className={item.color} />
        </div>
      </div>

      {/* Right content (desktop) */}
      <div className={cn("hidden md:block", isLeft ? "order-3" : "")}>
        {!isLeft && <EntryCard item={item} />}
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        <EntryCard item={item} />
      </div>
    </motion.div>
  );
}

function EntryCard({ item }: { item: TimelineItem }) {
  return (
    <div className="glass rounded-2xl p-6 group hover:border-warm-brown/20 transition-all">
      <span className="text-5xl font-bold text-warm-brown/8 absolute top-3 right-4 group-hover:text-warm-brown/15 transition-colors">
        {item.number}
      </span>
      <h3 className="text-lg font-bold text-text-primary mb-2">{item.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
    </div>
  );
}
