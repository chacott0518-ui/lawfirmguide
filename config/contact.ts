import type { ContactConfig } from "@/types/contact";

/**
 * 문의·연락·위치 설정. 헤더, 모바일 하단 바, CTA, 지도에서 이 값을 읽는다.
 */
export const CONTACT: ContactConfig = {
  enabled: true,
  mode: "partnership",
  kakaoEnabled: true,
  kakaoUrl:
    process.env.NEXT_PUBLIC_KAKAO_AD_URL?.trim() ||
    "http://pf.kakao.com/_DSgxfb/chat",
  kakaoLabel: "제휴문의",
  phoneTel: process.env.NEXT_PUBLIC_PHONE_TEL?.trim() || "02-739-5415",
  formEnabled: false,
  formLabel: "문의하기",
  clinicName: "제휴 로펌",
  address: "",
  locationNote: "제휴 확정 후 위치 안내 예정",
  naverMapUrl: "",
  googleMapsEmbedUrl: "",
};
