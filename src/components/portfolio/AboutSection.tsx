import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { SplitHeading } from "./SplitHeading";

const STACK = [
  "React", "TypeScript", "Java", "Django", "AWS", "Node.js",
  "LangChain", "RAG Pipelines", "Claude API", "Groq API",
  "Sentence Transformers", "Prompt Engineering",
];


export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const orbX1 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-28 sm:py-32 overflow-hidden"
      style={{ background: "var(--bg-main)" }}
    >
      {/* Parallax floating orbs */}
      <motion.div style={{ y: orbY1, x: orbX1 }} className="absolute pointer-events-none" aria-hidden>
        <div style={{
          position: "absolute", top: "10%", left: "8%",
          width: "clamp(200px, 30vw, 400px)", height: "clamp(200px, 30vw, 400px)",
          background: "radial-gradient(circle, rgba(182,0,168,0.07) 0%, transparent 70%)",
          filter: "blur(60px)", borderRadius: "50%",
          opacity: "var(--glow-opacity)", transition: "opacity 0.5s ease",
        }} />
      </motion.div>
      <motion.div style={{ y: orbY2 }} className="absolute pointer-events-none" aria-hidden>
        <div style={{
          position: "absolute", bottom: "15%", right: "10%",
          width: "clamp(150px, 25vw, 350px)", height: "clamp(150px, 25vw, 350px)",
          background: "radial-gradient(circle, rgba(118,33,176,0.06) 0%, transparent 70%)",
          filter: "blur(50px)", borderRadius: "50%",
          opacity: "var(--glow-opacity)", transition: "opacity 0.5s ease",
        }} />
      </motion.div>

      <div className="flex flex-col items-center gap-12 sm:gap-16 md:gap-20 relative z-10 max-w-5xl mx-auto">
        <SplitHeading
          text="About me"
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3.5rem, 12vw, 160px)" }}
          stagger={0.03}
        />

        <div className="max-w-[700px]">
          <AnimatedText
            text="Motivated computer science and engineering student with strong skills in full stack development, cloud technologies, and AI agent engineering. Hands-on with React, Java, Django, AWS and modern AI stacks — building RAG pipelines, LangChain apps and intelligent agents with Claude, Groq and Sentence Transformers. Continuous learner with a passion for prompt engineering, aiming to contribute to innovative AI-driven teams."
            className="text-center leading-relaxed font-medium"
            style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", color: "var(--text-main)" }}
          />
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl"
        >
          {STACK.map((s) => (
            <motion.span
              key={s}
              variants={{
                hidden: { opacity: 0, y: 15, scale: 0.9, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.2 } }}
              className="rounded-full border px-5 py-2 text-xs sm:text-sm uppercase tracking-wide cursor-default"
              style={{ borderColor: "var(--border-color)", color: "var(--text-muted)", transition: "border-color 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent-color)"; e.currentTarget.style.color = "var(--text-main)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-color)"; e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>

      </div>

      <div className="mt-16 sm:mt-20 relative z-10">
        <FadeIn delay={0.1} y={20}><ContactButton /></FadeIn>
      </div>
    </section>
  );
}