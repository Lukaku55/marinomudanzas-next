import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Tortuguitas | Marino Mudanzas | Presupuesto sin cargo",
  description: "Empresa de mudanzas en Tortuguitas, partido de Malvinas Argentinas. Más de 80 años de experiencia en CABA y GBA. Embalaje incluido. Llamanos: 4611-1818.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Tortuguitas, Malvinas Argentinas",
  "description": "Servicio de mudanzas en Tortuguitas, partido de Malvinas Argentinas. Más de 80 años de experiencia en el noroeste del GBA.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-tortuguitas",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Tortuguitas</h1>
          <p className="font-body text-muted-foreground text-sm mb-8">Partido de Malvinas Argentinas, Zona Noroeste del GBA</p>

          <div className="prose prose-lg font-body text-muted-foreground leading-relaxed space-y-6">
            <p>En Marino Mudanzas realizamos mudanzas en Tortuguitas y en todo el partido de Malvinas Argentinas desde hace más de 80 años. Conocemos la zona, los accesos por Ruta 8 y Ruta Provincial 25, y las particularidades de las casas de familia y countries de la zona noroeste del Gran Buenos Aires.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Por qué elegir Marino Mudanzas en Tortuguitas?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-foreground">Más de 80 años de experiencia</strong> en mudanzas en todo el GBA y CABA</li>
              <li><strong className="text-foreground">Flota propia</strong> de camiones de distintos tamaños para todo tipo de mudanza</li>
              <li><strong className="text-foreground">Embalaje de protección incluido</strong> en todos los servicios</li>
              <li><strong className="text-foreground">Seguro de carga</strong> en cada traslado</li>
              <li><strong className="text-foreground">Presupuesto sin cargo</strong> y precio cerrado sin sorpresas</li>
              <li><strong className="text-foreground">Atención de lunes a sábado</strong> de 8 a 18hs</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Características de las mudanzas en Tortuguitas</h2>
            <p>Tortuguitas es una localidad residencial del partido de Malvinas Argentinas, con predominio de casas de familia de una y dos plantas, algunos countries y barrios privados cercanos. El acceso principal es por Ruta 8, lo que facilita el traslado de camiones de gran porte.</p>
            <p>La mayoría de las mudanzas en la zona involucran viviendas con jardín, garaje y espacios amplios que requieren camiones de mayor capacidad. En Marino Mudanzas contamos con unidades adecuadas para mudanzas grandes y la experiencia para manejar muebles de jardín, piletas portátiles y electrodomésticos de gran porte.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas que cubrimos en Malvinas Argentinas</h2>
            <p>Además de Tortuguitas, cubrimos todo el partido de Malvinas Argentinas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Grand Bourg</li>
              <li>Los Polvorines</li>
              <li>Pablo Nogués