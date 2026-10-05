"use client";
import { useState } from "react";

const ambientes = [
  {
    nombre: "Living / Comedor",
    muebles: ["Sofá", "Sillón", "Mesa de centro", "Mesa de comedor", "Sillas", "Aparador / Vajillero", "Televisor", "Biblioteca", "Otro"],
  },
  {
    nombre: "Dormitorio Principal",
    muebles: ["Cama doble / Queen / King", "Sommier / Base", "Mesita de luz", "Placard / Ropero", "Cómoda", "Escritorio", "Silla", "Espejo", "Otro"],
  },
  {
    nombre: "Dormitorio 2",
    muebles: ["Cama individual / doble", "Sommier / Base", "Mesita de luz", "Placard / Ropero", "Cómoda", "Escritorio", "Silla", "Otro"],
  },
  {
    nombre: "Dormitorio 3",
    muebles: ["Cama individual / doble", "Sommier / Base", "Mesita de luz", "Placard / Ropero", "Cómoda", "Escritorio", "Silla", "Otro"],
  },
  {
    nombre: "Cocina",
    muebles: ["Heladera", "Lavarropas", "Microondas", "Horno / Cocina", "Muebles de cocina", "Otro"],
  },
  {
    nombre: "Otros",
    muebles: ["Bicicleta", "Moto", "Herramientas / Caja de herramientas", "Cajas con objetos personales", "Cuadros / Espejos", "Electrodomésticos varios", "Otro"],
  },
];

const materiales = ["Madera", "Mármol", "Cristal / Vidrio", "Metal / Hierro", "Tela / Tapizado", "Cuero", "Plástico", "Mixto", "Otro"];

type ItemData = { cantidad: number; observacion: string; descripcion: string };
type Inventario = { [ambiente: string]: { [mueble: string]: ItemData } };

