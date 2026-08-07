import { TOPIC_MEDIA } from "@/config/media";
import { HOSPITAL_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const HOSPITAL_PAGE: ContentPage = {
  id: "hospital",
  order: 4,
  numberLabel: "04",
  slug: "이혼소송재산분할",
  href: ROUTES.hospital,
  navLabel: "이혼 재산분할",
  breadcrumbLabel: "이혼 재산분할",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 재산분할, 대상과 비율은 어떻게 확인할까요?",
  heading: "이혼소송 재산분할, 대상과 비율은 어떻게 확인할까요?",
  intro: [
    "이혼소송 재산분할은 대상이 되는 재산, 기여도, 특유재산과 채무를 구분해 확인해야 비율과 범위를 이해하기 쉽습니다.",
    "이혼사유·유책배우자 쟁점은 재산분할과 구분될 수 있는 법적 쟁점이므로, 이 페이지에서는 재산분할을 중심으로 보고 이혼사유는 보조적으로만 설명합니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-07-31",
  faqIds: ["hospital-01", "hospital-02", "hospital-03", "hospital-04"],
  faqTitle: "재산분할 FAQ",
  conclusion: [
    "재산분할은 대상 재산과 기여도, 특유재산·채무를 정리한 뒤 청구 전 자료를 준비하면 상담이 수월해집니다.",
    "개별 비율과 결과는 사실관계와 증거에 따라 달라질 수 있으므로 일반 정보만으로 단정하지 않는 편이 안전합니다.",
  ],
  sources: HOSPITAL_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.hospital.thumbnail,
  topImages: [TOPIC_MEDIA.hospital.thumbnail],
  bodyImage: TOPIC_MEDIA.hospital.secondaryImage,
  heroImage: TOPIC_MEDIA.hospital.thumbnail,
  secondaryImage: TOPIC_MEDIA.hospital.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.hospital.secondaryImage,
  accentColor: TOPIC_MEDIA.hospital.accentColor,
  accentHoverColor: TOPIC_MEDIA.hospital.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "대상 재산",
      text: "부부 공동재산으로 볼 수 있는 범위를 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "기여도",
      text: "형성·유지에 대한 기여를 어떤 기준으로 보는지 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "특유재산·채무",
      text: "제외 가능 재산과 채무 구분을 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "준비자료",
      text: "청구 전 재산 목록과 증빙을 정리합니다.",
    },
  ],
  seo: {
    title: "이혼소송 재산분할 대상·비율·이혼사유 | 로펌가이드",
    description:
      "이혼소송 재산분할의 대상 재산, 기여도, 채무와 특유재산을 확인하고 이혼사유와의 관계를 설명합니다.",
    keywords: [
      "이혼소송 재산분할",
      "재산분할",
      "위자료",
      "이혼사유",
      "유책배우자",
      "특유재산",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "hospital-assets",
      order: 1,
      numberLabel: "01",
      heading: "재산분할 대상이 되는 재산은 무엇인가요?",
      layout: "info-grid",
      directAnswer:
        "재산분할 대상은 혼인 중 형성·유지된 부부 공동재산으로 볼 수 있는 범위를 중심으로 확인합니다.",
      paragraphs: [
        "명의와 실제 기여가 다를 수 있어, 부동산·예금·주식·사업체 등 항목별로 목록을 만드는 편이 도움이 됩니다.",
        "재산 목록은 시간이 지나면 누락되거나 기억이 흐려질 수 있으므로, 가능한 한 이른 시점부터 항목별로 정리해두는 것이 이후 절차에서 도움이 됩니다.",
      ],
      infoBlocks: [
        { label: "부동산", text: "주택·토지 등 소유·대출 현황" },
        { label: "금융자산", text: "예금·적금·주식·보험 해약금 등" },
        { label: "사업·기타", text: "사업체·차량·고가 동산 등" },
        { label: "숨은 자산", text: "누락 가능성 점검을 위한 질문 목록" },
      ],
    },
    {
      id: "hospital-ratio",
      order: 2,
      numberLabel: "02",
      heading: "재산분할 비율을 판단하는 요소는 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "비율은 재산 형성·유지에 대한 기여, 혼인 기간, 생활 형편과 앞으로의 여건 등 여러 요소를 종합해 설명되는 경우가 많습니다.",
      paragraphs: [
        "고정 비율을 일반 규칙처럼 단정하기보다, 본인 사건에서 어떤 요소가 중요하게 설명되는지 확인하는 편이 정확합니다.",
        "여러 요소가 종합적으로 고려되는 만큼, 특정 요소 하나만으로 비율이 결정된다고 단정하기보다는 본인 사건에 해당하는 여러 사정을 함께 설명할 수 있도록 준비하는 편이 좋습니다.",
      ],
      bullets: [
        "재산 형성에 대한 경제적·비경제적 기여",
        "혼인 기간과 생활 형태",
        "자녀 양육과 가정 내 역할",
        "향후 생활·수입 여건에 대한 설명",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼전문변호사 FAQ에서 재산분할 질문 보기",
    },
    {
      id: "hospital-special",
      order: 3,
      numberLabel: "03",
      heading: "특유재산·채무·퇴직금은 어떻게 확인하나요?",
      layout: "compare-table",
      directAnswer:
        "특유재산, 채무, 퇴직금·연금성 자산은 재산분할 대상 여부가 쟁점이 될 수 있어 항목별로 구분해 확인합니다.",
      paragraphs: [
        "같은 명칭의 자산이라도 형성 경위와 혼인 중 기여에 따라 설명이 달라질 수 있습니다.",
        "특유재산으로 주장하려는 자산이라도 혼인 기간 중 공동의 노력으로 유지·증식되었다는 사정이 있다면 설명이 달라질 수 있으므로, 취득부터 현재까지의 경과를 함께 정리해두는 것이 좋습니다.",
      ],
      compareHeaders: ["항목", "확인할 내용"],
      compareRows: [
        {
          criterion: "특유재산",
          left: "혼인 전 재산·상속·증여 등",
          right: "대상 제외·포함 설명 여부",
        },
        {
          criterion: "채무",
          left: "공동 채무와 개인 채무",
          right: "부담 주체와 분할 관련성",
        },
        {
          criterion: "퇴직금 등",
          left: "재직·납입·수령 시점",
          right: "분할 대상 설명 방식",
        },
        {
          criterion: "증빙",
          left: "잔고·등기·계약 서류",
          right: "목록과 증빙의 대응 관계",
        },
      ],
    },
    {
      id: "hospital-prepare",
      order: 4,
      numberLabel: "04",
      heading: "청구 전 준비자료와 이혼사유는 어떻게 보나요?",
      layout: "info-blocks",
      directAnswer:
        "청구 전에는 재산 목록과 증빙을 정리하고, 이혼사유·유책배우자 쟁점은 재산분할과 구분되는 보조 쟁점으로 확인합니다.",
      paragraphs: [
        "위자료와 재산분할은 목적과 판단 기준이 다를 수 있으므로, 상담에서 두 쟁점을 섞어 듣지 않도록 질문을 분리하는 편이 좋습니다.",
        "재산 목록과 증빙 자료를 상담 전에 미리 정리해가면 상담 시간을 절차 설명이나 쟁점 확인에 더 집중해서 사용할 수 있습니다.",
      ],
      infoBlocks: [
        { label: "재산 목록", text: "자산·채무를 항목별로 정리" },
        { label: "증빙", text: "잔고·등기·계약서 등 기본 자료" },
        { label: "이혼사유", text: "재산분할과 구분되는 쟁점인지 확인" },
        { label: "위자료", text: "청구 취지와 재산분할의 관계 확인" },
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "상간소송·위자료 관련 확인 보기",
      callout:
        "이혼사유는 재산분할 비율을 자동으로 결정한다고 단정하기 어렵고, 사건별로 설명이 달라질 수 있습니다.",
    },
  ],
};
