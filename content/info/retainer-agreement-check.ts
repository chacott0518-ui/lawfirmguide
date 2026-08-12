import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const RETAINER_AGREEMENT_CHECK_PAGE: ContentPage = {
  id: "retainerAgreementCheck",
  order: 184,
  numberLabel: "04",
  slug: "위임계약서-확인사항",
  href: ROUTES.retainerAgreementCheck,
  navLabel: "위임계약서 확인사항",
  breadcrumbLabel: "위임계약서 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "위임계약서, 상담 전 무엇을 확인하나요?",
  heading: "위임계약서, 상담 전 무엇을 확인하나요?",
  infoTopicLabel: "변호사 선택",
  infoCardDescription:
    "담당자, 업무 범위, 비용 조건 등 위임계약서에서 확인할 항목을 안내합니다.",
  intro: [
    "변호사를 선임할 때는 위임계약서에 담당 변호사, 업무 범위, 비용 조건이 명확히 기재되어 있는지 확인하는 것이 중요합니다. 구두로만 안내받은 내용은 계약서에도 반영되어 있는지 다시 확인해야 합니다.",
    "이 글은 위임계약서를 확인할 때 참고할 수 있는 일반적인 법률정보이며, 특정 계약 조항의 유효성을 개별적으로 판단하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "retainer-01",
    "retainer-02",
    "retainer-03",
    "retainer-04",
    "retainer-05",
  ],
  faqTitle: "위임계약서 확인사항 자주 묻는 질문",
  conclusion: [
    "위임계약서는 담당 변호사, 업무 범위, 비용 조건, 해지 시 정산 방식까지 꼼꼼히 확인한 뒤 서명하는 것이 중요합니다. 이해되지 않는 조항이 있다면 서명 전에 반드시 질문해 확인해야 합니다.",
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
  relatedGuideIds: ["lawyerSelectionCheck", "caseHandlingSystemCheck", "consultMethodCompare"],
  keySummary: [
    {
      numberLabel: "01",
      title: "담당자·업무범위",
      text: "담당 변호사와 위임 업무 범위가 명시되어 있는지 봅니다.",
    },
    {
      numberLabel: "02",
      title: "비용 조건",
      text: "착수금·성공보수·실비 조건을 정확히 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "해지·정산",
      text: "중도 해지 시 정산 방식을 미리 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "서명 전 질문",
      text: "이해되지 않는 조항은 서명 전에 반드시 질문합니다.",
    },
  ],
  seo: {
    title: "위임계약서, 상담 전 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼변호사 위임계약서에서 담당자, 업무 범위, 비용 조건 등 확인할 항목을 안내합니다.",
    keywords: ["위임계약서", "변호사 계약서", "이혼변호사 계약", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "retainer-scope",
      order: 1,
      numberLabel: "01",
      heading: "담당자·업무범위는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "계약서에 담당 변호사의 이름과 위임하는 업무의 구체적인 범위(협의이혼, 재판상 이혼, 재산분할, 양육 관련 등)가 명시되어 있는지 확인하는 것이 중요합니다.",
      paragraphs: [
        "업무 범위가 모호하게 기재되어 있으면, 이후 추가 업무에 대한 비용 분쟁이 생길 수 있어 가능한 구체적으로 명시하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.caseHandlingSystemCheck,
      relatedLabel: "사건 담당체계 확인방법 보기",
    },
    {
      id: "retainer-cost",
      order: 2,
      numberLabel: "02",
      heading: "비용 조건은 어떻게 확인하나요?",
      layout: "checklist",
      directAnswer:
        "착수금, 성공보수 조건과 산정 기준, 실비(인지액·송달료 등) 별도 여부, 추가 비용이 발생할 수 있는 상황을 계약서에서 명확히 확인하는 것이 중요합니다.",
      paragraphs: [
        "성공보수의 산정 기준(예: 인정된 재산분할 금액의 일정 비율 등)이 모호하지 않은지 특히 꼼꼼히 확인하는 편이 좋습니다.",
      ],
      bullets: [
        "착수금 금액과 지급 시기",
        "성공보수 조건과 산정 기준",
        "실비(인지액·송달료 등) 별도 여부",
        "추가 비용이 발생할 수 있는 상황",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 안내 보기",
    },
    {
      id: "retainer-termination",
      order: 3,
      numberLabel: "03",
      heading: "중도 해지 조항은 왜 확인해야 하나요?",
      layout: "prose",
      directAnswer:
        "사정에 따라 위임계약을 중도에 해지해야 할 수도 있어, 해지 시 기존 업무에 대한 비용 정산 방식이 계약서에 명시되어 있는지 미리 확인해 두는 것이 안전합니다.",
      paragraphs: [
        "해지 조항이 불명확하면 이후 비용 정산 과정에서 분쟁이 생길 수 있으므로, 서명 전에 이 부분을 반드시 확인하는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.lawyerSelectionCheck,
      relatedLabel: "이혼변호사 선임 전 확인사항 보기",
    },
    {
      id: "retainer-question",
      order: 4,
      numberLabel: "04",
      heading: "서명 전 마지막으로 확인할 것은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "계약서 전체를 처음부터 끝까지 읽어보고, 구두로 안내받은 내용과 다른 부분이 없는지, 이해되지 않는 조항이 없는지 확인한 뒤 서명하는 것이 중요합니다.",
      paragraphs: [
        "서명을 서두르기보다, 궁금한 점을 모두 해소한 뒤 결정하는 편이 안전합니다. 계약서 사본은 반드시 본인이 보관해야 합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
