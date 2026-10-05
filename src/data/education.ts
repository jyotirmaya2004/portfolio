import educationData from "./education.json";

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  cgpa?: string;
}

export const education: EducationItem[] = educationData as EducationItem[];
export default education;