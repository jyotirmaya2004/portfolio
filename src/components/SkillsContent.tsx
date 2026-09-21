"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FaBrain, FaCode, FaCss3Alt, FaDocker, FaEye,
  FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs,
  FaLinux, FaNodeJs, FaPhp, FaPython, FaReact,
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiExpress, SiFastapi, SiFlask,
  SiMongodb, SiMysql, SiNextdotjs, SiPostgresql,
  SiR, SiScikitlearn, SiSupabase, SiTailwindcss,
  SiTensorflow, SiTypescript,
} from "react-icons/si";
import {
  HiOutlineCommandLine,
  HiOutlineSquares2X2,
  HiOutlineServerStack,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { skillCategories, type SkillItem } from "@/data/skills";
import PageHeader from "@/components/PageHeader";

/* ─── Tech icon & color maps ──────────────────────────────────── */
const skillIcons: Record<string, IconType> = {
  Python: FaPython, Java: FaJava, C: SiC, "C++": SiCplusplus, R: SiR,
  JavaScript: FaJs, TypeScript: SiTypescript, PHP: FaPhp,
  HTML: FaHtml5, CSS: FaCss3Alt, React: FaReact,
  "Next.js": SiNextdotjs, "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs, Express: SiExpress, Flask: SiFlask,
  FastAPI: SiFastapi, PostgreSQL: SiPostgresql, MySQL: SiMysql,
  MongoDB: SiMongodb, Supabase: SiSupabase, TensorFlow: SiTensorflow,
  "Scikit-learn": SiScikitlearn, "Machine Learning": FaBrain,
  "Computer Vision": FaEye, Git: FaGitAlt, GitHub: FaGithub,
  Docker: FaDocker, Linux: FaLinux,
};

const brandColors: Record<string, string> = {
  Python: "#3776AB", Java: "#E76F00", C: "#00599C", "C++": "#00599C",
  R: "#276DC3", JavaScript: "#c5a800", TypeScript: "#3178C6",
  React: "#33b8d6", "Next.js": "#888", "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933", FastAPI: "#009688", Express: "#888",
  Flask: "#888", PostgreSQL: "#4169E1", MongoDB: "#47A248",
  MySQL: "#4479A1", Supabase: "#3ECF8E", TensorFlow: "#FF6F00",
  "Scikit-learn": "#F7931E", "Machine Learning": "#D4A813",
  "Computer Vision": "#7C5CBF", Git: "#F05032", GitHub: "#888",
  Docker: "#2496ED", Linux: "#c5a800", HTML: "#E34F26",
  CSS: "#1572B6", PHP: "#777BB4",
};

const levelLabel: Record<1 | 2 | 3, string> = {
  3: "Advanced",
  2: "Proficient",
  1: "Familiar",
};

/* ─── Category metadata with HeroIcons ───────────────────────── */
const categoryMeta: Record<string, { Icon: IconType; subtitle: string; accent: string }> = {
  Languages:  { Icon: HiOutlineCommandLine,      subtitle: "Core programming languages",          accent: "#3776AB" },
  Frontend:   { Icon: HiOutlineSquares2X2,        subtitle: "UI frameworks & styling tools",       accent: "#33b8d6" },
  Backend:    { Icon: HiOutlineServerStack,        subtitle: "Server-side runtimes & APIs",         accent: "#339933" },
  Databases:  { Icon: HiOutlineCircleStack,        subtitle: "Data storage & query systems",        accent: "#4169E1" },
  "AI & ML":  { Icon: HiOutlineCpuChip,           subtitle: "ML, deep learning & vision AI",       accent: "#D4A813" },
  DevOps:     { Icon: HiOutlineWrenchScrewdriver,  subtitle: "Dev tools, containers & infra",       accent: "#F05032" },
};

/* ─── Single skill chip ───────────────────────────────────────── */
function SkillChip({ skill }: { skill: SkillItem }) {
  const Icon = skillIcons[skill.name] || FaCode;
  const color = brandColors[skill.name] || "var(--accent)";

  return (
    <div className="group flex items-center gap-3.5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3.5 transition-all duration-200 hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface)] hover:-translate-y-px hover:shadow-sm">
      {/* Icon */}
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
        style={{ color, backgroundColor: `${color}18` }}
      >
        <Icon className="size-5" aria-hidden />
      </div>

      {/* Text */}
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-tight tracking-tight text-[var(--fg)]">
          {skill.name}
        </p>
        <p className="mt-0.5 text-[11px] font-medium tracking-wide text-[var(--fg-subtle)]">
          {levelLabel[skill.level]}
        </p>
      </div>

      {/* Level dots */}
      <div className="flex items-center gap-[5px]" aria-label={levelLabel[skill.level]}>
        {[1, 2, 3].map(d => (
          <span
            key={d}
            className="size-[7px] rounded-full transition-colors"
            style={{ backgroundColor: d <= skill.level ? color : "var(--border)" }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Accordion item ──────────────────────────────────────────── */
function AccordionItem({
  category,
  skills,
  isOpen,
  onToggle,
}: {
  category: string;
  skills: SkillItem[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const meta = categoryMeta[category];
  const CatIcon = meta?.Icon ?? HiOutlineCommandLine;
  const accent = meta?.accent ?? "var(--accent)";

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "border-[var(--border-hover)] bg-[var(--bg-surface)] shadow-sm"
          : "border-[var(--border)] bg-[var(--bg-surface)]"
      }`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-150 hover:bg-[var(--bg-elevated)] focus:outline-none"
      >
        {/* Category icon */}
        <div
          className="flex size-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200"
          style={{
            backgroundColor: isOpen ? `${accent}18` : "var(--bg-elevated)",
            color: isOpen ? accent : "var(--fg-muted)",
          }}
        >
          <CatIcon className="size-5" aria-hidden />
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <p
            className="text-[15px] font-bold leading-tight tracking-tight transition-colors"
            style={{ color: isOpen ? accent : "var(--fg)" }}
          >
            {category}
          </p>
          <p className="mt-0.5 text-[12px] font-medium text-[var(--fg-subtle)]">
            {meta?.subtitle}
          </p>
        </div>

        {/* Count */}
        <span
          className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide transition-colors"
          style={{
            backgroundColor: isOpen ? `${accent}18` : "var(--bg-elevated)",
            color: isOpen ? accent : "var(--fg-subtle)",
          }}
        >
          {skills.length}
        </span>

        {/* Chevron */}
        <svg
          className={`size-4 shrink-0 text-[var(--fg-subtle)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated body */}
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(skill => (
                <SkillChip key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function SkillsContent() {
  const [openCat, setOpenCat] = useState<string>(skillCategories[0].category);

  const totalSkills  = skillCategories.reduce((s, c) => s + c.skills.length, 0);
  const advancedCount = skillCategories.reduce((s, c) => s + c.skills.filter(sk => sk.level === 3).length, 0);

  return (
    <section id="skills" className="px-4 pb-24 pt-20 sm:px-6 sm:pt-24 lg:px-8" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          headingId="skills-heading"
          title="Skills"
          description="Technologies and tools I build with."
        />

        {/* Stats */}
        <div className="mb-8 flex items-center gap-8">
          {[
            { value: totalSkills,           label: "Technologies" },
            { value: skillCategories.length, label: "Domains" },
            { value: advancedCount,          label: "Advanced" },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-black tracking-tight text-[var(--accent)]">{value}</p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--fg-subtle)]">{label}</p>
              </div>
              {i < 2 && <div className="h-10 w-px bg-[var(--border)]" />}
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {skillCategories.map(cat => (
            <AccordionItem
              key={cat.category}
              category={cat.category}
              skills={cat.skills}
              isOpen={openCat === cat.category}
              onToggle={() => setOpenCat(p => p === cat.category ? "" : cat.category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
