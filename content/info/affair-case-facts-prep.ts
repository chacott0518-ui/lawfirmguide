import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const AFFAIR_CASE_FACTS_PREP_PAGE: ContentPage = {
  id: "affairCaseFactsPrep",
  order: 152,
  numberLabel: "02",
  slug: "상간-사실관계-정리",
  href: ROUTES.affairCaseFactsPrep,
  navLabel: "상간 사실관계 정리",
  breadcrumbLabel: "상간 사실관계 정리",
  categoryLabel: SITE.categoryLabel,
  h1: "상간 관련 사실관계, 상담 전 어떻게 정리하나요?",
  heading: "상간 관련 사실관계, 상담 전 어떻게 정리하나요?",
  infoTopicLabel: "위자료·상간",
  infoCardDescription:
    "상담 전 시기·경위·자료를 사실과 추측으로 구분해 정리하는 방법을 안내합니다.",
  intro: [
    "상간 관련 상담을 검토할 때는 언제, 어떤 정황이 있었는지를 시간순으로 정리하고, 확인된 사실과 추측을 구분하는 것이 중요합니다. 감정이 앞서면 쟁점이 흐려질 수 있어 차분한 정리가 도움이 됩니다.",
    "이 글은 상간 관련 사실관계를 정리하는 방법을 안내하는 일반적인 법률정보이며, 정리한 사실만으로 법률적 결과를 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "affair-facts-01",
    "affair-facts-02",
    "affair-facts-03",
    "affair-facts-04",
    "affair-facts-05",
  ],
  faqTitle: "상간 사실관계 정리 자주 묻는 질문",
  conclusion: [
    "상간 관련 사실관계는 시기와 경위를 시간순으로 정리하고, 확인된 사실과 추측을 구분하는 것이 상담에서 쟁점을 명확히 전달하는 데 도움이 됩니다. 인정 여부는 증거와 법원의 판단에 따라 달라집니다.",
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
  relatedGuideIds: ["alimonyConsultCheck", "affairEvidenceCaution", "messageEvidenceCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "시간순 정리",
      text: "정황을 처음 인지한 시점부터 시간순으로 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "사실·추측 구분",
      text: "확인된 사실과 전해 들은 이야기를 구분해 표시합니다.",
    },
    {
      numberLabel: "03",
      title: "관련 자료 목록",
      text: "존재하는 자료의 종류와 확보 경위를 함께 정리합니다.",
    },
    {
      numberLabel: "04",
      title: "적법성 확인",
      text: "자료를 적법하게 확보했는지 점검합니다.",
    },
  ],
  seo: {
    title: "상간 관련 사실관계, 상담 전 어떻게 정리하나요? | 로펌가이드",
    description:
      "상간 관련 상담 전 시기·경위·자료를 사실과 추측으로 구분해 정리하는 방법을 안내합니다.",
    keywords: ["상간 사실관계", "상간소송 상담", "상간자소송"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "affair-facts-timeline",
      order: 1,
      numberLabel: "01",
      heading: "사실관계는 왜 시간순으로 정리해야 하나요?",
      layout: "prose",
      directAnswer:
        "정황을 처음 인지한 시점, 의심이 커진 계기, 확인 과정을 시간순으로 정리하면 상담에서 사건의 맥락을 더 명확하게 전달할 수 있기 때문입니다.",
      paragraphs: [
        "순서가 뒤섞인 설명은 쟁점을 흐리게 할 수 있습니다. 정확한 날짜가 기억나지 않으면 대략적인 시기라도 기록해 두고, 이후 자료로 보완하는 방법을 활용할 수 있습니다.",
      ],
      relatedHref: ROUTES.caseTimelineCheck,
      relatedLabel: "이혼소송 상담 전 사건흐름 정리 보기",
    },
    {
      id: "affair-facts-separate",
      order: 2,
      numberLabel: "02",
      heading: "사실과 추측은 어떻게 구분하나요?",
      layout: "prose",
      directAnswer:
        "직접 확인한 사실과 전해 들은 이야기, 심증에 불과한 추측을 구분해 정리하는 것이 중요합니다. 확인되지 않은 내용을 사실처럼 정리하면 상담에서 쟁점이 왜곡될 수 있습니다.",
      paragraphs: [
        "‘직접 목격’, ‘자료로 확인’, ‘들은 이야기’처럼 출처를 함께 표시해 두면, 상담에서 어떤 부분이 확실하고 어떤 부분에 추가 확인이 필요한지 구분하기 쉬워집니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "affair-facts-materials",
      order: 3,
      numberLabel: "03",
      heading: "어떤 자료가 있는지 어떻게 정리하나요?",
      layout: "checklist",
      directAnswer:
        "문자·메신저 대화, 통화기록, 사진, 목격 진술 가능성 등 확보한 자료의 종류와 확보 경위를 함께 정리해 두면 상담에서 활용도를 판단하는 데 도움이 됩니다.",
      paragraphs: [
        "자료가 없거나 부족한 부분도 그 사실을 알리는 것이 중요합니다. 상담에서 추가로 확인할 수 있는 방법을 함께 검토할 수 있습니다.",
      ],
      bullets: [
        "문자·메신저 대화 캡처",
        "통화기록·통화 빈도 자료",
        "관련 사진이나 영상",
        "목격했을 가능성이 있는 제3자",
      ],
      relatedHref: ROUTES.messageEvidenceCheck,
      relatedLabel: "카카오톡·문자 증거 정리 보기",
    },
    {
      id: "affair-facts-legal",
      order: 4,
      numberLabel: "04",
      heading: "정리 과정에서 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "자료를 확보한 방법이 적법한지 점검하는 것이 중요합니다. 계정 무단 접근, 불법 도청, 위치추적 등은 증거 확보 방법으로 권장되지 않으며 별도의 법적 문제로 이어질 수 있습니다.",
      paragraphs: [
        "이미 확보한 자료가 있다면 어떤 경위로 얻었는지도 함께 기록해 두는 것이 좋습니다. 적법성 여부가 불확실하다면 상담에서 반드시 확인해야 합니다.",
      ],
      relatedHref: ROUTES.affairEvidenceCaution,
      relatedLabel: "위자료 증거정리 주의사항 보기",
    },
  ],
};
