export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Flask", "FastAPI"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"],
  },
  {
    category: "AI / ML",
    skills: ["TensorFlow", "Scikit-learn", "Machine Learning", "Computer Vision"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker", "Linux"],
  },
];