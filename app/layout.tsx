import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mudanzas Marino | Empresa de Mudanzas en Buenos Aires desde 1950",
  description: "Empresa de mudanzas en Buenos Aires con mas de 80 anos de experiencia. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA. Presupuesto sin cargo. Tel 4611-1818",
  keywords: "mudanzas Buenos Aires, empresa de mudanzas CABA, mudanzas residenciales, mudanzas oficinas, guardamuebles Buenos Aires",
  openGraph: {
    title: "Mudanzas Marino | Empresa de Mudanzas en Buenos Aires desde 1950",
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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
