import Link from "next/link";

import { LineArrow } from "@/components/icons/EditorialMarks";
import { ROUTES } from "@/config/routes";
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

/** 하위페이지 → 메인("/") 문맥 앵커. 페이지마다 다른 문구를 사용하되 핵심어를 포함한다. */
export const HOME_CONTEXT_ANCHOR: Record<ContentPageId, string> = {
  cost: "이혼전문변호사 확인 기준",
  recovery: "이혼전문변호사 상담 기준",
  precautions: "이혼전문변호사를 확인할 때 살펴볼 기준",
  hospital: "이혼전문변호사 안내",
  reviews: "이혼전문변호사",
  faq: "이혼전문변호사 상담 전 확인사항",
  faqHub: "이혼전문변호사 상담 전 확인사항",
  consultPrep: "이혼전문변호사 선택 기준",
};

/**
 * 관련 콘텐츠 — 한 줄 버튼형 링크만 표시 (이미지·날짜·미리보기 없음).
 */
export function RelatedPages({
  currentId,
  showAll = false,
  variant,
}: RelatedPagesProps) {
  const links: RelatedLink[] = [];

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
      if (card.id === currentId) continue;
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
