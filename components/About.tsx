import Image from "next/image";
import { about, socialLinks } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="py-24">
      <SectionHead flowTag={about.flowTag} heading={about.heading} />

      <div className="grid gap-9 md:grid-cols-[320px_1fr] md:items-start">
        <ScrollReveal>
          <div className="group relative mx-auto aspect-[4/5] max-w-[340px] overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)] transition-transform duration-500 md:mx-0 md:max-w-none hover:scale-[1.01]">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              fill
              sizes="(min-width: 860px) 320px, 340px"
              className="object-cover [object-position:center_18%] [filter:grayscale(0.25)_contrast(1.08)_saturate(0.95)_brightness(0.96)]"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(155deg, rgba(87,204,153,0.16), rgba(7,18,25,0.05) 45%, rgba(56,163,165,0.16) 100%)",
                mixBlendMode: "color",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 z-[2]"
              style={{ background: "linear-gradient(to top, rgba(5,11,16,0.6), transparent 40%)" }}
            />
            <div className="pointer-events-none absolute left-3.5 top-3.5 z-[3] h-[22px] w-[22px] border-l-[1.5px] border-t-[1.5px]" style={{ borderColor: "#57cc99" }} />
            <div className="pointer-events-none absolute bottom-3.5 right-3.5 z-[3] h-[22px] w-[22px] border-b-[1.5px] border-r-[1.5px]" style={{ borderColor: "#38a3a5" }} />
            <div className="absolute bottom-4 left-4 z-[3] flex items-center gap-[7px] font-mono text-[11px] tracking-[0.08em] text-text">
              <span className="animate-recPulse h-1.5 w-1.5 rounded-full" style={{ background: "#57cc99", boxShadow: "0 0 8px 2px rgba(87,204,153,0.28)" }} />
              {about.photo.tag}
            </div>
          </div>

          <div className="mt-4 flex gap-2.5 pl-1">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-accent-glow"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              aria-label="Email"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-line bg-white/[0.03] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-accent-glow"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>

          <div className="mt-5 flex gap-6 pl-1">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <b className="block font-display text-2xl text-teal">{stat.value}</b>
                <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-[18px] text-base leading-[1.7] text-body">
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <ScrollReveal delay={0.08} className="glass rounded-xl p-[22px]">
          <h4 className="mb-3.5 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">Quick Facts</h4>
          <ul className="flex flex-col gap-3">
            {about.quickFacts.map((fact) => (
              <li key={fact.label} className="flex gap-2.5 text-sm text-text">
                <b className="font-mono text-[13px] font-medium text-teal">{fact.label}</b>
                {fact.value}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.16} className="glass rounded-xl p-[22px]">
          <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
            How I work
          </span>
          <div className="flex flex-col">
            {about.howIWork.map((node, i) => (
              <div key={node.step}>
                {i > 0 && (
                  <div className="py-1.5 text-center text-sm text-line" aria-hidden="true">
                    ↓
                  </div>
                )}
                <div
                  className="flex items-center justify-between gap-2.5 rounded-md border px-3.5 py-3 font-mono text-xs"
                  style={{
                    borderColor: node.accent ? "rgba(87,204,153,0.35)" : "rgba(145,193,224,0.08)",
                    background: node.accent ? "rgba(87,204,153,0.08)" : "rgba(255,255,255,0.02)",
                  }}
                >
                  <span className="text-[10px] tracking-[0.1em] text-muted">{node.step}</span>
                  <span
                    className="font-display text-[13px]"
                    style={{ color: node.accent ? "#57cc99" : "#f4fef5" }}
                  >
                    {node.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
