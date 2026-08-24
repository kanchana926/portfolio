import { leadership } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import SectionHead from "./SectionHead";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24">
      <SectionHead flowTag="Process 04 — Beyond the Desk" heading="Leadership & Creative Work" />

      <div className="grid gap-[18px] md:grid-cols-3">
        {leadership.map((item, i) => (
          <ScrollReveal
            key={item.title}
            delay={i * 0.08}
            className="glass rounded-xl p-[22px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(56,163,165,0.3)] hover:shadow-teal-glow"
          >
            <span className="mb-2.5 block font-mono text-[11px] tracking-[0.1em] text-accent">{item.icon}</span>
            <h4 className="mb-1.5 font-heading text-base text-text">{item.title}</h4>
            <p className="text-[13.5px] text-muted">{item.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
