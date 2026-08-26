import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const SCHEDULE_COMPARE_CHECK_PAGE: ContentPage = {
  id: "scheduleCompareCheck",
  order: 172,
  numberLabel: "02",
  slug: "조정-소송-일정-차이-확인",
  href: ROUTES.scheduleCompareCheck,
  navLabel: "조정과 소송 일정 차이 확인",
  breadcrumbLabel: "조정과 소송 일정 차이 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "조정과 소송, 일정 차이는 어떻게 확인하나요?",
  heading: "조정과 소송, 일정 차이는 어떻게 확인하나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "조정기일과 변론기일의 진행 방식과 일정 차이를 비교해 안내합니다.",
  intro: [
    "조정과 소송은 진행 방식과 기일 간격이 다를 수 있어, 전체 일정을 가늠할 때 각각의 특징을 이해해 두면 도움이 됩니다. 다만 실제 일정은 사건과 재판부에 따라 달라질 수 있습니다.",
    "이 글은 조정과 소송의 일정상 일반적인 차이를 비교한 법률정보이며, 특정 소요 기간을 보장하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "schedule-compare-01",
    "schedule-compare-02",
    "schedule-compare-03",
    "schedule-compare-04",
    "schedule-compare-05",
  ],
  faqTitle: "조정·소송 일정 차이 자주 묻는 질문",
  conclusion: [
    "조정과 소송은 진행 방식과 기일 성격이 다르며, 조정이 성립하지 않으면 소송으로 이어지는 경우가 많습니다. 전체 일정은 쟁점의 다툼 정도와 재판부 사정에 따라 달라질 수 있습니다.",
    "이 글은 일반적인 법률정보 제공을 목적으로 하며 개별 사건에 대한 법률 자문을 대체하지 않습니다.",
  ],
  sources: INFO_GUIDE_OFFICIAL_SOURCES,
  sourcesAsDetails: true,
  thumbnail: media.thumbnail,
  topImages: [media.thumbnail],
  bodyImage: media.secondaryImage,
  heroImage: media.thumbnail,
  secondaryImage: media.secondaryImage,
  repeatImage: null,
  inlineImage: media.secondaryImage,
  accentColor: media.accentColor,
  accentHoverColor: media.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  showPublishedDate: true,
  repeatImageBeforeSectionNumber: null,
  relatedGuideIds: ["mediationProcess", "litigationProcess", "durationFactors"],
  keySummary: [
    {
      numberLabel: "01",
      title: "조정기일",
      text: "판사·조정위원과 합의점을 모색하는 절차입니다.",
    },
    {
      numberLabel: "02",
      title: "변론기일",
      text: "쟁점을 심리하고 증거조사가 이뤄질 수 있는 절차입니다.",
    },
    {
      numberLabel: "03",
      title: "전치 관계",
      text: "재판상 이혼은 조정을 먼저 거치는 경우가 많습니다.",
    },
    {
      numberLabel: "04",
      title: "전체 일정",
      text: "조정 불성립 시 소송으로 이어져 기간이 늘어날 수 있습니다.",
    },
  ],
  seo: {
    title: "조정과 소송, 일정 차이는 어떻게 확인하나요? | 로펌가이드",
    description:
      "이혼 조정기일과 변론기일의 진행 방식과 일정 차이를 비교해 안내합니다.",
    keywords: ["조정 소송 일정", "이혼조정 기간", "이혼소송 일정"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "schedule-compare-mediation",
      order: 1,
      numberLabel: "01",
      heading: "조정기일은 어떤 간격으로 진행되나요?",
      layout: "prose",
      directAnswer:
        "조정기일은 사건과 재판부에 따라 간격이 다를 수 있으며, 합의 진행 상황에 따라 여러 차례 진행되기도 하고 한두 번에 끝나기도 한다고 알려져 있습니다.",
      paragraphs: [
        "조정은 소송보다 상대적으로 유연하게 일정이 조율될 수 있다고 설명되는 경우가 있지만, 이 역시 사건마다 다를 수 있는 사안입니다.",
      ],
      relatedHref: ROUTES.mediationProcess,
      relatedLabel: "이혼조정절차 안내 보기",
    },
    {
      id: "schedule-compare-litigation",
      order: 2,
      numberLabel: "02",
      heading: "변론기일은 어떤 간격으로 진행되나요?",
      layout: "prose",
      directAnswer:
        "변론(심리)기일은 증거조사 필요성과 재판부 일정에 따라 간격이 달라질 수 있다고 알려져 있습니다. 쟁점이 복잡할수록 여러 차례의 기일이 필요할 수 있습니다.",
      paragraphs: [
        "각 기일 사이에 준비서면 제출, 증거 보완 등의 작업이 이뤄지는 경우가 많아, 기일 간격이 곧 전체 소요 기간과 비례한다고 단순화하기는 어렵습니다.",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 보기",
    },
    {
      id: "schedule-compare-relation",
      order: 3,
      numberLabel: "03",
      heading: "조정과 소송은 어떤 순서로 이어지나요?",
      layout: "prose",
      directAnswer:
        "가사소송법의 조정전치주의에 따라 재판상 이혼 관련 사건은 원칙적으로 조정을 먼저 거치는 경우가 많다고 알려져 있습니다. 조정이 성립하지 않으면 소송 절차로 넘어가게 됩니다.",
      paragraphs: [
        "이 흐름을 이해해 두면, 전체 예상 일정을 조정 단계와 소송 단계로 나눠 가늠하는 데 참고가 될 수 있습니다.",
      ],
      relatedHref: ROUTES.procedureComparison,
      relatedLabel: "협의이혼과 재판상 이혼 차이 보기",
    },
    {
      id: "schedule-compare-check",
      order: 4,
      numberLabel: "04",
      heading: "일정을 상담에서 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "본인 사건이 현재 어느 단계에 있는지, 다음 기일까지 무엇을 준비해야 하는지를 상담에서 구체적으로 질문하면 일정 감각을 잡는 데 도움이 됩니다.",
      paragraphs: [
        "일정은 재판부의 사정에 따라 변동될 수 있으므로, 특정 날짜를 확정적으로 안내받았더라도 변동 가능성을 열어 두는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.durationFactors,
      relatedLabel: "이혼소송 기간 달라지는 요소 보기",
    },
  ],
};
