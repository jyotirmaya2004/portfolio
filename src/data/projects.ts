import projectsJson from "./projects.json";
import projectLinksJson from "./projectLinks.json";

export interface ProjectLinkConfig {
  id: string;
  name?: string;
  liveUrl?: string;
  url?: string;
  repoUrl?: string;
  githubUrl?: string;
  repo?: string;
}

export const PROJECT_CATEGORIES = [
  "All Projects",
  "Full-Stack Development",
  "AI / Machine Learning",
  "Backend Development",
  "Web Applications",
  "Experiments & Research",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface ProjectItem {
  type: "project";
  id: string;
  name: string;
  subtitle?: string;
  summary?: string;
  category: string;
  year?: string;
  number?: string;
  status?: ProjectStatus;
  thumbnail?: string;
  challenge?: string;
  features?: string[];
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectLinksMap = new Map<string, ProjectLinkConfig>(
  (projectLinksJson as ProjectLinkConfig[]).map((link) => [link.id, link])
);

function sanitizeUrl(value?: string): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export const projectsData: ProjectItem[] = (
  projectsJson as Omit<ProjectItem, "type">[]
).map((item) => {
  const linkOverride = projectLinksMap.get(item.id);

  // Live URL resolution: projectLinks.json (liveUrl or url) -> fallback to projects.json
  const resolvedLiveUrl =
    linkOverride !== undefined &&
    (linkOverride.liveUrl !== undefined || linkOverride.url !== undefined)
      ? sanitizeUrl(linkOverride.liveUrl ?? linkOverride.url)
      : sanitizeUrl(item.liveUrl);

  // Repository URL resolution: projectLinks.json (repoUrl, githubUrl, or repo) -> fallback to projects.json
  const resolvedGithubUrl =
    linkOverride !== undefined &&
    (linkOverride.repoUrl !== undefined ||
      linkOverride.githubUrl !== undefined ||
      linkOverride.repo !== undefined)
      ? sanitizeUrl(
          linkOverride.repoUrl ?? linkOverride.githubUrl ?? linkOverride.repo
        )
      : sanitizeUrl(item.githubUrl);

  return {
    ...item,
    type: "project" as const,
    liveUrl: resolvedLiveUrl,
    githubUrl: resolvedGithubUrl,
  };
});

export const projects = projectsData;

export function getAllProjects(): ProjectItem[] {
  return projectsData;
}

export function getProjectById(id: string): ProjectItem | undefined {
  return projectsData.find((p) => p.id === id);
}