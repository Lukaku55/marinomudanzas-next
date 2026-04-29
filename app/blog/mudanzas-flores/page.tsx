import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Flores Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Flores, Buenos Aires. Nuestro barrio de origen desde 1950. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Flores Buenos Aires | Marino Mudanzas",
  "description": "Servicio de mudanzas en Flores, Buenos Aires. Nuestro barrio de origen desde 1950. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-flores",
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
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Flores</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Flores es nuestro barrio de origen y donde tenemos nuestra base de operaciones desde 1950. Conocemos cada calle, cada edificio y cada particularidad del barrio como ninguna otra empresa. Av. Juan Bautista Alberdi 2968 es nuestra dirección desde hace más de 70 años, lo que nos convierte en la empresa de mudanzas con mayor arraigo en Flores.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Flores</h2>
            <p>Flores es un barrio muy diverso, con zonas residenciales tranquilas como Floresta y Villa Luro, y zonas comerciales activas como Avenida Rivadavia y Avenida Nazca. Sus calles mezclan edificios de departamentos modernos con casas de familia de varias plantas. Al ser nuestro barrio base, conocemos cada restricción de tráfico y cada norma de consorcio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Flores que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flores centro</strong> — zona comercial con edificios de departamentos</li>
              <li><strong>Floresta</strong> — barrio residencial tranquilo con casas de familia</li>
              <li><strong>Villa Luro</strong> — zona de transición con mucha demanda</li>
              <li><strong>Parque Chacabuco límite</strong> — zona verde con casas amplias</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Flores</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen depósito de guardamuebles en Flores?</h3>
            <p>Sí, nuestro depósito de guardamuebles está ubicado en Flores, con espacios seguros, limpios y monitoreados las 24hs para almacenaje por el tiempo que necesites.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto tiempo tardan en llegar a Flores?</h3>
            <p>Al tener nuestra base en Flores, podemos estar en cualquier punto del barrio en muy poco tiempo. Esto nos permite ser muy puntuales con los horarios acordados.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas dentro del mismo barrio en Flores?</h3>
            <p>Sí, realizamos mudanzas dentro del mismo barrio, incluso entre calles cercanas. No hay distancia mínima para nuestro servicio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
