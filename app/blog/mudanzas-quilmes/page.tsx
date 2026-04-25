import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Quilmes GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Quilmes, Bernal, Berazategui y todo el partido. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Quilmes</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Quilmes es uno de los partidos mas grandes e importantes del sur del Gran Buenos Aires, con una gran variedad de barrios residenciales, zonas comerciales e industriales. En Marino Mudanzas realizamos mudanzas en Quilmes, Bernal, Berazategui y todas las localidades del partido con mas de 80 anos de experiencia.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Quilmes que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Quilmes Centro</strong> — zona comercial con alta densidad de edificios</li>
              <li><strong>Bernal</strong> — barrio residencial tranquilo muy demandado</li>
              <li><strong>Berazategui</strong> — zona en crecimiento con nuevos edificios</li>
              <li><strong>Quilmes Oeste</strong> — zona de casas de familia amplias</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por que elegirnos para tu mudanza en Quilmes</h2>
            <p>Con mas de 80 anos de trayectoria, Marino Mudanzas es la empresa de mudanzas con mayor experiencia de Buenos Aires. Nuestro equipo conoce las particularidades de cada zona del GBA y esta capacitado para resolver cualquier situacion logistica.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Quilmes?</h3>
            <p>Si, es una de las rutas mas frecuentes del sur del GBA. Realizamos mudanzas entre CABA y Quilmes con mucha experiencia en esa zona.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen servicio de guardamuebles para Quilmes?</h3>
            <p>Si, nuestro deposito en Flores, CABA, da servicio a toda la zona sur del GBA incluyendo Quilmes.</p>
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
