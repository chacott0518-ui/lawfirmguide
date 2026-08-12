import type { FaqItem } from "@/types/faq";

export const DEBT_DIVISION_CHECK_FAQS: FaqItem[] = [
  {
    id: "debt-division-01",
    order: 1,
    question: "배우자의 도박빚도 제가 나눠 갚아야 하나요?",
    answer:
      "그렇게 단정할 수 없습니다. 개인적인 용도로 발생한 채무는 공동재산 형성을 위한 채무와 다르게 다뤄지는 경우가 있다고 알려져 있습니다. 구체적인 판단은 채무 발생 경위와 사실관계에 따라 달라지므로 상담을 통해 확인해야 합니다.",
    categories: ["debtDivisionCheck"],
  },
  {
    id: "debt-division-02",
    order: 2,
    question: "제 명의로 된 대출인데 배우자가 써서 생긴 빚은 어떻게 되나요?",
    answer:
      "명의와 실제 사용 목적이 다른 경우, 이를 뒷받침할 자료가 있다면 상담에서 설명하는 것이 도움이 됩니다. 명의만으로 채무 부담이 자동으로 정해진다고 단정하기는 어려우며, 실제 사용 목적과 경위가 함께 고려될 수 있습니다.",
    categories: ["debtDivisionCheck"],
  },
  {
    id: "debt-division-03",
    order: 3,
    question: "채무가 자산보다 많으면 재산분할을 청구할 수 없나요?",
    answer:
      "그렇게 단정할 수 없습니다. 순재산이 마이너스인 경우에도 재산분할 상담 자체가 무의미하다고 볼 수는 없으며, 구체적인 처리 방식은 사건마다 다를 수 있어 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["debtDivisionCheck"],
  },
  {
    id: "debt-division-04",
    order: 4,
    question: "채무 서류를 다 모으지 못했는데 상담이 가능한가요?",
    answer:
      "가능합니다. 대략적인 채무 종류와 규모를 먼저 정리해 상담을 시작하고, 채무증명서나 명세서 등 세부 서류는 이후 보완하는 방법이 일반적입니다.",
    categories: ["debtDivisionCheck"],
  },
  {
    id: "debt-division-05",
    order: 5,
    question: "이혼 후에도 공동 채무는 계속 함께 갚아야 하나요?",
    answer:
      "채무의 대외적 책임과 부부 사이의 내부 부담 정산은 다르게 다뤄질 수 있는 사안입니다. 채권자에 대한 책임과 재산분할을 통한 내부 정산 방식은 상담을 통해 구체적으로 확인하는 것이 안전합니다.",
    categories: ["debtDivisionCheck"],
  },
];
