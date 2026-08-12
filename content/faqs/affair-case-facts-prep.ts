import type { FaqItem } from "@/types/faq";

export const AFFAIR_CASE_FACTS_PREP_FAQS: FaqItem[] = [
  {
    id: "affair-facts-01",
    order: 1,
    question: "심증만 있고 확실한 증거가 없는데 상담이 가능한가요?",
    answer:
      "가능합니다. 심증에 불과한 부분도 그대로 상담에서 알리고, 확인된 사실과 구분해 정리하면 됩니다. 상담을 통해 어떤 추가 확인이나 자료 확보가 필요한지 함께 검토할 수 있습니다.",
    categories: ["affairCaseFactsPrep"],
  },
  {
    id: "affair-facts-02",
    order: 2,
    question: "상간 사실이 있으면 반드시 위자료가 인정되나요?",
    answer:
      "그렇게 단정할 수 없습니다. 위자료 인정 여부는 사실관계, 증거의 신빙성, 파탄에 대한 기여도 등을 종합적으로 검토해 판단되는 사안입니다. 특정 사실만으로 결과가 자동으로 정해진다고 볼 수 없습니다.",
    categories: ["affairCaseFactsPrep"],
  },
  {
    id: "affair-facts-03",
    order: 3,
    question: "지인에게 들은 이야기도 상담에서 말해도 되나요?",
    answer:
      "말할 수 있습니다. 다만 직접 확인한 사실이 아니라는 점을 함께 밝혀 전달하는 것이 중요합니다. 전해 들은 이야기를 사실처럼 단정해 전달하면 상담에서 쟁점이 왜곡될 수 있습니다.",
    categories: ["affairCaseFactsPrep"],
  },
  {
    id: "affair-facts-04",
    order: 4,
    question: "사실관계 정리에 시간이 오래 걸려도 괜찮나요?",
    answer:
      "괜찮습니다. 정확하고 차분하게 정리하는 것이 서두르는 것보다 중요합니다. 다만 위자료 관련 청구에도 소멸시효 등 기한이 있을 수 있으므로, 너무 오래 미루지 않는 것이 안전합니다.",
    categories: ["affairCaseFactsPrep"],
  },
  {
    id: "affair-facts-05",
    order: 5,
    question: "정리한 내용을 상담 전에 다른 사람과 공유해도 되나요?",
    answer:
      "신중하게 접근하는 것이 좋습니다. 사건과 무관한 사람과 자료를 공유하면 개인정보나 명예와 관련된 문제가 생길 수 있습니다. 정리한 내용은 상담 목적으로만 활용하는 것이 안전합니다.",
    categories: ["affairCaseFactsPrep"],
  },
];
