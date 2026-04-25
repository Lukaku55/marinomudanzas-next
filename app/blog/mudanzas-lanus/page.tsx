import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Lanus GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en Lanus Este, Lanus Oeste y Remedios de Escalada. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Lanus</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Lanus es uno de los partidos mas poblados del sur del Gran Buenos Aires, con una gran cantidad de departamentos y casas de familia. En Marino Mudanzas realizamos mudanzas en Lanus Este, Lanus Oeste y Remedios de Escalada con la precision y el cuidado que nos caracteriza hace mas de 80 anos.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de Lanus que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Lanus Este</strong> — zona residencial con edificios y casas</li>
              <li><strong>Lanus Oeste</strong> — zona comercial con alta densidad</li>
              <li><strong>Remedios de Escalada</strong> — barrio familiar tranquilo</li>
              <li><strong>Gerli</strong> — zona industrial y residencial</li>
              <li><strong>Avellaneda limite</strong> — zona de transicion al norte</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Lanus</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas desde CABA a Lanus?</h3>
            <p>Si, realizamos mudanzas entre CABA y Lanus frecuentemente. Es una de las rutas mas demandadas del sur del GBA.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Tienen experiencia en mudanzas de departamentos en Lanus?</h3>
            <p>Si, Lanus tiene una gran cantidad de edificios de departamentos y tenemos amplia experiencia en mudanzas en este tipo de propiedades.</p>
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
