import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Transportar Plantas en tu Mudanza | Marino Mudanzas",
  description: "Cómo llevar tus plantas en la mudanza sin que se dañen: qué plantas aguantan el camión, cómo embalar macetas y qué hacer con las plantas más grandes. Buenos Aires.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Cómo Transportar Plantas en tu Mudanza", "item": "https://www.mudanzasmarino.com.ar/blog/mudanzas-con-plantas-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Transportar Plantas en tu Mudanza | Marino Mudanzas",
  "description": "Cómo llevar tus plantas en la mudanza sin que se dañen: qué plantas aguantan el camión, cómo embalar macetas y qué hacer con las plantas más grandes.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-con-plantas-buenos-aires",
  "datePublished": "2026-08-05",
  "dateModified": "2026-08-05",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/mudanzas-con-plantas-buenos-aires" },
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
      "name": "¿Se pueden llevar plantas en el camión de mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, con los cuidados adecuados. Las plantas robustas (cactus, suculentas, plantas de interior resistentes) aguantan bien el traslado en camión. Las plantas tropicales sensibles al calor o el frío extremo convienen ir en el asiento del auto propio si el viaje es largo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas plantas entran en el camión de mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende del tamaño del camión y del volumen del resto de la mudanza. Si tenés muchas plantas grandes, avisanos al momento de coordinar el presupuesto para que reservemos el espacio necesario dentro del camión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Las plantas se pueden dañar en el traslado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es posible, especialmente en verano con mucho calor dentro del camión cerrado. Las plantas tropicales y las más delicadas son las más sensibles. Para traslados de más de 2 horas o en días de mucho calor, recomendamos llevarlas en el auto propio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hago con plantas muy grandes que no entran fácil en el camión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las plantas de gran porte (árboles de interior, plantas de más de 1,5 metros) convienen ir en el asiento trasero o baúl del auto propio. Si no tenés auto o son demasiadas, avisanos con anticipación para que reservemos espacio especial en el camión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo protejo mis plantas delicadas durante la mudanza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No riegues las plantas 48 horas antes para que la tierra no esté encharcada. Envolvé las macetas de barro en papel burbuja para evitar roturas. Ubicá las plantas en un lugar ventilado del camión y evitá que queden aplastadas por cajas."
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Transportar Plantas en tu Mudanza</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Las plantas son uno de los objetos que más dudas generan a la hora de mudarse: ¿van en el camión? ¿cómo se embalan las macetas? ¿qué pasa si hace mucho calor? La buena noticia es que la mayoría de las plantas aguantan perfectamente el traslado en camión si las preparás bien. Acá te contamos cómo hacerlo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Plantas que aguantan bien el camión</h2>
            <p>Estas variedades toleran sin problemas un traslado en camión cerrado de hasta 3 horas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cactus y suculentas</strong> — muy resistentes, no les afecta la oscuridad ni los cambios de temperatura moderados</li>
              <li><strong>Plantas de interior resistentes</strong> — pothos, sansevieria, drácena, ficus rubber</li>
              <li><strong>Plantas de hoja dura</strong> — aglaonema, zamioculca, filodendro</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Plantas que NO deben ir más de 2 horas en camión cerrado</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plantas tropicales sensibles al calor extremo</strong> — calatheas, marantas, helechos, orquídeas</li>
              <li><strong>Cactus frágiles o columnares muy altos</strong> — pueden volcarse o romperse con el movimiento</li>
              <li><strong>Plantas en período de floración</strong> — el estrés del traslado puede hacerles caer las flores</li>
            </ul>
            <p>Para estas plantas, si el traslado es largo o es un día de mucho calor, lo ideal es llevarlas en el asiento trasero del auto propio.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo embalar las macetas según el material</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Macetas plásticas</strong> — metelas en una bolsa de residuos resistente atada al tronco para que no se vuelque la tierra, y atá las ramas con un hilo suave si son largas</li>
              <li><strong>Macetas de barro o cerámica</strong> — envolvelas en papel burbuja para evitar que se rompan con los golpes del camión</li>
              <li><strong>Tierra muy húmeda</strong> — no riegues las plantas en las 48 horas previas a la mudanza para que la tierra no esté encharcada ni pese de más</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Plantas grandes: ¿camión o auto propio?</h2>
            <p>Las plantas de más de 1,5 metros o las que tienen raíces muy frágiles convienen ir en el asiento trasero del auto. El movimiento constante del camión y la oscuridad pueden estresarlas más que un viaje corto en auto con luz y ventilación.</p>
            <p>Si no tenés auto o son demasiadas plantas grandes, <strong>avisanos al momento de coordinar la mudanza</strong> para que reservemos espacio adecuado dentro del camión y no queden aplastadas por cajas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos generales para el traslado de plantas</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No riegues en las 48 horas previas — tierra seca pesa menos y no se derrama</li>
              <li>Ubicá las plantas en un lugar ventilado del camión, lejos de cajas pesadas que puedan caerse</li>
              <li>En verano con mucho calor, preferí llevarlas en el auto propio con el aire acondicionado puesto</li>
              <li>Al llegar al nuevo lugar, sacalas del camión antes que el resto para que recuperen la luz lo antes posible</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué incluye nuestro servicio?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Desarmado y armado de muebles</li>
              <li>Embalaje de objetos frágiles, vajilla y cuadros</li>
              <li>Vehículo del tamaño adecuado</li>
              <li>Presupuesto sin cargo y precio cerrado</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre plantas en la mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Se pueden llevar plantas en el camión de mudanza?</h3>
            <p>Sí, con los cuidados adecuados. Las plantas robustas aguantan bien. Las tropicales y delicadas convienen ir en el auto propio si el viaje es largo.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuántas plantas entran en el camión?</h3>
            <p>Depende del tamaño del camión y del resto de la mudanza. Si tenés muchas plantas grandes, avisanos al coordinar el presupuesto para reservar el espacio necesario.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Las plantas se pueden dañar en el traslado?</h3>
            <p>Es posible, especialmente en días de mucho calor o en viajes de más de 2 horas. Las plantas tropicales son las más sensibles. Para esos casos, el auto propio es la mejor opción.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué hago con plantas muy grandes?</h3>
            <p>Llevárselas en el auto propio es lo ideal. Si no es posible, avisanos con anticipación para reservar espacio especial en el camión.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo protejo mis plantas delicadas?</h3>
            <p>No riegues 48hs antes, envolvé las macetas de barro en papel burbuja y ubicalas en un lugar ventilado del camión, lejos de cajas pesadas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contanos tu situación y te damos un precio cerrado en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20un%20presupuesto%20sin%20cargo%20para%20una%20mudanza" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">También te puede interesar</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/blog/mudanzas-en-verano" className="text-gold hover:underline text-sm">Mudanzas en verano</Link>
              <Link href="/blog/mudanzas-en-invierno" className="text-gold hover:underline text-sm">Mudanzas en invierno</Link>
              <Link href="/blog/como-preparar-electrodomesticos-mudanza" className="text-gold hover:underline text-sm">Cómo preparar electrodomésticos</Link>
              <Link href="/blog/mudanzas-fin-de-ano-buenos-aires" className="text-gold hover:underline text-sm">Mudanzas a fin de año</Link>
              <Link href="/blog/mudanzas-casa-completa-buenos-aires" className="text-gold hover:underline text-sm">Mudanza de casa completa</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
