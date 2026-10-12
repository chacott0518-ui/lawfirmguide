import type { ClayAccent, HomeCardId } from "@/types/content";

export type MenuItemConfig = {
  id: HomeCardId | "home" | "infoHub";
  order: number;
  numberLabel: string;
  title: string;
  description: string;
  iconKey: HomeCardId | "home";
  accent: ClayAccent;
  href?: string;
};

/**
 * 신규 키워드 사이트 복제 시 이 설정과 content/pages·faqs만 교체하면 된다.
 */
export const topicConfig = {
  siteName: "로펌가이드",
  primaryKeyword: "이혼전문변호사",
  /** Footer·SEO 등 브랜드명 */
  logoText: "로펌가이드",
  /** PC·모바일 헤더 화면 로고 문구 */
  headerLogoText: "이혼전문변호사",
  defaultCategory: "이혼 법률정보",
  operatorName: "로펌가이드",
  locale: "ko-KR",
  language: "ko",
  theme: {
    accents: {
      cost: "neutral" as ClayAccent,
      recovery: "neutral" as ClayAccent,
      precautions: "neutral" as ClayAccent,
      hospital: "neutral" as ClayAccent,
      reviews: "neutral" as ClayAccent,
      custodyConsultCheck: "neutral" as ClayAccent,
      faq: "neutral" as ClayAccent,
    },
  },
  menuItems: [
    {
      id: "home",
      order: 0,
      numberLabel: "00",
      title: "이혼전문변호사",
      description: "이혼 절차·비용·재산분할 정보 홈",
      iconKey: "home",
      accent: "neutral",
      href: "/",
    },
    {
      id: "faq",
      order: 1,
      numberLabel: "01",
      title: "이혼 상담 전 확인사항",
      description: "상담·비용·선임 전 확인할 질문 정리",
      iconKey: "faq",
      accent: "neutral",
    },
    {
      id: "cost",
      order: 2,
      numberLabel: "02",
      title: "이혼 절차와 준비서류",
      description: "신청 전 서류·합의·숙려기간 확인",
      iconKey: "cost",
      accent: "neutral",
    },
    {
      id: "hospital",
      order: 3,
      numberLabel: "03",
      title: "재산분할 판단 기준",
      description: "대상 재산·기여도·채무 확인 기준",
      iconKey: "hospital",
      accent: "neutral",
    },
    {
      id: "custodyConsultCheck",
      order: 4,
      numberLabel: "04",
      title: "양육권·친권 판단 기준",
      description: "친권·양육자 지정 전 확인사항",
      iconKey: "custodyConsultCheck",
      accent: "neutral",
    },
    {
      id: "precautions",
      order: 5,
      numberLabel: "05",
      title: "위자료·상간 쟁점",
      description: "청구 요건·증거·절차 확인 기준",
      iconKey: "precautions",
      accent: "neutral",
    },
    {
      id: "recovery",
      order: 6,
      numberLabel: "06",
      title: "이혼 소송 전 체크리스트",
      description: "보수·인지액·송달료와 부대비용 확인",
      iconKey: "recovery",
      accent: "neutral",
    },
    {
      id: "infoHub",
      order: 7,
      numberLabel: "07",
      title: "법률정보",
      description: "상담·절차·재산·양육·증거 주제별 법률정보 가이드",
      iconKey: "faq",
      accent: "neutral",
      href: "/법률정보",
    },
  ] satisfies MenuItemConfig[],
  keywordMap: {
    home: ["이혼전문변호사", "협의이혼절차", "이혼소송비용", "재산분할"],
    cost: ["협의이혼절차", "이혼서류", "합의이혼", "이혼절차"],
    recovery: ["이혼소송비용", "재판이혼비용", "이혼소송절차"],
    precautions: ["상간녀소송변호사", "상간자소송", "상간남소송", "상간소송"],
    hospital: ["이혼소송 재산분할", "재산분할", "위자료", "이혼사유"],
    reviews: ["이혼전문변호사 후기", "이혼변호사 후기", "변호사 선임 기준"],
    custodyConsultCheck: ["양육권", "친권", "양육자 지정", "자녀 복리"],
    faq: ["이혼 FAQ", "양육비", "친권", "사실혼 기준"],
    faqHub: ["이혼 FAQ", "협의이혼절차", "이혼소송비용"],
  },
} as const;
