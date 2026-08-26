import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CHILD_SUPPORT_PREP_PAGE: ContentPage = {
  id: "childSupportPrep",
  order: 142,
  numberLabel: "02",
  slug: "양육비-상담-전-준비자료",
  href: ROUTES.childSupportPrep,
  navLabel: "양육비 상담 전 준비자료",
  breadcrumbLabel: "양육비 상담 전 준비자료",
  categoryLabel: SITE.categoryLabel,
  h1: "양육비 상담 전, 어떤 자료를 준비하나요?",
  heading: "양육비 상담 전, 어떤 자료를 준비하나요?",
  infoTopicLabel: "자녀·양육",
  infoCardDescription:
    "소득·지출·자녀 관련 비용 등 양육비 상담에 필요한 자료를 안내합니다.",
  intro: [
    "양육비 상담에서는 부모 각자의 소득, 자녀 관련 비용, 현재 생활 여건을 함께 확인하는 경우가 많습니다. 관련 자료를 미리 정리해 두면 예상 범위와 산정 기준을 더 구체적으로 논의할 수 있습니다.",
    "이 글은 양육비 상담 전 준비할 자료를 안내하는 일반적인 법률정보이며, 특정 금액을 양육비 기준으로 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "child-support-01",
    "child-support-02",
    "child-support-03",
    "child-support-04",
    "child-support-05",
  ],
  faqTitle: "양육비 상담 전 준비자료 자주 묻는 질문",
  conclusion: [
    "양육비 상담에서는 부모 각자의 소득 자료와 자녀 관련 비용을 정리해 두는 것이 도움이 됩니다. 구체적인 금액은 법원의 양육비 산정기준표 등을 참고해 사안별로 검토되는 경우가 많습니다.",
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
  relatedGuideIds: ["custodyConsultCheck", "visitationConsultCheck", "childEnvironmentDocs"],
  keySummary: [
    {
      numberLabel: "01",
      title: "소득 자료",
      text: "부모 각자의 급여명세서·소득금액증명원 등을 준비합니다.",
    },
    {
      numberLabel: "02",
      title: "자녀 비용",
      text: "교육비·생활비 등 자녀 관련 지출 내역을 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "산정기준표",
      text: "법원의 양육비 산정기준표를 참고 자료로 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "지급 방식",
      text: "지급 주기, 방법, 향후 변경 가능성도 함께 논의합니다.",
    },
  ],
  seo: {
    title: "양육비 상담 전, 어떤 자료를 준비하나요? | 로펌가이드",
    description:
      "이혼 양육비 상담 전 소득·지출·자녀 관련 비용 등 준비할 자료를 안내합니다.",
    keywords: ["양육비 상담", "양육비 산정", "이혼 양육비"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "child-support-income",
      order: 1,
      numberLabel: "01",
      heading: "소득 자료는 왜 필요한가요?",
      layout: "prose",
      directAnswer:
        "양육비는 부모 각자의 소득 수준을 참고 요소로 논의되는 경우가 많다고 알려져 있어, 급여명세서, 소득금액증명원, 사업소득 관련 자료를 준비해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "소득이 일정하지 않은 경우(프리랜서, 자영업 등)에는 최근 몇 개월간의 수입 내역을 정리해 두는 방법이 참고될 수 있습니다.",
      ],
      relatedHref: ROUTES.custodyConsultCheck,
      relatedLabel: "양육권 상담 전 확인사항 보기",
    },
    {
      id: "child-support-expense",
      order: 2,
      numberLabel: "02",
      heading: "자녀 관련 비용은 어떻게 정리하나요?",
      layout: "checklist",
      directAnswer:
        "교육비, 보육비, 의료비, 생활비 등 자녀와 관련해 실제로 지출되는 항목을 정리하면 양육비 논의에서 구체적인 참고 자료로 활용될 수 있습니다.",
      paragraphs: [
        "모든 영수증을 완벽히 갖추지 못했더라도, 월 평균 지출 구조를 대략적으로 정리하는 것으로 시작할 수 있습니다.",
      ],
      bullets: [
        "교육비(학원비·학교 관련 비용 등)",
        "보육비(어린이집·돌봄 비용 등)",
        "의료비 및 정기적인 건강 관리 비용",
        "그 외 자녀 관련 생활비",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 안내 보기",
    },
    {
      id: "child-support-guideline",
      order: 3,
      numberLabel: "03",
      heading: "양육비는 어떻게 정해지나요?",
      layout: "prose",
      directAnswer:
        "법원이 공표하는 양육비 산정기준표가 참고 자료로 활용되는 경우가 많다고 알려져 있으며, 부모의 소득, 자녀 수와 나이, 거주비용 등이 함께 고려됩니다. 기준표는 참고 자료일 뿐 모든 사건에 동일하게 적용된다고 단정할 수 없습니다.",
      paragraphs: [
        "실제 금액은 개별 사정(특별한 의료비, 교육비 등)에 따라 기준표와 다르게 정해질 수 있다고 설명되는 경우도 있어, 구체적인 산정은 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
    {
      id: "child-support-method",
      order: 4,
      numberLabel: "04",
      heading: "지급 방식은 어떻게 논의하나요?",
      layout: "prose",
      directAnswer:
        "매월 정기 지급 방식이 일반적으로 논의되지만, 지급 주기, 계좌, 향후 소득 변동 시 조정 가능성 등도 함께 정리해 두면 상담이 더 구체적으로 진행될 수 있습니다.",
      paragraphs: [
        "지급이 이뤄지지 않을 경우의 대응 방법(이행명령, 강제집행 등)도 궁금하다면 상담에서 함께 질문해 볼 수 있습니다.",
      ],
      relatedHref: ROUTES.childEnvironmentDocs,
      relatedLabel: "자녀 양육환경 자료 정리 보기",
    },
  ],
};
