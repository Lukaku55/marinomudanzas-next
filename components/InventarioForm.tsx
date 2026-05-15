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
  const [otroMaterial, setOtroMaterial] = useState("");
  const [inventario, setInventario] = useState<Inventario>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const toggleMaterial = (mat: string) => {
    setMaterialesSeleccionados((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
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
    
    const matsFinales = materialesSeleccionados.includes("Otro") && otroMaterial
      ? [...materialesSeleccionados.filter(m => m !== "Otro"), otroMaterial]
      : materialesSeleccionados;
    if (matsFinales.length > 0) resumen += `*Materiales principales:* ${matsFinales.join(", ")}%0A`;
    resumen += `%0A`;

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
    const whatsappUrl = `https://wa.me/5491154507435?text=${resumen}`;
    window.open(whatsappUrl, "_blank");
    setEnviando(false);
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">¡Inventario enviado!</h2>
        <p className="font-body text-muted-foreground">Te vamos a contactar a la brevedad para coordinar el guardamuebles.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Datos del cliente */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-4">
        <h2 className="font-display text-xl font-bold text-foreground">Tus datos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Nombre y apellido *</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground font-body focus:outline-none focus:border-gold"
              placeholder="Juan García" />
          </div>
          <div>
            <label className="font-body text-sm text-muted-foreground block mb-1">Teléfono *</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground font-body focus:outline-none focus:border-gold"
              placeholder="11-1234-5678" />
          </div>
          <div className="sm:col-span-2">
            <label className="font-body text-sm text-muted-foreground block mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground font-body focus:outline-none focus:border-gold"
              placeholder="juan@email.com" />
          </div>
        </div>
      </div>

      {/* Materiales */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="font-display text-xl font-bold text-foreground mb-2">Materiales principales de tus muebles</h2>
        <p className="font-body text-muted-foreground text-sm mb-4">Seleccioná todos los que apliquen. Esto nos ayuda a preparar el embalaje adecuado.</p>
        <div className="flex flex-wrap gap-2">
          {materiales.map((mat) => (
            <button key={mat} onClick={() => toggleMaterial(mat)}
              className={`px-4 py-2 rounded-lg font-body text-sm border transition-colors ${
                materialesSeleccionados.includes(mat)
                  ? "bg-gold text-black border-gold font-semibold"
                  : "border-border text-muted-foreground hover:border-gold"
              }`}>
              {mat}
            </button>
          ))}
        </div>
        {materialesSeleccionados.includes("Otro") && (
          <input type="text" value={otroMaterial} onChange={(e) => setOtroMaterial(e.target.value)}
            className="mt-3 w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground font-body focus:outline-none focus:border-gold"
            placeholder="Especificá el material..." />
        )}
      </div>

      {/* Inventario por ambiente */}
      {ambientes.map(({ nombre: amb, muebles }) => (
        <div key={amb} className="bg-card border border-border rounded-xl p-6">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">{amb}</h2>
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
                        className="w-8 h-8 rounded-lg border border-border text-foreground hover:border-gold transition-colors font-bold">−</button>
                      <span className="w-8 text-center font-body text-foreground">{cantidad}</span>
                      <button onClick={() => updateItem(amb, mueble, "cantidad", cantidad + 1)}
                        className="w-8 h-8 rounded-lg border border-border text-foreground hover:border-gold transition-colors font-bold">+</button>
                    </div>
                    {cantidad > 0 && (
                      <input type="text" value={observacion}
                        onChange={(e) => updateItem(amb, mueble, "observacion", e.target.value)}
                        className="flex-1 border border-border rounded-lg px-3 py-1 bg-background text-foreground font-body text-sm focus:outline-none focus:border-gold"
                        placeholder="Observación (opcional)" />
                    )}
                  </div>
                  {mueble === "Otro" && cantidad > 0 && (
                    <div className="ml-0 sm:ml-52">
                      <input type="text" value={descripcion}
                        onChange={(e) => updateItem(amb, mueble, "descripcion", e.target.value)}
                        className="w-full border border-gold rounded-lg px-3 py-1 bg-background text-foreground font-body text-sm focus:outline-none focus:border-gold"
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
        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 rounded-xl font-body font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50">
        {enviando ? "Enviando..." : "Enviar inventario por WhatsApp"}
      </button>
      <p className="font-body text-muted-foreground text-sm text-center">
        Al enviar, se va a abrir WhatsApp con el resumen de tu inventario para que lo mandés directamente a nuestro equipo.
      </p>
    </div>
  );
}
