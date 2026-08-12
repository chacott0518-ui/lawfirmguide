import type { FaqItem } from "@/types/faq";

export const LAWYER_SELECTION_CHECK_FAQS: FaqItem[] = [
  {
    id: "lawyer-selection-01",
    order: 1,
    question: "승소를 보장한다는 변호사를 믿어도 되나요?",
    answer:
      "신중하게 볼 필요가 있습니다. 법률적 결과는 사실관계와 증거, 적용 법령, 법원의 판단에 따라 달라질 수 있어, 결과를 단정적으로 보장하는 설명은 과장된 표현일 수 있습니다. 근거를 들어 쟁점을 설명하는지를 함께 확인하는 것이 안전합니다.",
    categories: ["lawyerSelectionCheck"],
  },
  {
    id: "lawyer-selection-02",
    order: 2,
    question: "여러 곳에서 상담을 받고 비교해도 되나요?",
    answer:
      "가능합니다. 여러 곳의 설명 방식과 비용 구성을 비교하는 것은 흔한 방법입니다. 다만 비교 기준을 명확히(설명의 구체성, 비용 항목, 담당체계 등) 세워 두면 더 효율적으로 판단할 수 있습니다.",
    categories: ["lawyerSelectionCheck"],
  },
  {
    id: "lawyer-selection-03",
    order: 3,
    question: "후기가 많은 곳이 무조건 좋은 곳인가요?",
    answer:
      "그렇게 단정할 수 없습니다. 후기는 참고 자료일 뿐 결과를 보장하는 근거가 아닙니다. 후기 확인 기준에 대해서는 별도 안내를 참고하고, 최종 판단은 직접 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["lawyerSelectionCheck"],
  },
  {
    id: "lawyer-selection-04",
    order: 4,
    question: "선임 후 마음이 바뀌면 계약을 해지할 수 있나요?",
    answer:
      "일반적으로 위임계약도 해지가 가능한 경우가 많다고 알려져 있으나, 이미 진행된 업무에 대한 비용 정산 등 조건이 계약서에 명시되어 있을 수 있습니다. 계약 전 해지 관련 조항을 확인해 두는 것이 안전합니다.",
    categories: ["lawyerSelectionCheck"],
  },
  {
    id: "lawyer-selection-05",
    order: 5,
    question: "이혼전문변호사라는 표시는 어떤 의미인가요?",
    answer:
      "실제 전문분야 등록 여부에 따라 의미가 달라질 수 있는 표현입니다. 등록 사실이 확인되지 않았다면 검색 주제를 나타내는 일반적인 표현으로 이해하는 편이 안전하며, 궁금하다면 상담 시 직접 확인해 볼 수 있습니다.",
    categories: ["lawyerSelectionCheck"],
  },
];
