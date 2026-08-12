import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const MESSAGE_EVIDENCE_CHECK_PAGE: ContentPage = {
  id: "messageEvidenceCheck",
  order: 162,
  numberLabel: "02",
  slug: "카카오톡-문자-증거-정리",
  href: ROUTES.messageEvidenceCheck,
  navLabel: "카카오톡·문자 증거 정리",
  breadcrumbLabel: "카카오톡·문자 증거 정리",
  categoryLabel: SITE.categoryLabel,
  h1: "카카오톡·문자 자료, 증거로 정리할 때 무엇을 확인하나요?",
  heading: "카카오톡·문자 자료, 증거로 정리할 때 무엇을 확인하나요?",
  infoTopicLabel: "증거·서류",
  infoCardDescription:
    "메신저·문자 대화를 증거로 정리할 때 확인할 사항을 안내합니다.",
  intro: [
    "카카오톡이나 문자 메시지는 이혼소송에서 흔히 활용되는 증거 유형 중 하나로 알려져 있습니다. 다만 캡처 방식과 확보 경위에 따라 신빙성이 달라질 수 있어 정리 방법에 유의할 필요가 있습니다.",
    "이 글은 메신저·문자 자료를 증거로 정리할 때 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 대화의 증거능력을 개별적으로 판단하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "message-evidence-01",
    "message-evidence-02",
    "message-evidence-03",
    "message-evidence-04",
    "message-evidence-05",
  ],
  faqTitle: "카카오톡·문자 증거 정리 자주 묻는 질문",
  conclusion: [
    "메신저·문자 대화는 발신자·수신자, 날짜·시간이 함께 보이도록 캡처하고, 전체 대화 흐름을 보존하는 것이 신빙성을 뒷받침하는 데 도움이 됩니다. 확보 방법의 적법성도 함께 확인해야 합니다.",
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
  relatedGuideIds: ["evidenceOrganizing", "recordingEvidenceCheck", "affairCaseFactsPrep"],
  keySummary: [
    {
      numberLabel: "01",
      title: "전체 캡처",
      text: "발신자·날짜·시간이 보이도록 대화 전체를 캡처합니다.",
    },
    {
      numberLabel: "02",
      title: "맥락 보존",
      text: "일부만 잘라내지 않고 전후 맥락을 함께 남깁니다.",
    },
    {
      numberLabel: "03",
      title: "원본 백업",
      text: "삭제·손상에 대비해 원본 파일을 별도로 저장합니다.",
    },
    {
      numberLabel: "04",
      title: "출처 표시",
      text: "어떤 대화방·연락처인지 함께 기록해 둡니다.",
    },
  ],
  seo: {
    title: "카카오톡·문자 자료, 증거로 정리할 때 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼소송에서 카카오톡·문자 등 메신저 대화를 증거로 정리할 때 확인할 사항을 안내합니다.",
    keywords: ["카카오톡 증거", "문자 증거", "메신저 증거", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "message-evidence-capture",
      order: 1,
      numberLabel: "01",
      heading: "캡처는 어떻게 하는 것이 좋은가요?",
      layout: "prose",
      directAnswer:
        "발신자 이름(또는 번호), 날짜와 시간이 함께 보이도록 화면 전체를 캡처하는 것이 신빙성을 뒷받침하는 데 도움이 됩니다. 일부 문장만 잘라낸 캡처는 맥락이 불명확해질 수 있습니다.",
      paragraphs: [
        "대화가 길다면 이어지는 화면을 순서대로 여러 장 캡처해 전체 흐름이 끊기지 않도록 하는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "message-evidence-context",
      order: 2,
      numberLabel: "02",
      heading: "맥락은 왜 함께 보존해야 하나요?",
      layout: "prose",
      directAnswer:
        "특정 문장만 발췌하면 전체 맥락과 다르게 해석될 수 있어, 전후 대화를 함께 남겨 두는 것이 자료의 신뢰도를 높이는 데 도움이 됩니다.",
      paragraphs: [
        "대화 상대방이 누구인지, 어떤 상황에서 오간 대화인지 간단한 메모를 함께 남겨 두면 나중에 설명하기 수월합니다.",
      ],
      relatedHref: ROUTES.affairCaseFactsPrep,
      relatedLabel: "상간 사실관계 정리 보기",
    },
    {
      id: "message-evidence-backup",
      order: 3,
      numberLabel: "03",
      heading: "원본은 어떻게 백업하나요?",
      layout: "prose",
      directAnswer:
        "메신저 대화는 상대방이 삭제하거나 계정이 정지되면 확인이 어려워질 수 있어, 확인한 즉시 캡처하고 별도 저장 장치나 클라우드에 백업해 두는 것이 안전합니다.",
      paragraphs: [
        "파일명에 날짜와 간단한 설명을 붙여 정리해 두면 이후 자료를 찾기 쉬워집니다.",
      ],
      relatedHref: ROUTES.recordingEvidenceCheck,
      relatedLabel: "녹음자료 상담 전 확인사항 보기",
    },
    {
      id: "message-evidence-legal",
      order: 4,
      numberLabel: "04",
      heading: "타인 명의 메신저를 확인해도 되나요?",
      layout: "prose",
      directAnswer:
        "본인이 정당하게 접근할 수 있는 대화가 아니라면, 타인의 계정이나 기기에 무단으로 접근해 메시지를 확인하는 것은 위법할 수 있어 피해야 합니다.",
      paragraphs: [
        "본인이 받은 메시지나 본인이 참여한 대화방의 내용을 확인하는 것과, 타인의 기기·계정에 무단으로 접근하는 것은 다르게 다뤄질 수 있는 사안입니다. 확실하지 않다면 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.affairEvidenceCaution,
      relatedLabel: "위자료 증거정리 주의사항 보기",
    },
  ],
};
