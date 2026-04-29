import type { Metadata } from "next";
import "./globals.css";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950 | Tel 4611-1818",
  description: "Empresa de mudanzas en Buenos Aires con +80 anos de experiencia. Mudanzas residenciales, oficinas y guardamuebles en CABA y GBA. Presupuesto sin cargo. Llamanos: 4611-1818",
  keywords: "mudanzas Buenos Aires, empresa de mudanzas CABA, mudanzas residenciales, mudanzas oficinas, guardamuebles Buenos Aires",
  icons: { icon: "/logo-marino-nuevo.png" },
  openGraph: {
    title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950 | Tel 4611-1818",
    description: "Mas de 80 anos moviendo Buenos Aires. Mudanzas residenciales, oficinas y guardamuebles en CABA y GBA.",
    url: "https://www.mudanzasmarino.com.ar",
    siteName: "Marino Mudanzas",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cinzel.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
