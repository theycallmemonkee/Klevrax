"use client";

import React from "react";
import Marquee from "../ui/Marquee";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  institution?: string;
  avatarInitials: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "KlevraX's ability to adjust VR parameters based on real-time biofeedback is a major breakthrough. We've seen patients reach target alpha states in half the time.",
    author: "Dr. Sarah Jenkins",
    role: "Chief of Neurology",
    institution: "Stanford Cognitive Health",
    avatarInitials: "SJ",
  },
  {
    quote: "The VR spaces feel incredibly real and safe. It's like my brain gets a reset button. My daily panic symptoms have decreased by over 80%.",
    author: "Michael K.",
    role: "Patient Case #102",
    institution: "Generalized Anxiety Program",
    avatarInitials: "MK",
  },
  {
    quote: "Integrating telemetry and biofeedback loops gives clinical therapists insights that were previously impossible to track during active sessions.",
    author: "Dr. Raymond Vance",
    role: "Director of Research",
    institution: "Cognitive Health Institute",
    avatarInitials: "RV",
  },
  {
    quote: "Working with KlevraX changed how I handle high-stress workloads. The visual dashboards help me see exactly how my resilience is strengthening.",
    author: "Elena R.",
    role: "Stress Management User",
    institution: "Autonomic Balance Study",
    avatarInitials: "ER",
  },
  {
    quote: "Our evaluations showed high patient compliance and satisfaction scores. KlevraX is leading the medical-tech charge in neuropsychiatry.",
    author: "Dr. Aris Thorne",
    role: "Associate Professor",
    institution: "Neurobiology Center",
    avatarInitials: "AT",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#0F0820] overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb glow-orb-secondary w-[500px] h-[500px] top-[20%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-xs font-semibold text-accent tracking-wider uppercase font-display mb-3">
            Clinical Reviews
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
            Trusted by Doctors. Empowering Patients.
          </h3>
          <p className="text-white/60 text-base sm:text-lg">
            Hear from the medical professionals guiding KlevraX&apos;s clinical algorithms, and the patients experiencing the neurological benefits of immersive therapy.
          </p>
        </div>

        {/* Testimonials Infinite Marquee */}
        <div className="w-full relative py-6">
          {/* Masking gradients on sides to fade cards in/out nicely */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0F0820] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0F0820] to-transparent z-20 pointer-events-none" />

          <Marquee speed={32} pauseOnHover={true} className="gap-6">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="glass-card w-[340px] sm:w-[400px] flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-[#120A27]/20 select-none hover:border-accent/20 transition-colors duration-300"
              >
                <div>
                  <Quote className="w-8 h-8 text-accent/20 mb-4" />
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed italic mb-8 font-normal">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  <div className="w-10 h-10 rounded-full bg-accent-muted/40 border border-accent/20 flex items-center justify-center font-bold text-accent text-sm font-display">
                    {test.avatarInitials}
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white font-display leading-none mb-1">
                      {test.author}
                    </h5>
                    <span className="text-[10px] text-white/40 block font-normal">
                      {test.role} {test.institution ? `— ${test.institution}` : ""}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
