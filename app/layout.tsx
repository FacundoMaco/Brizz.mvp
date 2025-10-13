import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Briz | Healthier than breathing.",
  description: "Siente el ritual, no el daño. Ordena Briz hoy.",
  metadataBase: new URL("https://briz.example") // replace with production URL
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  );
}
