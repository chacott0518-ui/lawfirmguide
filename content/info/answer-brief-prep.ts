import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const ANSWER_BRIEF_PREP_PAGE: ContentPage = {
  id: "answerBriefPrep",
  order: 125,
  numberLabel: "05",
  slug: "이혼소송-답변서-준비",
  href: ROUTES.answerBriefPrep,
  navLabel: "이혼소송 답변서 준비",
  breadcrumbLabel: "이혼소송 답변서 준비",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 답변서, 무엇을 준비하나요?",
  heading: "이혼소송 답변서, 무엇을 준비하나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "답변서에 담을 내용과 준비 과정에서 확인할 자료를 안내합니다.",
  intro: [
    "답변서는 상대방이 제기한 소장의 청구 취지와 원인에 대해 본인의 입장을 밝히는 서면입니다. 인정할 부분과 다툴 부분을 명확히 구분해 작성하는 것이 이후 절차의 방향을 정하는 데 중요합니다.",
    "이 글은 답변서 준비 과정에서 확인할 사항을 안내하는 일반적인 법률정보이며, 답변서의 구체적인 문구나 법률적 주장은 사실관계와 증거에 따라 달라져야 합니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "answer-brief-01",
    "answer-brief-02",
    "answer-brief-03",
    "answer-brief-04",
    "answer-brief-05",
  ],
  faqTitle: "이혼소송 답변서 준비 자주 묻는 질문",
  conclusion: [
    "답변서는 청구 취지와 원인 중 인정할 부분과 다툴 부분을 구분하고, 다투는 부분에 대해서는 근거와 자료를 함께 정리하는 서면입니다. 기한 내 제출이 중요하므로 송달을 받으면 신속하게 준비를 시작하는 편이 안전합니다.",
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
  relatedGuideIds: ["complaintServiceResponse", "evidenceOrganizing", "litigationProcess"],
  keySummary: [
    {
      numberLabel: "01",
      title: "청구 확인",
      text: "소장의 청구 취지·원인을 항목별로 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "인정·부인 구분",
      text: "각 항목에 대해 인정할지 다툴지 입장을 정합니다.",
    },
    {
      numberLabel: "03",
      title: "근거 자료",
      text: "다투는 부분에 대한 근거와 자료를 함께 준비합니다.",
    },
    {
      numberLabel: "04",
      title: "기한 준수",
      text: "송달일로부터 정해진 기간 내 제출을 준비합니다.",
    },
  ],
  seo: {
    title: "이혼소송 답변서, 무엇을 준비하나요? | 로펌가이드",
    description:
      "이혼소송 답변서에 담을 내용과 준비 과정에서 확인할 자료를 일반적인 법률정보로 안내합니다.",
    keywords: ["이혼소송 답변서", "답변서 작성", "이혼소장 대응"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "answer-brief-content",
      order: 1,
      numberLabel: "01",
      heading: "답변서에는 어떤 내용을 담나요?",
      layout: "checklist",
      directAnswer:
        "청구 취지에 대한 입장(다투는지 여부), 청구 원인 사실에 대한 인정·부인, 다투는 부분에 대한 반박 근거를 담는 것이 일반적입니다.",
      paragraphs: [
        "항목마다 인정·부인·부지(알지 못함)를 구분해 표시하는 방식이 활용되는 경우가 많습니다. 근거 없이 전면 부인하기보다 사실관계에 맞춰 정리하는 편이 이후 절차에 도움이 될 수 있습니다.",
      ],
      bullets: [
        "청구 취지에 대한 전반적인 입장",
        "청구 원인 사실 항목별 인정·부인",
        "다투는 부분에 대한 반박 근거",
        "본인이 주장하고자 하는 추가 사실관계",
      ],
      relatedHref: ROUTES.complaintServiceResponse,
      relatedLabel: "이혼소장 송달 후 대응 보기",
    },
    {
      id: "answer-brief-evidence",
      order: 2,
      numberLabel: "02",
      heading: "근거 자료는 어떻게 준비하나요?",
      layout: "prose",
      directAnswer:
        "다투는 부분에 대해서는 관련 문서, 메시지, 금융자료 등 뒷받침할 수 있는 자료를 함께 정리하는 편이 도움이 됩니다. 자료가 부족한 부분은 추후 보완 가능성을 열어 두고 우선 확보한 자료부터 정리합니다.",
      paragraphs: [
        "답변서 제출 단계에서 모든 증거를 완벽하게 갖추지 못했더라도, 추가 서면과 증거는 이후 절차에서 보완할 수 있는 경우가 많습니다. 다만 핵심 쟁점에 대한 최소한의 근거는 초기에 정리해 두는 편이 좋습니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "answer-brief-deadline",
      order: 3,
      numberLabel: "03",
      heading: "제출 기한은 어떻게 확인하나요?",
      layout: "prose",
      directAnswer:
        "민사소송법에 따르면 청구를 다투는 경우 소장 부본을 송달받은 날부터 30일 이내에 답변서를 제출하도록 정해져 있다고 알려져 있으며, 가사소송에도 준용되는 경우가 있습니다. 송달일을 정확히 확인해 기한을 계산하는 것이 중요합니다.",
      paragraphs: [
        "기한이 임박했다면 우선 간단한 답변서라도 기한 내 제출하고, 이후 추가 서면으로 상세 내용을 보완하는 방법이 검토될 수 있습니다. 구체적인 대응은 상담을 통해 확인하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 보기",
    },
    {
      id: "answer-brief-caution",
      order: 4,
      numberLabel: "04",
      heading: "답변서 작성 시 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "사실과 다른 내용을 기재하거나, 감정적인 표현만으로 서면을 작성하는 것은 피하는 편이 안전합니다. 확인되지 않은 내용을 단정적으로 기재하기보다 사실관계에 근거해 작성하는 것이 중요합니다.",
      paragraphs: [
        "답변서는 이후 절차의 방향을 정하는 중요한 서면이므로, 작성 전 담당 변호사와 함께 내용을 검토하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
