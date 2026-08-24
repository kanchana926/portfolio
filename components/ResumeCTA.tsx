import { resume, resumeCta } from "@/data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function ResumeCTA() {
  return (
    <div className="mx-auto max-w-[1120px] px-7 pb-24 pt-16">
      <ScrollReveal className="glass mx-auto max-w-[560px] rounded-2xl px-8 py-12 text-center">
        <h3 className="text-[clamp(24px,3.6vw,32px)] font-heading text-text">{resumeCta.heading}</h3>
        <p className="mt-2 mb-7 text-body">{resumeCta.lead}</p>
        <a
          href={resume.href}
          download={resume.fileName}
          className="inline-flex items-center gap-2 rounded-xl px-[30px] py-[15px] font-mono text-sm font-semibold tracking-[0.04em] text-[#071219] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#80ed99] hover:shadow-accent-glow"
          style={{ background: "#57cc99" }}
        >
          Download Resume
        </a>
      </ScrollReveal>
    </div>
  );
}
