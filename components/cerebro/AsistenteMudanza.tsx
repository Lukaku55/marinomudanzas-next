"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Info,
  MessageCircle,
  Package,
  Phone,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import {
  ETIQUETA_AMBIENTES,
  ETIQUETA_EXTRA,
  NEGOCIO,
  TELEFONO,
  TEL_HREF,
  mensajeWhatsApp,
  planificar,
  whatsappUrl,
  type Acceso,
  type Alcance,
  type Ambientes,
  type DatosMudanza,
  type Extra,
} from "@/lib/cerebro";

const CLAVE_BORRADOR = "marino-asistente-v1";

interface Contacto {
  nombre: string;
  telefono: string;
  origen: string;
  destino: string;
  detalles: string;
}

const INICIAL: DatosMudanza = {
  uso: "hogar",
  ambientes: 2,
  origen: { tipo: "departamento", piso: 1, ascensor: true },
  destino: { tipo: "departamento", piso: 1, ascensor: true },
  alcance: "caba",
  extras: [],
};

const CONTACTO_INICIAL: Contacto = { nombre: "", telefono: "", origen: "", destino: "", detalles: "" };

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
        activo
          ? "bg-navy text-primary-foreground border-transparent shadow-md"
          : "bg-background border-border text-foreground/80 hover:border-gold"
      }`}
    >
      {children}
    </button>
  );
}

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-3">
      <legend className="font-body text-sm font-semibold text-foreground mb-3">{titulo}</legend>
      {children}
    </fieldset>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function EditorAcceso({
  etiqueta,
  valor,
  direccion,
  onCambio,
  onDireccion,
}: {
  etiqueta: string;
  valor: Acceso;
  direccion: string;
  onCambio: (a: Acceso) => void;
  onDireccion: (s: string) => void;
}) {
  const id = etiqueta.toLowerCase();
  return (
    <Grupo titulo={etiqueta}>
      <input
        id={`dir-${id}`}
        aria-label={`Dirección o barrio de ${id}`}
        className={inputCls}
        placeholder="Dirección o barrio"
        value={direccion}
        onChange={(e) => onDireccion(e.target.value)}
      />
      <div className="flex flex-wrap items-center gap-2">
        <Chip activo={valor.tipo === "departamento"} onClick={() => onCambio({ ...valor, tipo: "departamento" })}>
          Departamento
        </Chip>
        <Chip activo={valor.tipo === "casa"} onClick={() => onCambio({ ...valor, tipo: "casa" })}>
          Casa / PH en PB
        </Chip>
      </div>
      {valor.tipo === "departamento" && (
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2" role="group" aria-label={`Piso de ${id}`}>
            <span className="text-sm text-muted-foreground">Piso</span>
            <button
              type="button"
              className="w-9 h-9 rounded-lg bg-background border border-border hover:border-gold"
              onClick={() => onCambio({ ...valor, piso: Math.max(0, valor.piso - 1) })}
              aria-label="Bajar un piso"
            >
              −
            </button>
            <span className="w-10 text-center font-semibold" aria-live="polite">
              {valor.piso === 0 ? "PB" : valor.piso}
            </span>
            <button
              type="button"
              className="w-9 h-9 rounded-lg bg-background border border-border hover:border-gold"
              onClick={() => onCambio({ ...valor, piso: Math.min(40, valor.piso + 1) })}
              aria-label="Subir un piso"
            >
              +
            </button>
          </div>
          {valor.piso > 0 && (
            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                className="w-4 h-4"
                style={{ accentColor: "hsl(var(--navy))" }}
                checked={valor.ascensor}
                onChange={(e) => onCambio({ ...valor, ascensor: e.target.checked })}
              />
              Hay ascensor apto para muebles
            </label>
          )}
        </div>
      )}
    </Grupo>
  );
}

function Medidor({ puntaje, nivel }: { puntaje: number; nivel: string }) {
  const color = puntaje < 35 ? "bg-green-500" : puntaje < 65 ? "bg-gold" : "bg-red-500";
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-primary-foreground/70">Complejidad</span>
        <span className="font-semibold">{nivel}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={puntaje} aria-label="Complejidad de la mudanza">
        <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${Math.max(8, puntaje)}%` }} />
      </div>
    </div>
  );
}

function Dato({ icono: Icono, titulo, valor }: { icono: typeof Truck; titulo: string; valor: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <Icono className="w-5 h-5 text-gold mb-2" />
      <p className="text-xs text-primary-foreground/60">{titulo}</p>
      <p className="font-semibold leading-tight">{valor}</p>
    </div>
  );
}

const ICONO_AVISO = { info: Info, alerta: AlertTriangle, ok: CheckCircle2 } as const;
const COLOR_AVISO = { info: "text-sky-300", alerta: "text-gold", ok: "text-green-400" } as const;

/**
 * Asistente de mudanza: la persona carga lo básico y el cerebro del sitio
 * (lib/cerebro/motor.ts) le devuelve un plan en vivo + el mensaje de WhatsApp
 * con todo el detalle para que el equipo cotice sin repreguntar.
 */
