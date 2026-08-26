import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const AFFAIR_EVIDENCE_CAUTION_PAGE: ContentPage = {
  id: "affairEvidenceCaution",
  order: 153,
  numberLabel: "03",
  slug: "위자료-증거정리-주의사항",
  href: ROUTES.affairEvidenceCaution,
  navLabel: "위자료 증거정리 주의사항",
  breadcrumbLabel: "위자료 증거정리 주의사항",
  categoryLabel: SITE.categoryLabel,
  h1: "위자료 관련 증거를 정리할 때, 무엇을 주의하나요?",
  heading: "위자료 관련 증거를 정리할 때, 무엇을 주의하나요?",
  infoTopicLabel: "위자료·상간",
  infoCardDescription:
    "적법한 증거 수집 범위와 자료 관리 시 주의할 점을 안내합니다.",
  intro: [
    "위자료 관련 증거를 모을 때는 확보 방법의 적법성을 반드시 확인해야 합니다. 위법하게 확보한 자료는 절차상 불리하게 작용할 수 있고, 별도의 법적 문제로 이어질 수도 있습니다.",
    "이 글은 위자료 관련 증거정리 시 주의할 점을 안내하는 일반적인 법률정보이며, 특정 증거수집 방법의 적법성을 개별적으로 판단하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "affair-evidence-01",
    "affair-evidence-02",
    "affair-evidence-03",
    "affair-evidence-04",
    "affair-evidence-05",
  ],
  faqTitle: "위자료 증거정리 주의사항 자주 묻는 질문",
  conclusion: [
    "위자료 관련 증거는 적법한 방법으로 확보한 자료만 활용하고, 원본 보존과 날짜·출처 기록을 함께 관리하는 것이 안전합니다. 위법한 방법으로 확보한 자료는 오히려 불리하게 작용할 수 있습니다.",
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
  relatedGuideIds: ["affairCaseFactsPrep", "recordingEvidenceCheck", "alimonyConsultCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "적법성 우선",
      text: "증거 확보 방법이 적법한지 먼저 점검합니다.",
    },
    {
      numberLabel: "02",
      title: "금지 방법",
      text: "계정 무단 접근, 불법 도청·위치추적은 피해야 합니다.",
    },
    {
      numberLabel: "03",
      title: "원본 보존",
      text: "확보한 자료의 원본을 손상 없이 보관합니다.",
    },
    {
      numberLabel: "04",
      title: "기록 관리",
      text: "날짜·출처를 함께 기록해 신빙성을 확보합니다.",
    },
  ],
  seo: {
    title: "위자료 관련 증거를 정리할 때, 무엇을 주의하나요? | 로펌가이드",
    description:
      "위자료 관련 증거를 정리할 때 적법한 수집 범위와 자료 관리 주의사항을 안내합니다.",
    keywords: ["위자료 증거", "상간 증거", "불법 증거수집"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "affair-evidence-legal",
      order: 1,
      numberLabel: "01",
      heading: "적법한 증거 확보란 무엇인가요?",
      layout: "prose",
      directAnswer:
        "본인이 정당하게 접근할 수 있는 범위에서 확보한 자료, 공개된 정보, 상대방의 동의를 얻은 자료 등이 일반적으로 적법한 범위로 다뤄집니다. 반면 타인의 계정이나 기기에 무단으로 접근하는 방식은 위법할 수 있습니다.",
      paragraphs: [
        "구체적인 적법성 여부는 확보 방법과 상황에 따라 달라질 수 있는 사안이므로, 이 글에서 개별 사례를 판단하지 않습니다. 확실하지 않다면 자료를 확보하기 전 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "affair-evidence-forbidden",
      order: 2,
      numberLabel: "02",
      heading: "피해야 할 증거수집 방법은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "계정 해킹, 비밀번호 무단 접근, 불법 도청, 위치추적, 동의 없는 개인정보 수집은 증거 확보 방법으로 권장되지 않으며, 별도의 형사·민사상 법적 문제로 이어질 수 있습니다.",
      paragraphs: [
        "‘증거를 위해서라면 어떤 방법이든 괜찮다’는 접근은 위험합니다. 위법하게 확보한 자료는 절차에서 오히려 불리하게 작용할 수 있다고 알려져 있습니다.",
      ],
      bullets: [
        "타인 계정·기기 무단 접근",
        "불법 도청 장치 설치",
        "동의 없는 위치추적",
        "제3자의 개인정보 무단 수집·유포",
      ],
      relatedHref: ROUTES.recordingEvidenceCheck,
      relatedLabel: "녹음자료 상담 전 확인사항 보기",
    },
    {
      id: "affair-evidence-preserve",
      order: 3,
      numberLabel: "03",
      heading: "확보한 자료는 어떻게 보관하나요?",
      layout: "prose",
      directAnswer:
        "원본을 손상 없이 보관하고, 복사본을 별도로 만들어 활용하는 편이 안전합니다. 자료의 작성·수신 날짜와 출처를 함께 기록해 두면 신빙성을 뒷받침하는 데 도움이 됩니다.",
      paragraphs: [
        "메신저 대화나 사진 파일은 삭제되거나 손상될 위험이 있으므로, 확보한 즉시 별도 저장 장치에 백업해 두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.messageEvidenceCheck,
      relatedLabel: "카카오톡·문자 증거 정리 보기",
    },
    {
      id: "affair-evidence-share",
      order: 4,
      numberLabel: "04",
      heading: "자료를 온라인에 공유해도 되나요?",
      layout: "prose",
      directAnswer:
        "온라인 커뮤니티나 SNS에 사건 관련 자료나 상대방의 개인정보를 게시하는 것은 신중해야 합니다. 명예훼손이나 개인정보 침해 등 별도의 법적 문제로 이어질 수 있습니다.",
      paragraphs: [
        "확보한 자료는 상담과 절차 진행 목적으로만 활용하고, 불필요하게 확산되지 않도록 관리하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.alimonyConsultCheck,
      relatedLabel: "이혼 위자료 상담 전 확인사항 보기",
    },
  ],
};
