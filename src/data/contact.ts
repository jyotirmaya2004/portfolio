export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  telegram: string;
  threads: string;
  youtube: string;
  instagram: string;
  snapchat: string;
  reddit: string;
  pinterest: string;
  leetcode: string;
  quora: string;
  substack: string;
  website: string;
}

export const contactInfo: ContactInfo = {
  email: "hello@jyotirmayabehera.com",

  // Existing links
  github: "https://github.com/jyotirmaya2004",
  linkedin: "https://linkedin.com/in/jyotirmaya2004",
  twitter: "https://twitter.com/jyotirmaya2004",

  /*
   * IMPORTANT:
   * Replace these "#" values with your REAL profiles.
   * Do not leave them as # if you actually use these platforms.
   */
  facebook: "https://www.facebook.com/jyotirmaya2004",
  telegram: "https://t.me/jyotirmaya2004",
  threads: "https://www.threads.net/@jyotirmaya2004",
  youtube: "https://www.youtube.com/@jyotirmaya2004",
  instagram: "https://www.instagram.com/jyotirmaya2004",
  snapchat: "#",
  reddit: "#",
  pinterest: "#",
  leetcode: "#",
  quora: "#",
  substack: "#",

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
    label: "Facebook",
    href: contactInfo.facebook,
    icon: "facebook",
    color: "#1877F2",
    ringColor: "rgba(24,119,242,0.22)",
    position: "facebook",
    external: true,
  },
  {
    label: "Telegram",
    href: contactInfo.telegram,
    icon: "telegram",
    color: "#229ED9",
    ringColor: "rgba(34,158,217,0.22)",
    position: "telegram",
    external: true,
  },
  {
    label: "Threads",
    href: contactInfo.threads,
    icon: "threads",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "threads",
    external: true,
  },
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
    label: "YouTube",
    href: contactInfo.youtube,
    icon: "youtube",
    color: "#FF0000",
    ringColor: "rgba(255,0,0,0.2)",
    position: "youtube",
    external: true,
  },
  {
    label: "Instagram",
    href: contactInfo.instagram,
    icon: "instagram",
    color: "#E4405F",
    ringColor: "rgba(228,64,95,0.2)",
    position: "instagram",
    external: true,
  },
  {
    label: "X",
    href: contactInfo.twitter,
    icon: "x",
    color: "var(--fg)",
    ringColor: "var(--accent-glow)",
    position: "x",
    external: true,
  },
  {
    label: "Reddit",
    href: contactInfo.reddit,
    icon: "reddit",
    color: "#FF4500",
    ringColor: "rgba(255,69,0,0.2)",
    position: "reddit",
    external: true,
  },
  {
    label: "Pinterest",
    href: contactInfo.pinterest,
    icon: "pinterest",
    color: "#E60023",
    ringColor: "rgba(230,0,35,0.2)",
    position: "pinterest",
    external: true,
  },
  {
    label: "LeetCode",
    href: contactInfo.leetcode,
    icon: "leetcode",
    color: "#FFA116",
    ringColor: "rgba(255,161,22,0.2)",
    position: "leetcode",
    external: true,
  },
  {
    label: "Snapchat",
    href: contactInfo.snapchat,
    icon: "snapchat",
    color: "#FFFC00",
    ringColor: "rgba(255,252,0,0.18)",
    position: "snapchat",
    external: true,
  },
  {
    label: "Quora",
    href: contactInfo.quora,
    icon: "quora",
    color: "#B92B27",
    ringColor: "rgba(185,43,39,0.2)",
    position: "quora",
    external: true,
  },
  {
    label: "Substack",
    href: contactInfo.substack,
    icon: "substack",
    color: "#FF6719",
    ringColor: "rgba(255,103,25,0.2)",
    position: "substack",
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
];
