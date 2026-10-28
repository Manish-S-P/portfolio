import { CONTACT_LINKS, EMAIL } from "@/lib/content";
import PixelSkull from "./PixelSkull";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="gutter relative overflow-hidden border-t-3 border-ink pt-[150px] pb-[120px] text-center">
      <p className="label text-yellow">07 · Contact</p>
      <Reveal duration={0.9}>
        <h2 className="mx-auto mt-6 font-display text-[clamp(56px,11vw,170px)] leading-[.86] font-normal tracking-[-.02em] text-yellow">
          LET&apos;S WORK
          <br />
          TOGETHER
        </h2>
      </Reveal>
      <p className="mx-auto mt-7 max-w-[28em] text-[19px] font-medium">
        Open to full-stack, frontend, backend and forward deployed engineering roles.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="mt-9 inline-block max-w-full rounded-full border-3 border-ink bg-yellow px-8 py-5 text-[clamp(18px,2.4vw,28px)] font-bold break-words text-ink shadow-h7 transition-[translate,rotate,box-shadow] duration-[250ms] ease-spring hover:-translate-y-1 hover:-rotate-2 hover:shadow-h11"
      >
        {EMAIL}
      </a>
      <div className="mt-[30px] flex flex-wrap justify-center gap-3">
        {CONTACT_LINKS.map((l) => (
          <a
            key={l.k}
            href={l.href}
            target="_blank"
            rel="noopener"
            className="rounded-full border-3 border-ink bg-cream px-[22px] py-3 text-[15px] font-bold text-ink shadow-h5 transition-[translate,rotate] duration-[250ms] ease-spring hover:-translate-y-[3px] hover:rotate-3"
          >
            {l.k} ↗
          </a>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-[60px] left-[6%] flex size-[70px] animate-spin-slow items-center justify-center rounded-full border-3 border-ink bg-yellow"
      >
        <PixelSkull px={3} color="#1B1512" />
      </div>
    </section>
  );
}
