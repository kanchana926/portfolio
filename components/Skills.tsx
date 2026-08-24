import { skills } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <SectionHead
        flowTag="Process 02 — Skills"
        heading="What I work with"
        lead="The tools and methods behind requirements gathering, system design, and delivery."
      />

      <div className="grid gap-[18px] md:grid-cols-2">
        {skills.map((group, i) => (
          <ScrollReveal
            key={group.title}
            delay={i * 0.06}
            className="group glass rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(87,204,153,0.25)] hover:shadow-accent-glow"
          >
            <h3 className="mb-1.5 font-heading text-[17px] text-text">{group.title}</h3>
            <p className="mb-4 text-[13.5px] text-muted">{group.description}</p>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border px-[11px] py-1.5 font-mono text-xs text-[#c8e0f0] transition-colors duration-200 hover:border-[rgba(56,163,165,0.3)] hover:bg-[rgba(56,163,165,0.15)]"
                  style={{ background: "rgba(34,87,122,0.15)", borderColor: "rgba(90,161,209,0.12)" }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
