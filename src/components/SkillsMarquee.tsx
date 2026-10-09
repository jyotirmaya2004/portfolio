"use client";

import type { IconType } from "react-icons";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiFastapi,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiSupabase,
  SiRedis,
  SiFlask,
  SiMysql,
} from "react-icons/si";

interface MarqueeSkill {
  name: string;
  category: string;
  icon: IconType;
  brandColor: string;
  level: string;
}

const rowOneSkills: MarqueeSkill[] = [
  { name: "Python", category: "Language", icon: FaPython, brandColor: "#3776AB", level: "Advanced" },
  { name: "TypeScript", category: "Language", icon: SiTypescript, brandColor: "#3178C6", level: "Advanced" },
  { name: "Next.js", category: "Full Stack", icon: SiNextdotjs, brandColor: "#111111", level: "Production" },
  { name: "React", category: "Frontend", icon: SiReact, brandColor: "#0088CC", level: "Advanced" },
  { name: "FastAPI", category: "API Framework", icon: SiFastapi, brandColor: "#009688", level: "Proficient" },
  { name: "JavaScript", category: "Language", icon: SiJavascript, brandColor: "#CA8A04", level: "Advanced" },
  { name: "Node.js", category: "Runtime", icon: FaNodeJs, brandColor: "#339933", level: "Production" },
  { name: "Tailwind CSS", category: "Styling", icon: SiTailwindcss, brandColor: "#06B6D4", level: "Advanced" },
  { name: "Java", category: "Core Backend", icon: FaJava, brandColor: "#E76F00", level: "Advanced" },
  { name: "C++", category: "Systems", icon: SiCplusplus, brandColor: "#00599C", level: "Proficient" },
  { name: "Express", category: "Microservices", icon: SiExpress, brandColor: "#111111", level: "Production" },
];

const rowTwoSkills: MarqueeSkill[] = [
  { name: "PyTorch", category: "Deep Learning", icon: SiPytorch, brandColor: "#EE4C2C", level: "Research" },
  { name: "PostgreSQL", category: "Relational DB", icon: SiPostgresql, brandColor: "#4169E1", level: "Production" },
  { name: "Docker", category: "DevOps", icon: SiDocker, brandColor: "#2496ED", level: "Deployment" },
  { name: "TensorFlow", category: "Machine Learning", icon: SiTensorflow, brandColor: "#FF6F00", level: "Computer Vision" },
  { name: "MongoDB", category: "NoSQL DB", icon: SiMongodb, brandColor: "#47A248", level: "Production" },
  { name: "Supabase", category: "Cloud Database", icon: SiSupabase, brandColor: "#3ECF8E", level: "Real-time" },
  { name: "Git", category: "Version Control", icon: SiGit, brandColor: "#F05032", level: "Advanced" },
  { name: "Linux", category: "Kernel / OS", icon: FaLinux, brandColor: "#CA8A04", level: "Server Admin" },
  { name: "Redis", category: "In-Memory Cache", icon: SiRedis, brandColor: "#DC382D", level: "High Throughput" },
  { name: "Flask", category: "REST APIs", icon: SiFlask, brandColor: "#111111", level: "Microservices" },
  { name: "MySQL", category: "Relational DB", icon: SiMysql, brandColor: "#4479A1", level: "Production" },
];

function SkillCard({ skill }: { skill: MarqueeSkill }) {
  const IconComp = skill.icon;

  return (
    <div
      role="article"
      aria-label={skill.name}
      className="flex shrink-0 items-center gap-2.5 select-none"
    >
      <IconComp
        size={22}
        style={{ color: skill.brandColor }}
        aria-hidden="true"
        className="shrink-0"
      />
      <span className="text-[15px] sm:text-[16px] font-medium tracking-tight text-[var(--color-ink)] whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section
      id="skills"
      className="pad-cards mx-auto w-full max-w-[1440px] seq pt-10 sm:pt-14 relative"
      aria-label="Technologies"
    >
      {/* Scrolling Marquee Area */}
      <div className="relative overflow-hidden py-4 sm:py-6">
        {/* Luxury Vignette Masks for Smooth Fade at Edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--bg)] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--bg)] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Track 1: Scrolling Left */}
        <div className="marquee-lane overflow-visible py-3 sm:py-4">
          <div className="animate-marquee-left gap-8 sm:gap-12 pr-8 sm:pr-12">
            {/* Set 1 */}
            {rowOneSkills.map((skill) => (
              <SkillCard key={`track1-a-${skill.name}`} skill={skill} />
            ))}
            {/* Set 2 for seamless loop */}
            {rowOneSkills.map((skill) => (
              <SkillCard key={`track1-b-${skill.name}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Track 2: Scrolling Right */}
        <div className="marquee-lane overflow-visible py-3 sm:py-4 mt-3 sm:mt-4">
          <div className="animate-marquee-right gap-8 sm:gap-12 pr-8 sm:pr-12">
            {/* Set 1 */}
            {rowTwoSkills.map((skill) => (
              <SkillCard key={`track2-a-${skill.name}`} skill={skill} />
            ))}
            {/* Set 2 for seamless loop */}
            {rowTwoSkills.map((skill) => (
              <SkillCard key={`track2-b-${skill.name}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
