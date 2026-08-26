import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const DEBT_DIVISION_CHECK_PAGE: ContentPage = {
  id: "debtDivisionCheck",
  order: 134,
  numberLabel: "04",
  slug: "채무-재산분할-상담-준비",
  href: ROUTES.debtDivisionCheck,
  navLabel: "채무 재산분할 상담 준비",
  breadcrumbLabel: "채무 재산분할 상담 준비",
  categoryLabel: SITE.categoryLabel,
  h1: "채무가 있는 경우 재산분할 상담, 무엇을 준비하나요?",
  heading: "채무가 있는 경우 재산분할 상담, 무엇을 준비하나요?",
  infoTopicLabel: "재산·금전",
  infoCardDescription:
    "대출·카드빚 등 채무가 있을 때 상담에서 확인할 사항을 안내합니다.",
  intro: [
    "부부 중 한쪽 또는 양쪽에 채무가 있는 경우, 그 채무가 어떤 목적으로 생겼는지에 따라 재산분할에서 다뤄지는 방식이 달라질 수 있다고 알려져 있습니다. 채무 목록과 발생 경위를 정리해 두는 것이 상담에 도움이 됩니다.",
    "이 글은 채무가 있는 경우 재산분할 상담에서 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 채무가 분할 대상에 포함되거나 제외된다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "debt-division-01",
    "debt-division-02",
    "debt-division-03",
    "debt-division-04",
    "debt-division-05",
  ],
  faqTitle: "채무 재산분할 상담 준비 자주 묻는 질문",
  conclusion: [
    "채무는 발생 목적과 시기, 명의를 정리해 상담에서 설명하는 것이 중요합니다. 공동생활을 위한 채무인지, 개인적인 용도의 채무인지에 따라 재산분할에서 다뤄지는 방식이 달라질 수 있습니다.",
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
  relatedGuideIds: ["propertyListPrep", "realEstateDivisionDocs", "premaritalPropertyCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "채무 목록",
      text: "대출·카드·보증 등 채무 종류와 잔액을 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "발생 목적",
      text: "공동생활을 위한 채무인지 개인 용도인지 구분합니다.",
    },
    {
      numberLabel: "03",
      title: "명의·상환자",
      text: "채무 명의자와 실제 상환 부담자를 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "자산과 비교",
      text: "전체 자산과 채무를 함께 정리해 순재산을 가늠합니다.",
    },
  ],
  seo: {
    title: "채무가 있는 경우 재산분할 상담, 무엇을 준비하나요? | 로펌가이드",
    description:
      "대출·카드빚 등 채무가 있는 경우 이혼 재산분할 상담에서 확인할 사항을 안내합니다.",
    keywords: ["재산분할 채무", "이혼 빚", "재산분할 상담"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "debt-division-purpose",
      order: 1,
      numberLabel: "01",
      heading: "채무는 왜 목적별로 구분해야 하나요?",
      layout: "prose",
      directAnswer:
        "공동생활이나 공동재산 형성을 위해 발생한 채무인지, 개인적인 용도로 발생한 채무인지에 따라 재산분할에서 다뤄지는 방식이 달라질 수 있다고 알려져 있기 때문입니다.",
      paragraphs: [
        "예를 들어 주택 마련을 위한 대출은 공동재산 형성과 관련된 채무로 다뤄지는 경우가 있는 반면, 개인적인 소비나 도박 등으로 발생한 채무는 다르게 취급될 수 있다고 설명되기도 합니다. 개별 사실관계에 따라 판단이 달라질 수 있는 사안입니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "debt-division-list",
      order: 2,
      numberLabel: "02",
      heading: "채무 목록은 어떻게 정리하나요?",
      layout: "checklist",
      directAnswer:
        "채무 종류, 잔액, 명의자, 발생 시기와 목적, 실제 상환 부담자를 항목별로 정리하면 상담에서 설명하기 수월합니다.",
      paragraphs: [
        "채무증명서나 대출거래약정서, 카드사 명세서 등을 통해 정확한 금액과 조건을 확인할 수 있습니다.",
      ],
      bullets: [
        "대출 종류(주택담보대출, 신용대출 등)와 잔액",
        "채무 명의자와 실제 상환 부담자",
        "채무 발생 시기와 목적",
        "카드·보증 등 기타 채무 현황",
      ],
      relatedHref: ROUTES.realEstateDivisionDocs,
      relatedLabel: "부동산 재산분할 자료 보기",
    },
    {
      id: "debt-division-net",
      order: 3,
      numberLabel: "03",
      heading: "자산과 채무를 함께 보는 이유는 무엇인가요?",
      layout: "prose",
      directAnswer:
        "재산분할은 자산에서 채무를 뺀 순재산을 기준으로 논의되는 경우가 많다고 알려져 있어, 자산과 채무를 함께 정리해야 전체 재산 상황을 정확히 설명할 수 있습니다.",
      paragraphs: [
        "채무가 자산보다 많은 경우에도 재산분할 상담이 무의미하다고 단정할 수는 없으며, 구체적인 상황은 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.premaritalPropertyCheck,
      relatedLabel: "혼인 전 재산 확인 보기",
    },
    {
      id: "debt-division-caution",
      order: 4,
      numberLabel: "04",
      heading: "채무 관련 상담에서 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "상대방 명의의 채무 정보를 임의로 확인하려 하지 말고, 필요한 경우 정식 절차를 통해 확인하는 것이 안전합니다. 채무 존재 여부를 추측만으로 단정하지 않아야 합니다.",
      paragraphs: [
        "채무 관련 쟁점은 자산 못지않게 복잡할 수 있어, 정리한 자료를 바탕으로 상담에서 구체적으로 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
  ],
};
