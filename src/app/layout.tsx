import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Refacciones Luques | Refacciones y mantenimiento en Cordoba",
  description:
    "Refacciones Luques: pintura, impermeabilizacion, electricidad, plomeria y mantenimiento para casas y comercios en Cordoba Capital y alrededores.",
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
