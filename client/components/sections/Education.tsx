import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech, Computer Science",
    institution: "Vardhaman College of Engineering (VCE)",
    period: "Aug 2024 - Present",
    grade: "Ongoing",
    highlights: ["Located in Hyderabad", "Focusing on CS core subjects", "Active participation in tech events"],
  },
  {
    degree: "Diploma, Computer Science and Engineering",
    institution: "Mahaveer Institute of Science and Technology",
    period: "2021 - 2024",
    grade: "Completed",
    highlights: ["Strong foundation in CSE", "Diploma with distinction", "Hands-on engineering projects"],
  },
];

const certifications = [
  "Cybersecurity Course: Skill India Digital Hub",
  "Generative AI For All: Infosys Springboard",
  "CRUD Operations in MongoDB: MongoDB",
  "ServiceNow Administration Fundamentals",
  "Introduction to SAP",
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Education Side */}
          <div className="lg:w-2/3">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">My Foundation</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter">EDUCATION</h3>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="glass dark:glass-dark p-10 rounded-[50px] relative group overflow-hidden"
                >
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

          {/* Certifications Side */}
          <div className="lg:w-1/3">
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Recognition</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter">CERTS</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-3xl border border-border hover:border-primary transition-colors flex items-center gap-4"
                >
                  <Award className="text-primary flex-shrink-0" />
                  <span className="font-bold text-sm">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
