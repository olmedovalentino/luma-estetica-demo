import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-editorial",
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Creativo Muebles | Muebles a medida en Cordoba",
  description:
    "Creativo Muebles disena y fabrica cocinas, placares, vestidores y muebles personalizados para hogares en Cordoba, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
