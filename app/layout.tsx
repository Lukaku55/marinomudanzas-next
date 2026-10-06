import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/vivo/RevealObserver";
import { empresaSchema, websiteSchema } from "@/lib/cerebro";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mudanzasmarino.com.ar"),
  title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950",
  description: "Empresa de mudanzas en Buenos Aires con más de 80 años de experiencia. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA. Presupuesto sin cargo. Llamanos al 4611-1818.",
  keywords: "mudanzas Buenos Aires, empresa de mudanzas CABA, mudanzas residenciales, mudanzas oficinas, guardamuebles Buenos Aires",
  icons: { icon: "/logo-marino-nuevo.png" },
  openGraph: {
    title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950",
    description: "Más de 80 años moviendo Buenos Aires. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA.",
    url: "https://www.mudanzasmarino.com.ar",
    siteName: "Marino Mudanzas",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950",
    description: "Más de 80 años moviendo Buenos Aires. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Cada dispositivo precarga solo la imagen del hero que va a usar */}
        <link rel="preload" as="image" href="/hero-mudanzas-mobile.webp" type="image/webp" media="(max-width: 768px)" />
        <link rel="preload" as="image" href="/hero-mudanzas.webp" type="image/webp" media="(min-width: 769px)" />
        {/* Habilita las animaciones de aparición solo cuando hay JS */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <JsonLd data={empresaSchema()} />
        <meta name="google-site-verification" content="rk9l8EzMSLczWXE-YqyLiFk9b9lAOG3iaIxc7GHApaQ" />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className={`${cinzel.variable} ${inter.variable}`}>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
