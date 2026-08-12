import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const LITIGATION_PROCESS_PAGE: ContentPage = {
  id: "litigationProcess",
  order: 123,
  numberLabel: "03",
  slug: "이혼소송-진행순서",
  href: ROUTES.litigationProcess,
  navLabel: "이혼소송 진행 순서",
  breadcrumbLabel: "이혼소송 진행 순서",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송은 어떤 순서로 진행되나요?",
  heading: "이혼소송은 어떤 순서로 진행되나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "소장 제출부터 변론기일, 판결까지의 일반적인 진행 순서를 안내합니다.",
  intro: [
    "이혼소송은 소장 제출, 송달과 답변서 제출, 변론(심리)기일, 판결의 흐름으로 진행되는 경우가 많다고 알려져 있습니다. 다만 사건의 쟁점과 재판부, 당사자의 대응에 따라 실제 진행 속도와 방식은 달라질 수 있습니다.",
    "이 글은 이혼소송의 일반적인 진행 순서를 안내하는 법률정보이며, 특정 기간이나 결과를 보장하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "litigation-01",
    "litigation-02",
    "litigation-03",
    "litigation-04",
    "litigation-05",
  ],
  faqTitle: "이혼소송 진행순서 자주 묻는 질문",
  conclusion: [
    "이혼소송은 소장 제출, 송달·답변서, 변론기일, 판결의 흐름으로 진행되는 경우가 많으며, 단계마다 필요한 준비가 다릅니다. 실제 진행 속도는 쟁점의 다툼 정도와 재판부 사정에 따라 달라질 수 있습니다.",
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
  relatedGuideIds: ["complaintServiceResponse", "answerBriefPrep", "postJudgmentProcess"],
  keySummary: [
    {
      numberLabel: "01",
      title: "소장 제출",
      text: "청구 취지와 원인을 담은 소장을 관할 법원에 제출합니다.",
    },
    {
      numberLabel: "02",
      title: "송달·답변서",
      text: "소장이 송달되면 상대방은 일정 기간 내 답변서를 제출합니다.",
    },
    {
      numberLabel: "03",
      title: "변론(심리)기일",
      text: "쟁점을 심리하며 필요한 증거조사가 이뤄질 수 있습니다.",
    },
    {
      numberLabel: "04",
      title: "판결",
      text: "심리를 마치면 법원이 판결을 선고합니다.",
    },
  ],
  seo: {
    title: "이혼소송은 어떤 순서로 진행되나요? | 로펌가이드",
    description:
      "이혼소송 소장 제출부터 변론기일, 판결까지의 일반적인 진행 순서를 안내합니다.",
    keywords: ["이혼소송 진행순서", "이혼소송 절차", "재판상 이혼 소송", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "litigation-complaint",
      order: 1,
      numberLabel: "01",
      heading: "소장 제출 단계에서는 무엇을 하나요?",
      layout: "prose",
      directAnswer:
        "청구 취지(이혼, 재산분할, 위자료, 친권·양육 등 요구사항)와 청구 원인(사실관계와 근거)을 담은 소장을 관할 가정법원에 제출하는 단계입니다.",
      paragraphs: [
        "소장에는 다투고자 하는 모든 쟁점을 처음부터 정확히 담는 것이 이후 절차 진행에 도움이 될 수 있습니다. 필요한 자료를 소장 제출 전에 미리 정리해 두는 편이 좋습니다.",
      ],
      relatedHref: ROUTES.propertyListPrep,
      relatedLabel: "이혼 재산목록 정리 방법 보기",
    },
    {
      id: "litigation-service",
      order: 2,
      numberLabel: "02",
      heading: "송달과 답변서 단계는 어떻게 진행되나요?",
      layout: "prose",
      directAnswer:
        "소장이 상대방에게 송달되면, 민사소송법에 따라 원칙적으로 송달받은 날부터 30일 이내에 답변서를 제출하도록 정해져 있다고 알려져 있습니다. 이 조항은 가사소송에도 준용되는 경우가 있습니다.",
      paragraphs: [
        "답변서를 기한 내 제출하지 않으면 절차 진행에 불리하게 작용할 수 있다고 알려져 있어, 송달을 받았다면 신속하게 대응을 검토하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.complaintServiceResponse,
      relatedLabel: "이혼소장 송달 후 대응 보기",
    },
    {
      id: "litigation-hearing",
      order: 3,
      numberLabel: "03",
      heading: "변론기일에는 무엇이 진행되나요?",
      layout: "prose",
      directAnswer:
        "변론(심리)기일에는 양 당사자의 주장과 증거를 바탕으로 쟁점을 심리하며, 필요한 경우 증인신문이나 사실조회 등 증거조사가 이뤄질 수 있습니다.",
      paragraphs: [
        "기일은 쟁점의 복잡성에 따라 한 번으로 끝나기도 하고 여러 차례 진행되기도 합니다. 각 기일 전에 필요한 서면과 자료를 준비해 두는 것이 중요합니다.",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "litigation-judgment",
      order: 4,
      numberLabel: "04",
      heading: "판결 이후에는 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "심리를 마치면 법원이 판결을 선고하며, 판결에 불복하는 경우 정해진 기간 내 항소를 검토할 수 있다고 알려져 있습니다. 판결이 확정되면 그에 따른 절차(신고 등)를 진행하게 됩니다.",
      paragraphs: [
        "판결 내용을 충분히 이해하지 못했다면 담당 변호사에게 확인하고, 항소 여부는 기간 내에 신중히 검토해야 합니다.",
      ],
      relatedHref: ROUTES.postJudgmentProcess,
      relatedLabel: "이혼판결 후 절차 보기",
    },
  ],
};
