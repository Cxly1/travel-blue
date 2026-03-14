"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { cn, BASE_PATH } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";

interface NavItem {
  name: string;
  link: string;
}

export function FloatingNavbar({
  navItems,
  ctaText = "Certifica a tu mascota",
  ctaHref = "#contacto",
}: {
  navItems: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current < 100) {
      setVisible(true);
      setScrolled(false);
    } else {
      setScrolled(true);
      setVisible(current < lastScrollY);
    }
    setLastScrollY(current);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 z-[100] flex items-center justify-between px-4 py-3 rounded-2xl max-w-5xl mx-auto",
            scrolled
              ? "bg-bg-card/80 backdrop-blur-xl border border-warm-brown/15 shadow-lg shadow-warm-brown/5"
              : "bg-transparent"
          )}
        >
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <Image
              src={`${BASE_PATH}/images/logo.jpeg`}
              alt="Travel Blue Ascendio"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-sm font-bold text-text-primary hidden sm:block">
              Travel Blue
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="px-3 py-2 text-sm text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={ctaHref}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-accent-teal hover:bg-accent-teal/90 rounded-xl transition-all hover:shadow-lg hover:shadow-accent-teal/25"
            >
              {ctaText}
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-text-muted hover:text-text-primary"
            >
              {mobileOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.link}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-semibold text-text-primary hover:text-accent-teal transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href={ctaHref}
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-accent-teal rounded-xl"
            >
              {ctaText}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
