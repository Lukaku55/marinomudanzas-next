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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Con cuánta anticipación recomiendan coordinar el servicio?", "acceptedAnswer": { "@type": "Answer", "text": "Recomendamos coordinar tu mudanza con al menos 15 a 20 días de anticipación. Esto nos permite garantizar disponibilidad de personal y vehículos, especialmente durante los períodos de mayor demanda como fin de mes y cambio de temporada." } },
    { "@type": "Question", "name": "¿Realizan mudanzas por soga o altura?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, somos especialistas en movimientos por soga para muebles de gran tamaño que no caben en el ascensor o escalera." } },
    { "@type": "Question", "name": "¿Qué zonas cubren?", "acceptedAnswer": { "@type": "Answer", "text": "Realizamos mudanzas y fletes en toda la Ciudad Autónoma de Buenos Aires (CABA) y el Gran Buenos Aires (GBA), con base en el barrio de Flores." } },
    { "@type": "Question", "name": "¿Brindan servicio de embalaje?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. El embalaje tradicional está incluido: protección de muebles con mantas y film stretch. También ofrecemos un servicio adicional donde un embalador asiste al domicilio 48hs antes para embalar cristalería, loza, vajilla y objetos delicados." } },
    { "@type": "Question", "name": "¿Qué formas de pago aceptan?", "acceptedAnswer": { "@type": "Answer", "text": "Aceptamos efectivo, transferencia bancaria y tarjetas de crédito y débito. También trabajamos con Mercado Pago." } },
    { "@type": "Question", "name": "¿Hacen mudanzas al interior del país?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, realizamos traslados y mudanzas de larga distancia a diferentes puntos del interior del país. Solo realizamos mudanzas exclusivas, no cargas parciales ni servicios de expreso." } },
    { "@type": "Question", "name": "¿Cuentan con servicio de guardamuebles?", "acceptedAnswer": { "@type": "Answer", "text": "Sí, ofrecemos espacios seguros, limpios y monitoreados para el almacenaje de tus pertenencias por tiempo corto o prolongado." } }
  ]
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
  "areaServed": { "@type": "City", "name": "Buenos Aires" },
  "sameAs": ["https://www.google.com/maps/place/Marino+Mudanzas"]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <meta name="google-site-verification" content="rk9l8EzMSLczWXE-YqyLiFk9b9lAOG3iaIxc7GHApaQ" />
      </head>
      <body className={`${cinzel.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
