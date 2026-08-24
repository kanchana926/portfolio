"use client";

import { certificates } from "@/data/portfolio";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Certificates() {
  return (
    <motion.div
      id="certificates"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mt-9 grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3"
    >
      {certificates.map((cert) => (
        <motion.div
          key={cert.title}
          variants={fadeUp}
          className="glass rounded-[10px] p-[18px] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(87,204,153,0.28)] hover:shadow-[0_16px_30px_-18px_rgba(87,204,153,0.2)]"
        >
          <span className="mb-2 block font-mono text-[10px] tracking-[0.08em] text-teal">CERTIFICATION</span>
          <b className="font-display text-[15px] font-medium text-text">{cert.title}</b>
          <span className="mt-1 block text-[13px] text-muted">
            {cert.issuer} · {cert.year}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
