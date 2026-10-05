import skillsData from "./skills.json";
import orbitalSkillsData from "./orbitalSkills.json";

export interface SkillItem {
  name: string;
  level: 1 | 2 | 3;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export interface OrbitalSkillNode {
  name: string;
  icon: string;
  color?: string;
  angle: number;
}

export interface OrbitalSkillRing {
  id: string;
  name: string;
  priority: number;
  radius: number;
  insetPercentage?: number;
  opacityClass?: string;
  nodes: OrbitalSkillNode[];
}

export interface OrbitalSkillsConfig {
  centerHub: {
    label: string;
    tooltip: string;
    icon: string;
  };
  orbits: OrbitalSkillRing[];
}

export const orbitalSkills: OrbitalSkillsConfig = orbitalSkillsData as OrbitalSkillsConfig;
export const skillCategories: SkillCategory[] = skillsData as SkillCategory[];
export default orbitalSkills;