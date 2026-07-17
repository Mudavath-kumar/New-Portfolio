import { useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { FadeIn } from "./FadeIn";
import { SplitHeading } from "./SplitHeading";

const GROUPS = [
  { title: "Languages", items: ["Java", "C", "JavaScript", "TypeScript", "Python"], span: "col-span-1" },
  { title: "Frameworks", items: ["React", "Vite", "Node.js", "Django", "GSAP", "Framer Motion"], span: "col-span-1" },
  { title: "AI Engineering", items: ["RAG Pipelines", "LangChain", "Claude API", "Groq API", "Sentence Transformers", "Prompt Engineering", "Vector DBs", "Agent Design"], span: "md:col-span-2 col-span-1" },
  { title: "AI Tools", items: ["ChatGPT", "Claude", "Copilot", "Cursor", "Perplexity", "Clacky", "Hugging Face", "Flowise", "Botpress"], span: "col-span-1" },
  { title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Neon", "Firebase"], span: "col-span-1" },
  { title: "Platforms", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "AWS"], span: "col-span-1" },
  { title: "Web", items: ["REST APIs", "Auth", "Responsive UI", "CRUD", "API Integration"], span: "col-span-1" },
  { title: "Core CS", items: ["DSA", "OOP", "OS", "DBMS", "SE", "ML", "Cloud", "CP"], span: "md:col-span-2 col-span-1" },
];

const PROFILES = [
  { 
    name: "LeetCode", 
    href: "https://leetcode.com/u/Mudavath_kumar_1", 
    handle: "Mudavath_kumar_1",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ color: "#FFA116" }}>
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0 0 1.953l.058.058a1.378 1.378 0 0 0 1.951 0l9.778-9.778a1.38 1.38 0 0 0 0-1.953l-.058-.058a1.372 1.372 0 0 0-.991-.414zm6.717 6.717a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0 0 1.953l.058.058a1.378 1.378 0 0 0 1.951 0l9.778-9.778a1.38 1.38 0 0 0 0-1.953l-.058-.058a1.372 1.372 0 0 0-.991-.414z" />
      </svg>
    )
  },
  { 
    name: "GitHub", 
    href: "https://github.com/Mudavath-kumar", 
    handle: "Mudavath-kumar",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-main)" }}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com/in/mudavath-kumar-mudavath-kumar", 
    handle: "mudavath-kumar",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#0A66C2" }}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  { 
    name: "Codeforces", 
    href: "https://codeforces.com/profile/mudavathkumar", 
    handle: "mudavathkumar",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <rect x="2" y="10" width="4" height="12" fill="#B3C9E2" />
        <rect x="8" y="2" width="4" height="20" fill="#3182CE" />
        <rect x="14" y="6" width="4" height="16" fill="#E53E3E" />
      </svg>
    )
  },
  { 
    name: "CodeChef", 
    href: "https://www.codechef.com/users/mudavath_kumar", 
    handle: "mudavath_kumar",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#A8703E" }}>
        <path d="M6 18H18V20H6V18Z" />
        <path d="M12 2C8 2 6 5 6 9C6 11 7.5 13 9 14.5V16H15V14.5C16.5 13 18 11 18 9C18 5 16 2 12 2Z" />
      </svg>
    )
  },
  { 
    name: "HackerRank", 
    href: "https://www.hackerrank.com/profile/mudavathkumar", 
    handle: "mudavathkumar",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" style={{ color: "#1BA354" }}>
        <path d="M2.38 0A2.38 2.38 0 0 0 0 2.38v19.24A2.38 2.38 0 0 0 2.38 24h19.24A2.38 2.38 0 0 0 24 21.62V2.38A2.38 2.38 0 0 0 21.62 0H2.38zm5.55 5.56h2.22v5.18h3.7v-5.18h2.22v12.88h-2.22v-5.48h-3.7v5.48H7.93V5.56z" />
      </svg>
    )
  },
  { 
    name: "GeeksforGeeks", 
    href: "https://www.geeksforgeeks.org/profile/mudavath_kumar", 
    handle: "mudavath_kumar",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#2F8D46" }}>
        <path d="M10 19 L5 12 L10 5 M14 5 L19 12 L14 19" />
      </svg>
    )
  },
  { 
    name: "InterviewBit", 
    href: "https://www.interviewbit.com/profile/el-dorado_437/", 
    handle: "el-dorado_437",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#0078D4" }}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
];

function SkillCard({ g, i }: { g: (typeof GROUPS)[number]; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 0.7], [8, 0]);
  const filter = useMotionTemplate`blur(${blurVal}px)`;

  // 3D tilt on hover
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = innerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((yPos - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y,
        opacity,
        filter,
      }}
      className={`${g.span} origin-center`}
    >
      <div
        ref={innerRef}
        className="rounded-[28px] border-2 p-6 sm:p-8 flex flex-col justify-between gap-6 h-full tilt-card-inner"
        style={{
          borderColor: "var(--border-color)",
          background: "var(--bg-card)",
          transition: "border-color 0.25s, box-shadow 0.25s, transform 0.2s ease-out",
        }}
        data-cursor-text="Skills"
        onMouseMove={handleMouseMove}
        onMouseLeave={(e) => {
          handleMouseLeave();
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.boxShadow = "none";
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent-color)";
          e.currentTarget.style.boxShadow = "0 15px 40px rgba(182,0,168,0.06)";
        }}
      >
        <div className="flex flex-col gap-4">
          {/* Card Header info */}
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm tracking-wider" style={{ color: "var(--accent-color)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border" style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}>
              {g.items.length} items
            </span>
          </div>

          {/* Title */}
          <h3 className="hero-heading font-black uppercase tracking-wide text-lg sm:text-xl">
            {g.title}
          </h3>
        </div>

        {/* Skills list capsules */}
        <motion.div
          className="flex flex-wrap gap-2 pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
          }}
        >
          {g.items.map((it) => (
            <motion.span
              key={it}
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
                visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm uppercase tracking-wide px-3 py-1.5 rounded-full border cursor-default"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-muted)",
                background: "var(--bg-main)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-color)";
                e.currentTarget.style.color = "var(--text-main)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              {it}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="skills" className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "var(--bg-main)" }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <SplitHeading
            text="Skills"
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 11vw, 140px)" }}
            stagger={0.035}
          />
          <FadeIn delay={0.1} y={20}
            className="uppercase tracking-widest text-xs sm:text-sm md:max-w-xs md:text-right"
            style={{ color: "var(--text-muted)" }}
          >
            A working toolkit built through internships, hackathons and shipped side-projects.
          </FadeIn>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map((g, i) => (
            <SkillCard key={g.title} g={g} i={i} />
          ))}
        </div>

        {/* Coding Profiles */}
        <div className="mt-12 sm:mt-16">
          <SplitHeading
            text="Coding Profiles"
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            stagger={0.025}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {PROFILES.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-center justify-between rounded-[20px] border px-5 py-4 group"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--text-main)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  background: "var(--bg-card)"
                }}
                data-cursor-text="Go"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-color)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(182,0,168,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border flex-shrink-0" style={{ borderColor: "var(--border-color)", background: "rgba(255,255,255,0.015)" }}>
                    {p.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium uppercase tracking-wide text-xs sm:text-sm">{p.name}</span>
                    <span className="text-[11px]" style={{ color: "var(--text-muted)" }}>{p.handle}</span>
                  </div>
                </div>
                <span
                  className="text-lg group-hover:translate-x-1"
                  style={{ color: "var(--accent-color)", transition: "transform 0.2s" }}
                >
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}