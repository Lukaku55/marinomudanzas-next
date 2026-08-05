import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Flete o Mudanza? Diferencias y Cuándo Conviene Cada Uno | Marino Mudanzas",
  description: "Flete vs mudanza completa: qué incluye cada servicio, diferencias de precio y cuándo conviene cada opción en Buenos Aires. Presupuesto sin cargo: 4611-1818.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "¿Flete o Mudanza? Diferencias y Cuándo Conviene Cada Uno", "item": "https://www.mudanzasmarino.com.ar/blog/diferencias-flete-y-mudanza-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "¿Flete o Mudanza? Diferencias y Cuándo Conviene Cada Uno | Marino Mudanzas",
  "description": "Flete vs mudanza completa: qué incluye cada servicio, diferencias de precio y cuándo conviene cada opción en Buenos Aires. Presupuesto sin cargo.",
  "url": "https://www.mudanzasmarino.com.ar/blog/diferencias-flete-y-mudanza-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/diferencias-flete-y-mudanza-buenos-aires" },
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
      "name": "¿Cuál es la diferencia de precio entre un flete y una mudanza completa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un flete básico puede costar entre un 40 y un 60% menos que una mudanza completa, pero no incluye operarios: vos cargás, descargás y armás todo. La mudanza completa tiene un costo mayor pero incluye personal especializado, desarmado y armado de muebles, y embalaje de frágiles."
      }
    },
    {
      "@type": "Question",
      "name": "¿El flete incluye operarios que cargan y descargan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En un flete básico, no. El servicio incluye el vehículo y el conductor, pero la carga y descarga corre por cuenta del cliente. En una mudanza completa sí se incluyen operarios especializados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo vale la pena pagar más por una mudanza completa?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vale la pena cuando tenés muebles grandes (placares, camas matrimoniales, bibliotecas), vivís en un piso alto, tenés objetos frágiles o querés evitar el riesgo de rotura y el esfuerzo físico. Para un departamento completo, la mudanza con operarios siempre es la mejor opción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Marino Mudanzas hace fletes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Realizamos tanto fletes como mudanzas completas. Consultanos el detalle de tu traslado y te recomendamos el servicio más conveniente según lo que necesitás mover."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sé qué servicio necesito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si solo necesitás mover pocas cosas sin muebles grandes y podés cargar vos mismo, un flete puede alcanzar. Si tenés muebles, muchas cajas o escaleras de por medio, una mudanza completa con operarios es la opción más conveniente. Pedinos un presupuesto sin cargo y te asesoramos."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">¿Flete o Mudanza? Diferencias y Cuándo Conviene Cada Uno</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Cuando llegó el momento de mudarse, una de las primeras decisiones es elegir entre un flete y una mudanza completa. La confusión es frecuente: mucha gente usa los términos como si fueran sinónimos, pero no lo son. Acá te explicamos las diferencias reales, los precios y cómo saber cuál necesitás.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué es un flete?</h2>
            <p>Un flete básico incluye el <strong>vehículo y el conductor</strong>. El chofer maneja, pero la carga y la descarga corren por cuenta del cliente. Si pedís un flete, vos (o las personas que te ayuden) van a cargar los muebles en el camión y descargarlos en destino. El conductor no está obligado a ayudar con la carga.</p>
            <p>El flete conviene cuando:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tenés pocas cosas y sin muebles grandes o pesados</li>
              <li>La distancia es corta y podés armar un equipo de amigos para cargar</li>
              <li>No hay escaleras complicadas ni pisos altos</li>
              <li>Querés reducir el costo al mínimo y asumís el trabajo físico</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué es una mudanza completa?</h2>
            <p>Una mudanza completa incluye <strong>operarios especializados que cargan, descargan, desarman y arman los muebles</strong>, y embalan los objetos frágiles (vajilla, cuadros, televisores, espejos). Vos no tenés que hacer esfuerzo físico: el equipo se encarga de todo desde que llegan hasta que el último mueble está armado en destino.</p>
            <p>La mudanza completa conviene cuando:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tenés un departamento completo con muebles grandes (placard, cama matrimonial, biblioteca)</li>
              <li>Vivís en un piso alto con escalera o ascensor angosto</li>
              <li>Tenés objetos frágiles o de valor que requieren embalaje profesional</li>
              <li>No tenés quién te ayude con la carga o no querés depender de favores</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanza con embalaje completo</h2>
            <p>El nivel más completo del servicio. Además de todo lo que incluye la mudanza completa, el equipo de embalajistas llega el día anterior (o el mismo día) y embala toda la vajilla, la ropa colgada, los libros, los cuadros y los objetos delicados. Ideal para mudanzas de 4 ambientes en adelante o cuando hay mucha vajilla y objetos de valor.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Comparativa rápida</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flete básico</strong> — solo transporte, vos cargás, precio menor, mayor riesgo de rotura sin embalaje profesional</li>
              <li><strong>Mudanza completa</strong> — operarios + transporte + desarmado y embalaje de frágiles, precio mayor, mínimo esfuerzo del cliente</li>
              <li><strong>Mudanza con embalaje total</strong> — todo lo anterior más embalaje previo de toda la vivienda, ideal para casas grandes o cuando no tenés tiempo de embalar</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre flete vs mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuál es la diferencia de precio entre un flete y una mudanza completa?</h3>
            <p>Un flete básico puede costar entre un 40 y un 60% menos que una mudanza completa, pero no incluye operarios. La mudanza tiene un costo mayor pero incluye personal, desarmado y armado, y embalaje de frágiles.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El flete incluye operarios?</h3>
            <p>En un flete básico, no. Solo incluye el vehículo y el conductor. La carga y descarga corre por cuenta del cliente.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuándo vale la pena pagar más por una mudanza completa?</h3>
            <p>Cuando tenés muebles grandes, vivís en un piso alto, tenés objetos frágiles o querés evitar el esfuerzo físico y el riesgo de roturas. Para un departamento completo, siempre es la mejor opción.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Marino Mudanzas hace fletes?</h3>
            <p>Sí. Hacemos tanto fletes como mudanzas completas. Consultanos y te recomendamos el servicio más conveniente según lo que necesitás mover.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo sé qué servicio necesito?</h3>
            <p>Si solo movés pocas cosas sin muebles grandes y podés cargar vos mismo, un flete alcanza. Si tenés muebles, muchas cajas o escaleras, una mudanza completa es la opción más conveniente. Pedinos un presupuesto sin cargo y te asesoramos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/fletes-buenos-aires" className="text-gold hover:underline text-sm">Fletes en Buenos Aires</Link>
              <Link href="/blog/mudanzas-departamentos-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas de departamentos</Link>
              <Link href="/blog/mudanzas-edificios-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en edificios</Link>
              <Link href="/blog/cuanto-tarda-una-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto tarda una mudanza?</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta una mudanza?</Link>
              <Link href="/blog/mudanza-monoambiente-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de monoambiente</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
