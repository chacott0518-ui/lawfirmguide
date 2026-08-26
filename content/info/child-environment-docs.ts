import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CHILD_ENVIRONMENT_DOCS_PAGE: ContentPage = {
  id: "childEnvironmentDocs",
  order: 144,
  numberLabel: "04",
  slug: "자녀-양육환경-자료-정리",
  href: ROUTES.childEnvironmentDocs,
  navLabel: "자녀 양육환경 자료 정리",
  breadcrumbLabel: "자녀 양육환경 자료 정리",
  categoryLabel: SITE.categoryLabel,
  h1: "자녀 양육환경 자료, 어떻게 정리하나요?",
  heading: "자녀 양육환경 자료, 어떻게 정리하나요?",
  infoTopicLabel: "자녀·양육",
  infoCardDescription:
    "거주·학교·보육 환경 등 양육환경 관련 자료를 정리하는 방법을 안내합니다.",
  intro: [
    "양육권·면접교섭 상담에서는 자녀가 현재 어떤 환경에서 생활하고 있는지가 중요한 참고 정보로 다뤄지는 경우가 많습니다. 거주지, 학교, 보육 상황을 구체적으로 정리해 두면 상담에 도움이 됩니다.",
    "이 글은 자녀 양육환경 자료를 정리하는 방법을 안내하는 일반적인 법률정보이며, 특정 환경 요소가 결과를 자동으로 결정한다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "child-env-01",
    "child-env-02",
    "child-env-03",
    "child-env-04",
    "child-env-05",
  ],
  faqTitle: "자녀 양육환경 자료 정리 자주 묻는 질문",
  conclusion: [
    "자녀의 거주·학교·보육 환경을 구체적으로 정리해 두면 양육권·면접교섭 상담에서 참고 자료로 활용될 수 있습니다. 다만 환경 요소 하나만으로 결과가 정해진다고 단정할 수 없습니다.",
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
  relatedGuideIds: ["custodyConsultCheck", "visitationConsultCheck", "childSupportPrep"],
  keySummary: [
    {
      numberLabel: "01",
      title: "거주 환경",
      text: "주거 형태, 통학 거리, 생활 안정성을 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "학교·보육",
      text: "재학 중인 학교·어린이집 정보와 적응 상황을 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "돌봄 체계",
      text: "주 양육자 외 돌봄을 도와주는 사람이 있는지 정리합니다.",
    },
    {
      numberLabel: "04",
      title: "정서적 유대",
      text: "자녀와의 유대관계를 보여줄 수 있는 자료를 준비합니다.",
    },
  ],
  seo: {
    title: "자녀 양육환경 자료, 어떻게 정리하나요? | 로펌가이드",
    description:
      "이혼 시 자녀의 거주·학교·보육 환경 등 양육환경 관련 자료를 정리하는 방법을 안내합니다.",
    keywords: ["양육환경", "자녀 양육환경 자료", "이혼 자녀"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "child-env-why",
      order: 1,
      numberLabel: "01",
      heading: "왜 양육환경 자료를 정리해야 하나요?",
      layout: "prose",
      directAnswer:
        "민법 제837조의 취지에 따라 이혼 후 양육에 관한 사항을 정할 때 자녀의 복리가 우선적으로 고려되며, 현재 양육환경은 이를 판단하는 참고 정보로 다뤄지는 경우가 많습니다.",
      paragraphs: [
        "환경 자료는 특정 결과를 보장하기 위한 것이 아니라, 자녀가 현재 어떤 상황에서 생활하고 있는지를 객관적으로 보여주기 위한 참고 자료로 이해하는 편이 안전합니다.",
      ],
      relatedHref: ROUTES.custodyConsultCheck,
      relatedLabel: "양육권 상담 전 확인사항 보기",
    },
    {
      id: "child-env-items",
      order: 2,
      numberLabel: "02",
      heading: "어떤 자료를 정리하면 좋은가요?",
      layout: "checklist",
      directAnswer:
        "거주지 정보(주거 형태, 통학 거리), 재학 중인 학교·어린이집 정보, 주 양육자 외 돌봄 체계, 자녀와의 일상 기록 등을 정리하면 상담에 도움이 됩니다.",
      paragraphs: [
        "사진이나 일정표처럼 일상적인 자료도 자녀의 생활 환경을 보여주는 참고 자료가 될 수 있습니다.",
      ],
      bullets: [
        "거주지 형태와 통학·통원 거리",
        "재학 중인 학교·어린이집과 적응 상황",
        "주 양육자 외 돌봄을 돕는 사람(조부모 등)",
        "자녀와 함께한 일상 기록·사진",
      ],
      relatedHref: ROUTES.visitationConsultCheck,
      relatedLabel: "면접교섭 상담 확인사항 보기",
    },
    {
      id: "child-env-stability",
      order: 3,
      numberLabel: "03",
      heading: "환경의 안정성은 어떻게 설명하나요?",
      layout: "prose",
      directAnswer:
        "짧은 기간의 변화보다 일정 기간 유지되어 온 안정적인 환경이 참고되는 경우가 많다고 알려져 있습니다. 이사나 전학 계획이 있다면 그 이유와 시점도 함께 정리해 두는 편이 좋습니다.",
      paragraphs: [
        "환경이 자주 바뀌었다고 해서 불리하다고 단정할 수는 없으며, 그 배경과 현재 상황을 구체적으로 설명하는 것이 중요합니다.",
      ],
      relatedHref: ROUTES.childSupportPrep,
      relatedLabel: "양육비 상담 전 준비자료 보기",
    },
    {
      id: "child-env-caution",
      order: 4,
      numberLabel: "04",
      heading: "자료를 준비할 때 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "사실과 다른 내용을 과장해서 정리하지 않는 것이 중요합니다. 상대방을 비방하는 목적보다 자녀의 현재 상황을 객관적으로 보여주는 데 초점을 맞추는 편이 안전합니다.",
      paragraphs: [
        "자녀의 사생활이 담긴 자료는 상담 목적 외로 공유되지 않도록 관리하는 것도 중요합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
