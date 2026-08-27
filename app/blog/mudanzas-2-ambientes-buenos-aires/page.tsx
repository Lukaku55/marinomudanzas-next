import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de 2 Ambientes en Buenos Aires: Precios y Tiempos 2026 | Marino Mudanzas",
  description: "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires? Precios reales, tiempos estimados, qué camión necesitás y cómo prepararte. Presupuesto sin cargo → 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de 2 ambientes en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-2-ambientes-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de 2 Ambientes en Buenos Aires: Precios y Tiempos 2026",
  "description": "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires? Precios reales, tiempos estimados, qué camión necesitás y cómo prepararte.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-2-ambientes-buenos-aires",
  "datePublished": "2026-07-13",
  "dateModified": "2026-07-13",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-2-ambientes-buenos-aires" },
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
      "name": "¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 2 ambientes en Buenos Aires se cotiza según el caso con ascensor. Sin ascensor o en pisos altos puede subir a a consultar según el volumen y la distancia. El precio incluye camión, personal, desarmado y armado de muebles y embalaje de frágiles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con ascensor, entre 3 y 5 horas. Sin ascensor, entre 5 y 7 horas dependiendo del piso. Si hay mucho mobiliario, lavarropas pesado o muebles que requieren desarme completo, puede extenderse. En Marino siempre estimamos el tiempo con margen para no apurar la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué camión se necesita para un departamento de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para un 2 ambientes estándar usamos una camioneta grande o camión chico (entre 20 y 30 m³). Si el departamento tiene mucho mobiliario acumulado o electrodomésticos grandes, puede requerirse un camión mediano. Lo evaluamos con el presupuesto previo para no hacer viajes innecesarios."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que reservar una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos reservar con al menos 5–7 días de anticipación. Para mudanzas a fin de mes o sábados, lo ideal es 10–15 días. Los últimos días de cada mes tienen mucha demanda en toda CABA y los turnos se llenan rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el servicio para una mudanza de 2 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El servicio completo incluye: carga y descarga, desarmado y armado de muebles (placares, camas, escritorios), embalaje de objetos frágiles y vajilla, traslado de electrodomésticos, y colocación en destino. El presupuesto es cerrado y sin costos adicionales sorpresa."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de 2 ambientes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>El departamento de 2 ambientes es el tipo de vivienda más común en CABA y, por eso, el tipo de mudanza que más realizamos. Ya sea un departamento en un edificio de los años 50 sin ascensor o uno moderno en Palermo con elevador de servicio, en Marino Mudanzas tenemos el equipo y el camión del tamaño justo para cada situación.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?</h2>
            <p>El precio depende principalmente de tres factores: si hay ascensor o no, el piso, y el volumen real de muebles y cajas. Como referencia para 2026:</p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="text-left p-3 font-semibold text-foreground border border-border">Situación</th>
                    <th className="text-left p-3 font-semibold text-foreground border border-border">Precio estimado</th>
                    <th className="text-left p-3 font-semibold text-foreground border border-border">Tiempo estimado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border">2 amb. con ascensor</td>
                    <td className="p-3 border border-border">a consultar</td>
                    <td className="p-3 border border-border">3 – 5 horas</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="p-3 border border-border">2 amb. sin ascensor (1° o 2°)</td>
                    <td className="p-3 border border-border">a consultar</td>
                    <td className="p-3 border border-border">4 – 6 horas</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border">2 amb. sin ascensor (3° o más)</td>
                    <td className="p-3 border border-border">a consultar</td>
                    <td className="p-3 border border-border">5 – 7 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm">Precios orientativos para CABA. El presupuesto final se define según el inventario real de tu departamento.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué camión necesitás para un 2 ambientes?</h2>
            <p>Para un departamento de 2 ambientes estándar usamos una camioneta grande o camión chico (20–30 m³ de capacidad). Eso es suficiente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cama matrimonial + placar + mesitas de noche</li>
              <li>Sillones, mesa y sillas de comedor</li>
              <li>Escritorio, biblioteca, televisor</li>
              <li>Lavarropas, cocina, heladera</li>
              <li>Entre 20 y 35 cajas de ropa, libros y cocina</li>
            </ul>
            <p>Si acumulaste mucho durante años (muchos libros, ropa extra, herramientas, muebles de más) es posible que necesitemos un camión mediano o dos viajes. Lo evaluamos al presupuestar para que no haya sorpresas el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué incluye el servicio para un 2 ambientes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Desarmado y armado de muebles</strong> — placares, camas de dos plazas, escritorios con estructura metálica</li>
              <li><strong>Embalaje de frágiles</strong> — vajilla, cuadros, pantallas y objetos decorativos</li>
              <li><strong>Traslado de electrodomésticos</strong> — lavarropas, heladera, microondas, televisor</li>
              <li><strong>Colocación en destino</strong> — dejamos todo en el lugar que indicás</li>
              <li><strong>Precio cerrado</strong> — el precio que presupuestamos es el que pagás, sin extras</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lo que complica una mudanza de 2 ambientes</h2>
            <p>La mayoría de los imprevistos en mudanzas de 2 ambientes vienen de los mismos puntos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>El lavarropas</strong> — pesa entre 70 y 90 kg. Sin ascensor y en pisos altos suma tiempo y esfuerzo. Siempre lo contemplamos en el presupuesto.</li>
              <li><strong>El placar empotrado</strong> — si el placar es demasiado grande para salir entero por la puerta, hay que desarmarlo por paneles. Es trabajo extra que hay que prever.</li>
              <li><strong>La cantidad de cajas</strong> — la gente suele subestimar cuántas cajas tiene. Recomendamos empacar antes de que lleguemos para no perder tiempo el día de la mudanza.</li>
              <li><strong>El horario del consorcio</strong> — muchos edificios tienen restricciones de horario para mudanzas (generalmente 8 a 18hs, algunos hasta las 20hs). Verificar antes evita problemas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Checklist para preparar tu mudanza de 2 ambientes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Consultar al consorcio el horario permitido para mudanzas</li>
              <li>Reservar el ascensor o la planta baja con el encargado</li>
              <li>Tener todo embalado en cajas antes de que llegue el camión</li>
              <li>Desconectar la heladera 24hs antes y vaciar el lavarropas</li>
              <li>Separar lo que va a guardamuebles (si corresponde) de lo que va al nuevo domicilio</li>
              <li>Confirmar si el nuevo domicilio también tiene restricciones de consorcio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de 2 ambientes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de 2 ambientes en Buenos Aires?</h3>
            <p>Entre a consultar y a consultar con ascensor. Sin ascensor puede llegar a a consultar según el piso. Pedí un presupuesto sin cargo con el detalle de tu departamento para un precio exacto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva una mudanza de 2 ambientes?</h3>
            <p>Entre 3 y 5 horas con ascensor. Entre 5 y 7 horas sin ascensor. Con mucho mobiliario o pisos altos puede extenderse, pero siempre lo aclaramos al presupuestar.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué camión se necesita para un 2 ambientes?</h3>
            <p>Una camioneta grande o camión chico (20–30 m³) en la mayoría de los casos. Si el volumen es mayor al promedio, usamos un camión mediano o planificamos dos viajes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que reservar?</h3>
            <p>Mínimo 5–7 días. Para fin de mes o sábados, 10–15 días. Los últimos días del mes tienen mucha demanda y los turnos se llenan rápido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué incluye el servicio?</h3>
            <p>Carga y descarga, desarmado y armado de muebles, embalaje de frágiles, traslado de electrodomésticos y colocación en destino. Precio cerrado, sin sorpresas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos el barrio de origen, el barrio de destino, el piso y si hay ascensor. Con eso te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También puede interesarte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de monoambiente</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/cuanto-tiempo-dura-una-mudanza" className="text-gold hover:underline text-sm">¿Cuánto tiempo dura?</Link>
              <Link href="/blog/mudanzas-con-y-sin-ascensor" className="text-gold hover:underline text-sm">Con y sin ascensor</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
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
