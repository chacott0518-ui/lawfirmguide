import { TOPIC_MEDIA } from "@/config/media";
import { CAUTION_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type { ContentPage } from "@/types/content";

export const CAUTION_PAGE: ContentPage = {
  id: "precautions",
  order: 3,
  numberLabel: "03",
  slug: "상간녀소송변호사",
  href: ROUTES.precautions,
  navLabel: "상간소송 변호사",
  breadcrumbLabel: "상간소송 변호사",
  categoryLabel: SITE.categoryLabel,
  h1: "상간녀소송변호사 선임 전 무엇을 확인해야 할까요?",
  heading: "상간녀소송변호사 선임 전 무엇을 확인해야 할까요?",
  intro: [
    "상간녀소송변호사 상담 전에는 청구 요건, 확보 가능한 증거, 절차와 대응 시 주의점을 먼저 정리하는 편이 도움이 됩니다.",
    "상간자소송·상간남소송·상간소송처럼 표현이 달라도 핵심은 사실관계와 증거를 어떻게 확인하고 절차를 진행할지입니다.",
  ],
  publishedAt: "2026-07-31",
  updatedAt: "2026-07-31",
  faqIds: ["caution-01", "caution-02", "caution-03", "caution-04"],
  faqTitle: "상간소송 FAQ",
  conclusion: [
    "상간소송은 결과 보장보다 요건·증거·절차를 기준으로 확인하는 편이 안전합니다.",
    "개별 사건의 청구 가능 여부와 대응 방법은 사실관계와 증거에 따라 달라질 수 있습니다.",
  ],
  sources: CAUTION_OFFICIAL_SOURCES,
  thumbnail: TOPIC_MEDIA.precautions.thumbnail,
  topImages: [TOPIC_MEDIA.precautions.thumbnail],
  bodyImage: TOPIC_MEDIA.precautions.secondaryImage,
  heroImage: TOPIC_MEDIA.precautions.thumbnail,
  secondaryImage: TOPIC_MEDIA.precautions.secondaryImage,
  repeatImage: null,
  inlineImage: TOPIC_MEDIA.precautions.secondaryImage,
  accentColor: TOPIC_MEDIA.precautions.accentColor,
  accentHoverColor: TOPIC_MEDIA.precautions.accentHoverColor,
  showArticleEyebrow: false,
  showRelatedGuideHeading: false,
  showContentCards: true,
  showFaqHub: true,
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "청구 요건",
      text: "어떤 요건을 기준으로 설명하는지 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "증거",
      text: "확보 가능한 증거와 한계를 구분해 듣습니다.",
    },
    {
      numberLabel: "03",
      title: "절차",
      text: "상담부터 청구·대응까지의 흐름을 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "주의점",
      text: "불법·과도한 증거 수집이나 결과 보장 표현에 주의합니다.",
    },
  ],
  seo: {
    title: "상간녀소송변호사 선택 전 증거·절차 확인 | 로펌가이드",
    description:
      "상간녀소송변호사 상담 전 청구 요건, 증거 확인, 절차와 대응 시 주의할 내용을 정리합니다.",
    keywords: [
      "상간녀소송변호사",
      "상간자소송",
      "상간남소송",
      "상간소송",
      "위자료",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "caution-claim",
      order: 1,
      numberLabel: "01",
      heading: "청구 요건은 무엇을 기준으로 확인하나요?",
      layout: "info-blocks",
      directAnswer:
        "청구 요건은 사실관계, 관련 당사자, 손해와 인과관계처럼 상담에서 설명되는 핵심 요소를 기준으로 확인합니다.",
      paragraphs: [
        "온라인 정보만으로 청구 가능 여부를 단정하기 어렵고, 개별 사건에서는 증거와 사실관계가 중요합니다.",
        "청구 요건을 충족하는지는 사건마다 사실관계가 다르므로, 유사해 보이는 사례라 해도 결과가 동일하게 적용된다고 단정하기는 어렵습니다.",
      ],
      infoBlocks: [
        { label: "사실관계", text: "어떤 사실이 쟁점이 되는지" },
        { label: "당사자", text: "청구·대응 주체를 어떻게 보는지" },
        { label: "손해", text: "위자료 등 청구 취지 설명 여부" },
        { label: "한계", text: "청구가 어려운 경우를 함께 설명하는지" },
      ],
    },
    {
      id: "caution-evidence",
      order: 2,
      numberLabel: "02",
      heading: "증거는 어떻게 확인하고 정리할까요?",
      layout: "checklist",
      directAnswer:
        "증거는 종류, 확보 경위, 증명력과 한계를 구분해 정리하고, 불법적인 수집 방식은 피해야 합니다.",
      paragraphs: [
        "증거가 많다는 표현보다, 어떤 증거가 어떤 쟁점에 연결되는지 설명을 듣는 편이 실질적입니다.",
        "증거 수집 과정에서 상대방의 사생활이나 주거 공간을 침해하는 방식은 오히려 법적 문제로 이어질 수 있으므로, 수집 방법의 적법성을 사전에 확인하는 것이 중요합니다.",
      ],
      bullets: [
        "보유 중인 자료의 종류를 목록화했는지",
        "확보 경위가 적법한지",
        "쟁점별로 증거가 어떻게 연결되는지",
        "추가 확보가 필요한 부분이 무엇인지",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼전문변호사 FAQ에서 상간·위자료 질문 보기",
    },
    {
      id: "caution-process",
      order: 3,
      numberLabel: "03",
      heading: "절차는 어떤 순서로 이해하면 될까요?",
      layout: "steps",
      directAnswer:
        "절차는 상담·자료 정리, 청구 준비, 상대방 대응, 합의·판결 가능성처럼 단계적으로 이해하는 편이 좋습니다.",
      paragraphs: [
        "실제 진행은 사건마다 달라질 수 있으므로, 예상 일정이나 결과를 단정하는 설명에는 주의가 필요합니다.",
        "절차가 진행되는 동안에도 상황에 따라 대응 방향이 달라질 수 있으므로, 정기적으로 담당 변호사와 진행 상황을 공유받는 것이 좋습니다.",
      ],
      steps: [
        { label: "상담", text: "요건과 증거를 기준으로 쟁점을 정리합니다." },
        { label: "준비", text: "청구 취지와 자료를 정리합니다." },
        { label: "진행", text: "상대방 대응과 쟁점 확장을 확인합니다." },
        { label: "정리", text: "합의 또는 판결 가능성을 점검합니다." },
      ],
    },
    {
      id: "caution-warn",
      order: 4,
      numberLabel: "04",
      heading: "대응 시 어떤 점을 주의해야 할까요?",
      layout: "comparison",
      directAnswer:
        "대응 시에는 감정적 대응이나 불법 증거 수집을 피하고, 비용·기간·예상 쟁점을 현실적으로 확인하는 것이 중요합니다.",
      paragraphs: [
        "결과 보장이나 과도한 승소 단정 표현보다, 위험 요소와 대안을 함께 설명하는지 확인하세요.",
        "감정적으로 대응하기보다는 사실관계를 정리한 자료를 바탕으로 침착하게 대응 방향을 상담하는 편이 이후 절차에 도움이 될 수 있습니다.",
      ],
      comparison: {
        left: {
          label: "확인할 설명",
          text: "요건, 증거 한계, 절차, 비용 구성, 대응 시 주의점",
        },
        right: {
          label: "주의할 표현",
          text: "결과 보장, 검증되지 않은 승소 단정, 불법 수집 권유",
        },
      },
      relatedHref: ROUTES.reviews,
      relatedLabel: "선임·후기 확인 기준 보기",
    },
  ],
};
