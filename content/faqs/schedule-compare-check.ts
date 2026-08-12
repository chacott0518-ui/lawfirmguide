import type { FaqItem } from "@/types/faq";

export const SCHEDULE_COMPARE_CHECK_FAQS: FaqItem[] = [
  {
    id: "schedule-compare-01",
    order: 1,
    question: "조정 기간이 소송보다 항상 짧은가요?",
    answer:
      "항상 그렇다고 단정할 수 없습니다. 조정이 신속하게 마무리되는 경우도 있지만, 합의가 어려운 사건은 조정에서도 시간이 걸릴 수 있습니다. 전체 소요 기간은 쟁점의 복잡성과 당사자의 협조 정도에 따라 달라집니다.",
    categories: ["scheduleCompareCheck"],
  },
  {
    id: "schedule-compare-02",
    order: 2,
    question: "조정과 소송 기일을 동시에 진행할 수도 있나요?",
    answer:
      "일반적으로 조정이 먼저 진행되고, 성립하지 않으면 소송으로 넘어가는 순차적 구조로 알려져 있습니다. 동시 진행 여부는 사건 성격에 따라 다를 수 있어 구체적인 절차는 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["scheduleCompareCheck"],
  },
  {
    id: "schedule-compare-03",
    order: 3,
    question: "다음 기일까지 준비할 것이 많으면 일정이 늘어나나요?",
    answer:
      "필요한 준비가 많으면 기일 간격이 조정되거나 추가 기일이 필요할 수 있다고 알려져 있습니다. 미리 준비할 자료를 파악해 두면 일정 지연을 줄이는 데 도움이 될 수 있습니다.",
    categories: ["scheduleCompareCheck"],
  },
  {
    id: "schedule-compare-04",
    order: 4,
    question: "기일에 불참하면 어떻게 되나요?",
    answer:
      "정당한 사유 없이 기일에 불참하면 절차 진행에 불리하게 작용할 수 있다고 알려져 있습니다. 부득이한 사정이 있다면 사전에 법원이나 담당 변호사를 통해 조율을 요청하는 것이 안전합니다.",
    categories: ["scheduleCompareCheck"],
  },
  {
    id: "schedule-compare-05",
    order: 5,
    question: "일정이 자꾸 미뤄지면 어떻게 해야 하나요?",
    answer:
      "일정 변동은 재판부 사정 등 다양한 이유로 발생할 수 있는 사안입니다. 지연이 걱정된다면 담당 변호사를 통해 현재 진행 상황과 예상 일정을 다시 확인해 보는 것이 도움이 될 수 있습니다.",
    categories: ["scheduleCompareCheck"],
  },
];
