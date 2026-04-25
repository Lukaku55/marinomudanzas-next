import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Boedo Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Boedo, Buenos Aires. Barrio familiar y tradicional. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Boedo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Boedo es uno de los barrios mas tradicionales y familiares de Buenos Aires. Con una mezcla de casas de familia y edificios de departamentos, es un barrio ideal para vivir. En Marino Mudanzas tenemos decadas de experiencia realizando mudanzas en Boedo con la eficiencia y el cuidado que nos caracteriza.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Boedo</h2>
            <p>Boedo tiene avenidas amplias como San Juan y Boedo que facilitan el acceso de camiones. Sus casas de familia suelen tener jardin y garaje. Los edificios son en su mayoria de los anos 60 y 70, con ascensores de tamano estandar.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Boedo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Boedo Centro</strong> — zona comercial con cafes y bares tradicionales</li>
              <li><strong>San Juan</strong> — avenida principal con edificios de departamentos</li>
              <li><strong>Inclan</strong> — zona residencial tranquila con casas de familia</li>
              <li><strong>Nueva Pompeya limite</strong> — zona de transicion al sur</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Boedo</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de casas con jardin en Boedo?</h3>
            <p>Si, tenemos experiencia en mudanzas de casas con jardin, incluyendo el traslado de muebles de exterior, parrillas y elementos de jardin.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Trabajan en fin de semana en Boedo?</h3>
            <p>Si, trabajamos de lunes a sabado. Para mudanzas en sabado recomendamos coordinar con anticipacion.</p>
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
