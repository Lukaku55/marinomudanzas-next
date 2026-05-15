import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import InventarioForm from "@/components/InventarioForm";

export const metadata: Metadata = {
  title: "Inventario de Guardamuebles | Marino Mudanzas",
  description: "Completá el inventario de tus muebles para nuestro servicio de guardamuebles en Buenos Aires. Rápido, simple y sin cargo.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inventario de Guardamuebles
          </h1>
          <p className="font-body text-muted-foreground text-lg mb-10">
            Completá el formulario con los muebles que querés guardar. Una vez enviado, nos va a llegar el detalle y te contactamos para coordinar.
          </p>
          <InventarioForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
