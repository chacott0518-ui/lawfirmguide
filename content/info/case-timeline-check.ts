import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CASE_TIMELINE_CHECK_PAGE: ContentPage = {
  id: "caseTimelineCheck",
  order: 112,
  numberLabel: "02",
  slug: "이혼소송-상담-전-사건흐름-정리",
  href: ROUTES.caseTimelineCheck,
  navLabel: "이혼소송 상담 전 사건 흐름 정리",
  breadcrumbLabel: "이혼소송 상담 전 사건 흐름 정리",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 상담 전, 사건 흐름은 어떻게 정리하나요?",
  heading: "이혼소송 상담 전, 사건 흐름은 어떻게 정리하나요?",
  infoTopicLabel: "상담·준비",
  infoCardDescription:
    "혼인부터 현재까지의 경과를 시간순으로 정리하는 방법을 안내합니다.",
  intro: [
    "이혼상담에서는 ‘무엇이 언제 있었는지’를 시간순으로 정리해 전달하면 사실관계를 더 정확하게 설명할 수 있습니다. 기억에만 의존하면 사건 순서가 뒤섞이거나 중요한 시점을 빠뜨리기 쉽습니다.",
    "이 글은 사건 흐름을 정리하는 일반적인 방법을 안내하는 법률정보이며, 정리한 내용만으로 법률적 결과나 절차 선택이 자동으로 정해지지는 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "timeline-01",
    "timeline-02",
    "timeline-03",
    "timeline-04",
    "timeline-05",
  ],
  faqTitle: "이혼소송 상담 전 사건 흐름 정리 자주 묻는 질문",
  conclusion: [
    "사건 흐름을 날짜 중심으로 정리해 두면 상담에서 사실관계를 더 명확하게 전달할 수 있습니다. 다만 정리한 내용 자체가 법률적 판단을 대신하지는 않으며, 쟁점 해당 여부는 상담을 통해 확인해야 합니다.",
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
  relatedGuideIds: ["consultPrep", "consultationQuestions", "factConveyCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "혼인·별거 시점",
      text: "혼인신고일과 별거 시작 시점을 날짜로 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "주요 사건",
      text: "분쟁의 계기가 된 사건과 경과를 순서대로 나열합니다.",
    },
    {
      numberLabel: "03",
      title: "기존 절차",
      text: "이미 진행한 협의·조정·소송이 있다면 단계와 시기를 표시합니다.",
    },
    {
      numberLabel: "04",
      title: "사실과 추측 구분",
      text: "확인된 사실과 전해 들은 이야기를 구분해 적습니다.",
    },
  ],
  seo: {
    title: "이혼소송 상담 전, 사건 흐름은 어떻게 정리하나요? | 로펌가이드",
    description:
      "이혼소송 상담 전 혼인·별거·분쟁 경과를 시간순으로 정리하는 방법을 안내합니다.",
    keywords: ["이혼소송 상담 전", "사건 흐름 정리", "이혼변호사 상담 준비", "이혼소송 준비"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "timeline-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 시간순으로 정리해야 하나요?",
      layout: "prose",
      directAnswer:
        "사실관계를 시간순으로 정리하면 상담에서 사건의 맥락을 더 정확하게 전달할 수 있고, 어떤 시점의 자료가 더 필요한지도 함께 파악하기 쉬워지기 때문입니다.",
      paragraphs: [
        "이혼 관련 상담에서는 ‘언제부터 무엇이 달라졌는지’가 중요한 출발점이 되는 경우가 많습니다. 순서가 뒤섞인 설명은 쟁점을 흐리게 할 수 있어, 날짜를 기준으로 정리하는 편이 안전합니다.",
        "특정 사실이 재판상 이혼 원인에 해당하는지는 사실관계와 증거, 법률 해석에 따라 달라질 수 있으므로, 이 글에서 단정하지 않습니다. 원인 해당 여부는 상담에서 확인할 질문으로 남겨 두는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.consultPrep,
      relatedLabel: "이혼소송 상담 전 준비 안내 보기",
    },
    {
      id: "timeline-items",
      order: 2,
      numberLabel: "02",
      heading: "무엇을 시간순으로 정리하면 좋은가요?",
      layout: "checklist",
      directAnswer:
        "혼인신고일, 별거 시작 시점, 분쟁의 계기가 된 사건, 이미 진행한 협의·조정·소송 절차, 주고받은 문서·대화 시점을 날짜와 함께 정리하는 편이 도움이 됩니다.",
      paragraphs: [
        "정확한 날짜가 기억나지 않으면 대략적인 시기(예: ‘작년 가을쯤’)라도 적어 두고, 이후 문서나 메시지로 확인해 보완하는 방법도 있습니다.",
      ],
      bullets: [
        "혼인신고일과 별거 시작 시점",
        "분쟁이 시작된 계기와 당시 상황",
        "이미 진행한 협의·조정·소송 절차와 시기",
        "주고받은 통지·문서·대화가 있었던 날짜",
        "현재 진행 중인 절차가 있다면 그 단계",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "timeline-fact-guess",
      order: 3,
      numberLabel: "03",
      heading: "사실과 추측은 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "직접 확인한 사실과 전해 들은 이야기, 추측을 구분해 적어 두면 상담에서 쟁점을 더 명확하게 전달할 수 있습니다. 확인되지 않은 내용을 사실처럼 정리하지 않는 것이 중요합니다.",
      paragraphs: [
        "메모할 때 ‘직접 목격’, ‘문서로 확인’, ‘들은 이야기’처럼 출처를 함께 표시해 두면 나중에 상담에서 구분해 설명하기 쉬워집니다. 확인이 더 필요한 부분은 별도로 표시해 두는 편이 좋습니다.",
      ],
      relatedHref: ROUTES.factConveyCheck,
      relatedLabel: "이혼변호사 상담 사실관계 전달 방법 보기",
    },
    {
      id: "timeline-use",
      order: 4,
      numberLabel: "04",
      heading: "정리한 흐름을 상담에서 어떻게 활용하나요?",
      layout: "prose",
      directAnswer:
        "정리한 시간순 흐름을 상담 초반에 먼저 전달하면, 이후 질문과 자료 요청이 더 구체적으로 이뤄질 수 있습니다. 흐름만으로 절차나 결과가 자동으로 정해지지는 않습니다.",
      paragraphs: [
        "시간순 정리는 어디까지나 상담을 돕는 참고 자료이며, 실제 절차 선택과 쟁점 판단은 상담을 통해 함께 확인해야 합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
