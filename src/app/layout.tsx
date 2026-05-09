import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Estética | Córdoba Capital",
  description:
    "Luma Estética en Córdoba Capital: tratamientos faciales, corporales, depilación, cejas, pestañas y belleza integral.",
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
