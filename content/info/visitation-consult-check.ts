import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const VISITATION_CONSULT_CHECK_PAGE: ContentPage = {
  id: "visitationConsultCheck",
  order: 143,
  numberLabel: "03",
  slug: "면접교섭-상담-확인사항",
  href: ROUTES.visitationConsultCheck,
  navLabel: "면접교섭 상담 확인사항",
  breadcrumbLabel: "면접교섭 상담 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "면접교섭 상담에서는 무엇을 확인하나요?",
  heading: "면접교섭 상담에서는 무엇을 확인하나요?",
  infoTopicLabel: "자녀·양육",
  infoCardDescription:
    "면접교섭 방식·빈도를 논의할 때 확인하면 좋은 사항을 안내합니다.",
  intro: [
    "면접교섭은 자녀를 직접 양육하지 않는 부모가 자녀와 만나거나 연락할 수 있는 권리로, 민법 제837조의2에 관련 내용이 규정되어 있다고 알려져 있습니다. 방식과 빈도는 자녀의 상황에 맞춰 구체적으로 논의되는 경우가 많습니다.",
    "이 글은 면접교섭 상담에서 확인할 사항을 안내하는 일반적인 법률정보이며, 특정 방식이 모든 사건에 동일하게 적용된다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "visitation-01",
    "visitation-02",
    "visitation-03",
    "visitation-04",
    "visitation-05",
  ],
  faqTitle: "면접교섭 상담 확인사항 자주 묻는 질문",
  conclusion: [
    "면접교섭은 방식, 빈도, 장소, 인수인계 방법까지 구체적으로 정해 두는 것이 이후 분쟁을 줄이는 데 도움이 될 수 있습니다. 자녀의 나이와 상황에 따라 적절한 방식이 달라질 수 있습니다.",
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
  relatedGuideIds: ["custodyConsultCheck", "childSupportPrep", "childEnvironmentDocs"],
  keySummary: [
    {
      numberLabel: "01",
      title: "면접교섭 개념",
      text: "자녀와 만나거나 연락할 수 있는 권리로 다뤄집니다.",
    },
    {
      numberLabel: "02",
      title: "방식·빈도",
      text: "정기 면접, 방학 중 면접 등 구체적인 방식을 논의합니다.",
    },
    {
      numberLabel: "03",
      title: "인수인계",
      text: "장소와 시간, 인수인계 방법을 구체적으로 정합니다.",
    },
    {
      numberLabel: "04",
      title: "조정 가능성",
      text: "자녀의 상황 변화에 따라 조정될 수 있습니다.",
    },
  ],
  seo: {
    title: "면접교섭 상담에서는 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼 후 면접교섭 방식·빈도를 논의할 때 확인하면 좋은 사항을 안내합니다.",
    keywords: ["면접교섭", "면접교섭권", "이혼 자녀 만남", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "visitation-concept",
      order: 1,
      numberLabel: "01",
      heading: "면접교섭은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "면접교섭은 자녀를 직접 양육하지 않는 부모가 자녀와 만나거나 연락할 수 있는 권리로, 민법 제837조의2에 관련 내용이 규정되어 있다고 알려져 있습니다.",
      paragraphs: [
        "면접교섭은 부모의 권리인 동시에 자녀의 복리와도 관련된 사안으로 다뤄지는 경우가 많습니다. 특별한 사정이 있는 경우 제한되거나 조정될 수 있다고 알려져 있습니다.",
      ],
      relatedHref: ROUTES.custodyConsultCheck,
      relatedLabel: "양육권 상담 전 확인사항 보기",
    },
    {
      id: "visitation-method",
      order: 2,
      numberLabel: "02",
      heading: "방식과 빈도는 어떻게 정하나요?",
      layout: "checklist",
      directAnswer:
        "정기적인 주말 면접, 방학 중 면접, 전화·화상통화 등 자녀의 나이와 생활 패턴에 맞춰 구체적인 방식을 논의하는 경우가 많습니다.",
      paragraphs: [
        "자녀가 어릴수록 더 세부적인 일정 조율이 필요할 수 있고, 자녀가 성장하면서 방식이 조정되는 경우도 있다고 알려져 있습니다.",
      ],
      bullets: [
        "정기 면접 주기(주 1회, 격주 등)",
        "방학·명절 등 특별한 시기의 면접",
        "전화·화상통화 등 비대면 연락 방식",
        "자녀 나이에 맞춘 면접 시간과 장소",
      ],
      relatedHref: ROUTES.childEnvironmentDocs,
      relatedLabel: "자녀 양육환경 자료 정리 보기",
    },
    {
      id: "visitation-handover",
      order: 3,
      numberLabel: "03",
      heading: "인수인계는 어떻게 정리하면 좋은가요?",
      layout: "prose",
      directAnswer:
        "인수인계 장소, 시간, 방법을 구체적으로 정해 두면 이후 갈등을 줄이는 데 도움이 될 수 있습니다. 제3자를 통한 인수인계가 필요한 경우도 있을 수 있습니다.",
      paragraphs: [
        "인수인계 과정에서 갈등이 반복될 것이 우려된다면, 이를 상담에서 미리 알리고 대응 방안을 함께 논의하는 편이 좋습니다.",
      ],
      relatedHref: ROUTES.childSupportPrep,
      relatedLabel: "양육비 상담 전 준비자료 보기",
    },
    {
      id: "visitation-adjust",
      order: 4,
      numberLabel: "04",
      heading: "면접교섭은 나중에 바꿀 수 있나요?",
      layout: "prose",
      directAnswer:
        "자녀의 상황이나 생활 환경이 바뀌면 면접교섭 방식도 조정될 수 있다고 알려져 있습니다. 조정이 필요한 사정이 생기면 상대방과의 협의나 법원의 절차를 통해 변경을 검토할 수 있습니다.",
      paragraphs: [
        "특정 사정이 있다고 해서 면접교섭이 자동으로 중단되거나 변경된다고 단정할 수는 없으며, 구체적인 절차는 상담을 통해 확인해야 합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
