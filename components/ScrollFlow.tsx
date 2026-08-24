"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollFlow() {
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-5 bottom-5 z-[5] hidden min-[1300px]:block"
      style={{ left: "calc(50% - 600px)" }}
    >
      <div
        className="absolute inset-y-0 w-px"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(90,161,209,0.18) 0 6px, transparent 6px 12px)",
        }}
      />
      <motion.div
        className="absolute left-1/2 h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          top: reduced ? "0%" : top,
          background: "#80ed99",
          boxShadow: "0 0 16px 3px rgba(128,237,153,0.25)",
        }}
      />
    </div>
  );
}
