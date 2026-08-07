import { HOME_WIDE_IMAGE, TOPIC_MEDIA } from "@/config/media";
import { HOME_OFFICIAL_SOURCES } from "@/config/official-sources";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import type {
  ArticleSection,
  ContentCard,
  HomeIndexItem,
  HomeIntro,
  PageSeo,
} from "@/types/content";

export const HOME_SEO: PageSeo = {
  title: "이혼전문변호사 선택 전 확인할 절차·비용·재산분할 | 로펌가이드",
  description:
    "이혼전문변호사 선택 전 협의이혼절차, 이혼소송비용, 상간소송, 재산분할과 후기 확인 기준을 주제별로 정리합니다.",
  keywords: [
    "이혼전문변호사",
    "협의이혼절차",
    "이혼소송비용",
    "상간녀소송변호사",
    "이혼소송 재산분할",
    "이혼전문변호사 후기",
    "이혼전문변호사 FAQ",
  ],
  ogImage: "/images/로펌가이드/썸네일/메인-이혼전문변호사-와이드.webp",
  socialImage: "/images/로펌가이드/썸네일/메인-이혼전문변호사-와이드.webp",
  category: SITE.categoryLabel,
};

export const HOME_INTRO: HomeIntro = {
  h1: "이혼전문변호사, 어떤 기준으로 확인해야 할까요?",
  subtitle:
    "협의이혼절차, 이혼소송비용, 상간소송, 재산분할과 후기 확인 기준을 정리한 법률정보 안내 사이트",
  heading: "이혼 사건을 검토할 때 무엇을 먼저 나눠 보면 좋을까요?",
  featureImage: HOME_WIDE_IMAGE,
  paragraphs: [
    "이혼전문변호사를 찾기 전에는 절차 유형, 비용 구성, 재산분할·상간소송 쟁점, 선임 전 확인 항목을 주제별로 정리해 두는 편이 비교에 도움이 됩니다.",
    "로펌가이드는 특정 법무법인의 공식 홈페이지가 아닌 법률정보 안내 사이트이며, 실제 대응 방법과 결과는 사실관계·증거·적용 법령에 따라 달라질 수 있습니다.",
  ],
  summary:
    "절차·비용·쟁점·후기 확인 기준을 나눠 보면 상담 전 질문 목록을 만들기 쉽습니다.",
  keySummary: [
    {
      numberLabel: "01",
      title: "절차 구분",
      text: "협의이혼과 재판이혼은 확인해야 할 서류와 진행 방식이 다를 수 있습니다.",
    },
    {
      numberLabel: "02",
      title: "비용 구성",
      text: "변호사 보수, 인지액, 송달료와 부대비용을 항목별로 확인합니다.",
    },
    {
      numberLabel: "03",
      title: "쟁점 정리",
      text: "재산분할·상간소송·양육 관련 쟁점은 별도로 질문을 준비합니다.",
    },
    {
      numberLabel: "04",
      title: "후기 읽기",
      text: "결과 보장 표현보다 상담 설명과 진행 방식 설명을 확인합니다.",
    },
    {
      numberLabel: "05",
      title: "정보 한계",
      text: "온라인 정보는 일반 안내이며 개별 사건 자문을 대신하지 않습니다.",
    },
  ],
};

export const HOME_EXAM_NOTICE =
  "본 사이트의 정보는 일반적인 법률정보 제공을 위한 것이며, 구체적인 사건에 대한 법률 자문이나 결과를 보장하지 않습니다.";

export const HOME_CONCLUSION = [
  "이혼 관련 정보는 단일 키워드보다 절차, 비용, 재산분할, 상간소송, 후기 확인 기준을 함께 보면 비교가 쉬워집니다.",
  "특정 결과를 보장하는 표현보다, 사실관계와 증거를 기준으로 설명할 수 있는지 확인하는 편이 안전합니다.",
];

export const HOME_SOURCES = HOME_OFFICIAL_SOURCES;

