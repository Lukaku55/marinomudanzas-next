"use client";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

/**
 * La mudanza contada en 3D. El equipo embala los muebles de un departamento
 * con mantas y film, los carga en el camión, el camión viaja y se descargan en el departamento
 * nuevo. `progreso` (0 a 1) lo escribe ScrollTrigger en una ref, así la escena
 * avanza sin re-renderizar React.
 */
type Props = { progreso: React.RefObject<number>; quieto: boolean };
type V3 = [number, number, number];
type Pose = { pos: V3; rot?: V3 };

const P = 0.58; // altura del piso del camión
const AX = -4.5; // centro del departamento de origen
const VIAJE = 20; // distancia hasta el departamento nuevo
const RECORRIDO = 23; // lo que avanza el camión: estaciona pasando el departamento nuevo
const CALLE = 3.7; // carril por el que pasa delante del edificio, sin atravesarlo
const TX1 = 2.65; // camión estacionado junto al origen
const CARGA: [number, number] = [0.1, 0.46];
const RUTA: [number, number] = [0.48, 0.64];
const DESCARGA: [number, number] = [0.66, 0.97];
const OPERARIOS = 3;
const H = Math.PI / 2;

const suave = (t: number) => t * t * (3 - 2 * t);
const tramo = (p: number, a: number, b: number) => Math.min(1, Math.max(0, (p - a) / (b - a)));
const avance = (p: number) => suave(tramo(p, RUTA[0], RUTA[1]));
const camionX = (p: number) => TX1 + avance(p) * RECORRIDO;
/** Sale a la calle, pasa por delante del edificio nuevo y vuelve a arrimarse para descargar. */
const camionZ = (p: number) => {
  const f = avance(p);
  return 0.2 + CALLE * suave(tramo(f, 0.04, 0.3)) * (1 - suave(tramo(f, 0.86, 1)));
};

/* ---------- Muebles: piezas simples, con el origen en el piso ---------- */

function Heladera() {
  return (
    <>
      <mesh position={[0, 0.85, 0]}><boxGeometry args={[0.7, 1.7, 0.68]} /><meshStandardMaterial color="#e6ebf1" roughness={0.35} metalness={0.25} /></mesh>
      <mesh position={[0, 1.18, 0.345]}><boxGeometry args={[0.7, 0.02, 0.01]} /><meshStandardMaterial color="#8792a1" /></mesh>
      <mesh position={[-0.27, 1.38, 0.36]}><boxGeometry args={[0.035, 0.3, 0.04]} /><meshStandardMaterial color="#8792a1" metalness={0.6} roughness={0.3} /></mesh>
      <mesh position={[-0.27, 0.86, 0.36]}><boxGeometry args={[0.035, 0.46, 0.04]} /><meshStandardMaterial color="#8792a1" metalness={0.6} roughness={0.3} /></mesh>
    </>
  );
}

function Sillon() {
  const tela = <meshStandardMaterial color="#3f6ea8" roughness={0.9} />;
  return (
    <>
      <mesh position={[0, 0.28, 0.04]}><boxGeometry args={[1.5, 0.34, 0.74]} />{tela}</mesh>
      <mesh position={[0, 0.66, -0.28]}><boxGeometry args={[1.5, 0.56, 0.2]} />{tela}</mesh>
      <mesh position={[-0.67, 0.44, 0.04]}><boxGeometry args={[0.17, 0.5, 0.74]} />{tela}</mesh>
      <mesh position={[0.67, 0.44, 0.04]}><boxGeometry args={[0.17, 0.5, 0.74]} />{tela}</mesh>
      <mesh position={[-0.33, 0.5, 0.08]}><boxGeometry args={[0.62, 0.12, 0.56]} /><meshStandardMaterial color="#5484bf" roughness={0.9} /></mesh>
      <mesh position={[0.33, 0.5, 0.08]}><boxGeometry args={[0.62, 0.12, 0.56]} /><meshStandardMaterial color="#5484bf" roughness={0.9} /></mesh>
    </>
  );
}

