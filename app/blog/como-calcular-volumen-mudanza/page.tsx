import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "¿Cómo calcular el volumen de una mudanza? | Marino Mudanzas",
  description: "Aprendé a calcular el volumen de tu mudanza para elegir el camión correcto y evitar sorpresas. Guía práctica de Marino Mudanzas con más de 80 años de experiencia.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">¿Cómo calcular el volumen de una mudanza?</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Una de las preguntas más frecuentes antes de contratar una mudanza es cuánto espacio van a ocupar los muebles y cajas en el camión. Calcular el volumen correctamente es clave para elegir el vehículo adecuado y evitar sorpresas el día de la mudanza. En esta guía te explicamos cómo hacerlo de forma práctica.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Por qué es importante calcular el volumen?</h2>
            <p>El volumen de tu mudanza determina el tamaño del camión necesario. Un camión demasiado pequeño significa hacer dos viajes — más tiempo y más costo. Un camión demasiado grande es ineficiente y también puede encarecer el servicio. Tener una estimación clara permite que la empresa de mudanzas te dé un presupuesto más preciso y justo.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Volúmenes de referencia según tipo de vivienda</h2>
            <p>Como referencia general, estos son los volúmenes aproximados según el tipo de vivienda:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Monoambiente o estudio:</strong> entre 10 y 20 m³</li>
              <li><strong>Departamento de 2 ambientes:</strong> entre 20 y 35 m³</li>
              <li><strong>Departamento de 3 ambientes:</strong> entre 35 y 50 m³</li>
              <li><strong>Casa o PH de 3 ambientes:</strong> entre 40 y 60 m³</li>
              <li><strong>Casa grande de 4 o más ambientes:</strong> más de 60 m³</li>
            </ul>
            <p>Estos son valores orientativos. El volumen real depende de la cantidad de muebles, electrodomésticos y objetos personales de cada hogar.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo hacer un inventario para calcular el volumen?</h2>
            <p>La forma más precisa de calcular el volumen es hacer un inventario de todos los muebles y objetos que vas a trasladar. Para cada mueble grande podés medir el ancho, el largo y la altura y multiplicarlos para obtener el volumen en metros cúbicos.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cama doble:</strong> aproximadamente 1 m³</li>
              <li><strong>Placard de 2 puertas:</strong> aproximadamente 1.5 m³</li>
              <li><strong>Sofá de 3 cuerpos:</strong> aproximadamente 1.5 m³</li>
              <li><strong>Mesa de comedor con sillas:</strong> aproximadamente 1.5 m³</li>
              <li><strong>Heladera familiar:</strong> aproximadamente 0.5 m³</li>
              <li><strong>Lavarropas:</strong> aproximadamente 0.3 m³</li>
              <li><strong>Caja de embalaje estándar:</strong> aproximadamente 0.05 m³</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El factor de estiba</h2>
            <p>Un concepto importante es el factor de estiba — los muebles no se apilan perfectamente en el camión, siempre quedan espacios vacíos entre ellos. Por eso el volumen real que ocupa una mudanza en el camión suele ser entre un 20% y un 30% mayor que la suma de los volúmenes individuales de los muebles.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">¿Cómo lo calculamos nosotros?</h2>
            <p>En Marino Mudanzas realizamos una visita de relevamiento sin cargo para evaluar el volumen de tu mudanza de forma precisa. Un coordinador va a tu domicilio, recorre todos los ambientes y hace un inventario completo. Esto nos permite darte un presupuesto exacto y garantizar que vamos con el camión del tamaño correcto el día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Preguntas frecuentes sobre el volumen de mudanza</h2>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Puedo calcular el volumen por mi cuenta?</h3>
            <p>Sí, podés hacer una estimación con la tabla de referencia y el inventario de tus muebles. Pero para un presupuesto preciso siempre recomendamos la visita de relevamiento, que es sin cargo y sin compromiso.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿Qué pasa si el volumen es mayor de lo estimado el día de la mudanza?</h3>
            <p>Si hacemos el relevamiento previo esto no debería ocurrir. En el caso de que haya objetos adicionales que no se relevaron, lo evaluamos en el momento y encontramos la mejor solución sin que la mudanza se vea afectada.</p>

            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-2">¿El volumen afecta mucho el precio?</h3>
            <p>El volumen es uno de los principales factores que determina el precio de una mudanza, junto con la distancia y el piso. A mayor volumen, mayor será el tamaño del camión necesario y el tiempo de carga y descarga.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Artículos relacionados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="/blog/cuanto-cuesta-mudanza-buenos-aires" className="text-gold hover:underline">¿Cuánto cuesta una mudanza en Buenos Aires?</a></li>
              <li><a href="/blog/checklist-mudanza" className="text-gold hover:underline">Checklist de mudanza completo</a></li>
              <li><a href="/blog/como-organizar-mudanza-paso-a-paso" className="text-gold hover:underline">Cómo organizar una mudanza paso a paso</a></li>
              <li><a href="/blog/que-incluye-una-mudanza" className="text-gold hover:underline">¿Qué incluye un servicio de mudanza profesional?</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Pedí tu relevamiento sin cargo</h2>
            <p>Contactanos hoy y coordinamos una visita sin cargo para calcular el volumen exacto de tu mudanza y darte un presupuesto detallado.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">WhatsApp: 11-5450-7435</a>
              <a href="tel:+541146111818" className="flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Llamanos: 4611-1818</a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
