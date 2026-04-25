import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Isidro GBA | Marino Mudanzas Buenos Aires",
  description: "Servicio de mudanzas en San Isidro, Beccar, Martinez y barrios privados. Mas de 80 anos de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Isidro</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>San Isidro es uno de los partidos mas exclusivos del Gran Buenos Aires, con casas de campo, chacras y barrios cerrados. En Marino Mudanzas tenemos experiencia en el traslado de mobiliario de alto valor en San Isidro, Beccar, Martinez y todas las localidades del partido.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Localidades de San Isidro que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Isidro centro</strong> — zona historica con casas coloniales</li>
              <li><strong>Beccar</strong> — barrio residencial premium</li>
              <li><strong>Martinez</strong> — zona de countries y barrios privados</li>
              <li><strong>Acassuso</strong> — barrio tranquilo cerca del rio</li>
              <li><strong>Boulogne</strong> — zona de transicion con buena conectividad</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Isidro</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden ingresar a countries y barrios privados en San Isidro?</h3>
            <p>Si, coordinamos previamente el acceso con la administracion de cada country o barrio privado en San Isidro y Martinez.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Hacen mudanzas de chacras y casas grandes en San Isidro?</h3>
            <p>Si, contamos con camiones de gran capacidad para mudanzas de propiedades grandes en San Isidro, con personal especializado en el manejo de muebles de alto valor.</p>
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
