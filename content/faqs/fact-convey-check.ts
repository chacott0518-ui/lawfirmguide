import type { FaqItem } from "@/types/faq";

export const FACT_CONVEY_CHECK_FAQS: FaqItem[] = [
  {
    id: "fact-convey-01",
    order: 1,
    question: "상담 중 감정이 격해지면 어떻게 하나요?",
    answer:
      "감정이 격해지는 것은 자연스러운 일이며 이를 숨길 필요는 없습니다. 다만 잠시 숨을 고른 뒤 ‘그래서 실제로 있었던 일은 무엇인지’로 돌아와 설명을 이어가면 사실관계 전달에 도움이 될 수 있습니다.",
    categories: ["factConveyCheck"],
  },
  {
    id: "fact-convey-02",
    order: 2,
    question: "메모를 미리 준비해 가도 되나요?",
    answer:
      "네, 도움이 될 수 있습니다. 짧게라도 사실관계를 시간순으로 메모해 가면 상담에서 빠뜨리는 내용 없이 설명할 수 있습니다. 메모는 그대로 제시하거나 설명의 참고 자료로 활용할 수 있습니다.",
    categories: ["factConveyCheck"],
  },
  {
    id: "fact-convey-03",
    order: 3,
    question: "기억이 확실하지 않은 부분은 말하지 않는 게 나을까요?",
    answer:
      "그렇지 않습니다. 확실하지 않은 부분도 그 사실을 밝히며 전달하는 편이 안전합니다. ‘확실하지 않지만’이라는 표현과 함께 전달하면, 상담에서 추가 확인이 필요한 부분을 함께 파악할 수 있습니다.",
    categories: ["factConveyCheck"],
  },
  {
    id: "fact-convey-04",
    order: 4,
    question: "상대방에 대한 주관적 평가도 전달해야 하나요?",
    answer:
      "전달할 수 있지만, 평가만 전달하기보다 그 평가의 근거가 된 구체적 사실을 함께 설명하는 편이 좋습니다. ‘무책임했다’는 평가보다 ‘특정 시점부터 생활비를 주지 않았다’는 사실이 상담에서 더 유용하게 쓰일 수 있습니다.",
    categories: ["factConveyCheck"],
  },
  {
    id: "fact-convey-05",
    order: 5,
    question: "사실관계 전달 방식이 결과에 영향을 주나요?",
    answer:
      "전달 방식 자체가 법률적 결과를 결정하지는 않습니다. 다만 명확하고 구체적인 전달은 상담에서 쟁점을 정확히 파악하는 데 도움이 될 수 있습니다. 실제 결과는 증거와 적용 법령, 법원의 판단에 따라 달라집니다.",
    categories: ["factConveyCheck"],
  },
];
