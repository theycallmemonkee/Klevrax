"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../ui/Logo";
import MagneticButton from "../ui/MagneticButton";

interface MegaLink {
  name: string;
  href: string;
  desc: string;
}

interface NavCategory {
  name: string;
  href: string;
  links?: MegaLink[];
}

const navigationStructure: NavCategory[] = [
  { name: "Home", href: "/" },
  {
    name: "KlevraX VR",
    href: "/klevrax-vr",
    links: [
      { name: "VR Platform", href: "/klevrax-vr", desc: "Immersive virtual reality clinical settings." },
      { name: "VR Features", href: "/klevrax-vr/features", desc: "Real-time biofeedback and analytics." },
      { name: "Benefits of VR", href: "/klevrax-vr/benefits", desc: "Clinical retention and rapid stress relief." },
      { name: "Book Demo", href: "https://calendly.com/klevraxprivatelimited01/30min", desc: "Schedule a live diagnostic presentation." },
    ],
  },
  {
    name: "KlevraX Workshops",
    href: "/workshops",
    links: [
      { name: "Overview", href: "/workshops", desc: "Discover our mental wellness initiatives." },
      { name: "Schools", href: "/workshops/schools", desc: "Wellbeing programs for students and parents." },
      { name: "Colleges", href: "/workshops/colleges", desc: "Resilience workshops for career and study stress." },
      { name: "Corporates", href: "/workshops/corporates", desc: "Burnout prevention for modern workforces." },
      { name: "NGOs & Communities", href: "/workshops/ngos", desc: "Awareness camps in underserved sectors." },
    ],
  },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (catName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(catName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 py-4 ${
        mobileOpen ? "z-[10000]" : "z-[9999]"
      } ${
        scrolled ? "px-4 lg:px-8" : "px-4 lg:px-12"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between rounded-full py-2.5 px-6 transition-all duration-500 ${
          scrolled || mobileOpen
            ? "glass-card border-white/10 bg-dark/70 shadow-[0_10px_30px_-10px_rgba(15,8,32,0.8)]"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo size={scrolled ? 32 : 36} />
        </Link>

        {/* Desktop Mega Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {navigationStructure.map((cat) => {
            if (!cat.links) {
              const isActive = pathname === cat.href;
              return (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className={`text-[11px] font-bold uppercase tracking-widest py-2 transition-colors relative group ${
                    isActive ? "text-accent" : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-accent transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            }

            // Mega Dropdown trigger
            const hasActiveChild = cat.links.some((l) => pathname === l.href) || pathname === cat.href;
            const isDropdownOpen = activeDropdown === cat.name;

            return (
              <div
                key={cat.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={cat.href}
                  className={`text-[11px] font-bold uppercase tracking-widest py-2 flex items-center gap-1 cursor-pointer transition-colors relative z-20 ${
                    hasActiveChild || isDropdownOpen ? "text-accent" : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat.name}
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
                </Link>

                {/* Hover tolerance area bridge */}
                {isDropdownOpen && (
                  <div className="absolute top-[80%] left-1/2 -translate-x-1/2 w-[380px] h-[30px] bg-transparent pointer-events-auto z-10" />
                )}

                {/* Glassmorphic Dropdown Panel */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[380px] rounded-2xl premium-dropdown p-5 shadow-2xl z-[10000] transition-all duration-[250ms] ease-out ${
                    isDropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="space-y-3.5">
                    {cat.links.map((link) => {
                      const isLinkActive = pathname === link.href;
                      const isExternal = link.href.startsWith("http");
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className={`block p-3 rounded-xl transition-all duration-300 ${
                            isLinkActive ? "bg-accent-muted/40 border border-accent/20" : "hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          <span className={`text-[13px] font-semibold tracking-wide block ${isLinkActive ? "text-accent" : "text-white"}`}>
                            {link.name}
                          </span>
                          <span className="text-[11px] text-white/50 block mt-1.5 font-normal leading-relaxed">
                            {link.desc}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <MagneticButton
            as="a"
            href="https://calendly.com/klevraxprivatelimited01/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-[10px] font-bold text-white border border-accent/20 bg-accent-muted hover:bg-accent/20 hover:border-accent/40 shadow-sm shadow-accent/5 uppercase tracking-wider inline-block"
          >
            Book Demo
          </MagneticButton>
        </div>

        {/* Mobile Hamburger toggle (morphing lines via motion) */}
        <button
          className="lg:hidden w-10 h-10 rounded-full glass-card border-white/10 flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer hover:bg-white/5 relative z-50 transition-all duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-5 h-[1.5px] bg-white rounded-full block"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-5 h-[1.5px] bg-white rounded-full block"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-5 h-[1.5px] bg-white rounded-full block"
          />
        </button>
      </div>

      {/* Mobile Glassmorphic Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-40 bg-dark backdrop-blur-2xl lg:hidden flex flex-col pt-28 px-6 pb-8 border-b border-white/10 overflow-hidden"
          >
            <div className="flex-1 overflow-y-auto space-y-6 scrollbar-none pr-2 py-4">
              {navigationStructure.map((cat, idx) => {
                if (!cat.links) {
                  const isActive = pathname === cat.href;
                  return (
                    <motion.div
                      key={cat.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 + 0.1 }}
                    >
                      <Link
                        href={cat.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block text-lg font-bold font-display tracking-wide uppercase ${
                          isActive ? "text-accent" : "text-white hover:text-accent transition-colors"
                        }`}
                      >
                        {cat.name}
                      </Link>
                    </motion.div>
                  );
                }

                // Accordion style link listing
                const isAccordionOpen = activeDropdown === cat.name;

                return (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="space-y-3"
                  >
                    <button
                      onClick={() => setActiveDropdown(isAccordionOpen ? null : cat.name)}
                      className="w-full flex items-center justify-between text-lg font-bold font-display tracking-wide uppercase text-white cursor-pointer hover:text-accent transition-colors"
                    >
                      {cat.name}
                      <ChevronDown className="w-5 h-5 transition-transform" style={{ transform: isAccordionOpen ? "rotate(180deg)" : "rotate(0)" }} />
                    </button>

                    <div
                      className={`pl-4 space-y-3.5 overflow-hidden transition-all duration-300 ${
                        isAccordionOpen ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      {cat.links.map((link) => {
                        const isExternal = link.href.startsWith("http");
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={`block text-xs font-semibold uppercase tracking-wider py-1.5 ${
                              pathname === link.href ? "text-accent" : "text-white/60 hover:text-white transition-colors"
                            }`}
                          >
                            {link.name}
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navigationStructure.length * 0.05 + 0.15 }}
              className="pt-6 border-t border-white/5 flex flex-col gap-4"
            >
              <a
                href="https://calendly.com/klevraxprivatelimited01/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full py-4 rounded-full text-xs font-bold text-center text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-md uppercase tracking-wider transition-all hover:scale-[1.02] active:scale-95"
              >
                Book Demo Session
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
