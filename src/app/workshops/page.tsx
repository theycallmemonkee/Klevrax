"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lenis from "lenis";
import { School, GraduationCap, Building2, Users2 } from "lucide-react";

import NeuralBackground from "@/components/visuals/NeuralBackground";
import Navbar from "@/components/sections/Navbar";
import FinalCta from "@/components/sections/FinalCta";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import Marquee from "@/components/ui/Marquee";

// Workshops stats definition
const metrics = [
  { target: 120000, suffix: "+", label: "People Reached" },
  { target: 680, suffix: "+", label: "Workshops Conducted" },
  { target: 45, suffix: "+", label: "Cities Covered" },
  { target: 95, suffix: "+", label: "Partner Organizations" },
];

const targetAudiences = [
  {
    title: "Schools",
    icon: <School className="w-6 h-6 text-accent" />,
    description: "Mental health awareness sessions for students, teachers and parents. Focuses on developmental milestones, emotional vocabulary, and stress identification.",
  },
  {
    title: "Colleges",
    icon: <GraduationCap className="w-6 h-6 text-accent" />,
    description: "Stress management, career anxiety and emotional wellbeing workshops. Equip young adults with tools to build cognitive and career resilience.",
  },
  {
    title: "Corporates",
    icon: <Building2 className="w-6 h-6 text-accent" />,
    description: "Employee wellbeing programs, burnout prevention and workplace mental health. Establish structured, empathetic stress-reduction practices.",
  },
  {
    title: "NGOs & Communities",
    icon: <Users2 className="w-6 h-6 text-accent" />,
    description: "Mental health awareness initiatives for underserved communities. Distributing clinical literacy, support guides, and group mindfulness exercises.",
  },
];

