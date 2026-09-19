export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Netram",
    description:
      "A monitoring and inspection platform based on the SIH problem statement. Features real-time monitoring, CCTV integration, surprise inspections, video conferencing, inspection management, and AI-based analytics for DoSJE-related requirements.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WebRTC"],
    githubUrl: "https://github.com/jyotirmaya2004/netram",
    liveUrl: "https://netram.example.com",
  },
  {
    name: "Plantexa",
    description:
      "AI-based plant leaf disease detection system using a two-stage approach. First stage verifies whether the input is a leaf, second stage classifies the disease. Built during NIELIT internship.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "Machine Learning"],
    githubUrl: "https://github.com/jyotirmaya2004/plantexa",
  },
  {
    name: "Prodexa",
    description:
      "Product Data Aggregator & Curator built with Flask, PostgreSQL, and Supabase. Features web scraping, product curation, search and filtering, and authentication.",
    technologies: ["Flask", "Python", "PostgreSQL", "Supabase", "Web Scraping"],
    githubUrl: "https://github.com/jyotirmaya2004/prodexa",
  },
  {
    name: "Aptixa",
    description:
      "Placement Preparation & Quiz Platform focused on quantitative aptitude and learning-oriented quiz functionality.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/jyotirmaya2004/aptixa",
  },
];