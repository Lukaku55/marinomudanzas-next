import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Económicas en Buenos Aires | Marino Mudanzas",
  description: "Mudanzas económicas en Buenos Aires sin sacrificar calidad. Presupuesto transparente, sin cargos ocultos. Más de 80 años de experiencia. Tel 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanzas Económicas en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-economicas-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas Económicas en Buenos Aires: Cómo Ahorrar sin Sacrificar Calidad",
  "description": "Mudanzas económicas en Buenos Aires sin sacrificar calidad. Presupuesto transparente, sin cargos ocultos. Más de 80 años de experiencia. Tel 4611-1818.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-economicas-buenos-aires",
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-economicas-buenos-aires" },
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza económica en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente puede costar desde $80.000 a $150.000 según el piso y la distancia. Un 2 ambientes ronda los $150.000–$250.000. Un 3 ambientes o más puede ir de $250.000 a $450.000 o más. Los precios varían por volumen, piso, ascensor y distancia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo reducir el costo de mi mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Podés ahorrar embalando vos mismo los objetos pequeños antes del día de la mudanza, donando o vendiendo muebles que ya no usás, eligiendo un día de semana en lugar del fin de mes, y teniendo todo organizado y etiquetado para reducir el tiempo de la operación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Una mudanza barata es confiable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No siempre. Algunas empresas muy baratas trabajan sin seguro, usan vehículos en mal estado o cobran adicionales el día de la mudanza. Verificá siempre que la empresa tenga seguro de responsabilidad civil, dirección física y referencias verificables antes de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye un presupuesto de mudanza económica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un presupuesto serio debe incluir: personal (cantidad de personas), tipo y tamaño del camión, tiempo estimado, y si el embalaje está incluido o es adicional. Los cargos ocultos más comunes son: bajada de pisos sin ascensor, espera, horas extra y materiales de embalaje no mencionados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Vale la pena contratar una empresa para una mudanza pequeña?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Incluso para mudanzas pequeñas (monoambiente, mudanzas internas en el mismo edificio), una empresa profesional ahorra tiempo, protege tus muebles y evita lesiones por cargar objetos pesados sin entrenamiento. El costo es accesible y la diferencia en el resultado es grande."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas Económicas en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Buscar una mudanza económica en Buenos Aires no significa conformarse con menos — significa pagar lo justo por un servicio que realmente cumple. El problema es que en el mercado conviven empresas serias con precios razonables y empresas informales que ofrecen precios muy bajos pero terminan cobrando adicionales el día de la mudanza o, peor, dañando tus muebles. Esta guía te ayuda a encontrar la opción correcta.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué determina el costo de una mudanza?</h2>
            <p>Antes de comparar precios, entendé qué variables mueven el presupuesto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Volumen de muebles</strong> — la cantidad de ambientes y el peso de los muebles determinan el tamaño del camión necesario y cuántas personas se requieren.</li>
              <li><strong>Piso y ascensor</strong> — bajar desde un 7° piso sin ascensor lleva el doble de tiempo que desde un 2° con ascensor. Eso impacta directamente en el precio.</li>
              <li><strong>Distancia</strong> — una mudanza dentro del mismo barrio cuesta menos que una mudanza desde CABA a GBA o entre partidos lejanos.</li>
              <li><strong>Embalaje</strong> — si la empresa lo hace, suma costo pero también suma protección. Si embalás vos, el precio baja.</li>
              <li><strong>Fecha</strong> — los fines de mes y los sábados son más caros por mayor demanda. Un miércoles de mitad de mes puede costar significativamente menos.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo reducir el costo de tu mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Donó o vendé lo que no llevás</strong> — menos volumen = camión más chico = precio menor. Antes de la mudanza es el momento ideal para deshacerse de lo que ya no usás.</li>
              <li><strong>Embalá vos las cajas pequeñas</strong> — libros, ropa, vajilla. Dejale a la empresa solo lo que requiere técnica: muebles, electrodomésticos, cuadros.</li>
              <li><strong>Elegí un día de semana</strong> — lunes a jueves suelen tener mejor disponibilidad y precios más bajos que los viernes y sábados.</li>
              <li><strong>Evitá el fin de mes</strong> — los últimos 5 días del mes tienen una demanda altísima. Si podés correrte unos días, ahorrás y tenés más opciones de horario.</li>
              <li><strong>Tené todo listo antes de que llegue el camión</strong> — el tiempo de espera mientras seguís embalando cosas suma a la hora trabajada.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo comparar presupuestos correctamente</h2>
            <p>No compares solo el número final. Preguntá siempre qué incluye cada presupuesto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>¿Cuántas personas vienen?</li>
              <li>¿Qué tamaño de camión? ¿Es suficiente para mi mudanza?</li>
              <li>¿El embalaje está incluido o es adicional?</li>
              <li>¿Tiene seguro de responsabilidad civil?</li>
              <li>¿El precio incluye bajada de pisos sin ascensor o se cobra aparte?</li>
            </ul>
            <p>Un presupuesto que parece más caro pero incluye todo puede ser mucho más conveniente que uno barato con cargos ocultos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Señales de alarma que debés evitar</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No tienen dirección física verificable</li>
              <li>Presupuestan sin ver los muebles o sin preguntar por el piso y el ascensor</li>
              <li>No mencionan seguro de responsabilidad civil</li>
              <li>Piden seña muy alta o pago total anticipado</li>
              <li>No hay rastro de reseñas reales ni referencias</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas económicas en Buenos Aires</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza económica en Buenos Aires?</h3>
            <p>Una mudanza de monoambiente puede costar desde $80.000 a $150.000 según el piso y la distancia. Un 2 ambientes ronda los $150.000–$250.000. Un 3 ambientes puede ir de $250.000 en adelante. Los precios varían por volumen, piso, ascensor y distancia. Pedí siempre presupuesto detallado.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo puedo reducir el costo de mi mudanza?</h3>
            <p>Embalando las cajas pequeñas vos mismo, eligiendo un día de semana, evitando el fin de mes y reduciendo el volumen (donando o vendiendo lo que no usás) podés reducir el costo considerablemente sin sacrificar calidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Una mudanza barata es confiable?</h3>
            <p>No siempre. Las empresas muy baratas suelen trabajar sin seguro o con personal sin experiencia. Verificá que tengan dirección física, seguro de responsabilidad civil y referencias verificables antes de contratar.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué incluye un presupuesto de mudanza económica?</h3>
            <p>Un presupuesto serio debe detallar personal, tamaño del camión, tiempo estimado y si el embalaje está incluido. Los cargos ocultos más comunes son: bajada de pisos sin ascensor, horas extra y materiales de embalaje no mencionados.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Vale la pena contratar una empresa para una mudanza pequeña?</h3>
            <p>Sí. Incluso para mudanzas de monoambiente o mudanzas internas, una empresa profesional ahorra tiempo, protege tus muebles y evita lesiones. El costo es accesible y el resultado es muy diferente al de un flete informal.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>En Marino Mudanzas ofrecemos presupuesto detallado sin cargo y sin compromiso. Sin cargos ocultos, sin sorpresas el día de la mudanza. Más de 80 años de experiencia en Buenos Aires.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/que-preguntar-antes-de-contratar-mudanza" className="text-gold hover:underline text-sm">Preguntas antes de contratar</Link>
              <Link href="/blog/empresa-mudanzas-confiable-buenos-aires" className="text-gold hover:underline text-sm">Cómo elegir empresa confiable</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
              <Link href="/blog/mudanzas-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas de monoambiente</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
