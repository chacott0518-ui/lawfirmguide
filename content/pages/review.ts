import { TOPIC_MEDIA } from "@/config/media";
import { REVIEW_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const REVIEW_PAGE: ContentPage = {
  id: "reviews",
  order: 5,
  numberLabel: "05",
  slug: "이혼전문변호사후기",
  href: ROUTES.reviews,
  navLabel: "이혼전문변호사 후기",
  breadcrumbLabel: "이혼전문변호사 후기",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼전문변호사 후기는 어떤 기준으로 확인해야 할까요?",
  heading: "이혼전문변호사 후기는 어떤 기준으로 확인해야 할까요?",
  intro: [
    "이혼전문변호사 후기는 실제 사건 결과를 보장하는 자료가 아니라, 상담 설명·진행 방식·비용 안내를 어떻게 읽어야 하는지 확인하는 기준으로 활용하는 편이 안전합니다.",
    "이 페이지는 가짜 후기나 별점·승소 사례를 만들지 않으며, 과장·광고성 표현을 구분하고 선임 전 직접 질문할 항목을 정리합니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-07-31",
  faqIds: ["review-01", "review-02", "review-03", "review-04"],
  faqTitle: "후기·선임 FAQ",
  conclusion: [
    "후기는 결과 단정 자료가 아니라 상담·진행·비용 설명을 점검하는 참고 자료로 보는 편이 좋습니다.",
    "위임계약과 담당 변호사, 비용 구성을 직접 확인하는 과정이 더 중요합니다.",
  ],
  sources: REVIEW_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.reviews.thumbnail,
  topImages: [TOPIC_MEDIA.reviews.thumbnail],
  bodyImage: TOPIC_MEDIA.reviews.secondaryImage,
  heroImage: TOPIC_MEDIA.reviews.thumbnail,
  secondaryImage: TOPIC_MEDIA.reviews.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.reviews.secondaryImage,
  accentColor: TOPIC_MEDIA.reviews.accentColor,
  accentHoverColor: TOPIC_MEDIA.reviews.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "후기 역할",
      text: "상담·진행 설명을 점검하는 참고 자료로 봅니다.",
    },
    {
      numberLabel: "02",
      title: "과장 표현",
      text: "결과 보장·순위·최고 표현은 참고 범위를 좁힙니다.",
    },
    {
      numberLabel: "03",
      title: "직접 질문",
      text: "비용, 담당 변호사, 보고 방식을 직접 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "위임계약",
      text: "계약 범위와 추가 비용 조건을 문서로 확인합니다.",
    },
  ],
  seo: {
    title: "이혼전문변호사 후기 확인 기준과 선임 체크 | 로펌가이드",
    description:
      "이혼전문변호사 후기에서 상담 설명, 사건 진행 방식, 비용 설명과 과장된 표현을 구분하는 기준을 안내합니다.",
    keywords: [
      "이혼전문변호사 후기",
      "이혼변호사 후기",
      "변호사 선임 기준",
      "로펌 선택",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "review-role",
      order: 1,
      numberLabel: "01",
      heading: "후기는 어떤 기준으로 읽어야 할까요?",
      layout: "comparison",
      directAnswer:
        "후기는 상담 대응, 절차 설명, 비용 안내, 진행 보고처럼 검증 가능한 설명을 중심으로 읽는 편이 안전합니다.",
      paragraphs: [
        "상담 후기와 사건 결과 후기는 성격이 다를 수 있어, 무엇을 기준으로 작성된 글인지 구분하는 것이 중요합니다.",
        "동일한 사무실이라도 담당 변호사나 사건 유형에 따라 후기 내용이 다르게 느껴질 수 있으므로, 후기 하나만으로 전체를 판단하기보다는 여러 자료를 함께 참고하는 편이 좋습니다.",
      ],
      comparison: {
        left: {
          label: "참고할 내용",
          text: "질문 대응, 절차 설명, 비용 구성, 연락·보고 방식",
        },
        right: {
          label: "과도한 기대",
          text: "후기 한 건으로 결과나 적합성을 단정하는 것",
        },
      },
    },
    {
      id: "review-ads",
      order: 2,
      numberLabel: "02",
      heading: "과장·광고성 표현은 어떻게 구분하나요?",
      layout: "checklist",
      directAnswer:
        "결과 보장, 검증되지 않은 사건 수, 과도한 순위·최고 표현은 광고성 가능성이 있어 참고 범위를 보수적으로 잡는 편이 좋습니다.",
      paragraphs: [
        "광고 표시가 있다고 해서 모든 내용이 무의미한 것은 아니지만, 맥락과 검증 가능성을 함께 보는 것이 중요합니다.",
        "게시물이 광고임을 표시하고 있는지, 실제 상담 경험을 구체적으로 서술하고 있는지를 함께 살펴보면 내용의 신뢰도를 가늠하는 데 참고가 됩니다.",
      ],
      bullets: [
        "결과를 보장하는 표현이 있는지",
        "검증되지 않은 수치·사례를 강조하는지",
        "비용·위험 요소 설명이 빠져 있는지",
        "담당 변호사와 업무 범위가 불명확한지",
      ],
    },
    {
      id: "review-questions",
      order: 3,
      numberLabel: "03",
      heading: "선임 전 직접 질문할 항목은 무엇인가요?",
      layout: "responsive-table",
      directAnswer:
        "선임 전에는 담당 변호사, 업무 범위, 비용 구성, 진행 보고 방식과 추가 비용 조건을 직접 확인하는 것이 좋습니다.",
      paragraphs: [
        "후기에서 좋게 읽힌 내용이라도 본인 사건에서 동일하게 적용된다고 보기 어렵습니다.",
        "질문에 대한 답변이 구체적이고 명확할수록 상담 이후 진행 방식을 예측하기 쉬워지므로, 궁금한 점은 상담 단계에서 충분히 질문해두는 것이 좋습니다.",
      ],
      table: {
        caption: "선임 전 확인 질문",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "질문 예시" },
        ],
        rows: [
          { item: "담당자", check: "실제 담당 변호사는 누구인가요?" },
          { item: "업무 범위", check: "포함·제외되는 업무는 무엇인가요?" },
          { item: "비용", check: "보수와 부대비용은 어떻게 구성되나요?" },
          { item: "보고", check: "진행 상황은 어떤 방식으로 공유되나요?" },
        ],
      },
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 확인하기",
    },
    {
      id: "review-contract",
      order: 4,
      numberLabel: "04",
      heading: "위임계약에서 무엇을 확인해야 할까요?",
      layout: "info-blocks",
      directAnswer:
        "위임계약에서는 업무 범위, 보수 조건, 해지·정산, 추가 비용과 개인정보 처리 관련 안내를 확인합니다.",
      paragraphs: [
        "구두 설명과 문서 내용이 다르면 서명 전에 차이를 확인하는 편이 안전합니다.",
        "계약서에 서명하기 전에는 충분한 시간을 두고 내용을 검토하고, 이해되지 않는 조항이 있다면 서명 전에 명확한 설명을 요청하는 것이 안전합니다.",
      ],
      infoBlocks: [
        { label: "업무 범위", text: "포함되는 절차와 제외 항목" },
        { label: "보수", text: "착수금·성공보수·정산 방식" },
        { label: "추가 비용", text: "사전 안내와 동의 절차" },
        { label: "담당", text: "담당 변호사와 연락 창구" },
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼 상담·선임 FAQ 전체 보기",
    },
  ],
};