function Vajillero() {
  const madera = <meshStandardMaterial color="#7b4a26" roughness={0.6} />;
  return (
    <>
      <mesh position={[0, 0.8, 0]}><boxGeometry args={[1, 1.6, 0.44]} />{madera}</mesh>
      <mesh position={[0, 1.63, 0]}><boxGeometry args={[1.08, 0.06, 0.5]} /><meshStandardMaterial color="#5e3618" roughness={0.6} /></mesh>
      <mesh position={[-0.24, 1.15, 0.225]}><boxGeometry args={[0.42, 0.7, 0.012]} /><meshStandardMaterial color="#bcd8ef" roughness={0.1} metalness={0.4} /></mesh>
      <mesh position={[0.24, 1.15, 0.225]}><boxGeometry args={[0.42, 0.7, 0.012]} /><meshStandardMaterial color="#bcd8ef" roughness={0.1} metalness={0.4} /></mesh>
      <mesh position={[-0.24, 0.38, 0.225]}><boxGeometry args={[0.42, 0.6, 0.012]} /><meshStandardMaterial color="#5e3618" roughness={0.6} /></mesh>
      <mesh position={[0.24, 0.38, 0.225]}><boxGeometry args={[0.42, 0.6, 0.012]} /><meshStandardMaterial color="#5e3618" roughness={0.6} /></mesh>
      <mesh position={[-0.05, 0.4, 0.24]}><sphereGeometry args={[0.022, 10, 10]} /><meshStandardMaterial color="#e9a62f" metalness={0.7} roughness={0.3} /></mesh>
      <mesh position={[0.05, 0.4, 0.24]}><sphereGeometry args={[0.022, 10, 10]} /><meshStandardMaterial color="#e9a62f" metalness={0.7} roughness={0.3} /></mesh>
    </>
  );
}

function Lampara() {
  return (
    <>
      <mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.17, 0.17, 0.04, 20]} /><meshStandardMaterial color="#2a2f38" roughness={0.5} /></mesh>
      <mesh position={[0, 0.72, 0]}><cylinderGeometry args={[0.018, 0.018, 1.4, 8]} /><meshStandardMaterial color="#2a2f38" roughness={0.5} /></mesh>
      <mesh position={[0, 1.52, 0]}><cylinderGeometry args={[0.13, 0.24, 0.3, 20, 1, true]} /><meshStandardMaterial color="#f3e2bd" emissive="#e9a62f" emissiveIntensity={0.35} side={THREE.DoubleSide} roughness={0.8} /></mesh>
    </>
  );
}

function Mesa() {
  const madera = <meshStandardMaterial color="#9a6235" roughness={0.55} />;
  return (
    <>
      <mesh position={[0, 0.72, 0]}><cylinderGeometry args={[0.5, 0.5, 0.05, 28]} />{madera}</mesh>
      <mesh position={[0, 0.36, 0]}><cylinderGeometry args={[0.05, 0.07, 0.7, 12]} />{madera}</mesh>
      <mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.26, 0.28, 0.04, 20]} />{madera}</mesh>
    </>
  );
}

function Cama() {
  const madera = <meshStandardMaterial color="#8a5a33" roughness={0.6} />;
  return (
    <>
      <mesh position={[0, 0.2, 0]}><boxGeometry args={[1.5, 0.3, 2]} />{madera}</mesh>
      <mesh position={[0, 0.5, -1]}><boxGeometry args={[1.5, 1, 0.08]} />{madera}</mesh>
    </>
  );
}

function Colchon() {
  return (
    <>
      <mesh position={[0, 0.11, 0]}><boxGeometry args={[1.4, 0.22, 1.9]} /><meshStandardMaterial color="#f2f1ec" roughness={0.95} /></mesh>
      <mesh position={[0, 0.115, 0]}><boxGeometry args={[1.41, 0.04, 1.91]} /><meshStandardMaterial color="#c9d3e0" roughness={0.9} /></mesh>
      <mesh position={[-0.34, 0.27, -0.68]}><boxGeometry args={[0.55, 0.1, 0.34]} /><meshStandardMaterial color="#ffffff" roughness={1} /></mesh>
      <mesh position={[0.34, 0.27, -0.68]}><boxGeometry args={[0.55, 0.1, 0.34]} /><meshStandardMaterial color="#ffffff" roughness={1} /></mesh>
    </>
  );
}

