import type { FaqItem } from "@/types/faq";

export const CONSULT_PREP_FAQS: FaqItem[] = [
  {
    id: "consult-prep-01",
    order: 1,
    question: "이혼 상담 전에 재산 목록을 모두 알아야 하나요?",
    answer:
      "처음부터 모든 재산을 완벽하게 파악해야 상담이 가능한 것은 아닙니다. 다만 부동산, 예금, 보험, 금융자산, 차량, 사업 관련 재산, 퇴직급여 관련 자료, 대출과 기타 채무처럼 알고 있는 항목을 목록으로 정리해 두면 상담에서 확인할 쟁점을 더 구체적으로 좁힐 수 있습니다.\n\n명의와 실제 형성·유지 과정이 다를 수 있으므로, 현재 파악한 내용과 확인이 더 필요한 부분을 구분해 적어두면 도움이 됩니다. 자료가 부족한 항목이 있더라도 그 사실 자체를 상담에서 알리는 편이 이후 준비 방향을 잡는 데 유용할 수 있습니다.",
    categories: ["consultPrep"],
    intent: "property list before consult",
    searchType: "conversational",
    updatedAt: "2026-08-10",
  },
  {
    id: "consult-prep-02",
    order: 2,
    question: "배우자 명의 재산도 확인 대상이 될 수 있나요?",
    answer:
      "명의만으로 분할 대상 여부를 단정하기는 어렵습니다. 혼인 중 부부가 협력하여 형성·유지한 재산인지, 특유재산으로 볼 여지가 있는지 등은 사실관계와 증빙에 따라 달라질 수 있습니다.\n\n민법 제839조의2는 협의상 이혼한 자의 일방이 다른 일방에 대하여 재산분할을 청구할 수 있도록 규정하고, 협의가 되지 않거나 협의할 수 없는 때에는 가정법원이 당사자 쌍방의 협력으로 이룩한 재산의 액수와 그 밖의 사정을 참작하여 분할의 액수와 방법을 정할 수 있다고 정합니다. 개별 재산이 대상에 해당하는지는 상담과 필요한 확인 절차를 통해 검토하는 것이 안전합니다.",
    categories: ["consultPrep"],
    intent: "spouse-named assets",
    searchType: "conversational",
    updatedAt: "2026-08-10",
  },
  {
    id: "consult-prep-03",
    order: 3,
    question: "위자료와 재산분할은 같은 청구인가요?",
    answer:
      "위자료와 재산분할은 목적과 판단 기준이 다를 수 있어 같은 청구로 보기 어렵습니다. 재산분할은 혼인 중 형성된 재산의 청산·분배에 초점을 두는 반면, 위자료는 혼인관계 파탄과 관련된 정신적 손해의 배상을 구하는 성격으로 이해하는 경우가 많습니다.\n\n상담 전에는 주장하려는 사실의 시기와 경위, 보유 자료를 사실과 추측으로 구분해 정리하는 편이 도움이 됩니다. 두 쟁점을 한꺼번에 묻기보다 질문을 분리해 두면 설명이 더 명확해질 수 있습니다.",
    categories: ["consultPrep"],
    intent: "alimony vs property division",
    searchType: "short",
    updatedAt: "2026-08-10",
  },
  {
    id: "consult-prep-04",
    order: 4,
    question: "미성년 자녀가 있다면 어떤 사항을 정해야 하나요?",
    answer:
      "미성년 자녀가 있는 경우에는 친권·양육자, 양육비, 면접교섭과 같은 양육 관련 사항을 함께 확인하는 경우가 많습니다. 민법 제837조는 이혼 후 양육에 관한 사항을 정할 때 자녀의 복리를 우선적으로 고려하도록 하는 취지를 담고 있습니다.\n\n현재 양육 상황, 학교·보육 환경, 부모의 생활 여건 등을 정리해 두면 상담에서 확인할 질문이 구체화됩니다. 성별이나 소득 하나만으로 결과가 정해진다고 단정하지 않는 편이 안전합니다.",
    categories: ["consultPrep"],
    intent: "minor children issues",
    searchType: "conversational",
    updatedAt: "2026-08-10",
  },
  {
    id: "consult-prep-05",
    order: 5,
    question: "상대방과 먼저 합의해야 상담할 수 있나요?",
    answer:
      "상대방과 먼저 합의해야만 상담할 수 있는 것은 아닙니다. 합의가 가능한 부분과 다투어지는 부분을 구분해 두면, 협의이혼 절차와 재판상 이혼 절차 중 어떤 흐름을 검토할지 상담에서 더 구체적으로 확인할 수 있습니다.\n\n이미 진행한 협의·조정·소송이 있다면 그 단계와 제출·수령한 서류를 함께 정리해 두는 편이 좋습니다. 합의 여부는 상담의 전제조건이라기보다, 이후 절차를 가늠하는 참고 정보에 가깝습니다.",
    categories: ["consultPrep"],
    intent: "agreement before consult",
    searchType: "conversational",
    updatedAt: "2026-08-10",
  },
  {
    id: "consult-prep-06",
    order: 6,
    question: "자료가 충분하지 않아도 상담할 수 있나요?",
    answer:
      "자료가 충분하지 않아도 상담 자체를 시작할 수는 있는 경우가 많습니다. 오히려 현재 보유 자료와 부족한 항목을 구분해 제시하면, 추가로 어떤 확인이 필요한지 정리하는 데 도움이 될 수 있습니다.\n\n준비한 자료만으로 법률 결과나 승패가 정해진다고 보기 어렵습니다. 상담에서는 사실관계 파악, 쟁점 정리, 절차 선택과 비용 구성 확인처럼 다음 단계를 위한 질문을 중심으로 준비하는 편이 안전합니다.",
    categories: ["consultPrep"],
    intent: "incomplete documents",
    searchType: "conversational",
    updatedAt: "2026-08-10",
  },
];
