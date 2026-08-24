"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = HTMLMotionProps<"div"> & { delay?: number };

export default function ScrollReveal({ delay = 0, children, ...props }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
