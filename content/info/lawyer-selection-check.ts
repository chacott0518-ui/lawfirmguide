import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const LAWYER_SELECTION_CHECK_PAGE: ContentPage = {
  id: "lawyerSelectionCheck",
  order: 181,
  numberLabel: "01",
  slug: "이혼변호사-선임-전-확인사항",
  href: ROUTES.lawyerSelectionCheck,
  navLabel: "이혼변호사 선임 전 확인할 점",
  breadcrumbLabel: "이혼변호사 선임 전 확인할 점",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼변호사 선임 전, 무엇을 확인하나요?",
  heading: "이혼변호사 선임 전, 무엇을 확인하나요?",
  infoTopicLabel: "변호사 선택",
  infoCardDescription:
    "선임 전 설명 방식, 비용 구성, 담당체계 등 확인할 기준을 안내합니다.",
  intro: [
    "이혼변호사를 선임하기 전에는 상담 설명의 구체성, 비용 구성, 사건 담당체계, 위임계약 내용을 확인하는 것이 중요합니다. 특정 병원(로펌)이 최고라는 표현보다, 확인 항목을 기준으로 비교하는 편이 안전합니다.",
    "이 글은 선임 전 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 로펌이나 변호사를 추천하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "lawyer-selection-01",
    "lawyer-selection-02",
    "lawyer-selection-03",
    "lawyer-selection-04",
    "lawyer-selection-05",
  ],
  faqTitle: "이혼변호사 선임 전 확인사항 자주 묻는 질문",
  conclusion: [
    "선임 전에는 설명의 구체성, 비용 구성, 담당체계, 위임계약 내용을 함께 확인하는 것이 중요합니다. 특정 표현이나 광고 문구만으로 판단하기보다 직접 질문하고 답변의 구체성을 비교하는 편이 안전합니다.",
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
  relatedGuideIds: ["consultMethodCompare", "caseHandlingSystemCheck", "retainerAgreementCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "설명 구체성",
      text: "질문에 구체적인 근거를 들어 설명하는지 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "비용 구성",
      text: "보수·실비·추가비용 항목을 명확히 안내하는지 봅니다.",
    },
    {
      numberLabel: "03",
      title: "담당체계",
      text: "상담자와 실제 사건 담당자가 같은지 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "위임계약",
      text: "계약서 조항을 꼼꼼히 확인한 뒤 서명합니다.",
    },
  ],
  seo: {
    title: "이혼변호사 선임 전, 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼변호사 선임 전 설명 방식, 비용 구성, 담당체계 등 확인할 기준을 안내합니다.",
    keywords: ["이혼변호사 선임", "변호사 선임 기준", "이혼변호사 선택", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "lawyer-selection-explain",
      order: 1,
      numberLabel: "01",
      heading: "설명 방식은 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "질문에 대해 근거를 들어 구체적으로 설명하는지, 결과를 단정적으로 보장하는 표현을 쓰지 않는지 확인하는 것이 중요합니다. 승소를 보장하는 듯한 설명은 신중하게 볼 필요가 있습니다.",
      paragraphs: [
        "법률적 결과는 사실관계와 증거, 적용 법령, 법원의 판단에 따라 달라질 수 있어, ‘무조건 유리하다’는 식의 설명보다 쟁점과 확인이 필요한 부분을 구체적으로 짚어 주는 설명이 신뢰할 수 있는 상담의 특징으로 볼 수 있습니다.",
      ],
      relatedHref: ROUTES.consultMethodCompare,
      relatedLabel: "변호사 상담방식 비교 보기",
    },
    {
      id: "lawyer-selection-cost",
      order: 2,
      numberLabel: "02",
      heading: "비용 구성은 어떻게 확인하나요?",
      layout: "checklist",
      directAnswer:
        "착수금·성공보수 등 보수 항목, 인지액·송달료 등 실비, 추가 비용이 발생할 수 있는 조건을 구분해 안내받는 것이 중요합니다.",
      paragraphs: [
        "구체적인 비용 비교 기준은 이혼소송비용 안내에서 항목별로 확인할 수 있습니다.",
      ],
      bullets: [
        "착수금과 성공보수 조건",
        "인지액·송달료 등 실비 별도 여부",
        "추가 비용이 발생할 수 있는 상황",
        "계약 해지 시 정산 방식",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 안내 보기",
    },
    {
      id: "lawyer-selection-system",
      order: 3,
      numberLabel: "03",
      heading: "담당체계는 왜 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "상담한 변호사가 실제 사건을 담당하는지, 진행 상황을 누구를 통해 공유받는지 확인해 두면 이후 소통 과정에서의 혼선을 줄일 수 있습니다.",
      paragraphs: [
        "규모가 큰 로펌일수록 상담과 실제 진행을 다른 인력이 맡는 경우도 있을 수 있어, 이 부분을 미리 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.caseHandlingSystemCheck,
      relatedLabel: "사건 담당체계 확인방법 보기",
    },
    {
      id: "lawyer-selection-contract",
      order: 4,
      numberLabel: "04",
      heading: "계약 전 마지막으로 확인할 것은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "위임계약서에 담당 변호사, 업무 범위, 비용 조건이 명확히 기재되어 있는지 확인한 뒤 서명하는 것이 중요합니다. 구두로만 안내받은 내용은 계약서에 반영되어 있는지 다시 확인해야 합니다.",
      paragraphs: [
        "이해되지 않는 조항이 있다면 서명 전에 반드시 질문해 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.retainerAgreementCheck,
      relatedLabel: "위임계약서 확인사항 보기",
    },
  ],
};
