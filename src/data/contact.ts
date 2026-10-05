export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@jyotirmayabehera.com",

  // Existing links
  github: "https://github.com/jyotirmaya2004",
  linkedin: "https://linkedin.com/in/jyotirmaya2004",
  twitter: "https://twitter.com/jyotirmaya2004",

  // Your portfolio / website
  website: "www.jyotirmayabehera.com",
};

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  color: string;
  ringColor: string;
  position: string;
  external?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: contactInfo.github,
    icon: "github",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: contactInfo.linkedin,
    icon: "linkedin",
    color: "#0A66C2",
    ringColor: "rgba(10,102,194,0.22)",
    position: "linkedin",
    external: true,
  },
  {
    label: "Twitter",
    href: contactInfo.twitter,
    icon: "x",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "x",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${contactInfo.email}`,
    icon: "email",
    color: "#EA4335",
    ringColor: "rgba(234,67,53,0.2)",
    position: "email",
  },
  {
    label: "Website",
    href: contactInfo.website,
    icon: "globe",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "website",
    external: true,
  },
];
