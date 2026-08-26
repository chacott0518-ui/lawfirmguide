import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const RECORDING_EVIDENCE_CHECK_PAGE: ContentPage = {
  id: "recordingEvidenceCheck",
  order: 163,
  numberLabel: "03",
  slug: "녹음자료-상담-전-확인사항",
  href: ROUTES.recordingEvidenceCheck,
  navLabel: "녹음자료 상담 전 확인사항",
  breadcrumbLabel: "녹음자료 상담 전 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "녹음자료, 상담 전 무엇을 확인하나요?",
  heading: "녹음자료, 상담 전 무엇을 확인하나요?",
  infoTopicLabel: "증거·서류",
  infoCardDescription:
    "대화 녹음을 증거로 검토할 때 상담 전 확인할 사항을 안내합니다.",
  intro: [
    "대화를 녹음한 자료는 이혼소송에서 활용되는 경우가 있지만, 녹음 방식과 대화 참여 여부에 따라 통신비밀보호법 등 관련 법률과의 관계가 달라질 수 있습니다. 상담 전 녹음 경위를 정리해 두는 것이 중요합니다.",
    "이 글은 녹음자료를 상담에서 다룰 때 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 녹음의 적법성이나 증거능력을 개별적으로 판단하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "recording-evidence-01",
    "recording-evidence-02",
    "recording-evidence-03",
    "recording-evidence-04",
    "recording-evidence-05",
  ],
  faqTitle: "녹음자료 상담 전 확인사항 자주 묻는 질문",
  conclusion: [
    "녹음자료는 본인이 대화에 참여했는지, 어떤 상황에서 녹음했는지에 따라 취급이 달라질 수 있는 자료입니다. 통신비밀보호법 등 관련 법률과의 관계를 고려해 상담에서 확인하는 것이 중요합니다.",
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
  relatedGuideIds: ["evidenceOrganizing", "messageEvidenceCheck", "affairEvidenceCaution"],
  keySummary: [
    {
      numberLabel: "01",
      title: "대화 참여 여부",
      text: "본인이 대화 당사자였는지가 중요한 확인 요소입니다.",
    },
    {
      numberLabel: "02",
      title: "제3자 간 대화",
      text: "본인이 참여하지 않은 대화를 몰래 녹음하면 위법할 수 있습니다.",
    },
    {
      numberLabel: "03",
      title: "녹음 경위 기록",
      text: "언제, 어떤 상황에서 녹음했는지 함께 기록합니다.",
    },
    {
      numberLabel: "04",
      title: "원본 보존",
      text: "녹음 파일 원본을 편집 없이 보관합니다.",
    },
  ],
  seo: {
    title: "녹음자료, 상담 전 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼소송에서 대화 녹음 자료를 상담에서 다룰 때 확인할 사항을 안내합니다.",
    keywords: ["녹음 증거", "대화 녹음 이혼", "통신비밀보호법"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "recording-evidence-participant",
      order: 1,
      numberLabel: "01",
      heading: "본인이 참여한 대화 녹음은 어떻게 다뤄지나요?",
      layout: "prose",
      directAnswer:
        "본인이 대화 당사자로 참여한 대화를 녹음하는 것은 일반적으로 상담에서 활용 가능한 자료로 검토되는 경우가 많다고 알려져 있습니다. 다만 구체적인 취급은 사안에 따라 달라질 수 있습니다.",
      paragraphs: [
        "이 경우에도 녹음 경위와 상황을 정확히 기록해 두면 상담에서 신빙성을 설명하는 데 도움이 됩니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "recording-evidence-third-party",
      order: 2,
      numberLabel: "02",
      heading: "본인이 참여하지 않은 대화는 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "본인이 참여하지 않은 제3자 간의 대화를 몰래 녹음하는 것은 통신비밀보호법 등 관련 법률에 따라 위법 소지가 있다고 알려져 있습니다. 이러한 방식의 녹음은 신중하게 접근해야 합니다.",
      paragraphs: [
        "구체적인 상황에 따라 적법성 판단이 달라질 수 있으므로, 이 글에서 개별 사례를 단정하지 않습니다. 확실하지 않다면 녹음 전에 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.affairEvidenceCaution,
      relatedLabel: "위자료 증거정리 주의사항 보기",
    },
    {
      id: "recording-evidence-record",
      order: 3,
      numberLabel: "03",
      heading: "녹음 경위는 어떻게 기록하나요?",
      layout: "prose",
      directAnswer:
        "언제, 어디서, 누구와의 대화를 녹음했는지, 어떤 상황이었는지를 함께 메모해 두면 상담에서 자료의 맥락을 설명하는 데 도움이 됩니다.",
      paragraphs: [
        "녹음 파일명에 날짜와 간단한 설명을 붙여 정리해 두면 이후 여러 파일 중에서 필요한 자료를 찾기 쉬워집니다.",
      ],
      relatedHref: ROUTES.messageEvidenceCheck,
      relatedLabel: "카카오톡·문자 증거 정리 보기",
    },
    {
      id: "recording-evidence-preserve",
      order: 4,
      numberLabel: "04",
      heading: "녹음 파일은 어떻게 보관하나요?",
      layout: "prose",
      directAnswer:
        "원본 파일을 편집하지 않고 그대로 보관하는 것이 중요합니다. 편집된 파일은 신빙성 논란이 생길 수 있어, 편집이 필요하다면 원본과 별도로 사본을 만들어 작업하는 것이 안전합니다.",
      paragraphs: [
        "파일이 손상되거나 분실되지 않도록 여러 저장 장치에 백업해 두는 것도 좋은 방법입니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
