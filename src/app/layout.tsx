import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const primaryFont = Manrope({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Norte Equipa | Equipamiento y muebles a medida",
  description:
    "Norte Equipa desarrolla muebles y equipamiento a medida para hogares y comercios en Cordoba, con una propuesta visual mas clara, moderna y profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={primaryFont.variable}>{children}</body>
    </html>
  );
}
