import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Mudarse Solo en Buenos Aires: Guía Completa | Marino Mudanzas",
  description: "Guía para mudarse solo por primera vez en Buenos Aires: checklist, qué llevarse, cuánto cuesta, cómo dar de alta servicios y consejos para ahorrar en la mudanza.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Cómo Mudarse Solo en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/como-mudarse-solo-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Mudarse Solo en Buenos Aires: Guía Completa | Marino Mudanzas",
  "description": "Guía para mudarse solo por primera vez en Buenos Aires: checklist, qué llevarse, cuánto cuesta, cómo dar de alta servicios y consejos para ahorrar en la mudanza.",
  "url": "https://www.mudanzasmarino.com.ar/blog/como-mudarse-solo-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/como-mudarse-solo-buenos-aires" },
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
      "name": "¿Cuánto cuesta mudarse solo por primera vez en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si te mudás a un monoambiente, el precio orientativo es de a consultar a a consultar. Si es un 2 ambientes, se cotiza según el caso a a consultar. El valor depende del volumen de muebles, el piso, la distancia y si necesitás embalaje adicional. En Marino Mudanzas damos un precio cerrado desde el presupuesto, sin sorpresas el día de la mudanza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Conviene contratar una empresa de mudanzas o ir de a poco con autos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si tenés muebles (aunque sean pocos), contratar una empresa es casi siempre más conveniente. Ir de a poco con autos de amigos lleva muchos más viajes, más tiempo total y más riesgo de romper algo. Para quien se muda a un monoambiente con pocos muebles, un flete pequeño cubre todo en un solo viaje a buen precio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago con los muebles que no me entran en el nuevo departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las opciones son: guardarlos en un servicio de guardamuebles (lo ofrecemos en Marino Mudanzas), venderlos o donarlos antes de la mudanza, o dejarlos en la casa de un familiar temporalmente. El guardamuebles es la mejor opción cuando los muebles tienen valor o los vas a necesitar después."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo conviene usar guardamuebles al mudarse solo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El guardamuebles es útil cuando el nuevo departamento es más chico que el anterior y no entrán todos los muebles, cuando hay una brecha de días o semanas entre la entrega y la ocupación del nuevo lugar, o cuando venís de la casa de tus padres y traés solo lo esencial al principio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo doy de alta los servicios en mi nuevo departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El gas se da de alta llamando a Metrogas (0800-333-2525) o Naturgy según tu zona. La luz se tramita en Edesur o Edenor con el contrato de alquiler y tu DNI. El agua generalmente viene con la propiedad y el consorcio. El internet se contrata directamente con el proveedor. Hacelo antes de mudarte para que todo esté activo cuando llegues."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Mudarse Solo en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Independizarse por primera vez, separarse o simplemente empezar de cero en un departamento propio: mudarse solo en Buenos Aires tiene muchas caras. Más allá de la emoción del cambio, hay una parte logística que puede ser abrumadora si no la organizás bien. Esta guía te ayuda a ordenar el proceso: desde el checklist de documentos hasta cuánto cuesta contratar una mudanza y cómo dar de alta los servicios en tu nuevo hogar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Checklist pre-mudanza: lo que tenés que resolver antes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Documentos</strong> — actualizá tu domicilio en el DNI, el banco, la obra social y la AFIP lo antes posible.</li>
              <li><strong>Servicios a dar de alta</strong> — gas (Metrogas o Naturgy), luz (Edesur o Edenor) e internet. Gestionálos antes de mudarte para que estén activos al llegar.</li>
              <li><strong>Tarjetas y cuentas</strong> — cambiá la dirección de envío en todos los bancos y tarjetas de crédito.</li>
              <li><strong>Correo postal</strong> — notificá a quienes te envían correspondencia importante (ANSES, PAMI, mutuales).</li>
              <li><strong>Consorcio</strong> — presentate al encargado, pedí las instrucciones del edificio y confirmá las reglas de mudanza (horarios, montacargas, etc.).</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Lo que necesitás para tu primer departamento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Esencial desde el día uno</strong> — cama o sommier, almohada y ropa de cama, mesa y al menos una silla, elementos básicos de cocina (olla, sartén, plato, vaso, cubiertos) y productos de limpieza.</li>
              <li><strong>Sumá en las primeras semanas</strong> — heladera, lavarropas, mueble de TV, placard o perchero y algún sillón o silla adicional.</li>
              <li><strong>Lo podés esperar</strong> — decoración, biblioteca, mesa de comedor grande, escritorio de oficina. No todo tiene que estar el primer día.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cuánto cuesta la mudanza cuando te vas solo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monoambiente</strong> — si llevás lo mínimo (cama, mesa, cajas de ropa), el precio se cotiza según el caso con un flete y 2 operarios.</li>
              <li><strong>2 ambientes</strong> — si ya tenés más muebles o venís de vivir con alguien, el precio orientativo es a consultar</li>
              <li><strong>Embalaje</strong> — el básico (frágiles y cuadros) está incluido. Si querés que embalemos toda la ropa y los libros también, lo cotizamos aparte.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tips para ahorrar en tu mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Embalá vos mismo la ropa, los libros y los objetos no frágiles en cajas o bolsas antes de que lleguemos — reduce el tiempo de trabajo.</li>
              <li>Desarmá los muebles que podés desarmar solo (estanterías, mesas con patas desmontables).</li>
              <li>Mudarte a mitad de mes es más tranquilo que el 30/31, y hay más disponibilidad de vehículos.</li>
              <li>Vendé o donà los muebles que no vas a llevar antes de la mudanza — menos volumen, menor precio.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta mudarse solo por primera vez en Buenos Aires?</h3>
            <p>Un monoambiente se cotiza según el caso y un 2 ambientes los a consultar. El precio depende del volumen, el piso y la distancia. Damos precio cerrado desde el presupuesto.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Conviene contratar una empresa o ir de a poco con autos?</h3>
            <p>Si tenés muebles, contratar una empresa es casi siempre más conveniente. Ir de a poco con autos lleva muchos más viajes, más tiempo y más riesgo de roturas. Un flete pequeño cubre un monoambiente en un solo viaje.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué hago con los muebles que no me entran?</h3>
            <p>Las opciones son guardamuebles, venta o donación antes de la mudanza. El guardamuebles es ideal cuando los muebles tienen valor o los vas a necesitar en el futuro.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuándo conviene usar guardamuebles?</h3>
            <p>Cuando el nuevo departamento es más chico, cuando hay días de diferencia entre la entrega y la ocupación del nuevo lugar, o cuando venís de la casa de tus padres y llevás solo lo esencial al principio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo doy de alta los servicios?</h3>
            <p>Gas: Metrogas o Naturgy según tu zona. Luz: Edesur o Edenor. Ambos requieren el contrato de alquiler y tu DNI. Hacélo antes de mudarte para que estén activos al llegar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También puede interesarte</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/primer-departamento-buenos-aires" className="text-gold hover:underline text-sm">Primer departamento</Link>
              <Link href="/blog/mudanza-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de monoambiente</Link>
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de 3 ambientes</Link>
              <Link href="/blog/guardamuebles-buenos-aires" className="text-gold hover:underline text-sm">Guardamuebles</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
              <Link href="/blog/como-organizar-mudanza-paso-a-paso" className="text-gold hover:underline text-sm">Cómo organizar tu mudanza</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
