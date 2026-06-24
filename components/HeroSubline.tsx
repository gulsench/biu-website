"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function HeroSubline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 1, y: reduce ? 0 : 10 }}
      animate={
        reduce || inView
          ? { opacity: 1, y: 0 }
          : { opacity: 1, y: 10 }
      }
      transition={{
        duration: reduce ? 0 : 1.05,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : 0.32,
      }}
    >
      {children}
    </motion.span>
  );
}
