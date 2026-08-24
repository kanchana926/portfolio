"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, resume } from "@/data/portfolio";
import { useActiveSection, scrollToId } from "@/hooks/useActiveSection";

const targets = nav.map((item) => item.target);

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(targets);

  const handleNavigate = (id: string) => {
    setOpen(false);
    window.setTimeout(() => scrollToId(id), open ? 200 : 0);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-[60] md:hidden">
      <div className="flex items-center justify-between px-4 pt-4">
        <button
          onClick={() => handleNavigate("top")}
          aria-label="Scroll to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border font-mono text-sm font-semibold shadow-[0_10px_30px_-14px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          style={{
            background: "rgba(7,18,25,0.62)",
            borderColor: "rgba(145,193,224,0.08)",
            color: "#57cc99",
          }}
        >
          K
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 items-center gap-2 rounded-full border px-5 font-mono text-xs font-medium uppercase tracking-[0.12em] shadow-[0_10px_30px_-14px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          style={{
            background: "rgba(7,18,25,0.62)",
            borderColor: "rgba(145,193,224,0.08)",
            color: "#f4fef5",
          }}
        >
          <span
            className="relative block h-[10px] w-[14px]"
            aria-hidden="true"
          >
            <span
              className="absolute left-0 top-0 h-[1.5px] w-full transition-transform duration-300"
              style={{
                background: "#f4fef5",
                transform: open ? "translateY(4.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute left-0 bottom-0 h-[1.5px] w-full transition-transform duration-300"
              style={{
                background: "#f4fef5",
                transform: open ? "translateY(-4.5px) rotate(-45deg)" : "none",
              }}
            />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Close menu overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[59]"
              style={{ background: "rgba(5,11,16,0.72)" }}
            />
            <motion.nav
              id="mobile-menu"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              className="fixed left-4 right-4 top-[72px] z-[60] rounded-2xl border p-3 shadow-medium backdrop-blur-xl"
              style={{
                background: "rgba(7,18,25,0.9)",
                borderColor: "rgba(145,193,224,0.08)",
              }}
            >
              <ul className="flex flex-col">
                {nav.map((item) => {
                  const isActive = active === item.target;
                  return (
                    <li key={item.target}>
                      <button
                        onClick={() => handleNavigate(item.target)}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left font-mono text-[15px] transition-colors"
                        style={{
                          color: isActive ? "#80ed99" : "#f4fef5",
                          background: isActive ? "rgba(128,237,153,0.08)" : "transparent",
                        }}
                      >
                        {item.label}
                        <span aria-hidden="true" style={{ color: "#38a3a5" }}>→</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
              <a
                href={resume.href}
                download={resume.fileName}
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-4 text-center font-mono text-[15px] font-semibold tracking-[0.04em] text-[#071219]"
                style={{ background: "#57cc99" }}
              >
                Resume
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
