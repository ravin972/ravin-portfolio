import type { Metadata } from "next";
import { site } from "@/content/site";

/** Build page metadata consistently. Absolute URLs resolve via metadataBase. */
export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.name} — ${site.shortRole}`;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}

/** JSON-LD Person + WebSite graph for the home page. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        jobTitle: site.role,
        description: site.description,
        email: `mailto:${site.email}`,
        url: site.url,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gurugram",
          addressRegion: "Haryana",
          addressCountry: "IN",
        },
        knowsAbout: [
          "Backend Engineering",
          "Distributed Systems",
          "AI Voice Infrastructure",
          "Multi-tenant SaaS",
          "Node.js",
          "TypeScript",
          "Python",
          "PostgreSQL",
        ],
        sameAs: [
          "https://github.com/ravin972",
          "https://www.linkedin.com/in/ravinderpandey/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };
}
