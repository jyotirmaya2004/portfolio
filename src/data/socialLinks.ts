/**
 * Social Media Links Data
 * Easily add/remove social platforms by editing this file.
 * Icons reference react-icons library names - mapped in ContactContent.tsx getIcon() function.
 */

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Name matching the getIcon() switch cases in ContactContent.tsx
  color: string;
  ringColor: string;
  position: string;
  external?: boolean;
}

// Core social links (always displayed in the orbital menu)
export const coreSocialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/jyotirmaya2004",
    icon: "github",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jyotirmaya2004",
    icon: "linkedin",
    color: "#0A66C2",
    ringColor: "rgba(10,102,194,0.22)",
    position: "linkedin",
    external: true,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/jyotirmaya2004",
    icon: "x",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "x",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:hello@jyotirmayabehera.com",
    icon: "email",
    color: "#EA4335",
    ringColor: "rgba(234,67,53,0.2)",
    position: "email",
  },
];

// Optional social links (can be enabled by adding to coreSocialLinks or importing separately)
export const optionalSocialLinks: SocialLink[] = [
  {
    label: "Website",
    href: "www.jyotirmayabehera.com",
    icon: "globe",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "website",
    external: true,
  },
  /* Uncomment and update URLs to enable additional platforms:
  {
    label: "Facebook",
    href: "https://facebook.com/jyotirmaya2004",
    icon: "facebook",
    color: "#1877F2",
    ringColor: "rgba(24,119,242,0.22)",
    position: "facebook",
    external: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/jyotirmaya2004",
    icon: "instagram",
    color: "#E4405F",
    ringColor: "rgba(228,64,95,0.2)",
    position: "instagram",
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@jyotirmaya2004",
    icon: "youtube",
    color: "#FF0000",
    ringColor: "rgba(255,0,0,0.2)",
    position: "youtube",
    external: true,
  },
  */
];