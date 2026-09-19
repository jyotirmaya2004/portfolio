export interface Experience {
  title: string;
  organization: string;
  project: string;
  period?: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Intern",
    organization: "NIELIT",
    project: "Plantexa",
    description:
      "Developed an AI-based plant leaf disease detection system using a two-stage approach: leaf verification followed by disease classification.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
  },
  {
    title: "Intern",
    organization: "Infosys Springboard",
    project: "AI-based Research Funding & Innovation Intelligence Platform",
    description:
      "Built an AI-powered platform for research funding analysis and innovation intelligence.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "NLP"],
  },
];