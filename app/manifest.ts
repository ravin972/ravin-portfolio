import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Web app manifest (served at /manifest.webmanifest). Next injects the
 * <link rel="manifest"> automatically. Raster icons (apple-touch-icon,
 * maskable PNGs) are a follow-up once brand image assets exist.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.shortRole}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#0A0A0B",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
