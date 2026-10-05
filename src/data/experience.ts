import experienceData from "./experience.json";

export interface Experience {
  title: string;
  organization: string;
  project: string;
  period?: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export const experiences: Experience[] = experienceData as Experience[];
export default experiences;