export default function InventarioForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [materialesSeleccionados, setMaterialesSeleccionados] = useState<string[]>([]);
  const [detallesMateriales, setDetallesMateriales] = useState<{ [mat: string]: string }>({});
  const [inventario, setInventario] = useState<Inventario>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const toggleMaterial = (mat: string) => {
    setMaterialesSeleccionados((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const updateDetalleMaterial = (mat: string, valor: string) => {
    setDetallesMateriales((prev) => ({ ...prev, [mat]: valor }));
  };

  const updateItem = (ambiente: string, mueble: string, field: keyof ItemData, value: string | number) => {
    setInventario((prev) => ({
      ...prev,
      [ambiente]: {
        ...prev[ambiente],
        [mueble]: {
          cantidad: prev[ambiente]?.[mueble]?.cantidad || 0,
          observacion: prev[ambiente]?.[mueble]?.observacion || "",
          descripcion: prev[ambiente]?.[mueble]?.descripcion || "",
          [field]: value,
        },
      },
    }));
  };

  const buildResumen = () => {
    let resumen = `*Inventario Guardamuebles - Marino Mudanzas*%0A%0A`;
    resumen += `*Cliente:* ${nombre}%0A`;
    resumen += `*Teléfono:* ${telefono}%0A`;
    if (email) resumen += `*Email:* ${email}%0A`;
    resumen += `%0A`;

    if (materialesSeleccionados.length > 0) {
      resumen += `*Materiales y muebles especiales:*%0A`;
      materialesSeleccionados.forEach((mat) => {
        const detalle = detallesMateriales[mat];
        resumen += `• ${mat}${detalle ? `: ${detalle}` : ""}%0A`;
      });
      resumen += `%0A`;
    }

    ambientes.forEach(({ nombre: amb }) => {
      const items = inventario[amb];
      if (!items) return;
      const itemsConCantidad = Object.entries(items).filter(([, v]) => v.cantidad > 0);
      if (itemsConCantidad.length === 0) return;
      resumen += `*${amb}*%0A`;
      itemsConCantidad.forEach(([mueble, { cantidad, observacion, descripcion }]) => {
        const nombreMueble = mueble === "Otro" && descripcion ? descripcion : mueble;
        resumen += `• ${nombreMueble}: ${cantidad}${observacion ? ` (${observacion})` : ""}%0A`;
      });
      resumen += `%0A`;
    });

    return resumen;
  };

  const handleSubmit = () => {
    if (!nombre || !telefono) {
      alert("Por favor completá tu nombre y teléfono.");
      return;
    }
    setEnviando(true);
    const resumen = buildResumen();
    window.open(`https://wa.me/5491154507435?text=${resumen}`, "_blank");
    setEnviando(false);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="bg-card border border-gold/40 rounded-[2rem] p-10 text-center shadow-[0_30px_60px_-30px_hsl(var(--navy)/0.5)]" style={{ animation: "reveal-scale 0.8s var(--ease-out-expo) both" }}>
        <div className="text-4xl mb-4 animate-float">✅</div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">¡Inventario enviado!</h2>
        <p className="font-body text-muted-foreground">Te vamos a contactar a la brevedad para coordinar el guardamuebles.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Datos del cliente */}
      <div data-reveal="up" className="group/card bg-card border border-border rounded-xl p-6 sm:p-8 space-y-4 rounded-2xl shadow-[0_20px_40px_-30px_hsl(var(--navy)/0.4)] transition-colors duration-500 hover:border-gold/40">
        <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground"><span aria-hidden className="diamond transition-transform duration-500 group-hover/card:rotate-[225deg]" />Tus datos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Nombre y apellido *</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
              className="field !py-2.5"
              placeholder="Juan García" />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Teléfono *</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)}
              className="field !py-2.5"
              placeholder="11-1234-5678" />
          </div>
          <div className="sm:col-span-2">
            <label className="font-body text-sm text-muted-foreground block mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="field !py-2.5"
              placeholder="juan@email.com" />
          </div>
        </div>
      </div>

      {/* Materiales */}
      <div data-reveal="up" className="group/card bg-card border border-border rounded-xl p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_-30px_hsl(var(--navy)/0.4)] transition-colors duration-500 hover:border-gold/40">
        <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground mb-2"><span aria-hidden className="diamond transition-transform duration-500 group-hover/card:rotate-[225deg]" />Materiales de tus muebles</h2>
        <p className="font-body text-muted-foreground text-sm mb-4">Seleccioná los materiales que tienen tus muebles. Si hay alguno delicado como mármol o cristal, especificá qué mueble es para que lo tratemos con cuidado especial.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {materiales.map((mat) => (
            <button key={mat} onClick={() => toggleMaterial(mat)}
              className={`px-4 py-2 rounded-full font-body text-sm border transition-all duration-300 active:scale-95 ${
                materialesSeleccionados.includes(mat)
                  ? "bg-gold text-black border-gold font-semibold shadow-[0_8px_20px_-8px_hsl(var(--gold))]"
                  : "border-border text-muted-foreground hover:border-gold hover:text-foreground hover:-translate-y-0.5"
              }`}>
              {mat}
            </button>
          ))}
        </div>
        {/* Detalle por material seleccionado */}
        {materialesSeleccionados.length > 0 && (
          <div className="space-y-3 mt-4 border-t border-border pt-4">
            <p className="font-body text-sm text-muted-foreground">Especificá qué muebles son de cada material (opcional pero recomendado):</p>
            {materialesSeleccionados.map((mat) => (
              <div key={mat} className="flex items-center gap-3">
                <span className="font-body text-sm text-foreground font-medium w-36 shrink-0">{mat}:</span>
                <input
                  type="text"
                  value={detallesMateriales[mat] || ""}
                  onChange={(e) => updateDetalleMaterial(mat, e.target.value)}
                  className="field flex-1 !px-3 !py-1.5 text-sm"
                  placeholder={`Ej: ${mat === "Mármol" ? "mesa de comedor, encimera" : mat === "Cristal / Vidrio" ? "vitrina, mesa de centro" : mat === "Cuero" ? "sofá, sillón" : "especificá el mueble..."}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Inventario por ambiente */}
      {ambientes.map(({ nombre: amb, muebles }) => (
        <div key={amb} data-reveal="up" className="group/card bg-card border border-border rounded-xl p-6 sm:p-8 rounded-2xl shadow-[0_20px_40px_-30px_hsl(var(--navy)/0.4)] transition-colors duration-500 hover:border-gold/40">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground mb-5"><span aria-hidden className="diamond transition-transform duration-500 group-hover/card:rotate-[225deg]" />{amb}</h2>
          <div className="space-y-4">
            {muebles.map((mueble) => {
              const cantidad = inventario[amb]?.[mueble]?.cantidad || 0;
              const observacion = inventario[amb]?.[mueble]?.observacion || "";
              const descripcion = inventario[amb]?.[mueble]?.descripcion || "";
              return (
                <div key={mueble} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="font-body text-foreground text-sm w-48 shrink-0">{mueble}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateItem(amb, mueble, "cantidad", Math.max(0, cantidad - 1))}
                        className="w-8 h-8 rounded-full border border-border text-foreground hover:border-gold hover:bg-gold/10 active:scale-90 transition-all font-bold">−</button>
                      <span key={cantidad} className={`w-8 text-center font-body tabular-nums ${cantidad > 0 ? "text-gold font-bold" : "text-foreground"}`} style={{ animation: "reveal-scale 0.35s var(--ease-out-expo) both" }}>{cantidad}</span>
                      <button onClick={() => updateItem(amb, mueble, "cantidad", cantidad + 1)}
                        className="w-8 h-8 rounded-full border border-border text-foreground hover:border-gold hover:bg-gold hover:text-navy active:scale-90 transition-all font-bold">+</button>
                    </div>
                    {cantidad > 0 && (
                      <input type="text" value={observacion}
                        onChange={(e) => updateItem(amb, mueble, "observacion", e.target.value)}
                        className="field flex-1 !px-3 !py-1.5 text-sm"
                        placeholder="Observación (opcional)" />
                    )}
                  </div>
                  {mueble === "Otro" && cantidad > 0 && (
                    <div className="ml-0 sm:ml-52">
                      <input type="text" value={descripcion}
                        onChange={(e) => updateItem(amb, mueble, "descripcion", e.target.value)}
                        className="field !border-gold !px-3 !py-1.5 text-sm"
                        placeholder="¿Qué mueble es? Ej: vitrina, baúl, hamaca..." />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Botón enviar */}
      <button onClick={handleSubmit} disabled={enviando}
        className="btn-whatsapp btn-shimmer w-full !py-4 text-lg font-bold disabled:opacity-50">
        <span className="relative z-[2]">{enviando ? "Enviando..." : "Enviar inventario por WhatsApp"}</span>
      </button>
      <p className="font-body text-muted-foreground text-sm text-center">
        Al enviar, se va a abrir WhatsApp con el resumen de tu inventario para que lo mandés directamente a nuestro equipo.
      </p>
    </div>
  );
}
