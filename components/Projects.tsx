"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PROJECTS, type Project } from "@/lib/content";
import HoverPreview from "./HoverPreview";
import Reveal from "./Reveal";

export default function Projects() {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [shown, setShown] = useState<Project>(PROJECTS[0]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const x = e.clientX + 330 > window.innerWidth ? e.clientX - 330 : e.clientX;
    setMouse({ x, y: Math.max(90, Math.min(e.clientY, window.innerHeight - 120)) });
  };

  return (
    <section id="projects" className="gutter border-t-3 border-ink bg-yellow py-[130px] text-ink">
      <div className="mx-auto max-w-[1160px]">
        <p className="label text-red">03 · Projects</p>
        <h2 className="section-title mt-[18px]">My projects</h2>
        <div
          onMouseLeave={() => setHover(false)}
          className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-[26px]"
        >
          {PROJECTS.map((p) => (
            <Reveal key={p.slug} className="flex">
              <article
                onMouseEnter={() => {
                  setShown(p);
                  setHover(true);
                }}
                onMouseMove={onMove}
                onClick={() => router.push(`/work/${p.slug}`)}
                data-clickable
                className="flex flex-1 flex-col rounded-[28px] border-3 border-ink px-7 pt-[30px] pb-7 shadow-h8 transition-[translate,rotate,box-shadow] duration-[350ms] ease-bounce hover:-translate-y-2 hover:-rotate-1 hover:shadow-h14"
                style={{ background: p.bg, color: p.fg }}
              >
                <div className="flex justify-between gap-3.5 font-mono text-[11px] tracking-[.12em] uppercase">
                  <span>
                    {p.n} · {p.year}
                  </span>
                  <span>{p.crew}</span>
                </div>
                <h3 className="mt-[26px] font-display text-[clamp(30px,3.6vw,46px)] leading-none font-normal">{p.name}</h3>
                <p className="mt-3.5 flex-1 text-[17px] leading-[1.55] font-medium text-pretty">{p.blurb}</p>
                <div className="mt-[22px] flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border-2 border-current px-3 py-[5px] text-[13px] font-semibold whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-[26px] flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${p.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="rounded-full border-3 border-ink bg-yellow px-[18px] py-2.5 text-sm font-bold text-ink"
                  >
                    Case study →
                  </Link>
                  {p.proofs.map((l) => (
                    <a
                      key={l.k}
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-bold underline decoration-2 underline-offset-4"
                    >
                      {l.k} ↗
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <HoverPreview project={shown} visible={hover} x={mouse.x} y={mouse.y} />
      </div>
    </section>
  );
}
