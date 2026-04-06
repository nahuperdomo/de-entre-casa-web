"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useIsMounted } from "@/lib/useIsMounted";

interface AnimateInViewProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function AnimateInView({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: AnimateInViewProps) {
  const mounted = useIsMounted();

  const offsets = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
