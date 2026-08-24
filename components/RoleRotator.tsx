"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { roles } from "@/data/portfolio";

export default function RoleRotator() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <div
      className="mt-5 min-h-[22px] font-mono text-[15px]"
      style={{ color: "#38a3a5", textShadow: "0 0 20px rgba(56,163,165,0.22)" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {"> " + roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
