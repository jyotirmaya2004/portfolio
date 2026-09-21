"use client";

import { useState, useMemo, type CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaBrain,
  FaCode,
  FaCss3Alt,
  FaDocker,
  FaEye,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiScikitlearn,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";

// ─── ICON & COLOR REGISTRY ──────────────────────────────────────────
interface TechNodeData {
  id: string;
  label: string;
  type: "experience" | "skill";
  category: string;
  color: string;
  icon: IconType;
  level?: 1 | 2 | 3;
  organization?: string;
  project?: string;
  role?: string;
  period?: string;
  description: string;
  technologies?: string[];
  highlights?: string[];
}

const techIcons: Record<string, IconType> = {
  Python: FaPython,
  "C++": SiCplusplus,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  PHP: FaPhp,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  Express: SiExpress,
  Flask: SiFlask,
  FastAPI: SiFastapi,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  TensorFlow: SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  "Machine Learning": FaBrain,
  "Computer Vision": FaEye,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Docker: FaDocker,
  Linux: FaLinux,
  NIELIT: FaBrain,
  "Infosys Springboard": FaCode,
};

const techColors: Record<string, string> = {
  Python: "#3776AB",
  "C++": "#00599C",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  PHP: "#777BB4",
  HTML: "#E34F26",
  CSS: "#1572B6",
  React: "#61DAFB",
  "Next.js": "var(--fg)",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  Express: "var(--fg)",
  Flask: "var(--fg)",
  FastAPI: "#009688",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Supabase: "#3ECF8E",
  TensorFlow: "#FF6F00",
  "Scikit-learn": "#F7931E",
  "Machine Learning": "#b8860b",
  "Computer Vision": "#8A2BE2",
  Git: "#F05032",
  GitHub: "var(--fg)",
  Docker: "#2496ED",
  Linux: "#FCC624",
  NIELIT: "var(--accent)",
  "Infosys Springboard": "#0A66C2",
};

// ─── ORBITAL POSITIONS CONFIGURATION ────────────────────────────────
// Concentric rings: Inner = 0.28, Mid = 0.385, Outer = 0.47
const orbitalPositions: Record<string, { radius: number; angle: number }> = {
  // Orbit 1: Experiences (2) + Core Foundations (4) (60° intervals)
  NIELIT: { radius: 0.27, angle: -90 },
  Python: { radius: 0.27, angle: -30 },
  TypeScript: { radius: 0.27, angle: 30 },
  "Infosys Springboard": { radius: 0.27, angle: 90 },
  "Next.js": { radius: 0.27, angle: 150 },
  TensorFlow: { radius: 0.27, angle: 210 },

  // Orbit 2: Core Engineering & AI (10 nodes, 36° intervals)
  React: { radius: 0.375, angle: -72 },
  "Machine Learning": { radius: 0.375, angle: -36 },
  "Node.js": { radius: 0.375, angle: 0 },
  "Computer Vision": { radius: 0.375, angle: 36 },
  PostgreSQL: { radius: 0.375, angle: 72 },
  "Tailwind CSS": { radius: 0.375, angle: 108 },
  FastAPI: { radius: 0.375, angle: 144 },
  Express: { radius: 0.375, angle: 180 },
  MongoDB: { radius: 0.375, angle: 216 },
  Supabase: { radius: 0.375, angle: 252 },

  // Orbit 3: DevOps, Tools & Systems (10 nodes, 36° intervals offset by 18°)
  Docker: { radius: 0.465, angle: -54 },
  Git: { radius: 0.465, angle: -18 },
  Linux: { radius: 0.465, angle: 18 },
  GitHub: { radius: 0.465, angle: 54 },
  "Scikit-learn": { radius: 0.465, angle: 90 },
  MySQL: { radius: 0.465, angle: 126 },
  Flask: { radius: 0.465, angle: 162 },
  "C++": { radius: 0.465, angle: 198 },
  JavaScript: { radius: 0.465, angle: 234 },
  PHP: { radius: 0.465, angle: 270 },
};

function calculateNodeStyle(id: string): CSSProperties {
  const { radius, angle: degrees } = orbitalPositions[id] ?? { radius: 0.38, angle: 0 };
  const angle = (degrees * Math.PI) / 180;

  return {
    left: `${50 + Math.cos(angle) * radius * 100}%`,
    top: `${50 + Math.sin(angle) * radius * 100}%`,
    transform: "translate(-50%, -50%)",
  };
}

export default function ExperienceSkillsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedNodeId, setSelectedNodeId] = useState<string>("NIELIT");
  const [viewMode, setViewMode] = useState<"orbital" | "grid">("orbital");

  // Compile all entities into a unified dataset
  const allNodes: TechNodeData[] = useMemo(() => {
    const expNodes: TechNodeData[] = experiences.map((exp) => ({
      id: exp.organization,
      label: exp.organization,
      type: "experience",
      category: "Experience",
      color: techColors[exp.organization] || "var(--accent)",
      icon: techIcons[exp.organization] || FaBrain,
      organization: exp.organization,
      project: exp.project,
      role: exp.title,
      period: exp.period,
      description: exp.description,
      technologies: exp.technologies,
      highlights: exp.highlights,
    }));

    const skillNodes: TechNodeData[] = skillCategories.flatMap((cat) =>
      cat.skills.map((skill) => ({
        id: skill.name,
        label: skill.name,
        type: "skill",
        category: cat.category,
        color: techColors[skill.name] || "var(--accent)",
        icon: techIcons[skill.name] || FaCode,
        level: skill.level,
        description:
          skill.level === 3
            ? "Advanced proficiency · Production & project experience"
            : skill.level === 2
            ? "Proficient · Practical implementation experience"
            : "Familiar · Foundational knowledge",
      }))
    );

    return [...expNodes, ...skillNodes];
  }, []);

  const categories = useMemo(() => {
    return [
      "All",
      "Experience",
      "Languages",
      "Frontend",
      "Backend",
      "Databases",
      "AI & ML",
      "DevOps",
    ];
  }, []);

  // Currently inspected node (falls back to NIELIT if not selected)
  const activeNode = useMemo(() => {
    return allNodes.find((n) => n.id === selectedNodeId) || allNodes[0];
  }, [allNodes, selectedNodeId]);

  return (
    <section
      id="experience-skills"
      className="relative isolate flex min-h-[calc(100dvh-var(--navbar-h))] flex-col items-center justify-between overflow-hidden px-4 pb-8 pt-[calc(var(--navbar-h)+1rem)] text-[var(--fg)] sm:px-6"
      aria-label="Experience and Skills System"
    >
      {/* Background ambient radial aura */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_55%)] opacity-35" />

      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-between gap-4 sm:gap-6">
        {/* Top Control Bar: Category Filter Pills + View Switcher */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 z-20">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-[var(--accent)] text-white shadow-xs"
                      : "bg-[var(--bg-surface)]/80 text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-elevated)] border border-[var(--border)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="flex items-center rounded-full bg-[var(--bg-elevated)] p-0.5 border border-[var(--border)] text-xs font-medium shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("orbital")}
              className={`rounded-full px-3 py-1 transition-all cursor-pointer ${
                viewMode === "orbital"
                  ? "bg-[var(--bg-surface)] text-[var(--fg)] shadow-xs font-semibold"
                  : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
              }`}
            >
              🪐 Orbit System
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`rounded-full px-3 py-1 transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-[var(--bg-surface)] text-[var(--fg)] shadow-xs font-semibold"
                  : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
              }`}
            >
              📋 Bento Grid
            </button>
          </div>
        </div>

        {/* ─── VIEW MODE 1: ORBITAL SYSTEM (MATCHING CONTACT PAGE) ───── */}
        {viewMode === "orbital" && (
          <div
            className="tech-orbital-system relative grid shrink-0 place-items-center my-2 sm:my-4"
            style={
              {
                "--orbital-size": "clamp(19rem, min(76vw, 68dvh), 38rem)",
              } as CSSProperties
            }
          >
            {/* Concentric orbital rings */}
            <div className="pointer-events-none absolute inset-[3.5%] rounded-full border border-[var(--border)] opacity-60" />
            <div className="pointer-events-none absolute inset-[12.5%] rounded-full border border-[var(--border)] opacity-75" />
            <div className="pointer-events-none absolute inset-[23%] rounded-full border border-[var(--border)] opacity-85" />

            {/* Glowing Core Sun / Nucleus */}
            <div
              className="relative z-10 grid size-14 sm:size-18 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--accent)] shadow-[var(--shadow-xl)] cursor-pointer select-none transition-transform duration-200 hover:scale-105"
              onClick={() => setSelectedNodeId("NIELIT")}
              title="Experience & Skills Nucleus"
            >
              <div className="absolute inset-0 rounded-full bg-[var(--accent-light)]/30 animate-pulse" />
              <FaBrain className="size-6 sm:size-8 relative z-10 text-[var(--accent)]" aria-hidden="true" />
            </div>

            {/* Orbiting Nodes */}
            {allNodes.map((node) => {
              const Icon = node.icon;
              const isMatch = activeCategory === "All" || node.category === activeCategory;
              const isSelected = selectedNodeId === node.id;
              const isExp = node.type === "experience";

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  onMouseEnter={() => setSelectedNodeId(node.id)}
                  className={`tech-orbit-node group absolute cursor-pointer focus:outline-none transition-all duration-200 ${
                    isExp ? "size-11 sm:size-14 z-20" : "size-8.5 sm:size-10.5 z-10"
                  } ${
                    isMatch ? "opacity-100 scale-100" : "opacity-30 scale-90"
                  } ${isSelected ? "is-active scale-115 z-30" : ""}`}
                  style={
                    {
                      ...calculateNodeStyle(node.id),
                      "--node-color": node.color,
                    } as CSSProperties
                  }
                  aria-label={node.label}
                >
                  <span
                    className={`grid size-full place-items-center rounded-full border transition-all duration-200 ${
                      isSelected
                        ? "border-[var(--accent)] bg-[var(--bg-elevated)] scale-110 ring-2 ring-[var(--accent)]/40"
                        : "border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-hover)] hover:scale-110"
                    } ${isExp ? "ring-1 ring-[var(--accent)]/50 shadow-md" : "shadow-xs"}`}
                  >
                    {isExp ? (
                      <span className="font-mono text-[10px] sm:text-xs font-bold text-[var(--accent)]">
                        {node.id === "NIELIT" ? "NL" : "IS"}
                      </span>
                    ) : (
                      <Icon
                        className="size-3.5 sm:size-4.5 transition-transform group-hover:scale-110"
                        style={{ color: node.color }}
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  {/* Node Hover/Focus Tooltip */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-1/2 z-30 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-0.5 text-[10px] font-medium text-[var(--fg)] opacity-0 shadow-md backdrop-blur transition-opacity duration-150 group-hover:opacity-100 sm:block"
                  >
                    {node.label}
                    {node.level && ` (Lvl ${node.level})`}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* ─── VIEW MODE 2: BENTO GRID ───────────────────────────────── */}
        {viewMode === "grid" && (
          <div className="w-full space-y-8 my-4">
            {/* Experience Cards */}
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-[var(--fg-muted)] mb-3 uppercase">
                Work & Internships
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experiences.map((exp) => (
                  <div
                    key={exp.organization}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-5 shadow-xs hover:border-[var(--accent)]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-base text-[var(--fg)]">{exp.project}</h3>
                      <span className="rounded-full bg-[var(--accent-light)]/40 px-2 py-0.5 text-[10px] font-medium text-[var(--accent)]">
                        Completed
                      </span>
                    </div>
                    <p className="text-xs text-[var(--accent)] font-medium mb-2">
                      {exp.organization} · {exp.title}
                    </p>
                    <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] text-[var(--fg-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-[var(--fg-muted)] mb-3 uppercase">
                Technical Stack
              </h2>
              <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {allNodes
                  .filter((n) => n.type === "skill")
                  .filter((n) => activeCategory === "All" || n.category === activeCategory)
                  .map((node) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.id}
                        className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-3 flex items-center gap-2.5 hover:border-[var(--accent)]/50 transition-colors"
                      >
                        <Icon className="size-4 shrink-0" style={{ color: node.color }} />
                        <span className="text-xs font-medium text-[var(--fg)] truncate">
                          {node.label}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}

        {/* ─── FLOATING INSPECTOR CARD (DETAILS AT THE BOTTOM) ───────── */}
        {viewMode === "orbital" && activeNode && (
          <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]/95 p-4 backdrop-blur-2xl shadow-xl transition-all duration-200 z-20">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: activeNode.color }}
                />
                <h3 className="font-bold text-sm sm:text-base text-[var(--fg)]">
                  {activeNode.project || activeNode.label}
                </h3>
              </div>
              <span className="rounded-full bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[10px] font-mono text-[var(--fg-muted)] border border-[var(--border)]">
                {activeNode.category}
              </span>
            </div>

            {activeNode.organization && (
              <p className="text-xs font-semibold text-[var(--accent)] mb-1">
                {activeNode.organization} · {activeNode.role}
              </p>
            )}

            <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
              {activeNode.description}
            </p>

            {activeNode.technologies && activeNode.technologies.length > 0 && (
              <div className="mt-2.5 flex flex-wrap items-center gap-1 pt-2 border-t border-[var(--border)]/50">
                {activeNode.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-[var(--bg-elevated)] px-2 py-0.5 text-[10px] font-medium text-[var(--fg-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .tech-orbital-system {
          width: var(--orbital-size);
          height: var(--orbital-size);
        }
        .tech-orbit-node:hover > span:first-child,
        .tech-orbit-node.is-active > span:first-child {
          box-shadow: 0 0 18px color-mix(in srgb, var(--node-color, var(--accent)) 30%, transparent);
        }
      `}</style>
    </section>
  );
}
