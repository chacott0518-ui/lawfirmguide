import { CONSULT_PREP_PAGE } from "@/content/pages/consult-prep";
import type { ContentPage, InfoGuideCard } from "@/types/content";

/** 핵심 6카드·GNB 밖의 법률정보 가이드 */
export const INFO_GUIDE_PAGES: ContentPage[] = [CONSULT_PREP_PAGE];

function toInfoCard(page: ContentPage): InfoGuideCard {
  return {
    id: page.id as InfoGuideCard["id"],
    href: page.href,
    topicLabel: page.infoTopicLabel || page.navLabel,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    publishedAt: page.publishedAt,
    topicName: page.infoTopicLabel || page.navLabel,
  };
}

/** 홈 ‘이혼 법률 관련 정보’ 섹션 — 배열 추가만으로 카드 증가 */
export const INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_PAGES.map(toInfoCard);
