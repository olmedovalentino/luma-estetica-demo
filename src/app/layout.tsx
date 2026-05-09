import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Estetica | Cordoba Capital",
  description:
    "Luma Estetica en Cordoba Capital: tratamientos faciales, corporales, depilacion, cejas, pestanas y belleza integral.",
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
