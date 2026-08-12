import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CONSULT_METHOD_COMPARE_PAGE: ContentPage = {
  id: "consultMethodCompare",
  order: 182,
  numberLabel: "02",
  slug: "변호사-상담방식-비교",
  href: ROUTES.consultMethodCompare,
  navLabel: "변호사 상담방식 비교",
  breadcrumbLabel: "변호사 상담방식 비교",
  categoryLabel: SITE.categoryLabel,
  h1: "변호사 상담방식, 무엇을 비교해야 하나요?",
  heading: "변호사 상담방식, 무엇을 비교해야 하나요?",
  infoTopicLabel: "변호사 선택",
  infoCardDescription:
    "대면·전화·화상 상담 등 방식별 특징과 확인할 점을 안내합니다.",
  intro: [
    "이혼 상담은 대면, 전화, 화상 등 다양한 방식으로 진행될 수 있습니다. 각 방식마다 장단점이 다를 수 있어, 본인 상황에 맞는 방식을 선택하는 것이 중요합니다.",
    "이 글은 상담 방식별 특징을 비교한 일반적인 법률정보이며, 특정 방식이 모든 사람에게 더 우수하다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "consult-method-01",
    "consult-method-02",
    "consult-method-03",
    "consult-method-04",
    "consult-method-05",
  ],
  faqTitle: "변호사 상담방식 비교 자주 묻는 질문",
  conclusion: [
    "대면·전화·화상 상담은 각각 장단점이 있어 본인의 사정과 사건의 복잡성에 맞춰 선택하는 것이 좋습니다. 어떤 방식을 선택하든 충분한 설명을 받는 것이 중요합니다.",
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
  relatedGuideIds: ["lawyerSelectionCheck", "caseHandlingSystemCheck", "consultationQuestions"],
  keySummary: [
    {
      numberLabel: "01",
      title: "대면 상담",
      text: "자료를 직접 보여주며 상세히 설명하기 좋은 방식입니다.",
    },
    {
      numberLabel: "02",
      title: "전화 상담",
      text: "간단한 문의나 초기 확인에 활용되는 경우가 많습니다.",
    },
    {
      numberLabel: "03",
      title: "화상 상담",
      text: "원거리에서도 자료를 공유하며 진행할 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "선택 기준",
      text: "사건 복잡성과 본인 여건을 고려해 선택합니다.",
    },
  ],
  seo: {
    title: "변호사 상담방식, 무엇을 비교해야 하나요? | 로펌가이드",
    description:
      "이혼변호사 대면·전화·화상 상담 방식별 특징과 확인할 점을 안내합니다.",
    keywords: ["변호사 상담방식", "화상상담", "전화상담", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "consult-method-inperson",
      order: 1,
      numberLabel: "01",
      heading: "대면 상담은 어떤 장점이 있나요?",
      layout: "prose",
      directAnswer:
        "관련 서류나 자료를 직접 보여주며 설명할 수 있어, 복잡한 재산분할이나 다수의 증거가 있는 사건에서 유용하게 활용될 수 있다고 알려져 있습니다.",
      paragraphs: [
        "다만 이동 시간과 일정 조율이 필요할 수 있어, 시급성이나 거리에 따라 다른 방식과 비교해 볼 수 있습니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "consult-method-phone-video",
      order: 2,
      numberLabel: "02",
      heading: "전화·화상 상담은 언제 활용하면 좋은가요?",
      layout: "prose",
      directAnswer:
        "간단한 문의나 초기 상담, 원거리에 있는 경우 전화·화상 상담이 시간과 이동 부담을 줄이는 방법으로 활용될 수 있습니다. 화상 상담은 화면 공유를 통해 자료를 함께 볼 수 있는 경우도 있습니다.",
      paragraphs: [
        "다만 복잡한 서류를 세밀하게 검토해야 하는 경우, 대면 상담이나 자료를 사전에 전달하는 방식이 함께 검토될 수 있습니다.",
      ],
      relatedHref: ROUTES.lawyerSelectionCheck,
      relatedLabel: "이혼변호사 선임 전 확인사항 보기",
    },
    {
      id: "consult-method-choose",
      order: 3,
      numberLabel: "03",
      heading: "방식은 어떻게 선택하면 좋을까요?",
      layout: "prose",
      directAnswer:
        "사건의 복잡성, 본인의 시간적 여건, 거리 등을 고려해 선택하는 것이 일반적입니다. 초기 상담은 전화·화상으로, 이후 구체적인 논의는 대면으로 진행하는 방식도 활용될 수 있습니다.",
      paragraphs: [
        "특정 방식이 다른 방식보다 항상 우수하다고 단정할 수 없으며, 본인 상황에 맞는 조합을 선택하는 것이 중요합니다.",
      ],
      relatedHref: ROUTES.caseHandlingSystemCheck,
      relatedLabel: "사건 담당체계 확인방법 보기",
    },
    {
      id: "consult-method-caution",
      order: 4,
      numberLabel: "04",
      heading: "상담 방식과 관계없이 확인할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "어떤 방식을 선택하든 질문에 대한 설명이 구체적인지, 충분한 시간을 들여 상담이 진행되는지를 확인하는 것이 중요합니다. 짧은 시간에 결론만 제시하는 상담은 신중하게 볼 필요가 있습니다.",
      paragraphs: [
        "상담 방식보다 상담의 질과 충실도가 더 중요한 기준이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
