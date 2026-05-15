import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Hurlingham GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Hurlingham y zona oeste del GBA. Mas de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Hurlingham</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Hurlingham es un partido del oeste del Gran Buenos Aires con una gran variedad de barrios residenciales y countries. En Marino Mudanzas realizamos mudanzas en Hurlingham y toda la zona oeste del GBA con más de 80 años de experiencia.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Hurlingham</h2>
            <p>Hurlingham tiene una combinación de barrios urbanos y countries que requieren diferentes tipos de logística. Para mudanzas en countries coordinamos previamente con la administración para cumplir con los requisitos de acceso.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegirnos para tu mudanza en Hurlingham</h2>
            <p>Con más de 80 años de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada zona del GBA y está capacitado para resolver cualquier situación logística. Flota propia, embalaje incluido y seguro de carga en todos nuestros servicios.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas cercanas donde también operamos</h2>
            <p>Si tu mudanza involucra zonas limítrofes, también cubrimos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/mudanzas-moron" className="text-gold hover:underline">Mudanzas en Morón</a></li>
              <li><a href="/blog/mudanzas-tres-de-febrero" className="text-gold hover:underline">Mudanzas en Tres de Febrero</a></li>
              <li><a href="/blog/mudanzas-ituzaingo" className="text-gold hover:underline">Mudanzas en Ituzaingó</a></li>
              <li><a href="/blog/mudanzas-merlo" className="text-gold hover:underline">Mudanzas en Merlo</a></li>
              <li><a href="/blog/mudanzas-la-matanza" className="text-gold hover:underline">Mudanzas en La Matanza</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>Contactános por WhatsApp o teléfono y te damos un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs.</p>
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
