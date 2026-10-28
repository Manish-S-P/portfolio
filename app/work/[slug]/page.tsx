import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES } from "@/lib/content";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = CASES[slug];
  return c ? { title: c.title, description: c.sub } : {};
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const c = CASES[slug];
  if (!c) notFound();
  const next = CASES[c.next];

  return (
    <main className="gutter min-h-screen bg-cream pt-[140px] pb-[100px] text-ink">
      <article className="mx-auto max-w-[860px]">
        <Link
          href="/#projects"
          className="inline-block rounded-full border-3 border-ink bg-yellow px-[18px] py-2.5 text-sm font-bold shadow-h4"
        >
          ← Back to projects
        </Link>
        <p className="mt-10 font-mono text-xs tracking-[.16em] text-red uppercase">Case study · {c.year}</p>
        <h1 className="mt-3.5 animate-up font-display text-[clamp(44px,7vw,90px)] leading-[.95] font-normal [animation-duration:.7s]">
          {c.title}
        </h1>
        <p className="mt-[22px] max-w-[30em] text-[21px] leading-normal font-medium text-pretty">{c.sub}</p>
        <div className="mt-[34px] flex flex-wrap gap-2.5">
          {c.meta.map((m) => (
            <span key={m.k} className="rounded-full border-3 border-ink bg-white px-4 py-2.5 text-[15px]">
              <span className="mr-2 font-mono text-[11px] tracking-[.1em] text-red uppercase">{m.k}</span>
              <span className="font-bold">{m.v}</span>
            </span>
          ))}
        </div>
        <div className="mt-[52px] grid gap-5">
          {c.body.map((s) => (
            <Reveal key={s.k} duration={0.7}>
              <section className="rounded-3xl border-3 border-ink bg-white p-[26px] shadow-h6">
                <h2 className="mb-2.5 font-display text-2xl font-normal text-red">{s.k}</h2>
                <p className="text-[17.5px] leading-[1.65] text-pretty">{s.v}</p>
              </section>
            </Reveal>
          ))}
        </div>
        <div className="mt-[34px] flex flex-wrap gap-3">
          {c.proofs.map((l) => (
            <a
              key={l.k}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="rounded-full border-3 border-ink bg-red px-5 py-3 text-sm font-bold text-cream shadow-h4"
            >
              {l.k} ↗
            </a>
          ))}
        </div>
        <Link
          href={`/work/${c.next}`}
          className="mt-14 flex w-full items-center justify-between gap-5 rounded-[28px] border-3 border-ink bg-yellow px-[30px] py-[26px] text-left shadow-h7 transition-[translate,rotate] duration-300 ease-spring hover:-translate-y-1 hover:-rotate-1"
        >
          <span className="font-display text-[clamp(24px,3vw,34px)]">{next.title}</span>
          <span className="font-bold whitespace-nowrap">Next project →</span>
        </Link>
      </article>
    </main>
  );
}
