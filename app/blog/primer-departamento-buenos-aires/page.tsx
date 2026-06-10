import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Primer Departamento en Buenos Aires: Guía para tu Primera Mudanza | Marino Mudanzas",
  description: "Guía completa para independizarte en Buenos Aires. Checklist de lo que necesitás, cuánto cuesta la mudanza de un monoambiente y consejos para el primer día en tu nuevo hogar.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Primer Departamento en Buenos Aires: Guía para tu Primera Mudanza",
  "description": "Guía completa para independizarte en Buenos Aires. Checklist de lo que necesitás, cuánto cuesta la mudanza de un monoambiente y consejos para el primer día en tu nuevo hogar.",
  "author": { "@type": "Organization", "name": "Marino Mudanzas" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.marinomudanzas.com.ar/logo.png" }
  },
  "datePublished": "2026-06-10",
  "dateModified": "2026-06-10",
  "url": "https://www.marinomudanzas.com.ar/blog/primer-departamento-buenos-aires"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta mudarse a un primer departamento en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente o 1 dormitorio en Buenos Aires puede arrancar desde $60.000 pesos según la distancia, el piso y la cantidad de muebles. Si venís de la casa de tus padres con muebles básicos, es una de las mudanzas más económicas que existen."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué necesito tener listo para el primer día en mi departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para el primer día lo esencial es: colchón o sommier con ropa de cama, toallas, artículos de baño, un vaso y cubiertos básicos, cargador de celular y papel higiénico. Todo lo demás puede esperar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo hacer la mudanza de un monoambiente en un solo viaje?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, en la mayoría de los casos una mudanza de monoambiente o 1 dormitorio se resuelve en un solo viaje con una utilitaria o camión chico. En Marino Mudanzas evaluamos tus muebles y te recomendamos el vehículo adecuado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué documentación necesito para mudarse a un edificio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la mayoría de los edificios de Buenos Aires necesitás avisar al encargado con anticipación, reservar el ascensor de servicio y respetar los horarios permitidos (generalmente lunes a sábado de 8 a 18hs). En Marino Mudanzas nos encargamos de toda la coordinación."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">
            ← Volver al blog
          </Link>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Primer Departamento en Buenos Aires: Guía para tu Primera Mudanza
          </h1>
          <p className="text-sm text-muted-foreground mb-8 font-body">10 de junio de 2026 · Marino Mudanzas</p>

          <div className="prose prose-lg mt-4 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>
              Mudarte a tu primer departamento en Buenos Aires es uno de esos hitos que mezclan emoción y nervios a partes iguales. Hay mil cosas en qué pensar: qué llevar, cómo organizar la logística, qué falta comprar. En Marino Mudanzas ayudamos a cientos de personas a dar ese primer paso cada año, y preparamos esta guía con todo lo que necesitás saber para que el proceso sea lo más tranquilo posible.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              ¿Qué tipo de mudanza vas a hacer?
            </h2>
            <p>
              Hay dos escenarios típicos cuando te vas a tu primer departamento:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Te vas con muebles propios:</strong> tenés cama, placard, mesa, sillas y algunos electrodomésticos. Necesitás una mudanza completa con camión y operarios.</li>
              <li><strong>El departamento viene amueblado o casi vacío:</strong> llevás ropa, electrónicos y objetos personales. Puede alcanzar con un flete pequeño o varios viajes en auto.</li>
            </ul>
            <p>
              En ambos casos conviene pedir un presupuesto sin cargo. La diferencia de precio entre hacerlo con una empresa profesional y hacerlo "con amigos y una Kangoo" suele ser menor de lo que pensás, y el resultado es muy diferente.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              ¿Cuánto cuesta la mudanza de un primer departamento?
            </h2>
            <p>
              Una mudanza de monoambiente o 1 dormitorio es de las más económicas. Los factores que más influyen en el precio son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cantidad de muebles:</strong> a menos muebles, menor precio y menor tiempo de trabajo.</li>
              <li><strong>Distancia entre origen y destino:</strong> dentro de CABA es más económico que mudarse al GBA.</li>
              <li><strong>Piso y ascensor:</strong> si el departamento está en un piso alto sin ascensor de servicio, el trabajo es mayor y el precio sube.</li>
              <li><strong>Día y hora:</strong> los sábados y los fines de mes tienen mayor demanda y menos disponibilidad.</li>
            </ul>
            <p>
              Pedinos un presupuesto y te damos un número concreto según tu situación particular.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Checklist: lo esencial para el primer día
            </h2>
            <p>
              No importa cuánto falte comprar o armar — para el primer día en tu departamento hay un mínimo indispensable:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Colchón o sommier con ropa de cama (sábanas, frazada o acolchado)</li>
              <li>Toallas y artículos de baño (jabón, shampoo, papel higiénico)</li>
              <li>Un vaso, un plato y cubiertos básicos</li>
              <li>Cargador del celular</li>
              <li>Ropa para el día siguiente</li>
              <li>Algo para comer sin necesidad de cocinar (delivery o comida preparada)</li>
              <li>Papel y lapicera para anotar lo que falta comprar</li>
            </ul>
            <p>
              Todo lo demás — la decoración, los muebles extra, los cuadros — puede esperar. El objetivo del primer día es dormir cómodo y no entrar en pánico.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Cómo organizar el embalaje cuando tenés pocos muebles
            </h2>
            <p>
              Si venís de la casa de tus padres, probablemente tenés mucha ropa, libros y electrónicos — y pocos muebles grandes. Estos son los tips más útiles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Empezá por lo que menos usás: libros, ropa de estación, objetos decorativos.</li>
              <li>Rotulá cada caja con el contenido y el ambiente de destino (dormitorio, cocina, baño).</li>
              <li>La ropa que usás seguido va en las últimas cajas — para que sea lo primero que desembalás.</li>
              <li>Los electrónicos (notebook, TV, consola) van en sus cajas originales si las tenés; si no, envolvélos con ropa o papel de diario.</li>
              <li>No sobrecargues las cajas de libros — una caja muy pesada es un riesgo para la espalda y para las cajas de abajo.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Coordinar la mudanza con el edificio
            </h2>
            <p>
              Si tu nuevo departamento está en un edificio, hay detalles que no podés pasar por alto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Avisá al encargado con anticipación y preguntá por los horarios permitidos (generalmente lunes a sábado de 8 a 18hs).</li>
              <li>Reservá el ascensor de servicio para el día de la mudanza.</li>
              <li>Preguntá si hay estacionamiento para camiones o restricciones de altura en el acceso.</li>
              <li>Algunos edificios piden completar un formulario o dejar los datos de la empresa de mudanzas.</li>
            </ul>
            <p>
              En Marino Mudanzas tenemos amplia experiencia coordinando con consorcios y encargados en toda Buenos Aires — esto no es un obstáculo para nosotros.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Consejos para el día de la mudanza
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tené todo embalado antes de que lleguen los operarios — no improvises en el momento.</li>
              <li>Hacé una lista de las cajas y muebles para controlar que todo llegue.</li>
              <li>Llevá documentos importantes (DNI, contrato de alquiler, llaves) en tu cartera o mochila, nunca en las cajas.</li>
              <li>Si podés, pedile a un amigo o familiar que te acompañe para ayudar con las indicaciones.</li>
              <li>Tomá fotos del estado del departamento antes de entrar los muebles — útil si después hay reclamos al propietario.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              La semana después de mudarte
            </h2>
            <p>
              Los primeros días pueden ser un poco caóticos. Algunas cosas que conviene hacer rápido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cambiar la cerradura si no te dieron todas las llaves o no conocés a los inquilinos anteriores.</li>
              <li>Actualizar el domicilio en el DNI (se puede hacer online en el RENAPER).</li>
              <li>Dar de alta los servicios que no venían incluidos (internet, seguro del hogar).</li>
              <li>Conocer al encargado y a tus vecinos más cercanos — una buena relación facilita mucho la convivencia.</li>
            </ul>

            <div className="bg-muted rounded-xl p-6 mt-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                ¿Listo para el gran paso?
              </h3>
              <p className="mb-4">
                Pedinos un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs y te asesoramos sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5491154507435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Pedí presupuesto por WhatsApp
                </a>
                <a
                  href="tel:+541146111818"
                  className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Llamanos: 4611-1818
                </a>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 mt-8">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Conocé nuestros servicios
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/mudanzas-residenciales" className="text-gold hover:underline font-medium">
                    Mudanzas residenciales en Buenos Aires
                  </Link>
                  {" "}— departamentos, casas y PH con embalaje incluido.
                </li>
                <li>
                  <Link href="/guardamuebles" className="text-gold hover:underline font-medium">
                    Guardamuebles en Buenos Aires
                  </Link>
                  {" "}— si necesitás guardar muebles mientras terminás de organizarte.
                </li>
                <li>
                  <Link href="/mudanzas-larga-distancia" className="text-gold hover:underline font-medium">
                    Mudanzas de larga distancia
                  </Link>
                  {" "}— si te mudás desde otra ciudad a Buenos Aires.
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-6 mt-4">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Artículos que te pueden interesar
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/checklist-mudanza" className="text-gold hover:underline font-medium">
                    Checklist completo para tu mudanza
                  </Link>
                  {" "}— todo lo que tenés que hacer antes, durante y después.
                </li>
                <li>
                  <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline font-medium">
                    ¿Cuánto cuesta una mudanza en Buenos Aires?
                  </Link>
                  {" "}— rangos de precios según el tamaño de tu vivienda.
                </li>
                <li>
                  <Link href="/blog/como-armar-cajas-mudanza" className="text-gold hover:underline font-medium">
                    Cómo armar cajas para mudanza
                  </Link>
                  {" "}— guía para embalar sin que nada se rompa.
                </li>
                <li>
                  <Link href="/blog/mudanzas-edificios-buenos-aires" className="text-gold hover:underline font-medium">
                    Mudanzas en edificios de Buenos Aires
                  </Link>
                  {" "}— todo sobre consorcios, ascensores y horarios.
                </li>
              </ul>
            </div>

          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
