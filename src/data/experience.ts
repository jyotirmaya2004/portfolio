import experienceData from "./experience.json";

export interface ExperienceItem {
  type: "experience";
  id: string;
  organization: string;
  role: string;
  period: string;
  tag: string;
  summary: string;
  challenge?: string;
  takeaways?: string[];
  technologies?: string[];
}

export const experiencesData: ExperienceItem[] = (
  experienceData as Omit<ExperienceItem, "type">[]
).map((item) => ({
  ...item,
  type: "experience" as const,
}));

export const experiences = experiencesData;

export function getAllExperiences(): ExperienceItem[] {
  return experiencesData;
}

export function getExperienceById(id: string): ExperienceItem | undefined {
  return experiencesData.find((e) => e.id === id);
}

export default experiencesData;