function Televisor() {
  return (
    <>
      <mesh position={[0, 0.225, 0]}><boxGeometry args={[1.2, 0.45, 0.4]} /><meshStandardMaterial color="#5e3618" roughness={0.6} /></mesh>
      <mesh position={[0, 0.5, 0]}><boxGeometry args={[0.3, 0.1, 0.16]} /><meshStandardMaterial color="#15181d" roughness={0.4} /></mesh>
      <mesh position={[0, 0.88, 0]}><boxGeometry args={[1.12, 0.66, 0.05]} /><meshStandardMaterial color="#15181d" roughness={0.3} /></mesh>
      <mesh position={[0, 0.88, 0.028]}><boxGeometry args={[1.04, 0.58, 0.004]} /><meshStandardMaterial color="#27466e" emissive="#3d6aa3" emissiveIntensity={0.5} roughness={0.2} /></mesh>
    </>
  );
}

function Caja() {
  return (
    <>
      <mesh><boxGeometry args={[0.5, 0.5, 0.5]} /><meshStandardMaterial color="#b98852" roughness={0.85} /></mesh>
      <mesh><boxGeometry args={[0.505, 0.505, 0.08]} /><meshStandardMaterial color="#e9a62f" roughness={0.5} /></mesh>
    </>
  );
}

/** Operario con el uniforme azul de la empresa y una franja dorada. */
function Figura({ piernaA, piernaB, logo }: { piernaA: React.RefObject<THREE.Group | null>; piernaB: React.RefObject<THREE.Group | null>; logo: THREE.Texture }) {
  const azul = <meshStandardMaterial color="#1c2f52" roughness={0.8} />;
  return (
    <>
      <group ref={piernaA} position={[0, 0.82, 0.11]}><mesh position={[0, -0.41, 0]}><boxGeometry args={[0.16, 0.82, 0.16]} />{azul}</mesh></group>
      <group ref={piernaB} position={[0, 0.82, -0.11]}><mesh position={[0, -0.41, 0]}><boxGeometry args={[0.16, 0.82, 0.16]} />{azul}</mesh></group>
      <mesh position={[0, 1.14, 0]}><boxGeometry args={[0.26, 0.64, 0.44]} />{azul}</mesh>
      {/* Espalda: parche blanco con el logo real y una franja dorada debajo. */}
      <mesh position={[-0.134, 1.22, 0]} rotation={[0, -H, 0]}><circleGeometry args={[0.15, 24]} /><meshBasicMaterial color="#ffffff" /></mesh>
      <mesh position={[-0.137, 1.22, 0]} rotation={[0, -H, 0]}><planeGeometry args={[0.25, 0.224]} /><meshBasicMaterial map={logo} transparent /></mesh>
      <mesh position={[-0.134, 0.98, 0]}><boxGeometry args={[0.012, 0.035, 0.36]} /><meshStandardMaterial color="#e9a62f" roughness={0.5} /></mesh>
      <mesh position={[0.24, 1.2, 0.26]} rotation={[0, 0, -1.1]}><boxGeometry args={[0.12, 0.52, 0.12]} />{azul}</mesh>
      <mesh position={[0.24, 1.2, -0.26]} rotation={[0, 0, -1.1]}><boxGeometry args={[0.12, 0.52, 0.12]} />{azul}</mesh>
      <mesh position={[0, 1.62, 0]}><sphereGeometry args={[0.15, 16, 16]} /><meshStandardMaterial color="#d9a67e" roughness={0.8} /></mesh>
      <mesh position={[0.02, 1.71, 0]}><cylinderGeometry args={[0.155, 0.155, 0.09, 16]} />{azul}</mesh>
      <mesh position={[0.15, 1.68, 0]}><boxGeometry args={[0.14, 0.025, 0.22]} />{azul}</mesh>
    </>
  );
}

/* ---------- Qué hay, dónde vive en el departamento y dónde viaja ---------- */

