import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kōra Studio Beauty | Nueva Córdoba",
  description:
    "Kōra Studio Beauty en Nueva Córdoba: cosmetología, cosmiatría, limpiezas faciales, cejas, pestañas y masajes con atención personalizada.",
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
