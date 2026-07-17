import { motion } from "motion/react";
import type { ElementType } from "react";

interface Props {
  text: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** Duration per character reveal */
  charDuration?: number;
  /** Stagger delay between characters */
  stagger?: number;
}

export function SplitHeading({
  text,
  as: Tag = "h2",
  className,
  style,
  delay = 0,
  charDuration = 0.6,
  stagger = 0.02,
}: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={style}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
        style={{ display: "inline" }}
        aria-label={text}
      >
        {words.map((word, wi) => (
          <span
            key={wi}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${wi}-${ci}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    filter: "blur(10px)",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    filter: "blur(0px)",
                  },
                }}
                transition={{
                  duration: charDuration,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "inline-block",
                  transformOrigin: "bottom center",
                  willChange: "transform, opacity, filter",
                }}
              >
                {char}
              </motion.span>
            ))}
            {/* Add space between words */}
            {wi < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.3em" }}>
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
