import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import SectionHead from "./SectionHead";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <SectionHead
        flowTag="Process 03 — Outputs"
        heading="Selected Projects"
        lead="University coursework turned into working, ICT-driven systems."
      />

      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          project={project}
          number={String(i + 1).padStart(2, "0")}
          delay={i * 0.05}
        />
      ))}
    </section>
  );
}
