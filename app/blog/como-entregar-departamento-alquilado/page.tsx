import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo Entregar un Departamento Alquilado en Buenos Aires | Marino Mudanzas",
  description: "Guía completa para la devolución de tu departamento alquilado. Checklist de limpieza y reparaciones, cómo coordinar la mudanza de salida y qué hacer para recuperar el depósito.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cómo Entregar un Departamento Alquilado en Buenos Aires: Guía Completa",
  "description": "Guía completa para la devolución de tu departamento alquilado. Checklist de limpieza y reparaciones, cómo coordinar la mudanza de salida y qué hacer para recuperar el depósito.",
  "author": { "@type": "Organization", "name": "Marino Mudanzas" },
  "publisher": {
    "@type": "Organization",
    "name": "Marino Mudanzas",
    "logo": { "@type": "ImageObject", "url": "https://www.marinomudanzas.com.ar/logo.png" }
  },
  "datePublished": "2026-06-18",
  "dateModified": "2026-06-18",
  "url": "https://www.marinomudanzas.com.ar/blog/como-entregar-departamento-alquilado"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con cuánto tiempo de anticipación hay que avisar que se deja el departamento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ley de alquileres argentina establece que el inquilino debe avisar con al menos 3 meses de anticipación si desea rescindir el contrato antes de su vencimiento. Si el contrato ya venció, con 1 mes de aviso suele ser suficiente según lo pactado. Revisá tu contrato para confirmar los plazos específicos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si el departamento tiene daños cuando lo entrego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El propietario puede descontar del depósito el costo de reparar los daños que excedan el desgaste normal de uso. Para evitar esto, revisá el acta de ingreso y reparé todo lo que no sea desgaste normal antes de la inspección final. Tomá fotos antes de entregar como respaldo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo me devuelven el depósito del alquiler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Según la ley de alquileres vigente, el propietario tiene hasta 30 días desde la entrega de llaves para devolver el depósito, descontando los gastos que correspondan. Si hay demora injustificada, podés reclamar con intereses. Guardá el recibo de entrega de llaves como comprobante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Tengo que limpiar el departamento antes de entregarlo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, el departamento debe entregarse en condiciones de limpieza similares a las que estaba cuando lo recibiste. Esto incluye limpieza profunda de cocina y baños, ventanas, pisos y paredes. Una limpieza profesional de salida puede ayudarte a cumplir este requisito y evitar descuentos del depósito."
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
            Cómo Entregar un Departamento Alquilado en Buenos Aires: Guía Completa
          </h1>
          <p className="text-sm text-muted-foreground mb-8 font-body">18 de junio de 2026 · Marino Mudanzas</p>

          <div className="prose prose-lg mt-4 font-body text-muted-foreground leading-relaxed space-y-6">

            <p>
              Entregar un departamento alquilado en Buenos Aires puede ser tan estresante como mudarse. Hay plazos que cumplir, reparaciones que hacer, trámites que gestionar y — por supuesto — toda la mudanza de salida. En esta guía te explicamos todo lo que tenés que hacer para entregar bien el departamento, recuperar tu depósito y llegar tranquilo a tu nuevo hogar.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 1: Revisá el contrato con tiempo
            </h2>
            <p>
              El primer paso es leer bien tu contrato de alquiler antes de hacer nada. Los puntos más importantes a verificar son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Plazo de aviso:</strong> la ley de alquileres establece que si querés rescindir antes del vencimiento, debés avisar con al menos 3 meses de anticipación. Si el contrato ya venció, con 1 mes suele alcanzar — pero confirmá lo que dice tu contrato específico.</li>
              <li><strong>Estado en que debés devolver el departamento:</strong> la mayoría de los contratos dicen "en el mismo estado en que fue recibido, salvo desgaste normal de uso".</li>
              <li><strong>Condiciones para la devolución del depósito:</strong> quá descuentos puede aplicar el propietario y en qué plazo debe devolverte el dinero.</li>
              <li><strong>Quién paga los últimos servicios:</strong> asegurate de pagar o transferir los servicios (agua, luz, gas) hasta la fecha de entrega.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 2: Revisá el acta de ingreso
            </h2>
            <p>
              El acta de ingreso (o inventario) que firmaste cuando entraste al departamento es tu principal herramienta de defensa. Compará el estado actual con lo que decía esa acta:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lo que ya estaba roto o dañado cuando entraste NO es tu responsabilidad al salir.</li>
              <li>El desgaste normal (pintura levemente desteñida, pequeños rayones en pisos) no puede descontarse del depósito.</li>
              <li>Lo que rompiste vos durante el alquiler sí es tu responsabilidad — mejor repararlo antes de la inspección final.</li>
              <li>Si no tenés acta de ingreso, el propietario tiene menor capacidad de reclamarte daños específicos.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 3: Checklist de reparaciones antes de entregar
            </h2>
            <p>
              Antes de la inspección final, recorrés el departamento habitación por habitación y reparás todo lo que podés:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pintura:</strong> retocá manchas o golpes en las paredes. Si la pintura está muy deteriorada por vos (no por el tiempo), puede ser más conveniente pintar todo el ambiente.</li>
              <li><strong>Agujeros de tornillos y clavos:</strong> empastá y lijá todos los agujeros que hiciste para colgar cuadros o soportes.</li>
              <li><strong>Cerraduras y picaportes:</strong> verificá que todas las cerraduras funcionen bien. Un cerrajero suele cobrar poco por ajustar o lubricar.</li>
              <li><strong>Vidrios:</strong> reemplazá cualquier vidrio roto o rajado.</li>
              <li><strong>Sanitarios y grifería:</strong> arreglá cualquier pérdida de agua o canilla que gotee.</li>
              <li><strong>Ventanas y mosquiteros:</strong> asegurate de que cierren bien y que los mosquiteros estén completos.</li>
              <li><strong>Artefactos de luz:</strong> reemplazá las lamparitas quemadas.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 4: La limpieza de salida
            </h2>
            <p>
              El departamento debe entregarse en condiciones de limpieza similares a las del ingreso. Una limpieza de salida profesional suele incluir:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Limpieza profunda de cocina: horno, hornallas, campana, alacenas por dentro y por fuera</li>
              <li>Limpieza de baños: azulejos, sanitarios, ducha, espejos</li>
              <li>Lavado de ventanas por dentro (y por fuera si es posible)</li>
              <li>Pisos fregados o encerados según el tipo</li>
              <li>Paredes desengrasadas en cocina y baño</li>
              <li>Balcones y terrazas barridos y lavados</li>
            </ul>
            <p>
              Contratar una empresa de limpieza de salida puede costarte entre $20.000 y $60.000 pesos — mucho menos que lo que podría descontarte el propietario si entregás sucio.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 5: La inspección final con el propietario
            </h2>
            <p>
              La inspección final es el momento donde propietario e inquilino recorren el departamento juntos antes de entregar las llaves. Estos son los tips más importantes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pedí que la inspección sea presencial — evitá que el propietario "revise solo" y te mande fotos después.</li>
              <li>Llevá tu copia del acta de ingreso para comparar sobre la marcha.</li>
              <li>Tomá fotos y/o video del estado del departamento antes de que llegue el propietario — especialmente de las paredes, pisos y electrodomésticos.</li>
              <li>Si hay algo que el propietario quiere descontar y vos no estás de acuerdo, dejalo asentado por escrito en el acta de entrega.</li>
              <li>No firmés nada con lo que no estés de acuerdo — pedí revisar el contrato antes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 6: Trámites al dar de baja los servicios
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Luz (Edenor/Edesur):</strong> solicitá el cierre de cuenta o el cambio de titularidad. Pagá la última factura antes de irte.</li>
              <li><strong>Gas (Metrogas/Camuzzi):</strong> pedí la baja o el cambio de titularidad. En algunos casos el propietario prefiere que la cuenta quede a su nombre para el nuevo inquilino.</li>
              <li><strong>ABL:</strong> el ABL generalmente va a nombre del propietario, pero verificá si estaba a tu nombre.</li>
              <li><strong>Internet y cable:</strong> dando de baja el servicio o transfiriéndolo a tu nuevo domicilio.</li>
              <li><strong>Expensas:</strong> pagá las expensas hasta la fecha de entrega — el propietario puede retener del depósito los importes pendientes.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Paso 7: La devolución del depósito
            </h2>
            <p>
              Según la ley de alquileres vigente en Argentina, el propietario tiene hasta <strong>30 días desde la entrega de llaves</strong> para devolver el depósito, descontando los gastos que correspondan. Si hay demoras injustificadas, podés reclamar los intereses correspondientes.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Guardá el recibo o acta de entrega de llaves — es tu comprobante de que cumpliste.</li>
              <li>Si el propietario quiere descontar gastos, pedí los comprobantes de cada arreglo.</li>
              <li>Si hay un conflicto que no se resuelve, podés consultar con un abogado o acudir a la Defensa al Consumidor.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">
              Coordiná la mudanza de salida
            </h2>
            <p>
              Una mudanza de salida de alquiler tiene particularidades propias: hay que coordinar con el encargado del edificio, respetar los horarios del consorcio y dejar el departamento libre antes de la entrega de llaves. En Marino Mudanzas realizamos mudanzas de salida de alquiler en toda Buenos Aires:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Coordinamos con el encargado y reservamos el ascensor de servicio</li>
              <li>Trabajamos en el horario que mejor te convenga para cumplir con la fecha de entrega</li>
              <li>Embalamos y protegemos todos tus muebles para el traslado</li>
              <li>Dejamos el departamento vacío listo para la inspección</li>
            </ul>

            <div className="bg-muted rounded-xl p-6 mt-10">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                ¿Necesitás coordinar tu mudanza de salida?
              </h3>
              <p className="mb-4">
                Contactanos y te damos un presupuesto sin cargo. Trabajamos de lunes a sábado de 8 a 18hs.
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
                  {" "}— si necesitás guardar muebles entre el viejo y el nuevo departamento.
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-xl p-6 mt-4">
              <h3 className="font-display text-lg font-bold text-foreground mb-4">
                Artículos relacionados
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/checklist-mudanza" className="text-gold hover:underline font-medium">
                    Checklist completo para tu mudanza
                  </Link>
                  {" "}— todo lo que tenés que hacer antes, durante y después.
                </li>
                <li>
                  <Link href="/blog/mudanzas-edificios-buenos-aires" className="text-gold hover:underline font-medium">
                    Mudanzas en edificios de Buenos Aires
                  </Link>
                  {" "}— horarios permitidos, coordinación con el encargado y más.
                </li>
                <li>
                  <Link href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline font-medium">
                    ¿Cuánto cuesta una mudanza en Buenos Aires?
                  </Link>
                  {" "}— rangos de precios según el tamaño de tu vivienda.
                </li>
                <li>
                  <Link href="/blog/primer-departamento-buenos-aires" className="text-gold hover:underline font-medium">
                    Primer departamento en Buenos Aires
                  </Link>
                  {" "}— guía para tu primera mudanza de manera independiente.
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
