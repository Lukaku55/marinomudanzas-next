"use client";
import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { Ornament } from "@/components/fx/primitives";
import { toast } from "sonner";

const pisoOptions = Array.from({ length: 31 }, (_, i) => i); // 0 to 30

const ascensorOptions = [
  "Sí, en el lugar de carga",
  "Sí, en el lugar de descarga",
  "Sí, en ambos lugares",
  "No, por escalera",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    origen: "",
    destino: "",
    pisoCarga: "0",
    pisoDescarga: "0",
    ascensor: "",
    mensaje: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre.trim() || !form.telefono.trim() || !form.ascensor) {
      toast.error("Por favor completá los campos obligatorios.");
      return;
    }
    setLoading(true);

    const text = `Hola, soy ${form.nombre}.\nTeléfono: ${form.telefono}\nOrigen: ${form.origen} (Piso ${form.pisoCarga})\nDestino: ${form.destino} (Piso ${form.pisoDescarga})\nAscensor: ${form.ascensor}\nMensaje: ${form.mensaje}`;
    const url = `https://wa.me/5491154507435?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    toast.success("¡Redirigido a WhatsApp! Te responderemos a la brevedad.");
    setLoading(false);
    setForm({ nombre: "", telefono: "", origen: "", destino: "", pisoCarga: "0", pisoDescarga: "0", ascensor: "", mensaje: "" });
  };

  const inputClass = "field";
  const selectClass = "field appearance-none pr-10 cursor-pointer";

  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32 bg-secondary">
      <div aria-hidden className="aura -left-32 top-1/4 h-[28rem] w-[28rem] bg-gold/15" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="text-center lg:sticky lg:top-32 lg:text-left">
            <div data-reveal="up" className="mb-6"><Ornament /></div>
            <h2 data-reveal="up" className="section-title text-3xl md:text-6xl text-foreground mb-5 delay-reveal-1">
              Pedí Tu Cotización
            </h2>
            <p data-reveal="up" className="font-body text-muted-foreground text-lg delay-reveal-2">
              Completá el formulario y te contactamos por WhatsApp con tu presupuesto
            </p>
            {/* Decorative animated emblem */}
            <div aria-hidden data-reveal="scale" className="relative mx-auto mt-14 hidden h-48 w-48 lg:mx-0 lg:block delay-reveal-3">
              <div className="absolute inset-0 rounded-full border border-gold/30 animate-spin-slow" style={{ animationDuration: "30s" }}>
                <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gold" />
              </div>
              <div className="absolute inset-6 rounded-full border border-dashed border-navy/20 animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
              <div className="absolute inset-12 flex items-center justify-center rounded-full bg-navy shadow-[0_20px_40px_-20px_hsl(var(--navy))]">
                <Send className="h-9 w-9 text-gold animate-float" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} data-reveal="up" className="gold-border-spin relative bg-card rounded-[2rem] p-6 sm:p-10 shadow-[0_40px_80px_-40px_hsl(var(--navy)/0.45)] space-y-5 delay-reveal-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  required
                  maxLength={100}
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className={inputClass}
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  type="tel"
                  required
                  maxLength={20}
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className={inputClass}
                  placeholder="11-XXXX-XXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="origen" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Dirección de Origen
                </label>
                <input
                  id="origen"
                  type="text"
                  maxLength={200}
                  value={form.origen}
                  onChange={(e) => setForm({ ...form, origen: e.target.value })}
                  className={inputClass}
                  placeholder="Barrio / Dirección"
                />
              </div>
              <div>
                <label htmlFor="destino" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Dirección de Destino
                </label>
                <input
                  id="destino"
                  type="text"
                  maxLength={200}
                  value={form.destino}
                  onChange={(e) => setForm({ ...form, destino: e.target.value })}
                  className={inputClass}
                  placeholder="Barrio / Dirección"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="relative">
                <label htmlFor="pisoCarga" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Piso de Carga (Origen) *
                </label>
                <select
                  id="pisoCarga"
                  required
                  value={form.pisoCarga}
                  onChange={(e) => setForm({ ...form, pisoCarga: e.target.value })}
                  className={selectClass}
                >
                  {pisoOptions.map((p) => (
                    <option key={p} value={String(p)}>
                      {p === 0 ? "PB" : `Piso ${p}`}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-4 bottom-3.5 h-4 w-4 text-gold" />
              </div>
              <div className="relative">
                <label htmlFor="pisoDescarga" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  Piso de Descarga (Destino) *
                </label>
                <select
                  id="pisoDescarga"
                  required
                  value={form.pisoDescarga}
                  onChange={(e) => setForm({ ...form, pisoDescarga: e.target.value })}
                  className={selectClass}
                >
                  {pisoOptions.map((p) => (
                    <option key={p} value={String(p)}>
                      {p === 0 ? "PB" : `Piso ${p}`}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-4 bottom-3.5 h-4 w-4 text-gold" />
              </div>
              <div className="relative sm:col-span-2 sm:max-w-md sm:mx-auto w-full">
                <label htmlFor="ascensor" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                  ¿Cuenta con ascensor? *
                </label>
                <select
                  id="ascensor"
                  required
                  value={form.ascensor}
                  onChange={(e) => setForm({ ...form, ascensor: e.target.value })}
                  className={selectClass}
                >
                  <option value="" disabled>
                    Seleccioná una opción
                  </option>
                  {ascensorOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden className="pointer-events-none absolute right-4 bottom-3.5 h-4 w-4 text-gold" />
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-body text-xs font-semibold uppercase tracking-[0.12em] text-foreground/80 mb-2">
                Detalles de la Mudanza
              </label>
              <textarea
                id="mensaje"
                rows={4}
                maxLength={1000}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className={`${inputClass} resize-none`}
                placeholder="Contanos qué necesitás mudar, cantidad de ambientes, etc."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-gold btn-shimmer group/send w-full !py-4 text-lg font-bold disabled:opacity-50"
            >
              <Send className="relative z-[2] w-5 h-5 transition-transform duration-500 group-hover/send:translate-x-1 group-hover/send:-translate-y-1 group-hover/send:rotate-12" />
              <span className="relative z-[2]">Enviar Cotización por WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
