"use client";
import { Fragment, useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

/** Decorative gold rule + diamond used above section titles. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden className={`ornament ${className}`}>
      <i />
    </span>
  );
}

/**
 * Splits a string into words that rise into view one after another.
 * The rendered text content is identical to `text`.
 */
export function SplitWords({
  text,
  className = "",
  delay = 0,
  step = 60,
  wordClassName = "",
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
  wordClassName?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <span
              className={`inline-block ${wordClassName}`}
              style={{
                animation: `rise-in 1.1s var(--ease-out-expo) both`,
                animationDelay: `${delay + i * step}ms`,
              }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

/**
 * Counts up to the number contained in `value` when scrolled into view,
 * keeping any prefix/suffix (e.g. "+150.000", "80+", "24hs").
 * Server-rendered output is the final value.
 */
export function CountUp({ value, duration = 2.2 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const match = value.match(/^(\D*)([\d.]+)(.*)$/);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const [, prefix, num, suffix] = match;
    const target = Number(num.replace(/\./g, ""));
    const usesThousands = num.includes(".");
    const node = ref.current;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        node.textContent = `${prefix}${usesThousands ? n.toLocaleString("es-AR") : n}${suffix}`;
      },
      onComplete: () => {
        node.textContent = value;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
