import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas a Fin de Mes en Buenos Aires | Marino Mudanzas",
  description: "¿Te mudás a fin de mes? Conocé cómo organizarte para la fecha más demandada del mes. Reservá con anticipación. Más de 80 años de experiencia. Tel 4611-1818",
};

export default function Page() {
  return (
    <>
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas a Fin de Mes en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>El fin de mes es, por lejos, el momento más demandado para mudarse en Buenos Aires. La mayoría de los contratos de alquiler vencen los últimos días del mes, lo que genera una concentración enorme de mudanzas en un período muy corto. Si te mudás a fin de mes, esta guía te ayuda a organizarte para que todo salga bien.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Por qué hay tanta demanda a fin de mes?</h2>
            <p>En Argentina la gran mayoría de los contratos de alquiler se firman con vencimiento el último día del mes. Esto hace que entre el 25 y el 31 de cada mes se concentre más del 60% de las mudanzas de todo el período. Las empresas de mudanzas tienen su agenda llena con semanas de anticipación durante esos días.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Con cuánta anticipación hay que reservar?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fin de mes enero y julio</strong> — reservar con 3 a 4 semanas de anticipación, son los meses de mayor rotación</li>
              <li><strong>Fin de mes resto del año</strong> — reservar con al menos 2 semanas de anticipación</li>
              <li><strong>Último día del mes</strong> — es el día más demandado de todos, reservar con el mayor tiempo posible</li>
              <li><strong>Mudanzas grandes (casas, oficinas)</strong> — siempre con mínimo 3 semanas sin importar el mes</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consejos para mudarse a fin de mes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reservá la empresa de mudanzas antes de confirmar la fecha exacta con el propietario</li>
              <li>Avisá al consorcio de origen y destino con varios días de anticipación para reservar el ascensor</li>
              <li>Empezá a embalar con al menos una semana de anticipación</li>
              <li>Coordiná la entrega de llaves del departamento anterior para el mediodía, no a última hora</li>
              <li>Tené en cuenta que el tráfico en CABA es más intenso a fin de mes</li>
              <li>Si podés mover la fecha al 28 o 29, vas a tener más opciones de horario</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿El precio es mayor a fin de mes?</h2>
            <p>En Marino Mudanzas no aplicamos sobrecargos por fin de mes. El precio depende del volumen, la distancia y el tipo de servicio — no de la fecha del calendario. Lo que sí puede ocurrir es que los horarios disponibles sean más limitados, por eso la anticipación es clave.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Qué pasa si no conseguís turno para el último día?</h2>
            <p>Una opción muy práctica es hacer la mudanza en dos etapas: trasladar los objetos más voluminosos uno o dos días antes, y los últimos cajones y ropa el día de la entrega de llaves. Esto reduce el estrés del día principal y suele ser más económico porque se necesita menos tiempo de camión.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Pueden hacer mudanzas el 31 de diciembre o el 1 de enero?</h3>
            <p>El 31 de diciembre trabajamos hasta el mediodía. El 1 de enero no prestamos servicio. Si tu mudanza cae en esas fechas, coordinamos la logística con anticipación para encontrar la mejor solución.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Puedo reservar sin saber el horario exacto?</h3>
            <p>Sí, podés reservar la fecha y definir el horario una semana antes. Lo importante es asegurar el día con anticipación, especialmente en fin de mes.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si el cierre del departamento se retrasa?</h3>
            <p>Es algo que ocurre frecuentemente a fin de mes. En la medida de lo posible nos adaptamos a pequeñas variaciones de horario. Si el retraso es significativo coordinamos juntos la mejor solución para no afectar otras mudanzas del día.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Reservá tu mudanza ahora</h2>
            <p>No esperes a último momento. Contactanos hoy y asegurá tu fecha antes de que se llene la agenda.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
