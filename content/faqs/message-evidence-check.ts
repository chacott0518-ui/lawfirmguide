import type { FaqItem } from "@/types/faq";

export const MESSAGE_EVIDENCE_CHECK_FAQS: FaqItem[] = [
  {
    id: "message-evidence-01",
    order: 1,
    question: "삭제된 카카오톡 대화도 복구할 수 있나요?",
    answer:
      "일반적으로 삭제된 메신저 대화는 복구가 어려운 경우가 많다고 알려져 있습니다. 그래서 대화 내용을 확인했다면 삭제되기 전에 미리 캡처하고 백업해 두는 것이 중요합니다.",
    categories: ["messageEvidenceCheck"],
  },
  {
    id: "message-evidence-02",
    order: 2,
    question: "캡처 화면만으로 충분한 증거가 되나요?",
    answer:
      "캡처 화면이 참고 자료로 활용될 수 있지만, 그 자체로 충분한지는 사건과 쟁점에 따라 다를 수 있습니다. 필요한 경우 통신사 조회나 원본 파일 제출 등 추가 확인 절차가 검토될 수 있어 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["messageEvidenceCheck"],
  },
  {
    id: "message-evidence-03",
    order: 3,
    question: "제 폰에 있는 문자메시지도 증거로 쓸 수 있나요?",
    answer:
      "본인이 받거나 보낸 메시지는 일반적으로 활용 가능한 자료로 다뤄지는 경우가 많습니다. 다만 신빙성을 뒷받침하기 위해 날짜·발신자가 함께 보이도록 캡처하고 원본을 보존하는 것이 중요합니다.",
    categories: ["messageEvidenceCheck"],
  },
  {
    id: "message-evidence-04",
    order: 4,
    question: "번역이 필요한 외국어 메시지도 증거가 되나요?",
    answer:
      "가능하다고 알려져 있으나, 정확한 번역본을 함께 준비하는 것이 중요합니다. 번역 과정에서 원문 내용이 왜곡되지 않도록 신뢰할 수 있는 방법으로 번역하는 것이 안전합니다.",
    categories: ["messageEvidenceCheck"],
  },
  {
    id: "message-evidence-05",
    order: 5,
    question: "메시지 캡처를 여러 번 나눠서 해도 되나요?",
    answer:
      "가능합니다. 대화가 길다면 순서대로 이어지는 여러 장의 캡처로 나눠도 무방합니다. 다만 각 캡처가 어떤 순서인지 파일명이나 메모로 표시해 전체 흐름이 명확히 보이도록 정리하는 것이 좋습니다.",
    categories: ["messageEvidenceCheck"],
  },
];
