"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav, resume } from "@/data/portfolio";
import { useActiveSection, scrollToId } from "@/hooks/useActiveSection";

const targets = nav.map((item) => item.target);

export default function Navigation() {
  const active = useActiveSection(targets);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed right-5 top-5 z-[60] hidden md:block lg:right-8 lg:top-6"
    >
      <nav
        className={`flex w-fit items-center whitespace-nowrap rounded-full border transition-all duration-300 ease-out ${
          scrolled ? "gap-3.5 px-3.5 py-2 shadow-soft" : "gap-4 px-4 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
        }`}
        style={{
          background: scrolled ? "rgba(7,18,25,0.72)" : "rgba(7,18,25,0.55)",
          borderColor: "rgba(145,193,224,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {nav.map((item) => {
          const isActive = active === item.target;
          return (
            <button
              key={item.target}
              onClick={() => scrollToId(item.target)}
              className="relative shrink-0 whitespace-nowrap font-mono text-[12.5px] tracking-[0.01em] transition-colors duration-200 lg:text-[13px]"
              style={{ color: isActive ? "#80ed99" : "#91c1e0" }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = "#d4f0f0";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = "#91c1e0";
              }}
              aria-current={isActive ? "true" : undefined}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="active-nav"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute -bottom-1.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full"
                  style={{ background: "#80ed99", boxShadow: "0 0 8px 2px rgba(128,237,153,0.3)" }}
                />
              )}
            </button>
          );
        })}
        <motion.a
          href={resume.href}
          download={resume.fileName}
          whileHover={{ y: -2, backgroundColor: "#80ed99", boxShadow: "0 10px 26px -8px rgba(87,204,153,0.35)" }}
          whileTap={{ scale: 0.96 }}
          className="shrink-0 whitespace-nowrap rounded-full px-4 py-[7px] font-mono text-[12px] font-semibold tracking-[0.02em] text-[#071219] lg:px-5 lg:py-2 lg:text-[12.5px]"
          style={{ background: "#57cc99" }}
        >
          Resume
        </motion.a>
      </nav>
    </motion.header>
  );
}
