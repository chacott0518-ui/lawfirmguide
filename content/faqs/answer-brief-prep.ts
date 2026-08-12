import type { FaqItem } from "@/types/faq";

export const ANSWER_BRIEF_PREP_FAQS: FaqItem[] = [
  {
    id: "answer-brief-01",
    order: 1,
    question: "답변서는 직접 작성해도 되나요?",
    answer:
      "직접 작성하는 것이 불가능하지는 않습니다. 다만 청구 항목별로 인정·부인을 정확히 구분하고 근거를 정리하는 작업이 까다로울 수 있어, 쟁점이 복잡한 사건이라면 변호사의 검토를 받는 편이 안전합니다.",
    categories: ["answerBriefPrep"],
  },
  {
    id: "answer-brief-02",
    order: 2,
    question: "답변서를 간단하게만 내도 되나요?",
    answer:
      "기한 내 우선 간단한 답변서를 제출하고 이후 추가 서면으로 보완하는 방법이 검토되는 경우가 있습니다. 다만 최소한 청구를 다툰다는 취지는 명확히 밝히는 것이 중요하며, 구체적인 방법은 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["answerBriefPrep"],
  },
  {
    id: "answer-brief-03",
    order: 3,
    question: "일부만 인정하고 일부는 다퉈도 되나요?",
    answer:
      "가능합니다. 답변서는 청구 원인 사실을 항목별로 나눠 인정·부인·부지로 구분해 작성할 수 있습니다. 전면 인정이나 전면 부인이 아니라 사실관계에 맞춰 정리하는 것이 일반적입니다.",
    categories: ["answerBriefPrep"],
  },
  {
    id: "answer-brief-04",
    order: 4,
    question: "답변서 제출 후 내용을 수정할 수 있나요?",
    answer:
      "이후 준비서면 등을 통해 주장을 보완하거나 수정할 수 있는 경우가 많다고 알려져 있습니다. 다만 처음부터 일관된 사실관계를 바탕으로 작성하는 것이 이후 절차에서 신뢰도를 유지하는 데 도움이 될 수 있습니다.",
    categories: ["answerBriefPrep"],
  },
  {
    id: "answer-brief-05",
    order: 5,
    question: "답변서에 증거자료를 함께 첨부해야 하나요?",
    answer:
      "답변서 단계부터 모든 증거를 첨부해야 하는 것은 아니지만, 핵심 쟁점을 뒷받침하는 자료가 있다면 함께 제출하는 편이 이후 절차에 도움이 될 수 있습니다. 자료가 부족한 부분은 추후 보완할 수 있는 경우가 많습니다.",
    categories: ["answerBriefPrep"],
  },
];
