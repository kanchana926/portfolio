import { education } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import SectionHead from "./SectionHead";
import Certificates from "./Certificates";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <SectionHead flowTag={education.flowTag} heading={education.heading} lead={education.lead} />

      <ScrollReveal>
        {education.timeline.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-1 gap-3 border-t border-line-soft py-6 first:border-t-0 sm:grid-cols-[130px_1fr] sm:gap-[22px]"
          >
            <div className="pt-[3px] font-mono text-xs text-accent">{item.period}</div>
            <div>
              <div className="mb-1.5 font-display text-[19px] text-text">{item.title}</div>
              <div className="mb-2.5 text-sm text-muted">{item.place}</div>
              <ul className="list-disc space-y-1.5 pl-4 text-sm text-body marker:text-line">
                {item.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </ScrollReveal>

      <Certificates />
    </section>
  );
}