export const HOME_INDEX: HomeIndexItem[] = [
  {
    order: 1,
    numberLabel: "01",
    title: "협의이혼 절차",
    description: "서류·합의·숙려기간 확인",
    href: ROUTES.cost,
  },
  {
    order: 2,
    numberLabel: "02",
    title: "이혼소송 비용",
    description: "보수·인지액·송달료 확인",
    href: ROUTES.recovery,
  },
  {
    order: 3,
    numberLabel: "03",
    title: "상간소송 변호사",
    description: "청구 요건·증거·절차 확인",
    href: ROUTES.precautions,
  },
  {
    order: 4,
    numberLabel: "04",
    title: "이혼 재산분할",
    description: "대상 재산·기여도·채무 확인",
    href: ROUTES.hospital,
  },
  {
    order: 5,
    numberLabel: "05",
    title: "이혼전문변호사 후기",
    description: "후기 확인과 선임 체크",
    href: ROUTES.reviews,
  },
  {
    order: 6,
    numberLabel: "06",
    title: "이혼전문변호사 FAQ",
    description: "상담·비용·선임 전 확인할 질문",
    href: ROUTES.faq,
  },
];

export const HOME_TOC = [
  {
    id: "home-cost",
    numberLabel: "01",
    label: "협의이혼 절차",
    description: "신청 전 확인할 내용",
  },
  {
    id: "home-recovery",
    numberLabel: "02",
    label: "이혼소송 비용",
    description: "비용 항목을 나누는 기준",
  },
  {
    id: "home-precautions",
    numberLabel: "03",
    label: "상간소송 변호사",
    description: "증거와 절차 확인 포인트",
  },
  {
    id: "home-hospital",
    numberLabel: "04",
    label: "이혼 재산분할",
    description: "대상과 비율 확인 기준",
  },
  {
    id: "home-reviews",
    numberLabel: "05",
    label: "이혼전문변호사 후기",
    description: "과장 표현을 구분하는 방법",
  },
  {
    id: "home-faq",
    numberLabel: "06",
    label: "이혼전문변호사 FAQ",
    description: "상담·선임 전 확인할 질문",
  },
  {
    id: "faq",
    numberLabel: "07",
    label: "이혼 자주 묻는 질문",
    description: "절차·비용·양육 관련 질문",
  },
];

