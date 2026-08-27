import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas en Buenos Aires: Guía Completa 2026 | Marino Mudanzas",
  description: "Todo lo que necesitás saber sobre mudanzas en Buenos Aires: tipos de servicio, costos, cómo elegir empresa, barrios y preguntas frecuentes. Guía actualizada 2026.",
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://www.mudanzasmarino.com.ar" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mudanzasmarino.com.ar/blog" },
    { "@type": "ListItem", "position": 3, "name": "Guía Completa de Mudanzas en Buenos Aires", "item": "https://www.mudanzasmarino.com.ar/blog/guia-mudanzas-buenos-aires" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mudanzas en Buenos Aires: Guía Completa 2026",
  "description": "Todo lo que necesitás saber sobre mudanzas en Buenos Aires: tipos de servicio, costos, cómo elegir empresa, barrios y preguntas frecuentes. Guía actualizada 2026.",
  "url": "https://www.mudanzasmarino.com.ar/blog/guia-mudanzas-buenos-aires",
  "datePublished": "2026-06-29",
  "dateModified": "2026-06-29",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.mudanzasmarino.com.ar/blog/guia-mudanzas-buenos-aires" },
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta una mudanza en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una mudanza de monoambiente se cotiza según el caso según el caso y a consultar. Un 2 ambientes a consultar según el caso y a consultar. Un 3 ambientes o más a consultar según el caso. Los factores que más afectan el precio son el volumen de muebles, el piso, la presencia de ascensor y la distancia al destino."
      }
    },
    {
      "@type": "Question",
      "name": "¿Con cuánta anticipación hay que contratar una mudanza en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lo ideal es contratar con al menos 15 días de anticipación. Para mudanzas a fin de mes o en temporada alta (diciembre–enero y julio), conviene hacerlo con 3 semanas. Cuanto más tiempo de margen, más opciones de horario y mejor coordinación con el consorcio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye un servicio de mudanza profesional en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un servicio completo incluye: desarmado y armado de muebles, embalaje de objetos frágiles, protección de pisos y paredes, carga en camión, traslado y descarga en destino. El embalaje de ropa y cocina puede hacerlo el cliente para reducir costos, o incluirlo como servicio adicional."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué barrios de Buenos Aires son los más difíciles para mudanzas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recoleta y Palermo Hollywood presentan los mayores desafíos: edificios con ascensores pequeños de época, normas de consorcio muy estrictas y restricciones de carga en vía pública. San Telmo también tiene calles angostas y edificios históricos. Caballito y Flores son más accesibles por sus avenidas amplias."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo elijo una empresa de mudanzas confiable en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verificá que la empresa tenga: dirección física verificable, seguro de responsabilidad civil, reseñas reales de clientes, presupuesto detallado por escrito y no pida seña muy alta. Las empresas serias no presupuestan sin preguntar por el piso, el ascensor y el volumen de muebles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es una mudanza por soga en Buenos Aires?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una técnica para bajar o subir muebles por el exterior del edificio cuando no entran por el ascensor o la escalera. Se usan sogas y poleas desde la ventana o el balcón. Es común en edificios antiguos de CABA con ascensores pequeños o escaleras muy angostas."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Mudanzas en Buenos Aires: Guía Completa 2026</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>Mudarse en Buenos Aires tiene sus propias reglas. Consorcios con horarios estrictos, edificios sin ascensor, calles angostas, restricciones de carga en avenidas principales y una enorme variedad de empresas — algunas excelentes, otras que hay que evitar. Esta guía reúne todo lo que necesitás saber para organizar tu mudanza en CABA o GBA en 2026, basada en más de 80 años de experiencia de Marino Mudanzas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Tipos de mudanzas en Buenos Aires</h2>
            <p>No todas las mudanzas son iguales. El servicio que necesitás depende de tu situación:</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Mudanzas residenciales</h3>
            <p>Las más frecuentes. Abarcan desde monoambientes hasta casas de varios ambientes con jardín. El proceso incluye desarmado de muebles, embalaje, carga, traslado y descarga. En CABA, el principal desafío es la coordinación con el consorcio y el acceso al edificio.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Mudanzas de oficinas y comercios</h3>
            <p>Requieren planificación más rigurosa para minimizar el tiempo de inactividad del negocio. Suelen hacerse fuera del horario laboral (madrugada, fines de semana) y necesitan coordinación especial para equipos informáticos, archivos y mobiliario de oficina.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Mudanzas al interior del país</h3>
            <p>Para quienes se trasladan desde Buenos Aires a otras provincias. La diferencia clave: en Marino Mudanzas hacemos mudanzas <strong>exclusivas</strong> — un camión solo para tu mudanza, sin cargas compartidas, lo que garantiza mayor seguridad y tiempos precisos de entrega.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Fletes</h3>
            <p>Para trasladar objetos sueltos o pequeñas cantidades sin hacer una mudanza completa. Ideal para compras grandes, mudanzas de una sola habitación o traslados de electrodomésticos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cuánto cuesta una mudanza en Buenos Aires?</h2>
            <p>Los precios varían según varios factores.</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm mt-4">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Tipo de vivienda</th>
                    <th className="text-left py-3 font-semibold text-foreground">Rango orientativo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-3 pr-4">Monoambiente</td><td className="py-3">a consultar</td></tr>
                  <tr><td className="py-3 pr-4">2 ambientes</td><td className="py-3">a consultar</td></tr>
                  <tr><td className="py-3 pr-4">3 ambientes</td><td className="py-3">a consultar</td></tr>
                  <tr><td className="py-3 pr-4">Casa 4+ amb.</td><td className="py-3">a consultar</td></tr>
                </tbody>
              </table>
            </div>
            <p>Los factores que más impactan en el precio son: <strong>piso sin ascensor</strong> (suma considerable), <strong>volumen de muebles</strong>, <strong>distancia entre origen y destino</strong> y si se requiere <strong>mudanza por soga</strong>. Siempre pedí presupuesto detallado antes de contratar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Cómo elegir una empresa de mudanzas confiable en Buenos Aires</h2>
            <p>Buenos Aires tiene cientos de empresas de mudanzas, desde grandes con flota propia hasta trabajadores independientes con camioneta alquilada. Estos son los criterios para elegir bien:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dirección física verificable</strong> — una empresa seria tiene una base de operaciones real, no solo un número de teléfono.</li>
              <li><strong>Seguro de responsabilidad civil</strong> — imprescindible. Muchos consorcios de CABA lo exigen para permitir la mudanza.</li>
              <li><strong>Presupuesto detallado por escrito</strong> — que incluya cantidad de personal, tamaño del camión, tiempo estimado y si el embalaje está o no incluido.</li>
              <li><strong>Preguntan por el piso y el ascensor</strong> — una empresa que presupuesta sin preguntar estos datos no está haciendo bien su trabajo.</li>
              <li><strong>Reseñas verificables</strong> — Google Maps, redes sociales, referencias de conocidos. Desconfiá de empresas sin ninguna presencia verificable.</li>
              <li><strong>No piden seña muy alta</strong> — un señal de alerta es que pidan el pago completo o una seña desproporcionada antes del día.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Mudanzas en CABA: particularidades por zona</h2>
            <p>Buenos Aires no es una ciudad homogénea. Cada barrio tiene sus características propias que afectan la mudanza:</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Zona norte: Palermo, Belgrano, Recoleta, Núñez</h3>
            <p>Alta concentración de edificios de lujo y de época. Los desafíos más comunes son ascensores pequeños, normas de consorcio estrictas y restricciones de estacionamiento de camiones en avenidas como Libertador, Alvear y Santa Fe. Recoleta tiene pisos de mármol que requieren protección especial.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Zona centro-oeste: Caballito, Flores, Almagro, Boedo</h3>
            <p>Los barrios con mayor rotación residencial de CABA. Flores es nuestra base desde 1950. Caballito tiene muchos edificios sin ascensor en sus calles internas y restricciones en Rivadavia. La demanda a fin de mes en esta zona es muy alta.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">Zona sur: San Telmo, La Boca, Barracas, Parque Patricios</h3>
            <p>San Telmo es el barrio más exigente del sur: calles de piedra, edificios de 1800 y angostos, y alto valor histórico de los inmuebles. La Boca tiene calles angostas y difícil acceso para camiones grandes. Parque Patricios está en transformación y tiene más facilidades de acceso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">GBA norte: Vicente López, San Isidro, Tigre</h3>
            <p>Mudanzas a countries y barrios privados requieren coordinación especial con la seguridad del complejo. San Isidro y Vicente López tienen edificios de alto nivel con normas de consorcio similares a las de Recoleta.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">GBA oeste: Morón, La Matanza, Merlo</h3>
            <p>Mayor accesibilidad para camiones, con avenidas amplias y menos restricciones. Las distancias desde CABA son mayores, lo que impacta en el tiempo y el costo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El consorcio: la variable que más complica las mudanzas en CABA</h2>
            <p>En Buenos Aires, el consorcio del edificio tiene poder real sobre tu mudanza. Algunos requisitos frecuentes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Horarios restringidos</strong> — muchos edificios solo permiten mudanzas entre las 8 y las 18hs de lunes a viernes, con algunos que agregan sábados por la mañana.</li>
              <li><strong>Reserva del ascensor</strong> — hay que avisar al encargado con varios días de anticipación para que proteja el ascensor y lo reserve.</li>
              <li><strong>Seguro de la empresa</strong> — algunos consorcios piden el certificado de seguro de la empresa de mudanzas antes de permitir el acceso.</li>
              <li><strong>Prohibición de usar el ascensor de palier</strong> — en algunos edificios de alto nivel, los muebles deben subir por la escalera de servicio.</li>
            </ul>
            <p>Coordinamos todo esto con el encargado antes del día de la mudanza para que la operación salga sin imprevistos.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Checklist: qué hacer antes del día de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pedí presupuesto detallado con al menos 15 días de anticipación</li>
              <li>Avisá al encargado del edificio de salida y del edificio de entrada</li>
              <li>Reservá el ascensor en ambos edificios</li>
              <li>Comenzá a empacar las cosas no esenciales con una semana de anticipación</li>
              <li>Etiquetá cada caja con el ambiente de destino</li>
              <li>Desconectá la heladera 8 horas antes para que se descongele</li>
              <li>Guardá documentos importantes, joyas y objetos de valor en tu mochila personal</li>
              <li>Coordiná el acceso a tu nuevo domicilio (llaves, código de entrada)</li>
              <li>Si tenés mascotas, pedí a alguien que las cuide durante la mudanza</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Por qué elegir Marino Mudanzas</h2>
            <p>Con base en Flores desde 1950, Marino Mudanzas es una de las empresas con más historia en el sector. Nuestras ventajas concretas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Más de 80 años de experiencia</strong> — conocemos cada barrio, cada edificio emblemático y cada particularidad de Buenos Aires.</li>
              <li><strong>Flota propia</strong> — camionetas y camiones de distintos tamaños para adaptar el vehículo al volumen de cada mudanza.</li>
              <li><strong>Guardamuebles propio en Flores</strong> — depósito seguro, limpio y monitoreado las 24hs. Ideal para quien necesita almacenar temporariamente.</li>
              <li><strong>Presupuesto sin cargo y sin sorpresas</strong> — el precio que acordamos es el precio que pagás el día de la mudanza.</li>
              <li><strong>Cobertura de CABA, todo el GBA e interior del país</strong> — una sola empresa para cualquier destino.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre mudanzas en Buenos Aires</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuánto cuesta una mudanza en Buenos Aires?</h3>
            <p>El precio depende del tamaño del departamento, el piso, si hay ascensor y la distancia. Pedí tu presupuesto sin cargo para tu caso específico.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Con cuánta anticipación hay que contratar?</h3>
            <p>Al menos 15 días. Para mudanzas de fin de mes o en temporada alta, 3 semanas. Cuanto antes coordinés con el consorcio, más tranquila sale la mudanza.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué incluye un servicio de mudanza profesional?</h3>
            <p>Desarmado y armado de muebles, embalaje de objetos frágiles, protección de pisos y paredes, carga, traslado y descarga. El embalaje de ropa y cocina puede hacerlo el cliente para reducir costos.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cuáles son los barrios más difíciles para mudanzas en CABA?</h3>
            <p>Recoleta por sus edificios de época y normas de consorcio estrictas; Palermo Hollywood por los permisos de carga; San Telmo por las calles angostas y el valor histórico de los inmuebles. Flores y Caballito son los más accesibles.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué es una mudanza por soga?</h3>
            <p>Es cuando los muebles no entran por el ascensor ni la escalera y hay que subirlos o bajarlos por el exterior del edificio usando sogas y poleas. Es común en edificios de principios del siglo XX en CABA. Somos especialistas en este método.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Cómo elijo una empresa de mudanzas confiable?</h3>
            <p>Verificá dirección física, seguro de responsabilidad civil, presupuesto detallado por escrito y reseñas verificables. Una empresa seria siempre pregunta por el piso y el ascensor antes de presupuestar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o teléfono. Te damos un presupuesto detallado sin cargo y sin compromiso en el día. Trabajamos de lunes a sábado de 8 a 18hs.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Pedí tu presupuesto por WhatsApp</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Explorá nuestros servicios y guías por barrio</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <Link href="/mudanzas-residenciales" className="text-gold hover:underline text-sm">Mudanzas residenciales</Link>
              <Link href="/mudanzas-oficinas" className="text-gold hover:underline text-sm">Mudanzas de oficinas</Link>
              <Link href="/guardamuebles" className="text-gold hover:underline text-sm">Guardamuebles</Link>
              <Link href="/mudanzas-interior" className="text-gold hover:underline text-sm">Mudanzas al interior</Link>
              <Link href="/blog/mudanzas-palermo" className="text-gold hover:underline text-sm">Palermo</Link>
              <Link href="/blog/mudanzas-belgrano" className="text-gold hover:underline text-sm">Belgrano</Link>
              <Link href="/blog/mudanzas-caballito" className="text-gold hover:underline text-sm">Caballito</Link>
              <Link href="/blog/mudanzas-recoleta" className="text-gold hover:underline text-sm">Recoleta</Link>
              <Link href="/blog/mudanzas-flores" className="text-gold hover:underline text-sm">Flores</Link>
              <Link href="/blog/mudanzas-boedo" className="text-gold hover:underline text-sm">Boedo</Link>
              <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline text-sm">¿Cuánto cuesta?</Link>
              <Link href="/blog/checklist-mudanza" className="text-gold hover:underline text-sm">Checklist de mudanza</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};
