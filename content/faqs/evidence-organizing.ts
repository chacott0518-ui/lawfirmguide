import type { FaqItem } from "@/types/faq";

export const EVIDENCE_ORGANIZING_FAQS: FaqItem[] = [
  {
    id: "evidence-org-01",
    order: 1,
    question: "증거가 많을수록 무조건 유리한가요?",
    answer:
      "그렇게 단정할 수 없습니다. 양보다 쟁점과의 관련성, 신빙성이 더 중요하게 다뤄지는 경우가 많다고 알려져 있습니다. 관련 없는 자료를 무작정 모으기보다 쟁점에 맞는 자료를 체계적으로 정리하는 편이 효과적일 수 있습니다.",
    categories: ["evidenceOrganizing"],
  },
  {
    id: "evidence-org-02",
    order: 2,
    question: "증거를 정리하는 특별한 양식이 있나요?",
    answer:
      "정해진 양식은 없습니다. 종류별·시간순으로 정리하고 각 자료에 간단한 설명을 붙이는 방식이 일반적으로 활용됩니다. 폴더 구조나 표 형태로 정리해도 무방합니다.",
    categories: ["evidenceOrganizing"],
  },
  {
    id: "evidence-org-03",
    order: 3,
    question: "증거가 부족하면 소송이 어려운가요?",
    answer:
      "증거가 부족한 상태에서도 상담을 시작할 수 있습니다. 상담을 통해 어떤 자료가 더 필요한지, 어떻게 확보할 수 있는지(사실조회, 문서송부촉탁 등) 함께 검토할 수 있습니다.",
    categories: ["evidenceOrganizing"],
  },
  {
    id: "evidence-org-04",
    order: 4,
    question: "오래된 자료도 증거로 쓸 수 있나요?",
    answer:
      "시간이 지났다고 해서 자동으로 활용할 수 없다고 단정할 수는 없습니다. 다만 오래된 자료일수록 원본 보존 상태와 신빙성 확인이 더 중요해질 수 있어, 가능한 한 빨리 정리해 두는 것이 안전합니다.",
    categories: ["evidenceOrganizing"],
  },
  {
    id: "evidence-org-05",
    order: 5,
    question: "증거를 변호사에게 어떻게 전달하면 좋을까요?",
    answer:
      "종류별로 정리한 자료를 파일이나 폴더 형태로 전달하면 검토가 수월합니다. 원본은 별도로 보관하고, 사본이나 캡처본을 전달하는 방식이 일반적으로 활용됩니다.",
    categories: ["evidenceOrganizing"],
  },
];
