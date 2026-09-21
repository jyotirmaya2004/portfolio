export interface SkillItem {
  name: string;
  level: 1 | 2 | 3;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 3 },
      { name: "Java", level: 3 },
      { name: "C", level: 3 },
      { name: "C++", level: 2 },
      { name: "R", level: 2 },
      { name: "TypeScript", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "PHP", level: 1 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "Next.js", level: 3 },
      { name: "React", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "HTML", level: 3 },
      { name: "CSS", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 3 },
      { name: "Express", level: 3 },
      { name: "FastAPI", level: 2 },
      { name: "Flask", level: 2 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 3 },
      { name: "MongoDB", level: 2 },
      { name: "MySQL", level: 2 },
      { name: "Supabase", level: 2 },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "Machine Learning", level: 3 },
      { name: "Computer Vision", level: 2 },
      { name: "TensorFlow", level: 2 },
      { name: "Scikit-learn", level: 2 },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Git", level: 3 },
      { name: "GitHub", level: 3 },
      { name: "Linux", level: 3 },
      { name: "Docker", level: 2 },
    ],
  },
];