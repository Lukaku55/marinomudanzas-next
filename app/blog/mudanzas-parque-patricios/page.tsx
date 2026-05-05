import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Parque Patricios Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Parque Patricios, Buenos Aires. Zona en crecimiento con muchos edificios nuevos. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Parque Patricios</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Parque Patricios es uno de los barrios con mayor crecimiento de Buenos Aires, impulsado por el Distrito Tecnológico y la construcción de nuevos edificios residenciales. En Marino Mudanzas realizamos mudanzas en Parque Patricios con experiencia en edificios nuevos y en las calles del barrio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Parque Patricios</h2>
            <p>El crecimiento edilicio de Parque Patricios genera mucha demanda de mudanzas. Conocemos las particularidades de los nuevos edificios del barrio y coordinamos con los encargados para cumplir con las normas de cada consorcio.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegirnos para tu mudanza en Parque Patricios</h2>
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
