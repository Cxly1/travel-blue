"use client";

import { FloatingNavbar } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "Inicio", link: "#inicio" },
  { name: "Nosotros", link: "#nosotros" },
  { name: "Servicios", link: "#servicios" },
  { name: "Proceso", link: "#proceso" },
  { name: "Galeria", link: "#galeria" },
  { name: "FAQ", link: "#faq" },
  { name: "Contacto", link: "#contacto" },
];

export default function Navbar() {
  return <FloatingNavbar navItems={navItems} />;
}
