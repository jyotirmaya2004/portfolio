import projectsJson from "./projects.json";

export interface ProjectItem {
  type: "project";
  id: string;
  name: string;
  subtitle?: string;
  summary?: string;
  challenge?: string;
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = (
  projectsJson as Omit<ProjectItem, "type">[]
).map((item) => ({
  ...item,
  type: "project" as const,
}));

export const projects = projectsData;

export function getAllProjects(): ProjectItem[] {
  return projectsData;
}

export function getProjectById(id: string): ProjectItem | undefined {
  return projectsData.find((p) => p.id === id);
}