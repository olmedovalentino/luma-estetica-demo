import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Diseño Amoblamientos | Córdoba",
  description:
    "Demo visual para Diseño Amoblamientos: amoblamientos a medida, proyectos visuales y consultas por WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
