import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const PROCEDURE_COMPARISON_PAGE: ContentPage = {
  id: "procedureComparison",
  order: 121,
  numberLabel: "01",
  slug: "협의이혼-재판상이혼-차이",
  href: ROUTES.procedureComparison,
  navLabel: "협의이혼과 재판상 이혼 차이",
  breadcrumbLabel: "협의이혼과 재판상 이혼 차이",
  categoryLabel: SITE.categoryLabel,
  h1: "협의이혼과 재판상 이혼, 무엇이 다른가요?",
  heading: "협의이혼과 재판상 이혼, 무엇이 다른가요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "협의 가능 여부에 따라 절차가 어떻게 달라지는지 비교해 안내합니다.",
  intro: [
    "이혼은 부부가 협의로 진행하는 협의이혼과, 협의가 되지 않을 때 법원의 절차를 거치는 재판상 이혼으로 나뉩니다. 두 절차는 요건과 진행 방식이 다르므로, 본인 상황이 어느 쪽에 가까운지 먼저 이해해 두면 상담에 도움이 됩니다.",
    "이 글은 두 절차의 일반적인 차이를 비교한 법률정보이며, 어떤 절차가 더 유리한지를 단정하지 않습니다. 실제 진행 방향은 협의 가능 여부와 사실관계에 따라 상담에서 확인해야 합니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "proc-compare-01",
    "proc-compare-02",
    "proc-compare-03",
    "proc-compare-04",
    "proc-compare-05",
  ],
  faqTitle: "협의이혼·재판상 이혼 차이 자주 묻는 질문",
  conclusion: [
    "협의이혼은 부부 쌍방의 합의를 전제로 하고, 재판상 이혼은 합의가 되지 않거나 협의 자체가 어려운 경우 법원의 절차를 통해 진행됩니다. 두 절차 모두 정해진 요건과 과정이 있으므로, 본인 상황에 맞는 절차를 상담에서 확인하는 편이 안전합니다.",
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
  relatedGuideIds: ["mediationProcess", "litigationProcess", "consultPrep"],
  keySummary: [
    {
      numberLabel: "01",
      title: "협의이혼",
      text: "부부 쌍방의 합의와 법원의 확인, 숙려기간을 거치는 절차입니다.",
    },
    {
      numberLabel: "02",
      title: "재판상 이혼",
      text: "협의가 되지 않을 때 조정·소송을 통해 진행되는 절차입니다.",
    },
    {
      numberLabel: "03",
      title: "조정전치주의",
      text: "재판상 이혼도 원칙적으로 조정을 먼저 거치는 경우가 많습니다.",
    },
    {
      numberLabel: "04",
      title: "선택 기준",
      text: "협의 가능 여부와 쟁점의 다툼 정도에 따라 절차가 달라집니다.",
    },
  ],
  seo: {
    title: "협의이혼과 재판상 이혼, 무엇이 다른가요? | 로펌가이드",
    description:
      "협의이혼과 재판상 이혼의 요건·진행 방식 차이를 일반적인 법률정보로 비교해 안내합니다.",
    keywords: ["협의이혼 재판상이혼 차이", "이혼전문변호사", "이혼절차", "재판상 이혼"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "proc-compare-basic",
      order: 1,
      numberLabel: "01",
      heading: "협의이혼과 재판상 이혼은 무엇이 다른가요?",
      layout: "comparison",
      directAnswer:
        "협의이혼은 부부 쌍방이 이혼에 합의하고 법원의 확인을 거쳐 신고하는 절차이고, 재판상 이혼은 합의가 되지 않거나 협의 자체가 어려운 경우 조정·소송을 통해 진행되는 절차입니다.",
      paragraphs: [
        "협의이혼은 이혼 자체와 자녀 관련 사항(친권자 지정 등)에 대한 합의를 전제로, 법원에 협의이혼의사확인을 신청하고 숙려기간을 거쳐 신고하는 흐름으로 알려져 있습니다.",
        "재판상 이혼은 협의가 되지 않는 경우, 또는 상대방의 소재를 알 수 없는 등 협의 자체가 어려운 경우에 검토되는 절차입니다. 재판상 이혼 원인은 민법 제840조에 열거되어 있으며, 개별 사실관계가 이에 해당하는지는 상담을 통해 확인해야 합니다.",
      ],
      comparison: {
        left: {
          label: "협의이혼",
          text: "부부 합의 + 법원 확인 + 숙려기간을 거치는 절차",
        },
        right: {
          label: "재판상 이혼",
          text: "합의가 안 될 때 조정·소송을 통해 진행되는 절차",
        },
      },
      relatedHref: ROUTES.cost,
      relatedLabel: "협의이혼절차 안내 보기",
    },
    {
      id: "proc-compare-mediation",
      order: 2,
      numberLabel: "02",
      heading: "재판상 이혼도 조정을 먼저 거치나요?",
      layout: "prose",
      directAnswer:
        "가사소송법의 조정전치주의에 따라 이혼 관련 사건은 원칙적으로 소송에 앞서 조정을 신청하는 경우가 많다고 알려져 있습니다. 다만 사건의 성격에 따라 곧바로 소송 절차로 진행되는 경우도 있을 수 있습니다.",
      paragraphs: [
        "조정은 판사와 조정위원의 중개로 당사자가 합의점을 찾는 절차로, 소송보다 상대적으로 유연하게 진행될 수 있다고 설명되는 경우가 많습니다. 조정이 성립하지 않으면 소송 절차로 넘어가는 흐름이 일반적입니다.",
      ],
      relatedHref: ROUTES.mediationProcess,
      relatedLabel: "이혼조정절차 안내 보기",
    },
    {
      id: "proc-compare-choose",
      order: 3,
      numberLabel: "03",
      heading: "어떤 절차를 검토해야 할지 어떻게 판단하나요?",
      layout: "prose",
      directAnswer:
        "이혼 자체와 자녀·재산 관련 사항까지 상대방과 합의가 가능한지가 중요한 기준이 됩니다. 합의가 어렵거나 상대방이 협의에 응하지 않는 경우 재판상 절차를 검토하게 되는 경우가 많습니다.",
      paragraphs: [
        "어느 절차가 더 유리하다고 일률적으로 말하기는 어렵습니다. 본인의 상황(협의 가능성, 쟁점의 다툼 정도, 시급성 등)을 바탕으로 상담에서 방향을 확인하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 안내 보기",
    },
    {
      id: "proc-compare-caution",
      order: 4,
      numberLabel: "04",
      heading: "절차를 검토할 때 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "협의가 가능해 보인다고 해서 반드시 협의이혼이 더 빠르거나 유리하다고 단정할 수 없고, 재판상 절차라고 해서 항상 오래 걸린다고 단정할 수도 없습니다. 사건마다 진행 속도와 쟁점이 달라질 수 있습니다.",
      paragraphs: [
        "특정 절차를 선택하면 특정 결과가 보장된다는 식의 안내는 신중하게 볼 필요가 있습니다. 실제 진행 방향과 예상 기간은 상담을 통해 사건별로 확인하는 것이 정확합니다.",
      ],
      relatedHref: ROUTES.durationFactors,
      relatedLabel: "이혼소송 기간 달라지는 요소 보기",
    },
  ],
};
