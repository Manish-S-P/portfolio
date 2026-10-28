import Image from "next/image";
import type { Project } from "@/lib/content";

// Screenshot card that trails the cursor over the project cards. Mouse-only.
export default function HoverPreview({
  project,
  visible,
  x,
  y,
}: {
  project: Project;
  visible: boolean;
  x: number;
  y: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden w-[290px] transition-[opacity,transform] duration-200 [@media(hover:hover)]:block"
      style={{
        transform: `translate3d(${x + 26}px,${y - 110}px,0) rotate(4deg)`,
        opacity: visible ? 1 : 0,
        transitionDuration: "200ms, 100ms",
        transitionTimingFunction: "ease, linear",
      }}
    >
      <div className="rounded-[18px] border-3 border-ink bg-cream p-2.5 shadow-h6">
        <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-[10px] border-[2.5px] border-ink bg-[repeating-linear-gradient(135deg,rgba(27,21,18,.12)_0_2px,transparent_2px_10px)] p-3 text-center">
          {project.image ? (
            <Image src={project.image} alt="" fill sizes="290px" className="object-cover" />
          ) : (
            <span className="font-mono text-[10.5px] tracking-[.12em] text-ink uppercase">{project.shot}</span>
          )}
        </div>
      </div>
    </div>
  );
}
