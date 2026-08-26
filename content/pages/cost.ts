import { TOPIC_MEDIA } from "@/config/media";
import { COST_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const COST_PAGE: ContentPage = {
  id: "cost",
  order: 1,
  numberLabel: "01",
  slug: "협의이혼절차",
  href: ROUTES.cost,
  navLabel: "협의이혼 절차",
  breadcrumbLabel: "협의이혼 절차",
  categoryLabel: SITE.categoryLabel,
  h1: "협의이혼절차, 신청 전 어떤 내용을 확인해야 할까요?",
  heading: "협의이혼절차, 신청 전 어떤 내용을 확인해야 할까요?",
  intro: [
    "협의이혼절차(협의이혼 절차)는 부부 사이에 이혼 의사와 주요 합의가 있을 때, 필요한 이혼서류와 숙려기간·신청 순서를 확인해 진행하는 절차입니다.",
    "합의이혼으로 검색되는 경우에도 실제로는 합의 범위와 제출 서류, 자녀·재산 관련 정리가 먼저 필요한지 확인하는 편이 안전합니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-08-26",
  faqIds: ["cost-01", "cost-02", "cost-03", "cost-04"],
  faqTitle: "협의이혼절차 FAQ",
  conclusion: [
    "협의이혼절차는 서류와 합의 내용, 숙려기간을 단계별로 확인하면 이후 분쟁을 줄이는 데 도움이 됩니다.",
    "개별 상황에 맞는 신청 방법과 서류는 관할 기관 안내와 법률 상담을 통해 확인해야 합니다.",
  ],
  sources: COST_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.cost.thumbnail,
  topImages: [TOPIC_MEDIA.cost.thumbnail],
  bodyImage: TOPIC_MEDIA.cost.secondaryImage,
  heroImage: TOPIC_MEDIA.cost.thumbnail,
  secondaryImage: TOPIC_MEDIA.cost.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.cost.secondaryImage,
  accentColor: TOPIC_MEDIA.cost.accentColor,
  accentHoverColor: TOPIC_MEDIA.cost.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "합의 범위",
      text: "이혼 의사와 자녀·재산 관련 합의 범위를 먼저 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "이혼서류",
      text: "제출이 필요한 서류와 작성 항목을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "숙려기간",
      text: "숙려기간 적용 여부와 일정을 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "신청 순서",
      text: "신청 후 안내되는 확인 절차를 단계적으로 따릅니다.",
    },
  ],
  seo: {
    title: "협의이혼절차와 준비서류·숙려기간 확인 | 로펌가이드",
    description:
      "협의이혼절차를 준비할 때 확인할 서류, 합의사항, 숙려기간과 신청 순서를 단계별로 정리합니다.",
    keywords: ["협의이혼절차", "이혼서류", "합의이혼", "이혼절차", "숙려기간"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "cost-agree",
      order: 1,
      numberLabel: "01",
      heading: "협의이혼 전 어떤 합의를 정리해야 할까요?",
      layout: "checklist",
      directAnswer:
        "협의이혼 전에는 이혼 의사뿐 아니라 자녀 양육, 재산 관련 합의처럼 이후 분쟁으로 이어질 수 있는 항목을 함께 정리하는 편이 좋습니다.",
      paragraphs: [
        "합의 내용이 불분명하면 절차 중 또는 이후에 추가 분쟁이 생길 수 있어, 상담 전 확인 목록을 만들어 두는 것이 도움이 됩니다.",
        "합의 여부와 범위를 문서로 남겨두면 이후 진행 과정에서 서로 다른 기억이나 해석 차이로 생기는 혼선을 줄이는 데 도움이 됩니다.",
      ],
      bullets: [
        "부부 모두 이혼 의사가 있는지",
        "미성년 자녀의 양육·친권 관련 합의가 있는지",
        "재산·채무 관련 정리가 필요한지",
        "합의 내용을 문서로 남길 수 있는지",
      ],
    },
    {
      id: "cost-docs",
      order: 2,
      numberLabel: "02",
      heading: "이혼서류는 무엇을 기준으로 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "이혼서류는 관할 기관이 요구하는 기본 서류와, 자녀·합의 내용에 따라 추가로 필요할 수 있는 서류를 구분해 확인합니다.",
      paragraphs: [
        "검색으로 보이는 목록만 그대로 적용하기보다, 본인 상황에 맞는 제출 서류와 작성 방법을 공식 안내에서 확인하는 편이 안전합니다.",
        "제출 서류의 정확한 양식과 최신 안내는 관할 기관의 공식 창구에서 다시 확인하는 것이 안전하며, 온라인에 배포된 예시 양식은 갱신 시점에 따라 실제 요구사항과 차이가 있을 수 있습니다.",
      ],
      infoBlocks: [
        { label: "기본 서류", text: "신청에 필요한 기본 양식과 신분증 관련 서류" },
        { label: "자녀 관련", text: "양육·친권 합의가 있을 때 추가 확인 서류" },
        { label: "합의 문서", text: "합의 내용을 정리한 서류가 필요한지 여부" },
        { label: "제출 방법", text: "방문·온라인 등 제출 경로 확인" },
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼 상담·선임 FAQ에서 서류 관련 질문 보기",
    },
    {
      id: "cost-waiting",
      order: 3,
      numberLabel: "03",
      heading: "숙려기간은 어떻게 이해하면 될까요?",
      layout: "steps",
      directAnswer:
        "숙려기간은 협의이혼 과정에서 일정 기간을 두고 의사를 재확인하도록 안내되는 단계로, 적용 여부와 기간은 상황에 따라 달라질 수 있습니다.",
      paragraphs: [
        "기간을 임의로 단정하기보다, 본인 케이스에 숙려기간이 어떻게 적용되는지 공식 안내와 상담을 통해 확인하는 편이 좋습니다.",
        "숙려기간은 신청 이후 안내되는 절차상의 기간으로, 이 기간 중에도 합의 내용을 다시 점검하거나 상담을 통해 궁금한 점을 확인할 수 있다는 점을 참고하면 도움이 됩니다.",
      ],
      steps: [
        { label: "적용 여부", text: "숙려기간이 필요한 상황인지 확인합니다." },
        { label: "일정 확인", text: "안내된 기간과 다음 절차 일정을 정리합니다." },
        { label: "의사 재확인", text: "기간 중 합의와 서류를 다시 점검합니다." },
        { label: "다음 단계", text: "이후 신청·확인 절차를 이어갑니다." },
      ],
    },
    {
      id: "cost-order",
      order: 4,
      numberLabel: "04",
      heading: "신청 순서는 어떻게 나눠 보면 좋을까요?",
      layout: "timeline",
      directAnswer:
        "신청 순서는 합의·서류 정리, 신청, 숙려기간, 확인 절차처럼 단계별로 보면 누락을 줄이기 쉽습니다.",
      paragraphs: [
        "재판이혼이나 소송 쟁점이 있는 경우에는 협의이혼절차와 확인 항목이 달라질 수 있으므로, 비용·재산분할 페이지도 함께 참고하세요.",
        "신청 순서를 미리 단계별로 정리해두면 각 단계에서 필요한 서류와 확인 사항을 놓치지 않고 준비할 수 있어 전체 진행이 한결 수월해집니다.",
      ],
      timeline: [
        { label: "준비", text: "합의와 서류를 정리합니다." },
        { label: "신청", text: "안내된 방식으로 신청합니다." },
        { label: "숙려", text: "적용되는 숙려기간을 확인합니다." },
        { label: "확인", text: "이후 확인·종결 절차를 따릅니다." },
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 확인하기",
    },
  ],
};
