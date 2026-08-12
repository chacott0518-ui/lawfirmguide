import type { FaqItem } from "@/types/faq";

export const POST_JUDGMENT_PROCESS_FAQS: FaqItem[] = [
  {
    id: "post-judgment-01",
    order: 1,
    question: "항소기간을 놓치면 어떻게 되나요?",
    answer:
      "정해진 기간 내 항소하지 않으면 판결이 확정되어 더 이상 다투기 어려워지는 경우가 많다고 알려져 있습니다. 판결에 불복할 생각이 있다면 판결서를 송달받은 즉시 기간을 확인하고 신속히 검토하는 것이 안전합니다.",
    categories: ["postJudgmentProcess"],
  },
  {
    id: "post-judgment-02",
    order: 2,
    question: "항소하면 반드시 결과가 바뀌나요?",
    answer:
      "그렇게 단정할 수 없습니다. 항소심에서도 기존 판단이 유지될 수 있으며, 추가로 제출하는 증거와 주장에 따라 결과가 달라질 수 있는 사안입니다. 항소 여부는 다툴 만한 쟁점이 있는지를 중심으로 신중히 검토해야 합니다.",
    categories: ["postJudgmentProcess"],
  },
  {
    id: "post-judgment-03",
    order: 3,
    question: "판결이 확정됐는지 어떻게 확인하나요?",
    answer:
      "확정 여부는 법원을 통해 확인증명원 등의 형태로 확인할 수 있는 경우가 많다고 알려져 있습니다. 구체적인 확인 방법은 담당 법원이나 변호사를 통해 안내받는 것이 정확합니다.",
    categories: ["postJudgmentProcess"],
  },
  {
    id: "post-judgment-04",
    order: 4,
    question: "이혼신고는 꼭 본인이 직접 해야 하나요?",
    answer:
      "신고 방법과 대리 가능 여부는 관할 관공서의 규정에 따라 다를 수 있습니다. 필요한 서류와 절차는 신고 전에 관할 기관에 미리 확인하는 것이 안전합니다.",
    categories: ["postJudgmentProcess"],
  },
  {
    id: "post-judgment-05",
    order: 5,
    question: "판결 후 재산분할 이행이 안 되면 어떻게 하나요?",
    answer:
      "판결 내용에 따른 이행이 이뤄지지 않는 경우 강제집행 등의 절차를 검토할 수 있다고 알려져 있습니다. 구체적인 이행 방법과 절차는 판결 내용과 상대방의 재산 상황에 따라 달라질 수 있어 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["postJudgmentProcess"],
  },
];
