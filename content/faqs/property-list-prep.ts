import type { FaqItem } from "@/types/faq";

export const PROPERTY_LIST_PREP_FAQS: FaqItem[] = [
  {
    id: "property-list-01",
    order: 1,
    question: "제 명의가 아닌 재산도 목록에 포함해야 하나요?",
    answer:
      "포함하는 편이 좋습니다. 명의와 실제 형성·유지 과정이 다를 수 있어, 배우자 명의라도 혼인 중 부부가 협력해 형성한 재산이라면 참고 정보로 정리해 두는 것이 상담에 도움이 됩니다. 다만 분할 대상 해당 여부는 사실관계에 따라 달라집니다.",
    categories: ["propertyListPrep"],
  },
  {
    id: "property-list-02",
    order: 2,
    question: "재산목록을 완벽하게 갖추지 못하면 상담이 어려운가요?",
    answer:
      "그렇지 않습니다. 처음부터 모든 재산을 완벽하게 파악해야 상담이 가능한 것은 아닙니다. 아는 항목을 먼저 정리하고 확인이 더 필요한 부분을 표시해 두면, 상담에서 추가로 확인할 방법을 함께 검토할 수 있습니다.",
    categories: ["propertyListPrep"],
  },
  {
    id: "property-list-03",
    order: 3,
    question: "재산분할청구권에도 기한이 있나요?",
    answer:
      "네. 민법 제839조의2 제3항은 재산분할청구권이 이혼한 날부터 2년을 경과한 때 소멸한다고 정하고 있습니다. 이혼 이후 재산분할을 별도로 청구하려는 경우 이 기간을 유의해야 합니다.",
    categories: ["propertyListPrep"],
  },
  {
    id: "property-list-04",
    order: 4,
    question: "채무도 재산목록에 포함해야 하나요?",
    answer:
      "네, 포함하는 편이 좋습니다. 대출, 카드, 보증 등 채무도 재산분할 상담에서 참고되는 항목으로 다뤄질 수 있습니다. 자산과 채무를 함께 정리해야 전체적인 재산 상황을 설명하기 수월합니다.",
    categories: ["propertyListPrep"],
  },
  {
    id: "property-list-05",
    order: 5,
    question: "배우자의 재산 정보를 몰래 알아봐도 되나요?",
    answer:
      "그렇게 해서는 안 됩니다. 계정 무단 접근, 비밀번호 임의 확인 등 위법한 방법으로 재산 정보를 확인하면 별도의 법적 문제가 생길 수 있습니다. 확인이 필요한 정보는 상담을 통해 정식 절차로 확보하는 것이 안전합니다.",
    categories: ["propertyListPrep"],
  },
];