type Objeto = {
  pieza: React.ReactNode;
  casa: Pose;
  /** Dónde queda en el departamento nuevo, que tiene otra distribución. */
  destino: Pose;
  camion: Pose;
  /** Medidas (ancho, alto, fondo) para embalarlo con manta y film. Las cajas no se embalan. */
  bulto?: V3;
  /** Lo llevan entre dos. */
  pesado?: boolean;
};

const caja = (i: number, casa: V3, destino: V3): Objeto => ({
  pieza: <Caja />,
  casa: { pos: casa, rot: [0, (i % 3) * 0.3, 0] },
  destino: { pos: destino, rot: [0, (i % 2) * -0.4, 0] },
  camion: { pos: [-2.45, P + 0.26 + Math.floor(i / 2) * 0.52, i % 2 ? 0.82 : 0.4] },
});

/* El orden es el de carga: en cada tanda de tres sale un solo mueble pesado. */
const OBJETOS: Objeto[] = [
  { pieza: <Heladera />, casa: { pos: [2.7, 0, -1.9] }, destino: { pos: [-2.9, 0, -1.95] }, camion: { pos: [-0.25, P, -0.62] }, bulto: [0.7, 1.7, 0.68], pesado: true },
  { pieza: <Colchon />, casa: { pos: [-1.9, 0.35, -1.05] }, destino: { pos: [1.95, 0.35, -1.15] }, camion: { pos: [-1.15, P + 0.7, 0], rot: [0, 0, H] }, bulto: [1.42, 0.34, 1.92] },
  caja(0, [-2.7, 0.26, 1.6], [2.9, 0.26, 1.6]),
  { pieza: <Vajillero />, casa: { pos: [1.0, 0, -2.05] }, destino: { pos: [-1.4, 0, -2.05] }, camion: { pos: [-0.25, P, 0.45], rot: [0, H, 0] }, bulto: [1.08, 1.66, 0.5], pesado: true },
  { pieza: <Mesa />, casa: { pos: [1.8, 0, -1.0] }, destino: { pos: [-1.9, 0, -0.6] }, camion: { pos: [-1.75, P + 1.72, 0], rot: [Math.PI, 0, 0] }, bulto: [1.02, 0.76, 1.02] },
  caja(1, [-2.1, 0.26, 1.6], [2.3, 0.26, 1.75]),
  { pieza: <Cama />, casa: { pos: [-1.9, 0, -1.1] }, destino: { pos: [1.95, 0, -1.2] }, camion: { pos: [-0.7, P + 0.75, 0], rot: [0, 0, H] }, bulto: [1.52, 0.38, 2.04], pesado: true },
  { pieza: <Televisor />, casa: { pos: [2.8, 0, 0.5], rot: [0, -H, 0] }, destino: { pos: [-3.0, 0, 1.1], rot: [0, H, 0] }, camion: { pos: [-2.6, P, -0.45], rot: [0, H, 0] }, bulto: [1.22, 1.23, 0.42] },
  caja(2, [-0.9, 0.26, 1.7], [2.6, 0.78, 1.65]),
  { pieza: <Sillon />, casa: { pos: [0.5, 0, 0.4], rot: [0, H, 0] }, destino: { pos: [-1.0, 0, 1.1], rot: [0, -H, 0] }, camion: { pos: [-1.75, P, 0], rot: [0, -H, 0] }, bulto: [1.54, 0.96, 0.82], pesado: true },
  caja(3, [-2.4, 0.26, 2.15], [0.95, 0.26, 1.9]),
  caja(4, [1.9, 0.26, 1.7], [-2.7, 0.26, 2.0]),
  caja(5, [2.5, 0.26, 1.7], [0.95, 0.26, -1.9]),
  { pieza: <Lampara />, casa: { pos: [0.4, 0, -0.75] }, destino: { pos: [-0.25, 0, -1.95] }, camion: { pos: [-3.0, P, 0.8] }, bulto: [0.5, 1.7, 0.5] },
];
const N = OBJETOS.length;
const RONDAS = Math.ceil(N / OPERARIOS);

