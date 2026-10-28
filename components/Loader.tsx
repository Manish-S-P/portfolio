"use client";

import { useEffect, useState } from "react";
import { markIntroPlayed } from "@/lib/intro";

const LETTERS = "MANISH S P".split("");

export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    markIntroPlayed();
    const t = setTimeout(() => setDone(true), 2900);
    return () => clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[99] animate-gone motion-reduce:hidden">
      <div className="absolute inset-0 flex animate-lift flex-col items-center justify-center gap-7 bg-yellow text-red">
        <div className="flex font-display text-[clamp(54px,13vw,180px)] leading-[.9] tracking-[-.01em]">
          {LETTERS.map((ch, i) => (
            <span
              key={i}
              className="inline-block min-w-[.25em] animate-pop"
              style={{ animationDelay: `${(0.1 + i * 0.07).toFixed(2)}s` }}
            >
              {ch === " " ? " " : ch}
            </span>
          ))}
        </div>
        <div className="h-[14px] w-[min(280px,60vw)] overflow-hidden rounded-full border-3 border-ink bg-cream">
          <div className="h-full origin-left animate-bar bg-red" />
        </div>
        <span className="label text-ink">Raising the sails</span>
      </div>
    </div>
  );
}
