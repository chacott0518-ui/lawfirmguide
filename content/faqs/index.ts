import type { FaqItem } from "@/types/faq";

const ALL_FAQS: FaqItem[] = [
  {
    id: "main-01",
    order: 1,
    question: "이혼전문변호사를 찾기 전에 무엇을 먼저 정리해야 하나요?",
    answer:
      "이혼전문변호사를 찾기 전에는 협의이혼과 재판이혼 중 어떤 절차를 검토하는지, 자녀·재산·상간 관련 쟁점이 있는지를 먼저 정리하는 편이 도움이 됩니다. 사건마다 사실관계와 증거, 청구 범위가 다르므로 온라인 정보만으로 결과를 단정하기는 어렵습니다. 상담 전에는 질문 목록과 보유 자료를 준비해 두면 필요한 안내를 더 구체적으로 확인할 수 있습니다.",
    categories: ["home", "faq"],
    intent: "pre-consult checklist",
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-02",
    order: 2,
    question: "협의이혼과 재판이혼은 어떻게 다르게 보면 되나요?",
    answer:
      "협의이혼은 부부 합의와 서류·숙려기간을 중심으로 확인하고, 재판이혼은 쟁점과 소송 절차·비용을 중심으로 확인하는 편이 이해하기 쉽습니다. 어떤 경로가 적합한지는 합의 가능 여부와 사실관계에 따라 달라질 수 있습니다. 협의이혼절차와 이혼소송비용 페이지를 함께 보면 상담 전 질문을 정리하기 좋습니다.",
    categories: ["home", "faq"],
    related: ["./협의이혼절차", "./이혼소송비용"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-03",
    order: 3,
    question: "이혼소송비용은 왜 항목별로 나눠 보나요?",
    answer:
      "이혼소송비용은 변호사 보수, 인지액, 송달료와 부대비용이 섞여 있으면 총액만으로 비교하기 어렵기 때문입니다. 사건 유형과 진행 범위에 따라 포함·제외 항목이 달라질 수 있으므로 견적 설명에서 항목을 구분해 확인하는 편이 안전합니다. 자세한 구성은 이혼소송비용 페이지에서 확인할 수 있습니다.",
    categories: ["home", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-04",
    order: 4,
    question: "상간소송은 어떤 점을 먼저 확인해야 하나요?",
    answer:
      "상간소송에서는 청구 요건, 확보 가능한 증거, 절차와 대응 시 주의점을 먼저 확인하는 편이 좋습니다. 결과 보장 표현보다 증거와 절차 설명을 기준으로 보는 것이 안전하며, 불법적인 증거 수집은 피해야 합니다. 상간소송 변호사 페이지에서 확인 기준을 함께 참고할 수 있습니다.",
    categories: ["home", "faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-05",
    order: 5,
    question: "재산분할과 위자료는 같은 문제로 보면 되나요?",
    answer:
      "재산분할과 위자료는 목적과 판단 기준이 다를 수 있어 질문을 분리해 확인하는 편이 좋습니다. 재산 목록과 증빙 정리, 청구 취지를 각각 준비하면 상담에서 혼동을 줄일 수 있습니다. 이혼 재산분할 페이지에서 대상과 비율 확인 기준을 볼 수 있습니다.",
    categories: ["home", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-06",
    order: 6,
    question: "변호사 후기만 보고 선임해도 될까요?",
    answer:
      "후기만으로 선임하기보다 상담 설명, 비용 구성, 담당 변호사와 위임계약 내용을 직접 확인하는 편이 안전합니다. 결과 보장이나 검증되지 않은 수치 표현은 참고 범위를 좁혀 보는 것이 좋습니다. 후기 확인 기준 페이지를 함께 참고하면 질문 목록을 만들기 쉽습니다.",
    categories: ["home", "faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-07",
    order: 7,
    question: "사실혼도 이혼과 비슷한 쟁점이 생기나요?",
    answer:
      "사실혼은 혼인신고 여부 등으로 법적 취급이 달라질 수 있어, 재산·자녀 관련 쟁점을 일반 이혼과 동일하게 단정하기 어렵습니다. 생활 실태와 입증 자료를 기준으로 질문을 정리하는 편이 도움이 됩니다. 관련 질문은 이혼전문변호사 FAQ에서 주제별로 확인할 수 있습니다.",
    categories: ["home", "faq"],
    searchType: "longtail",
    updatedAt: "2026-07-31",
  },
  {
    id: "main-08",
    order: 8,
    question: "로펌가이드는 특정 로펌의 공식 사이트인가요?",
    answer:
      "아닙니다. 로펌가이드는 이혼 관련 절차·비용·쟁점 확인 기준을 안내하는 법률정보 사이트입니다. 특정 변호사와의 위임관계를 자동으로 형성하지 않으며, 실제 자문과 대응 방법은 개별 상담을 통해 확인해야 합니다. 사이트 정보는 일반적인 안내에 한정됩니다.",
    categories: ["home", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "cost-01",
    order: 11,
    question: "협의이혼절차에서 가장 먼저 확인할 것은 무엇인가요?",
    answer:
      "협의이혼절차에서는 이혼 의사와 자녀·재산 관련 합의 범위를 먼저 정리하는 편이 좋습니다. 합의가 불분명하면 이후 분쟁으로 이어질 수 있어 서류와 숙려기간 확인보다 합의 정리가 앞서는 경우가 많습니다. 개별 상황에 따라 필요한 서류와 일정이 달라질 수 있으므로 공식 안내와 상담을 함께 확인하세요.",
    categories: ["cost", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "cost-02",
    order: 12,
    question: "이혼서류는 어디서 확인하나요?",
    answer:
      "이혼서류는 관할 기관의 공식 안내와 신청 경로를 기준으로 확인하는 편이 안전합니다. 검색으로 보이는 목록만으로 모든 상황에 동일한 서류가 필요하다고 단정하기 어렵습니다. 자녀·합의 내용에 따라 추가 서류가 필요할 수 있으므로 본인 상황에 맞는 제출 항목을 확인하세요.",
    categories: ["cost", "faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "cost-03",
    order: 13,
    question: "숙려기간은 모든 협의이혼에 똑같이 적용되나요?",
    answer:
      "숙려기간의 적용 여부와 기간은 상황에 따라 달라질 수 있어 일률적으로 단정하기 어렵습니다. 본인 케이스에 어떤 안내가 적용되는지 공식 안내와 상담으로 확인하는 편이 정확합니다. 기간을 임의로 줄이거나 건너뛰는 표현은 실제 절차와 다를 수 있어 주의가 필요합니다.",
    categories: ["cost"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "cost-04",
    order: 14,
    question: "합의이혼과 협의이혼은 같은 말인가요?",
    answer:
      "일상적으로 비슷하게 쓰이지만, 실제로는 합의 범위와 절차 안내를 기준으로 확인하는 편이 정확합니다. 표현보다 필요한 서류와 합의 내용, 숙려기간 적용 여부가 더 중요합니다. 용어에만 의존하지 말고 신청 전 확인 항목을 목록으로 정리해 보세요.",
    categories: ["cost"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "recovery-01",
    order: 21,
    question: "이혼소송비용에는 어떤 항목이 들어가나요?",
    answer:
      "이혼소송비용은 일반적으로 변호사 보수, 인지액, 송달료와 부대비용을 나눠 확인합니다. 사건마다 구성이 달라질 수 있어 총액만으로 비교하기 어렵습니다. 상담에서는 포함·제외 항목과 추가 비용 발생 조건을 질문으로 정리하는 편이 도움이 됩니다.",
    categories: ["recovery", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "recovery-02",
    order: 22,
    question: "착수금과 성공보수는 어떻게 확인하나요?",
    answer:
      "착수금과 성공보수는 각 보수의 조건, 산정 방식, 포함 업무 범위를 구분해 확인합니다. 구두 설명과 계약 문서가 일치하는지도 함께 보는 편이 안전합니다. 조건이 불분명하면 서명 전에 차이를 확인하고 정산 방식을 문서로 남겨 두는 것이 좋습니다.",
    categories: ["recovery", "faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "recovery-03",
    order: 23,
    question: "이혼소송 기간은 얼마나 걸리나요?",
    answer:
      "이혼소송 기간은 쟁점과 진행 과정에 따라 달라질 수 있어 고정값으로 단정하기 어렵습니다. 상담에서는 예상 단계와 변수 요인을 확인하는 편이 현실적입니다. 특정 기간을 보장하는 표현보다 절차 흐름과 준비 자료를 기준으로 질문을 준비하세요.",
    categories: ["recovery"],
    searchType: "short",
    urgency: "medium",
    updatedAt: "2026-07-31",
  },
  {
    id: "recovery-04",
    order: 24,
    question: "부대비용은 언제 생기나요?",
    answer:
      "부대비용은 감정, 번역, 출장, 추가 서면처럼 사건 진행 중 별도 필요가 생길 때 발생할 수 있습니다. 발생 가능 항목과 사전 안내·동의 절차를 미리 물어보면 예상치 못한 부담을 줄이는 데 도움이 됩니다. 실제 발생 여부는 사건 진행에 따라 달라질 수 있습니다.",
    categories: ["recovery"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "caution-01",
    order: 31,
    question: "상간소송은 어떤 증거를 준비해야 하나요?",
    answer:
      "상간소송에서는 쟁점과 연결되는 자료를 목록화하고, 확보 경위가 적법한지 함께 확인합니다. 불법적인 수집 방식은 피해야 하며, 증거만으로 결과를 보장한다고 보기 어렵습니다. 상담에서는 보유 자료의 종류와 한계, 추가로 필요한 부분을 구분해 설명받는 편이 좋습니다.",
    categories: ["precautions", "faq"],
    searchType: "conversational",
    urgency: "high",
    updatedAt: "2026-07-31",
  },
  {
    id: "caution-02",
    order: 32,
    question: "상간녀소송과 상간남소송은 다르게 보나요?",
    answer:
      "표현은 달라도 핵심은 사실관계, 요건, 증거와 절차 확인입니다. 성별 표현보다 쟁점 정리와 입증 자료가 우선입니다. 온라인 표현에만 의존하지 말고 본인 사건의 청구 취지와 증거를 기준으로 확인하세요.",
    categories: ["precautions", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "caution-03",
    order: 33,
    question: "위자료는 재산분할과 함께 청구하나요?",
    answer:
      "사건의 쟁점에 따라 위자료와 재산분할이 함께 논의될 수 있지만, 목적과 판단 기준이 다를 수 있습니다. 질문을 분리해 확인하면 상담에서 혼동을 줄일 수 있습니다. 개별 청구 가능 여부는 사실관계와 증거에 따라 달라질 수 있습니다.",
    categories: ["precautions"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "caution-04",
    order: 34,
    question: "상간소송에서 결과를 보장받을 수 있나요?",
    answer:
      "개별 사건의 결과는 사실관계와 증거, 절차 진행에 따라 달라질 수 있어 보장을 단정하기 어렵습니다. 결과 보장 표현보다 요건·증거·위험 요소 설명을 확인하는 편이 안전합니다. 상담에서는 예상 쟁점과 대응 시 주의점을 중심으로 질문을 준비하세요.",
    categories: ["precautions"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "hospital-01",
    order: 41,
    question: "재산분할 대상에는 무엇이 들어가나요?",
    answer:
      "재산분할 대상은 혼인 중 형성·유지된 부부 공동재산으로 볼 수 있는 범위를 중심으로 확인합니다. 명의와 실제 기여가 다를 수 있어 부동산·금융자산·사업체 등을 항목별로 목록화하는 편이 도움이 됩니다. 개별 포함 여부는 형성 경위와 증빙에 따라 달라질 수 있습니다.",
    categories: ["hospital", "faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "hospital-02",
    order: 42,
    question: "특유재산과 채무는 어떻게 구분하나요?",
    answer:
      "특유재산은 혼인 전 재산·상속·증여 등이 쟁점이 될 수 있고, 채무는 공동 채무와 개인 채무를 구분해 확인합니다. 형성 경위와 사용 목적, 증빙 자료가 중요합니다. 같은 명칭의 자산·채무라도 사건마다 설명이 달라질 수 있으므로 목록과 서류를 함께 준비하세요.",
    categories: ["hospital", "faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "hospital-03",
    order: 43,
    question: "재산분할 비율은 정해져 있나요?",
    answer:
      "재산분할 비율은 고정 비율을 일반 규칙처럼 단정하기 어렵고, 기여도와 혼인 기간 등 여러 요소가 함께 설명되는 경우가 많습니다. 본인 사건에서 중요하게 보는 요소를 상담에서 확인하는 편이 정확합니다. 특정 비율을 보장하는 표현은 참고 범위를 좁혀 보세요.",
    categories: ["hospital"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "hospital-04",
    order: 44,
    question: "이혼사유가 있으면 재산분할이 유리해지나요?",
    answer:
      "이혼사유·유책배우자 쟁점은 재산분할과 구분될 수 있는 쟁점입니다. 사유만으로 비율이 자동 결정된다고 단정하기 어렵습니다. 재산 목록 정리와 이혼사유 관련 질문은 분리해 확인하는 편이 상담에 도움이 됩니다.",
    categories: ["hospital"],
    searchType: "longtail",
    updatedAt: "2026-07-31",
  },
  {
    id: "review-01",
    order: 51,
    question: "이혼변호사 후기에서 가장 먼저 볼 것은 무엇인가요?",
    answer:
      "이혼변호사 후기에서는 상담 설명의 구체성, 비용 안내, 진행 보고 방식처럼 검증 가능한 내용을 먼저 확인하세요. 결과 보장 표현은 참고 범위를 좁혀 보는 편이 안전합니다. 후기는 선임 결정을 대신하지 않으므로 직접 질문 목록을 함께 준비하는 것이 좋습니다.",
    categories: ["reviews"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "review-02",
    order: 52,
    question: "후기에 나온 사건 수나 승소율을 믿어도 되나요?",
    answer:
      "검증되지 않은 수치나 승소율은 그대로 신뢰하기 어렵습니다. 이 사이트는 가짜 후기·별점·승소 사례를 만들지 않으며, 직접 확인 가능한 설명을 우선하도록 안내합니다. 수치보다 담당 변호사, 업무 범위, 비용 구성을 확인하는 편이 실질적입니다.",
    categories: ["reviews"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "review-03",
    order: 53,
    question: "선임 전 꼭 물어봐야 할 질문은 무엇인가요?",
    answer:
      "선임 전에는 담당 변호사, 업무 범위, 보수와 부대비용, 진행 보고 방식, 추가 비용 조건을 확인하세요. 후기에서 좋게 읽힌 내용이 본인 사건에 그대로 적용된다고 보기 어렵습니다. 구두 설명과 위임계약 문서가 일치하는지도 함께 점검하는 편이 안전합니다.",
    categories: ["reviews"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "review-04",
    order: 54,
    question: "위임계약에서 놓치기 쉬운 점은 무엇인가요?",
    answer:
      "위임계약에서는 포함·제외 업무, 정산 방식, 해지 조건, 추가 비용 사전 안내를 문서에서 확인하는 편이 좋습니다. 구두 설명과 문서가 다르면 서명 전에 차이를 확인하세요. 담당 변호사와 연락 창구가 명확한지도 함께 보는 것이 도움이 됩니다.",
    categories: ["reviews"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-agree-01",
    order: 61,
    question: "협의이혼은 얼마나 걸리나요?",
    answer:
      "협의이혼에 걸리는 시간은 숙려기간과 서류 준비, 확인 절차에 따라 달라질 수 있어 고정 기간으로 단정하기 어렵습니다. 본인 상황에 적용되는 일정은 공식 안내에서 확인하는 편이 정확합니다. 기간을 보장하는 표현보다 준비 서류와 합의 정리를 우선하세요.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-agree-02",
    order: 62,
    question: "이혼서류는 꼭 변호사가 작성해야 하나요?",
    answer:
      "모든 경우에 변호사 작성이 필수라고 단정하기는 어렵습니다. 다만 합의 내용이 복잡하거나 쟁점이 있으면 상담을 통해 확인하는 편이 안전할 수 있습니다. 서류 오류나 합의 누락이 이후 분쟁으로 이어질 수 있으므로 본인 상황에 맞는 작성·검토 방법을 확인하세요.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-litigation-01",
    order: 63,
    question: "재판이혼은 언제 검토하나요?",
    answer:
      "재판이혼은 합의가 어렵거나 쟁점이 커 협의이혼으로 정리하기 어려운 경우 등에서 검토될 수 있습니다. 적합 여부는 사실관계와 증거, 당사자 의사에 따라 달라질 수 있습니다. 상담에서는 협의와 소송의 차이를 절차·비용 기준으로 비교해 보는 편이 도움이 됩니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-litigation-02",
    order: 64,
    question: "소송 중에도 합의가 가능한가요?",
    answer:
      "사건 진행 중에도 합의 가능성이 있을 수 있으나, 시점과 조건은 개별 상황에 따라 다릅니다. 합의가 가능한지 여부만으로 결과를 단정하기는 어렵습니다. 상담에서 가능한 선택지와 필요한 자료를 확인하는 편이 현실적입니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-affair-01",
    order: 65,
    question: "상간소송만 따로 진행할 수 있나요?",
    answer:
      "사건의 구조에 따라 별도 청구가 논의될 수 있지만, 이혼·재산분할 쟁점과 어떻게 연결되는지는 사실관계에 따라 달라질 수 있습니다. 온라인 정보만으로 별도 진행 여부를 단정하기는 어렵습니다. 상담에서는 청구 취지와 증거, 관련 절차를 함께 확인하세요.",
    categories: ["faq"],
    searchType: "longtail",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-affair-02",
    order: 66,
    question: "위자료 액수는 정해져 있나요?",
    answer:
      "위자료 액수는 일반 정보만으로 특정 금액을 단정하기 어렵습니다. 사실관계와 손해, 증거에 따라 설명이 달라질 수 있습니다. 고정 금액을 보장하는 표현보다 청구 취지와 입증 자료를 기준으로 확인하는 편이 안전합니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-property-01",
    order: 67,
    question: "재산분할 청구는 언제까지 해야 하나요?",
    answer:
      "재산분할 청구 가능 기간은 관련 법령과 상황에 따라 달라질 수 있어, 일반 문구로 단정하지 않는 편이 안전합니다. 개별 일정은 상담과 공식 안내에서 확인하세요. 기간을 임의로 해석하기보다 사실관계와 자료를 먼저 정리해 두는 것이 도움이 됩니다.",
    categories: ["faq"],
    searchType: "short",
    urgency: "high",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-property-02",
    order: 68,
    question: "배우자의 빚도 나눠야 하나요?",
    answer:
      "배우자의 채무는 성격과 사용 목적, 공동성 여부에 따라 설명이 달라질 수 있습니다. 개인 채무와 공동 채무를 구분해 확인하는 편이 중요합니다. 채무 목록과 관련 증빙을 정리해 두면 상담에서 더 구체적인 안내를 받을 수 있습니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-custody-01",
    order: 69,
    question: "양육비는 어떻게 정하나요?",
    answer:
      "양육비는 자녀의 필요와 부모의 경제 여건 등 여러 요소가 함께 고려될 수 있습니다. 고정 금액을 일반 규칙처럼 단정하기 어렵습니다. 상담에서는 자녀 상황과 수입·지출 자료를 기준으로 질문을 준비하는 편이 도움이 됩니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-custody-02",
    order: 70,
    question: "친권과 양육권은 같은 말인가요?",
    answer:
      "친권과 양육은 관련되지만 의미가 다를 수 있어, 상담에서 용어와 결정 내용을 구분해 확인하는 편이 좋습니다. 온라인에서 혼용되는 표현만으로 권리 내용을 단정하기 어렵습니다. 자녀 관련 합의나 청구 취지를 정리해 두면 설명이 더 명확해질 수 있습니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-custody-03",
    order: 71,
    question: "사실혼 기준은 무엇인가요?",
    answer:
      "사실혼은 혼인신고 없이도 혼인에 준하는 생활 실태가 문제 될 수 있으나, 인정 여부는 개별 사정과 입증에 따라 달라질 수 있습니다. 일반 정보만으로 단정하기 어렵습니다. 생활 실태와 관련 자료를 기준으로 질문을 정리한 뒤 상담에서 확인하는 편이 안전합니다.",
    categories: ["faq"],
    searchType: "longtail",
    updatedAt: "2026-07-31",
  },
  {
    id: "faq-custody-04",
    order: 72,
    question: "양육비 지급이 어려우면 어떻게 하나요?",
    answer:
      "양육비 지급이 어려운 경우의 대응은 사정 변경과 절차적 가능성에 따라 사건마다 다를 수 있습니다. 임의로 지급을 중단하기보다 관련 절차와 상담을 통해 확인하는 편이 안전합니다. 수입·지출 변화와 관련 자료를 정리해 두면 상담에서 필요한 안내를 받기 쉽습니다.",
    categories: ["faq"],
    searchType: "conversational",
    urgency: "high",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-01",
    order: 81,
    question: "이혼전문변호사는 어떤 기준으로 확인해야 하나요?",
    answer:
      "이혼전문변호사인지 확인할 때는 이혼·가사 사건 처리 경험, 상담에서 설명하는 절차의 구체성, 비용 구성을 설명하는 방식을 함께 살펴보는 편이 도움이 됩니다. 특정 순위나 결과를 단정하는 표현보다 질문에 대한 답변이 명확한지를 기준으로 보는 것이 안전합니다. 여러 곳에서 상담을 받아본 뒤 비교하는 것도 판단에 도움이 될 수 있습니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-02",
    order: 82,
    question: "첫 상담 전에 어떤 자료를 준비하면 좋나요?",
    answer:
      "첫 상담 전에는 혼인관계증명서 등 기본 서류와 함께, 쟁점과 관련된 자료(재산 목록, 대화 내역, 사실관계 정리 메모 등)를 미리 정리해두면 상담 시간을 효율적으로 활용할 수 있습니다. 어떤 자료가 실제로 필요한지는 사건 성격에 따라 달라질 수 있으므로, 상담 전 문의를 통해 필요한 자료를 먼저 확인하는 것도 방법입니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-03",
    order: 83,
    question: "상담할 때 어떤 질문을 해야 하나요?",
    answer:
      "상담에서는 진행 가능한 절차의 종류, 예상되는 쟁점, 비용 구성과 추가 비용 발생 조건, 예상 기간에 영향을 주는 변수 요인 등을 질문하는 편이 좋습니다. 담당 변호사가 실제로 사건을 진행하는지, 진행 상황을 어떤 방식으로 공유받을 수 있는지도 함께 확인해두면 이후 오해를 줄일 수 있습니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-04",
    order: 84,
    question: "변호사 비용은 어떤 항목을 확인해야 하나요?",
    answer:
      "변호사 비용은 착수금과 성공보수, 인지액·송달료 같은 소송 실비, 감정·번역 등 부대비용이 발생할 수 있는지를 구분해서 확인하는 편이 좋습니다. 총액만 안내받기보다 각 항목이 포함하는 업무 범위와 추가 비용이 발생하는 조건을 구체적으로 질문하는 것이 이후 오해를 줄이는 데 도움이 됩니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-05",
    order: 85,
    question: "상담 내용만으로 결과를 미리 알 수 있나요?",
    answer:
      "상담은 절차와 쟁점을 안내받는 과정이며, 상담 내용만으로 사건의 최종 결과를 미리 확정할 수는 없습니다. 실제 결과는 사실관계, 증거, 상대방의 대응, 재판 진행 상황 등 여러 요소에 따라 달라질 수 있습니다. 특정 결과를 단정하거나 보장하는 설명은 신중하게 받아들이는 것이 안전합니다.",
    categories: ["faq"],
    searchType: "conversational",
    urgency: "medium",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-06",
    order: 86,
    question: "위임계약 전에 어떤 내용을 확인해야 하나요?",
    answer:
      "위임계약 전에는 업무 범위, 보수 산정 방식과 정산 조건, 계약 해지 시 처리 방법, 담당 변호사와 연락 창구를 문서로 확인하는 것이 좋습니다. 구두로 설명받은 내용과 계약서 내용이 다르면 서명 전에 반드시 그 차이를 확인해야 합니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-07",
    order: 87,
    question: "후기나 광고에서 결과를 보장하는 표현은 어떻게 봐야 하나요?",
    answer:
      "승소를 보장하거나 특정 결과를 단정하는 표현, 검증되지 않은 사건 수·순위 표현은 참고 범위를 보수적으로 두는 편이 안전합니다. 이런 표현이 있다고 해서 상담 자체가 무의미한 것은 아니지만, 실제 판단은 상담에서 확인한 절차 설명과 비용 안내를 기준으로 하는 것이 좋습니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-08",
    order: 88,
    question: "담당 변호사와 실제 사건 진행 담당자가 같은지 확인해야 하나요?",
    answer:
      "네, 상담을 진행한 변호사와 실제로 사건을 담당하는 변호사가 같은지 확인해두는 것이 좋습니다. 사무실 구조에 따라 상담과 실제 진행 담당자가 다를 수 있으므로, 계약 전에 담당자를 명확히 확인하면 이후 소통 과정에서 혼선을 줄일 수 있습니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-09",
    order: 89,
    question: "사건 진행 중 연락과 진행 상황은 어떻게 확인하면 좋나요?",
    answer:
      "사건 진행 중에는 주요 기일이나 서류 제출 등 진행 상황을 어떤 주기와 방식으로 공유받을 수 있는지 계약 전에 확인해두는 것이 좋습니다. 연락이 원활한지, 질문에 대한 답변이 구체적인지도 진행 과정에서 함께 살펴볼 수 있는 부분입니다.",
    categories: ["faq"],
    searchType: "conversational",
    updatedAt: "2026-07-31",
  },
  {
    id: "counsel-10",
    order: 90,
    question: "협의이혼과 소송 중 어떤 절차가 필요한지는 어떻게 판단하나요?",
    answer:
      "협의이혼과 재판이혼(소송) 중 어떤 절차가 필요한지는 부부간 합의 가능 여부와 쟁점의 크기에 따라 달라질 수 있어 일반적으로 단정하기 어렵습니다. 합의가 가능한 부분과 다투어지는 부분을 먼저 정리한 뒤, 상담을 통해 본인 사안에 맞는 절차를 확인하는 것이 도움이 됩니다.",
    categories: ["faq"],
    searchType: "short",
    updatedAt: "2026-07-31",
  },
];

export function getAllFaqs(): FaqItem[] {
  return ALL_FAQS;
}

export function getFaqsByIds(ids: string[]): FaqItem[] {
  const map = new Map(ALL_FAQS.map((item) => [item.id, item]));
  return ids
    .map((id) => map.get(id))
    .filter((item): item is FaqItem => Boolean(item));
}

export function getFaqsByCategory(category: string): FaqItem[] {
  return ALL_FAQS.filter((item) => item.categories.includes(category));
}
