import { FACTS } from "@/lib/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="gutter -mt-[30px] bg-yellow pt-[140px] pb-[130px] text-ink">
      <div className="mx-auto max-w-[1160px]">
        <p className="label text-red">01 · About</p>
        <Reveal>
          <h2 className="mt-[22px] max-w-[17em] font-display text-[clamp(30px,4.6vw,64px)] leading-[1.02] font-normal tracking-[-.01em] text-balance">
            I&apos;m <span className="rounded-[.18em] bg-red px-[.18em] text-yellow">Manish</span>, a computer science
            student at{" "}
            <span className="text-red underline decoration-[.08em] underline-offset-[.12em]">
              Dayananda Sagar University
            </span>
            . I build across the full stack and I&apos;m currently learning AI and LLMs.
          </h2>
        </Reveal>
        <div className="mt-[46px] flex flex-wrap gap-3">
          {FACTS.map((f) => (
            <Reveal key={f.k} duration={0.6}>
              <div className="flex items-baseline gap-2.5 rounded-full border-3 border-ink bg-cream px-5 py-3.5 shadow-h5 transition-[rotate,scale] duration-300 ease-spring hover:-rotate-3 hover:scale-[1.04]">
                <span className="font-mono text-[11px] tracking-[.12em] text-red uppercase">{f.k}</span>
                <span className="text-lg font-bold">{f.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
