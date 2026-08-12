import type { FaqItem } from "@/types/faq";

export const AFFAIR_EVIDENCE_CAUTION_FAQS: FaqItem[] = [
  {
    id: "affair-evidence-01",
    order: 1,
    question: "배우자 휴대폰을 몰래 봐서 얻은 사진도 증거가 되나요?",
    answer:
      "확보 방법의 적법성에 따라 증거로서의 취급이 달라질 수 있는 사안입니다. 타인의 기기에 무단으로 접근하는 것은 위법할 수 있어, 이런 방법으로 확보한 자료를 활용하기 전에 반드시 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["affairEvidenceCaution"],
  },
  {
    id: "affair-evidence-02",
    order: 2,
    question: "탐정을 고용해 미행해도 되나요?",
    answer:
      "탐정업 이용은 법률상 제한이 있을 수 있는 영역으로 알려져 있으며, 방법에 따라 위법 소지가 있을 수 있습니다. 구체적인 적법성은 방식과 상황에 따라 다를 수 있어, 이 글에서 개별 판단을 하지 않으며 신중한 검토가 필요합니다.",
    categories: ["affairEvidenceCaution"],
  },
  {
    id: "affair-evidence-03",
    order: 3,
    question: "위법하게 얻은 증거는 아예 사용할 수 없나요?",
    answer:
      "일률적으로 단정하기는 어렵습니다. 다만 위법하게 확보한 자료는 절차상 불리하게 작용할 수 있고, 확보 과정 자체가 별도의 법적 문제로 이어질 수 있어 신중하게 접근해야 합니다. 구체적인 판단은 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["affairEvidenceCaution"],
  },
  {
    id: "affair-evidence-04",
    order: 4,
    question: "이미 위법하게 자료를 확보했다면 어떻게 하나요?",
    answer:
      "숨기지 말고 그 사실을 상담에서 알리는 것이 중요합니다. 확보 경위를 정확히 전달해야 이후 대응 방향을 함께 검토할 수 있습니다. 앞으로는 적법한 방법으로만 자료를 확보하는 것이 안전합니다.",
    categories: ["affairEvidenceCaution"],
  },
  {
    id: "affair-evidence-05",
    order: 5,
    question: "자료를 캡처만 해도 문제가 되나요?",
    answer:
      "본인이 정당하게 접근할 수 있는 대화나 정보를 캡처하는 것은 일반적으로 문제되지 않는 경우가 많다고 알려져 있습니다. 다만 캡처한 자료를 활용하는 방식(유포 등)에 따라 별도 문제가 생길 수 있어 신중해야 합니다.",
    categories: ["affairEvidenceCaution"],
  },
];
