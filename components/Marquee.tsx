import { MARQUEE } from "@/lib/content";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative z-[2] -mx-5 -rotate-[1.6deg] overflow-hidden border-y-3 border-ink bg-yellow text-ink">
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {items.map((m, i) => (
          <span
            key={i}
            className="flex items-center gap-[26px] px-[13px] py-4 font-display text-[clamp(22px,3vw,34px)] whitespace-nowrap"
          >
            {m}
            <span className="text-red">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
