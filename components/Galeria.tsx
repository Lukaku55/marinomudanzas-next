"use client";
import { useRef, useState } from "react";
import { X } from "@phosphor-icons/react";
import Image from "next/image";
import type { Foto } from "@/content/site";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Reveal from "./Reveal";

/* Seis fotos, seis celdas: dos grandes y cuatro de apoyo. */
const CELDAS = [
  "col-span-2 md:col-span-4 md:row-span-2 aspect-[4/3] md:aspect-auto",
  "md:col-span-2 aspect-square md:aspect-[4/3]",
  "md:col-span-2 aspect-square md:aspect-[4/3]",
  "md:col-span-2 aspect-square md:aspect-[4/3]",
  "md:col-span-2 aspect-square md:aspect-[4/3]",
  "col-span-2 md:col-span-2 aspect-[16/10] md:aspect-[4/3]",
];

export default function Galeria({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const GALERIA = t.galeria;
  const dialogo = useRef<HTMLDialogElement>(null);
  const [abierta, setAbierta] = useState<Foto | null>(null);

  const abrir = (f: Foto) => { setAbierta(f); dialogo.current?.showModal(); };
  const cerrar = () => dialogo.current?.close();

  return (
    <section id="trabajos" className="bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)]">{GALERIA.titulo}</h2>
        </Reveal>
        <Reveal demora={0.1}>
          <p className="mt-6 max-w-[54ch] text-[1.1rem] leading-relaxed text-ink-soft">{GALERIA.bajada}</p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
          {GALERIA.fotos.map((f, i) => (
            <Reveal as="li" modo="cortina" key={f.src} demora={0.05 * i} className={`overflow-hidden rounded-[4px] bg-navy ${CELDAS[i]}`}>
              <button type="button" onClick={() => abrir(f)} className="group relative block h-full w-full cursor-zoom-in" aria-label={`${t.ui.ampliarFoto}: ${f.alt}`}>
                <Image src={f.src} alt={f.alt} fill sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"} className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogo}
        onClose={() => setAbierta(null)}
        onClick={(e) => e.target === dialogo.current && cerrar()}
        className="on-dark m-auto max-h-[92dvh] max-w-[min(92vw,1100px)] overflow-hidden rounded-[4px] bg-navy-deep p-0 backdrop:bg-[rgb(11_23_40/0.86)]"
      >
        {abierta && (
          <figure className="relative">
            <Image src={abierta.src} alt={abierta.alt} width={abierta.ancho} height={abierta.alto} sizes="(min-width: 1100px) 1100px, 92vw" className="max-h-[82dvh] w-full object-contain" />
            <figcaption className="px-5 py-4 pr-16 text-sm text-white/80">{abierta.alt}</figcaption>
            <button type="button" onClick={cerrar} aria-label={t.ui.cerrarFoto} className="absolute right-2 top-2 grid h-12 w-12 place-items-center rounded-full bg-navy-deep/80 text-white">
              <X size={24} />
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
