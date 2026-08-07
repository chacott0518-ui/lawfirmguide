import type { MetadataRoute } from "next";

import { SITE } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "로펌가이드",
    short_name: "로펌가이드",
    description: SITE.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#F4F5F6",
    theme_color: "#08192B",
    lang: "ko-KR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