type Fase = "carga" | "descarga";
/** Ventana de scroll en la que se mueve cada objeto. Se descarga en orden inverso. */
function ventana(i: number, fase: Fase): [number, number] {
  const [a, b] = fase === "carga" ? CARGA : DESCARGA;
  const turno = fase === "carga" ? i : N - 1 - i;
  const paso = (b - a) / RONDAS;
  const inicio = a + Math.floor(turno / OPERARIOS) * paso;
  return [inicio, inicio + paso * 0.62];
}
const operarioDe = (i: number, fase: Fase) => (fase === "carga" ? i : N - 1 - i) % OPERARIOS;

const _v = { a: new THREE.Vector3(), b: new THREE.Vector3(), c: new THREE.Vector3() };
/** Posición en el mundo del objeto i para un avance p. Escribe en `out`. */
function posicion(i: number, p: number, out: THREE.Vector3) {
  const o = OBJETOS[i];
  const tc = suave(tramo(p, ...ventana(i, "carga")));
  const td = suave(tramo(p, ...ventana(i, "descarga")));
  _v.a.set(AX + o.casa.pos[0], o.casa.pos[1], o.casa.pos[2]);
  _v.b.set(camionX(p) + o.camion.pos[0], o.camion.pos[1], o.camion.pos[2] + camionZ(p));
  _v.c.set(AX + VIAJE + o.destino.pos[0], o.destino.pos[1], o.destino.pos[2]);
  out.copy(_v.a).lerp(_v.b, tc).lerp(_v.c, td);
  // Se levanta un poco mientras lo llevan.
  out.y += Math.sin(tc * Math.PI) * 0.28 + Math.sin(td * Math.PI) * 0.28;
  return { tc, td };
}

/** Cuánto está embalado (0 a 1): se envuelve antes de salir y se desenvuelve al llegar. */
function embalado(i: number, p: number) {
  const [a] = ventana(i, "carga");
  const [, b] = ventana(i, "descarga");
  return suave(tramo(p, a - 0.045, a - 0.004)) * (1 - suave(tramo(p, b + 0.004, b + 0.035)));
}

/** Manta gris con rayas rojas, como las que usa el equipo, más film y cintas. */
function Embalaje({ bulto, manta, grupo }: { bulto: V3; manta: THREE.Texture; grupo: React.RefObject<THREE.Group | null> }) {
  const [w, h, d] = bulto;
  return (
    <group ref={grupo} visible={false}>
      <mesh position={[0, h / 2, 0]}><boxGeometry args={[w + 0.06, h + 0.03, d + 0.06]} /><meshStandardMaterial map={manta} roughness={1} /></mesh>
      <mesh position={[0, h * 0.3, 0]}><boxGeometry args={[w + 0.085, 0.05, d + 0.085]} /><meshStandardMaterial color="#efe9da" roughness={0.8} /></mesh>
      <mesh position={[0, h * 0.72, 0]}><boxGeometry args={[w + 0.085, 0.05, d + 0.085]} /><meshStandardMaterial color="#efe9da" roughness={0.8} /></mesh>
      <mesh position={[0, h / 2, 0]}><boxGeometry args={[w + 0.11, h + 0.05, d + 0.11]} /><meshStandardMaterial color="#ffffff" transparent opacity={0.2} roughness={0.05} metalness={0.4} depthWrite={false} /></mesh>
    </group>
  );
}

function Pieza({ i, progreso, quieto, manta }: Props & { i: number; manta: THREE.Texture }) {
  const grupo = useRef<THREE.Group>(null);
  const envoltura = useRef<THREE.Group>(null);
  const o = OBJETOS[i];
  const q = useMemo(() => {
    const e = (r?: V3) => new THREE.Quaternion().setFromEuler(new THREE.Euler(...(r ?? [0, 0, 0])));
    return [e(OBJETOS[i].casa.rot), e(OBJETOS[i].camion.rot), e(OBJETOS[i].destino.rot)];
  }, [i]);
  useFrame(() => {
    const g = grupo.current;
    if (!g) return;
    const p = quieto ? 0.3 : (progreso.current ?? 0);
    const { tc, td } = posicion(i, p, g.position);
    g.quaternion.copy(q[0]).slerp(q[1], tc).slerp(q[2], td);
    const env = envoltura.current;
    if (env && o.bulto) {
      // La manta baja desde arriba hasta cubrir el mueble.
      const e = embalado(i, p);
      env.visible = e > 0.01;
      env.scale.y = Math.max(e, 0.001);
      env.position.y = o.bulto[1] * (1 - e);
    }
  });
  return (
    <group ref={grupo}>
      {o.pieza}
      {o.bulto && <Embalaje bulto={o.bulto} manta={manta} grupo={envoltura} />}
    </group>
  );
}

