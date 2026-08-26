import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const FACT_CONVEY_CHECK_PAGE: ContentPage = {
  id: "factConveyCheck",
  order: 113,
  numberLabel: "03",
  slug: "이혼변호사-상담-사실관계-전달",
  href: ROUTES.factConveyCheck,
  navLabel: "이혼변호사 상담 사실관계 전달 방법",
  breadcrumbLabel: "이혼변호사 상담 사실관계 전달",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼변호사 상담에서 사실관계는 어떻게 전달하나요?",
  heading: "이혼변호사 상담에서 사실관계는 어떻게 전달하나요?",
  infoTopicLabel: "상담·준비",
  infoCardDescription:
    "감정적 서술과 사실을 구분해 상담에서 명확하게 전달하는 방법을 안내합니다.",
  intro: [
    "이혼상담에서는 감정이 앞서 사실관계 설명이 흐려지는 경우가 있습니다. 무엇이 실제로 있었던 일인지, 어떤 순서로 벌어졌는지를 정리해 전달하면 상담에서 더 정확한 확인을 받을 수 있습니다.",
    "이 글은 사실관계를 전달하는 일반적인 방법을 안내하는 법률정보이며, 전달 방식만으로 법률적 결과가 달라진다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "fact-convey-01",
    "fact-convey-02",
    "fact-convey-03",
    "fact-convey-04",
    "fact-convey-05",
  ],
  faqTitle: "이혼변호사 상담 사실관계 전달 자주 묻는 질문",
  conclusion: [
    "사실관계는 감정적 서술과 구분해 시간순·항목별로 정리하는 편이 상담에 도움이 됩니다. 다만 전달 방식이 법률적 결과를 결정하는 것은 아니며, 쟁점 판단은 증거와 적용 법령을 통해 이뤄집니다.",
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
  relatedGuideIds: ["caseTimelineCheck", "evidenceOrganizing", "consultationQuestions"],
  keySummary: [
    {
      numberLabel: "01",
      title: "사실과 감정 구분",
      text: "실제 있었던 일과 그에 대한 감정·평가를 구분해 전달합니다.",
    },
    {
      numberLabel: "02",
      title: "구체적 표현",
      text: "‘가끔’, ‘자주’보다 날짜·빈도를 구체적으로 표현합니다.",
    },
    {
      numberLabel: "03",
      title: "근거 함께 제시",
      text: "주장하는 사실과 관련된 자료가 있다면 함께 언급합니다.",
    },
    {
      numberLabel: "04",
      title: "확인 필요 부분 표시",
      text: "아직 확인되지 않은 부분은 별도로 표시해 둡니다.",
    },
  ],
  seo: {
    title: "이혼변호사 상담에서 사실관계는 어떻게 전달하나요? | 로펌가이드",
    description:
      "이혼변호사 상담에서 감정적 서술과 사실을 구분해 명확하게 전달하는 방법을 안내합니다.",
    keywords: ["이혼변호사 상담", "사실관계 전달", "이혼상담 준비"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "fact-convey-separate",
      order: 1,
      numberLabel: "01",
      heading: "사실과 감정은 왜 구분해야 하나요?",
      layout: "prose",
      directAnswer:
        "감정적 서술이 앞서면 실제 있었던 일과 그에 대한 평가가 뒤섞여, 상담에서 쟁점을 파악하는 데 시간이 더 걸릴 수 있기 때문입니다.",
      paragraphs: [
        "예를 들어 ‘배우자가 무책임했다’는 평가와 ‘배우자가 특정 시점부터 생활비를 주지 않았다’는 사실은 다른 층위의 정보입니다. 평가를 뒷받침하는 구체적 사실을 함께 전달하면 상담이 더 정확해질 수 있습니다.",
        "감정을 배제하라는 의미는 아닙니다. 다만 상담에서는 ‘무엇이 있었는지’를 먼저 명확히 전달하고, 그에 대한 심정은 별도로 이야기하는 방식이 도움이 될 수 있습니다.",
      ],
      relatedHref: ROUTES.caseTimelineCheck,
      relatedLabel: "이혼소송 상담 전 사건 흐름 정리 보기",
    },
    {
      id: "fact-convey-specific",
      order: 2,
      numberLabel: "02",
      heading: "구체적으로 전달하는 방법은 무엇인가요?",
      layout: "checklist",
      directAnswer:
        "‘가끔’, ‘자주’ 같은 표현보다 날짜·빈도·장소를 구체적으로 표현하고, 관련 자료가 있다면 함께 언급하는 편이 상담에 도움이 됩니다.",
      paragraphs: [
        "모호한 표현은 쟁점을 흐리게 할 수 있습니다. 정확한 기억이 없더라도 대략적인 범위(예: ‘한 달에 두세 번 정도’)로 구체화하는 편이 좋습니다.",
      ],
      bullets: [
        "언제, 어디서 있었던 일인지 구체적으로 표현",
        "빈도나 지속 기간을 대략적으로라도 표현",
        "관련 문자·통화·문서가 있다면 함께 언급",
        "제3자가 목격했다면 그 사실도 전달",
      ],
      relatedHref: ROUTES.evidenceOrganizing,
      relatedLabel: "이혼소송 증거 정리 방법 보기",
    },
    {
      id: "fact-convey-uncertain",
      order: 3,
      numberLabel: "03",
      heading: "확실하지 않은 부분은 어떻게 전달하나요?",
      layout: "prose",
      directAnswer:
        "확인되지 않은 내용은 ‘확실하지 않지만’, ‘들은 이야기로는’처럼 출처와 확실성을 함께 밝혀 전달하는 편이 안전합니다. 추측을 사실처럼 단정해 전달하지 않는 것이 중요합니다.",
      paragraphs: [
        "확실하지 않은 부분을 숨기기보다 그대로 알리면, 상담에서 어떤 확인 절차가 추가로 필요한지 함께 검토할 수 있습니다.",
      ],
      relatedHref: ROUTES.consultPrep,
      relatedLabel: "이혼소송 상담 전 준비 안내 보기",
    },
    {
      id: "fact-convey-write",
      order: 4,
      numberLabel: "04",
      heading: "미리 글로 정리해 가면 도움이 되나요?",
      layout: "prose",
      directAnswer:
        "네. 짧게라도 사실관계를 글로 정리해 상담에 가져가면, 말로 설명할 때 빠뜨리기 쉬운 부분을 보완하고 상담 시간을 더 효율적으로 쓸 수 있습니다.",
      paragraphs: [
        "정리한 메모는 상담사가 참고할 수 있도록 그대로 제시해도 되고, 설명의 뼈대로 활용해도 됩니다. 다만 개인정보가 담긴 자료는 상담 목적 외로 공유되지 않도록 주의해야 합니다.",
      ],
      relatedHref: ROUTES.consultationQuestions,
      relatedLabel: "이혼상담에서 물어볼 질문 보기",
    },
  ],
};
