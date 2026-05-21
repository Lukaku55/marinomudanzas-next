import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Mudarse con Niños en Buenos Aires | Marino Mudanzas",
  description: "Guía completa para hacer una mudanza con niños pequeños y adolescentes en Buenos Aires. Consejos para reducir el estrés y hacer la transición más fácil para toda la familia.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Cómo Mudarse con Niños en Buenos Aires</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Mudarse con hijos es uno de los desafíos más grandes de una familia. El cambio de hogar, de colegio y de barrio puede generar ansiedad tanto en los chicos como en los adultos. Con la planificación correcta, la mudanza puede convertirse en una aventura positiva para toda la familia. En Marino Mudanzas hemos acompañado a cientos de familias y compartimos los consejos que mejor funcionan.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo hablar con los chicos antes de la mudanza</h2>
            <p>La comunicación es el primer paso. Los niños manejan mucho mejor los cambios cuando están informados y se sienten parte de la decisión.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contales la noticia con tiempo — cuanto más pequeño el niño, más cercano a la fecha. Con adolescentes, contalo lo antes posible.</li>
              <li>Explicales el motivo de la mudanza de forma honesta y adaptada a su edad.</li>
              <li>Escuchá sus miedos y respondé sus preguntas sin minimizarlos.</li>
              <li>Resaltá lo positivo: cuarto propio, nuevo parque, nueva pileta, estar más cerca de abuelos.</li>
              <li>Si es posible, llevalos a conocer el nuevo barrio o el nuevo hogar antes de la mudanza.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Involucrar a los niños en el proceso</h2>
            <p>Darles un rol activo en la mudanza les da sensación de control y reduce la ansiedad.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pediles que elijan qué juguetes quieren llevar y cuáles donar — esto también ayuda a ordenar.</li>
              <li>Dejá que decoren su propia caja con stickers o marcadores.</li>
              <li>Mostrales el plano del nuevo hogar y preguntales cómo les gustaría organizar su cuarto.</li>
              <li>Asigná tareas simples según la edad: guardar sus libros, doblar su ropa, cargar su mochila de objetos especiales.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El día de la mudanza con niños pequeños</h2>
            <p>El día de la mudanza es el más caótico. Con niños pequeños (menores de 6 años), lo más recomendable es que no estén presentes durante la carga.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Organizá que un familiar o amigo esté con los chicos fuera del domicilio durante la carga.</li>
              <li>Si no es posible, designá una habitación "base" donde los niños puedan jugar sin interrumpir el trabajo de los operarios.</li>
              <li>Preparales una mochila especial con sus juguetes favoritos, merienda y algo para entretenerse durante el viaje.</li>
              <li>Avisale a los operarios que hay niños en la casa para que sean precavidos con herramientas y accesos.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Adolescentes y la mudanza</h2>
            <p>Los adolescentes son quienes más resisten los cambios porque implican dejar amigos, colegio y rutinas. Requieren un enfoque diferente.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No minimices su tristeza ni les digas "ya vas a hacer nuevos amigos" — validá lo que sienten.</li>
              <li>Asegurate de que puedan mantener contacto con sus amigos del barrio anterior.</li>
              <li>Dales autonomía en la decisión de cómo organizar su nuevo cuarto.</li>
              <li>Involucrálos en la elección del nuevo colegio si es posible.</li>
              <li>Explorá el nuevo barrio juntos: buscá el lugar de comida que más le guste, el parque, la librería.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Prioridades al llegar al nuevo hogar</h2>
            <p>El primer día en el nuevo hogar marca mucho el tono de la adaptación. Tené en cuenta estas prioridades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Armá primero el cuarto de los chicos.</strong> Que puedan dormir en su espacio organizado esa misma noche reduce la ansiedad enormemente.</li>
              <li>Colocá los objetos familiares — su almohada, peluches, fotos — antes de que lleguen al nuevo hogar.</li>
              <li>Manteé los horarios de comida y sueño lo más similares posible a los habituales.</li>
              <li>No obligues a los chicos a explorar si no quieren — respetá su ritmo de adaptación.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cambio de colegio: cómo facilitarlo</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Organizá la visita al nuevo colegio antes del primer día de clases si la institución lo permite.</li>
              <li>Informale al nuevo docente sobre la situación para que esté atento a la integración.</li>
              <li>Organizá alguna actividad extraescolar — deporte, música, teatro — para que el niño pueda hacer nuevos amigos en un contexto diferente al aula.</li>
              <li>Si el cambio de colegio puede esperar hasta fin de año lectivo, evaluá esa opción para minimizar el impacto.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Señales de alerta a tener en cuenta</h2>
            <p>La mayoría de los niños se adaptan en pocas semanas. Sin embargo, prestá atención si observás alguna de estas señales de forma sostenida:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pérdida de apetito o cambios en el sueño que persisten más de 2 semanas</li>
              <li>Regresión en conductas ya superadas (mojar la cama, hablar como bebé)</li>
              <li>Negativa prolongada a ir al colegio</li>
              <li>Agresividad o llanto frecuente sin motivo aparente</li>
            </ul>
            <p>En esos casos, consultá con un psicólogo infantil o pediatra.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicitá tu presupuesto sin cargo</h2>
            <p>En Marino Mudanzas entendemos que mudarse con familia requiere coordinación y cuidado extra. Trabajamos de lunes a sábado de 8 a 18hs y te asesoramos sin cargo.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamános: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
