import type { FaqItem } from "@/types/faq";

export const PROCEDURE_COMPARISON_FAQS: FaqItem[] = [
  {
    id: "proc-compare-01",
    order: 1,
    question: "협의이혼이 재판상 이혼보다 항상 빠른가요?",
    answer:
      "항상 그렇다고 단정할 수 없습니다. 협의이혼은 숙려기간이 있어 최소한의 소요 기간이 정해져 있지만, 서류 준비나 법원 일정에 따라 달라질 수 있습니다. 재판상 이혼도 쟁점이 단순하면 예상보다 빠르게 진행되는 경우가 있어, 일률적으로 비교하기는 어렵습니다.",
    categories: ["procedureComparison"],
  },
  {
    id: "proc-compare-02",
    order: 2,
    question: "협의이혼 중에도 재산분할을 정할 수 있나요?",
    answer:
      "협의이혼 절차 자체는 이혼 의사와 미성년 자녀에 대한 사항(친권자 지정 등) 확인에 중점을 두는 절차로 알려져 있습니다. 재산분할은 별도로 협의하거나 이후 청구할 수 있는 사안으로 다뤄지는 경우가 많아, 구체적인 처리 방식은 상담에서 확인하는 것이 안전합니다.",
    categories: ["procedureComparison"],
  },
  {
    id: "proc-compare-03",
    order: 3,
    question: "상대방이 이혼에 응하지 않으면 어떻게 하나요?",
    answer:
      "상대방이 협의에 응하지 않으면 재판상 이혼 절차를 검토하게 되는 경우가 많습니다. 다만 재판상 이혼이 인정되려면 민법 제840조가 정한 원인에 해당하는지 등이 함께 검토되어야 하므로, 개별 사실관계를 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["procedureComparison"],
  },
  {
    id: "proc-compare-04",
    order: 4,
    question: "협의이혼 진행 중 마음이 바뀌면 어떻게 되나요?",
    answer:
      "협의이혼은 법원의 확인을 받기 전까지 의사를 철회할 수 있는 절차로 알려져 있습니다. 구체적인 철회 방법과 시점, 이후 절차는 관할 법원의 안내와 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["procedureComparison"],
  },
  {
    id: "proc-compare-05",
    order: 5,
    question: "두 절차 중 무엇이 저에게 맞는지 어떻게 알 수 있나요?",
    answer:
      "협의 가능 여부, 쟁점의 다툼 정도, 시급성 등을 종합적으로 고려해 판단하는 경우가 많습니다. 어떤 절차가 더 유리하다고 일률적으로 말하기 어려우므로, 본인의 사실관계를 바탕으로 상담을 통해 방향을 확인하는 것이 안전합니다.",
    categories: ["procedureComparison"],
  },
];
