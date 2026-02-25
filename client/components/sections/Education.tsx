import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Indian Institute of Technology, Hyderabad",
    period: "2015 - 2019",
    grade: "9.2 CGPA",
    highlights: ["Academic Excellence Award", "Led the Robotics Club", "Published research on AI"],
  },
  {
    degree: "Senior Secondary Education",
    institution: "Narayana Junior College, Hyderabad",
    period: "2013 - 2015",
    grade: "98.5%",
    highlights: ["State Merit List", "Mathematics Topper"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Foundation</h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter">EDUCATION</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass dark:glass-dark p-10 rounded-[50px] relative group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold leading-tight">{edu.degree}</h4>
                  <p className="text-primary font-semibold">{edu.institution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground font-medium">
                  <Calendar size={18} />
                  {edu.period}
                </div>
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Award size={18} />
                  {edu.grade}
                </div>
              </div>

              <div className="space-y-4">
                {edu.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
