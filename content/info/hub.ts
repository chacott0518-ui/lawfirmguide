import { SITE } from "@/config/site";
import { INFO_GUIDE_PAGES } from "@/content/info";
import type { ContentPage, InfoGuideId, PageSeo } from "@/types/content";

export type InfoHubCategoryId =
  | "consult"
  | "procedure"
  | "property"
  | "children"
  | "affair"
  | "evidence"
  | "lawyerSelect";

export type InfoHubCategory = {
  id: InfoHubCategoryId;
  label: string;
  emoji: string;
  guideIds: InfoGuideId[];
};

/** 허브 카테고리 — InfoGuide id를 그룹핑만 하고 콘텐츠는 그대로 재사용한다 */
export const INFO_HUB_CATEGORIES: InfoHubCategory[] = [
  {
    id: "consult",
    label: "상담·준비",
    emoji: "🔎",
    guideIds: [
      "consultPrep",
      "consultationQuestions",
      "caseTimelineCheck",
      "factConveyCheck",
    ],
  },
  {
    id: "procedure",
    label: "협의·조정·소송",
    emoji: "⚖️",
    guideIds: [
      "procedureComparison",
      "mediationProcess",
      "litigationProcess",
      "complaintServiceResponse",
      "answerBriefPrep",
      "postJudgmentProcess",
      "durationFactors",
      "scheduleCompareCheck",
    ],
  },
  {
    id: "property",
    label: "재산·금전",
    emoji: "💰",
    guideIds: [
      "propertyListPrep",
      "premaritalPropertyCheck",
      "realEstateDivisionDocs",
      "debtDivisionCheck",
    ],
  },
  {
    id: "children",
    label: "자녀·양육",
    emoji: "🧒",
    guideIds: [
      "custodyConsultCheck",
      "childSupportPrep",
      "visitationConsultCheck",
      "childEnvironmentDocs",
    ],
  },
  {
    id: "affair",
    label: "위자료·상간",
    emoji: "📄",
    guideIds: ["alimonyConsultCheck", "affairCaseFactsPrep", "affairEvidenceCaution"],
  },
  {
    id: "evidence",
    label: "증거·서류",
    emoji: "🗂️",
    guideIds: [
      "evidenceOrganizing",
      "messageEvidenceCheck",
      "recordingEvidenceCheck",
      "familyRelationDocsCheck",
    ],
  },
  {
    id: "lawyerSelect",
    label: "변호사 선택",
    emoji: "🤝",
    guideIds: [
      "lawyerSelectionCheck",
      "consultMethodCompare",
      "caseHandlingSystemCheck",
      "retainerAgreementCheck",
    ],
  },
];

export type InfoHubEntry = {
  id: InfoGuideId;
  href: string;
  title: string;
  description: string;
  categoryId: InfoHubCategoryId;
};

function toEntry(page: ContentPage, categoryId: InfoHubCategoryId): InfoHubEntry {
  return {
    id: page.id as InfoGuideId,
    href: page.href,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    categoryId,
  };
}

export function getInfoHubEntries(): InfoHubEntry[] {
  const entries: InfoHubEntry[] = [];

  for (const category of INFO_HUB_CATEGORIES) {
    for (const guideId of category.guideIds) {
      const page = INFO_GUIDE_PAGES.find((item) => item.id === guideId);
      if (!page) continue;
      entries.push(toEntry(page, category.id));
    }
  }

  return entries;
}

const MAX_RELATED_GUIDES = 6;

/**
 * 상세페이지 하단 "다른 이혼 법률정보" 카드용.
 * relatedGuideIds 우선, 부족하면 같은 카테고리에서 자동 보충. 최대 6개, 중복·자기 자신 제외.
 */
export function getRelatedInfoGuides(page: ContentPage): ContentPage[] {
  const result: ContentPage[] = [];
  const seen = new Set<string>([page.id]);

  const ownCategory = INFO_HUB_CATEGORIES.find((category) =>
    category.guideIds.includes(page.id as InfoGuideId),
  );

  for (const id of page.relatedGuideIds ?? []) {
    if (seen.has(id)) continue;
    const related = INFO_GUIDE_PAGES.find((item) => item.id === id);
    if (!related) continue;
    result.push(related);
    seen.add(related.id);
    if (result.length >= MAX_RELATED_GUIDES) return result;
  }

  if (ownCategory) {
    for (const id of ownCategory.guideIds) {
      if (result.length >= MAX_RELATED_GUIDES) break;
      if (seen.has(id)) continue;
      const related = INFO_GUIDE_PAGES.find((item) => item.id === id);
      if (!related) continue;
      result.push(related);
      seen.add(related.id);
    }
  }

  for (const candidate of INFO_GUIDE_PAGES) {
    if (result.length >= MAX_RELATED_GUIDES) break;
    if (seen.has(candidate.id)) continue;
    result.push(candidate);
    seen.add(candidate.id);
  }

  return result;
}

export const INFO_HUB_SEO: PageSeo = {
  title: "이혼 법률정보 | 상담·절차·재산·양육 가이드 탐색 | 로펌가이드",
  description:
    "이혼 상담 준비, 협의·조정·소송 절차, 재산분할, 자녀·양육, 위자료·상간, 증거·서류, 변호사 선택까지 주제별로 정리한 이혼 법률정보 탐색 허브입니다.",
  keywords: ["이혼 법률정보", "이혼 절차 정보", "이혼 상담 준비"],
  ogImage: "/icon.svg",
  socialImage: "/icon.svg",
  category: SITE.categoryLabel,
};
