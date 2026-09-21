export interface Project {
  name: string;
  classification: string;
  description: string;
  technologies: string[];
  status: "DEPLOYED" | "COMPLETED" | "ACTIVE";
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    name: "Netram",
    classification: "Smart Inspection & AI Monitoring Platform",
    description:
      "Comprehensive monitoring platform featuring real-time CCTV feeds, surprise inspection routing, WebRTC video conferencing, and automated computer vision analytics.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "WebRTC"],
    status: "DEPLOYED",
    githubUrl: "https://github.com/jyotirmaya2004/netram",
    liveUrl: "https://netram.example.com",
    image: "/images/projects/netram.png",
  },
  {
    name: "Plantexa",
    classification: "Two-Stage AI Disease Diagnosis Engine",
    description:
      "Agricultural diagnostic system utilizing a dual-stage neural pipeline: rapid leaf verification followed by multi-class pathogen classification using CNNs.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "CNN", "OpenCV"],
    status: "COMPLETED",
    githubUrl: "https://github.com/jyotirmaya2004/plantexa",
    image: "/images/projects/plantexa.png",
  },
  {
    name: "Prodexa",
    classification: "Product Data Pipeline & Curation Engine",
    description:
      "Product intelligence aggregator implementing distributed data extraction routines, structured relational warehousing, and fast multi-attribute filtering.",
    technologies: ["Flask", "Python", "PostgreSQL", "Supabase", "Scraping"],
    status: "COMPLETED",
    githubUrl: "https://github.com/jyotirmaya2004/prodexa",
    image: "/images/projects/prodexa.png",
  },
  {
    name: "Aptixa",
    classification: "Quantitative Aptitude & Assessment Platform",
    description:
      "Placement readiness assessment platform featuring interactive quiz modes, real-time score analytics, detailed answer breakdowns, and custom practice sets.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    status: "COMPLETED",
    githubUrl: "https://github.com/jyotirmaya2004/aptixa",
    image: "/images/projects/aptixa.png",
  },
];