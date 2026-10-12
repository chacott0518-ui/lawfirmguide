import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { CONTENT_PAGES } from "@/content/pages";
import { HOME_SEO } from "@/content/pages/home";
import { INFO_HUB_SEO } from "@/content/info/hub";
import { absoluteUrl } from "@/lib/site-url";

const HOME_PUB_DATE = "2026-07-31";
const INFO_HUB_PUB_DATE = "2026-08-12";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00.000Z`).toUTCString();
}

/**
 * 공개 URL description 기반 RSS 2.0.
 * 본문 HTML은 임의 생성하지 않는다.
 */
export function buildRssXml(): string {
  const channelLink = absoluteUrl("/");
  const items = [
    {
      title: HOME_SEO.title,
      description: HOME_SEO.description,
      link: channelLink,
      guid: channelLink,
      pubDate: HOME_PUB_DATE,
    },
    ...CONTENT_PAGES.map((page) => {
      const link = absoluteUrl(page.href);
      return {
        title: page.seo.title,
        description: page.seo.description,
        link,
        guid: link,
        pubDate: page.publishedAt || page.updatedAt,
      };
    }),
    {
      title: INFO_HUB_SEO.title,
      description: INFO_HUB_SEO.description,
      link: absoluteUrl(ROUTES.infoHub),
      guid: absoluteUrl(ROUTES.infoHub),
      pubDate: INFO_HUB_PUB_DATE,
    },
  ];

  const itemXml = items
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
      <pubDate>${toRfc822(item.pubDate)}</pubDate>
      <description>${escapeXml(item.description)}</description>
    </item>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE.shortName)}</title>
    <link>${escapeXml(channelLink)}</link>
    <description>${escapeXml(HOME_SEO.description)}</description>
    <language>ko</language>
    <lastBuildDate>${toRfc822(HOME_PUB_DATE)}</lastBuildDate>
${itemXml}
  </channel>
</rss>
`;
}

export function rssResponse(): Response {
  return new Response(buildRssXml(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
