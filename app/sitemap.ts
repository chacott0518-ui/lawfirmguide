import type { MetadataRoute } from "next";

import { ROUTES } from "@/config/routes";
import { CONTENT_PAGES } from "@/content/pages";
import { absoluteUrl } from "@/lib/site-url";

/** sitemap/RSS에 반영하는 홈 lastmod — 본문·DOM 최적화 반영일 */
const HOME_LAST_MODIFIED = "2026-08-26";
const INFO_HUB_LAST_MODIFIED = "2026-08-26";

/** 색인 대상: 홈 + 핵심 6개 + 정보가이드 31개 + 법률정보 허브. redirect·칼럼 URL 제외 */
export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(HOME_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const pages: MetadataRoute.Sitemap = CONTENT_PAGES.map((page) => ({
    url: absoluteUrl(page.href),
    lastModified: new Date(page.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const infoHub: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(ROUTES.infoHub),
      lastModified: new Date(INFO_HUB_LAST_MODIFIED),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  return [...home, ...pages, ...infoHub];
}
