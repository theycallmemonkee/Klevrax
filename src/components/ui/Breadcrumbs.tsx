"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

// Route segment mapper to clinical/readable labels
const segmentLabelMap: Record<string, string> = {
  about: "About Us",
  workshops: "Workshops & Awareness",
  schools: "School Wellbeing",
  colleges: "College Programs",
  corporates: "Corporate Wellness",
  ngos: "NGO & Community",
  "klevrax-vr": "KlevraX VR Platform",
  features: "Features",
  benefits: "Benefits",
  "research-impact": "Research & Impact",
  india: "Mental Health In India",
  global: "Global Crisis",
  "our-impact": "Our Impact",
  resources: "Resources Hub",
  blog: "Blog",
  guides: "Guides",
  faqs: "FAQs",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null; // No breadcrumbs on Home page

  const pathSegments = pathname.split("/").filter((item) => item);

  return (
    <nav aria-label="breadcrumb" className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4 relative z-20 flex items-center">
      <ol className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/40">
        <li>
          <Link href="/" className="hover:text-white transition-colors duration-300">
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const label = segmentLabelMap[segment] || segment.replace(/-/g, " ");

          return (
            <React.Fragment key={href}>
              <ChevronRight className="w-3.5 h-3.5 text-white/20" />
              <li>
                {isLast ? (
                  <span className="text-accent font-semibold">{label}</span>
                ) : (
                  <Link href={href} className="hover:text-white transition-colors duration-300">
                    {label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
