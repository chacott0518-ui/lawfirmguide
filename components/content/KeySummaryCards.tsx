export type KeySummaryItem = {
  numberLabel: string;
  title: string;
  text: string;
};

type KeySummaryCardsProps = {
  title?: string;
  items: KeySummaryItem[];
  variant?: "editorial";
  /** editorial 변형에서만 좌측 패널에 표시되는 보조 설명 (기존 데이터 재사용 시에만 전달) */
  description?: string;
};

/**
 * 핵심요약 카드 그리드 (메인·상세 공용).
 * 번호 + 제목은 같은 행(baseline), 설명은 다음 행 — 모바일 2줄 compact 구조.
 */
export function KeySummaryCards({
  title = "핵심요약",
  items,
  variant,
  description,
}: KeySummaryCardsProps) {
  if (!items.length) return null;

  const editorial = variant === "editorial";

  return (
    <section
      className={`cg-key-summary${editorial ? " is-editorial" : ""}`}
      aria-labelledby="key-summary-title"
    >
      <div className="cg-key-summary__head">
        <h2 id="key-summary-title" className="cg-key-summary__heading">
          {title}
        </h2>
        {editorial && description ? (
          <p className="cg-key-summary__desc">{description}</p>
        ) : null}
      </div>
      <ol className="cg-key-summary__grid">
        {items.map((item) => (
          <li key={item.numberLabel} className="cg-key-summary__card">
            <span className="cg-key-summary__meta">
              <span className="cg-key-summary__num" aria-hidden="true">
                {item.numberLabel}
              </span>
              <strong className="cg-key-summary__title">{item.title}</strong>
            </span>
            <p className="cg-key-summary__text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
