import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6",
          isScrolled ? "py-2" : "py-4"
        )}
      >
        <div
          className={cn(
            "max-w-[1400px] mx-auto flex items-center justify-between transition-all duration-500",
            isScrolled ? "glass dark:glass-dark rounded-full px-6 py-2 shadow-lg" : ""
          )}
        >
          {/* Logo */}
          <Link to="/" className="text-[24px] font-[800] tracking-tighter flex items-center group">
            <span className="text-black dark:text-white">MK</span>
            <span className="text-[#e11d48] group-hover:scale-125 transition-transform">.</span>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side - Lang & Email */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-xs font-bold text-muted-foreground uppercase">EN</span>
            <a
              href="mailto:kc893825@gmail.com"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform"
            >
              kc893825@gmail.com
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="lg:hidden absolute top-16 left-6 right-6 glass dark:glass-dark rounded-[40px] p-10 shadow-2xl"
            >
              <div className="flex flex-col gap-8 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-black tracking-tighter hover:text-primary transition-colors uppercase"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="mailto:kc893825@gmail.com"
                  className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold"
                >
                  kc893825@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
