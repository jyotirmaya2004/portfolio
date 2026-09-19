export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  cgpa?: string;
}

export const education: EducationItem[] = [
  {
    degree: "Integrated MCA (Master of Computer Applications)",
    institution: "Utkal University",
    location: "Bhubaneswar, Odisha",
    period: "2024 – 2029",
    description:
      "Five-year integrated program combining computer science fundamentals with advanced applications. Focus on software development, algorithms, database systems, and AI/ML.",
    cgpa: "8.2/10 (Current)",
  },
  {
    degree: "Higher Secondary (Class 12)",
    institution: "Fakir Mohaan Higher secondary School",
    location: "Baleswar, Odisha",
    period: "2020 – 2022",
    description: "Science stream with Mathematics, Physics, and Chemistry.",
    cgpa: "92%",
  },
  {
    degree: "Secondary (Class 10)",
    institution: "KBKS high School",
    location: "Tapandia,Baleswar, Odisha",
    period: "2018 – 2020",
    description: "Completed with distinction.",
    cgpa: "95%",
  },
];