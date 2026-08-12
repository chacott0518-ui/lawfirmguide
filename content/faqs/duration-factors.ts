import type { FaqItem } from "@/types/faq";

export const DURATION_FACTORS_FAQS: FaqItem[] = [
  {
    id: "duration-01",
    order: 1,
    question: "이혼소송은 평균 몇 개월 걸리나요?",
    answer:
      "평균 기간을 일률적으로 제시하기는 어렵습니다. 쟁점의 다툼 정도, 증거조사 필요성, 재판부 사정에 따라 크게 달라질 수 있어, 본인 사건의 구체적인 쟁점을 바탕으로 상담에서 예상 범위를 확인하는 것이 더 정확합니다.",
    categories: ["durationFactors"],
  },
  {
    id: "duration-02",
    order: 2,
    question: "협의이혼이 항상 더 빠른가요?",
    answer:
      "일반적으로 협의가 가능하면 상대적으로 빠르게 진행되는 경우가 많다고 알려져 있지만, 서류 준비나 법원 일정에 따라 달라질 수 있습니다. 절차 자체의 빠름과 실제 소요 기간은 다를 수 있습니다.",
    categories: ["durationFactors"],
  },
  {
    id: "duration-03",
    order: 3,
    question: "상대방이 소송에 대응하지 않으면 더 빨라지나요?",
    answer:
      "상대방이 답변서를 제출하지 않는 등 대응이 없는 경우 절차가 상대적으로 신속하게 진행될 수 있다고 알려져 있습니다. 다만 송달이 제대로 되지 않으면 오히려 지연될 수도 있어 사건마다 다를 수 있습니다.",
    categories: ["durationFactors"],
  },
  {
    id: "duration-04",
    order: 4,
    question: "빠른 진행을 요청할 수 있나요?",
    answer:
      "일정 조율은 재판부의 판단에 따르는 부분이 많아, 당사자가 임의로 기간을 단축시킬 수 있다고 단정할 수 없습니다. 다만 필요한 자료를 신속하고 충실하게 준비하면 불필요한 지연을 줄이는 데 도움이 될 수 있습니다.",
    categories: ["durationFactors"],
  },
  {
    id: "duration-05",
    order: 5,
    question: "기간이 길어지면 불리한 건가요?",
    answer:
      "그렇게 단정할 수 없습니다. 기간이 길어지는 것은 쟁점이 복잡하거나 신중한 심리가 필요하기 때문인 경우가 많으며, 이는 결과의 유불리와 직접적인 관련이 있다고 보기 어렵습니다.",
    categories: ["durationFactors"],
  },
];
