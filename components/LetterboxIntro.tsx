"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function LetterboxIntro() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  const bar = {
    hidden: { height: 56 },
    visible: {
      height: 0,
      transition: { duration: 0.75, delay: 0.35, ease: [0.77, 0, 0.18, 1] },
    },
  };

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[40]">
      <motion.div
        variants={bar}
        initial="hidden"
        animate="visible"
        className="absolute left-0 right-0 top-0"
        style={{ background: "#050b10" }}
      />
      <motion.div
        variants={bar}
        initial="hidden"
        animate="visible"
        className="absolute left-0 right-0 bottom-0"
        style={{ background: "#050b10" }}
      />
    </div>
  );
}
