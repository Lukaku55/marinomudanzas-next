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
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.mudanzasmarino.com.ar" },
  openGraph: {
    title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950",
    description: "Más de 80 años moviendo Buenos Aires. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA.",
    url: "https://www.mudanzasmarino.com.ar",
    siteName: "Marino Mudanzas",
    locale: "es_AR",
    type: "website",
    images: [{ url: "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png", width: 400, height: 400, alt: "Marino Mudanzas - Empresa de mudanzas en Buenos Aires desde 1950" }],
  },
  twitter: {
    card: "summary",
    title: "Mudanzas en Buenos Aires | Marino Mudanzas | Desde 1950",
    description: "Más de 80 años moviendo Buenos Aires. Mudanzas residenciales, de oficinas y guardamuebles en CABA y GBA.",
    images: ["https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "name": "Marino Mudanzas",
  "description": "Empresa de mudanzas en Buenos Aires con más de 80 años de experiencia. Mudanzas residenciales, comerciales, guardamuebles y traslados al interior del país desde el barrio de Flores, CABA.",
  "foundingYear": "1950",
  "image": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png",
  "logo": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png",
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
    { "@type": "City", "name": "Buenos Aires" },
    { "@type": "AdministrativeArea", "name": "Gran Buenos Aires" },
    { "@type": "Country", "name": "Argentina" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Mudanzas Marino Mudanzas",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mudanzas Residenciales en Buenos Aires", "url": "https://www.mudanzasmarino.com.ar/mudanzas-residenciales" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mudanzas de Oficinas y Empresas", "url": "https://www.mudanzasmarino.com.ar/mudanzas-oficinas" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Guardamuebles en Flores, CABA", "url": "https://www.mudanzasmarino.com.ar/guardamuebles" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mudanzas al Interior del País", "url": "https://www.mudanzasmarino.com.ar/mudanzas-interior" } }
    ]
  },
  "knowsAbout": [
    "mudanzas residenciales Buenos Aires",
    "mudanzas corporativas",
    "embalaje profesional de muebles",
    "guardamuebles Buenos Aires",
    "mudanzas de larga distancia Argentina",
    "mudanzas por soga",
    "traslado de pianos Buenos Aires"
  ],
  "sameAs": ["https://www.google.com/maps/place/Marino+Mudanzas"]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Marino Mudanzas",
  "url": "https://www.mudanzasmarino.com.ar",
  "description": "Empresa de mudanzas en Buenos Aires con más de 80 años de experiencia.",
  "inLanguage": "es-AR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.mudanzasmarino.com.ar/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <meta name="google-site-verification" content="rk9l8EzMSLczWXE-YqyLiFk9b9lAOG3iaIxc7GHApaQ" />
      </head>
      <body className={`${cinzel.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
