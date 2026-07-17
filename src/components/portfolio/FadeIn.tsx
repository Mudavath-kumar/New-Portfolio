import { motion } from "motion/react";
import type { ReactNode, ElementType } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  blur?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 35,
  scale = 0.96,
  rotate = 0,
  blur = 8,
  as = "div",
  className,
  style,
}: Props) {
  const MotionTag = motion.create(as as any);
  return (
    <MotionTag
      initial={{
        opacity: 0,
        x,
        y,
        scale,
        rotate,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-40px", amount: 0.15 }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{
        willChange: "transform, opacity, filter",
        ...style,
      }}
    >
      {children}
    </MotionTag>
  );
}