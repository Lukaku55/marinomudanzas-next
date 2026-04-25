import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Belgrano Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en Belgrano, Buenos Aires. Especialistas en Belgrano R, C y Chico. Más de 80 años de experiencia. Presupuesto sin cargo. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Belgrano</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Belgrano es uno de los barrios más elegantes y exclusivos de Buenos Aires, con una gran variedad de edificios de alta categoría, casas de gran porte y departamentos de lujo. En Marino Mudanzas llevamos más de 80 años realizando mudanzas en Belgrano R, Belgrano C y Belgrano Chico, con experiencia en el manejo de muebles de alto valor y objetos delicados.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en Belgrano</h2>
            <p>Belgrano presenta características únicas que requieren experiencia especializada. Sus avenidas principales como Cabildo y Juramento tienen mucho tráfico y restricciones de carga, mientras que las calles internas de Belgrano Chico son angostas y arboladas. Muchos edificios de Belgrano R tienen porteros eléctricos y normas estrictas de consorcio que coordinamos previamente.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de Belgrano que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Belgrano R</strong> — casas de gran porte y edificios residenciales de lujo</li>
              <li><strong>Belgrano C</strong> — zona comercial con alta densidad de edificios</li>
              <li><strong>Belgrano Chico</strong> — embajadas, residencias y casas históricas</li>
              <li><strong>Núñez límite</strong> — zona de transición cerca del río</li>
              <li><strong>Colegiales límite</strong> — barrio bohemio con mucha rotación</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Belgrano</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Coordinan con los encargados de edificios en Belgrano?</h3>
            <p>Sí, coordinamos previamente con los encargados de edificios para respetar los horarios permitidos y los requisitos del consorcio. Muchos edificios de Belgrano tienen normas estrictas que conocemos de antemano.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Tienen experiencia en mudanzas de casas grandes en Belgrano?</h3>
            <p>Sí, contamos con camiones de distintos tamaños y personal especializado para mudanzas de casas de gran porte en Belgrano Chico y Belgrano R, incluyendo el desmontaje y montaje de muebles a medida.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Hacen mudanzas internacionales desde Belgrano?</h3>
            <p>Realizamos mudanzas al interior del país y países limítrofes. Para mudanzas internacionales podemos asesorarte sobre los trámites necesarios.</p>

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
