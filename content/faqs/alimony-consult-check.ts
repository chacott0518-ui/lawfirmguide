import type { FaqItem } from "@/types/faq";

export const ALIMONY_CONSULT_CHECK_FAQS: FaqItem[] = [
  {
    id: "alimony-consult-01",
    order: 1,
    question: "위자료와 재산분할을 같이 청구할 수 있나요?",
    answer:
      "가능하다고 알려져 있습니다. 두 청구는 목적과 판단 기준이 다르지만, 같은 소송 절차에서 함께 다뤄지는 경우가 많습니다. 다만 각 쟁점에 대한 근거와 자료는 구분해 정리하는 편이 상담에 도움이 됩니다.",
    categories: ["alimonyConsultCheck"],
  },
  {
    id: "alimony-consult-02",
    order: 2,
    question: "위자료 금액은 어떻게 정해지나요?",
    answer:
      "정해진 산정 기준이 있다고 단정할 수 없습니다. 파탄의 경위와 책임 정도, 혼인 기간, 당사자의 경제적 사정 등 여러 요소가 종합적으로 고려되는 경우가 많다고 알려져 있습니다. 구체적인 금액은 사건마다 다르게 판단됩니다.",
    categories: ["alimonyConsultCheck"],
  },
  {
    id: "alimony-consult-03",
    order: 3,
    question: "잘못이 없는 쪽만 위자료를 청구할 수 있나요?",
    answer:
      "혼인 파탄에 대한 책임 정도가 위자료 인정 여부와 관련해 고려되는 경우가 많다고 알려져 있습니다. 다만 구체적인 책임 소재는 사실관계와 증거에 따라 달라질 수 있어 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["alimonyConsultCheck"],
  },
  {
    id: "alimony-consult-04",
    order: 4,
    question: "위자료 청구에도 기한이 있나요?",
    answer:
      "위자료 청구권도 일정 기간이 지나면 소멸시효가 완성될 수 있다고 알려져 있습니다. 정확한 기간과 기산점은 사안에 따라 다를 수 있어, 시간이 지났다면 상담을 통해 빠르게 확인하는 것이 안전합니다.",
    categories: ["alimonyConsultCheck"],
  },
  {
    id: "alimony-consult-05",
    order: 5,
    question: "증거 없이 위자료 상담을 받아도 되나요?",
    answer:
      "가능합니다. 증거가 부족한 상태에서도 상담을 통해 어떤 자료가 필요한지, 어떻게 확보할 수 있는지 확인할 수 있습니다. 다만 위법한 방법으로 증거를 수집하지 않도록 유의해야 합니다.",
    categories: ["alimonyConsultCheck"],
  },
];
