import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Diseño Amoblamientos | Amoblamientos a medida en Córdoba",
  description:
    "Diseño Amoblamientos diseña y fabrica cocinas, placares, vestidores y muebles personalizados para hogares en Córdoba, Argentina.",
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
