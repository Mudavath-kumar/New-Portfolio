import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** How much the previous section scales down (0.92 = 8% shrink) */
  scaleFrom?: number;
  /** Whether to add the rounded-top clip effect */
  roundedTop?: boolean;
  /** Whether to add vertical slide-up overlap */
  slideUp?: boolean;
}

export function SectionReveal({
  children,
  className,
  style,
  scaleFrom = 0.94,
  roundedTop = true,
  slideUp = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.15"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [scaleFrom, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        borderTopLeftRadius: roundedTop ? borderRadius : 0,
        borderTopRightRadius: roundedTop ? borderRadius : 0,
        transformOrigin: "top center",
        willChange: "transform, opacity",
        marginTop: slideUp ? "-3rem" : 0,
        position: "relative",
        zIndex: 1,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
