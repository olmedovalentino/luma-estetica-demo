import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Urani Studio | Nails & Lashes en Córdoba",
  description:
    "Urani Studio en el Centro de Córdoba: uñas, soft gel, esculpidas, nail art y pestañas con atención personalizada y reserva previa.",
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
