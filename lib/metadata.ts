import type { Metadata } from "next";

import { HOME_OG_IMAGE } from "@/config/media";
import { SITE, VERIFICATION } from "@/config/site";
import { absoluteUrl } from "@/lib/site-url";
import type { PageSeo } from "@/types/content";

/** 공유용 기본 OG 이미지 — 신규 OG 준비 전 icon 사용 */
export const DEFAULT_OG_IMAGE = HOME_OG_IMAGE.src;
export const DEFAULT_OG_IMAGE_WIDTH = HOME_OG_IMAGE.width;
export const DEFAULT_OG_IMAGE_HEIGHT = HOME_OG_IMAGE.height;
export const DEFAULT_OG_IMAGE_ALT = HOME_OG_IMAGE.alt;

type BuildMetadataOptions = {
  seo: PageSeo;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

function buildVerification(): Metadata["verification"] | undefined {
  if (!VERIFICATION.google && !VERIFICATION.naver && !VERIFICATION.bing) {
    return undefined;
  }

  return {
    google: VERIFICATION.google,
    other: {
      ...(VERIFICATION.naver
        ? { "naver-site-verification": VERIFICATION.naver }
        : {}),
      ...(VERIFICATION.bing
        ? { "msvalidate.01": VERIFICATION.bing }
        : {}),
    },
  };
}

function resolveOgImage(seo: PageSeo) {
  const src = seo.socialImage || seo.ogImage || DEFAULT_OG_IMAGE;
  const isIcon = src.endsWith(".svg") || src === "/icon.svg";
  return {
    url: absoluteUrl(src),
    width: isIcon ? DEFAULT_OG_IMAGE_WIDTH : 1200,
    height: isIcon ? DEFAULT_OG_IMAGE_HEIGHT : 630,
    alt: DEFAULT_OG_IMAGE_ALT,
  };
}

export function buildPageMetadata({
  seo,
  path,
  type = "article",
  publishedTime,
  modifiedTime,
}: BuildMetadataOptions): Metadata {
  const url = absoluteUrl(path);
  const ogImage = resolveOgImage(seo);

  return {
    title: {
      absolute: seo.title,
    },
    description: seo.description,
    ...(seo.keywords && seo.keywords.length > 0
      ? { keywords: Array.from(new Set(seo.keywords)) }
      : {}),
    category: seo.category,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.shortName,
      title: seo.title,
      description: seo.description,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [ogImage.url],
    },
    verification: buildVerification(),
  };
}
