import { motion, useInView } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { useRef, useState } from "react";

const certs = [
  {
    title: "24 Hour Hackathon Drill",
    issuer: "TechIn Community × Eduknox Technologies",
    year: "2025",
    description:
      "Participated in the 24 Hour Hackathon Drill organized by TechIn Community in collaboration with Connect Club (VMEG) and Eduknox Technologies.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20204246-QgEuh5PS2hU5r92hJd824mU8AKM4QK.png",
    tag: "Hackathon",
  },
  {
    title: "Certificate of Excellence — DSA MasterMind",
    issuer: "Lets Code Community · CodeClash",
    year: "2025",
    description:
      "Achieved 2023rd rank in DSA MasterMind - MCQ Elimination Round of CodeClash - The Battle of Logic & Code organized by Lets Code Community.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20204150-KL8Vuy9RWrStDZ9ExrikBNpQO0EKrQ.png",
    tag: "DSA",
  },
  {
    title: "Indian Independence Day Quiz 2025",
    issuer: "Ministry of Social Justice & MyGOV",
    year: "2025",
    description:
      "Successfully participated in the Indian Independence Day Quiz 2025 organized by Ministry of Social Justice and Empowerment and MyGOV.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-03%20at%2020.48.23_8371e830.jpg-QZmuA9qpgprBBC39nlVQ1h5jo4nZrg.jpeg",
    tag: "Quiz",
  },
  {
    title: "Building Agents with Vertex AI",
    issuer: "LinkedIn Learning",
    year: "2025",
    description:
      "Completed course on Building Agents with Vertex AI on LinkedIn Learning. Covers Intelligent Agents, Vertex, and Generative AI.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20204323-6y0nsQ6wqBc1rQ4rrsWUOUoxTVDymI.png",
    tag: "AI / Cloud",
  },
  {
    title: "GDG on Campus Solution Challenge",
    issuer: "Google Developer Groups × Hack2skill",
    year: "2025",
    description:
      "Participated in the GDG on Campus Solution Challenge, powered by Hack2skill. Certificate ID: 2025H2S01GSC-P35936",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-03%20at%2020.48.21_7850ea7a.jpg-4IcSspoWxiFiAePeNhrSXGhYOKwmUB.jpeg",
    tag: "Google",
  },
  {
    title: "Web Dev with Python & Django",
    issuer: "Connect Club × CodeTantra Experts",
    year: "2025",
    description:
      "Successfully completed the Hands-on Web Development with Python & Django session organized by Connect Club in collaboration with CDC, conducted by CodeTantra Experts.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20204113-77fspL2nmSycsf4xOFI1VRTN3ep7IZ.png",
    tag: "Django",
  },
  {
    title: "Microsoft AI Innovators Hub — AI Workshop",
    issuer: "Microsoft Campus, Gachibowli · July 19, 2025",
    year: "2025",
    description:
      "Certificate of Appreciation for successfully serving as a Participant at the AI Workshop held at Microsoft Campus Building I, Gachibowli, Hyderabad.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-03%20204132-3ZH69WAELva91WtkalrGO6swqoa8YD.png",
    tag: "Microsoft",
  },
  {
    title: "OpenAI Academy × NxtWave Regional Buildathon",
    issuer: "OpenAI Academy × NxtWave · Telangana",
    year: "2025",
    description:
      "Participated in the 2-day OpenAI Academy × NxtWave Regional Buildathon (Telangana), focused on building AI-based solutions and gaining hands-on experience in rapid product development and teamwork.",
    image:
      "https://pub-86684032f5a344d6b52f992207bec1a1.r2.dev/avatar/achievements/888c4ead-1c71-4553-80d8-121bf2f979bc.jpeg",
    tag: "OpenAI",
  },
  {
    title: "Gen AI Exchange Hackathon — Google Cloud & Hack2Skill",
    issuer: "Google Cloud × Hack2Skill",
    year: "2026",
    description:
      "Recognized for contributing to the Gen AI Exchange Hackathon 2025 by developing a prototype focused on combating misinformation using artificial intelligence. Worked on designing and implementing AI-driven solutions, strengthening skills in Generative AI.",
    image:
      "https://pub-86684032f5a344d6b52f992207bec1a1.r2.dev/avatar/achievements/94f95da8-c6be-4725-871d-3b8de85c23c2.png",
    tag: "AI / Cloud",
  },
  {
    title: "Certificate of Appreciation — IntelliCON 2025",
    issuer: "Global AI Hyderabad",
    year: "2025",
    description:
      "Received a Certificate of Appreciation for successfully participating in IntelliCON 2025, a technology and AI-focused conference organized by Global AI Hyderabad. Provided exposure to industry experts, emerging AI trends, and real-world applications.",
    image:
      "https://pub-86684032f5a344d6b52f992207bec1a1.r2.dev/avatar/achievements/8aa93c63-433c-437f-9348-20bc5bb6e6a8.png",
    tag: "AI Ops",
  },
];