function Piezas(props: Props) {
  const manta = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const x = c.getContext("2d")!;
    x.fillStyle = "#86847f";
    x.fillRect(0, 0, 128, 128);
    for (let n = 0; n < 900; n++) {
      x.fillStyle = n % 2 ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
      x.fillRect((n * 37) % 128, (n * 91) % 128, 2, 2);
    }
    x.fillStyle = "#b4483c";
    [22, 32, 86, 96].forEach((px) => x.fillRect(px, 0, 5, 128));
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }, []);
  return <>{OBJETOS.map((_, i) => <Pieza key={i} i={i} manta={manta} {...props} />)}</>;
}

type Tarea = { a: number; b: number; i: number; fase: Fase };

function tareasDe(filtro: (i: number, fase: Fase) => boolean) {
  const t: Tarea[] = [];
  (["carga", "descarga"] as const).forEach((fase) => {
    for (let i = 0; i < N; i++) if (filtro(i, fase)) { const [a, b] = ventana(i, fase); t.push({ a, b, i, fase }); }
  });
  return t.sort((x, y) => x.a - y.a);
}
/* Tres operarios se reparten todo; un cuarto ayuda con los muebles pesados. */
const TURNOS: { tareas: Tarea[]; ayuda: boolean }[] = [
  ...Array.from({ length: OPERARIOS }, (_, n) => ({ tareas: tareasDe((i, f) => operarioDe(i, f) === n), ayuda: false })),
  { tareas: tareasDe((i) => Boolean(OBJETOS[i].pesado)), ayuda: true },
];

/** De qué lado del objeto va el operario: -1 es del lado del departamento, 1 del lado del camión. */
const lado = (t: Tarea, ayuda: boolean) => (t.fase === "carga" ? -1 : 1) * (ayuda ? -1 : 1);
function junto(t: Tarea, p: number, ayuda: boolean, out: THREE.Vector3) {
  posicion(t.i, p, out);
  const ancho = (OBJETOS[t.i].bulto?.[0] ?? 0.5) / 2;
  out.x += lado(t, ayuda) * (Math.min(ancho, 0.6) + 0.5);
  out.z += ayuda ? -0.2 : 0.25;
  return out;
}

function Operario({ tareas, ayuda, logo, progreso, quieto }: Props & { tareas: Tarea[]; ayuda: boolean; logo: THREE.Texture }) {
  const grupo = useRef<THREE.Group>(null);
  const piernaA = useRef<THREE.Group>(null);
  const piernaB = useRef<THREE.Group>(null);
  const tmp = useRef({ a: new THREE.Vector3(), b: new THREE.Vector3() });

  useFrame(() => {
    const g = grupo.current;
    if (!g) return;
    const { a, b } = tmp.current;
    const p = quieto ? 0.3 : (progreso.current ?? 0);
    const actual = tareas.find((t) => p >= t.a && p <= t.b);
    let mira = 1;
    g.visible = true;
    if (actual) {
      junto(actual, p, ayuda, g.position);
      mira = -lado(actual, ayuda); // siempre de cara al mueble
    } else {
      const previa = [...tareas].reverse().find((t) => t.b < p);
      const proxima = tareas.find((t) => t.a > p);
      if (previa && proxima) {
        // Entre la carga y la descarga viaja en la cabina.
        if (previa.fase !== proxima.fase) g.visible = false;
        junto(previa, previa.b, ayuda, a);
        junto(proxima, proxima.a, ayuda, b);
        g.position.copy(a).lerp(b, suave((p - previa.b) / (proxima.a - previa.b)));
        mira = b.x >= a.x ? 1 : -1;
      } else if (proxima) { junto(proxima, proxima.a, ayuda, g.position); mira = -lado(proxima, ayuda); }
      else if (previa) { junto(previa, previa.b, ayuda, g.position); mira = -lado(previa, ayuda); }
    }
    // Sube al camión cuando entra a la caja de carga.
    const fondo = camionX(p) - 3.25;
    g.position.y = P * suave(tramo(g.position.x, fondo - 0.5, fondo + 0.1)) * (g.position.x < fondo + 3.6 ? 1 : 0);
    // Va algo girado de espaldas a la cámara, para que se vea el logo.
    g.rotation.y = mira === 1 ? 0.65 : Math.PI - 0.65;
    const paso = Math.sin(g.position.x * 7) * 0.5;
    if (piernaA.current) piernaA.current.rotation.z = paso;
    if (piernaB.current) piernaB.current.rotation.z = -paso;
  });

  return <group ref={grupo}><Figura piernaA={piernaA} piernaB={piernaB} logo={logo} /></group>;
}

