"use client";

import { useEffect, useState } from "react";
import { ROLES } from "@/lib/content";
import { useMediaQuery } from "@/lib/useMediaQuery";

type State = { i: number; len: number; del: boolean; pause: number };

// Types at 58ms per character, holds ~1.5s, deletes 3 characters per tick.
function step(s: State): State {
  const full = ROLES[s.i];
  if (s.pause > 0) return { ...s, pause: s.pause - 1 };
  if (!s.del) return s.len < full.length ? { ...s, len: s.len + 1 } : { ...s, pause: 26, del: true };
  if (s.len > 0) return { ...s, len: Math.max(0, s.len - 3) };
  return { i: (s.i + 1) % ROLES.length, len: 0, del: false, pause: 5 };
}

export default function Typewriter() {
  const [s, setS] = useState<State>({ i: 0, len: 0, del: false, pause: 0 });
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setS(step), 58);
    return () => clearInterval(t);
  }, [reduced]);

  const word = reduced ? ROLES[0] : ROLES[s.i].slice(0, s.len);

  return (
    <>
      <span className="sr-only">I am a {ROLES.join(", ")}.</span>
      <span aria-hidden="true">
        I am a{" "}
        <span className="text-yellow underline decoration-cream decoration-4 underline-offset-[.16em]">
          {word}
        </span>
        <span className="ml-[.08em] inline-block h-[.85em] w-[.08em] animate-caret bg-yellow align-[-.08em]" />
      </span>
    </>
  );
}
