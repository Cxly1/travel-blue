import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Blue Ascendio | Certifica a tu mascota para viajar en cabina",
  description:
    "Somos un grupo certificado por Psiquiatra, Entrenador y Veterinario. Ayudamos a tu mascota a viajar en cabina de cualquier transporte, sin importar raza, peso o tamaño.",
  keywords: [
    "certificado apoyo emocional mascotas",
    "viajar con mascota en cabina",
    "perro en avión",
    "certificado de servicio animal",
    "travel blue ascendio",
  ],
  openGraph: {
    title: "Travel Blue Ascendio",
    description: "Tu mejor amigo merece viajar contigo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
