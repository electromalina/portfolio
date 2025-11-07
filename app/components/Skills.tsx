"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiAdobexd,
  SiAdobephotoshop,
  SiCanva,
  SiCss3,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillCategoryKey = "frontend" | "backend" | "design";

type SkillItem = {
  name: string;
  icon: IconType;
};

type SkillCategory = {
  title: string;
  items: SkillItem[];
};

const skillCategories: Record<SkillCategoryKey, SkillCategory> = {
  frontend: {
    title: "Front-end",
    items: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
    
    ],
  },
  backend: {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "REST APIs", icon: SiFastapi },
      { name: "Git", icon: SiGit },
    ],
  },
  design: {
    title: "Design",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Photoshop", icon: SiAdobephotoshop },
    ],
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] =
    useState<SkillCategoryKey>("frontend");

  const activeSkills = skillCategories[activeCategory];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 snap-section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
          {(["frontend", "backend", "design"] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-6 sm:px-8 py-3 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer ${
                activeCategory === category
                  ? "bg-primary text-background shadow-lg shadow-primary/40 scale-[1.03]"
                  : "glass-card text-foreground/75 hover:text-foreground hover:shadow-md"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        <div
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto"
        >
          {activeSkills.items.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.name}
                className="group flex flex-col items-center justify-center gap-2 sm:gap-3 text-center transition-colors duration-300"
              >
                <span className="text-sm font-medium tracking-wide text-foreground/80 uppercase transition-colors duration-300 group-hover:text-primary">
                  {item.name}
                </span>
                <IconComponent className="w-10 h-10 sm:w-14 sm:h-14 text-foreground/70 transition-colors duration-300 group-hover:text-primary" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
