import type { FaqItem } from "@/types/faq";

export const VISITATION_CONSULT_CHECK_FAQS: FaqItem[] = [
  {
    id: "visitation-01",
    order: 1,
    question: "면접교섭을 거부할 수 있나요?",
    answer:
      "일방적으로 거부하기는 어렵다고 알려져 있습니다. 다만 자녀에게 명백히 해가 되는 특별한 사정이 있는 경우 제한이나 조정이 검토될 수 있습니다. 구체적인 판단은 사실관계에 따라 달라지므로 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["visitationConsultCheck"],
  },
  {
    id: "visitation-02",
    order: 2,
    question: "면접교섭 중 양육비를 안 주면 면접을 막아도 되나요?",
    answer:
      "양육비 미지급과 면접교섭은 별개의 사안으로 다뤄지는 경우가 많다고 알려져 있습니다. 양육비 문제는 별도의 절차(이행명령 등)로 대응하는 것이 일반적이며, 이를 이유로 임의로 면접교섭을 막는 것은 신중하게 접근해야 할 사안입니다.",
    categories: ["visitationConsultCheck"],
  },
  {
    id: "visitation-03",
    order: 3,
    question: "자녀가 면접을 원하지 않으면 어떻게 하나요?",
    answer:
      "자녀의 의사는 참고되는 요소가 될 수 있지만, 그 이유와 배경을 함께 살펴보는 것이 중요하다고 알려져 있습니다. 자녀의 거부 의사가 지속된다면 상담을 통해 원인과 대응 방법을 함께 검토하는 것이 안전합니다.",
    categories: ["visitationConsultCheck"],
  },
  {
    id: "visitation-04",
    order: 4,
    question: "면접교섭 장소는 꼭 정해야 하나요?",
    answer:
      "반드시 정해야 하는 것은 아니지만, 인수인계 장소와 시간을 구체적으로 정해 두면 이후 갈등을 줄이는 데 도움이 될 수 있습니다. 특히 갈등이 예상되는 경우 제3의 장소나 방법을 미리 논의하는 편이 좋습니다.",
    categories: ["visitationConsultCheck"],
  },
  {
    id: "visitation-05",
    order: 5,
    question: "재혼하면 면접교섭이 자동으로 끝나나요?",
    answer:
      "그렇게 단정할 수 없습니다. 부모의 재혼 여부와 면접교섭권은 별개의 사안으로 다뤄지는 경우가 많습니다. 다만 생활 환경 변화에 따라 방식 조정이 논의될 수 있어, 변화가 있다면 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["visitationConsultCheck"],
  },
];
