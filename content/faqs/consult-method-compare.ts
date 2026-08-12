import type { FaqItem } from "@/types/faq";

export const CONSULT_METHOD_COMPARE_FAQS: FaqItem[] = [
  {
    id: "consult-method-01",
    order: 1,
    question: "화상 상담도 대면 상담만큼 정확하게 진행되나요?",
    answer:
      "방식 자체보다 상담의 준비와 설명의 충실도가 더 중요하다고 볼 수 있습니다. 화상 상담도 자료를 미리 공유하고 화면으로 함께 확인하면 대면과 비슷한 수준으로 진행될 수 있습니다.",
    categories: ["consultMethodCompare"],
  },
  {
    id: "consult-method-02",
    order: 2,
    question: "전화로만 상담받고 바로 계약해도 되나요?",
    answer:
      "가능하지만 중요한 사건일수록 계약 전 충분한 설명을 받는 것이 안전합니다. 필요하다면 전화 상담 후 대면이나 화상으로 추가 설명을 요청하는 것도 방법이 될 수 있습니다.",
    categories: ["consultMethodCompare"],
  },
  {
    id: "consult-method-03",
    order: 3,
    question: "상담 방식에 따라 비용이 다른가요?",
    answer:
      "상담 자체의 비용 정책은 로펌마다 다를 수 있습니다. 방식과 무관하게 상담료 유무와 조건을 미리 확인하는 것이 좋습니다.",
    categories: ["consultMethodCompare"],
  },
  {
    id: "consult-method-04",
    order: 4,
    question: "자료가 많으면 어떤 방식이 좋을까요?",
    answer:
      "자료가 많고 복잡하다면 직접 보여주며 설명할 수 있는 대면 상담이나, 자료를 미리 전달한 뒤 진행하는 화상 상담이 도움이 될 수 있습니다. 다만 절대적인 기준은 아니며 본인 여건에 맞게 선택하면 됩니다.",
    categories: ["consultMethodCompare"],
  },
  {
    id: "consult-method-05",
    order: 5,
    question: "여러 방식을 섞어서 상담받아도 되나요?",
    answer:
      "가능합니다. 초기 상담은 전화나 화상으로 진행하고, 이후 구체적인 논의는 대면으로 이어가는 방식도 활용될 수 있습니다. 본인의 상황에 맞게 유연하게 조합할 수 있습니다.",
    categories: ["consultMethodCompare"],
  },
];
