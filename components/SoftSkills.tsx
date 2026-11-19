import { softSkills } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8">
        <ScrollReveal>
          <span className="mb-3 block font-mono text-xs uppercase tracking-[0.14em] text-[#5aa1d1]">
            Interpersonal — Competencies
          </span>
          <h2 className="font-heading text-3xl tracking-[-0.02em] text-text md:text-4xl">
            Soft Skills
          </h2>
          <p className="mt-3 max-w-[600px] text-[15px] leading-[1.6] text-body">
            Core interpersonal strengths developed through team leadership, event organization, and collaborative projects.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 0.05}
              className="group glass rounded-2xl p-[26px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(87,204,153,0.22)] hover:shadow-floating"
            >
              <span
                className="mb-3 inline-block rounded-[5px] px-[9px] py-1 font-mono text-[11px] tracking-[0.08em] text-teal"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {item.icon}
              </span>
              <h3 className="font-heading text-xl tracking-[-0.015em] text-text">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-body">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
