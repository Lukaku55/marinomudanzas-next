import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Mataderos Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Mataderos, Buenos Aires. Barrio tradicional del sur de CABA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Mataderos Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Mataderos, Buenos Aires. Barrio tradicional del sur de CABA. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-mataderos",
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
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Mataderos</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Mataderos es un barrio con mucha historia y tradicion en el sur de Buenos Aires, conocido por su feria de artesanias y su ambiente gaucho. Con casas de familia y edificios de baja altura, Mataderos es un barrio tranquilo con una demanda constante de mudanzas. En Marino Mudanzas tenemos experiencia en cada rincon del barrio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Mataderos</h2>
            <p>Mataderos tiene calles amplias que facilitan el acceso de camiones. Sus casas de familia son en su mayoria de una o dos plantas, lo que facilita el proceso de mudanza. La Feria de Mataderos los domingos genera restricciones de acceso en algunas calles del barrio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Mataderos que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mataderos Centro</strong> — zona comercial alrededor de la feria</li>
              <li><strong>Mataderos Norte</strong> — zona residencial con casas de familia</li>
              <li><strong>Mataderos Sur</strong> — zona tranquila cerca del limite con Lomas</li>
              <li><strong>Villa Lugano limite</strong> — zona de transicion al este</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Mataderos</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas en Mataderos los dias de feria?</h3>
            <p>Recomendamos evitar los domingos para mudanzas en la zona de la feria. De lunes a sabado no hay restricciones y realizamos mudanzas sin inconvenientes.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden hacer mudanzas a Mataderos desde el norte de CABA?</h3>
            <p>Si, realizamos mudanzas desde cualquier barrio de CABA hacia Mataderos. Conocemos las rutas mas eficientes para optimizar el tiempo del traslado.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicita tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o telefono y te damos un presupuesto sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedi tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
