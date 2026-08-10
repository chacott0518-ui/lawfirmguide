"use client";

import { useId, useState } from "react";

import { PlusMinusIcon } from "@/components/icons/EditorialMarks";
import type { OfficialSource } from "@/types/content";

type OfficialSourcesAccordionProps = {
  sources?: OfficialSource[];
  title?: string;
  variant?: "editorial";
  /** true면 details/summary로 서버 HTML에 본문이 항상 존재 */
  asDetails?: boolean;
};

function SourceList({ sources }: { sources: OfficialSource[] }) {
  return (
    <ul className="cg-sources__list">
      {sources.map((source) => {
        const label = source.title
          ? `${source.name} — ${source.title}`
          : source.name;
        return (
          <li key={`${source.name}-${source.url || source.title || ""}`}>
            {source.url ? (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cg-sources__link"
              >
                {label}
                <span className="cg-sources__external" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (새 창)</span>
              </a>
            ) : (
              <span className="cg-sources__text">{label}</span>
            )}
            {source.note ? (
              <p className="cg-sources__note">{source.note}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

/**
 * 공식 출처 및 참고자료 — sources가 비어 있으면 렌더하지 않는다.
 * 검증된 URL만 데이터로 전달한다.
 */
export function OfficialSourcesAccordion({
  sources = [],
  title = "공식 출처 및 참고자료",
  variant,
  asDetails = false,
}: OfficialSourcesAccordionProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  if (!sources.length) return null;

  const editorialClass = variant === "editorial" ? " is-editorial" : "";

  if (asDetails) {
    return (
      <details className={`cg-sources cg-sources--details${editorialClass}`}>
        <summary className="cg-sources__toggle cg-sources__summary">
          <span className="cg-sources__toggle-label">{title}</span>
        </summary>
        <div className="cg-sources__panel">
          <SourceList sources={sources} />
          <p className="cg-sources__disclaimer">
            위 자료는 일반 법률정보 작성의 참고 출처이며, 특정 기관의 보증·인증·추천을
            의미하지 않습니다.
          </p>
        </div>
      </details>
    );
  }

  return (
    <section
      className={`cg-sources${editorialClass}`}
      aria-labelledby={`${panelId}-title`}
    >
      <h2 id={`${panelId}-title`} className="sr-only">
        {title}
      </h2>
      <button
        type="button"
        className="cg-sources__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="cg-sources__toggle-label">{title}</span>
        <span className="cg-sources__toggle-icon" aria-hidden="true">
          {variant === "editorial" ? (
            <PlusMinusIcon open={open} />
          ) : open ? (
            "−"
          ) : (
            "+"
          )}
        </span>
      </button>
      <div id={panelId} className="cg-sources__panel" hidden={!open}>
        <SourceList sources={sources} />
      </div>
    </section>
  );
}