function Equipo(props: Props) {
  const imagen = useLoader(THREE.TextureLoader, "/marca/logo-marino-nuevo.png");
  const logo = useMemo(() => {
    const t = imagen.clone();
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    t.needsUpdate = true;
    return t;
  }, [imagen]);
  return <>{TURNOS.map((t, n) => <Operario key={n} tareas={t.tareas} ayuda={t.ayuda} logo={logo} {...props} />)}</>;
}

/** Departamento en corte: piso, pared del fondo, pared lateral y un tabique que cambia según la planta. */
function Depto({ x, piso, pared: color, tabique, ventanas }: { x: number; piso: string; pared: string; tabique: { x: number; largo: number }; ventanas: number[] }) {
  const pared = <meshStandardMaterial color={color} roughness={0.95} />;
  return (
    <group position={[x, 0, 0]}>
      <mesh position={[0, -0.05, 0]}><boxGeometry args={[6.6, 0.1, 4.8]} /><meshStandardMaterial color={piso} roughness={0.7} /></mesh>
      <mesh position={[0, 1.15, -2.4]}><boxGeometry args={[6.6, 2.3, 0.1]} />{pared}</mesh>
      <mesh position={[-3.3, 1.15, 0]}><boxGeometry args={[0.1, 2.3, 4.8]} />{pared}</mesh>
      <mesh position={[tabique.x, 1.15, -2.4 + tabique.largo / 2]}><boxGeometry args={[0.1, 2.3, tabique.largo]} />{pared}</mesh>
      {ventanas.map((vx) => (
        <mesh key={vx} position={[vx, 1.35, -2.34]}><boxGeometry args={[1.2, 0.9, 0.02]} /><meshStandardMaterial color="#a8cdee" emissive="#7fb2e0" emissiveIntensity={0.35} roughness={0.2} /></mesh>
      ))}
    </group>
  );
}

