import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const COMPLAINT_SERVICE_RESPONSE_PAGE: ContentPage = {
  id: "complaintServiceResponse",
  order: 124,
  numberLabel: "04",
  slug: "이혼소장-송달-후-대응",
  href: ROUTES.complaintServiceResponse,
  navLabel: "이혼소장 송달 후 대응",
  breadcrumbLabel: "이혼소장 송달 후 대응",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소장을 송달받았다면 어떻게 대응하나요?",
  heading: "이혼소장을 송달받았다면 어떻게 대응하나요?",
  infoTopicLabel: "협의·조정·소송",
  infoCardDescription:
    "소장을 받은 뒤 확인할 사항과 답변서 제출 기한을 안내합니다.",
  intro: [
    "배우자가 제기한 이혼소송의 소장을 송달받으면, 짧은 기간 내 대응 방향을 정해야 합니다. 소장을 무시하거나 방치하면 절차 진행에 불리하게 작용할 수 있어 신속한 확인이 필요합니다.",
    "이 글은 소장을 송달받은 뒤 확인할 사항을 안내하는 일반적인 법률정보이며, 구체적인 대응 방향은 소장 내용과 사실관계에 따라 달라질 수 있습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "complaint-response-01",
    "complaint-response-02",
    "complaint-response-03",
    "complaint-response-04",
    "complaint-response-05",
  ],
  faqTitle: "이혼소장 송달 후 대응 자주 묻는 질문",
  conclusion: [
    "소장을 송달받으면 청구 취지와 원인을 확인하고, 정해진 기간 내 답변서 제출 여부를 검토하는 것이 중요합니다. 대응을 미루면 절차 진행에 불리하게 작용할 수 있습니다.",
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
  relatedGuideIds: ["answerBriefPrep", "litigationProcess", "consultationQuestions"],
  keySummary: [
    {
      numberLabel: "01",
      title: "송달 확인",
      text: "소장을 받은 날짜와 송달 방식을 먼저 확인합니다.",
    },
    {
      numberLabel: "02",
      title: "청구 내용 확인",
      text: "청구 취지와 원인, 상대방이 요구하는 사항을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "답변 기한",
      text: "송달받은 날부터 정해진 기간 내 답변서 제출을 검토합니다.",
    },
    {
      numberLabel: "04",
      title: "대응 방향",
      text: "인정할 부분과 다툴 부분을 구분해 정리합니다.",
    },
  ],
  seo: {
    title: "이혼소장을 송달받았다면 어떻게 대응하나요? | 로펌가이드",
    description:
      "이혼소장을 송달받은 뒤 확인할 사항과 답변서 제출 기한을 일반적인 법률정보로 안내합니다.",
    keywords: ["이혼소장 송달", "이혼소송 답변서", "이혼소장 대응"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "complaint-response-check",
      order: 1,
      numberLabel: "01",
      heading: "소장을 받으면 가장 먼저 무엇을 확인하나요?",
      layout: "checklist",
      directAnswer:
        "송달받은 날짜, 송달 방식(우편·특별송달 등), 청구 취지와 원인, 첨부된 증거자료를 먼저 확인하는 것이 중요합니다. 이후 절차의 기산점이 되는 정보이기 때문입니다.",
      paragraphs: [
        "송달일은 답변서 제출 기한을 계산하는 기준이 되므로 정확히 기록해 두어야 합니다. 우편함에 있던 서류를 뒤늦게 확인하는 경우도 있어, 주기적으로 우편물을 확인하는 습관이 중요합니다.",
      ],
      bullets: [
        "소장을 받은 날짜와 송달 방식",
        "청구 취지(이혼, 재산분할, 위자료, 친권·양육 등)",
        "청구 원인으로 제시된 사실관계",
        "첨부된 증거자료의 종류",
      ],
      relatedHref: ROUTES.litigationProcess,
      relatedLabel: "이혼소송 진행순서 보기",
    },
    {
      id: "complaint-response-deadline",
      order: 2,
      numberLabel: "02",
      heading: "답변서는 언제까지 제출해야 하나요?",
      layout: "prose",
      directAnswer:
        "민사소송법에 따르면 청구를 다투는 경우 소장의 부본을 송달받은 날부터 30일 이내에 답변서를 제출하도록 정해져 있다고 알려져 있으며, 이 조항은 가사소송에도 준용되는 경우가 있습니다.",
      paragraphs: [
        "기한 내 답변서를 제출하지 않으면 청구 원인 사실을 인정한 것으로 처리되어 불리하게 작용할 수 있다고 알려져 있습니다. 기한이 촉박하다고 느껴지면 신속하게 상담을 검토하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.answerBriefPrep,
      relatedLabel: "이혼소송 답변서 준비 보기",
    },
    {
      id: "complaint-response-direction",
      order: 3,
      numberLabel: "03",
      heading: "대응 방향은 어떻게 정하나요?",
      layout: "prose",
      directAnswer:
        "소장의 청구 취지와 원인 중 인정할 부분과 다툴 부분을 구분해 정리하는 것이 답변서 작성의 출발점이 됩니다. 사실관계와 증거를 함께 검토해 방향을 정하는 편이 안전합니다.",
      paragraphs: [
        "감정적으로 전면 부인하기보다, 사실관계를 냉정하게 확인한 뒤 인정할 부분과 다툴 부분을 나누는 것이 이후 절차에 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.factConveyCheck,
      relatedLabel: "이혼변호사 상담 사실관계 전달 방법 보기",
    },
    {
      id: "complaint-response-caution",
      order: 4,
      numberLabel: "04",
      heading: "소장을 무시하면 어떻게 되나요?",
      layout: "prose",
      directAnswer:
        "기한 내 답변서를 제출하지 않으면 청구 원인 사실을 인정한 것으로 처리되어, 상대방의 청구가 그대로 받아들여지는 방향으로 진행될 수 있다고 알려져 있습니다. 소장을 받았다면 방치하지 않는 것이 중요합니다.",
      paragraphs: [
        "송달 방식에 따라 실제로 소장을 확인하지 못한 경우 별도의 구제 절차가 있을 수 있으나, 이는 예외적인 상황이므로 소장을 받았다면 가능한 빨리 확인하고 대응하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
