import ScrollReveal from "./ScrollReveal";

export default function SectionHead({
  flowTag,
  heading,
  lead,
}: {
  flowTag: string;
  heading: string;
  lead?: string;
}) {
  return (
    <ScrollReveal className="mb-12">
      <div className="flow-tag">{flowTag}</div>
      <h2 className="font-heading text-[clamp(30px,4.6vw,44px)] tracking-[-0.018em] text-text">
        {heading}
      </h2>
      {lead && <p className="mt-3 max-w-[560px] text-base leading-[1.6] text-muted">{lead}</p>}
    </ScrollReveal>
  );
}
