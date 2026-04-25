import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checklist de Mudanza Completo 2026 | Marino Mudanzas",
  description: "Checklist completo para organizar tu mudanza paso a paso. Que hacer 4 semanas antes, 1 semana antes y el dia de la mudanza. Guia de Marino Mudanzas.",
};

export default function Page() {
  return (
    <>
      
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Checklist de Mudanza Completo 2026</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Una mudanza bien planificada es una mudanza exitosa. En Marino Mudanzas, con mas de 80 anos de experiencia, sabemos que la organizacion previa es clave para evitar el estres y los imprevistos. Por eso preparamos este checklist completo para que no te olvides de nada.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">4 semanas antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contratar la empresa de mudanzas y coordinar la fecha</li>
              <li>Avisar al consorcio del edificio de origen y destino</li>
              <li>Solicitar el permiso de carga y descarga si es necesario</li>
              <li>Conseguir cajas y materiales de embalaje, o coordinar la provisión con la empresa de mudanzas</li>
              <li>Empezar a clasificar objetos: lo que te llevas, lo que donas y lo que tiras</li>
              <li>Hacer inventario de los muebles y electrodomesticos</li>
              <li>Contratar seguro de carga si los objetos son de alto valor</li>
              <li>Avisar el cambio de domicilio al trabajo, banco y organismos oficiales</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">2 semanas antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Empezar a embalar libros, adornos y objetos que no uses</li>
              <li>Etiquetar cada caja con su contenido y el cuarto de destino</li>
              <li>Separar los objetos fragiles para embalarlos con cuidado especial</li>
              <li>Descongelar la heladera y limpiarla</li>
              <li>Dar de baja o transferir los servicios: luz, gas, agua, internet</li>
              <li>Organizar el traslado de mascotas y plantas</li>
              <li>Hacer una lista de los muebles que necesitan desarmarse</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">1 semana antes de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Terminar de embalar todo excepto lo de uso diario</li>
              <li>Confirmar horario y detalles con la empresa de mudanzas</li>
              <li>Preparar una caja de "primer dia" con lo esencial: ropa, documentos, medicamentos, cargadores</li>
              <li>Limpiar y ordenar el nuevo hogar si es posible</li>
              <li>Confirmar el acceso al ascensor en ambos edificios</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">El dia de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Estar presente desde el inicio para supervisar</li>
              <li>Tener a mano el inventario de muebles y cajas</li>
              <li>Proteger los pisos y marcos de puertas en ambas propiedades</li>
              <li>Hacer una ultima revision del departamento antes de entregar las llaves</li>
              <li>Verificar que todos los objetos llegaron al nuevo hogar</li>
              <li>Revisar que ningun mueble haya sufrido danos durante el traslado</li>
              <li>Firmar la conformidad del servicio con la empresa de mudanzas</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Despues de la mudanza</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cambiar las cerraduras del nuevo hogar</li>
              <li>Dar de alta los servicios en el nuevo domicilio</li>
              <li>Actualizar el domicilio en el DNI y todos los documentos</li>
              <li>Presentarte al encargado del nuevo edificio</li>
              <li>Conocer las normas del nuevo consorcio</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Solicita tu presupuesto sin cargo</h2>
            <p>Contactanos por WhatsApp o telefono y te damos un presupuesto detallado sin cargo y sin compromiso. Trabajamos de lunes a sabado de 8 a 18hs.</p>
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
