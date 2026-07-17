import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SplitHeading } from "./SplitHeading";

const EXP = [
  {
    role: "System Administrator Intern",
    company: "ServiceNow",
    period: "March 2026 - Present",
    location: "Remote",
    description: "Interning as a System Administrator at ServiceNow, gaining hands-on experience with the Now Platform, IT Service Management, and enterprise cloud workflows.",
    bullets: [
      "Configuring and administering the ServiceNow Now Platform for IT service management workflows",
      "Managing users, roles, groups, and access controls within the ServiceNow instance",
      "Building and customising service catalogue items, forms, and business rules",
      "Implementing ITSM processes including Incident, Problem, and Change Management",
      "Creating reports and dashboards to monitor platform performance and SLA compliance",
    ],
    skills: ["ServiceNow", "ITSM", "ITIL", "Cloud Platforms", "Service Portal", "Business Rules", "Scripting"],
  },
  {
    role: "Trainee",
    company: "Smart Interviews",
    period: "May 2025 - Present",
    location: "On-site",
    description: "Currently working as a trainee at Smart Interviews, focusing on data structures, algorithms, and problem-solving skills development.",
    bullets: [
      "Participating in intensive training programs focused on data structures and algorithms",
      "Solving complex coding problems and improving problem-solving skills",
      "Learning advanced programming concepts and best practices",
      "Collaborating with peers and mentors to enhance technical knowledge",
    ],
    skills: ["Data Structures", "Algorithms", "Problem Solving", "Coding", "Programming"],
  },
  {
    role: "Full-stack Developer",
    company: "Edunet Foundation",
    period: "March 2025 - Present",
    location: "Hyderabad, India",
    description: "Developing a recipe sharing platform at Edunet Foundation, collaborating with team members to enhance user experience.",
    bullets: [
      "Developed a recipe sharing platform collaborating with team members to enhance user experience",
      "Implemented innovative features to improve platform functionality and user engagement",
      "Successfully launched the project, contributing to the growth of the foundation's online presence",
    ],
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];

function ExperienceCard({
  e,
  i,
  total,
  progress,
}: {
  e: (typeof EXP)[number];
  i: number;
  total: number;
  progress: any;
}) {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const scale = useTransform(progress, [i / total, 1], [1, targetScale]);

  return (
    <div className="min-h-[75vh] md:min-h-[65vh] sticky" style={{ top: `${110 + i * 32}px` }}>
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
          borderColor: "var(--border-color)",
          background: "var(--bg-main)",
          transition: "border-color 0.25s, box-shadow 0.25s",
        }}
        className="rounded-[32px] border-2 p-6 sm:p-8 md:p-10 flex flex-col gap-6 h-full justify-between"
        data-cursor-text="Role"
        onMouseEnter={(ev) => {
          ev.currentTarget.style.borderColor = "var(--accent-color)";
          ev.currentTarget.style.boxShadow = "0 20px 50px rgba(182,0,168,0.08)";
        }}
        onMouseLeave={(ev) => {
          ev.currentTarget.style.borderColor = "var(--border-color)";
          ev.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="flex flex-col gap-5 h-full justify-between">
          {/* Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <div
                className="hero-heading font-black uppercase tracking-wide"
                style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
              >
                {e.role}
              </div>
              <div
                className="uppercase tracking-widest text-sm mt-1"
                style={{ color: "var(--accent-color)" }}
              >
                {e.company} <span style={{ color: "var(--text-muted)", textTransform: "none" }}>· {e.location}</span>
              </div>
            </div>
            <div
              className="uppercase tracking-widest text-xs sm:text-sm rounded-full border px-4 py-1.5"
              style={{ borderColor: "var(--border-color)", color: "var(--text-muted)" }}
            >
              {e.period}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base font-normal leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {e.description}
          </p>

          {/* Key Responsibilities — staggered reveal */}
          <motion.div
            className="flex flex-col gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>
              Key Responsibilities
            </div>
            <ul className="flex flex-col gap-2.5">
              {e.bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={{
                    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-light leading-relaxed flex gap-3 text-sm sm:text-base"
                  style={{ color: "var(--text-main)" }}
                >
                  <span style={{ color: "var(--accent-color)", flexShrink: 0 }}>✓</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Applied */}
          <motion.div
            className="flex flex-col gap-2.5 pt-4 border-t"
            style={{ borderColor: "var(--border-color)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
            }}
          >
            <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--text-muted)" }}>
              Skills Applied
            </div>
            <div className="flex flex-wrap gap-2">
              {e.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
                    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs uppercase tracking-wider px-3 py-1 rounded-full border"
                  style={{
                    borderColor: "var(--border-color)",
                    color: "var(--text-muted)",
                    background: "var(--bg-card)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative z-10 px-5 sm:px-8 md:px-10 pt-24 pb-20"
      style={{ background: "var(--bg-main)" }}
    >
      <div className="max-w-5xl mx-auto mb-16 sm:mb-20 md:mb-24">
        <SplitHeading
          text="Experience"
          className="hero-heading font-black uppercase text-center leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 11vw, 140px)" }}
          stagger={0.03}
        />
      </div>

      {/* Timeline line */}
      <div className="max-w-5xl mx-auto relative">
        <div className="timeline-line hidden md:block" />
        <div className="flex flex-col gap-12 relative z-10">
          {EXP.map((e, i) => (
            <ExperienceCard key={e.role} e={e} i={i} total={EXP.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}