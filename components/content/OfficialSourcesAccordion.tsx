"use client";

import { useId, useState } from "react";

import { PlusMinusIcon } from "@/components/icons/EditorialMarks";
import type { OfficialSource } from "@/types/content";

type OfficialSourcesAccordionProps = {
  sources?: OfficialSource[];
  title?: string;
  variant?: "editorial";
};

/**
 * 공식 출처 및 참고자료 — sources가 비어 있으면 렌더하지 않는다.
 * 검증된 URL만 데이터로 전달한다.
 */
export function OfficialSourcesAccordion({
  sources = [],
  title = "공식 출처 및 참고자료",
  variant,
}: OfficialSourcesAccordionProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);

  if (!sources.length) return null;

  return (
    <section
      className={`cg-sources${variant === "editorial" ? " is-editorial" : ""}`}
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
      <div
        id={panelId}
        className="cg-sources__panel"
        hidden={!open}
      >
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
      </div>
    </section>
  );
}
