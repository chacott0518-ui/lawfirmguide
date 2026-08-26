import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CONSULTATION_QUESTIONS_PAGE: ContentPage = {
  id: "consultationQuestions",
  order: 111,
  numberLabel: "01",
  slug: "이혼상담-질문",
  href: ROUTES.consultationQuestions,
  navLabel: "이혼상담에서 물어볼 질문",
  breadcrumbLabel: "이혼상담 질문",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼상담에서 물어볼 질문은 무엇인가요?",
  heading: "이혼상담에서 물어볼 질문은 무엇인가요?",
  infoTopicLabel: "상담·준비",
  infoCardDescription:
    "절차, 재산분할, 자녀, 비용, 담당체계까지 상담에서 확인하면 좋은 질문을 정리합니다.",
  intro: [
    "이혼상담에서는 절차 선택, 재산분할 쟁점, 자녀 관련 결정사항, 비용 구성, 사건 담당체계까지 다양한 내용을 짧은 시간에 다루게 됩니다. 질문을 미리 정리해 가면 광고 문구나 단편적인 설명만으로 판단하지 않고 필요한 정보를 빠짐없이 확인하기 쉬워집니다.",
    "이 글은 상담에서 참고할 수 있는 질문 예시를 정리한 일반적인 법률정보이며, 아래 항목은 예시일 뿐 사건마다 추가 질문이 필요할 수 있습니다. 답변 내용은 사실관계와 증거, 적용 법령에 따라 달라질 수 있습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "consult-q-01",
    "consult-q-02",
    "consult-q-03",
    "consult-q-04",
    "consult-q-05",
  ],
  faqTitle: "이혼상담 질문 자주 묻는 질문",
  conclusion: [
    "상담 질문을 미리 정리해 두면 절차, 재산분할, 자녀, 비용, 담당체계까지 필요한 정보를 빠짐없이 확인하는 데 도움이 됩니다. 다만 실제 답변과 결과는 사실관계와 증거, 적용 법령, 법원의 판단에 따라 달라질 수 있습니다.",
    "이 글은 일반적인 법률정보 제공을 목적으로 하며 개별 사건에 대한 법률 자문이나 결과를 보장하지 않습니다.",
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
  relatedGuideIds: ["consultPrep", "caseTimelineCheck", "factConveyCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "절차 질문",
      text: "협의이혼과 재판상 이혼 중 무엇을 검토해야 하는지 묻습니다.",
    },
    {
      numberLabel: "02",
      title: "재산·자녀 질문",
      text: "재산분할 쟁점과 자녀 관련 결정사항을 구체적으로 질문합니다.",
    },
    {
      numberLabel: "03",
      title: "비용 질문",
      text: "견적 구성과 추가 비용 가능성을 나눠 질문합니다.",
    },
    {
      numberLabel: "04",
      title: "담당체계 질문",
      text: "실제 사건을 누가 어떻게 담당하는지 확인합니다.",
    },
  ],
  seo: {
    title: "이혼상담에서 물어볼 질문은 무엇인가요? | 로펌가이드",
    description:
      "이혼상담에서 절차, 재산분할, 자녀, 비용, 담당체계까지 확인하면 좋은 질문을 정리합니다.",
    keywords: ["이혼상담 질문", "이혼변호사 상담", "이혼소송 상담", "상담 전 질문"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "consult-q-procedure",
      order: 1,
      numberLabel: "01",
      heading: "절차에 대해 무엇을 질문하면 좋을까요?",
      layout: "checklist",
      directAnswer:
        "협의이혼과 재판상 이혼 중 어떤 절차를 검토해야 하는지, 그 이유는 무엇인지, 예상되는 단계와 기간을 질문하면 전체 흐름을 이해하는 데 도움이 됩니다.",
      paragraphs: [
        "절차 질문은 결과를 묻기보다 ‘지금 무엇을 검토해야 하는가’에 초점을 두는 편이 안전합니다. 협의 가능성이 있는지, 이미 분쟁이 진행 중인지에 따라 검토할 절차가 달라질 수 있습니다.",
      ],
      bullets: [
        "제 사건에서는 협의이혼과 재판상 이혼 중 무엇을 먼저 검토해야 하나요?",
        "그렇게 판단하시는 이유는 무엇인가요?",
        "절차는 대략 어떤 단계로 진행되나요?",
        "조정을 먼저 거치게 되나요?",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "협의이혼절차 안내 보기",
    },
    {
      id: "consult-q-property-child",
      order: 2,
      numberLabel: "02",
      heading: "재산분할·자녀 관련 질문은 어떻게 하나요?",
      layout: "checklist",
      directAnswer:
        "확인해야 할 재산 항목, 특유재산 해당 가능성, 자녀 관련 결정사항(친권·양육자·양육비·면접교섭)을 구체적으로 질문하면 쟁점을 명확히 이해할 수 있습니다.",
      paragraphs: [
        "재산분할과 자녀 문제는 사건마다 쟁점이 다를 수 있어, 일반론보다 본인 사실관계를 바탕으로 한 질문이 더 유용합니다.",
      ],
      bullets: [
        "제가 알고 있는 재산 중 분할 대상이 될 수 있는 항목은 무엇인가요?",
        "혼인 전부터 보유한 재산은 어떻게 다뤄지나요?",
        "미성년 자녀와 관련해 어떤 사항을 결정해야 하나요?",
        "양육비 산정에는 어떤 자료가 필요한가요?",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
    {
      id: "consult-q-cost",
      order: 3,
      numberLabel: "03",
      heading: "비용은 무엇을 기준으로 질문하나요?",
      layout: "checklist",
      directAnswer:
        "견적에 포함된 보수 항목, 인지액·송달료 등 실비, 추가 비용이 발생할 수 있는 상황을 구분해 질문하는 편이 좋습니다.",
      paragraphs: [
        "총액만 비교하면 어떤 항목이 포함됐는지 알기 어렵습니다. 구체적인 비용 비교 기준은 이혼소송비용 안내에서 항목별로 확인할 수 있습니다.",
      ],
      bullets: [
        "이 견적에는 어떤 항목이 포함되어 있나요?",
        "실비(인지액·송달료 등)는 별도인가요?",
        "추가 비용이 발생할 수 있는 상황은 무엇인가요?",
        "성공보수 조건이 있다면 어떻게 산정되나요?",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 안내 보기",
    },
    {
      id: "consult-q-system",
      order: 4,
      numberLabel: "04",
      heading: "사건 담당체계는 어떻게 질문하나요?",
      layout: "prose",
      directAnswer:
        "상담한 변호사가 실제 사건을 담당하는지, 담당자가 바뀔 수 있는지, 진행 상황을 어떻게 공유받는지 질문해 두면 진행 과정에서의 혼선을 줄일 수 있습니다.",
      paragraphs: [
        "상담과 실제 사건 진행을 다른 사람이 맡는 경우도 있을 수 있어, 이 부분을 상담 초기에 확인해 두는 편이 좋습니다. 위임계약서에 담당자와 업무 범위가 명시되어 있는지도 함께 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.caseHandlingSystemCheck,
      relatedLabel: "사건 담당체계 확인방법 보기",
    },
  ],
};
