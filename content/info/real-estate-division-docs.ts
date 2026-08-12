import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const REAL_ESTATE_DIVISION_DOCS_PAGE: ContentPage = {
  id: "realEstateDivisionDocs",
  order: 133,
  numberLabel: "03",
  slug: "부동산-재산분할-자료",
  href: ROUTES.realEstateDivisionDocs,
  navLabel: "부동산 재산분할 자료",
  breadcrumbLabel: "부동산 재산분할 자료",
  categoryLabel: SITE.categoryLabel,
  h1: "부동산 재산분할, 어떤 자료를 준비하나요?",
  heading: "부동산 재산분할, 어떤 자료를 준비하나요?",
  infoTopicLabel: "재산·금전",
  infoCardDescription:
    "등기부등본, 대출 서류 등 부동산 관련 자료 준비 방법을 안내합니다.",
  intro: [
    "부동산은 재산분할에서 비중이 큰 항목으로 다뤄지는 경우가 많습니다. 소유 현황, 취득 시기, 대출 잔액을 정확히 파악해 두면 상담과 이후 절차에서 자료를 빠르게 활용할 수 있습니다.",
    "이 글은 부동산 재산분할과 관련해 준비할 수 있는 자료를 안내하는 일반적인 법률정보이며, 부동산의 분할 대상 해당 여부나 분할 비율을 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "real-estate-01",
    "real-estate-02",
    "real-estate-03",
    "real-estate-04",
    "real-estate-05",
  ],
  faqTitle: "부동산 재산분할 자료 자주 묻는 질문",
  conclusion: [
    "부동산 재산분할 상담에서는 등기부등본, 매매·대출 관련 서류, 시세 자료를 함께 준비해 두면 도움이 됩니다. 분할 비율과 방법은 사실관계와 기여도 등을 종합해 판단되는 사안입니다.",
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
  relatedGuideIds: ["propertyListPrep", "premaritalPropertyCheck", "debtDivisionCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "등기부등본",
      text: "소유 현황과 권리관계를 확인할 수 있는 기본 자료입니다.",
    },
    {
      numberLabel: "02",
      title: "매매·취득 서류",
      text: "취득 시기와 가격을 확인할 수 있는 계약서 등입니다.",
    },
    {
      numberLabel: "03",
      title: "대출 관련 서류",
      text: "대출 잔액과 상환 내역을 확인할 수 있는 자료입니다.",
    },
    {
      numberLabel: "04",
      title: "시세 자료",
      text: "현재 가치를 가늠할 수 있는 시세 정보를 함께 확인합니다.",
    },
  ],
  seo: {
    title: "부동산 재산분할, 어떤 자료를 준비하나요? | 로펌가이드",
    description:
      "이혼 재산분할에서 부동산 관련 등기부등본, 대출 서류 등 준비할 자료를 안내합니다.",
    keywords: ["부동산 재산분할", "이혼 부동산", "재산분할 자료", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "real-estate-registry",
      order: 1,
      numberLabel: "01",
      heading: "등기부등본은 왜 필요한가요?",
      layout: "prose",
      directAnswer:
        "등기부등본은 부동산의 소유자, 권리관계(근저당권 등), 변동 이력을 확인할 수 있는 기본 자료로, 재산분할 상담에서 가장 먼저 확인되는 자료 중 하나입니다.",
      paragraphs: [
        "등기부등본은 인터넷등기소를 통해 발급받을 수 있으며, 소유 부동산이 여러 곳이라면 각각 발급해 정리해 두는 것이 좋습니다. 근저당권 설정 여부와 채권최고액도 함께 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "real-estate-purchase",
      order: 2,
      numberLabel: "02",
      heading: "취득 관련 서류는 무엇을 준비하나요?",
      layout: "checklist",
      directAnswer:
        "매매계약서, 취득 당시 자금 출처를 보여주는 계좌내역, 분양 계약 관련 서류처럼 취득 시기와 경위를 확인할 수 있는 자료를 준비하는 것이 도움이 됩니다.",
      paragraphs: [
        "취득 시기가 혼인 전인지 혼인 중인지에 따라 재산분할에서 다뤄지는 방식이 달라질 수 있어, 이 부분을 명확히 확인할 수 있는 자료가 중요합니다.",
      ],
      bullets: [
        "매매계약서 또는 분양계약서",
        "취득 당시 계좌 입출금 내역",
        "등기권리증(집문서)",
        "재건축·재개발 관련 서류(해당 시)",
      ],
      relatedHref: ROUTES.premaritalPropertyCheck,
      relatedLabel: "혼인 전 재산 확인 보기",
    },
    {
      id: "real-estate-loan",
      order: 3,
      numberLabel: "03",
      heading: "대출 관련 자료는 어떻게 준비하나요?",
      layout: "prose",
      directAnswer:
        "현재 대출 잔액, 상환 내역, 명의(공동명의 여부)를 확인할 수 있는 자료를 준비하면, 순재산가치를 파악하는 데 도움이 됩니다. 채무도 재산분할에서 함께 고려되는 경우가 많습니다.",
      paragraphs: [
        "대출 상환을 누가 부담해 왔는지도 재산분할에서 참고되는 정보가 될 수 있어, 상환 내역과 함께 부담 주체를 정리해 두는 편이 좋습니다.",
      ],
      relatedHref: ROUTES.debtDivisionCheck,
      relatedLabel: "채무 재산분할 상담 준비 보기",
    },
    {
      id: "real-estate-value",
      order: 4,
      numberLabel: "04",
      heading: "부동산 가치는 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "인근 실거래가, 공시가격, 부동산 중개업소의 시세 정보 등을 참고해 대략적인 가치를 가늠할 수 있습니다. 다만 최종 평가는 감정평가 등 별도 절차를 통해 이뤄지는 경우가 많습니다.",
      paragraphs: [
        "특정 시점의 시세만으로 가치를 단정하기보다, 여러 자료를 함께 참고하는 편이 안전합니다. 구체적인 평가 방법은 상담에서 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
  ],
};
