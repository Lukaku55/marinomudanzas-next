import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Proteger la Televisión en una Mudanza | Marino Mudanzas",
  description: "Cómo embalar y transportar un televisor LCD, OLED o QLED sin dañarlo. La TV va siempre vertical. Técnicas, materiales y consejos de Marino Mudanzas.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Cómo Proteger la Televisión en una Mudanza", "item": "https://www.mudanzasmarino.com.ar/blog/como-proteger-television-mudanza" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Proteger la Televisión en una Mudanza | Marino Mudanzas",
  "description": "Cómo embalar y transportar un televisor LCD, OLED o QLED sin dañarlo. La TV va siempre vertical. Técnicas, materiales y consejos de Marino Mudanzas.",
  "url": "https://www.mudanzasmarino.com.ar/blog/como-proteger-television-mudanza",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/como-proteger-television-mudanza" },
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
      "name": "¿Un televisor puede dañarse durante la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, si no se protege correctamente. Los riesgos principales son los golpes laterales, los viajes horizontal (el panel puede romperse bajo su propio peso), y los objetos que se apoyan encima de la pantalla. Con el embalaje adecuado —cartón grueso en ambas caras, film burbuja y posición vertical— el riesgo se minimiza."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si la televisión se rompe en la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuando se contrata a Marino Mudanzas con precio cerrado, el servicio incluye la responsabilidad por el manejo correcto de los elementos. Antes de la mudanza relevamos el estado de los objetos de valor. Si algo se daña por manejo incorrecto de nuestra parte, lo resolvemos. Por eso recomendamos contratar siempre una empresa profesional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay que desmontar la televisión del soporte antes de la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, siempre. Nunca se transporta una TV montada en su soporte base ni en el brazo de pared. El soporte se traslada por separado, bien embalado. Desmontar la pantalla reduce el riesgo de que caiga y permite embalarla correctamente en posición vertical."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo embalamos una televisión si no tenemos la caja original?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Se cubre la pantalla con cartón grueso en ambas caras (delantera y trasera), luego se envuelve con film de burbujas alrededor de todo el televisor y se ajusta con cinta de papel. Nunca se pega cinta scotch directamente sobre la carcasa de plástico porque puede dejar marca o dañar el acabado. La TV siempre viaja en posición vertical."
      }
    },
    {
      "@type": "Question",
      "name": "¿Conviene contratar un embalajista profesional para televisores grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para televisores de 65 pulgadas o más, o para modelos OLED de alta gama, sí recomendamos el embalaje profesional. El panel OLED es muy frágil comparado con LCD/LED. Un embalajista usa materiales de mayor densidad y puede construir una caja de cartón reforzado a medida que garantiza la protección durante el traslado."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Proteger la Televisión en una Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>El televisor es uno de los objetos que más ansiedad genera en una mudanza: es caro, frágil y difícil de embalar sin la caja original. La buena noticia es que con la técnica correcta se puede transportar sin riesgos. La regla más importante es una sola y no tiene excepciones: la televisión siempre viaja en posición vertical, nunca acostada.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué la TV debe ir siempre vertical</h2>
            <p>Los paneles de televisores modernos —LCD, LED, QLED y especialmente OLED— no están diseñados para soportar su propio peso de forma horizontal. Cuando la pantalla viaja acostada, el panel puede flexionarse levemente y generar microfracturas en la capa de cristal o en los píxeles OLED. El daño puede no verse hasta que se enciende el equipo. Viajar vertical, en cambio, distribuye la carga por los bordes del marco, que sí están reforzados.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de televisores y su nivel de fragilidad</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>OLED</strong> — los más delicados. El panel orgánico es extremadamente fino y sensible a presiones y flexiones. Requieren el mayor cuidado en el embalaje y la manipulación.</li>
              <li><strong>QLED / Neo QLED</strong> — más resistentes que los OLED, pero igualmente sensibles a golpes laterales y a viajar en posición horizontal.</li>
              <li><strong>LCD / LED</strong> — los más robustos de los tres. Aún así, el riesgo de daño por transporte inadecuado existe y no se debe subestimar.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar una televisión sin caja original</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Caja original (ideal)</strong> — si la conservás, úsala. Tiene el foam interior moldeado para el modelo exacto.</li>
              <li><strong>Sin caja: cartón grueso</strong> — colocá una lámina de cartón corrugado en la cara frontal (la pantalla) y otra en la cara trasera. Fijálas sin presionar la pantalla.</li>
              <li><strong>Film de burbujas</strong> — envolvé todo el televisor con al menos dos capas de film de burbujas alrededor del perímetro.</li>
              <li><strong>Cinta de papel</strong> — usá cinta de papel o de embalar para sujetar el film. Nunca pegués cinta scotch directamente sobre la carcasa de plástico: puede dejar residuo o dañar el acabado.</li>
              <li><strong>Posición vertical en el camión</strong> — apoyada sobre el borde inferior, asegurada con correa de amarre para que no pueda caer hacia adelante o hacia los lados.</li>
              <li><strong>Nada encima</strong> — nunca apoyar ningún objeto sobre la pantalla durante el transporte.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Antes de la mudanza: pasos previos para tu Smart TV</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Documentá la configuración</strong> — anotá o fotografiá la red WiFi configurada, las apps instaladas y los ajustes de imagen. Algunos Smart TVs pierden configuración si se desconectan por mucho tiempo.</li>
              <li><strong>Desconectá con anticipación</strong> — desenchufá el televisor al menos 30 minutos antes de moverlo para que los componentes internos estén a temperatura ambiente.</li>
              <li><strong>Desmontá del soporte</strong> — nunca se transporta con la base ni con el brazo de pared puestos. El soporte se traslada por separado, bien envuelto.</li>
              <li><strong>Guardá los cables y el control</strong> — en una bolsa etiquetada junto a la TV.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">En verano: el calor también es un riesgo</h2>
            <p>En días de mucho calor, no dejes la televisión dentro del camión cerrado por más de dos horas sin circulación de aire. Los componentes electrónicos pueden sufrir daños por temperatura excesiva. Si la mudanza es larga, priorizá subir la TV a destino lo antes posible o mantenés el camión ventilado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Un televisor puede dañarse durante la mudanza?</h3>
            <p>Sí, si no se protege correctamente. Los riesgos principales son los golpes laterales, viajar horizontal y los objetos apoyados encima de la pantalla. Con el embalaje adecuado y posición vertical, el riesgo se minimiza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si la televisión se rompe en la mudanza?</h3>
            <p>Cuando se contrata con precio cerrado, el servicio incluye la responsabilidad por el manejo correcto. Si algo se daña por manejo incorrecto de nuestra parte, lo resolvemos. Por eso recomendamos contratar siempre una empresa profesional.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hay que desmontar la TV del soporte antes de la mudanza?</h3>
            <p>Sí, siempre. Nunca se transporta una TV montada en su soporte o brazo de pared. El soporte viaja por separado, embalado. Desmontar la pantalla reduce el riesgo de caída y permite embalarla correctamente.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo embalamos una TV si no tenemos la caja original?</h3>
            <p>Cartón grueso en ambas caras (delantera y trasera), film de burbujas alrededor y cinta de papel para sujetar. Nunca cinta scotch sobre el plástico. La TV siempre viaja vertical.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Conviene contratar embalaje profesional para TVs grandes?</h3>
            <p>Para televisores de 65&quot; o más, o modelos OLED de alta gama, sí recomendamos el embalaje profesional. El panel OLED es muy frágil. Un embalajista usa materiales de mayor densidad y puede construir una caja de cartón reforzado a medida.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/como-preparar-electrodomesticos-mudanza" className="text-gold hover:underline text-sm">Cómo preparar electrodomésticos</Link>
              <Link href="/blog/como-embalar-muebles-mudanza" className="text-gold hover:underline text-sm">Cómo embalar muebles</Link>
              <Link href="/blog/que-incluye-una-mudanza" className="text-gold hover:underline text-sm">Qué incluye una mudanza</Link>
              <Link href="/blog/mudanzas-departamentos-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas en departamentos</Link>
              <Link href="/blog/mudanzas-3-ambientes-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas 3 ambientes</Link>
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas casa completa</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
