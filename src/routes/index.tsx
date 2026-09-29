import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Github, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmoothCursor } from "@/registry/magicui/smooth-cursor";

// Project images served from public/
const trustRag = "/Project/Trustware Rag/homepage.png";
const revenueRescue = "/Project/Resce-Recovery/homepage.png";
const mambaTab = "/Project/Mambatab Credit/Screenshot 2026-01-25 130353.png";
const recipeHaven = "/Project/Recipe-project/18.07.2026_02.24.20_REC.png";

// Certificate images — all 17 from public/certificates/
const certServiceNow = "/certificates/servicenow.png";
const certClaude = "/certificates/claude-101.png";
const certMcKinsey = "/certificates/mckinsey-forward.png";
const certSmartInterviews = "/certificates/SmartInterview.webp";
const certSansad = "/certificates/sansad-iit.png";
const certHackTheRank = "/certificates/hacktherank.png";
const certApertre = "/certificates/apertre.png";
const certWindsurf = "/certificates/vibe-coding-windsurf.png";
const certSimplilearn = "/certificates/vibe-coding-simplilearn.png";
const certCambridge = "/certificates/cambridge-linguaskill.png";
const certAppliedMarketing = "/certificates/applied-marketing-in-higher-education-and-upskilling-certificate.png";
const certWhatsApp = "/certificates/WhatsApp Image 2026-06-30 at 7.27.58 PM.jpeg";
const certScreenshot = "/certificates/Screenshot 2026-04-14 120459.png";
const certJpg = "/certificates/1743094375173.jpg";
const certImg = "/certificates/image.png";
const cert01A = "/certificates/01KRCB6PYHW0EZWM20MH5Q75V3.png";
const cert01B = "/certificates/01KRCB6TCS84TKKBMYYS0ZZ4DE.png";

const projects = [
  { n: "01", title: "TrustRAG", kind: "AI / RAG", image: trustRag, text: "Five agents cross-examine evidence, measure consensus and expose the reasoning behind every answer.", demo: "https://major-project-trust-aware-consensus.vercel.app/", github: "https://github.com/Mudavath-kumar/MAJOR-PROJECT-Trust-Aware-Consensus-Framework-for-Multi-Agent-RAG" },
  { n: "02", title: "RevenueRescue AI", kind: "FINTECH / AI", image: revenueRescue, text: "A policy-gated engine that predicts and recovers failed payments with auditable safety controls.", demo: "https://revenue-rescue-ai-omega.vercel.app/", github: "https://github.com/Mudavath-kumar/-RevenueRescue-AI" },
  { n: "03", title: "MambaTab", kind: "DEEP LEARNING", image: mambaTab, text: "Selective state-space fraud detection across 284,000 transactions, reaching a 0.97 ROC-AUC.", github: "https://github.com/Mudavath-kumar/Mini-Project--3-2" },
  { n: "04", title: "Recipe Haven", kind: "FULL STACK", image: recipeHaven, text: "A secure MERN platform for creating, curating and discovering everyday recipes.", demo: "https://v0-recipe-adding-platform.vercel.app/", github: "https://github.com/Mudavath-kumar/recipe-adding-platform-01" },
];

const experience = [
  { year: "JUN 2026 — PRESENT", role: "SDE Intern", org: "Spotnxt", text: "Building frontend visualizations, Go Fiber services and Obsidian tool plugins in Hyderabad." },
  { year: "MAR 2026 — PRESENT", role: "System Administrator Intern", org: "ServiceNow", text: "Working with the Now Platform, IT service management and enterprise cloud workflows." },
  { year: "MAY 2025 — PRESENT", role: "Trainee", org: "Smart Interviews", text: "Strengthening data structures, algorithms and practical problem-solving skills." },
];

const stats = [
  { value: "150+", label: "DSA PROBLEMS SOLVED" },
  { value: "17+", label: "CERTIFICATIONS" },
  { value: "04", label: "FEATURED PROJECTS" },
  { value: "05", label: "AI AGENTS · TRUSTRAG" },
];

