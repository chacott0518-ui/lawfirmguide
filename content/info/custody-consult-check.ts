import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CUSTODY_CONSULT_CHECK_PAGE: ContentPage = {
  id: "custodyConsultCheck",
  order: 141,
  numberLabel: "01",
  slug: "양육권-상담-전-확인사항",
  href: ROUTES.custodyConsultCheck,
  navLabel: "양육권 상담 전 확인사항",
  breadcrumbLabel: "양육권 상담 전 확인사항",
  categoryLabel: SITE.categoryLabel,
  h1: "양육권 상담 전, 무엇을 확인하나요?",
  heading: "양육권 상담 전, 무엇을 확인하나요?",
  infoTopicLabel: "자녀·양육",
  infoCardDescription:
    "친권·양육자 지정 상담 전 정리해 두면 좋은 사항을 안내합니다.",
  intro: [
    "미성년 자녀가 있는 이혼에서는 친권자와 양육자 지정이 중요한 쟁점이 됩니다. 민법 제837조는 이혼 후 양육에 관한 사항을 정할 때 자녀의 복리를 우선적으로 고려하도록 하는 취지를 담고 있습니다.",
    "이 글은 양육권 상담 전 정리해 두면 도움이 되는 사항을 안내하는 일반적인 법률정보이며, 특정 조건이 있으면 양육권을 반드시 얻는다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "custody-consult-01",
    "custody-consult-02",
    "custody-consult-03",
    "custody-consult-04",
    "custody-consult-05",
  ],
  faqTitle: "양육권 상담 전 확인사항 자주 묻는 질문",
  conclusion: [
    "양육권 상담에서는 현재 양육 상황, 자녀의 생활·학교 환경, 부모 각각의 여건을 종합적으로 살펴보는 경우가 많습니다. 성별이나 소득 하나만으로 결과가 정해진다고 단정할 수 없습니다.",
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
  relatedGuideIds: ["childSupportPrep", "visitationConsultCheck", "childEnvironmentDocs"],
  keySummary: [
    {
      numberLabel: "01",
      title: "친권과 양육자",
      text: "친권자와 양육자는 별개로 지정될 수 있다고 알려져 있습니다.",
    },
    {
      numberLabel: "02",
      title: "현재 양육 상황",
      text: "누가 주로 자녀를 돌보고 있는지 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "자녀 복리 요소",
      text: "생활·학교·정서 환경 등 자녀 중심의 요소를 살핍니다.",
    },
    {
      numberLabel: "04",
      title: "부모 여건",
      text: "양육 여건(근무 형태, 주거환경 등)을 정리합니다.",
    },
  ],
  seo: {
    title: "양육권 상담 전, 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼 시 친권·양육자 지정 상담 전 정리해 두면 좋은 사항을 안내합니다.",
    keywords: ["양육권 상담", "친권 양육권", "이혼 양육자 지정"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "custody-consult-concept",
      order: 1,
      numberLabel: "01",
      heading: "친권과 양육자는 같은 개념인가요?",
      layout: "prose",
      directAnswer:
        "친권과 양육자는 별개의 개념으로 다뤄지는 경우가 많다고 알려져 있습니다. 친권은 자녀에 대한 법률적 대리·재산관리 권한과 관련되고, 양육자는 실제로 자녀를 양육하는 사람을 가리키는 개념으로 설명됩니다.",
      paragraphs: [
        "두 지위가 한 사람에게 함께 지정되는 경우도 있고, 부모가 나눠 갖는 경우도 있다고 알려져 있습니다. 구체적인 지정 방식은 자녀의 복리를 고려해 상담과 절차를 통해 결정되는 사안입니다.",
      ],
      relatedHref: ROUTES.consultPrep,
      relatedLabel: "이혼소송 상담 전 준비 안내 보기",
    },
    {
      id: "custody-consult-factors",
      order: 2,
      numberLabel: "02",
      heading: "상담에서는 어떤 요소를 살펴보나요?",
      layout: "checklist",
      directAnswer:
        "민법 제837조의 취지에 따라 현재 양육 상황, 자녀의 나이와 의사, 생활·학교 환경, 부모 각각의 양육 여건 등 자녀의 복리와 관련된 여러 요소가 종합적으로 검토되는 경우가 많습니다.",
      paragraphs: [
        "특정 요소 하나만으로 결과가 정해진다고 단정할 수 없으며, 여러 사정이 함께 고려되는 것이 일반적입니다.",
      ],
      bullets: [
        "현재 누가 주로 자녀를 돌보고 있는지",
        "자녀의 나이, 학교·보육 환경",
        "부모 각각의 근무 형태와 주거환경",
        "자녀와의 유대관계와 애착 형성",
      ],
      relatedHref: ROUTES.childEnvironmentDocs,
      relatedLabel: "자녀 양육환경 자료 정리 보기",
    },
    {
      id: "custody-consult-prepare",
      order: 3,
      numberLabel: "03",
      heading: "상담 전 무엇을 정리해 가면 좋은가요?",
      layout: "prose",
      directAnswer:
        "현재 양육 상황, 자녀의 학교·보육 정보, 본인의 근무·생활 여건을 정리해 가면 상담에서 더 구체적인 확인을 받을 수 있습니다.",
      paragraphs: [
        "상대방과의 기존 합의나 대화 내용이 있다면 그 내용도 함께 정리해 두는 편이 좋습니다. 자녀 본인의 의사가 확인된 경우 이를 어떻게 다룰지도 상담에서 함께 논의할 수 있습니다.",
      ],
      relatedHref: ROUTES.childSupportPrep,
      relatedLabel: "양육비 상담 전 준비자료 보기",
    },
    {
      id: "custody-consult-caution",
      order: 4,
      numberLabel: "04",
      heading: "양육권 관련 상담에서 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "특정 조건(성별, 소득 수준 등) 하나만으로 양육권 결과가 정해진다고 단정하는 정보는 신중하게 볼 필요가 있습니다. 자녀의 복리는 여러 사정을 종합해 판단되는 사안입니다.",
      paragraphs: [
        "상대방을 비방하는 방식으로 접근하기보다, 자녀에게 안정적인 환경을 제공할 수 있다는 점을 구체적인 사실로 설명하는 편이 상담에 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.visitationConsultCheck,
      relatedLabel: "면접교섭 상담 확인사항 보기",
    },
  ],
};
