import type { FaqItem } from "@/types/faq";

export const COMPLAINT_SERVICE_RESPONSE_FAQS: FaqItem[] = [
  {
    id: "complaint-response-01",
    order: 1,
    question: "소장을 받았는데 내용을 이해하지 못하면 어떻게 하나요?",
    answer:
      "소장에는 법률 용어가 많이 포함될 수 있어 처음에는 이해가 어려울 수 있습니다. 청구 취지와 원인을 중심으로 무엇을 요구하는지 확인하고, 이해되지 않는 부분은 상담을 통해 설명을 듣는 것이 안전합니다.",
    categories: ["complaintServiceResponse"],
  },
  {
    id: "complaint-response-02",
    order: 2,
    question: "답변서를 기한 내 못 내면 무조건 지는 건가요?",
    answer:
      "그렇게 단정할 수 없습니다. 다만 기한 내 답변서를 제출하지 않으면 청구 원인 사실을 인정한 것으로 처리되어 절차 진행에 불리하게 작용할 수 있다고 알려져 있습니다. 기한을 지키기 어렵다면 빠르게 상담을 검토하는 것이 안전합니다.",
    categories: ["complaintServiceResponse"],
  },
  {
    id: "complaint-response-03",
    order: 3,
    question: "송달을 받은 사실을 몰랐다면 어떻게 하나요?",
    answer:
      "송달 방식에 따라 실제로 확인하지 못한 경우 구제 절차가 있을 수 있으나, 이는 사건별로 다르게 처리될 수 있는 예외적인 상황입니다. 뒤늦게라도 송달 사실을 알게 됐다면 즉시 상담을 통해 대응 방법을 확인하는 것이 안전합니다.",
    categories: ["complaintServiceResponse"],
  },
  {
    id: "complaint-response-04",
    order: 4,
    question: "청구 내용의 일부만 인정하고 싶은데 가능한가요?",
    answer:
      "가능합니다. 답변서는 청구 원인 사실 중 인정하는 부분과 다투는 부분을 구분해 작성할 수 있습니다. 전면 부인이나 전면 인정이 아니라, 사실관계에 맞춰 항목별로 입장을 정리하는 것이 일반적입니다.",
    categories: ["complaintServiceResponse"],
  },
  {
    id: "complaint-response-05",
    order: 5,
    question: "소장을 받은 즉시 변호사를 선임해야 하나요?",
    answer:
      "반드시 즉시 선임해야 한다고 단정할 수는 없지만, 답변 기한이 짧게 정해져 있어 신속하게 대응 방향을 검토하는 것이 안전합니다. 특히 재산·자녀 관련 쟁점이 있다면 상담을 통해 빠르게 방향을 잡는 것이 도움이 될 수 있습니다.",
    categories: ["complaintServiceResponse"],
  },
];
