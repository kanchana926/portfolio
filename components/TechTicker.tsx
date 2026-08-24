import { tickerItems } from "@/data/portfolio";

export default function TechTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div
      className="relative left-1/2 z-[2] w-screen -translate-x-1/2 overflow-hidden border-y py-4"
      style={{ borderColor: "rgba(145,193,224,0.06)", background: "rgba(14,35,49,0.22)" }}
    >
      <div className="animate-ticker flex w-max motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2.5 whitespace-nowrap px-7 font-mono text-[13px] uppercase tracking-[0.1em] text-muted"
          >
            <span style={{ color: "#38a3a5", fontSize: "8px" }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
