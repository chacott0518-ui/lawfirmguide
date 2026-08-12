import type { FaqItem } from "@/types/faq";

export const CUSTODY_CONSULT_CHECK_FAQS: FaqItem[] = [
  {
    id: "custody-consult-01",
    order: 1,
    question: "엄마가 무조건 양육권을 갖게 되나요?",
    answer:
      "그렇게 단정할 수 없습니다. 성별 하나만으로 양육자가 정해진다고 보기는 어려우며, 민법 제837조의 취지에 따라 현재 양육 상황, 자녀의 복리, 부모 각각의 여건 등이 종합적으로 검토되는 경우가 많습니다.",
    categories: ["custodyConsultCheck"],
  },
  {
    id: "custody-consult-02",
    order: 2,
    question: "소득이 적으면 양육권을 갖기 어려운가요?",
    answer:
      "소득 수준 하나만으로 결과가 정해진다고 단정할 수 없습니다. 소득은 여러 고려 요소 중 하나로 다뤄지는 경우가 많으며, 실제 양육 능력과 자녀와의 관계, 생활 환경 등이 함께 고려되는 것이 일반적입니다.",
    categories: ["custodyConsultCheck"],
  },
  {
    id: "custody-consult-03",
    order: 3,
    question: "친권과 양육자를 부모가 나눠 가질 수 있나요?",
    answer:
      "가능한 경우가 있다고 알려져 있습니다. 친권자와 양육자가 분리되어 지정되는 사례도 있으나, 실무상 함께 지정되는 경우도 많다고 설명됩니다. 구체적인 방식은 사건마다 다를 수 있어 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["custodyConsultCheck"],
  },
  {
    id: "custody-consult-04",
    order: 4,
    question: "자녀의 의사가 양육자 지정에 반영되나요?",
    answer:
      "자녀의 나이와 의사표현 능력에 따라 참고되는 경우가 있다고 알려져 있습니다. 다만 자녀의 의사만으로 결과가 정해진다고 단정할 수는 없으며, 다른 복리 요소와 함께 종합적으로 고려되는 것이 일반적입니다.",
    categories: ["custodyConsultCheck"],
  },
  {
    id: "custody-consult-05",
    order: 5,
    question: "이미 배우자와 떨어져 자녀를 키우고 있는데 유리한가요?",
    answer:
      "현재 양육 상황은 참고되는 요소 중 하나일 수 있지만, 그 자체로 결과를 보장한다고 단정할 수 없습니다. 안정적인 양육 환경을 지속해 온 사실을 구체적인 자료로 정리해 상담에서 설명하는 것이 도움이 될 수 있습니다.",
    categories: ["custodyConsultCheck"],
  },
];
