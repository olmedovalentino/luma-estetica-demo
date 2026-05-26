import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Paredes Aire | Cordoba",
  description:
    "Instalacion, service, mantenimiento y diagnostico tecnico de aires acondicionados en Cordoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
