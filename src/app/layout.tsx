import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Belleza Mediterránea | Centro de Córdoba",
  description:
    "Belleza Mediterránea en el Centro de Córdoba: estética facial y corporal, masajes, depilación, Terapia Postural Activa y bienestar con atención personalizada.",
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
