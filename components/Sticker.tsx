"use client";

import { useState } from "react";

// A draggable sticker. Remembers its own offset; the parent decides stacking order.
export default function Sticker({
  className,
  onTop,
  onGrab,
  delay,
  children,
}: {
  className: string;
  onTop: boolean;
  onGrab: () => void;
  delay: number;
  children: React.ReactNode;
}) {
  const [off, setOff] = useState<[number, number]>([0, 0]);

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    onGrab();
    const sx = e.clientX;
    const sy = e.clientY;
    const [ox, oy] = off;
    const move = (ev: PointerEvent) => setOff([ox + ev.clientX - sx, oy + ev.clientY - sy]);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };

  return (
    <div
      onPointerDown={onPointerDown}
      className={`absolute animate-stick touch-none select-none ${className}`}
      style={{ zIndex: onTop ? 5 : 3, translate: `${off[0]}px ${off[1]}px`, animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
