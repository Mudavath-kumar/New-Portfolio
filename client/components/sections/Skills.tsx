import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  Zap,
  Layers,
  Shield
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Globe className="w-8 h-8" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Three.js", "Framer Motion"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Backend",
    icon: <Terminal className="w-8 h-8" />,
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Design",
    icon: <Palette className="w-8 h-8" />,
    skills: ["Figma", "UI/UX", "Adobe CC", "Motion Graphics", "3D Modeling"],
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Tools",
    icon: <Cpu className="w-8 h-8" />,
    skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Netlify"],
    color: "from-orange-500/20 to-yellow-500/20",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
