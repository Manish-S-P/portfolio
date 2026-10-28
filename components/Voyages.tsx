"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ROUTE } from "@/lib/content";
import { useMediaQuery } from "@/lib/useMediaQuery";

// The pin is CSS-only (see the motion-safe:min-[700px] classes); this mirrors it for JS.
const PIN_QUERY = "(min-width: 700px) and (prefers-reduced-motion: no-preference)";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// Scroll progress -> ship position along the stops, as a float 0..n.
// Each segment holds still for its first and last 20% and smoothsteps in the middle.
function toPos(p: number, n: number) {
  if (p >= 0.999) return n;
  const seg = Math.min(n - 1e-6, p * n);
  const k = Math.floor(seg);
  let e = clamp01((seg - k - 0.2) / 0.6);
  e = e * e * (3 - 2 * e);
  return k + e;
}

const SEGMENTS = ROUTE.length;

export default function Voyages() {
  const secRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const stops = useRef<number[]>([]);
  const pinned = useMediaQuery(PIN_QUERY);

  const { scrollYProgress } = useScroll({ target: secRef, offset: ["start start", "end end"] });
  const pos = useTransform(scrollYProgress, (p) => toPos(p, SEGMENTS));
  const hint = useTransform(scrollYProgress, (p) => (p > 0.97 ? 0 : 0.75));
  const shipX = useMotionValue(0);
  const trailW = useTransform(shipX, (v) => Math.max(0, v));

  const place = () => {
    const s = stops.current;
    if (s.length < 2) return;
    const v = pos.get();
    const k = Math.min(Math.floor(v), s.length - 2);
    shipX.set(Math.round(s[k] + (s[k + 1] - s[k]) * (v - k)));
  };
  useMotionValueEvent(pos, "change", place);

  useEffect(() => {
    const grid = gridRef.current;
    if (!pinned || !grid) return;
    const measure = () => {
      const cards = Array.from(grid.children) as HTMLElement[];
      const s = [cards[0].offsetLeft - 34];
      for (let i = 0; i < cards.length - 1; i++) {
        s.push((cards[i].offsetLeft + cards[i].offsetWidth + cards[i + 1].offsetLeft) / 2);
      }
      const last = cards[cards.length - 1];
      s.push(last.offsetLeft + last.offsetWidth + 34);
      stops.current = s;
      place();
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
    // place only reads refs and motion values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinned]);

  return (
    <section id="journey" ref={secRef} className="relative border-t-3 border-ink motion-safe:min-[700px]:h-[300vh]">
      <div className="gutter top-0 flex min-h-screen flex-col justify-start pt-24 pb-[60px] motion-safe:min-[700px]:sticky">
        <div className="mx-auto w-full max-w-[1160px]">
          <p className="label text-yellow">02 · Journey</p>
          <h2 className="section-title mt-[18px] text-yellow">Voyages so far</h2>
          <div className="relative mt-9 py-5">
            <div className="hidden motion-safe:min-[700px]:block" aria-hidden="true">
              <span className="absolute inset-x-0 top-1/2 border-t-3 border-dashed border-cream/50" />
              <motion.span
                className="absolute top-[calc(50%-1px)] left-0 h-[5px] rounded-[5px] bg-yellow"
                style={{ width: trailW }}
              />
              <motion.div
                className="absolute top-[calc(50%-38px)] left-0 z-[1] -ml-[26px] h-11 w-[52px]"
                style={{ x: shipX }}
              >
                <Ship />
              </motion.div>
            </div>
            <div
              ref={gridRef}
              className="relative z-[2] grid grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-[clamp(28px,4.5vw,80px)] min-[700px]:grid-cols-4"
            >
              {ROUTE.map((r, i) => (
                <VoyageCard key={r.n} r={r} i={i} pos={pos} pinned={pinned} />
              ))}
            </div>
          </div>
        </div>
        <motion.span
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-mono text-[11px] tracking-[.14em] whitespace-nowrap text-cream uppercase transition-opacity duration-300 motion-safe:min-[700px]:block"
          style={{ opacity: hint }}
        >
          Keep scrolling to sail ↓
        </motion.span>
      </div>
    </section>
  );
}

function VoyageCard({
  r,
  i,
  pos,
  pinned,
}: {
  r: (typeof ROUTE)[number];
  i: number;
  pos: MotionValue<number>;
  pinned: boolean;
}) {
  // Cream #FFF3D6 -> yellow #FFD23F as the ship crosses this card.
  const bg = useTransform(pos, (v) => {
    const t = clamp01(v - i);
    return `rgb(255,${Math.round(243 - 33 * t)},${Math.round(214 - 151 * t)})`;
  });
  return (
    <motion.div
      className={`rounded-[22px] border-3 border-ink bg-yellow px-[22px] pt-6 pb-[26px] text-ink shadow-h6 transition-[rotate,translate] duration-[350ms] ease-spring hover:-translate-y-1.5 hover:rotate-0 ${
        i % 2 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"
      }`}
      style={pinned ? { backgroundColor: bg } : undefined}
    >
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full border-3 border-ink bg-red font-display text-base text-yellow">
          {r.n}
        </span>
        <span className="font-mono text-[11px] tracking-[.12em] uppercase">{r.when}</span>
      </div>
      <div className="mt-[22px] font-display text-[21px] leading-[1.1]">{r.k}</div>
      <div className="mt-2 text-base font-medium">{r.v}</div>
    </motion.div>
  );
}

function Ship() {
  return (
    <div className="relative h-11 w-[52px] animate-rock">
      <span className="absolute top-0 left-6 h-8 w-[3px] bg-ink" />
      <span className="absolute top-0 left-[27px] h-[7px] w-2.5 bg-yellow [clip-path:polygon(0_0,100%_50%,0_100%)]" />
      <span className="absolute top-[7px] left-2.5 h-[21px] w-[13px] bg-cream [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      <span className="absolute top-2 left-7 h-5 w-[17px] rounded-[0_60%_0_0] border-[2.5px] border-ink bg-cream" />
      <span className="absolute bottom-1 left-0.5 h-3 w-12 rounded-[0_0_20px_20px] bg-ink" />
      <span className="absolute bottom-[7px] left-[5px] h-1.5 w-[42px] rounded-[0_0_14px_14px] bg-yellow" />
    </div>
  );
}
