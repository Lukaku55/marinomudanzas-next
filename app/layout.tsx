import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
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
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Marino Mudanzas",
  "image": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png",
  "url": "https://www.mudanzasmarino.com.ar",
  "telephone": "+541146111818",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Juan Bautista Alberdi 2968",
    "addressLocality": "Flores",
    "addressRegion": "Buenos Aires",
    "postalCode": "C1407",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -34.6346,
    "longitude": -58.4685
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "18:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "370",
    "bestRating": "5",
    "worstRating": "1"
  },
  "areaServed": [
    { "@type": "City", "name": "Buenos Aires", "sameAs": "https://www.wikidata.org/wiki/Q1486" },
    { "@type": "AdministrativeArea", "name": "Palermo" },
    { "@type": "AdministrativeArea", "name": "Belgrano" },
    { "@type": "AdministrativeArea", "name": "Caballito" },
    { "@type": "AdministrativeArea", "name": "Recoleta" },
    { "@type": "AdministrativeArea", "name": "Flores" },
    { "@type": "AdministrativeArea", "name": "Almagro" },
    { "@type": "AdministrativeArea", "name": "Villa Urquiza" },
    { "@type": "AdministrativeArea", "name": "San Telmo" },
    { "@type": "AdministrativeArea", "name": "Boedo" },
    { "@type": "AdministrativeArea", "name": "Villa Crespo" },
    { "@type": "AdministrativeArea", "name": "Núñez" },
    { "@type": "AdministrativeArea", "name": "Colegiales" },
    { "@type": "AdministrativeArea", "name": "Chacarita" },
    { "@type": "AdministrativeArea", "name": "Saavedra" },
    { "@type": "AdministrativeArea", "name": "Villa Devoto" },
    { "@type": "AdministrativeArea", "name": "Liniers" },
    { "@type": "AdministrativeArea", "name": "Mataderos" },
    { "@type": "AdministrativeArea", "name": "Balvanera" },
    { "@type": "AdministrativeArea", "name": "Montserrat" },
    { "@type": "AdministrativeArea", "name": "Retiro" },
    { "@type": "AdministrativeArea", "name": "Barracas" },
    { "@type": "AdministrativeArea", "name": "Parque Patricios" },
    { "@type": "AdministrativeArea", "name": "Nueva Pompeya" },
    { "@type": "AdministrativeArea", "name": "Parque Chacabuco" },
    { "@type": "AdministrativeArea", "name": "Villa Pueyrredón" },
    { "@type": "AdministrativeArea", "name": "Paternal" },
    { "@type": "AdministrativeArea", "name": "Villa Ortúzar" },
    { "@type": "AdministrativeArea", "name": "Vicente López" },
    { "@type": "AdministrativeArea", "name": "San Isidro" },
    { "@type": "AdministrativeArea", "name": "Tigre" },
    { "@type": "AdministrativeArea", "name": "Pilar" },
    { "@type": "AdministrativeArea", "name": "Morón" },
    { "@type": "AdministrativeArea", "name": "La Matanza" },
    { "@type": "AdministrativeArea", "name": "Lomas de Zamora" },
    { "@type": "AdministrativeArea", "name": "Avellaneda" },
    { "@type": "AdministrativeArea", "name": "Quilmes" },
    { "@type": "AdministrativeArea", "name": "Lanús" }
  ],
  "sameAs": [
    "https://www.google.com/maps/place/Marino+Mudanzas",
    "https://www.facebook.com/mudanzasmarino",
    "https://www.instagram.com/mudanzasmarino"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" as="image" href="/hero-mudanzas.webp" type="image/webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <meta name="google-site-verification" content="rk9l8EzMSLczWXE-YqyLiFk9b9lAOG3iaIxc7GHApaQ" />
      </head>
      <body className={`${cinzel.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
