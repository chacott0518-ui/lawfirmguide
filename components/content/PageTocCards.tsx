"use client";

import type { MouseEvent } from "react";

import { LineArrow } from "@/components/icons/EditorialMarks";
import type { TocItem } from "@/types/content";

type SectionTocProps = {
  title?: string;
  items: Array<TocItem & { description?: string }>;
  variant?: "editorial";
};

/**
 * 번호형 본문 목차 (앵커 이동).
 */
export function SectionTocCards({
  title = "이 페이지의 목차",
  items,
  variant,
}: SectionTocProps) {
  if (!items.length) return null;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  };

  const editorial = variant === "editorial";

  return (
    <nav
      className={`cg-page-toc${editorial ? " is-editorial" : ""}`}
      aria-labelledby="page-toc-title"
    >
      <h2 id="page-toc-title" className="cg-page-toc__heading">
        {title}
      </h2>
      <ol className="cg-page-toc__grid">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className="cg-page-toc__card"
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
            >
              {editorial ? (
                <>
                  <span className="cg-page-toc__copy">
                    {item.numberLabel ? (
                      <span className="cg-page-toc__num">{item.numberLabel}</span>
                    ) : null}
                    <span className="cg-page-toc__label">{item.label}</span>
                    {item.description ? (
                      <span className="cg-page-toc__desc">{item.description}</span>
                    ) : null}
                  </span>
                  <span className="cg-page-toc__arrow" aria-hidden="true">
                    <LineArrow />
                  </span>
                </>
              ) : (
                <>
                  {item.numberLabel ? (
                    <span className="cg-page-toc__num">{item.numberLabel}</span>
                  ) : null}
                  <span className="cg-page-toc__label">{item.label}</span>
                  {item.description ? (
                    <span className="cg-page-toc__desc">{item.description}</span>
                  ) : null}
                </>
              )}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type PageTocCardsProps = {
  title?: string;
  items: Array<TocItem & { description?: string }>;
  variant?: "editorial";
};

/**
 * 번호형 섹션 목차 전용(클라이언트).
 * 상단 6카드는 서버 컴포넌트 `TopicGuideCards`를 사용한다.
 */
export function PageTocCards({ title, items, variant }: PageTocCardsProps) {
  return <SectionTocCards title={title} items={items} variant={variant} />;
}
