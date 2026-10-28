import { EXPERIENCE } from "@/lib/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="gutter border-t-3 border-ink bg-cream py-[130px] text-ink">
      <div className="mx-auto max-w-[1160px]">
        <p className="label text-red">04 · Experience</p>
        <h2 className="section-title mt-[18px]">Where I&apos;ve worked</h2>
        <Reveal className="mt-14">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-[50px] gap-y-[26px] rounded-[28px] border-3 border-ink bg-yellow px-[30px] py-[34px] shadow-h8">
            <div>
              <span className="inline-block -rotate-3 rounded-full border-[2.5px] border-ink bg-red px-3 py-1.5 font-mono text-[11px] tracking-[.1em] text-cream uppercase">
                {EXPERIENCE.tag}
              </span>
              <h3 className="mt-5 font-display text-[clamp(26px,3vw,36px)] leading-[1.05] font-normal">{EXPERIENCE.org}</h3>
              <p className="mt-2.5 font-semibold">{EXPERIENCE.role}</p>
            </div>
            <ul className="grid gap-3.5">
              {EXPERIENCE.bullets.map((b) => (
                <li key={b} className="grid grid-cols-[22px_minmax(0,1fr)] gap-2.5 text-[16.5px] leading-[1.55] font-medium">
                  <span className="font-bold text-red" aria-hidden="true">✦</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
