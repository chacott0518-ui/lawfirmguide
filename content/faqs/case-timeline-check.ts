import type { FaqItem } from "@/types/faq";

export const CASE_TIMELINE_CHECK_FAQS: FaqItem[] = [
  {
    id: "timeline-01",
    order: 1,
    question: "정확한 날짜를 모두 기억하지 못하면 상담이 어려운가요?",
    answer:
      "그렇지 않습니다. 정확한 날짜를 모두 기억하지 못해도 대략적인 시기를 적어 두고 상담에서 이를 설명하는 것으로 시작할 수 있습니다. 이후 문서나 메시지 기록으로 시점을 보완하는 방법도 있습니다.",
    categories: ["caseTimelineCheck"],
  },
  {
    id: "timeline-02",
    order: 2,
    question: "별거 시점이 왜 중요한가요?",
    answer:
      "별거 시점은 혼인관계의 경과를 설명하는 중요한 기준점으로 다뤄지는 경우가 많습니다. 다만 별거 사실 하나만으로 법률적 결과가 정해진다고 단정할 수 없으며, 다른 사실관계와 함께 종합적으로 검토되는 경우가 일반적입니다.",
    categories: ["caseTimelineCheck"],
  },
  {
    id: "timeline-03",
    order: 3,
    question: "이미 진행한 조정이 있으면 어떻게 정리하나요?",
    answer:
      "조정을 신청한 시기, 진행 경과, 종료 방식(성립·불성립 등)을 함께 적어 두는 것이 좋습니다. 관련 서류가 있다면 시간순 정리와 함께 보관해 두면 상담에서 참고하기 수월합니다.",
    categories: ["caseTimelineCheck"],
  },
  {
    id: "timeline-04",
    order: 4,
    question: "사건 흐름 정리에 특별한 양식이 필요한가요?",
    answer:
      "정해진 양식은 없습니다. 날짜와 사건 내용을 표나 목록 형태로 간단히 정리해도 충분합니다. 중요한 것은 형식이 아니라 시간순으로 빠짐없이 정리하는 것입니다.",
    categories: ["caseTimelineCheck"],
  },
  {
    id: "timeline-05",
    order: 5,
    question: "상대방의 입장까지 함께 정리해야 하나요?",
    answer:
      "가능한 범위에서 함께 정리해 두면 도움이 될 수 있습니다. 상대방이 주장할 것으로 예상되는 사실이나 반박 가능성을 미리 메모해 두면, 상담에서 쟁점을 더 폭넓게 검토하는 데 참고가 될 수 있습니다.",
    categories: ["caseTimelineCheck"],
  },
];
