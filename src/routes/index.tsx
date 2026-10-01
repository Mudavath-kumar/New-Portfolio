import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Check, ChevronLeft, ChevronRight, Copy, Download, ExternalLink, Github, Moon, Send, Sun, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SmoothCursor } from "@/registry/magicui/smooth-cursor";

// Project images served from public/
const trustRag = "/Project/Trustware Rag/homepage.png";
const revenueRescue = "/Project/Resce-Recovery/homepage.png";
const mambaTab = "/Project/Mambatab Credit/Screenshot 2026-01-25 130353.png";
const recipeHaven = "/Project/Recipe-project/18.07.2026_02.24.20_REC.png";

// Certificate images — all 20 verified from public/certificates/
const certServiceNow = "/certificates/servicenow.png";
const certServiceNowIntern = "/certificates/servicenowintern.png";
const certClaude = "/certificates/claude-101.png";
const certMcKinsey = "/certificates/mckinsey-forward.png";
const certIntelliCon = "/certificates/microsofthyd.png";
const certMicrosoftAi = "/certificates/microsoft-hyd.png";
const certEdunetMern = "/certificates/edunetfoundation.jpg";
const certPega = "/certificates/pega.png";
const certNxtWave = "/certificates/nxtwavebuildaton.jpeg";
const certMasterUnion = "/certificates/masterunion.jpeg";
const certOpenSourceConnect = "/certificates/opensource.png";
const certOscg = "/certificates/oscg.png";
const certSmartInterviews = "/certificates/SmartInterview.webp";
const certSansad = "/certificates/sansad-iit.png";
const certApertre = "/certificates/apertre.png";
const certHackTheRank = "/certificates/hacktherank.png";
const certWindsurf = "/certificates/vibe-coding-windsurf.png";
const certSimplilearn = "/certificates/vibe-coding-simplilearn.png";
const certCambridge = "/certificates/cambridge-linguaskill.png";
const certAppliedMarketing = "/certificates/applied-marketing-in-higher-education-and-upskilling-certificate.png";

const projects = [
  {
    n: "01",
    title: "TrustRAG",
    subtitle: "Trust-Aware Multi-Agent Consensus Framework",
    kind: "AI / MULTI-AGENT RAG",
    image: trustRag,
    domain: "trustrag-consensus.vercel.app",
    text: "Five specialized AI agents cross-examine evidence, evaluate consensus confidence, and eliminate hallucinations with traceable provenance.",
    metrics: "5 AI Agents · Consensus Voting · 0.94 Faithfulness Score",
    tags: ["LangChain", "Claude API", "Vector DB", "FastAPI", "React", "Python"],
    demo: "https://major-project-trust-aware-consensus.vercel.app/",
    github: "https://github.com/Mudavath-kumar/MAJOR-PROJECT-Trust-Aware-Consensus-Framework-for-Multi-Agent-RAG",
  },
  {
    n: "02",
    title: "RevenueRescue AI",
    subtitle: "Autonomous Payment Recovery Engine",
    kind: "FINTECH / AI AUTOMATION",
    image: revenueRescue,
    domain: "revenue-rescue-ai.vercel.app",
    text: "A policy-gated automation platform that predicts churn risk, retries failed transactions via smart routing, and recovers revenue with audit logs and safety controls.",
    metrics: "Auditable Risk Engine · Smart Retries · Enterprise UX",
    tags: ["Next.js", "TypeScript", "AI Rules Engine", "Node.js", "TailwindCSS"],
    demo: "https://revenue-rescue-ai-omega.vercel.app/",
    github: "https://github.com/Mudavath-kumar/-RevenueRescue-AI",
  },
  {
    n: "03",
    title: "MambaTab",
    subtitle: "Selective State-Space Model for Tabular Fraud",
    kind: "DEEP LEARNING / RESEARCH",
    image: mambaTab,
    domain: "mambatab-ssm.research",
    text: "Selective state-space fraud detection benchmarked across 284,000 transactions, capturing complex tabular interactions and achieving a 0.97 ROC-AUC.",
    metrics: "284K Transactions · 0.97 ROC-AUC · Sub-ms Inference",
    tags: ["PyTorch", "Mamba / SSM", "Python", "Scikit-Learn", "CUDA"],
    demo: null,
    github: "https://github.com/Mudavath-kumar/Mini-Project--3-2",
  },
  {
    n: "04",
    title: "Recipe Haven",
    subtitle: "Curated Culinary Discovery Platform",
    kind: "FULL STACK / MERN PLATFORM",
    image: recipeHaven,
    domain: "recipe-haven.vercel.app",
    text: "A production MERN platform featuring secure JWT authentication, dynamic recipe composition, cloud media integration, and fast faceted search.",
    metrics: "Secure JWT Auth · Cloud Storage · Full-Text Search",
    tags: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    demo: "https://v0-recipe-adding-platform.vercel.app/",
    github: "https://github.com/Mudavath-kumar/recipe-adding-platform-01",
  },
];

