import { INTERESTS } from "@/lib/content";
import PixelSkull from "./PixelSkull";
import Reveal from "./Reveal";

export default function OffTheClock() {
  return (
    <section id="offclock" className="gutter border-t-3 border-ink bg-yellow py-[130px] text-ink">
      <div className="mx-auto max-w-[1160px]">
        <p className="label text-red">06 · Off the clock</p>
        <h2 className="section-title mt-[18px]">When I&apos;m not coding</h2>
        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {INTERESTS.map((i) => (
            <Reveal key={i.v} duration={0.7} className="flex">
              <div
                className="flex-1 rounded-[26px] border-3 border-ink px-[26px] py-7 shadow-h8 transition-[rotate,translate,scale] duration-400 ease-spring hover:-translate-y-2 hover:scale-[1.02] hover:rotate-0!"
                style={{ background: i.bg, color: i.fg, rotate: `${i.rot}deg` }}
              >
                {i.icon === "skull" ? (
                  <PixelSkull px={5} color="#1B1512" />
                ) : (
                  <div className="flex h-[60px] items-center text-[46px] leading-none" aria-hidden="true">
                    {i.icon}
                  </div>
                )}
                <h3 className="mt-5 font-display text-[28px] leading-[1.05] font-normal">{i.v}</h3>
                <p className="mt-2.5 text-[16.5px] leading-[1.55] font-medium">{i.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
