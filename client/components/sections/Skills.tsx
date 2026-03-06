import { motion } from "framer-motion";
import {
    BrainCircuit,
    Code2,
    Database,
    Globe,
    GraduationCap,
    Layers,
    Shield,
    Wrench,
    Zap
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["Java", "C", "JavaScript"],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Libraries & Frameworks",
    icon: <Layers className="w-8 h-8" />,
    skills: ["Vite", "GSAP", "Node.js"],
    color: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: "AI Tools",
    icon: <BrainCircuit className="w-8 h-8" />,
    skills: [
      "ChatGPT / GPT Tools",
      "Claude AI",
      "GitHub Copilot",
      "Cursor AI",
      "Perplexity AI",
      "Clacky AI",
      "Hugging Face",
    ],
    color: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI Development",
    icon: <Zap className="w-8 h-8" />,
    skills: [
      "Flowise",
      "Botpress",
      "LangChain",
      "Prompt Engineering",
      "AI-assisted Dev",
      "AI IDEs & Vibe Coding",
    ],
    color: "from-violet-500/10 to-purple-500/10",
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-8 h-8" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel / Netlify", "AI IDEs"],
    color: "from-slate-500/10 to-gray-500/10",
  },
  {
    title: "Databases",
    icon: <Database className="w-8 h-8" />,
    skills: ["MongoDB", "MySQL", "Supabase", "Neon (PostgreSQL)", "Firebase"],
    color: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    skills: [
      "REST API Development",
      "Auth & Authorization",
      "Responsive Design",
      "Web App Development",
      "CRUD App Design",
      "API Integration",
    ],
    color: "from-teal-500/10 to-cyan-500/10",
  },
  {
    title: "Core CS",
    icon: <GraduationCap className="w-8 h-8" />,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Software Engineering",
      "ML Fundamentals",
      "Cloud Computing",
    ],
    color: "from-rose-500/10 to-red-500/10",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Toolkit</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter">SKILLS & EXPERTISE</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[40px] border border-border bg-gradient-to-br ${category.color} hover:border-primary transition-all duration-500 group relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 p-8 text-primary/20 group-hover:text-primary transition-colors">
                {category.icon}
              </div>
              
              <h4 className="text-3xl font-black tracking-tighter mb-8">{category.title}</h4>
              
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* Floating Icons Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
          <div className="animate-float absolute top-1/4 left-1/4"><Code2 size={100} /></div>
          <div className="animate-spin-slow absolute top-3/4 left-1/3"><Layers size={120} /></div>
          <div className="animate-pulse-glow absolute top-1/2 right-1/4"><Shield size={80} /></div>
          <div className="animate-float absolute bottom-1/4 right-1/3"><Zap size={90} /></div>
        </div>
      </div>
    </section>
  );
};
