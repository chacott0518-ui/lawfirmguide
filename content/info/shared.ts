import type { OfficialSource } from "@/types/content";

/** 신규 법률정보 글 공통 공식 출처 (본문 참고용, 보증·추천 아님) */
export const INFO_GUIDE_OFFICIAL_SOURCES: OfficialSource[] = [
  {
    name: "국가법령정보센터",
    title: "민법 제837조",
    url: "https://www.law.go.kr/",
    note: "이혼 후 양육에 관한 사항의 결정 기준을 확인하는 법령 조문",
  },
  {
    name: "국가법령정보센터",
    title: "민법 제839조의2",
    url: "https://www.law.go.kr/",
    note: "재산분할청구권과 이혼한 날부터 2년의 행사기간을 확인하는 법령 조문",
  },
  {
    name: "국가법령정보센터",
    title: "민법 제840조",
    url: "https://www.law.go.kr/",
    note: "재판상 이혼 원인을 열거한 법령 조문",
  },
  {
    name: "대한민국 법원 전자민원센터",
    title: "협의이혼절차",
    url: "https://www.scourt.go.kr/nm/min_3/min_3_2/min_3_2_1/index.html",
  },
  {
    name: "대한민국 법원",
    title: "재판상 이혼절차 안내",
    url: "https://jifi.scourt.go.kr/foreigner/ko/html/proceedings/family/divorcetrial_tab01.html",
  },
];

/** 신규 법률정보 가이드 최초 발행일 */
export const INFO_GUIDE_PUBLISHED_AT = "2026-08-10";

/** 2차 확장 InfoGuide 30개 최초 발행일 */
export const INFO_GUIDE_V2_PUBLISHED_AT = "2026-08-12";
