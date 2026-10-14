import Link from "next/link";
import { zonasCaba, zonasGba } from "@/content/zonas";
import Reveal from "./Reveal";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";

function Grupo({ titulo, zonas, prefijo, lang }: { titulo: string; zonas: typeof zonasCaba; prefijo: string; lang?: string }) {
  return (
    <div>
      <h3 className="display text-[1.5rem]">{titulo}</h3>
      <ul className="mt-5 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {zonas.map((z) => (
          <li key={z.slug} className="border-t border-line">
            <Link href={`/blog/${z.slug}`} hrefLang={lang} className="group block py-4">
              <span className="font-semibold text-navy group-hover:underline">{prefijo} {z.name}</span>
              <span className="mt-1 block text-[0.95rem] leading-relaxed text-ink-soft">{z.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Zonas({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const lang = idioma === "en" ? "es" : undefined;
  return (
    <section id="zonas" className="bg-surface">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)]">{t.ui.zonasTitulo}</h2>
        </Reveal>
        <Reveal demora={0.1}>
          <p className="mt-6 max-w-[60ch] text-[1.1rem] leading-relaxed text-ink-soft">
            {t.ui.zonasTexto}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-14">
          <Grupo titulo={t.ui.zonasCaba} zonas={t.zonas(zonasCaba)} prefijo={t.ui.mudanzasEn} lang={lang} />
          <Grupo titulo={t.ui.zonasGba} zonas={t.zonas(zonasGba)} prefijo={t.ui.mudanzasEn} lang={lang} />
        </div>
      </div>
    </section>
  );
}
