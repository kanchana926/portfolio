import { contact } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <ScrollReveal>
          <div className="flow-tag">{contact.flowTag}</div>
          <h2 className="font-heading text-[clamp(30px,5vw,46px)] leading-[1.1] text-text">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-[480px] text-muted">{contact.lead}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="flex flex-col">
          {contact.links.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-center justify-between gap-3 py-[18px] text-[15px] transition-[padding-left] duration-300 hover:pl-2 ${i > 0 ? "border-t border-line-soft" : ""}`}
            >
              <span className="shrink-0 font-mono text-[11px] tracking-[0.08em] text-muted">{link.key}</span>
              <span className="min-w-0 flex-1 break-words text-right text-text transition-colors group-hover:text-accent">
                {link.value}
              </span>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
