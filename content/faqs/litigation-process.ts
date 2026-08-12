import type { FaqItem } from "@/types/faq";

export const LITIGATION_PROCESS_FAQS: FaqItem[] = [
  {
    id: "litigation-01",
    order: 1,
    question: "이혼소송은 보통 얼마나 걸리나요?",
    answer:
      "정해진 기간이 있다고 단정할 수 없습니다. 쟁점의 다툼 정도, 증거조사 필요 여부, 재판부 사정에 따라 소요 기간이 크게 달라질 수 있습니다. 구체적인 예상 기간은 사건 내용을 바탕으로 상담에서 확인하는 것이 정확합니다.",
    categories: ["litigationProcess"],
  },
  {
    id: "litigation-02",
    order: 2,
    question: "변론기일에 반드시 직접 출석해야 하나요?",
    answer:
      "사건과 절차 단계에 따라 출석 필요 여부가 달라질 수 있습니다. 소송대리인(변호사)이 선임된 경우 일부 절차는 대리인을 통해 진행되기도 하지만, 본인 출석이 필요한 경우도 있어 담당 변호사의 안내를 따르는 것이 안전합니다.",
    categories: ["litigationProcess"],
  },
  {
    id: "litigation-03",
    order: 3,
    question: "소송 중에도 조정이 가능한가요?",
    answer:
      "가능합니다. 소송이 진행되는 중에도 당사자 간 합의가 이뤄지면 조정이나 화해 형태로 사건이 종결되는 경우가 있다고 알려져 있습니다. 진행 중 합의 가능성이 생기면 담당 변호사와 논의해 볼 수 있습니다.",
    categories: ["litigationProcess"],
  },
  {
    id: "litigation-04",
    order: 4,
    question: "증거조사는 어떤 방식으로 이뤄지나요?",
    answer:
      "서면 증거 제출, 증인신문, 사실조회, 문서송부촉탁 등 다양한 방식이 활용될 수 있다고 알려져 있습니다. 어떤 방식이 필요한지는 쟁점과 확보된 자료에 따라 달라지므로 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["litigationProcess"],
  },
  {
    id: "litigation-05",
    order: 5,
    question: "판결에 불복하면 어떻게 하나요?",
    answer:
      "판결에 불복하는 경우 정해진 기간 내 항소를 검토할 수 있다고 알려져 있습니다. 항소 여부와 기간은 사건마다 확인이 필요하므로, 판결 이후 신속하게 담당 변호사와 상의하는 것이 안전합니다.",
    categories: ["litigationProcess"],
  },
];
