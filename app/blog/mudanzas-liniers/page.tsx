import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Liniers Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Liniers, Buenos Aires. Barrio del oeste con mucha historia. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Liniers</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Liniers es uno de los barrios mas vibrantes del oeste de Buenos Aires, conocido por su mercado y su diversidad cultural. Con una mezcla de casas de familia, departamentos y comercios, Liniers tiene una gran demanda de mudanzas residenciales y comerciales. En Marino Mudanzas tenemos amplia experiencia en este barrio tan particular.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Liniers</h2>
            <p>Liniers tiene calles comerciales muy transitadas como Av. Rivadavia y Av. General Paz en su limite. El Mercado de Liniers genera mucho trafico en la zona. Sus calles internas son mas tranquilas y permiten el acceso de camiones sin dificultad.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Liniers que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Liniers Norte</strong> — zona residencial cerca de Floresta</li>
              <li><strong>Liniers Sur</strong> — zona comercial cerca del mercado</li>
              <li><strong>Rivadavia</strong> — corredor principal con alta rotacion</li>
              <li><strong>Mataderos limite</strong> — zona de transicion al sur</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Liniers</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas comerciales en Liniers?</h3>
            <p>Si, realizamos mudanzas de locales comerciales y oficinas en Liniers, coordinando el traslado para minimizar el tiempo de inactividad del negocio.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden acceder a la zona del mercado en Liniers?</h3>
            <p>Si, conocemos los horarios de trafico de la zona del mercado y planificamos las mudanzas en los momentos de menor congestion.</p>
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