const timelineSteps = [
  {
    phase: "01",
    title: "Planning",
    description: "We collaborate with organizers to tailor content based on cohort demographics, mapping specific stress indicators and wellness objectives.",
  },
  {
    phase: "02",
    title: "Training",
    description: "Facilitators undergo clinical training to deliver trauma-informed, culturally sensitive material that aligns with professional mental health practices.",
  },
  {
    phase: "03",
    title: "Workshop Delivery",
    description: "Engaging interactive sessions incorporating guided meditation, bio-telemetry demonstrations, and immersive VR baseline environments.",
  },
  {
    phase: "04",
    title: "Follow-Up Support",
    description: "Ongoing wellness tracking and custom toolkits shared post-session. Providing resources to establish permanent institutional support cycles.",
  },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + easeProgress * (target - start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [inView, target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold font-display tracking-tight text-white mb-2">
      {Math.floor(count).toLocaleString()}
      {suffix}
    </div>
  );
}

export default function WorkshopsPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const cardContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardItemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="relative min-h-screen bg-dark text-white select-none">
      <NeuralBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden flex items-center justify-center min-h-[70vh]">
        <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-[10%] left-[-10%]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/20 bg-accent-muted/50 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent tracking-wider uppercase font-display">
              Public Advocacy & Awareness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-8"
          >
            Building A <br className="sm:hidden" />
            Mentally Healthier <span className="text-gradient-purple">India</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Through institutional awareness programs, interactive workshops, student training camps, and immersive clinical educational experiences, we are removing the stigma around psychological care.
          </motion.p>
        </div>
      </section>

      {/* Target Audiences Grid */}
      <section className="py-20 bg-[#0A0517]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
              Cohort Modules
            </h2>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
              Tailored Programs for Diverse Communities
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              Mental health is not one-size-fits-all. We adapt our diagnostic and stress literacy workshops to match the unique needs of school classrooms, campus grounds, work offices, and civic centers.
            </p>
          </div>

          <motion.div
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {targetAudiences.map((audience) => (
              <motion.div key={audience.title} variants={cardItemVariants}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border border-white/5 bg-[#120A27]/20 hover:shadow-[0_20px_40px_rgba(124,58,237,0.15)] transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-accent-muted/40 flex items-center justify-center border border-accent/20 mb-5 sm:mb-6">
                        {audience.icon}
                      </div>
                      <h4 className="text-lg font-semibold font-display text-white mb-3">
                        {audience.title}
                      </h4>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                        {audience.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Workshop Experience Timeline */}
      <section className="py-24 bg-[#0F0820] relative">
        <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[15%] right-[-10%] animate-drift" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
              Delivery Workflow
            </h2>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
              The Journey of a KlevraX Workshop
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              A clinical framework guarantees that our workshops generate structural value, emotional safe harbors, and actionable recovery pathways.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Center Line Connector (SVG with glowing progress trail) */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 -translate-x-[1.5px] w-[3px]">
              <div className="absolute inset-0 bg-white/5" />
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <motion.line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="url(#timeline-glow)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={isTimelineInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="timeline-glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#5B21B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="space-y-12">
              {timelineSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div key={step.phase} className="flex flex-col md:flex-row items-start justify-between relative">
                    {/* Node Dot with pulse and fade-in */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isTimelineInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.2 }}
                      className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
                    >
                      <div className="w-10 h-10 rounded-full border border-accent bg-[#0F0820] flex items-center justify-center text-xs font-bold text-accent shadow-[0_0_15px_rgba(167,139,250,0.3)] relative">
                        <span className="relative z-10">{step.phase}</span>
                        <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping pointer-events-none" />
                      </div>
                    </motion.div>

                    <div className={`w-full md:w-[45%] ml-16 md:ml-0 ${isEven ? "md:text-right" : "md:text-left md:order-2"}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: idx * 0.15 }}
                        className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 bg-[#120A27]/25"
                      >
                        <h4 className="text-lg font-semibold font-display text-white mb-2">{step.title}</h4>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.description}</p>
                      </motion.div>
                    </div>

                    {/* Empty spacer for side symmetry on desktop */}
                    <div className="hidden md:block md:w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Impact Section Counters */}
      <section className="py-24 bg-[#0A0517] relative overflow-hidden">
        <div className="glow-orb glow-orb-secondary w-[400px] h-[400px] bottom-[-10%] right-[-10%] animate-drift" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accent/30 text-center flex flex-col items-center relative group"
              >
                {/* Accent top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                
                <CountUp target={metric.target} suffix={metric.suffix} />
                
                <div className="mt-4 px-3 py-1 rounded-full bg-accent-muted/40 border border-accent/15">
                  <span className="text-[10px] text-accent font-bold font-display uppercase tracking-widest">
                    {metric.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Gallery Section */}
      <section className="py-24 bg-[#0F0820]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
              Deployment Gallery
            </h2>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6">
              KlevraX Workshops In Action
            </h3>
            <p className="text-white/60 text-sm sm:text-base">
              A visual glimpse of clinical integrations, student cohorts, corporate seminars, and community meditation sessions conducted across Indian cities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
            {[
              { title: "IIT Delhi Campus", subtitle: "2,400+ students reached", aspect: "aspect-[4/5]", stagger: "lg:translate-y-0" },
              { title: "Noida Public School", subtitle: "Emotional wellness camp", aspect: "aspect-square", stagger: "lg:translate-y-12" },
              { title: "Wipro Corporate HQ", subtitle: "Burnout reduction workshop", aspect: "aspect-[4/5]", stagger: "lg:-translate-y-6" },
              { title: "WHO Outreach Camp", subtitle: "Rural awareness drives", aspect: "aspect-square", stagger: "lg:translate-y-8" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`glass-card rounded-3xl relative overflow-hidden group ${img.aspect} border border-white/5 bg-[#120A27]/25 ${img.stagger} transition-all duration-500 hover:border-accent/20`}
              >
                {/* Background placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1E0F3E] via-[#0F0820] to-[#2D1B54] opacity-85 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-60" />
                
                {/* Subtle Neural Grid Effect overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                    {img.subtitle}
                  </span>
                  <h4 className="text-sm font-bold font-display text-white group-hover:text-accent transition-colors duration-300">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos Marquee Section */}
      <section className="py-16 border-t border-b border-white/5 bg-[#0F0820]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center">
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block font-display">
            Trusted by Leading Educational, Clinical and Corporate Institutes
          </span>
        </div>
        
        <Marquee speed={35} className="opacity-60 hover:opacity-90 transition-opacity duration-300">
          {[
            "AIIMS Delhi",
            "NIMHANS India",
            "Wipro Limited",
            "IIT Delhi",
            "Stanford Health Research",
            "WHO Outreach Association",
            "Fortis Healthcare",
            "Manipal Hospitals",
            "Tech Mahindra Wellness",
          ].map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center px-10 py-2.5 glass-card rounded-full border border-white/5 bg-[#120A27]/20 text-xs font-semibold tracking-wider text-white font-display">
              {partner}
            </div>
          ))}
        </Marquee>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 bg-[#0F0820] relative text-center">
        <div className="glow-orb glow-orb-primary w-[600px] h-[600px] top-[10%] left-[20%]" />
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Let&apos;s Build A Mentally Healthier Future Together
          </h3>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Partner with KlevraX to host mental wellbeing programs at your school, campus, corporate headquarters, or civic community centers.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              as="a"
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-primary hover:bg-[#6D28D9] border border-primary/20 shadow-md shadow-primary/10 uppercase tracking-wider inline-block"
            >
              Book Workshop
            </MagneticButton>
            <MagneticButton
              as="a"
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider inline-block"
            >
              Become A Partner
            </MagneticButton>
            <MagneticButton
              as="a"
              href="https://calendly.com/klevraxprivatelimited01/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-bold text-white/90 border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-white/10 uppercase tracking-wider inline-block"
            >
              Contact Team
            </MagneticButton>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
