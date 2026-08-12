import type { FaqItem } from "@/types/faq";

export const RETAINER_AGREEMENT_CHECK_FAQS: FaqItem[] = [
  {
    id: "retainer-01",
    order: 1,
    question: "계약서를 꼼꼼히 읽지 않고 서명해도 되나요?",
    answer:
      "그렇게 하지 않는 것이 안전합니다. 계약서에는 업무 범위, 비용 조건, 해지 시 정산 방식 등 중요한 내용이 담겨 있어, 서명 전 전체를 읽고 이해되지 않는 부분은 질문해 확인하는 것이 중요합니다.",
    categories: ["retainerAgreementCheck"],
  },
  {
    id: "retainer-02",
    order: 2,
    question: "성공보수는 어떻게 계산되나요?",
    answer:
      "산정 기준은 계약마다 다를 수 있습니다. 인정된 재산분할 금액이나 청구 인용 정도를 기준으로 산정되는 경우가 있다고 알려져 있으나, 구체적인 기준은 계약서에서 명확히 확인해야 합니다.",
    categories: ["retainerAgreementCheck"],
  },
  {
    id: "retainer-03",
    order: 3,
    question: "구두로 들은 조건과 계약서 내용이 다르면 어떻게 하나요?",
    answer:
      "계약서에 반영되지 않은 구두 약속은 나중에 확인이 어려울 수 있습니다. 구두로 안내받은 조건이 계약서에 정확히 반영되어 있는지 서명 전에 반드시 대조해 확인하는 것이 안전합니다.",
    categories: ["retainerAgreementCheck"],
  },
  {
    id: "retainer-04",
    order: 4,
    question: "계약서 사본을 꼭 받아야 하나요?",
    answer:
      "네. 서명한 계약서의 사본은 본인이 직접 보관하는 것이 중요합니다. 이후 비용이나 업무 범위와 관련한 확인이 필요할 때 사본이 중요한 근거 자료가 될 수 있습니다.",
    categories: ["retainerAgreementCheck"],
  },
  {
    id: "retainer-05",
    order: 5,
    question: "위임계약을 해지하면 착수금은 돌려받을 수 있나요?",
    answer:
      "그렇게 단정할 수 없습니다. 이미 진행된 업무에 대한 비용은 정산 후 나머지가 환급되는 방식이 일반적으로 알려져 있으나, 구체적인 조건은 계약서에 명시된 해지·정산 조항에 따라 다를 수 있습니다.",
    categories: ["retainerAgreementCheck"],
  },
];
