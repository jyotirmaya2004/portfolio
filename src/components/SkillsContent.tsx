"use client";

import type { IconType } from "react-icons";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCplusplus,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

import { orbitalSkills, type OrbitalSkillNode } from "@/data/skills";

const iconsMap: Record<string, IconType> = {
  python: FaPython,
  typescript: SiTypescript,
  javascript: FaJs,
  cplusplus: SiCplusplus,
  java: FaJava,
  react: FaReact,
  nextjs: SiNextdotjs,
  nodejs: FaNodeJs,
  express: SiExpress,
  tailwindcss: SiTailwindcss,
  docker: FaDocker,
  git: FaGitAlt,
  linux: FaLinux,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  code: FaCode,
};

const brandColors: Record<string, string> = {
  python: "#3776AB",
  typescript: "#3178C6",
  javascript: "#CA8A04",
  cplusplus: "#00599C",
  java: "#E76F00",
  react: "#0088CC",
  nextjs: "var(--fg)",
  nodejs: "#339933",
  express: "var(--fg)",
  tailwindcss: "#06B6D4",
  docker: "#2496ED",
  git: "#F05032",
  linux: "#CA8A04",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  code: "var(--fg)",
};

const orbitRadiusMap = new Map(orbitalSkills.orbits.map((o) => [o.id, o.radius]));

function getSkillNodeStyle(node: OrbitalSkillNode, orbitId: string): React.CSSProperties {
  const radius = orbitRadiusMap.get(orbitId) ?? 0.35;
  const angleRad = (node.angle * Math.PI) / 180;
  const left = 50 + radius * 100 * Math.cos(angleRad);
  const top = 50 + radius * 100 * Math.sin(angleRad);

  return {
    left: `${left}%`,
    top: `${top}%`,
    transform: "translate(-50%, -50%)",
  };
}

export default function SkillsContent() {
  const { centerHub, orbits } = orbitalSkills;
  const CenterIcon = iconsMap[centerHub.icon] ?? FaCode;

  return (
    <section
      id="skills"
      className="relative isolate flex min-h-[calc(100dvh-var(--navbar-h))] flex-col items-center justify-between overflow-hidden bg-[var(--bg)] px-4 pb-6 pt-[calc(var(--navbar-h)+1.5rem)] text-[var(--fg)] sm:px-6 sm:pb-8 sm:pt-[calc(var(--navbar-h)+2rem)]"
      aria-label="Technical skills constellation"
    >
      {/* ── Background Subtle Ambient Monochrome Glow ──────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.035),transparent_65%)]" />

      {/* ── Orbital System Area ───────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center">
        <div
          className="relative shrink-0 select-none"
          style={{
            width: "clamp(20rem, min(76vw, 76dvh), 42rem)",
            height: "clamp(20rem, min(76vw, 76dvh), 42rem)",
          }}
        >
          {/* ── Orbit Tracks (Matching Contact Page Geometry) ──────────── */}
          {orbits.map((orbit) => (
            <div
              key={orbit.id}
              className={`pointer-events-none absolute rounded-full border border-[var(--border)] ${orbit.opacityClass ?? "opacity-60"}`}
              style={{ inset: `${orbit.insetPercentage ?? 10}%` }}
              aria-hidden="true"
            />
          ))}

          {/* ── Center Core Hub ───────────────────────────────────────── */}
          <div
            className="group absolute z-30 flex size-12 sm:size-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--fg)] shadow-xs transition-all duration-200 hover:border-[var(--fg)] focus-visible:outline-none"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            role="img"
            aria-label={`${centerHub.label}: ${centerHub.tooltip}`}
          >
            <CenterIcon
              className="size-5 sm:size-7 transition-transform duration-200"
              aria-hidden="true"
            />
            {/* Tooltip */}
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-1 text-[11px] font-medium text-[var(--fg)] opacity-0 shadow-sm backdrop-blur transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              {centerHub.tooltip}
            </span>
          </div>

          {/* ── 15 Orbiting Nodes (Vibrant Brand Colors on Logo Icons) ─── */}
          {orbits.flatMap((orbit) =>
            orbit.nodes.map((skill) => {
              const Icon = iconsMap[skill.icon] ?? FaCode;
              const iconColor = skill.color ?? brandColors[skill.icon] ?? "var(--fg)";

              return (
                <div
                  key={`${orbit.id}-${skill.name}`}
                  role="img"
                  tabIndex={0}
                  aria-label={skill.name}
                  className="group absolute z-20 flex size-10 xs:size-11 sm:size-13 md:size-14 items-center justify-center rounded-full transition-transform duration-200 cursor-default focus-visible:outline-none"
                  style={getSkillNodeStyle(skill, orbit.id)}
                >
                  {/* Node Surface (Clean Elevated Theme Background) */}
                  <span className="relative z-10 flex size-full items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-surface)] shadow-xs transition-all duration-200 group-hover:border-[var(--border-hover)] group-hover:bg-[var(--bg-elevated)]">
                    <Icon
                      className="size-4 sm:size-5 transition-transform duration-200"
                      style={{ color: iconColor }}
                      aria-hidden="true"
                    />
                  </span>

                  {/* Clean Tooltip on Hover/Focus */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-[calc(100%+0.65rem)] left-1/2 z-50 hidden -translate-x-1/2 whitespace-nowrap rounded-md border border-[var(--border)] bg-[var(--bg-surface)]/95 px-2 py-1 text-[11px] font-medium text-[var(--fg)] opacity-0 shadow-sm backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block"
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ── Minimal Footer ───────────────────────────────────────────── */}
      <footer className="flex flex-col items-center gap-2 text-[10px] font-medium tracking-[0.16em] text-[var(--fg-subtle)] sm:text-xs">
        <p>© {new Date().getFullYear()} Jyotirmaya Behera</p>
      </footer>
    </section>
  );
}
