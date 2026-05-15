import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fletes en Buenos Aires | Marino Mudanzas",
  description: "Servicio de fletes en Buenos Aires. Traslado de muebles, electrodomesticos y objetos en CABA y GBA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Fletes en Buenos Aires | Marino Mudanzas",
  "description": "Servicio de fletes en Buenos Aires. Traslado de muebles, electrodomesticos y objetos en CABA y GBA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/fletes-buenos-aires",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Fletes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>El servicio de fletes en Buenos Aires es ideal cuando necesitás trasladar uno o varios muebles, electrodomésticos u objetos sin necesitar una mudanza completa. En Marino Mudanzas ofrecemos servicio de fletes en toda la Ciudad de Buenos Aires y el Gran Buenos Aires con más de 80 años de experiencia.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuándo necesitás un flete?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Compraste un mueble y necesitás que te lo lleven a tu domicilio</li>
              <li>Necesitás mover uno o varios muebles entre dos domicilios</li>
              <li>Vendiste algo y necesitás enviárselo al comprador</li>
              <li>Necesitás llevar muebles a un guardamuebles</li>
              <li>Tenés objetos de gran tamaño que no entran en tu auto</li>
              <li>Necesitás mover equipamiento de oficina o comercio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Diferencia entre flete y mudanza</h2>
            <p>Un flete es el traslado de uno o pocos objetos de un punto a otro, mientras que una mudanza implica el traslado completo del contenido de un hogar u oficina. Los fletes son más rápidos y económicos que las mudanzas completas, y son perfectos para traslados puntuales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué podemos trasladar?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Muebles de todo tipo y tamaño</li>
              <li>Electrodomésticos — heladeras, lavarropas, cocinas</li>
              <li>Colchones y sommiers</li>
              <li>Cajas fuertes</li>
              <li>Equipamiento de oficina</li>
              <li>Bicicletas y equipos de ejercicio</li>
              <li>Instrumentos musicales</li>
              <li>Obras de arte y objetos de valor</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas donde realizamos fletes</h2>
            <p>Realizamos fletes en toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires. También hacemos fletes de larga distancia al interior del país para envíos que lo requieran.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre fletes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta un flete en Buenos Aires?</h3>
            <p>El costo depende de la distancia, el volumen y el tipo de objetos a trasladar. Ofrecemos presupuesto sin cargo adaptado a cada necesidad.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden subir muebles a pisos altos?</h3>
            <p>Sí, nuestros operarios están capacitados para subir muebles por escalera o por soga cuando el ascensor no permite el paso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que contratar un flete?</h3>
            <p>Para fletes pequeños podemos coordinar con 24 a 48 horas de anticipación. Para objetos grandes o fletes de larga distancia recomendamos coordinar con más tiempo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
