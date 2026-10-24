"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Plus, WarningCircle, WhatsappLogo, X } from "@phosphor-icons/react";
import { EMPRESA } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import { evento } from "./Analitica";

type Campo = "nombre" | "telefono" | "email" | "tipo" | "fecha" | "ascensor" | "mensaje";
type Datos = Record<Campo, string>;
type Lista = "origen" | "destino";
const VACIO: Datos = { nombre: "", telefono: "", email: "", tipo: "", fecha: "", ascensor: "", mensaje: "" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAXIMO = 4; // direcciones por lista

const TEXTOS = {
  es: {
    nombre: "Nombre y apellido", telefono: "Teléfono", email: "Correo electrónico", tipo: "Tipo de mudanza",
    elegir: "Elegí una opción", origen: "Dirección de origen", destino: "Dirección de destino",
    origenN: (n: number) => `Origen ${n}`, destinoN: (n: number) => `Destino ${n}`,
    agregarOrigen: "Agregar otro origen", agregarDestino: "Agregar otro destino",
    quitar: (nombre: string) => `Quitar ${nombre.toLowerCase()}`,
    ascensor: "¿Hay ascensor?",
    ascensores: { origen: "Sí, en el origen", destino: "Sí, en el destino", ambos: "Sí, en origen y destino", ninguno: "No, en ninguno" },
    fecha: "Fecha estimada", mensaje: "Información adicional", opcional: "(opcional)",
    placeholder: "Piso, muebles grandes, horarios del edificio...",
    enviar: "Solicitar presupuesto",
    nota: "Al tocar el botón se abre WhatsApp con tu pedido ya escrito. Nos llega cuando lo enviás desde ahí.",
    revisar: "Revisá los campos marcados y volvé a intentar.",
    abierto: "Abrimos WhatsApp con tu pedido.", tocarEnviar: "Tocá Enviar en el chat", paraQueLlegue: "para que nos llegue.",
    noSeAbrio: "Si no se abrió,", abrirAca: "abrilo desde acá", oLlamanos: "o llamanos al",
    err: {
      nombre: "Ingresá tu nombre y apellido.",
      telefono: "Ingresá un teléfono con código de área, por ejemplo 11 5555 5555.",
      email: "El correo no parece válido. Revisalo o dejalo vacío.",
      tipo: "Elegí qué tipo de mudanza es.",
      ascensor: "Contanos si hay ascensor.",
      origen: "Indicá desde dónde te mudás (calle y barrio alcanza).",
      destino: "Indicá hacia dónde te mudás.",
      extra: "Completá esta dirección o quitala.",
    },
    msg: {
      hola: "Hola, quiero pedir un presupuesto de mudanza.", nombre: "Nombre", telefono: "Teléfono", correo: "Correo", tipo: "Tipo",
      origen: "Origen", destino: "Destino", ascensor: "Ascensor", fecha: "Fecha estimada", aDefinir: "a definir", detalles: "Detalles",
    },
  },
  en: {
    nombre: "Full name", telefono: "Phone", email: "Email", tipo: "Type of move",
    elegir: "Choose an option", origen: "Moving from", destino: "Moving to",
    origenN: (n: number) => `Pickup ${n}`, destinoN: (n: number) => `Drop-off ${n}`,
    agregarOrigen: "Add another pickup address", agregarDestino: "Add another drop-off address",
    quitar: (nombre: string) => `Remove ${nombre.toLowerCase()}`,
    ascensor: "Is there an elevator?",
    ascensores: { origen: "Yes, at the pickup", destino: "Yes, at the drop-off", ambos: "Yes, at both", ninguno: "No, at neither" },
    fecha: "Estimated date", mensaje: "Additional information", opcional: "(optional)",
    placeholder: "Floor, large furniture, building hours...",
    enviar: "Request a quote",
    nota: "The button opens WhatsApp with your request already written. We get it when you send it from there.",
    revisar: "Check the highlighted fields and try again.",
    abierto: "We opened WhatsApp with your request.", tocarEnviar: "Tap Send in the chat", paraQueLlegue: "so it reaches us.",
    noSeAbrio: "If it didn't open,", abrirAca: "open it here", oLlamanos: "or call us at",
    err: {
      nombre: "Enter your full name.",
      telefono: "Enter a phone number with area code, for example 11 5555 5555.",
      email: "That email doesn't look right. Check it or leave it empty.",
      tipo: "Choose the type of move.",
      ascensor: "Let us know about the elevator.",
      origen: "Tell us where you're moving from (street and neighborhood is enough).",
      destino: "Tell us where you're moving to.",
      extra: "Fill in this address or remove it.",
    },
    msg: {
      hola: "Hi, I'd like a moving quote.", nombre: "Name", telefono: "Phone", correo: "Email", tipo: "Type",
      origen: "From", destino: "To", ascensor: "Elevator", fecha: "Estimated date", aDefinir: "to be defined", detalles: "Details",
    },
  },
};

type Errores = Partial<Record<string, string>>;

const campo = "mt-2 w-full rounded-[4px] border border-[#7d8898] bg-white px-4 text-[1rem] text-ink transition-[border-color,box-shadow] duration-200 placeholder:text-[#5f6b7b] focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/25 aria-[invalid=true]:border-[#a3261a]";

/**
 * El sitio no tiene servidor de correo: el pedido se envía por WhatsApp, que
 * es el canal real del negocio. El formulario arma el mensaje y abre el chat;
 * la persona lo envía desde ahí. Nunca se muestra "enviado" sin que lo esté.
 */
export default function PresupuestoForm({ idioma = "es" }: { idioma?: Idioma }) {
  const tx = TEXTOS[idioma];
  const t = textos(idioma);
  const uid = useId();
  const id = (c: string) => `${uid}-${c}`;
  const [datos, setDatos] = useState<Datos>(VACIO);
  const [listas, setListas] = useState<Record<Lista, string[]>>({ origen: [""], destino: [""] });
  const [errores, setErrores] = useState<Errores>({});
  const [enlace, setEnlace] = useState<string | null>(null);
  const enfocar = useRef<string | null>(null);
  const fecha = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // No permitir fechas pasadas, según el reloj del visitante.
    if (fecha.current) fecha.current.min = new Date().toLocaleDateString("en-CA");
  }, []);

  // Al sumar o quitar una dirección, el foco va al campo que corresponde (después de dibujarlo).
  useEffect(() => {
    if (!enfocar.current) return;
    document.getElementById(`${uid}-${enfocar.current}`)?.focus();
    enfocar.current = null;
  });

  const set = (c: Campo) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setDatos((d) => ({ ...d, [c]: e.target.value }));
    setEnlace(null);
  };
  const setDireccion = (lista: Lista, i: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setListas((l) => ({ ...l, [lista]: l[lista].map((v, j) => (j === i ? valor : v)) }));
    setEnlace(null);
  };
  const agregar = (lista: Lista) => {
    const n = listas[lista].length;
    if (n >= MAXIMO) return;
    setListas((l) => ({ ...l, [lista]: [...l[lista], ""] }));
    enfocar.current = `${lista}-${n}`;
  };
  const quitar = (lista: Lista, i: number) => {
    setListas((l) => ({ ...l, [lista]: l[lista].filter((_, j) => j !== i) }));
    setErrores((e) => Object.fromEntries(Object.entries(e).filter(([k]) => !k.startsWith(`${lista}-`))));
    enfocar.current = `${lista}-${Math.max(0, i - 1)}`;
  };

  function validar() {
    const e: Errores = {};
    if (datos.nombre.trim().length < 2) e.nombre = tx.err.nombre;
    if (datos.telefono.replace(/\D/g, "").length < 8) e.telefono = tx.err.telefono;
    if (datos.email && !EMAIL.test(datos.email.trim())) e.email = tx.err.email;
    if (!datos.tipo) e.tipo = tx.err.tipo;
    (["origen", "destino"] as Lista[]).forEach((lista) => {
      listas[lista].forEach((v, i) => {
        if (v.trim().length < 3) e[`${lista}-${i}`] = i === 0 ? tx.err[lista] : tx.err.extra;
      });
    });
    if (!datos.ascensor) e.ascensor = tx.err.ascensor;
    return e;
  }

  function armarMensaje() {
    const m = tx.msg;
    const lineas = (lista: Lista) => {
      const v = listas[lista].map((x) => x.trim());
      return v.length === 1 ? [`${m[lista]}: ${v[0]}`] : v.map((x, i) => `${m[lista]} ${i + 1}: ${x}`);
    };
    const fechaTxt = datos.fecha ? datos.fecha.split("-").reverse().join("/") : m.aDefinir;
    return [
      m.hola,
      `${m.nombre}: ${datos.nombre.trim()}`,
      `${m.telefono}: ${datos.telefono.trim()}`,
      datos.email ? `${m.correo}: ${datos.email.trim()}` : "",
      `${m.tipo}: ${datos.tipo}`,
      ...lineas("origen"),
      ...lineas("destino"),
      `${m.ascensor}: ${tx.ascensores[datos.ascensor as keyof typeof tx.ascensores]}`,
      `${m.fecha}: ${fechaTxt}`,
      datos.mensaje.trim() ? `${m.detalles}: ${datos.mensaje.trim()}` : "",
    ].filter(Boolean).join("\n");
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const err = validar();
    setErrores(err);
    const primero = Object.keys(err)[0];
    if (primero) {
      setEnlace(null);
      document.getElementById(id(primero))?.focus();
      return;
    }
    const url = t.whatsapp(armarMensaje());
    evento("generate_lead", { method: "formulario_presupuesto", idioma });
    setEnlace(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const ayuda = (clave: string) => ({
    "aria-invalid": Boolean(errores[clave]),
    "aria-describedby": errores[clave] ? id(`${clave}-error`) : undefined,
  });
  const props = (c: Campo) => ({ id: id(c), name: c, value: datos[c], onChange: set(c), ...ayuda(c) });
  const error = (clave: string) => errores[clave] && <p id={id(`${clave}-error`)} className="mt-1.5 text-sm text-[#a3261a]">{errores[clave]}</p>;
  const opcional = <span className="font-normal text-ink-soft">{tx.opcional}</span>;
  const etiqueta = "text-[0.95rem] font-medium";
  const hayErrores = Object.keys(errores).length > 0;

  // Se llama como función (no como componente) para que los campos no se vuelvan a montar al escribir.
  const direcciones = (lista: Lista) => {
    const valores = listas[lista];
    const nombre = (i: number) => (valores.length === 1 ? tx[lista] : lista === "origen" ? tx.origenN(i + 1) : tx.destinoN(i + 1));
    return (
      <fieldset className="grid content-start gap-4">
        <legend className="sr-only">{tx[lista]}</legend>
        {valores.map((v, i) => {
          const clave = `${lista}-${i}`;
          return (
            <div key={clave}>
              <div className="flex items-center justify-between gap-3">
                <label htmlFor={id(clave)} className={etiqueta}>{nombre(i)}</label>
                {i > 0 && (
                  <button type="button" onClick={() => quitar(lista, i)} className="-my-2 grid h-10 w-10 place-items-center rounded-[4px] text-ink-soft hover:bg-paper hover:text-[#a3261a]" aria-label={tx.quitar(nombre(i))}>
                    <X size={18} aria-hidden="true" />
                  </button>
                )}
              </div>
              <input id={id(clave)} name={clave} value={v} onChange={setDireccion(lista, i)} type="text" maxLength={200} autoComplete={lista === "origen" && i === 0 ? "street-address" : "off"} required={i === 0} className={`${campo} h-12`} {...ayuda(clave)} />
              {error(clave)}
            </div>
          );
        })}
        {valores.length < MAXIMO && (
          <button type="button" onClick={() => agregar(lista)} className="inline-flex min-h-[44px] items-center gap-2 justify-self-start rounded-[4px] text-[0.95rem] font-semibold text-navy hover:underline">
            <Plus size={18} weight="bold" aria-hidden="true" />
            {lista === "origen" ? tx.agregarOrigen : tx.agregarDestino}
          </button>
        )}
      </fieldset>
    );
  };

  return (
    <form onSubmit={enviar} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor={id("nombre")} className={etiqueta}>{tx.nombre}</label>
        <input {...props("nombre")} type="text" autoComplete="name" required maxLength={100} className={`${campo} h-12`} />
        {error("nombre")}
      </div>
      <div>
        <label htmlFor={id("telefono")} className={etiqueta}>{tx.telefono}</label>
        <input {...props("telefono")} type="tel" autoComplete="tel" inputMode="tel" required maxLength={25} className={`${campo} h-12`} />
        {error("telefono")}
      </div>
      <div>
        <label htmlFor={id("email")} className={etiqueta}>{tx.email} {opcional}</label>
        <input {...props("email")} type="email" autoComplete="email" maxLength={120} className={`${campo} h-12`} />
        {error("email")}
      </div>
      <div>
        <label htmlFor={id("tipo")} className={etiqueta}>{tx.tipo}</label>
        <select {...props("tipo")} required className={`${campo} h-12`}>
          <option value="">{tx.elegir}</option>
          {t.tiposMudanza.map((x) => <option key={x}>{x}</option>)}
        </select>
        {error("tipo")}
      </div>

      {direcciones("origen")}
      {direcciones("destino")}

      <div>
        <label htmlFor={id("ascensor")} className={etiqueta}>{tx.ascensor}</label>
        <select {...props("ascensor")} required className={`${campo} h-12`}>
          <option value="">{tx.elegir}</option>
          {Object.entries(tx.ascensores).map(([valor, texto]) => <option key={valor} value={valor}>{texto}</option>)}
        </select>
        {error("ascensor")}
      </div>
      <div>
        <label htmlFor={id("fecha")} className={etiqueta}>{tx.fecha} {opcional}</label>
        <input {...props("fecha")} ref={fecha} type="date" className={`${campo} h-12`} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor={id("mensaje")} className={etiqueta}>{tx.mensaje} {opcional}</label>
        <textarea {...props("mensaje")} rows={4} maxLength={1000} placeholder={tx.placeholder} className={`${campo} resize-y py-3`} />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className="btn btn-primario w-full sm:w-auto">
          <WhatsappLogo size={20} weight="fill" />
          {tx.enviar}
        </button>
        <p className="mt-3 text-sm text-ink-soft">{tx.nota}</p>
        <div aria-live="polite" className="mt-3 min-h-[1.5rem] pr-16 text-[0.95rem] sm:pr-0">
          {hayErrores && (
            <p className="flex items-start gap-2 text-[#a3261a]">
              <WarningCircle size={22} weight="fill" className="mt-0.5 shrink-0" />
              <span>{tx.revisar}</span>
            </p>
          )}
          {enlace && (
            <p className="rounded-[4px] border border-line bg-paper p-4 text-ink">
              {tx.abierto} <strong>{tx.tocarEnviar}</strong> {tx.paraQueLlegue}{" "}
              {tx.noSeAbrio} <a href={enlace} target="_blank" rel="noopener noreferrer" className="link-sub font-semibold text-navy">{tx.abrirAca}</a>{" "}
              {tx.oLlamanos} <a href={EMPRESA.telefonos[0].href} className="link-sub font-semibold text-navy">{EMPRESA.telefonos[0].visible}</a>.
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
