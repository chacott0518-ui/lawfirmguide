import { TOPIC_MEDIA } from "@/config/media";
import { RECOVERY_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const RECOVERY_PAGE: ContentPage = {
  id: "recovery",
  order: 2,
  numberLabel: "02",
  slug: "이혼소송비용",
  href: ROUTES.recovery,
  navLabel: "이혼소송 비용",
  breadcrumbLabel: "이혼소송 비용",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송비용, 어떤 항목을 나누어 확인해야 할까요?",
  heading: "이혼소송비용, 어떤 항목을 나누어 확인해야 할까요?",
  intro: [
    "이혼소송비용(이혼 소송 비용)은 변호사 보수, 인지액, 송달료와 부대비용을 항목별로 나눠 확인해야 전체 부담을 이해하기 쉽습니다.",
    "재판이혼비용으로 검색되는 경우에도 청구 내용과 진행 범위에 따라 구성이 달라질 수 있으므로, 총액만으로 비교하기보다 포함 항목을 질문으로 정리하는 편이 좋습니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-08-26",
  faqIds: ["recovery-01", "recovery-02", "recovery-03", "recovery-04"],
  faqTitle: "이혼소송비용 FAQ",
  conclusion: [
    "이혼소송비용은 항목을 분리해 확인하면 상담 시 비교와 질문 준비가 쉬워집니다.",
    "실제 발생 비용은 사건 유형과 진행 과정에 따라 달라질 수 있으므로 개별 안내를 확인해야 합니다.",
  ],
  sources: RECOVERY_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.recovery.thumbnail,
  topImages: [TOPIC_MEDIA.recovery.thumbnail],
  bodyImage: TOPIC_MEDIA.recovery.secondaryImage,
  heroImage: TOPIC_MEDIA.recovery.thumbnail,
  secondaryImage: TOPIC_MEDIA.recovery.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.recovery.secondaryImage,
  accentColor: TOPIC_MEDIA.recovery.accentColor,
  accentHoverColor: TOPIC_MEDIA.recovery.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "변호사 보수",
      text: "착수금·성공보수·추가 업무 범위를 구분해 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "인지액·송달료",
      text: "소송 진행에 필요한 기본 비용을 따로 봅니다.",
    },
    {
      numberLabel: "03",
      title: "부대비용",
      text: "감정·번역·출장 등 별도 발생 가능성을 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "포함 범위",
      text: "견적에 포함된 업무와 제외 항목을 문서·설명으로 확인합니다.",
    },
  ],
  seo: {
    title: "이혼소송비용 구성과 선임 전 확인사항 | 로펌가이드",
    description:
      "이혼소송비용(이혼 소송 비용)을 변호사 보수, 인지액, 송달료와 부대비용으로 나누어 확인하는 방법을 안내합니다.",
    keywords: [
      "이혼소송비용",
      "이혼 소송 비용",
      "재판이혼비용",
      "변호사 보수",
      "인지액",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "recovery-fee",
      order: 1,
      numberLabel: "01",
      heading: "변호사 보수는 어떤 기준으로 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "변호사 보수는 착수금, 성공보수, 추가 업무 범위와 보고 방식을 함께 확인해야 해석이 쉬워집니다.",
      paragraphs: [
        "금액만 듣고 결정하기보다, 어떤 절차까지 포함되는지와 별도 비용이 언제 발생하는지 질문하는 편이 좋습니다.",
        "동일한 명칭의 보수라도 법무법인마다 포함 범위와 산정 기준이 다르게 설명될 수 있으므로, 여러 곳에서 안내받은 내용을 비교해보는 것도 판단에 도움이 됩니다.",
      ],
      infoBlocks: [
        { label: "착수금", text: "사건 착수 시 기본으로 안내되는 보수" },
        { label: "성공보수", text: "약정 조건과 산정 방식 확인" },
        { label: "업무 범위", text: "협의·소송·조정 등 포함 범위" },
        { label: "보고 방식", text: "진행 상황 공유 방법과 주기" },
      ],
    },
    {
      id: "recovery-court",
      order: 2,
      numberLabel: "02",
      heading: "인지액과 송달료는 왜 따로 보나요?",
      layout: "comparison",
      directAnswer:
        "인지액과 송달료는 변호사 보수와 별개로 소송 진행에 필요할 수 있는 비용이므로, 견적에서 분리해 확인하는 편이 정확합니다.",
      paragraphs: [
        "청구 내용과 사건 진행에 따라 달라질 수 있어 고정 금액으로 단정하기 어렵습니다.",
        "인지액과 송달료는 법령과 절차에 따라 산정 방식이 정해져 있는 항목이므로, 정확한 금액과 산정 기준은 법원의 공식 안내를 통해 확인하는 것이 가장 정확합니다.",
      ],
      comparison: {
        left: {
          label: "인지액",
          text: "청구 내용에 따라 달라질 수 있는 소송 비용 항목",
        },
        right: {
          label: "송달료",
          text: "서류 송달 등 절차 진행에 필요한 비용",
        },
      },
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼 상담·선임 FAQ에서 비용 질문 보기",
    },
    {
      id: "recovery-extra",
      order: 3,
      numberLabel: "03",
      heading: "부대비용은 어떤 경우에 생길 수 있나요?",
      layout: "checklist",
      directAnswer:
        "부대비용은 감정, 번역, 출장, 추가 서면 작성처럼 사건 진행 중 별도로 필요할 수 있는 항목입니다.",
      paragraphs: [
        "발생 가능 항목을 미리 물어보면 이후 예상치 못한 비용 부담을 줄이는 데 도움이 됩니다.",
        "부대비용이 발생할 가능성이 있는 사건인지는 초기 상담 단계에서 미리 질문해두면, 이후 예상치 못한 청구로 인한 부담을 줄일 수 있습니다.",
      ],
      bullets: [
        "감정·평가가 필요한지",
        "번역·공증이 필요한지",
        "출장·원격 대응 비용이 있는지",
        "추가 서면·기일 대응이 별도인지",
      ],
    },
    {
      id: "recovery-check",
      order: 4,
      numberLabel: "04",
      heading: "선임 전 비용 설명에서 무엇을 확인하면 좋을까요?",
      layout: "responsive-table",
      directAnswer:
        "선임 전에는 포함 업무, 제외 항목, 추가 비용 발생 조건과 정산 방식을 함께 확인하는 것이 좋습니다.",
      paragraphs: [
        "이혼소송절차와 비용은 연결되므로, 절차 단계별로 어떤 비용이 붙는지 질문 목록을 준비해 보세요.",
        "견적서나 계약서에 명시되지 않은 구두 설명은 추후 분쟁의 소지가 될 수 있으므로, 중요한 조건은 문서로 남겨달라고 요청하는 편이 안전합니다.",
      ],
      table: {
        caption: "이혼소송비용 확인 항목",
        mobileMode: "cards",
        columns: [
          { key: "item", label: "항목" },
          { key: "check", label: "확인할 내용" },
        ],
        rows: [
          { item: "보수", check: "착수금·성공보수·포함 업무 범위" },
          { item: "소송비용", check: "인지액·송달료 안내 여부" },
          { item: "부대비용", check: "별도 발생 가능 항목" },
          { item: "정산", check: "추가 비용 사전 안내 방식" },
        ],
      },
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송절차·진행순서 확인",
    },
  ],
};
