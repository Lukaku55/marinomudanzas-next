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
      <main className="pb-24">
        <section className="page-hero grain pb-24 pt-36 md:pb-28 md:pt-44">
          <div aria-hidden className="absolute inset-0 grid-lines" />
          <div aria-hidden className="aura -right-24 top-10 h-96 w-96 aura-blue" />
          <div className="container relative mx-auto px-4 max-w-3xl">
            <span aria-hidden className="ornament mb-8" style={{ animation: "fade-up 0.9s var(--ease-out-expo) both" }}><i /></span>
            <h1
              className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-5"
              style={{ animation: "fade-up 1s 0.1s var(--ease-out-expo) both" }}
            >
              Inventario de Guardamuebles
            </h1>
            <p
              className="font-body text-primary-foreground/75 text-lg"
              style={{ animation: "fade-up 1s 0.25s var(--ease-out-expo) both" }}
            >
              Completá el formulario con los muebles que querés guardar. Una vez enviado, nos va a llegar el detalle y te contactamos para coordinar.
            </p>
          </div>
        </section>
        <div className="container relative mx-auto px-4 max-w-3xl -mt-12">
          <InventarioForm />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