const experience = [
  { year: "JUN 2026 — PRESENT", role: "SDE Intern", org: "Spotnxt", text: "Building frontend visualizations, Go Fiber services and Obsidian tool plugins in Hyderabad." },
  { year: "MAR 2026 — PRESENT", role: "System Administrator Intern", org: "ServiceNow", text: "Working with the Now Platform, IT service management and enterprise cloud workflows." },
  { year: "MAY 2025 — PRESENT", role: "Trainee", org: "Smart Interviews", text: "Strengthening data structures, algorithms and practical problem-solving skills." },
];

const stats = [
  { numericValue: 150, suffix: "+", label: "DSA PROBLEMS SOLVED" },
  { numericValue: 20, suffix: "+", label: "CERTIFICATIONS" },
  { numericValue: 4, suffix: "", label: "FEATURED PROJECTS" },
  { numericValue: 5, suffix: "", label: "AI AGENTS · TRUSTRAG" },
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
  { title: "Certified System Administrator (CSA)", issuer: "ServiceNow", year: "2026", image: certServiceNow },
  { title: "ServiceNow Virtual Internship Program", issuer: "ServiceNow & SmartBridge (AICTE)", year: "2026", image: certServiceNowIntern },
  { title: "Claude 101", issuer: "Anthropic", year: "2026", image: certClaude },
  { title: "McKinsey Forward Program", issuer: "McKinsey & Company", year: "2026", image: certMcKinsey },
  { title: "IntelliCON 2025 Participant", issuer: "Global AI Hyderabad · Microsoft & Grafana", year: "2025", image: certIntelliCon },
  { title: "Microsoft AI Workshop", issuer: "Microsoft AI Innovators Hub", year: "2025", image: certMicrosoftAi },
  { title: "Building Modern Web Apps with MERN Stack", issuer: "EY Global Delivery & AICTE (Edunet)", year: "2025", image: certEdunetMern },
  { title: "Pegasystems National Internship Program", issuer: "Pegasystems & SmartBridge (AICTE)", year: "2026", image: certPega },
  { title: "OpenAI Academy x NxtWave Regional Buildathon", issuer: "NxtWave & OpenAI Academy", year: "2025", image: certNxtWave },
  { title: "React Hyderabad BUILDATHON", issuer: "React Hyderabad & Masters' Union", year: "2026", image: certMasterUnion },
  { title: "AI-Driven Systems for Open Source Collaboration", issuer: "Open Source Connect Global", year: "2026", image: certOpenSourceConnect },
  { title: "Open Source Connect Global Contributor", issuer: "OSCG · Zulip & NexFellow", year: "2026", image: certOscg },
  { title: "Smart Interviews Trainee · DSA & Problem Solving", issuer: "Smart Interviews", year: "2026", image: certSmartInterviews },
  { title: "SANSAD — National Youth Parliament", issuer: "SANSAD", year: "2026", image: certSansad },
  { title: "Apertre 3.0 Open Source Contribution", issuer: "Resourcio Community", year: "2026", image: certApertre },
  { title: "HackTheRank Online Quiz", issuer: "HackTheRank", year: "2026", image: certHackTheRank },
  { title: "Vibe Coding in Windsurf", issuer: "Windsurf / Codeium", year: "2026", image: certWindsurf },
  { title: "Vibe Coding Course", issuer: "Simplilearn SkillUp", year: "2026", image: certSimplilearn },
  { title: "Linguaskill Business · CEFR B1", issuer: "Cambridge English Assessment", year: "2025", image: certCambridge },
  { title: "Applied Marketing in Higher Education and Upskilling", issuer: "Jaro Education", year: "2026", image: certAppliedMarketing },
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

/* Animated number component that counts up on scroll */
function AnimatedCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    const container = containerRef.current;
    if (!el || !container) return;
    const isReduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReduced) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const state = { val: 0 };
    const st = ScrollTrigger.create({
      trigger: container,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(state, {
          val: value,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            if (el) el.textContent = `${Math.round(state.val)}${suffix}`;
          },
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [value, suffix]);

  return (
    <div ref={containerRef} className="reveal">
      <strong ref={numberRef}>0{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const certificatePreview = useRef<HTMLDivElement>(null);
  const certificateTarget = useRef({ x: -800, y: -800 });
  const [dark, setDark] = useState(true);
  const [activeCertificate, setActiveCertificate] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeNav, setActiveNav] = useState<string>("top");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Contact form state (Formspree endpoint: https://formspree.io/f/mdekvbwo)
  const [formCategory, setFormCategory] = useState("Full-time Role");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formErrorMsg, setFormErrorMsg] = useState("");

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => setPreloaderDone(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  // Theme setup
  useEffect(() => {
    const saved = localStorage.getItem("mk-theme");
    const value = saved ? saved === "dark" : false;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
  }, []);

  // Keyboard navigation for certificate lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % certifications.length : null));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + certifications.length) % certifications.length : null));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Scrollspy & Back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
      const sections = ["top", "about", "work", "capabilities", "experience", "certifications", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!root.current) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      if (reduce) return;

      // Hero entrance
      gsap.from("[data-enter]", { y: 22, opacity: 0, duration: .6, stagger: .1, ease: "power3.out" });
      gsap.from(".hero-name span", { yPercent: 115, duration: 1.3, stagger: .1, ease: "expo.out", delay: .15 });
      gsap.from(".hero-kicker", { opacity: 0, x: -20, duration: .9, ease: "power3.out", delay: .5 });

      // Hero parallax
      gsap.to(".hero-name", { yPercent: -28, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "bottom top", scrub: 1.2 } });
      gsap.to(".hero-caption", { y: -80, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "60% top", scrub: 1 } });
      gsap.to(".hero-kicker", { y: -60, opacity: 0, ease: "none", scrollTrigger: { trigger: ".video-hero", start: "top top", end: "60% top", scrub: 1 } });

      // Panel slides up
      gsap.fromTo(".archive-panel", { y: "18vh" }, { y: 0, ease: "none", scrollTrigger: { trigger: ".archive-panel", start: "top bottom", end: "top top", scrub: 1.5 } });

      // Project cards
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
        gsap.fromTo(card,
          { scale: .92, y: 60, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", end: "center 65%", scrub: false, toggleActions: "play none none none" },
            duration: 1.1, delay: i * 0.08 }
        );
      });

      // Project images parallax
      gsap.utils.toArray<HTMLElement>(".project-screen-link img").forEach((img) => {
        gsap.fromTo(img, { yPercent: -4 }, { yPercent: 4, ease: "none",
          scrollTrigger: { trigger: img.closest(".project-card"), start: "top bottom", end: "bottom top", scrub: 1.5 } });
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, { y: 45, opacity: 0, duration: 1, ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } });
      });

      // Manifesto word-by-word
      gsap.fromTo(".mword", { opacity: .08, y: 8 }, { opacity: 1, y: 0, stagger: .04, ease: "none",
        scrollTrigger: { trigger: ".manifesto", start: "top 72%", end: "bottom 40%", scrub: true } });

      // Exp rows slide in
      gsap.utils.toArray<HTMLElement>(".exp-row").forEach((row, i) => {
        gsap.from(row, { x: -40, opacity: 0, duration: .9, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", toggleActions: "play none none none" }, delay: i * 0.08 });
      });

      // Cert rows staggered
      gsap.utils.toArray<HTMLElement>(".cert-row").forEach((row, i) => {
        gsap.from(row, { x: 30, opacity: 0, duration: .7, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 92%", toggleActions: "play none none none" }, delay: i * 0.04 });
      });

      // Outro contact reveal
      gsap.fromTo(".view-overlay", { opacity: 0 }, { opacity: 1, ease: "none",
        scrollTrigger: { trigger: ".archive-outro", start: "top 80%", end: "top 20%", scrub: true } });
      gsap.from(".contact-headline", { yPercent: 30, opacity: 0, duration: 1.4, ease: "expo.out",
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
    const value = !dark;
    setDark(value);
    document.documentElement.classList.toggle("dark", value);
    localStorage.setItem("mk-theme", value ? "dark" : "light");
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("kc893825@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
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

  /* Preview card trails the pointer */
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setFormErrorMsg("");

    try {
      const response = await fetch("https://formspree.io/f/mdekvbwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          category: formCategory,
          name: formName,
          email: formEmail,
          message: formMessage,
          _subject: `[${formCategory}] Portfolio Inquiry from ${formName || formEmail}`,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        const data = await response.json().catch(() => null);
        setFormStatus("error");
        setFormErrorMsg(data?.errors?.[0]?.message || "Could not deliver message via Formspree. Please try direct email.");
      }
    } catch {
      setFormStatus("error");
      setFormErrorMsg("Network error. Please use direct email or try again.");
    }
  };

  const currentCert = lightboxIndex !== null ? certifications[lightboxIndex] : null;

  return (
    <div ref={root} className="archive-shell">
      {/* Preloader overlay */}
      <div className={`portfolio-preloader ${preloaderDone ? "preloader-hidden" : ""}`} aria-hidden="true">
        <div className="preloader-content">
          <div className="preloader-logo">MK<span>®</span></div>
          <div className="preloader-bar"><div className="preloader-fill" /></div>
          <span className="preloader-caption">SYSTEMS ONLINE · HYDERABAD</span>
        </div>
      </div>

      <SmoothCursor />
      <div className="scroll-progress" aria-hidden="true" />

      {/* Header */}
      <header className="archive-header" data-enter>
        <div className="header-left">
          <a className="archive-logo" href="#top" aria-label="Back to top">MK<span>®</span></a>
          <div className="status-badge" title="Open to Full-Time SDE & AI roles worldwide">
            <span className="status-dot-wrap">
              <span className="status-ping" />
              <span className="status-dot" />
            </span>
            <span className="status-label">OPEN TO WORK</span>
          </div>
        </div>

        <nav className="archive-nav">
          <a href="#about" className={activeNav === "about" ? "is-active" : ""}>ABOUT</a>
          <a href="#work" className={activeNav === "work" ? "is-active" : ""}>[ WORK ]</a>
          <a href="#experience" className={activeNav === "experience" ? "is-active" : ""}>EXPERIENCE</a>
          <a href="#certifications" className={activeNav === "certifications" ? "is-active" : ""}>CERTS</a>
          <a href="#contact" className={activeNav === "contact" ? "is-active" : ""}>CONTACT</a>
          <a href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer" className="resume-btn">
            <Download style={{ width: 13, height: 13 }} /> RESUME
          </a>
          <button onClick={toggleTheme} aria-label={dark ? "Use light theme" : "Use dark theme"}>
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="top" className="video-hero">
        <NeuralField />
        <div className="hero-kicker" data-enter>FULL STACK DEVELOPER<br />AI / LLM / RAG ENGINEER</div>
        <p className="hero-caption" data-enter>
          Building dependable intelligent systems through deliberate code, strong product thinking and expressive interfaces.
        </p>
        <h1 className="hero-name" aria-label="Mudavath Kumar">
          <span>MUDAVATH</span>
          <span>KUMAR</span>
        </h1>
        <div className="hero-foot" data-enter>
          <span>HYDERABAD, INDIA · AVAILABLE WORLDWIDE</span>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer">DOWNLOAD RÉSUMÉ ↓</a>
            <a href="#work">VIEW MY WORK ↓</a>
          </div>
        </div>
      </section>

      {/* Main Panel */}
      <main id="work" className="archive-panel">
        <section id="about" className="archive-about reveal">
          <span>ABOUT</span>
          <h2>Code with rigor.<br />Design with intent.</h2>
          <div>
            <p>Final-year Computer Science student and working engineer focused on full-stack platforms, retrieval systems and applied machine learning.</p>
            <p>I care about systems you can trust — measurable, explainable and pleasant to use.</p>
          </div>
        </section>

        <div className="archive-intro">
          <span>FEATURED WORK · 01—04</span>
          <h2>Systems built<br />to earn trust.</h2>
          <p>Selected engineering systems across<br />AI agents, deep learning, and full-stack platforms.</p>
        </div>

        <div className="projects-showcase">
          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 === 1 ? "card-reversed" : ""}`}
              key={project.title}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="project-display">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span className="b-dot b-close" />
                    <span className="b-dot b-min" />
                    <span className="b-dot b-max" />
                  </div>
                  <div className="browser-url">
                    <span className="browser-lock">🔒</span>
                    <span>{project.domain}</span>
                  </div>
                  <span className="browser-num">{project.n}</span>
                </div>

                <a
                  href={project.demo || project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-screen-link"
                  aria-label={`Open ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} project interface`}
                    width={1280}
                    height={800}
                    loading="lazy"
                  />
                  <div className="screen-hover-badge">
                    <span>{project.demo ? "OPEN LIVE DEMO ↗" : "EXPLORE REPOSITORY ↗"}</span>
                  </div>
                </a>
              </div>

              <div className="project-details">
                <div className="project-header-meta">
                  <span className="project-num-tag">{project.n}</span>
                  <span className="project-category">{project.kind}</span>
                </div>

                <h3 className="project-main-title">{project.title}</h3>
                <h4 className="project-tagline">{project.subtitle}</h4>
                <p className="project-summary">{project.text}</p>

                <div className="project-metrics-banner">
                  <span className="metrics-label">BENCHMARK / HIGHLIGHT</span>
                  <strong className="metrics-val">{project.metrics}</strong>
                </div>

                <div className="project-tags-list">
                  {project.tags.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-button-row">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-action">
                      <span>LIVE DEMO</span>
                      <ArrowUpRight style={{ width: 14, height: 14 }} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary-action">
                    <Github style={{ width: 14, height: 14 }} />
                    <span>CODE</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Animated Counter Stats */}
        <section className="archive-stats">
          {stats.map((s) => (
            <AnimatedCounter
              key={s.label}
              value={s.numericValue}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </section>

        <section className="manifesto">
          <span>MANIFESTO / 06</span>
          <p>
            {"Intelligent software should be accountable. I design AI that shows its reasoning, interfaces that feel inevitable, and backends that stay calm under pressure.".split(" ").map((w, i) => (
              <span className="mword" key={i}>{w} </span>
            ))}
          </p>
        </section>
      </main>

      {/* Horizontal Capabilities */}
      <section id="capabilities" className="cap-pin">
        <div className="cap-head">
          <span>CAPABILITIES / 07</span>
          <h2>What I build</h2>
        </div>
        <div className="cap-track">
          {capabilities.map((c) => (
            <article className="cap-card" key={c.n}>
              <span>{c.n}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <ul>{c.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      {/* Archive Panel 2 */}
      <main className="archive-panel archive-panel-2">
        <section id="experience" className="archive-exp">
          <span className="reveal">EXPERIENCE</span>
          {experience.map((e) => (
            <div className="exp-row reveal" key={e.org}>
              <span>{e.year}</span>
              <h3>{e.role}</h3>
              <strong>{e.org}</strong>
              <p>{e.text}</p>
            </div>
          ))}
        </section>

        <section className="education">
          <span className="reveal">EDUCATION</span>
          {education.map((item) => (
            <article className="education-row reveal" key={item.degree}>
              <span>{item.period}</span>
              <div>
                <h3>{item.degree}</h3>
                <strong>{item.school}</strong>
                <p>{item.focus}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Certifications with Clickable Lightbox */}
        <section id="certifications" className="certifications" onPointerLeave={() => setActiveCertificate(null)}>
          <div className="cert-head reveal">
            <div>
              <span>CREDENTIALS</span>
              <p className="cert-subtitle">Click any certificate to inspect full resolution</p>
            </div>
            <strong>ALL · 20</strong>
          </div>
          <div className="cert-list">
            {certifications.map((item, index) => (
              <div
                className="cert-row"
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setLightboxIndex(index); }}
                onPointerEnter={() => setActiveCertificate(index)}
                onPointerMove={moveCertificatePreview}
                aria-label={`View certificate: ${item.title}`}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>
                  <span className="cert-title">{item.title}</span>
                  <ArrowUpRight className="cert-arrow" aria-hidden="true" />
                </p>
                <em>{item.issuer}</em>
                <small>{item.year}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="process">
          <span className="reveal">PROCESS / 09</span>
          <div className="process-grid">
            {process.map((p) => (
              <div className="process-step reveal" key={p.n}>
                <strong>{p.n}</strong>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="stack">
          <span className="reveal">TECHNICAL SKILLS</span>
          <div className="stack-grid">
            {stack.map((g) => (
              <div className="stack-col reveal" key={g.group}>
                <h3>{g.group}</h3>
                {g.items.map((i) => <p key={i}>{i}</p>)}
              </div>
            ))}
          </div>
        </section>

        <section className="profiles">
          <div className="profiles-head reveal">
            <span>CODING PROFILES</span>
            <h2>Find me online.</h2>
          </div>
          <div className="profiles-grid">
            {profiles.map(([label, url]) => (
              <a className="reveal" key={label} href={url} target="_blank" rel="noreferrer">
                <span>{label}</span>
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </section>

        <section className="skill-reel">
          <div>REACT · TYPESCRIPT · PYTHON · FASTAPI · LANGCHAIN · NODE.JS · MONGODB · SQL · GO · DOCKER ·&nbsp;</div>
          <div aria-hidden="true">REACT · TYPESCRIPT · PYTHON · FASTAPI · LANGCHAIN · NODE.JS · MONGODB · SQL · GO · DOCKER ·&nbsp;</div>
        </section>
      </main>

      {/* Outro & Interactive Contact Section */}
      <section id="contact" className="archive-outro">
        <div className="view-overlay" aria-hidden="true" />
        
        <div className="contact-top">
          <p className="contact-avail">AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES</p>
          <a href="mailto:kc893825@gmail.com" className="contact-headline">
            LET’S<br />BUILD.<ArrowUpRight />
          </a>
        </div>

        {/* Direct Message Card */}
        <div className="contact-box-grid">
          <div className="contact-card">
            <span className="contact-card-sub">DIRECT INQUIRY</span>
            <h3>Send a Message</h3>
            
            <div className="category-pills">
              {["Full-time Role", "Freelance / Project", "Collaboration", "Quick Hello"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`pill-btn ${formCategory === cat ? "is-selected" : ""}`}
                  onClick={() => setFormCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {formStatus === "success" ? (
              <div className="form-success-card">
                <div className="success-icon-badge">
                  <Check style={{ width: 22, height: 22 }} />
                </div>
                <h4>Message Delivered to Kumar!</h4>
                <p>
                  Thank you for reaching out{formName ? `, ${formName}` : ""}. Your note was transmitted directly to my inbox via Formspree. I typically review and respond within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn-send-another"
                  onClick={() => {
                    setFormStatus("idle");
                    setFormMessage("");
                  }}
                >
                  <span>SEND ANOTHER MESSAGE</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="interactive-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell me about your opportunity, project or inquiry..."
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  required
                />
                <div className="form-actions">
                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={formStatus === "submitting"}
                  >
                    <span>{formStatus === "submitting" ? "Delivering Note..." : "Send Message"}</span>
                    <Send style={{ width: 14, height: 14 }} />
                  </button>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="copy-email-btn"
                  >
                    {copiedEmail ? <Check style={{ width: 14, height: 14, color: "var(--primary)" }} /> : <Copy style={{ width: 14, height: 14 }} />}
                    <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
                  </button>
                </div>
                {formStatus === "error" && (
                  <div className="form-error-banner">
                    <span>{formErrorMsg}</span>
                    <a href={`mailto:kc893825@gmail.com?subject=${encodeURIComponent(`[${formCategory}] Portfolio Inquiry`)}&body=${encodeURIComponent(formMessage)}`}>
                      Open mail client instead →
                    </a>
                  </div>
                )}
              </form>
            )}
          </div>

          <div className="contact-info-card">
            <span className="contact-card-sub">DIRECT CONTACT</span>
            <div className="direct-links-list">
              <a className="view-btn" href="mailto:kc893825@gmail.com">
                <span>kc893825@gmail.com</span>
                <ArrowUpRight style={{ width: 14, height: 14 }} />
              </a>
              <a className="view-btn" href="tel:+917569055938">
                <span>+91 75690 55938</span>
                <ArrowUpRight style={{ width: 14, height: 14 }} />
              </a>
              <a className="view-btn" href="/Mudavath_Kumar_Resume-.pdf" target="_blank" rel="noreferrer">
                <span>DOWNLOAD RÉSUMÉ</span>
                <Download style={{ width: 14, height: 14 }} />
              </a>
            </div>
            <div className="location-box">
              <span className="location-label">LOCATION</span>
              <p>Hyderabad, Telangana, India</p>
              <small>UTC+05:30 · Open to Remote & Relocation</small>
            </div>
          </div>
        </div>

        <footer>
          <span>MUDAVATH KUMAR</span>
          <a href="https://github.com/Mudavath-kumar" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com/in/mudavath-kumar-mudavath-kumar" target="_blank" rel="noreferrer">LINKEDIN</a>
        </footer>
      </section>

      {/* Floating Certificate Preview sheet on mouse move */}
      <div ref={certificatePreview} className={`certificate-preview ${activeCertificate !== null && lightboxIndex === null ? "is-visible" : ""}`} aria-hidden="true">
        <div className="certificate-preview-media">
          {certifications.map((item, index) => (
            <img key={item.title} src={item.image} alt="" loading="lazy" className={index === activeCertificate ? "is-active" : ""} />
          ))}
          <div className="certificate-preview-shade" />
        </div>
        <span>{activeCertificate !== null ? certifications[activeCertificate]?.title : ""}</span>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {lightboxIndex !== null && currentCert && (
        <div className="cert-modal-backdrop" onClick={() => setLightboxIndex(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-index">
                <span>CERTIFICATE {String(lightboxIndex + 1).padStart(2, "0")} / {certifications.length}</span>
              </div>
              <div className="cert-modal-actions">
                <a
                  href={currentCert.image}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-modal-link"
                  title="Open original file in new tab"
                >
                  <ExternalLink style={{ width: 16, height: 16 }} />
                  <span>Full Size</span>
                </a>
                <button
                  type="button"
                  className="cert-modal-close"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Close dialog"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>
            </div>

            <div className="cert-modal-body">
              <button
                type="button"
                className="cert-nav-btn cert-nav-prev"
                onClick={() => setLightboxIndex((lightboxIndex - 1 + certifications.length) % certifications.length)}
                aria-label="Previous certificate"
              >
                <ChevronLeft style={{ width: 24, height: 24 }} />
              </button>

              <div className="cert-modal-image-wrap">
                <img
                  src={currentCert.image}
                  alt={`Certificate: ${currentCert.title}`}
                  className="cert-modal-img"
                />
              </div>

              <button
                type="button"
                className="cert-nav-btn cert-nav-next"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % certifications.length)}
                aria-label="Next certificate"
              >
                <ChevronRight style={{ width: 24, height: 24 }} />
              </button>
            </div>

            <div className="cert-modal-footer">
              <div>
                <h3>{currentCert.title}</h3>
                <p>{currentCert.issuer} · {currentCert.year}</p>
              </div>
              <span className="cert-modal-tip">Tip: Use ← → keys to browse, ESC to close</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back to Top button */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? "is-shown" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp style={{ width: 18, height: 18 }} />
      </button>
    </div>
  );
}
