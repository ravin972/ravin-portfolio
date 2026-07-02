import type { NavItem, SocialLink } from "@/types";

/** Site-wide identity + configuration. Single source of truth for SEO too. */
export const site = {
  name: "Ravinder Pandey",
  role: "Senior Full-Stack Engineer · Backend Architect",
  shortRole: "Backend Architect · AI Voice Infrastructure",
  tagline: "I build the backends behind real-time AI voice.",
  description:
    "Senior Full-Stack Engineer & Backend Architect. I build the backends behind real-time AI voice — streaming STT→LLM→TTS pipelines, multi-tenant SaaS, and zero-downtime systems that stay up under production load.",
  location: "Gurugram, Haryana, India",
  timezone: "UTC+5:30",
  email: "pandeyravinder078@gmail.com",
  phone: "+91 97290 41423",
  phoneHref: "+919729041423",
  availability: "Available for senior & founding roles · Immediate, 1-month notice",
  // Set this to the deployed origin before shipping (used by metadata + sitemap).
  url: "https://ravinderpandey.dev",
  ogImage: "/opengraph-image",
  resumePath: "/resume.pdf",
  githubUser: "ravin972",
} as const;

export const nav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Architecture", href: "/architecture" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "@ravin972",
    href: "https://github.com/ravin972",
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "in/ravinderpandey",
    href: "https://www.linkedin.com/in/ravinderpandey/",
    external: true,
  },
  {
    label: "Email",
    handle: site.email,
    href: `mailto:${site.email}`,
  },
];
