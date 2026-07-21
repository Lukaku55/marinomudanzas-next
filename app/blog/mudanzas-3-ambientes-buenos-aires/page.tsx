import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanza de Departamento 3 Ambientes Buenos Aires | Marino Mudanzas",
  description: "¿Cuánto cuesta una mudanza de 3 ambientes en Buenos Aires? Qué incluye, cuánto personal se necesita y cómo planificarla. Precio cerrado → Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Mudanza de 3 Ambientes en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-3-ambientes-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanza de Departamento 3 Ambientes Buenos Aires | Marino Mudanzas",
  "description": "¿Cuánto cuesta una mudanza de 3 ambientes en Buenos Aires? Qué incluye, cuánto personal se necesita y cómo planificarla. Precio cerrado.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-3-ambientes-buenos-aires",
  "datePublished": "2026-07-21",
  "dateModified": "2026-07-21",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-3-ambientes-buenos-aires" },
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" }
  }
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza de 3 ambientes en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de 3 ambientes en Buenos Aires ronda los $280.000–$420.000. El precio varía según el piso, si hay ascensor, la cantidad de muebles y si el destino está en CABA o GBA. El precio es cerrado desde el presupuesto, sin costos adicionales el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas personas se necesitan para mudar un departamento de 3 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En general, una mudanza de 3 ambientes requiere entre 3 y 4 operarios más el conductor. Si hay edificio sin ascensor o el departamento está en un piso alto con escalera angosta, se suma personal extra. Todo está contemplado en el presupuesto cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo lleva una mudanza de 3 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre 4 y 7 horas en promedio, dependiendo de la cantidad de muebles, el piso y la distancia entre origen y destino. Los 3 ambientes con muchos muebles, biblioteca grande o placares de pared completa pueden requerir un día completo."
      }
    },
    {
      "@type": "Question",
      "name": "¿El embalaje está incluido en el precio de una mudanza de 3 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El embalaje de objetos frágiles, vajilla y cuadros está incluido en el precio cerrado. No hay costos adicionales por materiales de embalaje básicos. El desarmado y armado de muebles (placares, camas, escritorios) también está incluido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué camión se usa para una mudanza de 3 ambientes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para un 3 ambientes estándar usamos un camión mediano (furgón de 18-24 m³) que alcanza para la mayoría de los departamentos. Si hay mucho volumen, biblioteca grande o muebles de gran porte, usamos un camión mayor o dos viajes. Lo definimos en el presupuesto."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanza de Departamento 3 Ambientes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Un departamento de 3 ambientes es la mudanza residencial más frecuente y también una de las que requiere más planificación: hay más volumen que en un monoambiente o 2 ambientes, y la cantidad de muebles, cajas y objetos suele sorprender incluso a quienes la calcularon. En Marino Mudanzas hacemos mudanzas de 3 ambientes todos los días y conocemos bien los tiempos, el personal necesario y los costos reales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué tiene una mudanza de 3 ambientes?</h2>
            <p>Un 3 ambientes típico incluye living-comedor, dormitorio principal, dormitorio secundario y baño. El mobiliario suele ser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Living-comedor</strong> — sillones, mesa comedor con sillas, mueble de TV, biblioteca, alfombras, cuadros</li>
              <li><strong>Dormitorio principal</strong> — cama matrimonial, placar de pared (el más pesado), mesa de luz, cómoda</li>
              <li><strong>Dormitorio secundario</strong> — cama simple o marinera, placar, escritorio, silla</li>
              <li><strong>Cocina</strong> — heladera, lavarropas, microondas, vajilla, cajas de cocina</li>
              <li><strong>Extras comunes</strong> — colchones, sillas de escritorio, cajas de libros, ropa en bolsas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta una mudanza de 3 ambientes?</h2>
            <p>El rango para una mudanza de 3 ambientes en CABA es de <strong>$280.000–$420.000</strong>. El precio varía según:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Piso y ascensor</strong> — un 7° piso sin ascensor tiene un costo mayor que un 2° con ascensor amplio</li>
              <li><strong>Cantidad de muebles</strong> — un 3 ambientes con biblioteca de pared completa tiene más volumen que uno con pocos muebles</li>
              <li><strong>Distancia</strong> — mudanzas dentro de CABA, hacia el GBA o viceversa tienen costos distintos</li>
              <li><strong>Horario</strong> — sábados y fin de mes tienen mayor demanda y precios algo más altos</li>
            </ul>
            <p>El precio es cerrado desde el presupuesto. No hay costos adicionales el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto tiempo lleva?</h2>
            <p>En promedio, entre 4 y 7 horas. Los factores que más influyen:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Piso de origen y destino, y si hay ascensor</li>
              <li>Cantidad de muebles para desarmar y armar (placares de pared, camas con cajones)</li>
              <li>Distancia entre origen y destino</li>
              <li>Tráfico en el recorrido</li>
            </ul>
            <p>Un 3 ambientes en 5° piso sin ascensor con mucho volumen puede llevar un día completo. Lo estimamos en el presupuesto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal</strong> — 3 a 4 operarios especializados más el conductor</li>
              <li><strong>Desarmado y armado</strong> — placares, camas, escritorios, bibliotecas</li>
              <li><strong>Embalaje</strong> — objetos frágiles, vajilla, cuadros y televisores</li>
              <li><strong>Camión del tamaño adecuado</strong> — según el volumen del departamento</li>
              <li><strong>Coordinación con el consorcio</strong> — horario de mudanza y uso del montacargas</li>
              <li><strong>Precio cerrado</strong> — sin costos adicionales el día de la mudanza</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para planificar la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Reservar con anticipación</strong> — al menos 10 días, 15 para fin de mes o sábados</li>
              <li><strong>Consultar al consorcio</strong> — muchos edificios tienen horarios de mudanza y uso exclusivo del montacargas</li>
              <li><strong>Empacar ropa y libros antes</strong> — las cajas de ropa y libros que podés armar antes reducen el tiempo del operativo</li>
              <li><strong>Desconectar heladera y lavarropas la noche anterior</strong> — la heladera necesita 8 horas sin corriente antes de moverla</li>
              <li><strong>Tener listo el acceso en destino</strong> — coordinar con el encargado del edificio de llegada para no tener demoras</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas de 3 ambientes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza de 3 ambientes en Buenos Aires?</h3>
            <p>Entre $280.000 y $420.000 según el piso, el ascensor y la cantidad de muebles. El precio es cerrado desde el presupuesto, sin sorpresas el día de la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántas personas se necesitan?</h3>
            <p>En general 3 a 4 operarios más el conductor. Si hay escalera sin ascensor o piso alto, se suma personal extra. Contemplado en el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo lleva la mudanza?</h3>
            <p>Entre 4 y 7 horas en promedio. Con mucho volumen o piso alto sin ascensor, puede llevar un día completo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El embalaje está incluido?</h3>
            <p>Sí. Embalaje de frágiles, vajilla y cuadros incluido. Desarmado y armado de muebles también.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué camión usan para un 3 ambientes?</h3>
            <p>Un furgón mediano de 18-24 m³ para la mayoría de los casos. Con mucho volumen, usamos uno mayor o dos viajes. Lo definimos en el presupuesto.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>Contanos el barrio, el piso y si hay ascensor. Te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También podría interesarte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de casa completa</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Mudanzas en Palermo</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Mudanzas en Caballito</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Mudanzas en Belgrano</Link>
              <Link href="/blog/mudanzas-almagro" className="text-gold hover:underline text-sm">Mudanzas en Almagro</Link>
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
