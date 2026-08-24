"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/data/portfolio";
import { scrollToId } from "@/hooks/useActiveSection";
import RoleRotator from "./RoleRotator";
import CursorSpotlight from "./CursorSpotlight";

const HeroScene = dynamic(() => import("./three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const kinetic = {
  hidden: { opacity: 0, y: 28, scale: 1.02, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const sceneMask =
  "radial-gradient(ellipse 80% 75% at 62% 45%, black 20%, rgba(0,0,0,0.7) 55%, transparent 92%)";

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative grid gap-12 overflow-hidden pb-24 pt-2 md:pt-6"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-[1] opacity-70"
        style={{
          maskImage: sceneMask,
          WebkitMaskImage: sceneMask,
        }}
      >
        <HeroScene reduced={!!reduced} />
      </div>
      <CursorSpotlight />

      <div className="relative z-[2] max-w-[720px]">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flow-tag"
        >
          {hero.eyebrow}
        </motion.div>

        <h1 className="font-heading text-[clamp(46px,10vw,84px)] leading-[0.98] tracking-[-0.025em] text-[#f4fef5]" style={{ textShadow: "0 0 60px rgba(56,163,165,0.12)" }}>
          <motion.span
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={kinetic}
            transition={{ ...kinetic.visible.transition, delay: 0.05 }}
            className="inline-block"
          >
            {hero.firstName}
          </motion.span>
          <br />
          <motion.span
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={kinetic}
            transition={{ ...kinetic.visible.transition, delay: 0.22 }}
            className="inline-block"
            style={{ color: "#57cc99", textShadow: "0 0 40px rgba(87,204,153,0.22)" }}
          >
            {hero.lastName}
          </motion.span>
        </h1>

        <RoleRotator />

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-6 max-w-[540px] font-body text-lg leading-[1.7] text-body"
        >
          {hero.lead}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.45 }}
          className="mt-9 flex flex-wrap gap-3.5"
        >
          <motion.button
            onClick={() => scrollToId(hero.ctas.primary.target)}
            whileHover={{ y: -2, backgroundColor: "#80ed99" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl px-[22px] py-[13px] font-mono text-[13px] tracking-[0.04em] text-[#071219] shadow-accent-glow"
            style={{ background: "#57cc99" }}
          >
            {hero.ctas.primary.label}
          </motion.button>
          <motion.button
            onClick={() => scrollToId(hero.ctas.secondary.target)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl border px-[22px] py-[13px] font-mono text-[13px] tracking-[0.04em] text-[#c8e0f0] transition-colors duration-200 hover:border-[rgba(56,163,165,0.45)] hover:bg-[rgba(56,163,165,0.08)]"
            style={{ borderColor: "rgba(90,161,209,0.25)" }}
          >
            {hero.ctas.secondary.label}
          </motion.button>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.65 }}
          className="mt-12 flex flex-wrap gap-8"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <b className="block font-display text-[26px] text-text">{stat.value}</b>
              <span className="font-mono text-xs tracking-[0.04em] text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
