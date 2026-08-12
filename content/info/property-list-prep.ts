import { TOPIC_MEDIA } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import {
  INFO_GUIDE_OFFICIAL_SOURCES,
  INFO_GUIDE_V2_PUBLISHED_AT,
} from "@/content/info/shared";
import type { ContentPage } from "@/types/content";

const media = TOPIC_MEDIA.recovery;

export const PROPERTY_LIST_PREP_PAGE: ContentPage = {
  id: "propertyListPrep",
  order: 131,
  numberLabel: "01",
  slug: "이혼-재산목록-정리-방법",
  href: ROUTES.propertyListPrep,
  navLabel: "이혼 재산목록 정리 방법",
  breadcrumbLabel: "이혼 재산목록 정리 방법",
  categoryLabel: SITE.categoryLabel,
  h1: "이혼 재산목록, 어떻게 정리하나요?",
  heading: "이혼 재산목록, 어떻게 정리하나요?",
  infoTopicLabel: "재산·금전",
  infoCardDescription:
    "부동산·금융자산·퇴직급여 등 재산 항목을 정리하는 방법을 안내합니다.",
  intro: [
    "재산분할 상담에서는 부부가 보유한 재산을 항목별로 정리해 두면 쟁점을 확인하는 데 도움이 됩니다. 명의와 실제 형성·유지 과정이 다를 수 있어, 아는 범위에서 목록을 만드는 것부터 시작하는 편이 좋습니다.",
    "이 글은 재산목록을 정리하는 일반적인 방법을 안내하는 법률정보이며, 정리한 재산이 모두 분할 대상이 된다고 단정하지 않습니다.",
  ],
  publishedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  updatedAt: INFO_GUIDE_V2_PUBLISHED_AT,
  faqIds: [
    "property-list-01",
    "property-list-02",
    "property-list-03",
    "property-list-04",
    "property-list-05",
  ],
  faqTitle: "이혼 재산목록 정리 자주 묻는 질문",
  conclusion: [
    "재산목록은 부동산, 금융자산, 퇴직급여, 채무까지 항목별로 정리하고, 아는 부분과 확인이 더 필요한 부분을 구분해 두는 것이 도움이 됩니다. 재산분할 대상 해당 여부와 비율은 개별 사실관계에 따라 달라집니다.",
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
  relatedGuideIds: ["premaritalPropertyCheck", "realEstateDivisionDocs", "debtDivisionCheck"],
  keySummary: [
    {
      numberLabel: "01",
      title: "부동산",
      text: "주택·토지 소유 현황, 취득 시기, 대출 잔액을 정리합니다.",
    },
    {
      numberLabel: "02",
      title: "금융자산",
      text: "예금·보험·주식 등 보유 현황을 계좌별로 정리합니다.",
    },
    {
      numberLabel: "03",
      title: "퇴직급여·연금",
      text: "재직 중인 회사의 퇴직급여, 연금 관련 자료를 확인합니다.",
    },
    {
      numberLabel: "04",
      title: "채무",
      text: "대출·카드·보증 등 채무 목록도 함께 정리합니다.",
    },
  ],
  seo: {
    title: "이혼 재산목록, 어떻게 정리하나요? | 로펌가이드",
    description:
      "이혼 재산분할 상담 전 부동산·금융자산·퇴직급여 등 재산 항목을 정리하는 방법을 안내합니다.",
    keywords: ["이혼 재산목록", "재산분할 준비", "이혼 재산분할", "이혼전문변호사"],
    ogImage: "/icon.svg",
    socialImage: "/icon.svg",
    category: SITE.categoryLabel,
  },
  sections: [
    {
      id: "property-list-why",
      order: 1,
      numberLabel: "01",
      heading: "재산목록은 왜 미리 정리해야 하나요?",
      layout: "prose",
      directAnswer:
        "민법 제839조의2는 협의상 이혼한 자의 일방이 다른 일방에 대하여 재산분할을 청구할 수 있다고 정하고, 협의가 되지 않을 때는 가정법원이 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작해 분할의 액수와 방법을 정할 수 있다고 규정합니다. 어떤 재산이 대상인지 파악하는 것이 상담의 출발점입니다.",
      paragraphs: [
        "같은 조 제3항은 재산분할청구권이 이혼한 날부터 2년을 경과하면 소멸한다고 정하고 있어, 시기를 놓치지 않는 것도 중요합니다.",
        "재산목록을 미리 정리해 두면 상담에서 어떤 항목이 분할 대상에 해당할 수 있는지, 추가로 확인이 필요한 부분은 무엇인지 더 구체적으로 짚어볼 수 있습니다.",
      ],
      relatedHref: ROUTES.hospital,
      relatedLabel: "이혼 재산분할 안내 보기",
    },
    {
      id: "property-list-items",
      order: 2,
      numberLabel: "02",
      heading: "어떤 항목을 정리하면 좋은가요?",
      layout: "info-grid",
      directAnswer:
        "부동산, 예금·보험·주식 등 금융자산, 퇴직급여·연금, 차량·사업 관련 재산, 대출과 기타 채무를 항목별로 정리하는 편이 도움이 됩니다.",
      paragraphs: [
        "명의가 본인이 아니더라도 혼인 중 형성·유지에 기여한 재산이라면 참고 정보로 정리해 두는 것이 좋습니다. 다만 특유재산 해당 여부 등은 사실관계에 따라 달라질 수 있습니다.",
      ],
      infoBlocks: [
        { label: "부동산", text: "주택·토지 소유, 취득 시기, 대출 잔액" },
        { label: "금융자산", text: "예금·적금·보험·주식 등 보유 현황" },
        { label: "퇴직급여·연금", text: "재직 회사, 예상 퇴직급여, 연금 가입 현황" },
        { label: "채무", text: "대출·카드·보증 등 채무 목록" },
      ],
      relatedHref: ROUTES.realEstateDivisionDocs,
      relatedLabel: "부동산 재산분할 자료 보기",
    },
    {
      id: "property-list-know-vs-confirm",
      order: 3,
      numberLabel: "03",
      heading: "확인이 더 필요한 부분은 어떻게 표시하나요?",
      layout: "prose",
      directAnswer:
        "이미 아는 항목과 추가 확인이 필요한 항목을 구분해 두면, 상담에서 어떤 자료를 추가로 요청해야 하는지 더 명확해집니다.",
      paragraphs: [
        "예를 들어 배우자 명의로 알고 있는 계좌가 있지만 정확한 잔액을 모른다면, ‘존재 확인, 잔액 미확인’처럼 표시해 두는 방식이 도움이 될 수 있습니다. 정확한 확인은 필요시 금융거래정보 제출명령 등 법적 절차를 통해 이뤄질 수 있습니다.",
      ],
      relatedHref: ROUTES.debtDivisionCheck,
      relatedLabel: "채무 재산분할 상담 준비 보기",
    },
    {
      id: "property-list-caution",
      order: 4,
      numberLabel: "04",
      heading: "재산목록 정리 시 주의할 점은 무엇인가요?",
      layout: "prose",
      directAnswer:
        "특정 재산이 반드시 분할 대상이라고 단정하지 않고, 추측을 사실처럼 기재하지 않는 것이 중요합니다. 위법한 방법으로 상대방의 재산 정보를 확인하려 해서도 안 됩니다.",
      paragraphs: [
        "상대방 계정에 무단으로 접근하거나 비밀번호를 임의로 알아내는 등의 방식은 위법할 수 있으며 별도의 법적 문제로 이어질 수 있습니다. 확인이 필요한 재산 정보는 정식 절차를 통해 확보하는 것이 안전합니다.",
      ],
      relatedHref: ROUTES.premaritalPropertyCheck,
      relatedLabel: "혼인 전 재산 확인 보기",
    },
  ],
};
