import { TOPIC_MEDIA } from "@/config/media";
import { FAQ_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const FAQ_PAGE: ContentPage = {
  id: "faq",
  order: 6,
  numberLabel: "06",
  slug: "faq",
  href: ROUTES.faq,
  navLabel: "이혼전문변호사 FAQ",
  breadcrumbLabel: "이혼전문변호사 FAQ",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼전문변호사 FAQ, 상담·선임 전에 확인할 질문",
  heading: "이혼전문변호사 FAQ, 상담·선임 전에 확인할 질문",
  intro: [
    "이혼전문변호사 FAQ는 상담을 알아보고, 상담받고, 선임하기 전 단계에서 자주 확인하는 질문을 모은 페이지입니다.",
    "변호사를 확인하는 기준, 상담 전 준비, 비용 확인 방법, 위임계약에서 볼 점, 후기·광고 표현을 읽는 기준, 사건 진행 중 소통 방식을 순서대로 정리했습니다.",
    "이혼전문변호사 FAQ에서는 이 밖에도 협의이혼·이혼서류, 이혼소송비용과 기간, 상간소송·위자료, 재산분할·채무, 양육비·친권·사실혼처럼 자주 이어지는 질문을 주제별 페이지와 함께 확인할 수 있습니다.",
    "각 답변은 일반적인 안내이며, 개별 사건의 결과나 기간·금액을 단정하지 않습니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-08-07",
  faqIds: [
    "counsel-01",
    "counsel-02",
    "counsel-03",
    "counsel-04",
    "counsel-05",
    "counsel-06",
    "counsel-07",
    "counsel-08",
    "counsel-09",
    "counsel-10",
  ],
  faqTitle: "이혼전문변호사 FAQ",
  conclusion: [
    "FAQ는 질문 목록을 정리하는 출발점이며, 실제 판단은 사실관계와 증거, 적용 법령에 따라 달라질 수 있습니다.",
    "주제별 상세 페이지와 함께 보면 상담 전 질문을 더 구체적으로 만들 수 있습니다.",
  ],
  sources: FAQ_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.faq.thumbnail,
  topImages: [TOPIC_MEDIA.faq.thumbnail],
  bodyImage: TOPIC_MEDIA.faq.secondaryImage,
  heroImage: TOPIC_MEDIA.faq.thumbnail,
  secondaryImage: TOPIC_MEDIA.faq.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.faq.secondaryImage,
  accentColor: TOPIC_MEDIA.faq.accentColor,
  accentHoverColor: TOPIC_MEDIA.faq.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: false,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "변호사 확인",
      text: "경험, 설명 방식, 비용 안내의 구체성을 함께 봅니다.",
    },
    {
      numberLabel: "02",
      title: "상담 전 준비",
      text: "기본 서류와 쟁점 자료, 질문 목록을 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "비용 확인",
      text: "보수·실비·부대비용을 항목별로 구분해 봅니다.",
    },
    {
      numberLabel: "04",
      title: "위임계약",
      text: "업무 범위와 정산·해지 조건을 문서로 확인합니다.",
    },
    {
      numberLabel: "05",
      title: "후기·광고",
      text: "결과 보장 표현은 참고 범위를 좁혀서 봅니다.",
    },
  ],
  seo: {
    title: "이혼전문변호사 FAQ | 상담·비용·선임 전 확인 질문 | 로펌가이드",
    description:
      "이혼전문변호사 상담·선임 전 확인할 기준, 준비 자료, 비용 항목, 위임계약, 후기·광고 표현 주의점을 FAQ로 정리합니다.",
    keywords: [
      "이혼전문변호사 FAQ",
      "이혼변호사 상담",
      "이혼변호사 선임",
      "변호사 위임계약",
      "이혼변호사 비용",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "faq-lawyer-check",
      order: 1,
      numberLabel: "01",
      heading: "이혼전문변호사는 어떤 기준으로 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "이혼전문변호사인지 확인할 때는 이혼·가사 사건 처리 경험, 상담에서 설명하는 절차의 구체성, 비용 구성을 설명하는 방식을 함께 살펴보는 편이 도움이 됩니다. 특정 순위나 결과를 단정하는 표현보다 질문에 대한 답변이 명확한지를 기준으로 보는 것이 안전합니다.",
      paragraphs: [
        "여러 곳에서 상담을 받아본 뒤 설명 방식과 비용 안내를 비교해보는 것도 판단에 도움이 될 수 있으며, 필요하다면 대한변호사협회의 공식 정보로 자격 사항을 함께 확인할 수 있습니다.",
      ],
      bullets: [
        "이혼·가사 사건 처리 경험을 구체적으로 설명하는지",
        "상담에서 절차와 예상 쟁점을 명확히 안내하는지",
        "비용 구성과 추가 비용 조건을 투명하게 설명하는지",
        "결과를 보장하거나 단정하는 표현을 쓰지 않는지",
      ],
    },
    {
      id: "faq-consult-prep",
      order: 2,
      numberLabel: "02",
      heading: "첫 상담 전에는 어떤 자료를 준비하면 좋을까요?",
      layout: "steps",
      directAnswer:
        "첫 상담 전에는 기본 서류와 쟁점 관련 자료를 미리 정리해두면 상담 시간을 효율적으로 활용할 수 있습니다. 어떤 자료가 실제로 필요한지는 사건 성격에 따라 달라질 수 있으므로, 상담 전 문의로 먼저 확인하는 것도 방법입니다.",
      paragraphs: [
        "자료가 충분하지 않다고 상담 자체가 어려운 것은 아니며, 현재 정리된 내용을 바탕으로 부족한 부분을 상담에서 안내받을 수 있습니다.",
      ],
      steps: [
        { label: "기본 서류", text: "혼인관계증명서 등 기본 서류를 확인합니다." },
        { label: "쟁점 자료", text: "재산 목록, 대화 내역 등 쟁점 자료를 정리합니다." },
        { label: "질문 목록", text: "상담에서 확인할 질문을 미리 목록화합니다." },
        { label: "사전 문의", text: "필요한 자료를 상담 전 문의로 확인합니다." },
      ],
    },
    {
      id: "faq-fee-check",
      order: 3,
      numberLabel: "03",
      heading: "변호사 비용은 어떤 항목을 확인해야 하나요?",
      layout: "info-grid",
      directAnswer:
        "변호사 비용은 착수금과 성공보수, 인지액·송달료 같은 소송 실비, 감정·번역 등 부대비용이 발생할 수 있는지를 구분해서 확인하는 편이 좋습니다. 총액만 안내받기보다 각 항목이 포함하는 업무 범위와 추가 비용 발생 조건을 구체적으로 질문하는 것이 이후 오해를 줄이는 데 도움이 됩니다.",
      paragraphs: [
        "항목별 비용 구성은 이혼소송비용 페이지에서 더 자세히 확인할 수 있습니다.",
      ],
      infoBlocks: [
        { label: "착수금·성공보수", text: "산정 기준과 포함 업무 범위" },
        { label: "소송 실비", text: "인지액·송달료 등 절차 비용" },
        { label: "부대비용", text: "감정·번역 등 별도 발생 가능성" },
        { label: "정산 방식", text: "추가 비용 사전 안내와 동의 절차" },
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 확인하기",
    },
    {
      id: "faq-retainer",
      order: 4,
      numberLabel: "04",
      heading: "위임계약 전에는 무엇을 확인해야 하나요?",
      layout: "checklist",
      directAnswer:
        "위임계약 전에는 업무 범위, 보수 산정 방식과 정산 조건, 계약 해지 시 처리 방법, 담당 변호사와 연락 창구를 문서로 확인하는 것이 좋습니다. 구두로 설명받은 내용과 계약서 내용이 다르면 서명 전에 반드시 그 차이를 확인해야 합니다.",
      paragraphs: [
        "계약서를 충분히 검토할 시간을 요청하는 것은 정당한 절차이며, 서둘러 서명하기보다 이해되지 않는 조항을 먼저 질문하는 편이 안전합니다.",
      ],
      bullets: [
        "업무 범위와 제외 항목이 명확한지",
        "보수 산정과 정산 방식이 문서화되어 있는지",
        "계약 해지 조건이 안내되는지",
        "담당 변호사와 연락 창구가 명확한지",
      ],
    },
    {
      id: "faq-ads-caution",
      order: 5,
      numberLabel: "05",
      heading: "후기와 광고에서 어떤 표현을 주의해야 하나요?",
      layout: "comparison",
      directAnswer:
        "결과를 보장하거나 단정하는 표현, 검증되지 않은 사건 수·순위 표현은 참고 범위를 보수적으로 두는 편이 안전합니다. 이런 표현이 있다고 상담 자체가 무의미한 것은 아니지만, 실제 판단은 상담에서 확인한 절차 설명과 비용 안내를 기준으로 하는 것이 좋습니다.",
      paragraphs: [
        "후기·광고 확인 기준은 이혼전문변호사 후기 페이지에서 더 자세히 볼 수 있습니다.",
      ],
      comparison: {
        left: {
          label: "참고할 내용",
          text: "상담 설명의 구체성, 절차 안내, 비용 구성 설명",
        },
        right: {
          label: "주의할 표현",
          text: "결과 보장, 검증되지 않은 사건 수·순위·최고 표현",
        },
      },
      relatedHref: ROUTES.reviews,
      relatedLabel: "이혼전문변호사 후기 확인 기준 보기",
    },
    {
      id: "faq-progress-comm",
      order: 6,
      numberLabel: "06",
      heading: "사건 진행 중 연락과 소통은 어떻게 확인하나요?",
      layout: "checklist",
      directAnswer:
        "사건 진행 중에는 주요 기일이나 서류 제출 등 진행 상황을 어떤 주기와 방식으로 공유받을 수 있는지 계약 전에 확인해두는 것이 좋습니다. 연락이 원활한지, 질문에 대한 답변이 구체적인지도 진행 과정에서 함께 살펴볼 수 있는 부분입니다.",
      paragraphs: [
        "담당 변호사와 실제 진행 담당자가 같은지도 계약 전에 확인해두면 이후 소통 과정에서 혼선을 줄일 수 있습니다.",
      ],
      bullets: [
        "진행 상황 공유 주기와 방식이 안내되는지",
        "질문에 대한 답변이 구체적인지",
        "담당자 변경 시 안내가 있는지",
        "연락이 원활히 이루어지는지",
      ],
    },
  ],
};
