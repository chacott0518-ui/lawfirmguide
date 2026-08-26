import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const PREMARITAL_PROPERTY_CHECK_PAGE: ContentPage = {
  id: "premaritalPropertyCheck",
  order: 132,
  numberLabel: "02",
  slug: "혼인전-재산-확인",
  href: ROUTES.premaritalPropertyCheck,
  navLabel: "혼인 전 재산 확인",
  breadcrumbLabel: "혼인 전 재산 확인",
  categoryLabel: SITE.categoryLabel,
  h1: "혼인 전 재산, 이혼 시 어떻게 확인하나요?",
  heading: "혼인 전 재산, 이혼 시 어떻게 확인하나요?",
  infoTopicLabel: "재산·금전",
  infoCardDescription:
    "혼인 전 형성한 재산을 상담에서 어떻게 설명하면 좋은지 안내합니다.",
  intro: [
    "혼인 전부터 보유하던 재산은 특유재산으로 다뤄지는 경우가 있다고 알려져 있지만, 혼인 기간이 길어지며 재산이 늘어나거나 형태가 바뀌면 판단이 단순하지 않을 수 있습니다. 취득 시기와 자금 출처를 정리해 두는 것이 중요합니다.",
    "이 글은 혼인 전 재산을 이혼 상담에서 어떻게 확인·설명하면 좋은지 안내하는 일반적인 법률정보이며, 특정 재산이 분할 대상에서 제외된다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "premarital-01",
    "premarital-02",
    "premarital-03",
    "premarital-04",
    "premarital-05",
  ],
  faqTitle: "혼인 전 재산 확인 자주 묻는 질문",
  conclusion: [
    "혼인 전 재산은 취득 시기와 자금 출처를 정리해 두면 상담에서 설명하기 수월합니다. 다만 혼인 기간 중 재산이 늘어나거나 형태가 바뀐 경우 판단이 단순하지 않을 수 있어, 구체적인 판단은 상담을 통해 확인해야 합니다.",
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
  relatedGuideIds: ["propertyListPrep", "realEstateDivisionDocs", "debtDivisionCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "취득 시기",
      text: "혼인신고일 이전 취득 여부를 자료로 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "자금 출처",
      text: "취득 당시 자금이 어디서 왔는지 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "혼인 중 변동",
      text: "혼인 기간 중 재산이 늘거나 형태가 바뀌었는지 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "증빙 자료",
      text: "계약서, 등기부, 계좌내역 등 관련 자료를 모아 둡니다.",
    },
  ],
  seo: {
    title: "혼인 전 재산, 이혼 시 어떻게 확인하나요? | 로펌가이드",
    description:
      "혼인 전 형성한 재산을 이혼 상담에서 어떻게 확인·설명하면 좋은지 안내합니다.",
    keywords: ["혼인 전 재산", "특유재산", "이혼 재산분할"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "premarital-concept",
      order: 1,
      numberLabel: "01",
      heading: "혼인 전 재산은 항상 분할 대상에서 제외되나요?",
      layout: "prose",
      directAnswer:
        "그렇게 단정할 수 없습니다. 혼인 전부터 보유한 재산은 특유재산으로 다뤄지는 경우가 있다고 알려져 있지만, 혼인 기간 중 상대방의 협력으로 재산이 유지·증식됐다면 판단이 달라질 수 있습니다.",
      paragraphs: [
        "예를 들어 혼인 전 취득한 부동산이라도 혼인 중 대출을 함께 상환했거나 가치 상승에 상대방의 기여가 있었다면, 그 부분이 재산분할에서 고려될 수 있다고 설명되는 경우가 있습니다. 개별 사실관계에 따라 판단이 달라질 수 있는 사안입니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
    {
      id: "premarital-evidence",
      order: 2,
      numberLabel: "02",
      heading: "취득 시기와 자금 출처는 어떻게 증명하나요?",
      layout: "checklist",
      directAnswer:
        "매매계약서, 등기부등본, 계좌 입출금 내역, 증여·상속 관련 서류처럼 취득 시기와 자금 출처를 뒷받침할 수 있는 자료를 모아 두는 것이 중요합니다.",
      paragraphs: [
        "시간이 지나면 관련 자료를 구하기 어려워질 수 있으므로, 가능한 한 초기 단계에서 자료를 확보해 두는 편이 안전합니다.",
      ],
      bullets: [
        "매매계약서·등기부등본 등 취득 관련 서류",
        "취득 당시 계좌 입출금 내역",
        "증여·상속을 받았다면 관련 서류",
        "혼인신고일을 확인할 수 있는 가족관계증명서",
      ],
      relatedHref: ROUTES.realEstateDivisionDocs,
      relatedLabel: "부동산 재산분할 자료 보기",
    },
    {
      id: "premarital-change",
      order: 3,
      numberLabel: "03",
      heading: "혼인 중 재산이 변동됐다면 어떻게 정리하나요?",
      layout: "prose",
      directAnswer:
        "혼인 전 재산이 혼인 중 매도·재투자되거나 다른 재산으로 형태가 바뀐 경우, 그 변동 과정을 시간순으로 정리해 두면 상담에서 설명하기 수월합니다.",
      paragraphs: [
        "형태가 바뀐 재산이 원래의 특유재산과 동일하게 취급되는지는 사실관계에 따라 달라질 수 있는 쟁점입니다. 변동 과정에 대한 자료가 있다면 함께 준비해 두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "premarital-consult",
      order: 4,
      numberLabel: "04",
      heading: "상담에서는 이 내용을 어떻게 활용하나요?",
      layout: "prose",
      directAnswer:
        "정리한 취득 시기·자금 출처·변동 과정을 상담에서 제시하면, 해당 재산이 어떻게 다뤄질 수 있는지 더 구체적으로 논의할 수 있습니다. 최종 판단은 증거와 법원의 검토를 통해 이뤄집니다.",
      paragraphs: [
        "혼인 전 재산이라는 이유만으로 상담을 미루기보다, 관련 자료를 정리해 상담에서 직접 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.debtDivisionCheck,
      relatedLabel: "채무 재산분할 상담 준비 보기",
    },
  ],
};
