import type { FaqItem } from "@/types/faq";

export const CONSULTATION_QUESTIONS_FAQS: FaqItem[] = [
  {
    id: "consult-q-01",
    order: 1,
    question: "상담 질문은 몇 개 정도 준비하면 좋을까요?",
    answer:
      "정해진 개수는 없습니다. 절차, 재산분할, 자녀, 비용, 담당체계처럼 주제별로 궁금한 점을 정리해 가는 것이 개수보다 중요합니다. 우선순위가 높은 질문부터 먼저 묻는 방법도 상담 시간을 효율적으로 쓰는 데 도움이 됩니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-02",
    order: 2,
    question: "결과를 예측해 달라고 질문해도 되나요?",
    answer:
      "가능하지만 결과가 확정적으로 답변된다고 기대하기는 어렵습니다. 법률적 결과는 사실관계와 증거, 적용 법령, 법원의 판단에 따라 달라질 수 있어, ‘무조건 이길 수 있나요’보다 ‘어떤 쟁점을 확인해야 하나요’ 형태의 질문이 더 실질적인 답변으로 이어질 수 있습니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-03",
    order: 3,
    question: "여러 로펌에서 상담을 받아도 되나요?",
    answer:
      "가능합니다. 여러 곳에서 상담을 받아 설명 방식과 답변 내용을 비교하는 것은 흔한 방법입니다. 다만 한 곳의 설명만으로 서둘러 결정하기보다, 궁금한 점이 충분히 해소됐는지를 기준으로 판단하는 편이 좋습니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-04",
    order: 4,
    question: "질문에 대한 답변이 이해되지 않으면 어떻게 하나요?",
    answer:
      "바로 되물어 확인하는 것이 좋습니다. 법률 상담은 전문 용어가 포함될 수 있어 한 번에 이해되지 않는 부분이 생길 수 있습니다. 이해될 때까지 다시 설명을 요청하는 것은 자연스러운 과정이며, 메모해 두면 나중에 비교하기도 수월합니다.",
    categories: ["consultationQuestions"],
  },
  {
    id: "consult-q-05",
    order: 5,
    question: "이혼상담에서 가장 먼저 확인할 질문은 무엇인가요?",
    answer:
      "본인의 사건에서 협의이혼과 재판상 이혼 중 무엇을 검토해야 하는지, 그 이유는 무엇인지 먼저 확인하는 것이 도움이 될 수 있습니다. 이 답변을 바탕으로 재산·자녀·비용 관련 질문을 이어가면 상담 흐름을 이해하기 쉬워집니다.",
    categories: ["consultationQuestions"],
  },
];
