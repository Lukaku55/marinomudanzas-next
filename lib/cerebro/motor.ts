// El "cerebro" del sitio: reglas que convierten los datos de una mudanza en un
// plan concreto (volumen, vehículo, equipo, tiempos, avisos y recomendaciones).
// Las cifras salen de nuestras propias guías del blog ("Cómo calcular el
// volumen de tu mudanza" y "Cuánto tarda una mudanza") y de las políticas que
// figuran en las preguntas frecuentes, así el asistente y el sitio dicen lo mismo.
// No calcula precios: el presupuesto lo arma el equipo.

import { guia, type Guia, type SlugGuia } from "./guias";
import { NEGOCIO } from "./negocio";
import { SERVICIOS, type ClaveServicio, type Servicio } from "./servicios";

export type Ambientes = 1 | 2 | 3 | 4 | 5;
export type Alcance = "caba" | "gba" | "interior";
export type Extra = "delicados" | "soga" | "guardamuebles" | "seguro";

export interface Acceso {
  tipo: "departamento" | "casa";
  piso: number;
  ascensor: boolean;
}

export interface DatosMudanza {
  uso: "hogar" | "oficina";
  ambientes: Ambientes;
  origen: Acceso;
  destino: Acceso;
  alcance: Alcance;
  extras: Extra[];
  /** Fecha deseada en formato YYYY-MM-DD. */
  fecha?: string;
}

export interface Aviso {
  tono: "info" | "alerta" | "ok";
  texto: string;
}

export interface Plan {
  volumen: [number, number | null];
  vehiculo: string;
  operarios: number;
  horas: [number, number] | null;
  complejidad: { puntaje: number; nivel: "Simple" | "Moderada" | "Compleja" };
  incluido: string[];
  servicios: Servicio[];
  avisos: Aviso[];
  guias: Guia[];
}

export const ETIQUETA_AMBIENTES: Record<Ambientes, string> = {
  1: "Monoambiente",
  2: "2 ambientes",
  3: "3 ambientes",
  4: "4 ambientes",
  5: "Casa grande / 5+",
};

export const ETIQUETA_EXTRA: Record<Extra, string> = {
  delicados: "Embalaje de vajilla y objetos delicados",
  soga: "Muebles que no pasan por ascensor ni escalera",
  guardamuebles: "Guardar muebles un tiempo",
  seguro: "Seguro de carga",
};

// "Cómo calcular el volumen de tu mudanza"
const VOLUMEN: Record<Ambientes, [number, number | null]> = {
  1: [10, 20],
  2: [20, 35],
  3: [35, 50],
  4: [40, 60],
  5: [60, null],
};

// "Cuánto tarda una mudanza en Buenos Aires"
const HORAS_BASE: Record<Ambientes, [number, number]> = {
  1: [2, 3],
  2: [3, 5],
  3: [5, 7],
  4: [7, 10],
  5: [8, 12],
};

const OPERARIOS_BASE: Record<Ambientes, number> = { 1: 2, 2: 3, 3: 3, 4: 4, 5: 5 };

/** Pisos que hay que subir o bajar a pie en un extremo de la mudanza. */
export function pisosPorEscalera(a: Acceso): number {
  return a.tipo === "casa" || a.ascensor ? 0 : Math.max(0, a.piso);
}

function vehiculoPara(m3: number): string {
  if (m3 <= 20) return "Camión chico";
  if (m3 <= 35) return "Camión mediano";
  if (m3 <= 60) return "Camión grande";
  return "Camión grande + apoyo";
}

