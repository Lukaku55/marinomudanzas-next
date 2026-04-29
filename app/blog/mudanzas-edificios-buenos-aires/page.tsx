import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en edificios de Buenos Aires: todo lo que tenés que saber | Marino Mudanzas",
  description: "Guía completa sobre mudanzas en edificios de Buenos Aires: horarios permitidos, documentación, coordinación con encargados, mudanzas con y sin ascensor.",
};

import { MessageCircle, Phone } from "lucide-react";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en edificios de Buenos Aires: todo lo que tenés que saber | Marino Mudanzas",
  "description": "Guía completa sobre mudanzas en edificios de Buenos Aires: horarios permitidos, documentación, coordinación con encargados, mudanzas con y sin ascensor.",
  "url": "https://www.mudanzasmarino.com.ar/blog/mudanzas-edificios-buenos-aires",
  "author": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "url": "https://www.mudanzasmarino.com.ar"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.mudanzasmarino.com.ar/logo-marino-nuevo.png"
    }
  }
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Mudanzas en edificios de Buenos Aires: todo lo que tenés que saber
          </h1>
          <time className="font-body text-muted-foreground text-sm">10 de febrero de 2025</time>

          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>
              Mudarse en un edificio de Buenos Aires tiene particularidades que lo diferencian de una mudanza en casa. Los consorcios tienen reglas específicas sobre horarios, uso de ascensores y protección de espacios comunes. En <strong className="text-foreground">Marino Mudanzas</strong>, con más de 80 años operando en CABA, conocemos estas regulaciones en detalle y nos encargamos de que tu mudanza cumpla con todas las normativas.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Horarios permitidos para mudanzas en edificios</h2>

            <p>
              La mayoría de los consorcios de Buenos Aires permiten mudanzas de lunes a viernes entre las 8:00 y las 18:00 horas, y los sábados entre las 8:00 y las 13:00. Los domingos y feriados generalmente están prohibidos. Sin embargo, cada edificio puede tener su propio reglamento, por lo que es fundamental consultar con el encargado o la administración antes de fijar la fecha.
            </p>

            <p>
              Algunos edificios modernos tienen horarios más flexibles, mientras que los edificios históricos de barrios como San Telmo, Recoleta o Barrio Norte suelen ser más estrictos. En Marino Mudanzas nos adaptamos al horario que establezca tu consorcio y, si necesitás una mudanza fuera del horario convencional, gestiónamos los permisos necesarios.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Documentación necesaria</h2>

            <p>
              Para realizar una mudanza en un edificio, generalmente necesitás presentar ante la administración la siguiente documentación: constancia de la empresa de mudanzas (nombre, CUIT, seguro), fecha y horario estimado del traslado, y en algunos casos, un depósito de garantía para cubrir posibles daños en zonas comunes.
            </p>

            <p>
              En Marino Mudanzas proporcionamos toda la documentación que tu consorcio requiera: póliza de seguro de responsabilidad civil, seguro de carga, datos de la empresa y del personal que realizará el trabajo. Esto agiliza el trámite y evita demoras el día de la mudanza.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Coordinación con el encargado del edificio</h2>

            <p>
              El encargado del edificio es una figura clave en cualquier mudanza. Es quien habilita el uso del ascensor de servicio (o de carga, si lo hay), protege los espacios comunes con cartones o mantas, y supervisa que no se dañen paredes, pisos ni puertas durante el traslado.
            </p>

            <p>
              Recomendamos coordinar con el encargado al menos una semana antes de la mudanza. Informale la fecha, el horario estimado de duración y si necesitás reservar el montacargas por un período extendido. Si tu edificio no tiene ascensor de servicio, preguntá si podés usar el ascensor principal con protección o si debés usar las escaleras.
            </p>

            <p>
              En nuestra experiencia, mantener una buena comunicación con el encargado fácilita enormemente el proceso. Un consejo: un gesto de cortesía (como un agradecimiento) nunca está de más y ayuda a que todo fluya mejor.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas con ascensor vs. sin ascensor</h2>

            <p>
              La diferencia entre una mudanza con y sin ascensor es significativa en términos de tiempo, esfuerzo y costo. Con ascensor de carga, una mudanza de un departamento de 3 ambientes en un piso 10 puede completarse en 4-5 horas. Sin ascensor, el mismo trabajo puede llevar 6-8 horas o más, ya que cada mueble y cada caja debe bajarse o subirse por escalera.
            </p>

            <p>
              Cuando no hay ascensor y el departamento está en un piso alto, a veces es más eficiente utilizar la técnica de "mudanza por soga": se bajan los muebles más grandes por el exterior del edificio con un sistema de sogas y poleas, manejado por operarios especializados. En Marino Mudanzas contamos con equipos entrenados en esta técnica, que permite mover muebles pesados como placard, bibliotecas o sommiers de forma segura desde cualquier altura.
            </p>

            <p>
              Es importante que al solicitar tu presupuesto nos indiques si tu edificio tiene ascensor, de qué tipo (ascensor de carga o ascensor común) y en qué piso vivís. Estos datos nos permiten dimensionar correctamente el equipo de trabajo y darte un precio justo. También necesitamos saber las dimensiones del ascensor para evaluar si los muebles grandes entran o si será necesario desarmarlos.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Protección de espacios comunes</h2>

            <p>
              Durante la mudanza, es nuestra responsabilidad proteger los espacios comunes del edificio: hall de entrada, pasillos, ascensores y puertas. Utilizamos mantas acolchadas y cartones para cubrir pisos de mármol, marcos de puertas y espejos. Al finalizar, dejamos todo en las mismas condiciones en que lo encontramos, evitando conflictos con la administración y los vecinos.
            </p>

            <p>
              Si tu consorcio requiere que la empresa de mudanzas realice un depósito de garantía, coordinamos con la administración para cumplir con este requisito. En más de 80 años de trayectoria, nuestro compromiso con el cuidado de los espacios nos ha ganado la confianza de cientos de encargados y administradores de edificios en Buenos Aires.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-12 pt-8 border-t border-border">
            <a
              href="https://wa.me/5491154507435?text=Hola%2C%20quiero%20solicitar%20un%20presupuesto%20de%20mudanza%20sin%20cargo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[hsl(142,70%,35%)] text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Pedí tu presupuesto gratis
            </a>
            <a
              href="tel:+541146111818"
              className="flex items-center gap-3 bg-navy text-primary-foreground px-8 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Llamanos: 4611-1818
            </a>
          </div>
        </article>
      </main>
      
      
    </>
  );
};
