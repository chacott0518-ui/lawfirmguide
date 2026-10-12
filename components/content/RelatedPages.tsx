import Link from "next/link";

import { LineArrow } from "@/components/icons/EditorialMarks";
import { ROUTES, type RouteKey } from "@/config/routes";
import { CONTENT_CARDS } from "@/lib/content-registry";
import type { ContentPageId } from "@/types/content";

type RelatedPagesProps = {
  currentId?: ContentPageId;
  /** 홈: 상세 6개만 / 상세: 메인 + 나머지 5개 */
  showAll?: boolean;
  variant?: "editorial";
};

type RelatedLink = {
  id: string;
  href: string;
  label: string;
};

/** 하위페이지 → 메인("/") 문맥 앵커. primary/variant는 OWNER(/)로만 집중한다. */
export const HOME_CONTEXT_ANCHOR: Record<ContentPageId, string> = {
  cost: "이혼전문변호사 전체 안내",
  recovery: "이혼변호사 선택 기준",
  precautions: "이혼 전문 변호사 정보",
  hospital: "이혼 사건 전체 가이드",
  reviews: "이혼전문변호사 확인 기준",
  faq: "이혼전문변호사 상담 전 확인사항",
  faqHub: "이혼전문변호사 FAQ 허브 안내",
  consultPrep: "이혼전문변호사 선택 기준 보기",
  consultationQuestions: "이혼전문변호사 상담 정보",
  caseTimelineCheck: "이혼변호사 상담 준비 안내",
  factConveyCheck: "이혼상담 사실관계 정리 안내",
  procedureComparison: "이혼전문변호사 절차 확인",
  mediationProcess: "이혼조정 절차 안내",
  litigationProcess: "이혼소송 진행 정보",
  complaintServiceResponse: "이혼소송 대응 정보",
  answerBriefPrep: "이혼소송 서면 준비 정보",
  postJudgmentProcess: "이혼판결 이후 안내",
  propertyListPrep: "이혼전문변호사 재산분할 정보",
  premaritalPropertyCheck: "재산분할 관련 정보",
  realEstateDivisionDocs: "부동산 재산분할 정보",
  debtDivisionCheck: "채무·재산분할 상담 정보",
  custodyConsultCheck: "이혼전문변호사 자녀 관련 정보",
  childSupportPrep: "양육비 상담 정보",
  visitationConsultCheck: "면접교섭 상담 정보",
  childEnvironmentDocs: "자녀 양육환경 정보",
  alimonyConsultCheck: "이혼전문변호사 위자료 정보",
  affairCaseFactsPrep: "상간 관련 상담 정보",
  affairEvidenceCaution: "위자료 증거정리 정보",
  evidenceOrganizing: "이혼전문변호사 증거·서류 정보",
  messageEvidenceCheck: "문자·메신저 증거 정보",
  recordingEvidenceCheck: "녹음자료 상담 정보",
  familyRelationDocsCheck: "가족관계 서류 확인 정보",
  durationFactors: "이혼전문변호사 비용·기간 정보",
  scheduleCompareCheck: "조정·소송 일정 비교 정보",
  lawyerSelectionCheck: "이혼전문변호사 허브로 돌아가기",
  consultMethodCompare: "변호사 상담방식 비교 정보",
  caseHandlingSystemCheck: "사건 담당체계 확인 정보",
  retainerAgreementCheck: "위임계약서 확인 정보",
};

function resolvePageHref(id?: ContentPageId): string | undefined {
  if (!id) return undefined;
  if (id in ROUTES) return ROUTES[id as RouteKey];
  return undefined;
}

/**
 * 관련 콘텐츠 — 한 줄 버튼형 링크만 표시 (이미지·날짜·미리보기 없음).
 */
export function RelatedPages({
  currentId,
  showAll = false,
  variant,
}: RelatedPagesProps) {
  const links: RelatedLink[] = [];
  const pageHref = resolvePageHref(currentId);

  if (showAll) {
    for (const card of CONTENT_CARDS) {
      links.push({ id: card.id, href: card.href, label: card.title });
    }
  } else {
    const homeLabel =
      (currentId && HOME_CONTEXT_ANCHOR[currentId]) ||
      "이혼전문변호사";
    links.push({
      id: "home",
      href: ROUTES.home,
      label: homeLabel,
    });
    for (const card of CONTENT_CARDS) {
      // card.id와 실제 페이지 URL이 어긋날 수 있어 href 기준으로 현재 페이지를 제외한다.
      if (pageHref && card.href === pageHref) continue;
      links.push({ id: card.id, href: card.href, label: card.title });
    }
  }

  if (links.length === 0) return null;

  const editorial = variant === "editorial";

  return (
    <nav
      className={`cg-related-btns${editorial ? " is-editorial" : ""}`}
      aria-labelledby="related-pages-title"
    >
      <h2 id="related-pages-title" className="cg-related-btns__title">
        관련 콘텐츠
      </h2>
      <ul className="cg-related-btns__list">
        {links.map((item, index) => (
          <li key={item.id}>
            <Link className="cg-related-btns__row" href={item.href} scroll>
              {editorial ? (
                <span className="cg-related-btns__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              ) : null}
              <span className="cg-related-btns__label">{item.label}</span>
              <span className="cg-related-btns__arrow" aria-hidden="true">
                {editorial ? <LineArrow /> : "→"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
