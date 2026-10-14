import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { textos } from "@/content/textos";
import type { Idioma } from "@/content/idioma";
import Reveal from "./Reveal";

export default function Consejos({ idioma = "es" }: { idioma?: Idioma }) {
  const t = textos(idioma);
  const CONSEJOS = t.consejos;
  const lang = idioma === "en" ? "es" : undefined; // los artículos están en español
  const [principal, ...resto] = CONSEJOS.articulos;
  return (
    <section id="consejos" className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-8 md:py-36">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)]">{CONSEJOS.titulo}</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Link href={`/blog/${principal.slug}`} hrefLang={lang} className="on-dark group flex h-full min-h-[320px] flex-col justify-between rounded-[4px] bg-navy p-8 text-white md:p-10">
              <ArrowRight size={36} weight="light" className="self-end text-gold transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1.5" />
              <div>
                <h3 className="display text-[clamp(1.8rem,3.4vw,2.6rem)]">{principal.titulo}</h3>
                <p className="mt-3 max-w-[38ch] text-[1.05rem] leading-relaxed text-navy-soft">{principal.intro}</p>
              </div>
            </Link>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {resto.map((g, i) => (
              <Reveal as="li" key={g.slug} demora={0.06 * (i + 1)} className="grid">
                <Link href={`/blog/${g.slug}`} hrefLang={lang} className="group flex h-full flex-col rounded-[4px] border border-line bg-paper p-6 transition-colors duration-200 hover:border-navy">
                  <h3 className="display text-[1.3rem]">{g.titulo}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{g.intro}</p>
                  <span className="link-sub mt-4 inline-flex items-center gap-1.5 font-semibold text-navy">
                    {t.ui.leerGuia}
                    <ArrowRight size={16} weight="bold" className="transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="mt-8">
          <Link href="/blog" hrefLang={lang} className="link-sub font-semibold text-navy">{t.ui.verGuias}</Link>
        </p>
      </div>
    </section>
  );
}
