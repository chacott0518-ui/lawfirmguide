import type { OfficialSource } from "@/types/content";

/** 공식 기관 메인 — 세부 문서 URL을 추측하지 않는다. */
export const OFFICIAL_SOURCE = {
  law: {
    name: "국가법령정보센터",
    url: "https://www.law.go.kr/",
  },
  court: {
    name: "대한민국 법원",
    url: "https://www.scourt.go.kr/",
  },
  glaw: {
    name: "대법원 종합법률정보",
    url: "https://glaw.scourt.go.kr/",
  },
  klac: {
    name: "대한법률구조공단",
    url: "https://www.klac.or.kr/",
  },
  gov24: {
    name: "정부24",
    url: "https://www.gov.kr/",
  },
  koreanBar: {
    name: "대한변호사협회",
    url: "https://www.koreanbar.or.kr/",
  },
  moj: {
    name: "법무부",
    url: "https://www.moj.go.kr/",
  },
} as const satisfies Record<string, OfficialSource>;

export const HOME_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.law,
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.klac,
  OFFICIAL_SOURCE.koreanBar,
];

export const COST_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.law,
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.gov24,
];

export const RECOVERY_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.klac,
];

export const CAUTION_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.law,
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.glaw,
];

export const HOSPITAL_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.law,
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.glaw,
];

export const REVIEW_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.koreanBar,
  OFFICIAL_SOURCE.klac,
];

export const FAQ_OFFICIAL_SOURCES: OfficialSource[] = [
  OFFICIAL_SOURCE.koreanBar,
  OFFICIAL_SOURCE.klac,
  OFFICIAL_SOURCE.court,
  OFFICIAL_SOURCE.law,
];
