import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en San Telmo Buenos Aires | Marino Mudanzas",
  description: "Servicio de mudanzas en San Telmo, Buenos Aires. Especialistas en casas historicas y antiguedades. Mas de 80 anos de experiencia. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en San Telmo</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>San Telmo es el barrio mas antiguo de Buenos Aires, con casas chorizo, conventillos y edificios del siglo XIX. Su adoquinado historico y sus calles angostas hacen que cada mudanza sea un desafio logistico particular. En Marino Mudanzas tenemos decadas de experiencia en este barrio tan especial.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Particularidades de las mudanzas en San Telmo</h2>
            <p>Las calles adoquinadas de San Telmo como Defensa, Bolivar y Chile requieren camiones con buena suspension. Muchas casas historicas tienen umbrales angostos, escaleras de caracol y techos altos. Los domingos, la Feria de San Telmo restringe el acceso vehicular a varias calles.</p>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Zonas de San Telmo que cubrimos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>San Telmo historico</strong> — casas chorizo y conventillos del siglo XIX</li>
              <li><strong>Defensa</strong> — calle peatonal con alta rotacion de inquilinos</li>
              <li><strong>Parque Lezama</strong> — zona verde con casas de familia amplias</li>
              <li><strong>Montserrat limite</strong> — zona de transicion cerca del microcentro</li>
            </ul>
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en San Telmo</h2>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Pueden mover antiguedades y muebles de epoca en San Telmo?</h3>
            <p>Si, somos especialistas en el traslado de muebles antiguos y objetos de coleccion, usando materiales de embalaje especiales para proteger cada pieza.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Trabajan en calles adoquinadas de San Telmo?</h3>
            <p>Si, nuestros camiones estan preparados para transitar por las calles adoquinadas de San Telmo sin danar los objetos transportados.</p>
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
