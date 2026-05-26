import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qué No Transportan las Empresas de Mudanzas | Marino Mudanzas",
  description: "Descubrí qué objetos y materiales no puede transportar una empresa de mudanzas y cómo manejar cada caso. Guía completa para evitar sorpresas el día de tu mudanza.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className="font-body text-gold hover:underline text-sm mb-6 inline-block">← Volver al blog</Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Qué No Transportan las Empresas de Mudanzas</h1>
          <div className="prose prose-lg mt-8 font-body text-muted-foreground leading-relaxed space-y-6">
            <p>Una de las preguntas más frecuentes que recibimos antes de una mudanza es: ¿qué cosas no puede llevar la empresa? Existen objetos y materiales que por razones de seguridad, responsabilidad legal o logística no pueden ser transportados por una empresa de mudanzas. Conocerlos con anticipación te evita sorpresas el día del traslado.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Materiales peligrosos e inflamables</h2>
            <p>Ninguna empresa de mudanzas puede transportar materiales que representen un riesgo de incendio, explosión o intoxicación:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Garrafas de gas:</strong> ya sean de GLP (supergás) o gas envasado. Deben trasladarse vacías o entregarse al proveedor.</li>
              <li><strong>Combustibles:</strong> nafta, gasoil, alcohol, querosene. Vaciá los depósitos de generadores, cortadoras de pasto y motores antes de la mudanza.</li>
              <li><strong>Pinturas, solventes y diluyentes:</strong> los envases sellados son aceptados en pequeñas cantidades, pero no grandes stocks.</li>
              <li><strong>Aerosoles en grandes cantidades:</strong> uno o dos productos de limpieza no son problema, pero cajas enteras tampoco se transportan.</li>
              <li><strong>Pólvora y municiones.</strong></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Objetos de alto valor sin declarar</h2>
            <p>Las empresas de mudanzas no asumen responsabilidad automática por objetos de muy alto valor que no sean declarados previamente:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dinero en efectivo y joyas:</strong> estos objetos siempre deben ir con el propietario, nunca en el camión.</li>
              <li><strong>Documentos importantes:</strong> escrituras, títulos, pasaportes, documentos de identidad. Lleváselos vos mismo.</li>
              <li><strong>Obras de arte de alto valor:</strong> pueden transportarse previo acuerdo especial y con seguro declarado.</li>
              <li><strong>Colecciones de monedas, sellos u objetos de colección valiosos:</strong> igual que las joyas, mejor llevarlos personalmente.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Plantas y animales</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mascotas:</strong> ninguna empresa de mudanzas transporta animales vivos. Las mascotas deben viajar con su dueño o con un servicio especializado de transporte de animales.</li>
              <li><strong>Plantas grandes:</strong> las plantas pequeñas generalmente se pueden transportar, pero las plantas de gran tamaño o muy pesadas suelen quedar fuera del servicio estándar. Consultá con anticipación.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Alimentos perecederos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Alimentos frescos, congelados o refrigerados no se transportan en el camión de mudanzas, que no tiene temperatura controlada.</li>
              <li>Lo ideal es consumir o donar los alimentos perecederos antes de la mudanza.</li>
              <li>Los alimentos secos y enlatados sí pueden ir en cajas dentro del camión.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Residuos y basura</h2>
            <p>Las empresas de mudanzas no transportan residuos, basura ni objetos en desuso que debieran descartarse. Si querés deshacerte de muebles o electrodomésticos que no vas a llevar, coordiná su retiro con el servicio de recolección municipal o una organización de donaciones antes del día de la mudanza.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Medicamentos y productos farmacéuticos en grandes cantidades</h2>
            <p>Los medicamentos de uso personal en cantidades normales no tienen problema. Sin embargo, grandes stocks de medicamentos o sustancias controladas requieren documentación especial y no son parte de un servicio estándar de mudanzas.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Qué hacer con estos objetos</h2>
            <p>Si tenés alguno de estos ítems, estas son las alternativas más comunes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Garrafas:</strong> devolvelas al distribuidor o llevalas vos mismo en el baúl del auto con la ventana abierta.</li>
              <li><strong>Combustibles:</strong> vaciá todos los tanques con anticipación.</li>
              <li><strong>Joyas y documentos:</strong> lleválos personalmente o enviálos por correo certificado.</li>
              <li><strong>Mascotas:</strong> coordiná con un familiar, amigo o servicio especializado.</li>
              <li><strong>Plantas:</strong> transportálas vos mismo o regaláselas a vecinos.</li>
              <li><strong>Muebles que no llevás:</strong> donate, vendé por Marketplace o coordiná retiro con el municipio.</li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Consultanos antes de tu mudanza</h2>
            <p>Si tenés dudas sobre algún objeto en particular, consultanos antes del día de la mudanza. En Marino Mudanzas te asesoramos sin cargo para que todo salga perfecto.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a href="https://wa.me/5491154507435" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Consultanos por WhatsApp</a>
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
