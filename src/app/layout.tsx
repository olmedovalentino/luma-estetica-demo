import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Sens | Pilates, postura y bienestar en Cordoba",
  description:
    "Estudio Sens en Cordoba Capital: pilates postural, pilates mix, kinesiopilates, formacion y movimiento consciente con acompanamiento profesional.",
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
