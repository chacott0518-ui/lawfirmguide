import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const CONSULT_PREP_PAGE: ContentPage = {
  id: "consultPrep",
  order: 101,
  numberLabel: "01",
  slug: "이혼소송-상담-전-준비",
  href: ROUTES.consultPrep,
  navLabel: "이혼소송 상담 전 준비",
  breadcrumbLabel: "이혼소송 상담 전 준비",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼소송 상담 전 준비할 자료, 무엇을 확인하나요?",
  heading: "이혼소송 상담 전 준비할 자료, 무엇을 확인하나요?",
  infoTopicLabel: "상담 전 준비",
  infoCardDescription:
    "혼인·재산·자녀·소득 자료를 상담 전에 어떻게 정리하면 좋은지 안내합니다.",
  intro: [
    "이혼소송 상담 전에는 혼인관계의 경위뿐 아니라 재산·채무, 자녀, 소득, 현재 분쟁 상황처럼 사건별 쟁점에 따라 확인할 내용을 먼저 정리하는 편이 도움이 됩니다. 준비한 자료만으로 승소 여부나 법률 결과가 정해진다고 볼 수는 없습니다.",
    "사실관계와 보유 자료를 구분해서 적어두면, 협의이혼과 재판상 이혼 중 어떤 절차를 검토할지, 재산분할·위자료·양육 관련 쟁점에서 추가로 무엇을 확인해야 할지 상담에서 더 구체적으로 짚어볼 수 있습니다. 이 글은 일반적인 법률정보이며 개별 사건에 대한 법률 자문을 대체하지 않습니다.",
    "전체 확인 흐름은 이혼전문변호사 선택 기준을 다루는 메인 안내와 함께 보면, 상담 전 질문과 자료 준비 방향을 나누어 정리하기 쉽습니다.",
  ],
  publishedAt: INFO_GUIDE_PUBLISHED_AT,
  updatedAt: "2026-08-26",
  faqIds: [
    "consult-prep-01",
    "consult-prep-02",
    "consult-prep-03",
    "consult-prep-04",
    "consult-prep-05",
    "consult-prep-06",
  ],
  faqTitle: "이혼소송 상담 전 준비 FAQ",
  conclusion: [
    "상담 전 준비는 혼인·분쟁 경위, 재산·채무, 자녀, 소득·생활비, 질문 목록을 사실과 추측으로 구분해 정리하는 과정입니다. 자료가 부족해도 그 범위를 표시해 두면 이후 확인 항목을 정하는 데 도움이 될 수 있습니다.",
    "이 글은 일반적인 법률정보 제공을 목적으로 하며, 개별 사건에 대한 법률 자문이나 결과를 보장하지 않습니다. 구체적인 판단은 사실관계와 적용 법령 등을 확인하여 이루어져야 합니다.",
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
  repeatImageBeforeSectionNumber: null,
  keySummary: [
    {
      numberLabel: "01",
      title: "혼인·별거 경위",
      text: "혼인 시기, 별거 여부·시점, 거주 상황을 날짜 중심으로 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "현재 분쟁 상황",
      text: "이혼 협의 여부, 분쟁 시작 과정, 이미 진행한 절차를 구분해 적습니다.",
    },
    {
      numberLabel: "03",
      title: "재산·채무",
      text: "부동산·금융·사업·대출 등 알고 있는 항목과 확인이 필요한 항목을 나눕니다.",
    },
    {
      numberLabel: "04",
      title: "소득 자료",
      text: "급여·사업소득, 정기지출, 자녀 관련 비용을 가능한 범위에서 정리합니다.",
    },
    {
      numberLabel: "05",
      title: "위자료 관련 사실",
      text: "주장 사실의 시기·경위와 보유 자료를 사실과 추측으로 구분합니다.",
    },
    {
      numberLabel: "06",
      title: "미성년 자녀",
      text: "양육 상황, 양육비, 면접교섭, 생활·보육 환경을 구체적으로 적습니다.",
    },
    {
      numberLabel: "07",
      title: "기존 합의·문서",
      text: "합의서·통지·신청·소송 관련 서류를 날짜와 함께 모아 둡니다.",
    },
    {
      numberLabel: "08",
      title: "질문 목록",
      text: "절차·재산분할·자녀·비용·긴급 조치에 대해 물을 질문을 미리 만듭니다.",
    },
  ],
  seo: {
    title: "이혼소송 상담 전 준비할 자료, 무엇을 확인하나요? | 로펌가이드",
    description:
      "이혼소송 상담 전 혼인·재산·자녀·소득 자료와 질문 목록을 어떻게 정리하면 좋은지 일반적인 법률정보로 안내합니다.",
    keywords: [
      "이혼소송 상담 전 준비",
      "이혼 상담 준비",
      "이혼소송 준비 자료",
      "이혼변호사 상담 준비",
    ],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "prep-marriage",
      order: 1,
      numberLabel: "01",
      heading: "혼인관계와 현재 상황은 무엇부터 정리하나요?",
      layout: "checklist",
      directAnswer:
        "혼인 시기, 별거 여부·시작 시점, 현재 거주상황, 이혼 협의 여부, 분쟁이 시작된 과정, 이미 진행한 법적 절차를 날짜 중심으로 정리하는 편이 도움이 됩니다.",
      paragraphs: [
        "상담에서는 ‘언제부터 무엇이 달라졌는지’가 중요한 출발점이 되는 경우가 많습니다. 기억에만 의존하기보다 혼인신고일, 별거 시작일, 대화·통지·신청이 있었던 날짜를 적어 두면 사실관계를 더 정확히 전달할 수 있습니다.",
        "특정 사실이 민법 제840조에 열거된 재판상 이혼 원인에 반드시 해당한다고 단정하지는 않습니다. 원인 해당 여부는 사실관계와 증거, 법률 해석에 따라 달라질 수 있으므로 상담에서 확인할 질문으로 남겨 두는 편이 안전합니다.",
        "협의 가능 여부에 따라 협의이혼 절차를 먼저 볼지, 재판상 이혼 흐름을 검토할지가 달라질 수 있습니다. 협의이혼 서류·숙려기간의 일반 안내는 협의이혼절차 페이지에서 함께 확인할 수 있습니다.",
      ],
      bullets: [
        "혼인 시기(혼인신고일 등)",
        "별거 여부 및 별거 시작 시점",
        "현재 거주·생활 형태",
        "이혼 협의 진행 여부",
        "분쟁이 시작된 계기와 경과",
        "이미 진행한 조정·소송·신청이 있는지",
      ],
      relatedHref: ROUTES.cost,
      relatedLabel: "협의이혼절차 안내 보기",
    },
    {
      id: "prep-property",
      order: 2,
      numberLabel: "02",
      heading: "재산분할 상담에서는 어떤 자료를 확인하나요?",
      layout: "info-grid",
      directAnswer:
        "부동산, 예금·보험·주식 등 금융자산, 차량, 사업 관련 재산, 퇴직급여 관련 자료, 대출과 기타 채무, 재산 형성·유지 과정을 목록으로 정리하는 편이 도움이 됩니다. 특정 재산이 무조건 분할 대상이라고 단정할 수는 없습니다.",
      paragraphs: [
        "민법 제839조의2는 협의상 이혼한 자의 일방이 다른 일방에 대하여 재산분할을 청구할 수 있다고 정하고, 협의가 되지 아니하거나 협의할 수 없는 때에는 가정법원이 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작하여 분할의 액수와 방법을 정할 수 있다고 규정합니다. 같은 조 제3항은 재산분할청구권이 이혼한 날부터 2년을 경과한 때에는 소멸한다고 정합니다.",
        "명의와 실제 기여가 다를 수 있으므로, ‘알고 있는 재산’과 ‘확인이 더 필요한 재산’을 구분해 적어두면 상담에서 누락을 줄이는 데 도움이 됩니다. 대상·비율의 일반 확인 기준은 이혼 재산분할 안내에서도 함께 볼 수 있습니다.",
      ],
      infoBlocks: [
        { label: "부동산", text: "주택·토지 소유, 취득 시기, 대출 잔액" },
        { label: "금융자산", text: "예금·적금·보험·주식 등 보유 현황" },
        { label: "사업·기타", text: "사업체·차량·고가 동산 등" },
        { label: "채무", text: "대출·카드·보증 등 채무 목록" },
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
    {
      id: "prep-alimony",
      order: 3,
      numberLabel: "03",
      heading: "위자료 관련 사실관계는 어떻게 정리하나요?",
      layout: "prose",
      directAnswer:
        "주장하려는 사실의 시기, 사건 경위, 기존 문서·대화·자료를 모아 사실과 추측을 구분하는 편이 도움이 됩니다. 불법적인 방법으로 자료를 수집하도록 권유하지 않습니다.",
      paragraphs: [
        "위자료 관련 상담에서는 ‘언제, 어떤 일이 있었는지’를 시간순으로 정리하는 것이 중요합니다. 들은 이야기와 확인된 사실을 섞어 적으면 쟁점이 흐려질 수 있으므로, 확인된 내용과 추가 확인이 필요한 내용을 칸을 나누어 적는 방식이 안전합니다.",
        "계정 해킹, 비밀번호 무단 접근, 불법 도청, 위치추적, 동의 없는 개인정보 수집처럼 위법·부당한 방식의 자료 확보는 피해야 합니다. 위법하게 확보한 자료는 절차상 불리하게 작용할 수 있고, 별도의 법적 문제가 생길 수도 있습니다.",
        "상간 관련 쟁점이 실제로 있는 경우에만 증거·절차 확인 기준을 따로 살펴보는 편이 좋습니다. 해당 주제의 일반 안내는 상간소송 변호사 페이지에서 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.precautions,
      relatedLabel: "상간소송 변호사 확인 기준 보기",
    },
    {
      id: "prep-children",
      order: 4,
      numberLabel: "04",
      heading: "미성년 자녀가 있다면 무엇을 확인하나요?",
      layout: "checklist",
      directAnswer:
        "현재 양육 상황, 양육자, 양육비, 면접교섭, 자녀의 생활·학교·보육 환경, 부모의 재산·생활상황을 구체적으로 정리합니다. 민법 제837조의 취지에 따라 자녀의 복리가 중요하게 고려됩니다.",
      paragraphs: [
        "민법 제837조는 이혼 후 양육에 관한 사항을 정할 때 자녀의 복리를 우선적으로 고려하도록 하는 내용을 담고 있습니다. 성별이나 소득 수준 하나만으로 결과가 정해진다고 단정하지 않는 편이 안전합니다.",
        "대한민국 법원 안내에서도 미성년 자녀가 있는 경우 친권·양육자 지정, 양육비, 면접교섭을 함께 정하는 흐름을 확인할 수 있습니다. 현재 누가 양육하는지, 비용은 어떻게 부담하는지, 만남 방식은 어떤지를 사실 중심으로 적어 두면 상담 질문이 구체화됩니다.",
      ],
      bullets: [
        "현재 양육·거주 상황",
        "양육자·친권 관련 기존 합의 여부",
        "양육비 지급·부담 현황",
        "면접교섭(만남) 방식과 빈도",
        "학교·보육·돌봄 환경",
        "부모 각각의 생활·근무 여건",
      ],
    },
    {
      id: "prep-income",
      order: 5,
      numberLabel: "05",
      heading: "소득과 생활비 자료는 왜 확인하나요?",
      layout: "prose",
      directAnswer:
        "급여·사업소득, 정기지출, 대출, 자녀 관련 비용, 생활비를 정리하면 양육비·재산분할·생활 여건 관련 질문을 더 구체적으로 할 수 있습니다. 필요한 범위는 사건마다 다를 수 있습니다.",
      paragraphs: [
        "소득·지출 자료는 ‘정확한 금액 확정’만이 목적이 아니라, 현재 생활 구조와 비용 부담을 설명하기 위한 참고 자료로 쓰이는 경우가 많습니다. 급여명세서, 사업 수입 개요, 월 고정비, 대출 상환액처럼 확인 가능한 항목부터 모으면 충분합니다.",
        "모든 영수증을 처음부터 완벽하게 갖추지 못했더라도, 대략적인 월 지출 구조와 자녀 관련 비용을 구분해 두면 상담에서 추가 자료 요청 범위를 가늠하기 쉽습니다. 비용 구성의 일반 안내는 이혼소송비용 페이지에서 항목별로 확인할 수 있습니다.",
      ],
      relatedHref: ROUTES.recovery,
      relatedLabel: "이혼소송비용 안내 보기",
    },
    {
      id: "prep-questions",
      order: 6,
      numberLabel: "06",
      heading: "상담 전에 정리해두면 좋은 질문",
      layout: "checklist",
      directAnswer:
        "절차 선택, 재산분할 쟁점, 위자료 사실관계, 자녀 관련 결정사항, 자료 부족분, 진행 단계, 비용 구성, 긴급 조치 필요 여부를 질문 목록으로 준비해 두면 상담을 더 효율적으로 활용할 수 있습니다.",
      paragraphs: [
        "질문은 ‘결과가 어떻게 되나’보다 ‘지금 무엇을 확인하고, 다음에 무엇을 준비해야 하나’에 초점을 두는 편이 안전합니다. 결과를 예측하거나 보장받는 형태의 질문은 피하고, 사실관계와 절차·비용 설명을 듣는 질문으로 구성하세요.",
      ],
      bullets: [
        "협의이혼과 재판상 이혼 중 어떤 절차를 검토해야 하는가?",
        "재산분할에서 확인해야 할 쟁점은 무엇인가?",
        "위자료 관련해 추가로 확인할 사실은 무엇인가?",
        "미성년 자녀와 관련해 결정해야 할 사항은 무엇인가?",
        "현재 자료에서 부족한 부분은 무엇인가?",
        "절차는 어떤 단계로 진행되는가?",
        "변호사 비용은 어떤 항목으로 구성되는가?",
        "별도로 부담할 수 있는 비용은 무엇인가?",
        "긴급히 검토해야 할 조치가 있는가?",
      ],
      relatedHref: ROUTES.faq,
      relatedLabel: "이혼 상담·선임 FAQ 보기",
    },
    {
      id: "prep-caution",
      order: 7,
      numberLabel: "07",
      heading: "자료 정리 시 주의사항",
      layout: "callout",
      directAnswer:
        "원본 보존, 날짜·출처 확인, 사실과 추측 분리, 개인정보 관리, 불법적 증거수집 금지, 온라인 게시·공유 주의를 지키는 편이 안전합니다.",
      paragraphs: [
        "자료는 복사본만 남기고 원본을 분실하지 않도록 보관하고, 문서·메시지·사진에는 작성·수신 날짜와 출처를 표시해 두면 이후 설명이 수월해집니다. 확인되지 않은 추측을 사실처럼 적지 않는 것이 중요합니다.",
        "상대방이나 제3자의 개인정보가 포함된 자료는 필요 이상으로 복제·전송하지 말고, 온라인 커뮤니티나 SNS에 사건 내용을 올리는 것도 신중해야 합니다. 불법적인 방법으로 자료를 모으려 하지 마세요.",
      ],
      callout:
        "계정 해킹, 무단 접근, 불법 도청·위치추적, 동의 없는 개인정보 수집은 증거 확보 방법으로 권장되지 않으며 별도의 법적 문제로 이어질 수 있습니다.",
    },
  ],
};
