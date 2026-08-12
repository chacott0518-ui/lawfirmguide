import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const MEDIATION_PROCESS_PAGE: ContentPage = {
  id: "mediationProcess",
  order: 122,
  numberLabel: "02",
  slug: "이혼조정절차",
  href: ROUTES.mediationProcess,
  navLabel: "이혼조정절차",
  breadcrumbLabel: "이혼조정절차",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼조정절차는 어떻게 진행되나요?",
  heading: "이혼조정절차는 어떻게 진행되나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "조정 신청부터 조정기일, 성립·불성립까지의 일반적인 흐름을 안내합니다.",
  intro: [
    "이혼조정은 판사와 조정위원의 중개를 통해 부부가 합의점을 찾도록 돕는 절차로, 가사소송법의 조정전치주의에 따라 재판상 이혼에 앞서 진행되는 경우가 많다고 알려져 있습니다. 소송보다 상대적으로 유연한 방식으로 진행될 수 있습니다.",
    "이 글은 이혼조정절차의 일반적인 흐름을 안내하는 법률정보이며, 조정 성립 여부나 결과를 보장하지 않습니다. 실제 진행 방식은 담당 재판부와 사건 성격에 따라 달라질 수 있습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "mediation-01",
    "mediation-02",
    "mediation-03",
    "mediation-04",
    "mediation-05",
  ],
  faqTitle: "이혼조정절차 자주 묻는 질문",
  conclusion: [
    "이혼조정은 신청, 조정기일 진행, 성립 또는 불성립의 흐름으로 이뤄지는 경우가 많습니다. 조정이 성립하지 않으면 소송 절차로 이어질 수 있어, 조정기일마다 필요한 자료와 입장을 미리 정리해 두는 편이 도움이 됩니다.",
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
  relatedGuideIds: ["procedureComparison", "litigationProcess", "scheduleCompareCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "조정 신청",
      text: "가정법원에 조정을 신청하며 소송에 앞서 진행되는 경우가 많습니다.",
    },
    {
      numberLabel: "02",
      title: "조정기일",
      text: "판사·조정위원과 함께 쟁점을 확인하고 합의점을 모색합니다.",
    },
    {
      numberLabel: "03",
      title: "조정 성립",
      text: "합의가 이뤄지면 조정조서가 작성되며 확정판결과 같은 효력이 있다고 알려져 있습니다.",
    },
    {
      numberLabel: "04",
      title: "조정 불성립",
      text: "합의가 되지 않으면 소송 절차로 이어질 수 있습니다.",
    },
  ],
  seo: {
    title: "이혼조정절차는 어떻게 진행되나요? | 로펌가이드",
    description:
      "이혼조정 신청부터 조정기일, 성립·불성립까지의 일반적인 절차 흐름을 안내합니다.",
    keywords: ["이혼조정절차", "이혼조정", "가사조정", "조정전치주의"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "mediation-start",
      order: 1,
      numberLabel: "01",
      heading: "이혼조정은 어떻게 시작되나요?",
      layout: "prose",
      directAnswer:
        "관할 가정법원에 조정을 신청하면서 시작되며, 가사소송법의 조정전치주의에 따라 재판상 이혼 관련 사건은 소송에 앞서 조정을 신청하는 경우가 많다고 알려져 있습니다.",
      paragraphs: [
        "조정 신청 시에는 이혼 의사와 함께 재산분할, 자녀 관련 사항 등 다투고자 하는 쟁점을 함께 정리해 제출하는 경우가 일반적입니다. 신청서 양식과 첨부서류는 관할 법원의 안내를 따르는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.procedureComparison,
      relatedLabel: "협의이혼과 재판상 이혼 차이 보기",
    },
    {
      id: "mediation-hearing",
      order: 2,
      numberLabel: "02",
      heading: "조정기일에는 무엇을 하나요?",
      layout: "prose",
      directAnswer:
        "조정기일에는 판사와 조정위원이 양 당사자의 입장을 듣고 쟁점을 확인하며 합의 가능성을 모색합니다. 필요한 경우 여러 차례 기일이 진행될 수 있습니다.",
      paragraphs: [
        "조정기일 전에는 본인이 양보할 수 있는 부분과 그렇지 않은 부분을 미리 정리해 두면 도움이 될 수 있습니다. 재산·자녀 관련 자료를 준비해 가면 쟁점 설명이 더 구체적일 수 있습니다.",
        "조정 과정에서 오간 이야기가 소송으로 이어질 경우 그대로 증거처럼 쓰인다고 단정할 수는 없으며, 절차적 취급은 사건에 따라 다를 수 있습니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "mediation-result",
      order: 3,
      numberLabel: "03",
      heading: "조정이 성립하면 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "당사자 간 합의가 이뤄지면 조정조서가 작성되며, 이는 확정판결과 같은 효력을 가진다고 알려져 있습니다. 합의된 내용은 이후 임의로 변경하기 어려울 수 있습니다.",
      paragraphs: [
        "조정 성립 전에 합의 내용을 충분히 이해하고 있는지 확인하는 것이 중요합니다. 이해되지 않는 조항이 있다면 조정기일에서 바로 질문해 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.postJudgmentProcess,
      relatedLabel: "이혼판결 후 절차 보기",
    },
    {
      id: "mediation-fail",
      order: 4,
      numberLabel: "04",
      heading: "조정이 성립하지 않으면 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "조정이 성립하지 않으면 소송 절차로 이어지는 경우가 많다고 알려져 있습니다. 이 경우 조정 과정에서 확인된 쟁점을 바탕으로 소송 준비를 이어가게 됩니다.",
      paragraphs: [
        "조정 불성립이 곧 불리한 결과를 의미하는 것은 아닙니다. 사건에 따라 소송을 통해 쟁점을 더 명확히 다투는 것이 필요한 경우도 있습니다.",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 보기",
    },
  ],
};