function fechaLocal(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function diasHasta(iso: string, hoy: Date): number {
  const inicio = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  return Math.round((fechaLocal(iso).getTime() - inicio.getTime()) / 86_400_000);
}

export function planificar(d: DatosMudanza, hoy: Date = new Date()): Plan {
  const escaleraO = pisosPorEscalera(d.origen);
  const escaleraD = pisosPorEscalera(d.destino);
  const escaleraMax = Math.max(escaleraO, escaleraD);
  const tiene = (e: Extra) => d.extras.includes(e);
  const necesitaSoga = tiene("soga") || escaleraMax >= 5;

  const volumen = VOLUMEN[d.ambientes];
  const vehiculo = vehiculoPara(volumen[1] ?? 61);

  let operarios = OPERARIOS_BASE[d.ambientes];
  if (escaleraMax >= 2) operarios += 1;
  if (necesitaSoga) operarios += 1;
  operarios = Math.min(operarios, 7);

  let horas: [number, number] | null = null;
  if (d.alcance !== "interior") {
    const [min, max] = HORAS_BASE[d.ambientes];
    // "Cada piso sin ascensor suma aproximadamente 1 hora al operativo" (tope razonable).
    const extraEscalera = Math.min(escaleraO + escaleraD, 6);
    // "Si se trabaja por la ventana suma entre 1 y 2 horas".
    const soga: [number, number] = necesitaSoga ? [1, 2] : [0, 0];
    const viaje: [number, number] = d.alcance === "gba" ? [1, 2] : [0, 1];
    horas = [min + extraEscalera + soga[0] + viaje[0], max + extraEscalera + soga[1] + viaje[1]];
  }

  let puntaje = d.ambientes * 12;
  puntaje += Math.min(escaleraO + escaleraD, 8) * 5;
  if (necesitaSoga) puntaje += 15;
  if (d.alcance === "gba") puntaje += 5;
  if (d.alcance === "interior") puntaje += 20;
  puntaje = Math.min(100, puntaje);
  const nivel = puntaje < 35 ? "Simple" : puntaje < 65 ? "Moderada" : "Compleja";

  const incluido = ["Embalaje de muebles con mantas y film stretch", "Desarmado y armado de muebles"];
  if (d.origen.tipo === "departamento" || d.destino.tipo === "departamento") {
    incluido.push("Coordinación con el encargado del edificio");
  }

  const servicios = new Set<ClaveServicio>([d.uso === "oficina" ? "oficinas" : "residencial"]);
  if (d.alcance === "interior") servicios.add("interior");
  if (necesitaSoga) servicios.add("soga");
  if (tiene("guardamuebles")) servicios.add("guardamuebles");

  const avisos: Aviso[] = [];
  const guias = new Set<SlugGuia>();

  if (necesitaSoga) {
    avisos.push({
      tono: "alerta",
      texto: "Muebles grandes o piso alto: evaluamos un movimiento por soga por la ventana o el balcón.",
    });
    guias.add("mudanzas-por-soga");
  }
  if (escaleraMax > 0) {
    avisos.push({
      tono: escaleraMax >= 3 ? "alerta" : "info",
      texto: `Piso ${escaleraMax} por escalera: cada piso sin ascensor suma cerca de 1 hora al operativo.`,
    });
    guias.add("mudanzas-con-y-sin-ascensor");
  }
  if (d.origen.tipo === "departamento" || d.destino.tipo === "departamento") {
    avisos.push({ tono: "info", texto: "Edificio: consultá con la administración los horarios permitidos para mudanzas." });
    guias.add("mudanzas-edificios-buenos-aires");
  }
  if (tiene("delicados")) {
    avisos.push({
      tono: "ok",
      texto: "Un embalador va a tu casa 48 hs antes para embalar cristalería, loza y vajilla.",
    });
    guias.add("como-embalar-muebles-mudanza");
  }
  if (tiene("seguro") && d.alcance !== "interior") {
    avisos.push({
      tono: "info",
      texto: "El seguro de carga lo ofrecemos para mudanzas al interior, documentación sensible y equipos informáticos. Contanos qué querés asegurar.",
    });
  }
  if (d.alcance === "interior") {
    avisos.push({
      tono: "info",
      texto: "Al interior hacemos solo mudanzas exclusivas: tu carga viaja sola, sin cargas parciales ni expreso.",
    });
    guias.add("mudanzas-larga-distancia-argentina");
  }
  if (d.ambientes === 5 && d.alcance !== "interior") {
    avisos.push({ tono: "info", texto: "Una casa grande puede llevar 2 jornadas. Lo planificamos con vos." });
  }

  if (d.fecha) {
    const f = fechaLocal(d.fecha);
    const dias = diasHasta(d.fecha, hoy);
    if (dias < 0) {
      avisos.push({ tono: "alerta", texto: "La fecha elegida ya pasó. Revisala para que podamos agendarte." });
    } else {
      if (!NEGOCIO.horario.dias.includes(f.getDay())) {
        avisos.push({ tono: "alerta", texto: "Los domingos no hacemos mudanzas. Trabajamos de lunes a sábado." });
      }
      const dia = f.getDate();
      const ultimo = new Date(f.getFullYear(), f.getMonth() + 1, 0).getDate();
      if (dia >= ultimo - 4 || dia <= 3) {
        avisos.push({
          tono: "alerta",
          texto: "Fin/principio de mes es la época de más demanda. Reservá cuanto antes o considerá mitad de mes.",
        });
        guias.add("mudanzas-fin-de-mes");
      } else if (dia >= 10 && dia <= 20) {
        avisos.push({ tono: "ok", texto: "Mitad de mes: buena elección, hay más disponibilidad." });
      }
      if (dias < NEGOCIO.anticipacionRecomendada) {
        avisos.push({
          tono: "info",
          texto: `Recomendamos coordinar con 15 a 20 días de anticipación. Faltan ${dias}: escribinos hoy para asegurar la fecha.`,
        });
      }
    }
  }

  if (d.uso === "oficina") guias.add("mudanzas-oficinas-buenos-aires");
  if (tiene("guardamuebles")) guias.add("guardamuebles-buenos-aires");
  if (d.uso === "hogar" && d.ambientes === 2) guias.add("mudanzas-2-ambientes-buenos-aires");
  if (d.uso === "hogar" && d.ambientes === 3) guias.add("mudanzas-3-ambientes-buenos-aires");
  guias.add("como-calcular-volumen-mudanza");
  guias.add("checklist-mudanza");

  return {
    volumen,
    vehiculo,
    operarios,
    horas,
    complejidad: { puntaje, nivel },
    incluido,
    servicios: [...servicios].map((k) => SERVICIOS[k]),
    avisos,
    guias: [...guias].slice(0, 3).map(guia),
  };
}

function describirAcceso(a: Acceso): string {
  if (a.tipo === "casa") return "casa";
  const piso = a.piso === 0 ? "PB" : `piso ${a.piso}`;
  return `depto ${piso}${a.piso > 0 ? (a.ascensor ? " con ascensor" : " sin ascensor") : ""}`;
}

const ALCANCE_TXT: Record<Alcance, string> = { caba: "dentro de CABA", gba: "CABA ↔ GBA", interior: "al interior del país" };

/** Mensaje listo para WhatsApp con todo lo que cargó la persona. */
export function mensajeWhatsApp(
  d: DatosMudanza,
  p: Plan,
  contacto: { nombre?: string; telefono?: string; origen?: string; destino?: string; detalles?: string } = {},
): string {
  const lineas = [
    `Hola${contacto.nombre ? `, soy ${contacto.nombre}` : ""}. Quiero cotizar una mudanza.`,
    contacto.telefono && `- Teléfono: ${contacto.telefono}`,
    `- Tipo: ${d.uso === "oficina" ? "Oficina / comercio" : "Hogar"} · ${ETIQUETA_AMBIENTES[d.ambientes]}`,
    `- Origen: ${contacto.origen ? contacto.origen + " · " : ""}${describirAcceso(d.origen)}`,
    `- Destino: ${contacto.destino ? contacto.destino + " · " : ""}${describirAcceso(d.destino)}`,
    `- Recorrido: ${ALCANCE_TXT[d.alcance]}`,
    d.fecha && `- Fecha: ${d.fecha.split("-").reverse().join("/")}`,
    d.extras.length > 0 && `- Extras: ${d.extras.map((e) => ETIQUETA_EXTRA[e]).join(", ")}`,
    contacto.detalles?.trim() && `- Detalles: ${contacto.detalles.trim()}`,
    `(Estimación del sitio: ~${p.volumen[0]}${p.volumen[1] ? `-${p.volumen[1]}` : "+"} m³, ${p.vehiculo.toLowerCase()}, ${p.operarios} operarios)`,
  ];
  return lineas.filter(Boolean).join("\n");
}

/** ¿Estamos atendiendo ahora? Calculado en hora de Buenos Aires. */
export function estadoAtencion(ahora: Date = new Date()): { abierto: boolean; texto: string } {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: NEGOCIO.zonaHoraria,
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(ahora);
  const dia = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(partes.find((x) => x.type === "weekday")!.value);
  const hora = Number(partes.find((x) => x.type === "hour")!.value);
  const { dias, abre, cierra } = NEGOCIO.horario;
  const abierto = dias.includes(dia) && hora >= abre && hora < cierra;
  if (abierto) return { abierto, texto: "Atendiendo ahora · respondemos en minutos" };
  const manana = (dia + (hora >= cierra ? 1 : 0)) % 7;
  const proximo = dias.includes(manana) ? (manana === dia ? "hoy" : "mañana") : "el lunes";
  return { abierto, texto: `Fuera de horario · dejanos tu mensaje y te respondemos ${proximo} desde las ${abre} hs` };
}
