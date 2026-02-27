import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

const profiles = [
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/mudavath_kumar/",
    description:
      "Solving DSA problems and sharpening algorithmic thinking with daily challenges.",
    color: "from-[#FFA116]/15 to-[#FFA116]/5",
    borderHover: "hover:border-[#FFA116]/40",
    iconBg: "bg-[#FFA116]/10",
    iconColor: "text-[#FFA116]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/mudavathkumar",
    description:
      "Competing in rated contests and practicing competitive programming problems.",
    color: "from-[#1F8ACB]/15 to-[#1F8ACB]/5",
    borderHover: "hover:border-[#1F8ACB]/40",
    iconBg: "bg-[#1F8ACB]/10",
    iconColor: "text-[#1F8ACB]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
      </svg>
    ),
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/mudavath_kumar",
    description:
      "Participating in monthly cook-offs and long challenges to improve problem-solving.",
    color: "from-[#5B4638]/15 to-[#5B4638]/5",
    borderHover: "hover:border-[#5B4638]/40",
    iconBg: "bg-[#5B4638]/10",
    iconColor: "text-[#5B4638]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M11.007.22C5.042.22.22 5.042.22 11.007c0 5.966 4.822 10.787 10.787 10.787s10.787-4.822 10.787-10.787C21.794 5.042 16.972.22 11.007.22zm3.947 14.774c-.345.345-.89.47-1.467.338-.68-.16-9.142.466-4.66-5.136.534-.667 1.078-1.078 1.6-1.423-.367-.667-5.468-2.268-1.912-5.024 1.768-1.368 4.313 1.489 4.758 2.401.212-.3.534-.623.934-.956C17.375 2.5 20.202 7.786 16.09 8.81c1.2.979 2.035 2.313 1.423 2.946-.801.834-1.89-.089-2.614-.99-.656.923-1.467 1.645-2.236 2.181.623.5 3.058 2.224 2.29 2.046z" />
      </svg>
    ),
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/mudavathkumar",
    description:
      "Earning badges and certifications in languages, algorithms, and data structures.",
    color: "from-[#00EA64]/15 to-[#00EA64]/5",
    borderHover: "hover:border-[#00EA64]/40",
    iconBg: "bg-[#00EA64]/10",
    iconColor: "text-[#00EA64]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V7.057c0-.143-.117-.258-.258-.258h-.882c-.14 0-.256.115-.256.258v9.884c0 .143.117.258.256.258h.882c.141 0 .258-.115.258-.258v-3.875h4.074v3.875c0 .143.115.258.258.258h.88c.142 0 .258-.115.258-.258V7.057c0-.143-.116-.258-.258-.258h-.88z" />
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/mudavath_kumar",
    description:
      "Learning core CS concepts and practicing coding problems across various domains.",
    color: "from-[#2F8D46]/15 to-[#2F8D46]/5",
    borderHover: "hover:border-[#2F8D46]/40",
    iconBg: "bg-[#2F8D46]/10",
    iconColor: "text-[#2F8D46]",
    logo: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.16-.677h3.679a.623.623 0 0 0 .426-.165.584.584 0 0 0 .165-.426V11.19a.57.57 0 0 0-.165-.424.614.614 0 0 0-.426-.165h-3.832a3.31 3.31 0 0 1 .676-1.396 3.362 3.362 0 0 1 1.078-.937 3.868 3.868 0 0 1 1.374-.498 4.55 4.55 0 0 1 1.466-.031 3.3 3.3 0 0 1 1.36.547l.014.007a.582.582 0 0 0 .793-.174l.694-1.188a.57.57 0 0 0-.072-.665l-.007-.007a5.02 5.02 0 0 0-1.698-.974 6.572 6.572 0 0 0-1.964-.45 7.202 7.202 0 0 0-2.075.137 5.847 5.847 0 0 0-1.876.776 5.3 5.3 0 0 0-1.437 1.344 5.297 5.297 0 0 0-.82 1.719h-1.091a.57.57 0 0 0-.424.165.584.584 0 0 0-.165.424v1.235c0 .163.06.309.165.426a.57.57 0 0 0 .424.165h.774a5.278 5.278 0 0 0 .84 2.394 5.31 5.31 0 0 0 1.44 1.337 5.86 5.86 0 0 0 1.877.773c.68.163 1.382.2 2.076.137a6.58 6.58 0 0 0 1.964-.449 5.024 5.024 0 0 0 1.697-.974l.008-.007a.57.57 0 0 0 .072-.665l-.694-1.188zM2.552 14.315c.142.28.333.532.564.745.243.227.545.443.904.592a3.326 3.326 0 0 0 1.297.353 4.556 4.556 0 0 0 1.418-.082c.46-.11.9-.296 1.297-.547a3.79 3.79 0 0 0 2.135-2.078c.076-.223.122-.454.16-.677H6.648a.623.623 0 0 1-.426-.165.584.584 0 0 1-.165-.426V11.19c0-.163.06-.31.165-.424a.614.614 0 0 1 .426-.165h3.832c-.047-.49-.2-.96-.449-1.396a3.362 3.362 0 0 0-1.078-.937 3.868 3.868 0 0 0-1.374-.498 4.55 4.55 0 0 0-1.466-.031c-.47.07-.93.229-1.36.547l-.014.007a.582.582 0 0 1-.793-.174l-.694-1.188a.57.57 0 0 1 .072-.665l.007-.007a5.02 5.02 0 0 1 1.698-.974 6.572 6.572 0 0 1 1.964-.45 7.202 7.202 0 0 1 2.075.137 5.847 5.847 0 0 1 1.876.776 5.3 5.3 0 0 1 1.437 1.344c.36.505.636 1.081.82 1.719h1.091a.57.57 0 0 1 .424.165c.104.115.165.261.165.424v1.235a.584.584 0 0 1-.165.426.57.57 0 0 1-.424.165h-.774a5.278 5.278 0 0 1-.84 2.394 5.31 5.31 0 0 1-1.44 1.337 5.86 5.86 0 0 1-1.877.773 7.186 7.186 0 0 1-2.076.137 6.58 6.58 0 0 1-1.964-.449 5.024 5.024 0 0 1-1.697-.974l-.008-.007a.57.57 0 0 1-.072-.665l.694-1.188z" />
      </svg>
    ),
  },
];

export const CodingProfiles = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="coding-profiles"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-5 sm:px-6 md:px-[120px] bg-[#fafaf8] overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f0f0eb] rounded-full blur-[140px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[13px] font-[600] uppercase tracking-[4px] text-[#888] mb-3">
            Competitive Programming
          </p>
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-[800] text-black leading-[1] tracking-[-1px]">
            Coding Profiles
          </h2>
          <div className="mt-4 h-[3px] w-[60px] bg-black rounded-full" />
        </motion.div>

        {/* Profile cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-gradient-to-br ${profile.color} rounded-3xl p-7 border border-black/5 ${profile.borderHover} hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${profile.iconBg} rounded-2xl flex items-center justify-center mb-5 ${profile.iconColor} group-hover:scale-110 transition-transform duration-300`}
              >
                {profile.logo}
              </div>

              {/* Content */}
              <h3 className="text-[18px] font-[700] text-black mb-2">
                {profile.name}
              </h3>
              <p className="text-[13px] text-[#666] leading-relaxed mb-5 flex-1">
                {profile.description}
              </p>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-[13px] font-[600] text-black/70 group-hover:text-black group-hover:gap-3 transition-all duration-300">
                Visit Profile
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </div>

              {/* Decorative glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/[0.02] rounded-full blur-2xl group-hover:bg-black/[0.06] transition-all duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
