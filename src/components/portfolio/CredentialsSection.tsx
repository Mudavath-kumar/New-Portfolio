import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "./FadeIn";
import { SplitHeading } from "./SplitHeading";

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Vardhaman College of Engineering (VCE), Hyderabad · JNTUH",
    period: "Aug 2024 – 2027",
    focus: "DSA, OS, DBMS, Machine Learning, Cloud Computing, Software Engineering",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    school: "Mahaveer Institute of Science & Technology (MIST), Hyderabad",
    period: "2021 – 2024",
    focus: "Programming Fundamentals, Web Technologies, Database Systems",
  },
];

type Cert = { name: string; org: string; tag: string; year: string; img?: string };

const CERTS: Cert[] = [
  { name: "ServiceNow System Administrator — Internship", org: "ServiceNow", tag: "Internship", year: "2026", img: "/certificates/servicenow.png" },
  { name: "Claude 101 — Certificate of Completion", org: "Anthropic", tag: "AI", year: "2026", img: "/certificates/claude-101.png" },
  { name: "McKinsey Forward Program", org: "McKinsey & Company", tag: "Program", year: "2026", img: "/certificates/mckinsey-forward.png" },
  { name: "Smart Interviews Certificate", org: "Smart Interviews", tag: "DSA", year: "2026", img: "/certificates/SmartInterview.webp" },
  { name: "SANSAD — National Youth Indian Parliament", org: "IIT Kharagpur", tag: "Quiz", year: "2026", img: "/certificates/sansad-iit.png" },
  { name: "HackTheRank Online Quiz Event", org: "HackerRank", tag: "Quiz", year: "2026", img: "/certificates/hacktherank.png" },
  { name: "Apertre Product Submission", org: "GDG × Hack2Skill", tag: "Google", year: "2026", img: "/certificates/apertre.png" },
  { name: "Guide to Vibe Coding in Windsurf", org: "Analytics Vidhya", tag: "Vibe Coding", year: "2026", img: "/certificates/vibe-coding-windsurf.png" },
  { name: "Vibe Coding Course", org: "Simplilearn SkillUp", tag: "Vibe Coding", year: "2026", img: "/certificates/vibe-coding-simplilearn.png" },
  { name: "Linguaskill Business — English Proficiency (CEFR B1)", org: "Cambridge Assessment", tag: "English", year: "2025", img: "/certificates/cambridge-linguaskill.png" },
];

const TAG_COLORS: Record<string, string> = {
  "Internship": "#ff6b35", "AI": "#B600A8", "AI / Cloud": "#B600A8",
  "Cloud": "#4fc3f7", "Program": "#69f0ae", "DSA": "#ffd740",
  "Quiz": "#ce93d8", "Google": "#4db6ac", "Vibe Coding": "#f48fb1",
  "Django": "#80cbc4", "Microsoft": "#0078d4", "OpenAI": "#10a37f",
  "AI Ops": "#9c27b0", "English": "#8d6e63", "Security": "#ef5350",
  "Database": "#43a047", "Enterprise": "#0072c6", "Hackathon": "#ff8f00",
};

function CertModal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.92, y: 20, filter: "blur(6px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-w-4xl w-full rounded-[28px] overflow-hidden"
        style={{
          border: "1px solid rgba(215,226,234,0.15)",
          boxShadow: "0 0 80px rgba(182,0,168,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={cert.img} alt={cert.name} className="w-full h-auto object-contain max-h-[80vh] mx-auto" style={{ background: "#111" }} />
        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="text-white font-semibold text-base sm:text-lg">{cert.name}</div>
          <div className="text-white/55 text-sm mt-1">{cert.org} · {cert.year}</div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white text-sm cursor-pointer"
          style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.15)", transition: "color 0.2s" }}
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  );
}

function CertCard({ c, onClick, index }: { c: Cert; onClick: () => void; index: number }) {
  const tagColor = TAG_COLORS[c.tag] || "#B600A8";

  return (
    <motion.button
      initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "30px" }}
      transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      onClick={onClick}
      className="group relative w-full rounded-[24px] overflow-hidden text-left cursor-pointer"
      data-cursor-text="Zoom"
      style={{
        border: "1px solid var(--border-color)",
        background: "var(--bg-card)",
        aspectRatio: "4/3",
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = tagColor;
        e.currentTarget.style.boxShadow = `0 20px 50px ${tagColor}25`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img
        src={c.img}
        alt={c.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105"
        style={{ transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
        loading="lazy"
      />
      <div
        className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end"
        style={{
          background: "linear-gradient(transparent 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.92) 100%)",
          minHeight: "50%",
        }}
      >
        <div className="text-white text-sm sm:text-base font-semibold leading-snug line-clamp-2">{c.name}</div>
        <div className="text-white/50 text-xs sm:text-sm mt-1">{c.org}</div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[10px] uppercase tracking-widest text-white/35 font-bold">{c.year}</span>
          <span
            className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium"
            style={{ background: `${tagColor}25`, color: tagColor, border: `1px solid ${tagColor}40` }}
          >
            {c.tag}
          </span>
        </div>
      </div>
    </motion.button>
  );
}



export function CredentialsSection() {
  const [activeCert, setActiveCert] = useState<Cert | null>(null);

  return (
    <section id="credentials" className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "var(--bg-main)" }}>
      <AnimatePresence>
        {activeCert && <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex flex-col gap-20 lg:gap-24">
        {/* Education */}
        <div>
          <SplitHeading
            text="Education"
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
            stagger={0.03}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((ed, i) => (
              <motion.div
                key={ed.degree}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-[24px] border-2 p-6 sm:p-8 h-full flex flex-col justify-between"
                style={{
                  borderColor: "var(--border-color)", background: "var(--bg-card)",
                  transition: "border-color 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-color)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(182,0,168,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  <div className="font-medium uppercase tracking-wide text-base sm:text-lg" style={{ color: "var(--text-main)" }}>{ed.degree}</div>
                  <div className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{ed.school}</div>
                </div>
                <div className="mt-4">
                  <div className="uppercase tracking-widest text-xs" style={{ color: "var(--accent-color)" }}>{ed.period}</div>
                  <div className="font-light text-sm mt-2" style={{ color: "var(--text-muted)" }}>{ed.focus}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credentials Gallery */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <SplitHeading
                text="Credentials"
                className="hero-heading font-black uppercase leading-none tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
                stagger={0.025}
              />
              <FadeIn delay={0.05} y={10}
                className="text-xs uppercase tracking-widest mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                Click any certificate to view full size
              </FadeIn>
            </div>
            <FadeIn delay={0.1} y={20}
              className="uppercase tracking-widest text-xs sm:text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {CERTS.length} certifications · 2025 – 2026
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CERTS.map((c, i) => (
              <CertCard key={c.name} c={c} onClick={() => setActiveCert(c)} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}