const tagColors: Record<string, string> = {
  Hackathon: "bg-orange-500/15 text-orange-600 border-orange-500/30",
  DSA: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  Quiz: "bg-green-500/15 text-green-600 border-green-500/30",
  "AI / Cloud": "bg-purple-500/15 text-purple-600 border-purple-500/30",
  Google: "bg-red-500/15 text-red-600 border-red-500/30",
  Django: "bg-teal-500/15 text-teal-600 border-teal-500/30",
  Microsoft: "bg-sky-500/15 text-sky-600 border-sky-500/30",
  OpenAI: "bg-emerald-500/15 text-emerald-600 border-emerald-500/30",
  "AI Ops": "bg-violet-500/15 text-violet-600 border-violet-500/30",
  "Full Stack": "bg-indigo-500/15 text-indigo-600 border-indigo-500/30",
};


export const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [selected, setSelected] = useState<(typeof certs)[0] | null>(null);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-5 sm:px-6 md:px-[120px] bg-white overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f5f5f0] rounded-full blur-[120px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[13px] font-[600] uppercase tracking-[4px] text-[#888] mb-3">
            Achievements & Learning
          </p>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-[800] text-black leading-[1] tracking-[-1px]">
            Certifications
          </h2>
          <div className="mt-4 h-[3px] w-[60px] bg-black rounded-full" />
        </motion.div>

        {/* Grid — 3 columns on lg, 2 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onClick={() => setSelected(cert)}
              className="group cursor-pointer bg-[#f9f9f7] rounded-3xl overflow-hidden border border-black/5 hover:border-black/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col"
            >
              {/* Image — taller */}
              <div className="relative w-full h-[220px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Tag */}
                <span
                  className={`absolute top-4 left-4 text-[10px] font-[700] uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-sm ${tagColors[cert.tag] ?? "bg-black/10 text-black border-black/20"}`}
                >
                  {cert.tag}
                </span>
                {/* Year badge */}
                <span className="absolute top-4 right-4 text-[10px] font-[700] text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[15px] font-[700] text-black leading-snug mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-[12px] text-[#888] font-[500] line-clamp-1 mb-3">{cert.issuer}</p>
                <p className="text-[13px] text-[#555] leading-relaxed line-clamp-3 flex-1">
                  {cert.description}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[13px] font-[600] text-black group-hover:gap-2.5 transition-all">
                  <Award size={14} className="text-black/50" />
                  View Details <ExternalLink size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
            >
              <X size={16} />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full object-contain max-h-[60vh]"
            />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`text-[11px] font-[700] uppercase tracking-wider px-3 py-1 rounded-full border ${tagColors[selected.tag] ?? "bg-black/10 text-black border-black/20"}`}
                >
                  {selected.tag}
                </span>
                <span className="text-[11px] font-[600] text-[#888]">{selected.year}</span>
              </div>
              <h3 className="text-[22px] font-[800] text-black mb-1">{selected.title}</h3>
              <p className="text-[13px] font-[600] text-[#888] mb-4">{selected.issuer}</p>
              <p className="text-[15px] text-[#444] leading-relaxed">{selected.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
