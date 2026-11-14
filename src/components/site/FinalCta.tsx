import { CALENDLY_URL } from "@/lib/site";
import { CtaLink } from "./Buttons";
import SampleForm from "./SampleForm";
import { container } from "./Section";

export default function FinalCta({ title = "Send us one episode. We'll show you what it can become." }: { title?: string }) {
  return (
    <section id="sample" className="scroll-mt-20 border-t border-white/10 py-20 sm:py-28">
      <div className={`${container} grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Work with us</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Book a call, or send us a link and we'll cut you a free sample.
          </p>
          <CtaLink href={CALENDLY_URL} className="mt-8">
            Book a call
          </CtaLink>
        </div>
        <SampleForm />
      </div>
    </section>
  );
}