export const HOME_SECTIONS: ArticleSection[] = [
  {
    id: "home-cost",
    order: 1,
    numberLabel: "01",
    heading: "협의이혼 절차",
    layout: "steps",
    directAnswer:
      "협의이혼절차는 부부 합의가 있을 때 서류 준비, 합의사항 정리, 숙려기간과 신청 순서를 단계별로 확인하는 과정입니다. 각 단계에서 무엇을 준비해야 하는지 미리 파악해두면 실제 진행 과정에서 시행착오를 줄일 수 있습니다.",
    paragraphs: [
      "이혼서류와 합의 내용이 정리되지 않은 상태에서 진행만 서두르면 이후 분쟁으로 이어질 수 있어, 신청 전 확인 항목을 목록으로 만드는 편이 좋습니다.",
      "실제 준비 과정에서는 협의 내용을 문서로 정리해두었는지, 자녀가 있는 경우 양육사항 합의서를 함께 준비했는지 먼저 확인해보는 것이 도움이 됩니다.",
      "숙려기간 중에도 궁금한 점이 생기면 관할 법원이나 상담 창구를 통해 진행 절차를 다시 확인할 수 있습니다.",
    ],
    steps: [
      {
        label: "합의 확인",
        text: "이혼 의사와 자녀·재산 관련 합의 범위를 정리합니다.",
      },
      {
        label: "서류 준비",
        text: "필요한 이혼서류와 제출 방법을 확인합니다.",
      },
      {
        label: "숙려기간",
        text: "숙려기간 적용 여부와 일정을 확인합니다.",
      },
      {
        label: "신청·확인",
        text: "신청 후 안내되는 확인 절차를 따릅니다.",
      },
    ],
    relatedHref: ROUTES.cost,
    relatedLabel: "협의이혼절차 확인",
  },
  {
    id: "home-recovery",
    order: 2,
    numberLabel: "02",
    heading: "이혼소송 비용",
    layout: "info-grid",
    directAnswer:
      "이혼소송비용은 변호사 보수, 인지액, 송달료와 부대비용을 나눠 확인해야 전체 부담을 이해하기 쉽습니다. 항목마다 성격이 달라 포함 범위와 발생 조건을 구분해서 확인하는 편이 상담에서 질문을 준비하기에도 수월합니다.",
    paragraphs: [
      "인터넷에 보이는 단일 금액만으로 비교하기보다, 포함 항목과 추가 비용 가능성을 질문으로 정리해 두는 편이 좋습니다.",
      "상담 시에는 총 견적 금액만 확인하기보다, 착수금과 성공보수의 산정 기준, 추가 비용이 발생하는 상황을 구체적으로 질문해보는 편이 이후 오해를 줄이는 데 도움이 됩니다.",
      "인지액과 송달료는 소가나 청구 내용에 따라 달라질 수 있으므로, 예상 범위를 안내받았다면 그 산정 근거도 함께 확인해두면 좋습니다.",
    ],
    infoBlocks: [
      {
        label: "변호사 보수",
        text: "착수금·성공보수·추가 업무 범위 설명 여부",
      },
      { label: "인지액", text: "청구 내용에 따라 달라질 수 있는 항목" },
      { label: "송달료", text: "소송 진행에 필요한 기본 비용" },
      {
        label: "부대비용",
        text: "감정·번역·출장 등 별도 발생 가능성",
      },
    ],
    relatedHref: ROUTES.recovery,
    relatedLabel: "이혼소송비용 확인",
  },
  {
    id: "home-precautions",
    order: 3,
    numberLabel: "03",
    heading: "상간소송 변호사",
    layout: "checklist",
    directAnswer:
      "상간녀소송변호사 상담 전에는 청구 요건, 확보 가능한 증거, 절차와 대응 시 주의점을 먼저 정리하는 편이 도움이 됩니다. 감정적으로 접근하기보다 사실관계와 증거를 기준으로 차분히 정리해두면 상담에서 더 정확한 설명을 받을 수 있습니다.",
    paragraphs: [
      "상간자소송·상간남소송처럼 표현이 달라도 핵심은 사실관계와 증거 확인입니다. 결과 보장을 단정하는 설명보다 절차 설명을 중심으로 확인하세요.",
      "상담 전에는 확보한 자료가 증거로 활용될 수 있는 형태인지, 수집 과정에 법적으로 문제가 될 수 있는 부분은 없는지 미리 점검해보는 것이 좋습니다.",
      "청구 가능 여부와 예상되는 절차는 사안마다 다를 수 있으므로, 일반적인 설명과 함께 내 사안에 적용되는 기준을 구체적으로 질문해보는 편이 도움이 됩니다.",
    ],
    bullets: [
      "청구 요건을 어떻게 설명하는지",
      "증거 종류와 한계를 구분하는지",
      "절차와 예상 쟁점을 단계적으로 안내하는지",
      "상대방 대응 시 주의사항을 설명하는지",
    ],
    relatedHref: ROUTES.precautions,
    relatedLabel: "상간소송 변호사 확인 기준",
  },
  {
    id: "home-hospital",
    order: 4,
    numberLabel: "04",
    heading: "이혼 재산분할",
    layout: "info-blocks",
    directAnswer:
      "이혼소송 재산분할은 대상 재산, 기여도, 특유재산과 채무를 구분해 확인해야 비율과 범위를 이해하기 쉽습니다. 항목별로 나눠 보지 않으면 실제 협의나 소송 과정에서 놓치는 부분이 생길 수 있어 미리 목록화해 두는 것이 좋습니다.",
    paragraphs: [
      "이혼사유·유책배우자 쟁점은 재산분할과 구분되는 쟁점일 수 있으므로, 재산 목록 정리와 함께 별도로 질문을 준비하는 편이 좋습니다.",
      "재산 목록을 정리할 때는 부동산·예금·보험·퇴직급여처럼 항목을 나누고, 취득 시기와 명의를 함께 기록해두면 상담에서 설명하기 수월합니다.",
      "채무 역시 혼인 중 형성된 것인지, 개인적으로 부담한 것인지에 따라 분할 방식이 달라질 수 있으므로 관련 자료를 함께 준비해보는 것이 좋습니다.",
    ],
    infoBlocks: [
      { label: "대상 재산", text: "부부 공동재산으로 볼 수 있는 범위" },
      { label: "기여도", text: "형성·유지에 대한 기여 설명 방식" },
      { label: "특유재산", text: "혼인 전 재산 등 제외 가능성" },
      { label: "채무", text: "공동 채무와 개인 채무 구분" },
    ],
    relatedHref: ROUTES.hospital,
    relatedLabel: "이혼소송 재산분할 확인",
  },
  {
    id: "home-reviews",
    order: 5,
    numberLabel: "05",
    heading: "이혼전문변호사 후기",
    layout: "comparison",
    directAnswer:
      "이혼전문변호사 후기는 상담 설명의 구체성, 사건 진행 방식, 비용 설명과 과장된 표현을 구분해서 읽는 편이 안전합니다. 결과를 단정하는 후기보다 절차와 소통 방식을 구체적으로 설명하는 후기를 참고하는 편이 실질적인 판단에 도움이 됩니다.",
    paragraphs: [
      "결과를 단정하는 표현은 참고 범위를 좁혀 보고, 위임계약과 담당 변호사 확인 항목을 직접 질문하는 것이 좋습니다.",
      "후기를 볼 때는 특정 결과를 단정하는 표현보다, 상담 과정에서 질문에 어떻게 답했는지, 진행 상황을 얼마나 구체적으로 공유했는지를 함께 살펴보는 편이 도움이 됩니다.",
      "위임 전에는 담당 변호사가 실제로 사건을 진행하는지, 계약서에 업무 범위와 비용 조건이 명확히 기재되어 있는지 직접 확인해보는 것이 좋습니다.",
    ],
    comparison: {
      left: {
        label: "참고할 내용",
        text: "상담 질문 대응, 절차 설명, 비용 구성 안내, 진행 보고 방식",
      },
      right: {
        label: "주의할 표현",
        text: "결과 보장, 검증되지 않은 사건 수, 과도한 순위·최고 표현",
      },
    },
    relatedHref: ROUTES.reviews,
    relatedLabel: "이혼전문변호사 후기 확인 기준",
  },
  {
    id: "home-faq",
    order: 6,
    numberLabel: "06",
    heading: "이혼전문변호사 FAQ",
    layout: "checklist",
    directAnswer:
      "이혼전문변호사 FAQ에서는 상담·선임 기준과 함께 협의이혼·서류, 소송 비용과 기간, 상간소송, 재산분할, 양육비·친권·사실혼처럼 자주 이어지는 질문을 묶어 확인할 수 있습니다. 주제별로 나눠 보면 상담 전 어떤 부분을 더 자세히 물어봐야 하는지 스스로 정리하는 데 도움이 됩니다.",
    paragraphs: [
      "한 페이지의 답변만으로 개별 사건을 판단하기 어려우므로, 관련 주제 페이지와 함께 질문 목록을 만드는 편이 효율적입니다.",
      "질문 목록을 미리 정리해두면 상담 시간을 절차·비용·쟁점별로 나눠 효율적으로 활용할 수 있습니다.",
      "자주 묻는 질문에서 다루지 않는 개별 사안은 관련 주제 페이지를 확인한 뒤, 상담을 통해 구체적으로 질문하는 편이 좋습니다.",
    ],
    bullets: [
      "협의이혼과 이혼서류는 무엇을 확인하는지",
      "이혼소송비용은 어떤 항목으로 나뉘는지",
      "상간소송과 위자료는 어떻게 구분하는지",
      "재산분할과 채무는 무엇을 준비하는지",
      "양육비·친권·사실혼 기준은 무엇인지",
    ],
    relatedHref: ROUTES.faq,
    relatedLabel: "이혼전문변호사 FAQ 확인",
  },
];

