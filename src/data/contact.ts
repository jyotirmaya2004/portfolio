import orbitalData from "./orbitalContact.json";

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
  facebook?: string;
  telegram?: string;
  threads?: string;
  youtube?: string;
  instagram?: string;
  snapchat?: string;
  reddit?: string;
  pinterest?: string;
  leetcode?: string;
  quora?: string;
  substack?: string;
  medium?: string;
}

export interface OrbitNode {
  position: string;
  label: string;
  href: string;
  icon: string;
  color: string;
  ringColor: string;
  angle: number;
  external?: boolean;
}

export interface OrbitTrack {
  id: string;
  name: string;
  radius: number;
  insetPercentage: number;
  opacityClass: string;
  nodes: OrbitNode[];
}

export interface SocialLink extends OrbitNode {
  orbit: "inner" | "middle" | "outer";
}

export const contactInfo: ContactInfo = orbitalData.contactInfo;
export const centerHub = orbitalData.centerHub;
export const orbits: OrbitTrack[] = orbitalData.orbits as OrbitTrack[];

export const socialLinks: SocialLink[] = orbitalData.orbits.flatMap((orbit) =>
  orbit.nodes.map((node) => ({
    ...node,
    orbit: orbit.id as "inner" | "middle" | "outer",
  }))
);

// Backwards compatibility aliases
export const coreSocialLinks = socialLinks;
export const optionalSocialLinks = socialLinks;
export default orbitalData;