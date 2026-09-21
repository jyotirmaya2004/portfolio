export interface Experience {
  title: string;
  organization: string;
  project: string;
  period?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    title: "AI Research Intern",
    organization: "NIELIT",
    project: "Plantexa",
    period: "Internship",
    description:
      "Two-stage deep learning pipeline for plant leaf verification and disease classification.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
    highlights: [
      "Built two-stage CNN: leaf presence verification + disease classification",
      "Optimized model inference pipeline for fast edge execution",
    ],
  },
  {
    title: "Project Intern",
    organization: "Infosys Springboard",
    project: "AI-based Research Funding & Innovation Intelligence Platform",
    period: "Internship",
    description:
      "AI-powered intelligence platform for research funding analysis and innovation trend discovery.",
    technologies: ["Python", "Machine Learning", "Data Analysis", "NLP"],
    highlights: [
      "Implemented NLP models to analyze research grant and patent trends",
      "Engineered automated pipelines to evaluate innovation metrics",
    ],
  },
];