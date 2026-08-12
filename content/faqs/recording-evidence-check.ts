import type { FaqItem } from "@/types/faq";

export const RECORDING_EVIDENCE_CHECK_FAQS: FaqItem[] = [
  {
    id: "recording-evidence-01",
    order: 1,
    question: "제가 참여한 통화를 녹음하면 문제가 되나요?",
    answer:
      "본인이 대화 당사자로 참여한 통화를 녹음하는 것은 일반적으로 상담에서 활용 가능한 자료로 검토되는 경우가 많다고 알려져 있습니다. 다만 구체적인 취급은 사안에 따라 달라질 수 있어 상담을 통해 확인하는 것이 정확합니다.",
    categories: ["recordingEvidenceCheck"],
  },
  {
    id: "recording-evidence-02",
    order: 2,
    question: "집에 몰래 녹음기를 설치해도 되나요?",
    answer:
      "본인이 참여하지 않는 대화를 몰래 녹음하는 것은 통신비밀보호법 등 관련 법률에 따라 위법 소지가 있다고 알려져 있어 신중해야 합니다. 구체적인 상황에 따라 판단이 달라질 수 있어 사전에 상담을 통해 확인하는 것이 안전합니다.",
    categories: ["recordingEvidenceCheck"],
  },
  {
    id: "recording-evidence-03",
    order: 3,
    question: "녹음 파일을 편집해서 제출해도 되나요?",
    answer:
      "편집된 파일은 신빙성 논란이 생길 수 있어 원본 그대로 제출하는 것이 안전합니다. 필요한 부분만 발췌해 설명하고 싶다면, 원본은 그대로 보존한 채 별도의 요약 자료를 함께 준비하는 방법이 검토될 수 있습니다.",
    categories: ["recordingEvidenceCheck"],
  },
  {
    id: "recording-evidence-04",
    order: 4,
    question: "녹음 파일이 잘 들리지 않으면 증거로 못 쓰나요?",
    answer:
      "음질이 좋지 않다고 해서 활용이 불가능하다고 단정할 수는 없습니다. 다만 내용을 명확히 확인하기 어려운 경우 증명력에 영향을 줄 수 있어, 가능하다면 녹취록을 함께 준비하는 방법이 검토될 수 있습니다.",
    categories: ["recordingEvidenceCheck"],
  },
  {
    id: "recording-evidence-05",
    order: 5,
    question: "녹취록은 직접 작성해도 되나요?",
    answer:
      "직접 작성할 수 있지만, 정확성이 중요합니다. 내용을 임의로 요약하거나 왜곡하지 않고 실제 발언을 그대로 옮기는 것이 신빙성을 유지하는 데 중요하며, 필요시 전문 업체의 녹취록 작성 서비스를 활용하는 방법도 있습니다.",
    categories: ["recordingEvidenceCheck"],
  },
];
