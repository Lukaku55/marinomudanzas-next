import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Villa Crespo Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Villa Crespo, Buenos Aires. Barrio en pleno crecimiento. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Villa Crespo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Villa Crespo es uno de los barrios que mas ha crecido en los ultimos anos, con edificios nuevos, lofts reciclados y jovenes profesionales que se mudan constantemente. Su cercania con Palermo lo convierte en una alternativa cada vez mas buscada. En Marino Mudanzas tenemos amplia experiencia en mudanzas en Villa Crespo.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Villa Crespo</h2>
            <p>Villa Crespo tiene una mezcla de edificios nuevos con amenities y galpones reciclados convertidos en lofts. Las calles como Thames, Malabia y Scalabrini Ortiz tienen mucho trafico. La zona del Mercado de Pulgas concentra antiguedades y muebles de gran porte.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Villa Crespo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Villa Crespo Norte</strong> — zona de lofts reciclados cerca de Palermo</li>
              <li><strong>Villa Crespo Sur</strong> — zona de edificios nuevos y casas de familia</li>
              <li><strong>Scalabrini Ortiz</strong> — corredor con alta rotacion de inquilinos</li>
              <li><strong>Mercado de Pulgas</strong> — zona de anticuarios y galerias de arte</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Villa Crespo</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen experiencia en mudanzas de lofts en Villa Crespo?</h3>
            <p>Si, tenemos experiencia en mudanzas de lofts con espacios abiertos y techos altos, incluyendo el traslado de muebles de gran porte que no entran por el ascensor.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de estudios y oficinas en Villa Crespo?</h3>
            <p>Si, Villa Crespo tiene muchos estudios creativos y oficinas. Realizamos mudanzas comerciales minimizando el tiempo de inactividad de tu negocio.</p>
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
