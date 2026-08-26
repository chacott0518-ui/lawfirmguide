import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const POST_JUDGMENT_PROCESS_PAGE: ContentPage = {
  id: "postJudgmentProcess",
  order: 126,
  numberLabel: "06",
  slug: "이혼판결-후-절차",
  href: ROUTES.postJudgmentProcess,
  navLabel: "이혼판결 후 절차",
  breadcrumbLabel: "이혼판결 후 절차",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼 판결 후에는 어떤 절차가 남아있나요?",
  heading: "이혼 판결 후에는 어떤 절차가 남아있나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "판결 확정, 신고, 항소 검토까지 판결 이후 확인할 절차를 안내합니다.",
  intro: [
    "이혼소송 판결이 선고된 뒤에도 확정, 신고, 필요한 경우 항소 검토 등 남은 절차가 있습니다. 판결을 받았다고 해서 모든 절차가 곧바로 끝나는 것은 아니므로, 이후 흐름을 미리 이해해 두면 도움이 됩니다.",
    "이 글은 판결 이후 확인할 절차를 안내하는 일반적인 법률정보이며, 판결 확정 여부나 항소 결과를 예측하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "post-judgment-01",
    "post-judgment-02",
    "post-judgment-03",
    "post-judgment-04",
    "post-judgment-05",
  ],
  faqTitle: "이혼판결 후 절차 자주 묻는 질문",
  conclusion: [
    "판결이 선고된 뒤에는 항소기간 경과에 따른 확정, 이혼신고, 필요한 경우 항소 검토 등의 절차가 남아있을 수 있습니다. 판결 내용을 정확히 이해하고 기한을 놓치지 않는 것이 중요합니다.",
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
  relatedGuideIds: ["litigationProcess", "mediationProcess", "durationFactors"],
  keySummary: [
    {
      numberLabel: "01",
      title: "판결 확인",
      text: "판결문 내용을 정확히 확인하고 이해되지 않는 부분을 질문합니다.",
    },
    {
      numberLabel: "02",
      title: "항소기간",
      text: "불복하려면 정해진 기간 내 항소 여부를 검토해야 합니다.",
    },
    {
      numberLabel: "03",
      title: "판결 확정",
      text: "항소기간이 지나면 판결이 확정되는 경우가 많다고 알려져 있습니다.",
    },
    {
      numberLabel: "04",
      title: "이혼신고",
      text: "확정 후 정해진 기간 내 이혼신고 절차를 진행합니다.",
    },
  ],
  seo: {
    title: "이혼 판결 후에는 어떤 절차가 남아있나요? | 로펌가이드",
    description:
      "이혼판결 확정, 이혼신고, 항소 검토까지 판결 이후 확인할 절차를 안내합니다.",
    keywords: ["이혼판결 후 절차", "이혼신고", "이혼소송 항소"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "post-judgment-check",
      order: 1,
      numberLabel: "01",
      heading: "판결문을 받으면 무엇을 확인하나요?",
      layout: "prose",
      directAnswer:
        "판결 주문(이혼 인정 여부, 재산분할·위자료·친권·양육 관련 결정)과 판결 이유를 확인하고, 이해되지 않는 부분은 담당 변호사에게 질문하는 것이 중요합니다.",
      paragraphs: [
        "판결문은 법률 용어와 판단 근거가 함께 담겨 있어 이해가 쉽지 않을 수 있습니다. 특히 재산분할이나 양육 관련 결정 내용은 이후 실제 이행과 관련되므로 정확히 확인해 두어야 합니다.",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 보기",
    },
    {
      id: "post-judgment-appeal",
      order: 2,
      numberLabel: "02",
      heading: "판결에 불복하려면 어떻게 하나요?",
      layout: "prose",
      directAnswer:
        "판결에 불복하는 경우 민사소송법에 따라 판결서가 송달된 날부터 2주 이내에 항소해야 한다고 알려져 있으며, 이 조항은 가사소송에도 준용되는 경우가 있습니다. 기간을 놓치면 항소가 어려워질 수 있습니다.",
      paragraphs: [
        "항소 여부는 판결 내용, 다툴 만한 쟁점의 존재 여부, 추가로 확보할 수 있는 증거 등을 종합적으로 검토해 판단하는 경우가 많습니다. 항소한다고 해서 결과가 달라진다고 보장할 수는 없으며, 신중한 검토가 필요합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
    {
      id: "post-judgment-final",
      order: 3,
      numberLabel: "03",
      heading: "판결은 언제 확정되나요?",
      layout: "prose",
      directAnswer:
        "항소기간 내 항소하지 않으면 판결이 확정되는 경우가 많다고 알려져 있습니다. 판결이 확정되면 그 내용에 따른 법률관계가 정해지고, 이후 이행 절차가 진행됩니다.",
      paragraphs: [
        "확정 여부는 법원을 통해 확인할 수 있는 경우가 많습니다. 확정 시점은 이혼신고 등 이후 절차의 기준이 되므로 정확히 확인해 두는 것이 좋습니다.",
      ],
      relatedHref: ROUTES.durationFactors,
      relatedLabel: "이혼소송 기간 달라지는 요소 보기",
    },
    {
      id: "post-judgment-report",
      order: 4,
      numberLabel: "04",
      heading: "이혼신고는 어떻게 하나요?",
      layout: "prose",
      directAnswer:
        "판결이 확정되면 정해진 기간 내 판결등본과 확정증명원 등을 갖춰 이혼신고를 하는 절차가 일반적으로 알려져 있습니다. 신고 방법과 필요 서류는 관할 관공서의 안내를 통해 확인하는 것이 정확합니다.",
      paragraphs: [
        "재판상 이혼은 판결 확정만으로 이혼의 효력이 발생한다고 설명되는 경우가 있지만, 신고 절차는 가족관계등록부 정리를 위해 별도로 필요할 수 있습니다. 구체적인 절차는 관할 기관에 확인하는 것이 안전합니다.",
      ],
    },
  ],
};