const capabilities = [
  { n: "01", title: "AI Engineering", text: "RAG pipelines, agent systems and practical LLM products grounded in evidence.", tags: ["LANGCHAIN", "CLAUDE API", "VECTOR DBS"] },
  { n: "02", title: "Full-Stack Products", text: "Responsive products with secure authentication, clean APIs and considered interfaces.", tags: ["REACT", "NODE.JS", "MONGODB"] },
  { n: "03", title: "Applied ML", text: "Models for fraud, risk and prediction, shaped for real product constraints.", tags: ["PYTHON", "PYTORCH", "MACHINE LEARNING"] },
  { n: "04", title: "Backend Systems", text: "Reliable services, integrations and data flows built with straightforward contracts.", tags: ["GO FIBER", "DJANGO", "REST API"] },
  { n: "05", title: "Creative Frontend", text: "Expressive visualizations and motion systems that remain fast and useful.", tags: ["GSAP", "FRAMER MOTION", "TYPESCRIPT"] },
];

const process = [
  { n: "I", title: "Understand", text: "Frame the real problem, the users and what success can be measured by." },
  { n: "II", title: "Architect", text: "Choose the simplest system that is safe, observable and ready to scale." },
  { n: "III", title: "Build", text: "Ship in small, tested increments with honest feedback loops." },
  { n: "IV", title: "Refine", text: "Measure, polish and harden until it earns the user's trust." },
];

const stack = [
  { group: "LANGUAGES", items: ["Java", "C", "JavaScript", "TypeScript", "Python"] },
  { group: "FRAMEWORKS", items: ["React", "Vite", "Node.js", "Django", "GSAP"] },
  { group: "AI ENGINEERING", items: ["RAG Pipelines", "LangChain", "Claude API", "Groq API", "Agent Design"] },
  { group: "DATA", items: ["MongoDB", "MySQL", "Neon", "Firebase", "Vector DBs"] },
  { group: "PLATFORMS", items: ["GitHub", "Postman", "Vercel", "Netlify", "AWS"] },
];

const education = [
  { period: "2024 — 2027", degree: "B.Tech · Computer Science & Engineering", school: "Vardhaman College of Engineering · JNTUH", focus: "DSA · OS · DBMS · Machine Learning · Cloud · Software Engineering" },
  { period: "2021 — 2024", degree: "Diploma · Computer Science & Engineering", school: "Mahaveer Institute of Science & Technology", focus: "Programming · Web Technologies · Database Systems" },
];

const certifications = [
  { title: "ServiceNow System Administrator", issuer: "ServiceNow", year: "2026", image: certServiceNow },
  { title: "Claude 101", issuer: "Anthropic", year: "2026", image: certClaude },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "2026", image: certMcKinsey },
  { title: "Smart Interviews", issuer: "Smart Interviews", year: "2026", image: certSmartInterviews },
  { title: "SANSAD — National Youth Indian Parliament", issuer: "SANSAD", year: "2026", image: certSansad },
  { title: "HackTheRank Online Quiz", issuer: "HackTheRank", year: "2026", image: certHackTheRank },
  { title: "Apertre Product Submission", issuer: "Apertre", year: "2026", image: certApertre },
  { title: "Vibe Coding in Windsurf", issuer: "Windsurf", year: "2026", image: certWindsurf },
  { title: "Vibe Coding in Simplilearn", issuer: "Simplilearn", year: "2026", image: certSimplilearn },
  { title: "Linguaskill Business · CEFR B1", issuer: "Cambridge", year: "2025", image: certCambridge },
  { title: "Applied Marketing & Higher Education", issuer: "Certification Body", year: "2026", image: certAppliedMarketing },
  { title: "Professional Certificate", issuer: "Institute", year: "2026", image: certWhatsApp },
  { title: "Achievement Certificate", issuer: "Organisation", year: "2026", image: certScreenshot },
  { title: "Completion Certificate", issuer: "Platform", year: "2026", image: certJpg },
  { title: "Recognition Award", issuer: "Institute", year: "2026", image: certImg },
  { title: "Excellence Certificate I", issuer: "Organisation", year: "2026", image: cert01A },
  { title: "Excellence Certificate II", issuer: "Organisation", year: "2026", image: cert01B },
];

