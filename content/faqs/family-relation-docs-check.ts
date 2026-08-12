import type { FaqItem } from "@/types/faq";

export const FAMILY_RELATION_DOCS_CHECK_FAQS: FaqItem[] = [
  {
    id: "family-docs-01",
    order: 1,
    question: "가족관계증명서는 온라인으로 발급받을 수 있나요?",
    answer:
      "대법원 전자가족관계등록시스템을 통해 온라인으로 발급받을 수 있는 경우가 많다고 알려져 있습니다. 본인 인증 수단이 필요할 수 있으며, 정확한 이용 방법은 해당 시스템의 안내를 확인하는 것이 좋습니다.",
    categories: ["familyRelationDocsCheck"],
  },
  {
    id: "family-docs-02",
    order: 2,
    question: "혼인관계증명서와 가족관계증명서는 어떻게 다른가요?",
    answer:
      "가족관계증명서는 부모·배우자·자녀 등 가족관계를 보여주는 서류이고, 혼인관계증명서는 혼인·이혼 이력을 확인할 수 있는 서류로 구분되는 경우가 많다고 알려져 있습니다. 필요한 절차에 따라 요구되는 서류가 다를 수 있습니다.",
    categories: ["familyRelationDocsCheck"],
  },
  {
    id: "family-docs-03",
    order: 3,
    question: "서류에 유효기간이 있나요?",
    answer:
      "일부 절차에서는 최근 발급본(예: 발급일로부터 일정 기간 이내)을 요구하는 경우가 있다고 알려져 있습니다. 정확한 기준은 제출하는 기관이나 절차에 따라 다를 수 있어 미리 확인하는 것이 안전합니다.",
    categories: ["familyRelationDocsCheck"],
  },
  {
    id: "family-docs-04",
    order: 4,
    question: "대리인이 서류를 발급받을 수 있나요?",
    answer:
      "위임장 등 필요한 서류를 갖추면 대리 발급이 가능한 경우가 있다고 알려져 있습니다. 구체적인 요건은 발급 기관과 서류 종류에 따라 다를 수 있어 사전에 확인하는 것이 좋습니다.",
    categories: ["familyRelationDocsCheck"],
  },
  {
    id: "family-docs-05",
    order: 5,
    question: "서류 발급 비용은 얼마나 드나요?",
    answer:
      "발급 방법과 서류 종류에 따라 수수료가 다를 수 있습니다. 온라인 발급이 무료이거나 저렴한 경우가 있다고 알려져 있으나, 정확한 비용은 발급 시점에 해당 기관을 통해 확인하는 것이 정확합니다.",
    categories: ["familyRelationDocsCheck"],
  },
];
