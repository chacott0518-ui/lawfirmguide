import { CONTACT } from "@/config/contact";

/**
 * 문의·제휴 CTA 설정.
 * mode: partnership(기본) | sponsor(광고주 확정 후)
 */
export const ADVERTISING = {
  mode: "partnership" as "partnership" | "sponsor",
  top: {
    label: "로펌가이드 법률정보 콘텐츠",
    headline: "법률정보 콘텐츠 내 로펌 노출과 제휴를 검토하고 계신가요?",
    description:
      "로펌가이드 콘텐츠 제휴와 로펌 정보 등록에 관한 문의를 접수합니다.",
    kakaoButton: "제휴문의",
  },
  bottom: {
    label: "로펌가이드 법률정보 콘텐츠",
    headline: "법률정보 콘텐츠 내 로펌 노출과 제휴를 검토하고 계신가요?",
    description:
      "로펌가이드 콘텐츠 제휴와 로펌 정보 등록에 관한 문의를 접수합니다.",
    kakaoButton: "제휴문의",
  },
  get ctaUrl() {
    return CONTACT.kakaoUrl;
  },
  desktopLabel: "제휴문의",
  get desktopUrl() {
    return CONTACT.kakaoUrl;
  },
  mobileKakaoLabel: "제휴문의",
} as const;
