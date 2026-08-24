"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--sx", `${x}%`);
      el.style.setProperty("--sy", `${y}%`);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] transition-[background] duration-150 ease-out"
      style={{
        background:
          "radial-gradient(520px circle at var(--sx, 50%) var(--sy, 30%), rgba(56,163,165,0.08), rgba(87,204,153,0.05) 45%, transparent 65%)",
      }}
    />
  );
}
