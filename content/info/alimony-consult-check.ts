import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const ALIMONY_CONSULT_CHECK_PAGE: ContentPage = {
  id: "alimonyConsultCheck",
  order: 151,
  numberLabel: "01",
  slug: "이혼-위자료-상담-전-확인사항",
  href: ROUTES.alimonyConsultCheck,
  navLabel: "이혼 위자료 상담 전 확인사항",
  breadcrumbLabel: "이혼 위자료 상담 전 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼 위자료 상담 전, 무엇을 확인하나요?",
  heading: "이혼 위자료 상담 전, 무엇을 확인하나요?",
  infoTopicLabel: "위자료·상간",
  infoCardDescription:
    "위자료 청구를 검토할 때 상담 전 정리해 두면 좋은 사항을 안내합니다.",
  intro: [
    "위자료는 혼인관계 파탄에 책임 있는 배우자 등에게 정신적 손해의 배상을 구하는 성격으로 이해되는 경우가 많습니다. 재산분할과는 목적과 판단 기준이 다를 수 있어, 상담 전 쟁점을 구분해 정리해 두는 편이 도움이 됩니다.",
    "이 글은 위자료 상담 전 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 사실이 있으면 반드시 위자료가 인정된다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "alimony-consult-01",
    "alimony-consult-02",
    "alimony-consult-03",
    "alimony-consult-04",
    "alimony-consult-05",
  ],
  faqTitle: "이혼 위자료 상담 전 확인사항 자주 묻는 질문",
  conclusion: [
    "위자료 상담에서는 주장하려는 사실의 시기·경위와 관련 자료를 사실과 추측으로 구분해 정리하는 것이 중요합니다. 인정 여부와 금액은 사실관계와 증거, 법원의 판단에 따라 달라질 수 있습니다.",
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
  relatedGuideIds: ["affairCaseFactsPrep", "affairEvidenceCaution", "evidenceOrganizing"],
  keySummary: [
    {
      numberLabel: "01",
      title: "위자료 개념",
      text: "혼인 파탄에 대한 정신적 손해 배상 성격으로 이해됩니다.",
    },
    {
      numberLabel: "02",
      title: "재산분할과 구분",
      text: "재산분할과는 목적·판단 기준이 다를 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "사실관계 정리",
      text: "주장 사실의 시기·경위를 시간순으로 정리합니다.",
    },
    {
      numberLabel: "04",
      title: "자료 확보",
      text: "적법하게 확보한 자료만 근거로 활용합니다.",
    },
  ],
  seo: {
    title: "이혼 위자료 상담 전, 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼 위자료 청구를 검토할 때 상담 전 정리해 두면 좋은 사항을 안내합니다.",
    keywords: ["이혼 위자료", "위자료 상담", "위자료 청구"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "alimony-consult-concept",
      order: 1,
      numberLabel: "01",
      heading: "위자료와 재산분할은 무엇이 다른가요?",
      layout: "comparison",
      directAnswer:
        "재산분할은 혼인 중 형성된 재산의 청산·분배에 초점을 두는 반면, 위자료는 혼인관계 파탄과 관련된 정신적 손해의 배상을 구하는 성격으로 이해되는 경우가 많습니다. 두 청구는 판단 기준이 다를 수 있어 구분해 접근하는 것이 안전합니다.",
      paragraphs: [
        "두 쟁점을 함께 논의하더라도, 상담에서는 질문을 분리해 각각의 근거와 자료를 따로 정리하는 편이 도움이 됩니다.",
      ],
      comparison: {
        left: {
          label: "재산분할",
          text: "혼인 중 형성한 재산의 청산·분배 성격",
        },
        right: {
          label: "위자료",
          text: "혼인 파탄에 대한 정신적 손해 배상 성격",
        },
      },
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
    {
      id: "alimony-consult-facts",
      order: 2,
      numberLabel: "02",
      heading: "위자료 상담 전 무엇을 정리하나요?",
      layout: "checklist",
      directAnswer:
        "주장하려는 사실의 시기와 경위, 확인된 사실과 추측을 구분한 메모, 관련 자료(문서·메시지 등)를 정리해 두면 상담에 도움이 됩니다.",
      paragraphs: [
        "감정적인 서술보다 ‘언제, 무엇이 있었는지’를 중심으로 정리하는 편이 상담에서 쟁점을 명확히 전달하는 데 유리합니다.",
      ],
      bullets: [
        "주장하려는 사실의 시기와 경위",
        "확인된 사실과 전해 들은 이야기의 구분",
        "관련 문서·메시지·통화기록의 존재 여부",
        "제3자의 목격·증언 가능성",
      ],
      relatedHref: ROUTES.affairCaseFactsPrep,
      relatedLabel: "상간 사실관계 정리 보기",
    },
    {
      id: "alimony-consult-evidence",
      order: 3,
      numberLabel: "03",
      heading: "증거는 어떻게 확보해야 하나요?",
      layout: "prose",
      directAnswer:
        "적법한 방법으로 확보한 자료만 근거로 활용해야 합니다. 계정 무단 접근, 불법 도청, 위치추적, 동의 없는 개인정보 수집 등은 증거 확보 방법으로 권장되지 않으며 별도의 법적 문제로 이어질 수 있습니다.",
      paragraphs: [
        "위법하게 확보한 자료는 절차상 불리하게 작용할 수 있다고 알려져 있어, 자료 확보 방법 자체를 신중히 검토해야 합니다. 구체적인 확보 방법은 상담에서 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.affairEvidenceCaution,
      relatedLabel: "위자료 증거정리 주의사항 보기",
    },
    {
      id: "alimony-consult-realistic",
      order: 4,
      numberLabel: "04",
      heading: "위자료는 반드시 인정되나요?",
      layout: "prose",
      directAnswer:
        "그렇게 단정할 수 없습니다. 위자료 인정 여부와 금액은 사실관계, 증거, 파탄에 대한 책임 정도, 법원의 판단에 따라 달라질 수 있는 사안입니다.",
      paragraphs: [
        "‘이 증거면 무조건 인정된다’는 식의 안내는 신중하게 볼 필요가 있습니다. 구체적인 가능성은 확보한 자료를 바탕으로 상담에서 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
