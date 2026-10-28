"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV } from "@/lib/content";
import { scrollToId } from "@/lib/scroll";

export default function NavPill() {
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - last;
        if (Math.abs(dy) < 5) return;
        last = y;
        setHidden(dy > 0 && y > 140);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Show the pill again after navigating between pages.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setHidden(false);
  }

  const go = (id: string) => {
    if (pathname === "/") {
      if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      else scrollToId(id);
    } else {
      router.push(id === "top" ? "/" : `/#${id}`);
    }
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <div
        className="pointer-events-auto flex max-w-full items-center gap-0.5 rounded-full border-3 border-ink bg-cream p-[5px] text-ink shadow-h5 transition-transform duration-[450ms] ease-[cubic-bezier(.3,1.3,.5,1)]"
        style={{ transform: hidden ? "translateY(-170%)" : "none" }}
      >
        <button
          type="button"
          onClick={() => go("top")}
          className="group relative flex flex-none items-center gap-2 rounded-full bg-red py-[7px] pr-[14px] pl-[10px] text-cream"
        >
          <span className="size-2 rounded-full bg-yellow" />
          <span className="font-display text-sm whitespace-nowrap">Manish S P</span>
          <span className="pointer-events-none absolute top-[calc(100%+12px)] left-0 -translate-y-1.5 -rotate-3 rounded-full border-[2.5px] border-ink bg-yellow px-3 py-1.5 font-mono text-[10.5px] tracking-[.1em] whitespace-nowrap text-ink uppercase opacity-0 transition-[opacity,translate] duration-300 ease-spring group-hover:translate-y-0 group-hover:opacity-100">
            Open to work ✦
          </span>
        </button>
        <nav className="flex min-w-0" aria-label="Sections">
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => go(n.id)}
              className="flex-none rounded-full px-[clamp(7px,1.1vw,13px)] py-2 text-[clamp(12px,1.3vw,14px)] font-semibold whitespace-nowrap transition-[background-color,rotate] duration-[250ms] ease-spring hover:-rotate-4 hover:bg-yellow"
            >
              {n.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