export const HOME_FAQ_IDS = [
  "main-01",
  "main-02",
  "main-03",
  "main-04",
  "main-05",
  "main-06",
  "main-07",
  "main-08",
] as const;

export const CARD_PUBLISHED_AT = "2026.07.31";

function card(
  id: ContentCard["id"],
  order: number,
  numberLabel: string,
  slug: string,
  href: string,
  title: string,
  shortTitle: string,
  description: string,
  cardDescription: string,
  faqIds: string[],
): ContentCard {
  const media = TOPIC_MEDIA[id];
  return {
    id,
    order,
    numberLabel,
    href,
    slug,
    title,
    cardTitle: title,
    shortTitle,
    cardMetaLabel: shortTitle,
    iconKey: id,
    description,
    cardDescription,
    mobileCardDescription: media.mobileCardDescription,
    accent: "neutral",
    accentColor: media.accentColor,
    accentHoverColor: media.accentHoverColor,
    publishedAt: CARD_PUBLISHED_AT,
    categoryLabel: SITE.categoryLabel,
    faqIds,
    image: media.thumbnail,
    heroImage: media.thumbnail,
    inlineImage: media.thumbnail,
  };
}

export const CONTENT_CARDS: ContentCard[] = [
  card(
    "cost",
    1,
    "01",
    "협의이혼절차",
    ROUTES.cost,
    "협의이혼 절차",
    "협의이혼 절차",
    "신청 전 서류·합의·숙려기간 확인",
    "협의이혼절차에서 확인할 서류, 합의사항, 숙려기간과 신청 순서를 단계별로 안내합니다.",
    ["cost-01", "cost-02", "cost-03", "cost-04"],
  ),
  card(
    "recovery",
    2,
    "02",
    "이혼소송비용",
    ROUTES.recovery,
    "이혼소송 비용",
    "이혼소송 비용",
    "보수·인지액·송달료와 부대비용 확인",
    "이혼소송비용을 변호사 보수, 인지액, 송달료와 부대비용으로 나눠 확인하는 기준을 안내합니다.",
    ["recovery-01", "recovery-02", "recovery-03", "recovery-04"],
  ),
  card(
    "precautions",
    3,
    "03",
    "상간녀소송변호사",
    ROUTES.precautions,
    "상간소송 변호사",
    "상간소송 변호사",
    "청구 요건·증거·절차 확인 기준",
    "상간녀소송변호사 상담 전 청구 요건, 증거 확인, 절차와 대응 시 주의점을 정리합니다.",
    ["caution-01", "caution-02", "caution-03", "caution-04"],
  ),
  card(
    "hospital",
    4,
    "04",
    "이혼소송재산분할",
    ROUTES.hospital,
    "이혼 재산분할",
    "이혼 재산분할",
    "대상 재산·기여도·채무 확인 기준",
    "이혼소송 재산분할의 대상 재산, 기여도, 특유재산과 채무를 확인하는 기준을 안내합니다.",
    ["hospital-01", "hospital-02", "hospital-03", "hospital-04"],
  ),
  card(
    "reviews",
    5,
    "05",
    "이혼전문변호사후기",
    ROUTES.reviews,
    "이혼전문변호사 후기",
    "이혼전문변호사 후기",
    "후기 확인과 선임 전 체크 기준",
    "이혼전문변호사 후기에서 상담 설명, 진행 방식, 비용 설명과 과장된 표현을 구분하는 기준을 정리합니다.",
    ["review-01", "review-02", "review-03", "review-04"],
  ),
  card(
    "faq",
    6,
    "06",
    "faq",
    ROUTES.faq,
    "이혼전문변호사 FAQ",
    "이혼전문변호사 FAQ",
    "상담·비용·선임 전 확인할 질문 정리",
    "이혼전문변호사 상담과 위임계약 전에 확인할 질문을 중심으로, 협의이혼·비용·재산분할·상간소송 관련 질문도 함께 정리합니다.",
    [...HOME_FAQ_IDS],
  ),
];
