import type { FaqItem } from "@/types/faq";

export const MEDIATION_PROCESS_FAQS: FaqItem[] = [
  {
    id: "mediation-01",
    order: 1,
    question: "조정을 거치지 않고 바로 소송할 수는 없나요?",
    answer:
      "가사소송법의 조정전치주의에 따라 원칙적으로 조정을 먼저 거치는 경우가 많다고 알려져 있습니다. 다만 사건 성격에 따라 예외적으로 처리되는 경우도 있을 수 있어, 구체적인 진행 방식은 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["mediationProcess"],
  },
  {
    id: "mediation-02",
    order: 2,
    question: "조정기일에 변호사 없이 혼자 가도 되나요?",
    answer:
      "혼자 참석하는 것이 불가능하지는 않습니다. 다만 쟁점이 복잡하거나 재산·자녀 관련 다툼이 있는 경우, 변호사와 함께 준비하면 조정기일에서 필요한 자료와 설명을 더 체계적으로 전달하는 데 도움이 될 수 있습니다.",
    categories: ["mediationProcess"],
  },
  {
    id: "mediation-03",
    order: 3,
    question: "조정은 몇 번 정도 진행되나요?",
    answer:
      "정해진 횟수는 없습니다. 쟁점의 복잡성과 당사자의 합의 정도에 따라 한 번에 끝나기도 하고 여러 차례 진행되기도 합니다. 정확한 진행 횟수는 사건마다 다를 수 있습니다.",
    categories: ["mediationProcess"],
  },
  {
    id: "mediation-04",
    order: 4,
    question: "조정 중 상대방과 직접 대면해야 하나요?",
    answer:
      "일반적으로 조정기일에는 양 당사자가 함께 참석하는 경우가 많다고 알려져 있지만, 사건에 따라 진행 방식이 다를 수 있습니다. 대면이 어려운 사정이 있다면 미리 법원이나 담당 변호사와 상의하는 것이 좋습니다.",
    categories: ["mediationProcess"],
  },
  {
    id: "mediation-05",
    order: 5,
    question: "조정에서 합의한 내용을 나중에 바꿀 수 있나요?",
    answer:
      "조정조서는 확정판결과 같은 효력을 가진다고 알려져 있어 임의로 변경하기 어려운 경우가 많습니다. 합의 전 내용을 충분히 이해하고, 이해되지 않는 부분은 조정기일에서 바로 확인하는 것이 안전합니다.",
    categories: ["mediationProcess"],
  },
];
