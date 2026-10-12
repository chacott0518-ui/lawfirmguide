import type { OptionalEntity, SiteEntity } from "@/types/seo";
import { topicConfig } from "@/config/topic";
import { getSiteUrl } from "@/lib/site-url";

export const siteEntity: SiteEntity = {
  name: "로펌가이드",
  type: "WebSite",
  description:
    "이혼전문변호사 상담이 필요한 상황, 협의이혼·재판상 이혼 절차, 재산분할·양육권·위자료 판단 기준을 정리한 법률정보 안내 사이트",
  logo: "/icon.svg",
  language: topicConfig.locale,
};

/** 실제 운영 주체가 확정될 때만 enabled=true */
export const operatorEntity: OptionalEntity = {
  enabled: true,
  name: "로펌가이드",
};

/** 광고주 확정 시에만 enabled=true — LegalService는 광고주 확정 후 별도 추가 */
export const sponsorEntity: OptionalEntity = {
  enabled: false,
};

/** 실제 법률 검수가 있을 때만 enabled=true */
export const reviewerEntity: OptionalEntity = {
  enabled: false,
};

export const SITE = {
  name: siteEntity.name,
  shortName: topicConfig.siteName,
  tagline: siteEntity.description,
  locale: topicConfig.locale.replace("-", "_"),
  categoryLabel: topicConfig.defaultCategory,
  primaryKeyword: topicConfig.primaryKeyword,
  operatorName: topicConfig.operatorName,
  get url() {
    return getSiteUrl();
  },
  publisher: {
    name: siteEntity.name,
    type: "Organization" as const,
  },
} as const;

export const VERIFICATION = {
  naver: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || undefined,
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
} as const;