const profiles = [
  ["LEETCODE", "https://leetcode.com/u/Mudavath_kumar_1"], ["GITHUB", "https://github.com/Mudavath-kumar"],
  ["LINKEDIN", "https://linkedin.com/in/mudavath-kumar-mudavath-kumar"], ["CODEFORCES", "https://codeforces.com/profile/mudavathkumar"],
  ["CODECHEF", "https://www.codechef.com/users/mudavath_kumar"], ["HACKERRANK", "https://www.hackerrank.com/profile/mudavathkumar"],
  ["GEEKSFORGEEKS", "https://www.geeksforgeeks.org/profile/mudavath_kumar"], ["INTERVIEWBIT", "https://www.interviewbit.com/profile/el-dorado_437/"],
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mudavath Kumar — Full Stack & AI Engineer" },
    { name: "description", content: "Portfolio of Mudavath Kumar, a full-stack developer and AI engineer in Hyderabad." },
    { property: "og:title", content: "Mudavath Kumar — Full Stack & AI Engineer" },
    { property: "og:description", content: "Building reliable AI systems and thoughtful digital products." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Portfolio,
});

/* Generative "neural field": nodes drift, link up, and bend toward the cursor. */
function NeuralField() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(devicePixelRatio || 1, 2);
    type P = { x: number; y: number; vx: number; vy: number };
    let pts: P[] = [];
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(140, (w * h) / 9000));
      pts = Array.from({ length: count }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    };
    const onMove = (e: MouseEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const draw = () => {
      const fg = getComputedStyle(canvas).color;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < 220) { p.vx += dx / d * .02; p.vy += dy / d * .02; }
        p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      ctx.strokeStyle = fg; ctx.fillStyle = fg;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (!a) continue;
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          if (!b) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.globalAlpha = (1 - d / 130) * .35; ctx.lineWidth = .6; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        ctx.globalAlpha = md < 160 ? 1 : .55; ctx.beginPath(); ctx.arc(a.x, a.y, md < 160 ? 2.4 : 1.4, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize); window.addEventListener("mousemove", onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", onMove); };
  }, []);
  return <canvas ref={ref} className="neural-field" aria-hidden="true" />;
}

