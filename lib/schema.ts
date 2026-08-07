import { HOME_OG_IMAGE } from "@/config/media";
import { SITE } from "@/config/site";
import { CONTENT_CARDS } from "@/lib/content-registry";
import { ROUTES } from "@/config/routes";
import { absoluteUrl } from "@/lib/site-url";
import type { ContentPage } from "@/types/content";
import type { FaqItem } from "@/types/faq";

const DEFAULT_OG_IMAGE = HOME_OG_IMAGE.src;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": absoluteUrl("/#organization"),
    name: SITE.shortName,
    url: absoluteUrl("/"),
    description: SITE.tagline,
    logo: absoluteUrl("/icon.svg"),
  };
}

export function websiteJsonLd() {
  const siteUrl = absoluteUrl("/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: SITE.name,
    url: siteUrl,
    description: SITE.tagline,
    inLanguage: "ko-KR",
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function webPageJsonLd(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "WebPage" | "Article";
}) {
  const url = absoluteUrl(options.path);
  const pageType = options.type ?? "WebPage";
  const imageSrc = options.image || DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": url,
    name: options.name,
    description: options.description,
    url,
    mainEntityOfPage: url,
    inLanguage: "ko-KR",
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
    ...(imageSrc ? { image: absoluteUrl(imageSrc) } : {}),
  };
}

export function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} 주요 콘텐츠`,
    itemListElement: CONTENT_CARDS.map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: absoluteUrl(card.href),
      image: absoluteUrl(card.image.src),
      description: card.description,
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * 게시·수정일이 콘텐츠 데이터에 있을 때만 Article을 사용한다.
 * author는 Organization(로펌가이드 편집팀)만 사용하며 Person을 넣지 않는다.
 * LegalService / Review / AggregateRating 는 생성하지 않는다.
 */
export function articleJsonLd(page: ContentPage) {
  const pageUrl = absoluteUrl(page.href);
  const siteUrl = absoluteUrl("/");
  const imageSrc = page.seo.socialImage || page.seo.ogImage || DEFAULT_OG_IMAGE;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.heading,
    description: page.seo.description,
    image: absoluteUrl(imageSrc),
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
    inLanguage: "ko-KR",
    articleSection: page.categoryLabel,
    author: {
      "@type": "Organization",
      name: "로펌가이드 편집팀",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: SITE.shortName,
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    isPartOf: {
      "@id": absoluteUrl("/#website"),
    },
  };
}

export function faqPageJsonLd(items: FaqItem[], path: string = ROUTES.faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
