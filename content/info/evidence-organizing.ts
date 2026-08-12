import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const EVIDENCE_ORGANIZING_PAGE: ContentPage = {
  id: "evidenceOrganizing",
  order: 161,
  numberLabel: "01",
  slug: "이혼소송-증거-정리-방법",
  href: ROUTES.evidenceOrganizing,
  navLabel: "이혼소송 증거 정리 방법",
  breadcrumbLabel: "이혼소송 증거 정리 방법",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 증거는 어떻게 정리하나요?",
  heading: "이혼소송 증거는 어떻게 정리하나요?",
  infoTopicLabel: "증거·서류",
  infoCardDescription:
    "메시지·통화·금융자료 등 이혼소송 증거를 정리하는 일반적인 방법을 안내합니다.",
  intro: [
    "이혼소송에서는 주장하는 사실을 뒷받침할 증거를 체계적으로 정리해 두는 것이 중요합니다. 종류별로 분류하고 시간순으로 정리하면 상담과 이후 절차에서 활용하기 수월합니다.",
    "이 글은 증거를 정리하는 일반적인 방법을 안내하는 법률정보이며, 특정 증거의 증거능력이나 증명력을 개별적으로 판단하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "evidence-org-01",
    "evidence-org-02",
    "evidence-org-03",
    "evidence-org-04",
    "evidence-org-05",
  ],
  faqTitle: "이혼소송 증거 정리 방법 자주 묻는 질문",
  conclusion: [
    "증거는 종류별로 분류하고 시간순으로 정리하며, 원본 보존과 출처 기록을 함께 관리하는 것이 중요합니다. 확보 방법의 적법성도 반드시 함께 확인해야 합니다.",
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
  relatedGuideIds: ["messageEvidenceCheck", "recordingEvidenceCheck", "familyRelationDocsCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "종류별 분류",
      text: "문자·통화·금융·서류 등 종류별로 나눠 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "시간순 정리",
      text: "발생 시점 순서로 배열해 흐름을 보여줍니다.",
    },
    {
      numberLabel: "03",
      title: "출처·날짜 기록",
      text: "각 자료의 출처와 날짜를 함께 기록합니다.",
    },
    {
      numberLabel: "04",
      title: "적법성 확인",
      text: "확보 방법이 적법한지 반드시 점검합니다.",
    },
  ],
  seo: {
    title: "이혼소송 증거는 어떻게 정리하나요? | 로펌가이드",
    description:
      "이혼소송에서 메시지·통화·금융자료 등 증거를 정리하는 일반적인 방법을 안내합니다.",
    keywords: ["이혼소송 증거", "이혼 증거 정리", "이혼소송 자료", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "evidence-org-category",
      order: 1,
      numberLabel: "01",
      heading: "증거는 어떤 기준으로 분류하나요?",
      layout: "info-grid",
      directAnswer:
        "문자·메신저 대화, 통화기록, 금융자료, 사진·영상, 서류(계약서·진단서 등)처럼 종류별로 분류해 정리하면 상담에서 필요한 자료를 빠르게 확인할 수 있습니다.",
      paragraphs: [
        "종류별로 폴더나 파일을 나눠 관리하면, 상담이나 절차 진행 중 특정 쟁점에 필요한 자료를 신속하게 찾을 수 있습니다.",
      ],
      infoBlocks: [
        { label: "메시지·대화", text: "문자, 카카오톡 등 메신저 대화 캡처" },
        { label: "통화·통신", text: "통화기록, 통신사 조회 자료" },
        { label: "금융자료", text: "계좌내역, 카드 사용 내역" },
        { label: "서류·기타", text: "계약서, 진단서, 사진·영상" },
      ],
      relatedHref: ROUTES.messageEvidenceCheck,
      relatedLabel: "카카오톡·문자 증거 정리 보기",
    },
    {
      id: "evidence-org-timeline",
      order: 2,
      numberLabel: "02",
      heading: "시간순 정리는 왜 중요한가요?",
      layout: "prose",
      directAnswer:
        "증거를 시간순으로 배열하면 사건의 전체 흐름을 한눈에 보여줄 수 있어, 상담과 서면 작성 과정에서 설명이 명확해집니다.",
      paragraphs: [
        "각 증거에 발생일과 간단한 설명을 메모해 두면, 나중에 여러 자료를 조합해 사실관계를 설명할 때 유용합니다.",
      ],
      relatedHref: ROUTES.caseTimelineCheck,
      relatedLabel: "이혼소송 상담 전 사건흐름 정리 보기",
    },
    {
      id: "evidence-org-preserve",
      order: 3,
      numberLabel: "03",
      heading: "원본은 어떻게 보관하나요?",
      layout: "prose",
      directAnswer:
        "원본 파일이나 문서는 손상·삭제되지 않도록 별도로 백업해 두고, 복사본을 만들어 실제 활용에는 복사본을 사용하는 편이 안전합니다.",
      paragraphs: [
        "메신저 대화는 상대방이 삭제하거나 서비스 정책에 따라 사라질 수 있어, 확인한 즉시 캡처하고 백업해 두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.recordingEvidenceCheck,
      relatedLabel: "녹음자료 상담 전 확인사항 보기",
    },
    {
      id: "evidence-org-legal",
      order: 4,
      numberLabel: "04",
      heading: "증거 확보 시 무엇을 주의해야 하나요?",
      layout: "prose",
      directAnswer:
        "본인이 정당하게 접근할 수 있는 범위에서 자료를 확보하고, 타인의 계정이나 기기에 무단으로 접근하는 등 위법한 방법은 피해야 합니다.",
      paragraphs: [
        "위법하게 확보한 자료는 절차상 불리하게 작용할 수 있고 별도의 법적 문제로 이어질 수 있습니다. 확보 방법이 불확실하다면 상담을 통해 미리 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.familyRelationDocsCheck,
      relatedLabel: "가족관계·혼인관계 서류 확인 보기",
    },
  ],
};
