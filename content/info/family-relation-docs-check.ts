import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const FAMILY_RELATION_DOCS_CHECK_PAGE: ContentPage = {
  id: "familyRelationDocsCheck",
  order: 164,
  numberLabel: "04",
  slug: "가족관계-혼인관계-서류-확인",
  href: ROUTES.familyRelationDocsCheck,
  navLabel: "가족관계·혼인관계 서류 확인",
  breadcrumbLabel: "가족관계·혼인관계 서류 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "가족관계·혼인관계 서류, 무엇을 미리 확인하나요?",
  heading: "가족관계·혼인관계 서류, 무엇을 미리 확인하나요?",
  infoTopicLabel: "증거·서류",
  infoCardDescription:
    "가족관계증명서·혼인관계증명서 등 기본 서류를 준비하는 방법을 안내합니다.",
  intro: [
    "이혼 관련 절차에서는 가족관계증명서, 혼인관계증명서, 주민등록등본처럼 신분·가족관계를 확인하는 기본 서류가 필요한 경우가 많습니다. 미리 발급 방법을 확인해 두면 절차 진행이 수월해집니다.",
    "이 글은 가족관계·혼인관계 서류를 준비하는 일반적인 방법을 안내하는 법률정보이며, 사건마다 필요한 서류는 달라질 수 있습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "family-docs-01",
    "family-docs-02",
    "family-docs-03",
    "family-docs-04",
    "family-docs-05",
  ],
  faqTitle: "가족관계·혼인관계 서류 확인 자주 묻는 질문",
  conclusion: [
    "가족관계증명서, 혼인관계증명서, 주민등록등본 등 기본 서류는 대법원 전자가족관계등록시스템이나 관할 관공서를 통해 발급받을 수 있는 경우가 많습니다. 절차별로 필요한 서류가 다를 수 있어 미리 확인하는 것이 안전합니다.",
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
  relatedGuideIds: ["evidenceOrganizing", "procedureComparison", "consultPrep"],
  keySummary: [
    {
      numberLabel: "01",
      title: "가족관계증명서",
      text: "가족관계를 확인하는 기본 서류입니다.",
    },
    {
      numberLabel: "02",
      title: "혼인관계증명서",
      text: "혼인·이혼 이력을 확인하는 서류입니다.",
    },
    {
      numberLabel: "03",
      title: "주민등록등본",
      text: "거주 현황을 확인하는 서류로 활용될 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "발급 방법",
      text: "전자가족관계등록시스템이나 관공서에서 발급받습니다.",
    },
  ],
  seo: {
    title: "가족관계·혼인관계 서류, 무엇을 미리 확인하나요? | 로펌가이드",
    description:
      "이혼 절차에서 필요한 가족관계증명서·혼인관계증명서 등 기본 서류 준비 방법을 안내합니다.",
    keywords: ["가족관계증명서", "혼인관계증명서", "이혼 서류", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "family-docs-basic",
      order: 1,
      numberLabel: "01",
      heading: "기본적으로 어떤 서류가 필요한가요?",
      layout: "checklist",
      directAnswer:
        "가족관계증명서, 혼인관계증명서, 주민등록등본처럼 신분·가족관계를 확인하는 서류가 절차 초기에 필요한 경우가 많습니다. 구체적으로 필요한 서류는 절차와 사건에 따라 달라질 수 있습니다.",
      paragraphs: [
        "협의이혼과 재판상 이혼 등 절차에 따라 요구되는 서류의 종류와 형식이 다를 수 있어, 진행하려는 절차를 먼저 확인한 뒤 필요한 서류를 준비하는 것이 효율적입니다.",
      ],
      bullets: [
        "가족관계증명서(상세)",
        "혼인관계증명서(상세)",
        "주민등록등본",
        "필요시 인감증명서·신분증 사본",
      ],
      relatedHref: ROUTES.procedureComparison,
      relatedLabel: "협의이혼과 재판상 이혼 차이 보기",
    },
    {
      id: "family-docs-issue",
      order: 2,
      numberLabel: "02",
      heading: "서류는 어디서 발급받나요?",
      layout: "prose",
      directAnswer:
        "가족관계증명서와 혼인관계증명서는 대법원 전자가족관계등록시스템이나 가까운 관공서(주민센터 등)에서 발급받을 수 있는 경우가 많다고 알려져 있습니다.",
      paragraphs: [
        "온라인 발급 시 공동인증서 등 본인 인증 수단이 필요할 수 있습니다. 관공서 방문 발급 시에는 신분증을 지참해야 합니다.",
      ],
    },
    {
      id: "family-docs-timing",
      order: 3,
      numberLabel: "03",
      heading: "서류는 언제 준비하면 좋은가요?",
      layout: "prose",
      directAnswer:
        "상담이나 절차 진행 초기에 미리 발급받아 두면, 필요한 시점에 다시 발급받는 번거로움을 줄일 수 있습니다. 다만 일부 서류는 최근 발급본을 요구하는 경우도 있어 유효기간을 확인하는 것이 좋습니다.",
      paragraphs: [
        "정확히 어떤 서류가 언제 필요한지는 진행하는 절차와 담당 기관의 안내에 따라 달라질 수 있어, 상담에서 미리 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.consultPrep,
      relatedLabel: "이혼소송 상담 전 준비 안내 보기",
    },
    {
      id: "family-docs-privacy",
      order: 4,
      numberLabel: "04",
      heading: "서류 관리 시 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "가족관계 서류에는 민감한 개인정보가 담겨 있어, 필요한 절차 외의 목적으로 제출·공유하지 않도록 관리하는 것이 중요합니다.",
      paragraphs: [
        "발급받은 서류는 필요한 곳에만 제출하고, 사본을 만들어 활용하는 등 원본 관리에도 유의하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
  ],
};
