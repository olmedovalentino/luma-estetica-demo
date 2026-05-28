import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lima Limón Deco | Decoración textil y tapicería en Pilar",
  description:
    "Lima Limón Deco realiza cortinas a medida, tapicería, sillones, alfombras, fundas, almohadones y limpieza de tapizados en Pilar, Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={sans.variable}>{children}</body>
    </html>
  );
}
