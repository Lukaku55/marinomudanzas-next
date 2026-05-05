import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Montserrat Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Montserrat, Buenos Aires. Experiencia en edificios historicos del centro de CABA. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Montserrat</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Montserrat es uno de los barrios históricos del centro de Buenos Aires, con edificios de gran valor arquitectónico y calles de mucho movimiento. En Marino Mudanzas realizamos mudanzas en Montserrat con experiencia en el manejo de edificios históricos y en la logística del centro porteño.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Montserrat</h2>
            <p>Las mudanzas en Montserrat requieren una coordinación especial por el alto tráfico del centro y las restricciones de circulación en algunas calles. Planificamos el acceso del camión con anticipación para minimizar demoras.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegirnos para tu mudanza en Montserrat</h2>
            <p>Con más de 80 años de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada barrio de CABA y está capacitado para resolver cualquier situación logística. Flota propia, embalaje incluido y seguro de carga en todos nuestros servicios.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono y te damos un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs.</p>
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
