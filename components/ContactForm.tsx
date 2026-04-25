"use client";
import { useState } from "react";
import { Send } from "lucide-react";
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

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const selectClass = "w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring appearance-none";

  return (
    <section id="contacto" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Pedí Tu Cotización
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              Completá el formulario y te contactamos por WhatsApp con tu presupuesto
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nombre" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
                <label htmlFor="telefono" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
                <label htmlFor="origen" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
                <label htmlFor="destino" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
              <div>
                <label htmlFor="pisoCarga" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
              </div>
              <div>
                <label htmlFor="pisoDescarga" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
              </div>
              <div className="sm:col-span-2 sm:max-w-md sm:mx-auto w-full">
                <label htmlFor="ascensor" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
              </div>
            </div>

            <div>
              <label htmlFor="mensaje" className="block font-body text-sm font-medium text-foreground mb-1.5">
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
              className="w-full flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              Enviar Cotización por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
