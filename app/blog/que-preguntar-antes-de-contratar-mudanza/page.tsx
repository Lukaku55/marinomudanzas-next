import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué Preguntar Antes de Contratar una Empresa de Mudanzas | Marino Mudanzas",
  description: "Las preguntas clave que debés hacerle a una empresa de mudanzas antes de contratar. Evitá sorpresas y protegé tus pertenencias. Guía de Marino Mudanzas.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Qué Preguntar Antes de Contratar una Mudanza", "item": "https://www.mudanzasmarino.com.ar/blog/que-preguntar-antes-de-contratar-mudanza" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Qué Preguntar Antes de Contratar una Empresa de Mudanzas",
  "description": "Las preguntas clave que debés hacerle a una empresa de mudanzas antes de contratar en Buenos Aires.",
  "datePublished": "2026-06-25",
  "dateModified": "2026-06-25",
  "url": "https://www.mudanzasmarino.com.ar/blog/que-preguntar-antes-de-contratar-mudanza",
  "author": { "@type": "Organization", "name": "Marino Mudanzas", "url": "https://www.mudanzasmarino.com.ar" },
  "publisher": { "@type": "Organization", "name": "Marino Mudanzas", "logo": { "@type": "ImageObject", "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png" } },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/que-preguntar-antes-de-contratar-mudanza" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuántos operarios van a venir el día de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La cantidad de operarios determina la velocidad y seguridad del traslado. Un monoambiente puede resolverlo 2 personas; un departamento grande necesita 3 o más. Confirmá este dato en el presupuesto escrito para evitar sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿El presupuesto incluye el embalaje de muebles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El embalaje básico de muebles con mantas y film stretch debería estar siempre incluido en el precio. Si no lo está, preguntá cuánto cuesta adicional. El embalaje de objetos frágiles como cristalería o vajilla es generalmente un servicio aparte."
      }
    },
    {
      "@type": "Question",
      "name": "¿La empresa tiene flota propia o terceriza el camión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las empresas con flota propia tienen mayor control sobre el estado del camión, los tiempos y la seguridad del traslado. Cuando se terceriza, la responsabilidad se diluye. Es un indicador importante de profesionalismo."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio es cerrado o puede cambiar el día de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El presupuesto debe ser un precio cerrado por escrito. Desconfiá de empresas que dan precios 'aproximados' o 'por hora' sin límite. Los cargos adicionales no previstos el día del traslado son una señal de alerta grave."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Qué Preguntar Antes de Contratar una Empresa de Mudanzas
          </h1>
          <p className="text-sm text-muted-foreground mb-8 font-body">25 de junio de 2026 · Marino Mudanzas</p>

          <div className="prose prose-lg mt-4 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>
              Antes de contratar una empresa de mudanzas en Buenos Aires, hay 8 preguntas que no podés dejar de hacer: cantidad de operarios, qué incluye el embalaje, si el camión es propio, si el precio es cerrado, si tienen experiencia en mudanzas por soga, cuándo hay que pagar, qué no está incluido y cuál es el contacto el día de la mudanza. Las respuestas revelan si estás contratando un servicio profesional o arriesgándote a una mala experiencia.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Las 8 preguntas que debés hacer</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">1. ¿Cuántos operarios van a venir?</h3>
            <p>La cantidad de personas determina la velocidad y seguridad del traslado. Un monoambiente puede resolverse con 2; un departamento grande necesita 3 o más. Si la empresa no puede confirmarlo, es una señal de falta de planificación.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">2. ¿El presupuesto incluye el embalaje de muebles?</h3>
            <p>El embalaje básico con mantas y film stretch debería estar incluido siempre. Si no lo mencionan, preguntá si tiene costo adicional. El embalaje de objetos frágiles (cristalería, vajilla) es generalmente un servicio aparte.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">3. ¿El camión es propio o lo tercerizan?</h3>
            <p>Las empresas con flota propia tienen más control sobre el estado del vehículo y los tiempos. Cuando el transporte es tercerizado, la responsabilidad se diluye y los problemas son más difíciles de resolver.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">4. ¿El precio es cerrado o puede cambiar el día de la mudanza?</h3>
            <p>El presupuesto debe ser un precio cerrado por escrito. Desconfiá de los que dan precios "aproximados" o "por hora" sin tope. Los cargos extra el día del traslado son la queja más frecuente contra empresas informales.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">5. ¿Tienen experiencia en mudanzas por soga?</h3>
            <p>Si vivís en un piso alto y hay muebles grandes que no entran por el ascensor, necesitás una empresa especializada en elevación por soga. No todas la tienen — confirmalo antes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">6. ¿Cuándo y cómo se paga?</h3>
            <p>El esquema de pago habitual es: una seña para reservar la fecha y el saldo al finalizar el servicio. Desconfiá de quien te pide el 100% por adelantado — no tiene ningún incentivo para cumplir.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">7. ¿Qué no está incluido en el presupuesto?</h3>
            <p>Preguntá explícitamente qué no cubre el precio: ¿embalaje de contenidos? ¿Viajes adicionales? ¿Horas extra? Saber qué está excluido es tan importante como saber qué está incluido.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">8. ¿Quién es el contacto el día de la mudanza?</h3>
            <p>Tener un número de contacto directo con el coordinador o encargado del equipo el día del traslado es fundamental para resolver cualquier imprevisto rápidamente.</p>

            <div className="bg-muted rounded-xl p-6 mt-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                En Marino Mudanzas respondemos todo esto de antemano
              </h3>
              <p className="mb-4">
                Con más de 80 años de experiencia, cada presupuesto incluye todos los detalles por escrito. Sin sorpresas el día de la mudanza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Consultanos por WhatsApp
                </a>
                <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Llamanos: 4611-1818
                </a>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">Artículos relacionados</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/empresa-mudanzas-confiable-buenos-aires" className="text-gold hover:underline font-medium">
                    Cómo elegir una empresa de mudanzas confiable
                  </Link>
                  {" "}— qué verificar antes de contratar.
                </li>
                <li>
                  <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline font-medium">
                    ¿Cuánto cuesta una mudanza en Buenos Aires?
                  </Link>
                  {" "}— rangos de precios y factores que influyen.
                </li>
                <li>
                  <Link href="/blog/que-incluye-una-mudanza" className="text-gold hover:underline font-medium">
                    ¿Qué incluye un servicio de mudanza profesional?
                  </Link>
                  {" "}— detalle de cada ítem del servicio.
                </li>
                <li>
                  <Link href="/blog/checklist-mudanza" className="text-gold hover:underline font-medium">
                    Checklist completo para tu mudanza
                  </Link>
                  {" "}— todo lo que tenés que hacer antes, durante y después.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
