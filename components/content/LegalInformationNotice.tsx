import { LEGAL_INFO_DISCLAIMER } from "@/config/disclaimer";

type LegalInformationNoticeProps = {
  text?: string;
  /** Footer 등 민트 박스 없이 텍스트만 표시 */
  variant?: "box" | "footer";
};

export const LEGAL_INFORMATION_TEXT = LEGAL_INFO_DISCLAIMER;

/** @deprecated LEGAL_INFORMATION_TEXT 사용 */
export const HEALTH_INFORMATION_TEXT = LEGAL_INFORMATION_TEXT;

export function LegalInformationNotice({
  text = LEGAL_INFORMATION_TEXT,
  variant = "box",
}: LegalInformationNoticeProps) {
  if (variant === "footer") {
    return (
      <div className="cg-footer__health" role="note" aria-label="법률정보 안내">
        <p className="cg-footer__health-title">법률정보 안내</p>
        <p className="cg-footer__health-text">{text}</p>
        <p className="cg-footer__health-text">작성·운영: 로펌가이드 편집팀</p>
        <p className="cg-footer__health-text">
          본 사이트는 특정 법무법인의 공식 홈페이지가 아니며, 변호사와의
          위임관계를 자동으로 형성하지 않습니다.
        </p>
      </div>
    );
  }

  return (
    <aside className="cg-health-notice" role="note" aria-label="법률정보 안내">
      <div className="cg-health-notice__inner">
        <span className="cg-health-notice__icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <circle cx="10" cy="10" r="8" />
            <path d="M10 9v4M10 6.5h.01" strokeWidth="1.8" />
          </svg>
        </span>
        <div className="cg-health-notice__body">
          <strong className="cg-health-notice__title">법률정보 안내</strong>
          <p className="cg-health-notice__text">{text}</p>
          <p className="cg-health-notice__text">작성·운영: 로펌가이드 편집팀</p>
          <p className="cg-health-notice__text">
            본 사이트는 특정 법무법인의 공식 홈페이지가 아니며, 변호사와의
            위임관계를 자동으로 형성하지 않습니다.
          </p>
        </div>
      </div>
    </aside>
  );
}

/** @deprecated LegalInformationNotice 사용 */
export const HealthInformationNotice = LegalInformationNotice;