export default function AsistenteMudanza({ zona }: { zona?: string }) {
  const [datos, setDatos] = useState<DatosMudanza>(INICIAL);
  const [contacto, setContacto] = useState<Contacto>(
    zona ? { ...CONTACTO_INICIAL, origen: zona } : CONTACTO_INICIAL,
  );
  const [enviado, setEnviado] = useState(false);
  const fechaRef = useRef<HTMLInputElement>(null);

  // Recuperar borrador guardado (solo en este navegador).
  useEffect(() => {
    // No permitir fechas pasadas (según el reloj del visitante).
    const d = new Date();
    if (fechaRef.current) {
      fechaRef.current.min = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    }
    try {
      const guardado = localStorage.getItem(CLAVE_BORRADOR);
      if (guardado) {
        const b = JSON.parse(guardado);
        // Restaurar un borrador guardado es sincronizar con un sistema externo (localStorage).
        /* eslint-disable react-hooks/set-state-in-effect */
        if (b?.datos) setDatos({ ...INICIAL, ...b.datos });
        if (b?.contacto) setContacto((c) => ({ ...c, ...b.contacto, ...(zona && !b.contacto.origen ? { origen: zona } : {}) }));
        /* eslint-enable react-hooks/set-state-in-effect */
      }
    } catch {
      /* sin almacenamiento disponible: seguimos con los valores iniciales */
    }
  }, [zona]);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_BORRADOR, JSON.stringify({ datos, contacto }));
    } catch {
      /* ignorar */
    }
  }, [datos, contacto]);

  const plan = useMemo(() => planificar(datos), [datos]);

  const set = <K extends keyof DatosMudanza>(k: K, v: DatosMudanza[K]) => setDatos((d) => ({ ...d, [k]: v }));
  const toggleExtra = (e: Extra) =>
    set("extras", datos.extras.includes(e) ? datos.extras.filter((x) => x !== e) : [...datos.extras, e]);

  const enviar = (ev: React.FormEvent) => {
    ev.preventDefault();
    const msg = mensajeWhatsApp(datos, plan, contacto);
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setEnviado(true);
  };

  const volumen = `${plan.volumen[0]}${plan.volumen[1] ? `–${plan.volumen[1]}` : "+"} m³`;
  const horas = plan.horas ? `${plan.horas[0]}–${plan.horas[1]} h` : "Se coordina";

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      {/* Formulario */}
      <form onSubmit={enviar} className="lg:col-span-3 bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border space-y-8">
        <Grupo titulo="1. ¿Qué mudás?">
          <div className="flex flex-wrap gap-2">
            <Chip activo={datos.uso === "hogar"} onClick={() => set("uso", "hogar")}>Mi casa</Chip>
            <Chip activo={datos.uso === "oficina"} onClick={() => set("uso", "oficina")}>Oficina / comercio</Chip>
          </div>
          <div className="flex flex-wrap gap-2">
            {([1, 2, 3, 4, 5] as Ambientes[]).map((n) => (
              <Chip key={n} activo={datos.ambientes === n} onClick={() => set("ambientes", n)}>
                {ETIQUETA_AMBIENTES[n]}
              </Chip>
            ))}
          </div>
        </Grupo>

        <div className="grid md:grid-cols-2 gap-8">
          <EditorAcceso
            etiqueta="2. Origen"
            valor={datos.origen}
            direccion={contacto.origen}
            onCambio={(a) => set("origen", a)}
            onDireccion={(s) => setContacto((c) => ({ ...c, origen: s }))}
          />
          <EditorAcceso
            etiqueta="3. Destino"
            valor={datos.destino}
            direccion={contacto.destino}
            onCambio={(a) => set("destino", a)}
            onDireccion={(s) => setContacto((c) => ({ ...c, destino: s }))}
          />
        </div>

        <Grupo titulo="4. Recorrido">
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["caba", "Dentro de CABA"],
                ["gba", "CABA ↔ GBA"],
                ["interior", "Al interior"],
              ] as [Alcance, string][]
            ).map(([k, txt]) => (
              <Chip key={k} activo={datos.alcance === k} onClick={() => set("alcance", k)}>
                {txt}
              </Chip>
            ))}
          </div>
        </Grupo>

        <Grupo titulo="5. ¿Necesitás algo más?">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ETIQUETA_EXTRA) as Extra[]).map((e) => (
              <Chip key={e} activo={datos.extras.includes(e)} onClick={() => toggleExtra(e)}>
                {datos.extras.includes(e) ? "✓ " : "+ "}
                {ETIQUETA_EXTRA[e]}
              </Chip>
            ))}
          </div>
        </Grupo>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="asist-fecha" className="font-body text-sm font-semibold text-foreground mb-1.5 block">
              6. Fecha estimada
            </label>
            <input
              id="asist-fecha"
              type="date"
              ref={fechaRef}
              className={inputCls}
              value={datos.fecha ?? ""}
              onChange={(e) => set("fecha", e.target.value || undefined)}
            />
          </div>
          <div>
            <label htmlFor="asist-nombre" className="font-body text-sm font-semibold text-foreground mb-1.5 block">
              Tu nombre
            </label>
            <input
              id="asist-nombre"
              className={inputCls}
              placeholder="¿Cómo te llamás?"
              autoComplete="name"
              value={contacto.nombre}
              onChange={(e) => setContacto((c) => ({ ...c, nombre: e.target.value }))}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="asist-telefono" className="font-body text-sm font-semibold text-foreground mb-1.5 block">
              Teléfono de contacto
            </label>
            <input
              id="asist-telefono"
              type="tel"
              className={inputCls}
              placeholder="11-XXXX-XXXX"
              autoComplete="tel"
              maxLength={20}
              value={contacto.telefono}
              onChange={(e) => setContacto((c) => ({ ...c, telefono: e.target.value }))}
            />
          </div>
        </div>

        <div>
          <label htmlFor="asist-detalles" className="font-body text-sm font-semibold text-foreground mb-1.5 block">
            Detalles (opcional)
          </label>
          <textarea
            id="asist-detalles"
            rows={3}
            className={`${inputCls} resize-none`}
            placeholder="Heladera con freezer, biblioteca grande, piano, horarios del consorcio…"
            value={contacto.detalles}
            onChange={(e) => setContacto((c) => ({ ...c, detalles: e.target.value }))}
          />
        </div>

        {/* En móvil el plan completo queda abajo: mostramos un resumen acá */}
        <p className="lg:hidden font-body text-sm bg-secondary rounded-lg px-4 py-3 flex flex-wrap gap-x-3 gap-y-1" aria-hidden="true">
          <span className="text-navy font-semibold">Tu plan:</span>
          <span>{volumen}</span>·<span>{plan.vehiculo}</span>·<span>{plan.operarios} operarios</span>·<span>{horas}</span>
        </p>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-4 rounded-lg font-body font-bold text-lg hover:opacity-90 transition-opacity"
        >
          <MessageCircle className="w-5 h-5" />
          Enviar mi plan por WhatsApp
        </button>
        {enviado && (
          <p className="font-body text-sm text-green-700 text-center" role="status">
            ¡Listo! Se abrió WhatsApp con tu plan. Si no se abrió, llamanos al {TELEFONO.visible}.
          </p>
        )}
        <p className="font-body text-xs text-muted-foreground text-center">
          Sin compromiso. Te respondemos con tu presupuesto sin cargo.
        </p>
      </form>

      {/* Plan en vivo */}
      <aside className="lg:col-span-2 lg:sticky lg:top-24 bg-navy text-primary-foreground rounded-xl p-6 md:p-8 space-y-6 shadow-xl font-body" aria-live="polite">
        <div className="flex items-center gap-2 text-gold">
          <Sparkles className="w-5 h-5" />
          <p className="font-semibold uppercase tracking-widest text-xs">Tu plan, en vivo</p>
        </div>

        <Medidor puntaje={plan.complejidad.puntaje} nivel={plan.complejidad.nivel} />

        <div className="grid grid-cols-2 gap-3">
          <Dato icono={Package} titulo="Volumen aprox." valor={volumen} />
          <Dato icono={Truck} titulo="Vehículo" valor={plan.vehiculo} />
          <Dato icono={Users} titulo="Equipo" valor={`${plan.operarios} operarios`} />
          <Dato icono={Clock} titulo="Duración" valor={horas} />
        </div>

        {plan.avisos.length > 0 && (
          <ul className="space-y-3">
            {plan.avisos.map((a) => {
              const Icono = ICONO_AVISO[a.tono];
              return (
                <li key={a.texto} className="flex gap-3 text-sm animate-fade-in">
                  <Icono className={`w-4 h-4 mt-0.5 shrink-0 ${COLOR_AVISO[a.tono]}`} />
                  <span className="text-primary-foreground/90">{a.texto}</span>
                </li>
              );
            })}
          </ul>
        )}

        <div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-2">Ya incluido</p>
          <ul className="space-y-1.5">
            {plan.incluido.map((i) => (
              <li key={i} className="flex gap-2 text-sm text-primary-foreground/90">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-2">Te recomendamos</p>
          <div className="flex flex-wrap gap-2">
            {plan.servicios.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="text-xs bg-gold/15 text-gold px-3 py-1.5 rounded-full hover:bg-gold/25 transition-colors"
              >
                {s.nombre}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-2">Para leer antes</p>
          <ul className="space-y-1.5">
            {plan.guias.map((a) => (
              <li key={a.slug}>
                <Link href={a.href} className="text-sm text-primary-foreground/90 hover:text-gold underline-offset-4 hover:underline">
                  {a.titulo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-primary-foreground/60 border-t border-white/10 pt-4">
          Estimación orientativa basada en más de {NEGOCIO.stats.anios} años de mudanzas. El presupuesto final lo
          confirmamos con vos.{" "}
          <a href={TEL_HREF} className="text-gold inline-flex items-center gap-1">
            <Phone className="w-3 h-3" /> {TELEFONO.visible}
          </a>
        </p>
      </aside>
    </div>
  );
}
