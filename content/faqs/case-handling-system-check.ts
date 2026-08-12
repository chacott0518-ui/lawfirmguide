import type { FaqItem } from "@/types/faq";

export const CASE_HANDLING_SYSTEM_CHECK_FAQS: FaqItem[] = [
  {
    id: "case-handling-01",
    order: 1,
    question: "상담한 변호사가 재판에도 직접 출석하나요?",
    answer:
      "로펌과 사건에 따라 다를 수 있는 사안입니다. 상담 단계에서 실제 재판 출석 여부와 담당 체계를 미리 질문해 확인하는 것이 안전합니다.",
    categories: ["caseHandlingSystemCheck"],
  },
  {
    id: "case-handling-02",
    order: 2,
    question: "담당 변호사가 여러 명일 수도 있나요?",
    answer:
      "사건에 따라 여러 변호사가 함께 담당하는 경우도 있다고 알려져 있습니다. 이 경우 주 담당자가 누구인지, 각자의 역할이 무엇인지 확인해 두면 소통이 수월해질 수 있습니다.",
    categories: ["caseHandlingSystemCheck"],
  },
  {
    id: "case-handling-03",
    order: 3,
    question: "진행 상황을 자주 물어봐도 되나요?",
    answer:
      "가능합니다. 진행 상황 공유 주기나 방법을 미리 정해 두면 서로 부담 없이 소통할 수 있습니다. 궁금한 점이 있다면 정해진 소통 창구를 통해 문의하는 것이 좋습니다.",
    categories: ["caseHandlingSystemCheck"],
  },
  {
    id: "case-handling-04",
    order: 4,
    question: "담당자가 갑자기 바뀌면 사건에 불리한가요?",
    answer:
      "그렇게 단정할 수 없습니다. 다만 인수인계 과정에서 사건 내용이 누락되지 않도록 자료와 상담 기록이 잘 전달되는지 확인하는 것이 중요합니다.",
    categories: ["caseHandlingSystemCheck"],
  },
  {
    id: "case-handling-05",
    order: 5,
    question: "담당체계를 계약 전에 반드시 물어봐야 하나요?",
    answer:
      "반드시는 아니지만 미리 확인해 두는 것이 안전합니다. 계약 후 예상과 다른 방식으로 사건이 진행되면 혼선이 생길 수 있어, 계약 전 질문을 통해 명확히 해 두는 편이 좋습니다.",
    categories: ["caseHandlingSystemCheck"],
  },
];
