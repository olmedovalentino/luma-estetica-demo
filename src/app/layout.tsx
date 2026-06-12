import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Effeflex | Letras corporeas, neon LED y carteleria",
  description:
    "Effeflex en Cordoba: diseno y fabricacion de letras corporeas, neon LED, carteleria comercial y piezas visuales para marcas.",
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
