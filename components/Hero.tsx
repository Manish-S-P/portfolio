"use client";

import { useState } from "react";
import { RESUME } from "@/lib/content";
import { INTRO_DELAY, introPlayed } from "@/lib/intro";
import { scrollToId } from "@/lib/scroll";
import Sticker from "./Sticker";
import Typewriter from "./Typewriter";

const pill =
  "rounded-full border-3 border-ink px-[26px] py-4 text-base font-bold text-ink shadow-h5 transition-[translate,rotate,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-h8 active:translate-y-[3px] active:shadow-h2";

export default function Hero() {
  // Entrance timings assume the loader is covering the page. Captured once so
  // re-renders don't restart the animations.
  const [base] = useState(() => (introPlayed() ? 0 : INTRO_DELAY));
  const [top, setTop] = useState<"card" | "badge" | null>(null);
  const delay = (s: number) => Math.max(0, base + s - INTRO_DELAY);
  const at = (s: number, dur = 0.8) => ({
    animationDelay: `${delay(s)}s`,
    animationDuration: `${dur}s`,
  });

  return (
    <section
      id="top"
      className="gutter relative flex min-h-[max(100vh,680px)] flex-col justify-center overflow-hidden pt-[130px] pb-20"
    >
      <p className="label mb-[18px] animate-up text-yellow" style={at(2.8, 0.7)}>
        Software engineer · Bengaluru
      </p>
      <h1
        className="relative z-[6] animate-up font-display text-[clamp(84px,19vw,300px)] leading-[.86] font-normal tracking-[.01em] text-yellow"
        style={{
          ...at(2.85, 0.9),
          WebkitTextStroke: "clamp(3px,.5vw,7px) #1B1512",
          paintOrder: "stroke fill",
          textShadow: "clamp(4px,.7vw,10px) clamp(4px,.7vw,10px) 0 #1B1512",
        }}
      >
        MANISH
        <br />S P<span className="text-cream">.</span>
      </h1>
      <p className="mt-[30px] animate-up text-[clamp(24px,3vw,40px)] leading-[1.2] font-semibold" style={at(3)}>
        <Typewriter />
      </p>
      <div className="mt-9 flex animate-up flex-wrap gap-3.5" style={at(3.1)}>
        <button type="button" onClick={() => scrollToId("projects")} className={`${pill} bg-yellow hover:-rotate-2`}>
          See my work →
        </button>
        <a href={RESUME} download="ManishSP_Resume.pdf" className={`${pill} bg-cream hover:rotate-2`}>
          Résumé ↓
        </a>
      </div>

      <Sticker
        className="top-[max(11%,96px)] right-[3%]"
        onTop={top === "card"}
        onGrab={() => setTop("card")}
        delay={delay(3.3)}
      >
        <div className="w-[clamp(120px,13vw,230px)] rotate-6 animate-float rounded-2xl border-3 border-ink bg-cream px-[9px] pt-[9px] pb-3 shadow-h6">
          <div
            className="aspect-video rounded-[9px] border-[2.5px] border-ink bg-cover bg-center [image-rendering:pixelated]"
            style={{ backgroundImage: "url('/ocean-pixel.png')" }}
          />
          <div className="mx-0.5 mt-2 font-mono text-[10px] tracking-[.12em] text-ink uppercase">
            Grand Line · wish you were here
          </div>
        </div>
      </Sticker>
      <Sticker
        className="top-[46%] right-[20%]"
        onTop={top === "badge"}
        onGrab={() => setTop("badge")}
        delay={delay(3.45)}
      >
        <div className="flex size-[132px] -rotate-10 flex-col items-center justify-center gap-1 rounded-full border-3 border-ink bg-yellow text-center text-ink shadow-h6">
          <span className="size-2.5 rounded-full bg-red" />
          <span className="font-display text-[19px] leading-none">
            READY
            <br />
            TO WORK
          </span>
        </div>
      </Sticker>
    </section>
  );
}
