import type { FaqItem } from "@/types/faq";

export const CHILD_SUPPORT_PREP_FAQS: FaqItem[] = [
  {
    id: "child-support-01",
    order: 1,
    question: "양육비 산정기준표대로 무조건 정해지나요?",
    answer:
      "그렇게 단정할 수 없습니다. 산정기준표는 참고 자료로 활용되는 경우가 많지만, 특별한 의료비나 교육비 등 개별 사정에 따라 실제 금액은 다르게 정해질 수 있다고 알려져 있습니다. 구체적인 산정은 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["childSupportPrep"],
  },
  {
    id: "child-support-02",
    order: 2,
    question: "소득이 없으면 양육비를 안 줘도 되나요?",
    answer:
      "그렇게 단정할 수 없습니다. 소득이 없거나 적은 경우에도 양육비 부담 방식이 사안별로 다르게 검토될 수 있다고 알려져 있습니다. 구체적인 처리 방식은 개별 상황에 따라 상담을 통해 확인해야 합니다.",
    categories: ["childSupportPrep"],
  },
  {
    id: "child-support-03",
    order: 3,
    question: "양육비를 못 받으면 어떻게 대응할 수 있나요?",
    answer:
      "이행명령이나 강제집행 등 법적 절차를 검토할 수 있다고 알려져 있습니다. 구체적인 절차와 요건은 사건에 따라 다를 수 있어, 지급이 이뤄지지 않는 상황이라면 상담을 통해 대응 방법을 확인하는 것이 안전합니다.",
    categories: ["childSupportPrep"],
  },
  {
    id: "child-support-04",
    order: 4,
    question: "자녀가 성인이 되면 양육비 지급이 자동으로 끝나나요?",
    answer:
      "일반적으로 양육비는 자녀가 성년에 이를 때까지로 다뤄지는 경우가 많다고 알려져 있습니다. 다만 구체적인 종료 시점과 예외 상황은 합의 내용이나 법원의 결정에 따라 달라질 수 있어 확인이 필요합니다.",
    categories: ["childSupportPrep"],
  },
  {
    id: "child-support-05",
    order: 5,
    question: "이후 소득이 바뀌면 양육비도 바뀔 수 있나요?",
    answer:
      "사정 변경이 있는 경우 양육비 변경을 청구할 수 있다고 알려져 있습니다. 다만 변경이 인정되는 요건은 사안마다 다를 수 있어, 소득이나 상황이 크게 바뀌었다면 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["childSupportPrep"],
  },
];