function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const certificatePreview = useRef<HTMLDivElement>(null);
  const certificateTarget = useRef({ x: -800, y: -800 });
  const [dark, setDark] = useState(true);
  const [activeCertificate, setActiveCertificate] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mk-theme");
    const value = saved ? saved === "dark" : false;
    setDark(value); document.documentElement.classList.toggle("dark", value);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduce) return;

      // Hero entrance — faster, punchier
      gsap.from("[data-enter]", { y: 22, opacity: 0, duration: .6, stagger: .1, ease: "power3.out" });
      gsap.from(".hero-name span", { yPercent: 115, duration: 1.3, stagger: .1, ease: "expo.out", delay: .15 });
      gsap.from(".hero-kicker", { opacity: 0, x: -20, duration: .9, ease: "power3.out", delay: .5 });

      // Hero parallax — name drifts up as you scroll
      gsap.to(".hero-name", { yPercent: -28, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "bottom top", scrub: 1.2 } });
      gsap.to(".hero-caption", { y: -80, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "60% top", scrub: 1 } });
      gsap.to(".hero-kicker", { y: -60, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "60% top", scrub: 1 } });

      // Panel slides up from below
      gsap.fromTo(".archive-panel", { y: "18vh" }, { y: 0, ease: "none", scrollTrigger: { trigger: ".archive-panel", start: "top bottom", end: "top top", scrub: 1.5 } });

      // Project cards — clip-path reveal + scale
      gsap.utils.toArray<HTMLElement>(".archive-card").forEach((card, i) => {
        gsap.fromTo(card,
          { scale: .82, y: 100, opacity: 0, rotateX: 6 },
          { scale: 1, y: 0, opacity: 1, rotateX: 0, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", end: "center 60%", scrub: false, toggleActions: "play none none none" },
            duration: 1.1, delay: i * 0.07 }
        );
      });

      // Project images parallax
      gsap.utils.toArray<HTMLElement>(".archive-image img").forEach((img) => {
        gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: "none",
          scrollTrigger: { trigger: img.closest(".archive-card"), start: "top bottom", end: "bottom top", scrub: 1.5 } });
      });

      // Stats counter fly-in
      gsap.utils.toArray<HTMLElement>(".archive-stats div").forEach((el, i) => {
        gsap.from(el, { y: 50, opacity: 0, duration: .8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }, delay: i * 0.1 });
      });

      // Section reveals — split into header + content
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, { y: 55, opacity: 0, duration: 1.1, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 87%", toggleActions: "play none none none" } });
      });

      // Manifesto word-by-word
      gsap.fromTo(".mword", { opacity: .08, y: 8 }, { opacity: 1, y: 0, stagger: .04, ease: "none",
        scrollTrigger: { trigger: ".manifesto", start: "top 72%", end: "bottom 40%", scrub: true } });

      // Exp rows slide in from left
      gsap.utils.toArray<HTMLElement>(".exp-row").forEach((row, i) => {
        gsap.from(row, { x: -40, opacity: 0, duration: .9, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", toggleActions: "play none none none" }, delay: i * 0.08 });
      });

      // Cert rows staggered
      gsap.utils.toArray<HTMLElement>(".cert-row").forEach((row, i) => {
        gsap.from(row, { x: 30, opacity: 0, duration: .7, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%", toggleActions: "play none none none" }, delay: i * 0.06 });
      });

      // Outro contact reveal
      gsap.fromTo(".view-overlay", { opacity: 0 }, { opacity: 1, ease: "none",
        scrollTrigger: { trigger: ".archive-outro", start: "top 80%", end: "top 20%", scrub: true } });
      gsap.from(".archive-outro > a", { yPercent: 30, opacity: 0, duration: 1.4, ease: "expo.out",
        scrollTrigger: { trigger: ".archive-outro", start: "top 75%", toggleActions: "play none none none" } });

      // Scroll progress bar
      gsap.to(".scroll-progress", { scaleX: 1, ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: .3 } });

      // Horizontal capabilities scroll
      if (innerWidth > 800) {
        const track = document.querySelector<HTMLElement>(".cap-track");
        if (track) gsap.to(track, { x: () => -(track.scrollWidth - innerWidth + 64), ease: "none",
          scrollTrigger: { trigger: ".cap-pin", start: "top top", end: () => `+=${track.scrollWidth}`, pin: true, scrub: 1, invalidateOnRefresh: true } });
      }
    }, root);
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh).catch(() => undefined);
    window.addEventListener("load", refresh, { once: true });
    return () => {
      context.revert();
      window.removeEventListener("load", refresh);
    };
  }, []);

  const toggleTheme = () => {
    const value = !dark; setDark(value); document.documentElement.classList.toggle("dark", value); localStorage.setItem("mk-theme", value ? "dark" : "light");
  };

  const moveCertificatePreview = (event: React.PointerEvent) => {
    if (event.pointerType === "touch") return;
    const width = certificatePreview.current?.offsetWidth || 280;
    const height = certificatePreview.current?.offsetHeight || 420;
    const gap = 28;
    const x = event.clientX + gap + width <= window.innerWidth - 12
      ? event.clientX + gap
      : event.clientX - width - gap;
    const y = Math.max(12, Math.min(event.clientY - height / 2, window.innerHeight - height - 12));
    certificateTarget.current = { x, y };
  };

  /* Preview card trails the pointer with an eased lerp, like a floating reference sheet. */
  useEffect(() => {
    const preview = certificatePreview.current;
    if (!preview) return;
    let raf = 0;
    const pos = { x: -800, y: -800 };
    const animate = () => {
      pos.x += (certificateTarget.current.x - pos.x) * 0.15;
      pos.y += (certificateTarget.current.y - pos.y) * 0.15;
      preview.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return <div ref={root} className="archive-shell">
    <SmoothCursor />
    <div className="scroll-progress" aria-hidden="true" />
    <header className="archive-header" data-enter>
      <a className="archive-logo" href="#top" aria-label="Back to top">MK<span>®</span></a>
      <div className="archive-nav"><a href="#about">ABOUT</a><a href="#work">[ WORK ]</a><a href="#contact">CONTACT</a><a href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer" className="resume-btn"><Download style={{width:13,height:13}}/> RESUME</a><button onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>{dark ? <Sun/> : <Moon/>}</button></div>
    </header>

    <section id="top" className="video-hero">
      <NeuralField />
      <div className="hero-kicker" data-enter>FULL STACK DEVELOPER<br/>AI / LLM / RAG ENGINEER</div>
      <p className="hero-caption" data-enter>Building dependable intelligent systems through deliberate code, strong product thinking and expressive interfaces.</p>
      <h1 className="hero-name" aria-label="Mudavath Kumar"><span>MUDAVATH</span><span>KUMAR</span></h1>
      <div className="hero-foot" data-enter><span>HYDERABAD, INDIA · AVAILABLE WORLDWIDE</span><div style={{display:"flex",gap:"1.5rem",alignItems:"center"}}><a href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer">DOWNLOAD RÉSUMÉ ↓</a><a href="#work">VIEW MY WORK ↓</a></div></div>
    </section>

    <main id="work" className="archive-panel">
      <section id="about" className="archive-about reveal">
        <span>ABOUT</span><h2>Code with rigor.<br/>Design with intent.</h2>
        <div><p>Final-year Computer Science student and working engineer focused on full-stack platforms, retrieval systems and applied machine learning.</p><p>I care about systems you can trust — measurable, explainable and pleasant to use.</p></div>
      </section>

      <div className="archive-intro"><span>FEATURED WORK · 01—04</span><h2>Systems built<br/>to earn trust.</h2><p>Selected products across<br/>AI, machine learning and web.</p></div>
      <div className="archive-grid">
        {projects.map((project, index) => <article className={`archive-card card-${index + 1}`} key={project.title}>
          <a href={project.demo || project.github} target="_blank" rel="noreferrer" className="archive-image"><img src={project.image} alt={`${project.title} project artwork`} width={768} height={1024} loading="lazy"/><span>{project.n}</span></a>
          <div className="archive-card-copy"><span>{project.kind}</span><h3>{project.title}</h3><p>{project.text}</p><div>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">VIEW <ArrowUpRight/></a>}<a href={project.github} target="_blank" rel="noreferrer">CODE <Github/></a></div></div>
        </article>)}
      </div>

      <section className="archive-stats">
        {stats.map((s) => <div className="reveal" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
      </section>

      <section className="manifesto">
        <span>MANIFESTO / 06</span>
        <p>{"Intelligent software should be accountable. I design AI that shows its reasoning, interfaces that feel inevitable, and backends that stay calm under pressure.".split(" ").map((w, i) => <span className="mword" key={i}>{w} </span>)}</p>
      </section>
    </main>

    <section className="cap-pin">
      <div className="cap-head"><span>CAPABILITIES / 07</span><h2>What I build</h2></div>
      <div className="cap-track">
        {capabilities.map((c) => <article className="cap-card" key={c.n}><span>{c.n}</span><h3>{c.title}</h3><p>{c.text}</p><ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul></article>)}
      </div>
    </section>

    <main className="archive-panel archive-panel-2">
      <section className="archive-exp">
        <span className="reveal">EXPERIENCE</span>
        {experience.map((e) => <div className="exp-row reveal" key={e.org}><span>{e.year}</span><h3>{e.role}</h3><strong>{e.org}</strong><p>{e.text}</p></div>)}
      </section>

      <section className="education">
        <span className="reveal">EDUCATION</span>
        {education.map((item) => <article className="education-row reveal" key={item.degree}>
          <span>{item.period}</span><div><h3>{item.degree}</h3><strong>{item.school}</strong><p>{item.focus}</p></div>
        </article>)}
      </section>

      <section className="certifications" onPointerLeave={() => setActiveCertificate(null)}>
        <div className="cert-head reveal"><span>CERTIFICATIONS</span><strong>ALL · 17</strong></div>
        <div className="cert-list">{certifications.map((item, index) => <div className="cert-row reveal" key={item.title} onPointerEnter={() => setActiveCertificate(index)} onPointerMove={moveCertificatePreview}>
          <span>{String(index + 1).padStart(2, "0")}</span><p><span className="cert-title">{item.title}</span><ArrowUpRight className="cert-arrow" aria-hidden="true" /></p><em>{item.issuer}</em><small>{item.year}</small>
        </div>)}</div>
      </section>

      <section className="process">
        <span className="reveal">PROCESS / 09</span>
        <div className="process-grid">{process.map((p) => <div className="process-step reveal" key={p.n}><strong>{p.n}</strong><h3>{p.title}</h3><p>{p.text}</p></div>)}</div>
      </section>

      <section className="stack">
        <span className="reveal">TECHNICAL SKILLS</span>
        <div className="stack-grid">{stack.map((g) => <div className="stack-col reveal" key={g.group}><h3>{g.group}</h3>{g.items.map((i) => <p key={i}>{i}</p>)}</div>)}</div>
      </section>

      <section className="profiles">
        <div className="profiles-head reveal"><span>CODING PROFILES</span><h2>Find me online.</h2></div>
        <div className="profiles-grid">{profiles.map(([label, url]) => <a className="reveal" key={label} href={url} target="_blank" rel="noreferrer"><span>{label}</span><ArrowUpRight /></a>)}</div>
      </section>

      <section className="skill-reel"><div>REACT · TYPESCRIPT · PYTHON · FASTAPI · LANGCHAIN · NODE.JS · MONGODB · SQL · GO · DOCKER ·&nbsp;</div><div aria-hidden="true">REACT · TYPESCRIPT · PYTHON · FASTAPI · LANGCHAIN · NODE.JS · MONGODB · SQL · GO · DOCKER ·&nbsp;</div></section>
    </main>

    <section id="contact" className="archive-outro">
      <div className="view-overlay" aria-hidden="true" />
      <p>AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</p>
      <a href="mailto:kc893825@gmail.com">LET’S<br/>BUILD.<ArrowUpRight/></a>
      <div className="contact-links"><a className="view-btn" href="mailto:kc893825@gmail.com">kc893825@gmail.com</a><a className="view-btn" href="tel:+917569055938">+91 75690 55938</a><a className="view-btn" href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer">DOWNLOAD RÉSUMÉ</a></div>
      <footer><span>MUDAVATH KUMAR</span><a href="https://github.com/Mudavath-kumar" target="_blank" rel="noreferrer">GITHUB</a><a href="https://linkedin.com/in/mudavath-kumar-mudavath-kumar" target="_blank" rel="noreferrer">LINKEDIN</a></footer>
    </section>

    <div ref={certificatePreview} className={`certificate-preview ${activeCertificate !== null ? "is-visible" : ""}`} aria-hidden="true">
      <div className="certificate-preview-media">
        {certifications.map((item, index) => <img key={item.title} src={item.image} alt="" loading="lazy" className={index === activeCertificate ? "is-active" : ""} />)}
        <div className="certificate-preview-shade" />
      </div>
      <span>{activeCertificate !== null ? certifications[activeCertificate]?.title : ""}</span>
    </div>
  </div>;
}