function Camion({ progreso, quieto }: Props) {
  const camion = useRef<THREE.Group>(null);
  const bordes = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(3.4, 2.5, 2.1)), []);
  useFrame(({ clock }) => {
    if (!camion.current) return;
    const p = quieto ? 0.3 : (progreso.current ?? 0);
    const andando = p > RUTA[0] && p < RUTA[1];
    camion.current.position.x = camionX(p);
    camion.current.position.z = camionZ(p);
    camion.current.position.y = andando ? Math.sin(clock.elapsedTime * 22) * 0.012 : 0;
  });
  return (
    <group ref={camion} position={[TX1, 0, 0.2]}>
      {/* Caja de carga: vidrio azul con aristas doradas, para ver cómo se llena. */}
      <mesh position={[-1.55, 1.84, 0]}>
        <boxGeometry args={[3.4, 2.5, 2.1]} />
        <meshStandardMaterial color="#3d6aa3" transparent opacity={0.16} roughness={0.2} depthWrite={false} />
      </mesh>
      <lineSegments position={[-1.55, 1.84, 0]} geometry={bordes}>
        <lineBasicMaterial color="#e9a62f" />
      </lineSegments>
      <mesh position={[-0.85, 0.5, 0]}><boxGeometry args={[4.9, 0.16, 1.9]} /><meshStandardMaterial color="#e9a62f" roughness={0.5} /></mesh>
      <mesh position={[0.92, 1.25, 0]}><boxGeometry args={[1.25, 1.35, 2]} /><meshStandardMaterial color="#2f5a92" roughness={0.4} metalness={0.2} /></mesh>
      <mesh position={[1.2, 1.5, 0]}><boxGeometry args={[0.72, 0.6, 2.02]} /><meshStandardMaterial color="#9fc0e6" roughness={0.1} metalness={0.6} /></mesh>
      {[[-2.5, 1.02], [-2.5, -1.02], [1.0, 1.02], [1.0, -1.02]].map(([x, z]) => (
        <mesh key={`${x}${z}`} position={[x, 0.36, z]} rotation={[H, 0, 0]}>
          <cylinderGeometry args={[0.36, 0.36, 0.26, 24]} />
          <meshStandardMaterial color="#070d17" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Camara({ progreso, quieto, vertical }: Props & { vertical: boolean }) {
  useFrame(({ camera, pointer }) => {
    const p = quieto ? 0.3 : (progreso.current ?? 0);
    // Del departamento al camión, viaja con el camión y termina en el departamento nuevo.
    let foco = THREE.MathUtils.lerp(AX + 0.6, AX + 3.6, suave(tramo(p, 0.08, 0.4)));
    foco += avance(p) * (VIAJE + 2.2);
    foco = THREE.MathUtils.lerp(foco, AX + VIAJE + 1.2, suave(tramo(p, 0.74, 0.95)));
    const dist = vertical ? 21 : 13.5;
    camera.position.x += (foco + pointer.x * 0.6 - camera.position.x) * 0.08;
    camera.position.y += ((vertical ? 7 : 5) + pointer.y * 0.3 - camera.position.y) * 0.08;
    camera.position.z += (dist - camera.position.z) * 0.08;
    camera.lookAt(camera.position.x, vertical ? 2.6 : 0.7, 0);
  });
  return null;
}

export default function Mudanza3D({ progreso, quieto }: Props) {
  const caja = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [vertical, setVertical] = useState(false);

  useEffect(() => {
    if (!caja.current) return;
    const medir = () => setVertical(window.innerWidth < 768);
    medir();
    window.addEventListener("resize", medir);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "200px" });
    io.observe(caja.current);
    return () => { io.disconnect(); window.removeEventListener("resize", medir); };
  }, []);

  return (
    <div ref={caja} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.6]}
        frameloop={visible ? "always" : "never"}
        camera={{ fov: 36, near: 0.1, far: 120, position: [AX, 5, 13.5] }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#0b1728"]} />
        <fog attach="fog" args={["#0b1728", 24, 60]} />
        <ambientLight intensity={0.85} color="#dfe8f5" />
        <directionalLight position={[4, 9, 7]} intensity={2.1} color="#fff3df" />
        <directionalLight position={[-6, 3, -4]} intensity={0.6} color="#7ea6dc" />
        {/* Origen: dormitorio a la izquierda. Destino: living amplio a la izquierda y dormitorio a la derecha. */}
        <Depto x={AX} piso="#b98b5e" pared="#e9e4da" tabique={{ x: -0.35, largo: 1.8 }} ventanas={[-1.9, 1.9]} />
        <Depto x={AX + VIAJE} piso="#8e9aa8" pared="#f3efe6" tabique={{ x: 0.55, largo: 2.9 }} ventanas={[-1.6]} />
        <Piezas progreso={progreso} quieto={quieto} />
        <Suspense fallback={null}>
          <Equipo progreso={progreso} quieto={quieto} />
        </Suspense>
        <Camion progreso={progreso} quieto={quieto} />
        <Camara progreso={progreso} quieto={quieto} vertical={vertical} />
        <mesh rotation={[-H, 0, 0]} position={[10, -0.11, 0]}>
          <planeGeometry args={[140, 50]} />
          <meshStandardMaterial color="#10203a" roughness={1} />
        </mesh>
        <gridHelper args={[140, 140, "#1d3557", "#172b47"]} position={[10, -0.1, 0]} />
      </Canvas>
    </div>
  );
}
