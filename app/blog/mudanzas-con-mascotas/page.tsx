import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Mudarse con Mascotas en Buenos Aires | Marino Mudanzas",
  description: "Guía completa para mudarse con perros, gatos y otras mascotas en Buenos Aires. Consejos de expertos para que tu mascota viva la mudanza sin estrés.",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Mudarse con Mascotas en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Mudarse con mascotas requiere una planificación especial. Los perros, gatos y otras mascotas son muy sensibles a los cambios de ambiente y pueden estresarse durante una mudanza. En Marino Mudanzas compartimos los mejores consejos para que la experiencia sea lo más tranquila posible para toda la familia, incluidos los animales.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Antes de la mudanza</h2>
            <p>La preparación es clave. Empezá a acostumbrar a tu mascota a la nueva rutina semanas antes de la mudanza. Si vas a usar un transporter o jaula, dejalo abierto en casa para que tu mascota pueda explorarlo y asociarlo con algo positivo. Visitá al veterinario para asegurarte de que tu mascota esté en buen estado de salud y al día con las vacunas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El día de la mudanza</h2>
            <p>El día de la mudanza es el más estresante para las mascotas. Lo ideal es que un familiar o amigo se encargue de la mascota fuera del domicilio mientras se hace la carga. El ruido, el movimiento de muebles y la entrada y salida de personas puede generar mucha ansiedad. Si no es posible, colocá a tu mascota en una habitación tranquila con agua, comida y sus juguetes favoritos, y avisale a los operarios que hay una mascota en la casa.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos específicos para perros</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mantené su rutina de paseos en lo posible durante los días previos</li>
              <li>Llevá sus objetos favoritos al nuevo hogar primero — su cama, juguetes y manta</li>
              <li>Explorá el nuevo barrio juntos antes de la mudanza si es posible</li>
              <li>Avisá a los vecinos del nuevo edificio que tenés un perro</li>
              <li>Verificá que el nuevo hogar no tenga peligros — cables sueltos, ventanas sin protección</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos específicos para gatos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Los gatos son muy territoriales — la adaptación puede tardar más que en perros</li>
              <li>Mantenelos en una sola habitación los primeros días con todo lo que necesitan</li>
              <li>No cambies su arena, comida ni horarios durante el período de adaptación</li>
              <li>Usá feromonas sintéticas (Feliway) para reducir el estrés</li>
              <li>No los dejés salir al exterior hasta que estén completamente adaptados al nuevo hogar</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas en edificios con mascotas</h2>
            <p>En Buenos Aires muchos consorcios tienen reglamentos específicos sobre mascotas. Antes de mudarte, verificá con el encargado del nuevo edificio cuáles son las normas — peso máximo permitido, razas aceptadas y uso del ascensor. En Marino Mudanzas coordinamos con los encargados de ambos edificios para facilitar el proceso.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Después de la mudanza</h2>
            <p>La adaptación al nuevo hogar puede tomar desde unos días hasta varias semanas dependiendo de la mascota. Mantené las rutinas lo más estables posible — horarios de comida, paseos y juego. Dale tiempo y paciencia. Si notás signos de estrés prolongado como falta de apetito, agresividad o cambios de comportamiento, consultá al veterinario.</p>

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
