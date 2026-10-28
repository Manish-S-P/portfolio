import { SKILLS } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="gutter border-t-3 border-ink py-[130px]">
      <div className="mx-auto max-w-[1160px]">
        <p className="label text-yellow">05 · Skills</p>
        <h2 className="section-title mt-[18px] text-yellow">What I bring aboard</h2>
        <div className="mt-[52px] grid gap-7">
          {SKILLS.map((g) => (
            <div key={g.k} className="grid grid-cols-[minmax(0,150px)_minmax(0,1fr)] items-start gap-[18px]">
              <span className="label pt-3 tracking-[.14em] text-yellow">{g.k}</span>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-3 border-ink bg-cream px-[18px] py-2.5 text-base font-bold text-ink shadow-h4 transition-[rotate,scale,background-color] duration-300 ease-[cubic-bezier(.3,1.6,.5,1)] hover:-rotate-6 hover:scale-[1.08] hover:bg-yellow"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
