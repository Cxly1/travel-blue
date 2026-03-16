"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import MisionVision from "@/components/sections/MisionVision";

import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTAFooter from "@/components/sections/CTAFooter";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <MisionVision />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTAFooter />
      </main>
    </>
  );
}
