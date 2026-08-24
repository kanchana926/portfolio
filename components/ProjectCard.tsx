import Image from "next/image";
import type { Project } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function ProjectCard({
  project,
  number,
  delay = 0,
}: {
  project: Project;
  number: string;
  delay?: number;
}) {
  return (
    <ScrollReveal
      delay={delay}
      className="group glass mb-[22px] rounded-2xl p-[26px] transition-all duration-300 hover:-translate-y-[5px] hover:border-[rgba(87,204,153,0.22)] hover:shadow-floating md:p-[30px]"
    >
      <div className="flex flex-col gap-6">
        <div
          className="overflow-hidden rounded-xl shadow-floating"
          style={{ background: "#0e2331", border: "1px solid rgba(145,193,224,0.08)" }}
        >
          <div
            className="flex items-center gap-3 border-b px-4 py-[11px]"
            style={{ background: "rgba(21,53,74,0.5)", borderColor: "rgba(145,193,224,0.08)" }}
          >
            <div className="flex shrink-0 gap-1.5">
              <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#c26a5f" }} />
              <span className="h-[9px] w-[9px] rounded-full opacity-85" style={{ background: "#57cc99" }} />
              <span className="h-[9px] w-[9px] rounded-full" style={{ background: "#38a3a5" }} />
            </div>
            <div
              className="mx-auto max-w-[280px] flex-1 rounded-md border px-3.5 py-[5px] text-center font-mono text-[11px] text-muted"
              style={{ background: "rgba(5,11,16,0.6)", borderColor: "rgba(145,193,224,0.08)" }}
            >
              {project.address}
            </div>
          </div>
          <div className="relative aspect-[900/502] w-full overflow-hidden">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1120px) 1064px, 100vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="mb-1.5 block font-mono text-[11px] tracking-[0.12em] text-[#5aa1d1]">
                {number}
              </span>
              <h3 className="font-heading text-2xl tracking-[-0.015em] text-text">{project.title}</h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[5px] px-[9px] py-1 font-mono text-[11px] tracking-[0.04em] text-teal"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="my-4 max-w-[680px] text-[15px] leading-[1.6] text-body">{project.description}</p>

          <div className="my-3.5 mb-[18px] flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border px-2.5 py-1 font-mono text-[11.5px] text-muted"
                style={{ borderColor: "rgba(90,161,209,0.14)" }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[13px] text-accent transition-colors hover:text-[#7dd1d3]"
            >
              ↗ View on GitHub
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
