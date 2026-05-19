import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farías Aires Acondicionados | Córdoba, Argentina",
  description:
    "Instalación, service, mantenimiento, recarga de gas, venta de equipos y calderas en Córdoba Capital y alrededores.",
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
