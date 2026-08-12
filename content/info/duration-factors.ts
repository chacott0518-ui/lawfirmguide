import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const DURATION_FACTORS_PAGE: ContentPage = {
  id: "durationFactors",
  order: 171,
  numberLabel: "01",
  slug: "이혼소송-기간-달라지는-요소",
  href: ROUTES.durationFactors,
  navLabel: "이혼소송 기간 달라지는 요소",
  breadcrumbLabel: "이혼소송 기간 달라지는 요소",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 기간은 어떤 요소에 따라 달라지나요?",
  heading: "이혼소송 기간은 어떤 요소에 따라 달라지나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "쟁점의 다툼 정도, 증거조사 필요성 등 기간에 영향을 주는 요소를 안내합니다.",
  intro: [
    "이혼소송 기간은 사건마다 크게 다를 수 있어 특정 기간을 일률적으로 제시하기 어렵습니다. 쟁점의 다툼 정도, 증거조사 필요성, 당사자의 대응 방식 등 여러 요소가 함께 영향을 준다고 알려져 있습니다.",
    "이 글은 이혼소송 기간에 영향을 줄 수 있는 요소를 안내하는 일반적인 법률정보이며, 특정 기간을 보장하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "duration-01",
    "duration-02",
    "duration-03",
    "duration-04",
    "duration-05",
  ],
  faqTitle: "이혼소송 기간 자주 묻는 질문",
  conclusion: [
    "이혼소송 기간은 쟁점의 다툼 정도, 증거조사 필요성, 당사자의 협조 여부, 재판부 사정 등에 따라 달라질 수 있어 특정 기간을 단정할 수 없습니다. 예상 기간이 궁금하다면 본인 사건의 구체적인 쟁점을 바탕으로 상담에서 확인하는 것이 정확합니다.",
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
  relatedGuideIds: ["scheduleCompareCheck", "litigationProcess", "mediationProcess"],
  keySummary: [
    {
      numberLabel: "01",
      title: "협의 가능성",
      text: "당사자 간 합의 가능성이 클수록 빠르게 진행될 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "쟁점의 다툼 정도",
      text: "재산·양육 등 쟁점이 복잡할수록 기간이 늘어날 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "증거조사 필요성",
      text: "증인신문·감정 등이 필요하면 기간이 길어질 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "재판부 사정",
      text: "법원 일정과 사건 부담에 따라서도 달라질 수 있습니다.",
    },
  ],
  seo: {
    title: "이혼소송 기간은 어떤 요소에 따라 달라지나요? | 로펌가이드",
    description:
      "이혼소송 기간에 영향을 주는 쟁점 다툼 정도, 증거조사 필요성 등의 요소를 안내합니다.",
    keywords: ["이혼소송 기간", "이혼소송 소요기간", "이혼재판 기간", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "duration-agreement",
      order: 1,
      numberLabel: "01",
      heading: "협의 가능성은 기간에 어떤 영향을 주나요?",
      layout: "prose",
      directAnswer:
        "당사자 간 합의 가능성이 높을수록 조정 단계에서 사건이 마무리되는 경우가 많아 상대적으로 빠르게 진행될 수 있다고 알려져 있습니다. 반대로 합의가 어려우면 소송으로 이어져 기간이 늘어날 수 있습니다.",
      paragraphs: [
        "협의 가능성은 재산분할, 자녀 문제 등 쟁점별로 다를 수 있어, 일부는 합의하고 일부만 다투는 경우도 있습니다. 이런 경우에도 다투는 쟁점의 복잡성이 전체 기간에 영향을 줄 수 있습니다.",
      ],
      relatedHref: ROUTES.mediationProcess,
      relatedLabel: "이혼조정절차 안내 보기",
    },
    {
      id: "duration-issues",
      order: 2,
      numberLabel: "02",
      heading: "쟁점이 많으면 기간이 늘어나나요?",
      layout: "prose",
      directAnswer:
        "재산분할, 양육권, 위자료 등 다투는 쟁점이 많고 복잡할수록 심리에 필요한 시간이 늘어날 수 있다고 알려져 있습니다. 특히 재산 항목이 많거나 파악이 어려운 경우 기간에 영향을 줄 수 있습니다.",
      paragraphs: [
        "쟁점을 미리 정리하고 관련 자료를 충실히 준비하면, 불필요한 지연을 줄이는 데 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "duration-evidence",
      order: 3,
      numberLabel: "03",
      heading: "증거조사가 필요하면 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "증인신문, 사실조회, 문서송부촉탁, 감정 등 추가적인 증거조사가 필요한 경우 그만큼 절차가 길어질 수 있다고 알려져 있습니다.",
      paragraphs: [
        "증거를 미리 충분히 준비해 두면 추가 조사의 필요성을 줄일 수 있는 경우도 있어, 사전 준비가 기간 단축에 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "duration-court",
      order: 4,
      numberLabel: "04",
      heading: "재판부 사정도 영향을 주나요?",
      layout: "prose",
      directAnswer:
        "법원의 사건 부담, 기일 지정 간격 등 재판부 사정도 전체 기간에 영향을 줄 수 있는 요소로 알려져 있습니다. 이는 당사자가 조절할 수 있는 부분이 아닙니다.",
      paragraphs: [
        "예상 기간이 궁금하다면 일반적인 평균보다, 본인 사건의 쟁점과 진행 상황을 바탕으로 상담에서 확인하는 것이 더 정확할 수 있습니다.",
      ],
      relatedHref: ROUTES.scheduleCompareCheck,
      relatedLabel: "조정·소송 일정 차이 확인 보기",
    },
  ],
};
