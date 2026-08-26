import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CASE_HANDLING_SYSTEM_CHECK_PAGE: ContentPage = {
  id: "caseHandlingSystemCheck",
  order: 183,
  numberLabel: "03",
  slug: "사건-담당체계-확인방법",
  href: ROUTES.caseHandlingSystemCheck,
  navLabel: "사건 담당체계 확인방법",
  breadcrumbLabel: "사건 담당체계 확인방법",
  categoryLabel: SITE.categoryLabel,
  h1: "사건 담당체계는 어떻게 확인하나요?",
  heading: "사건 담당체계는 어떻게 확인하나요?",
  infoTopicLabel: "변호사 선택",
  infoCardDescription:
    "상담과 실제 사건 진행을 누가 담당하는지 확인하는 방법을 안내합니다.",
  intro: [
    "상담한 변호사와 실제 사건을 진행하는 변호사가 다른 경우가 있을 수 있습니다. 담당체계를 미리 확인해 두면 진행 과정에서의 소통 혼선을 줄이는 데 도움이 됩니다.",
    "이 글은 사건 담당체계를 확인하는 방법을 안내하는 일반적인 법률정보이며, 특정 담당 방식이 더 우수하다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "case-handling-01",
    "case-handling-02",
    "case-handling-03",
    "case-handling-04",
    "case-handling-05",
  ],
  faqTitle: "사건 담당체계 확인방법 자주 묻는 질문",
  conclusion: [
    "상담자와 실제 사건 담당자가 같은지, 진행 상황을 어떻게 공유받는지, 소통 창구는 누구인지 확인해 두는 것이 중요합니다. 위임계약서에 담당자가 명시되어 있는지도 함께 확인하는 것이 안전합니다.",
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
  relatedGuideIds: ["lawyerSelectionCheck", "retainerAgreementCheck", "consultMethodCompare"],
  keySummary: [
    {
      numberLabel: "01",
      title: "담당자 확인",
      text: "상담자와 실제 사건 담당자가 같은지 질문합니다.",
    },
    {
      numberLabel: "02",
      title: "소통 창구",
      text: "진행 상황을 누구를 통해 공유받는지 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "계약서 명시",
      text: "위임계약서에 담당 변호사가 명시되어 있는지 봅니다.",
    },
    {
      numberLabel: "04",
      title: "변경 가능성",
      text: "담당자가 바뀔 수 있는 경우와 절차를 확인합니다.",
    },
  ],
  seo: {
    title: "사건 담당체계는 어떻게 확인하나요? | 로펌가이드",
    description:
      "이혼소송 상담과 실제 사건 진행을 누가 담당하는지 확인하는 방법을 안내합니다.",
    keywords: ["사건 담당체계", "변호사 담당자", "이혼소송 담당변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "case-handling-check",
      order: 1,
      numberLabel: "01",
      heading: "왜 담당체계를 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "상담한 변호사와 실제 사건을 진행하는 변호사가 다르면, 사건 내용을 다시 설명해야 하거나 소통에 혼선이 생길 수 있습니다. 이를 미리 확인해 두면 이후 절차가 더 원활하게 진행될 수 있습니다.",
      paragraphs: [
        "규모가 큰 로펌일수록 상담과 실제 진행을 다른 인력이 맡는 경우도 있을 수 있어, 이 부분을 상담 초기에 질문하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.lawyerSelectionCheck,
      relatedLabel: "이혼변호사 선임 전 확인사항 보기",
    },
    {
      id: "case-handling-question",
      order: 2,
      numberLabel: "02",
      heading: "어떤 질문으로 확인하면 좋은가요?",
      layout: "checklist",
      directAnswer:
        "‘제 사건은 누가 실제로 담당하나요’, ‘진행 상황은 어떻게 공유받나요’, ‘담당자가 바뀔 가능성이 있나요’처럼 구체적으로 질문하면 명확한 답변을 받을 수 있습니다.",
      paragraphs: [
        "답변이 모호하다면 다시 구체적으로 확인을 요청하는 것이 안전합니다.",
      ],
      bullets: [
        "제 사건을 실제로 담당하는 변호사는 누구인가요?",
        "진행 상황은 어떤 방식으로 공유받나요?",
        "담당자가 바뀔 가능성이 있나요?",
        "긴급한 상황에는 어떻게 연락하나요?",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
    {
      id: "case-handling-contract",
      order: 3,
      numberLabel: "03",
      heading: "계약서에서는 무엇을 확인하나요?",
      layout: "prose",
      directAnswer:
        "위임계약서에 담당 변호사의 이름과 업무 범위가 명시되어 있는지 확인하는 것이 중요합니다. 구두로만 안내받은 담당자 정보는 계약서에도 반영되어 있는지 다시 확인해야 합니다.",
      paragraphs: [
        "계약서에 명시되지 않은 구두 약속은 나중에 확인이 어려울 수 있어, 중요한 사항은 서면으로 남기는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.retainerAgreementCheck,
      relatedLabel: "위임계약서 확인사항 보기",
    },
    {
      id: "case-handling-change",
      order: 4,
      numberLabel: "04",
      heading: "담당자가 바뀌면 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "사정에 따라 담당자가 바뀔 수 있다는 점을 미리 안내받는 것이 좋습니다. 담당자가 바뀌는 경우 사건 인수인계가 어떻게 이뤄지는지도 확인해 두면 도움이 됩니다.",
      paragraphs: [
        "담당자 변경 시 이전 상담 내용과 자료가 제대로 전달되는지 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.consultMethodCompare,
      relatedLabel: "변호사 상담방식 비교 보기",
    },
  ],
};
