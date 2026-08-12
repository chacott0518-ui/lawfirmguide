import type { FaqItem } from "@/types/faq";

export const PREMARITAL_PROPERTY_CHECK_FAQS: FaqItem[] = [
  {
    id: "premarital-01",
    order: 1,
    question: "혼인 전 산 집은 무조건 재산분할에서 빠지나요?",
    answer:
      "그렇게 단정할 수 없습니다. 혼인 전 취득한 부동산이라도 혼인 중 대출을 함께 갚거나 가치 유지·상승에 상대방의 기여가 있었다면, 그 부분이 재산분할에서 고려될 수 있다고 알려져 있습니다. 구체적인 판단은 사실관계에 따라 달라집니다.",
    categories: ["premaritalPropertyCheck"],
  },
  {
    id: "premarital-02",
    order: 2,
    question: "혼인 전 재산이라는 증거를 못 찾으면 어떻게 하나요?",
    answer:
      "증거를 못 찾았다고 상담이 불가능한 것은 아닙니다. 기억나는 취득 시기와 경위를 먼저 정리해 상담에서 알리고, 이후 등기부등본이나 계좌내역 등을 통해 보완하는 방법을 함께 검토할 수 있습니다.",
    categories: ["premaritalPropertyCheck"],
  },
  {
    id: "premarital-03",
    order: 3,
    question: "부모님께 증여받은 재산도 특유재산인가요?",
    answer:
      "일반적으로 증여·상속받은 재산은 특유재산으로 다뤄지는 경우가 있다고 알려져 있습니다. 다만 이 역시 혼인 중 관리·유지 과정과 상대방의 기여 여부에 따라 구체적인 판단이 달라질 수 있는 사안입니다.",
    categories: ["premaritalPropertyCheck"],
  },
  {
    id: "premarital-04",
    order: 4,
    question: "혼인 전 재산을 혼인 중 팔고 다른 걸 샀다면 어떻게 되나요?",
    answer:
      "형태가 바뀐 재산이 원래의 특유재산과 동일하게 취급되는지는 사실관계에 따라 달라질 수 있는 쟁점입니다. 매도·재취득 과정을 시간순으로 정리하고 관련 자료를 함께 준비해 상담에서 확인하는 것이 안전합니다.",
    categories: ["premaritalPropertyCheck"],
  },
  {
    id: "premarital-05",
    order: 5,
    question: "혼인 전 재산 관련 상담은 특별한 절차가 있나요?",
    answer:
      "별도의 특별한 절차가 있다기보다, 일반적인 재산분할 상담과 함께 취득 시기·자금 출처·변동 과정을 구체적으로 설명하는 것이 중요합니다. 관련 자료를 정리해 상담에 가져가면 도움이 됩니다.",
    categories: ["premaritalPropertyCheck"],
  },
];
