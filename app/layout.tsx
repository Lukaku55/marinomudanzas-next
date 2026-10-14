import type { Metadata, Viewport } from "next";
import { Archivo, Geist } from "next/font/google";
import { EMPRESA, PUBLICAR } from "@/content/site";
import "./globals.css";

const display = Archivo({ variable: "--font-display", subsets: ["latin"], axes: ["wdth"], display: "swap" });
const body = Geist({ variable: "--font-body", subsets: ["latin"], display: "swap" });

const descripcion =
  "Marino Mudanzas: mudanzas residenciales, de oficinas y guardamuebles en CABA y Gran Buenos Aires, con base en Flores. Pedí tu presupuesto sin cargo.";

export const metadata: Metadata = {
  metadataBase: new URL(EMPRESA.url),
  title: "Mudanzas en Buenos Aires | Marino Mudanzas",
  description: descripcion,
  openGraph: {
    title: "Marino Mudanzas | Mudanzas en Buenos Aires",
    description: descripcion,
    locale: "es_AR",
    type: "website",
    images: [{ url: "/fotos/camion-contrapicado.jpg", alt: "Camión de Marino Mudanzas" }],
  },
  // Se controla con PUBLICAR en content/site.ts.
  robots: { index: PUBLICAR, follow: PUBLICAR },
  // Verificación de Search Console del sitio publicado: se conserva para no perder la propiedad al migrar.
  verification: { google: "rk9l8EzMSLczWXE-YqyLiFk9b9lAOG3iaIxc7GHApaQ" },
};

export const viewport: Viewport = { themeColor: "#0b1728", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${display.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <head>
        {/* Activa los revelados con scroll; si el JavaScript no llega a cargar, a los 4 s se muestra todo igual. */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js");setTimeout(function(){if(!window.__revelar)document.documentElement.classList.remove("js")},4000)` }} />
      </head>
      <body>
        <a href="#contenido" className="btn btn-primario fixed left-3 top-3 z-[80] -translate-y-24 focus-visible:translate-y-0">
          Saltar al contenido
        </a>
        {children}
        <div className="grano" aria-hidden="true" />
      </body>
    </html>
  );
}
