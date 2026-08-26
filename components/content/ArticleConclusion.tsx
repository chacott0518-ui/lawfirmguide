type ArticleConclusionProps = {
  heading?: string;
  body: string | string[];
  variant?: "editorial";
};

export function ArticleConclusion({
  heading = "결론",
  body,
  variant,
}: ArticleConclusionProps) {
  const paragraphs = Array.isArray(body) ? body : [body];
  const editorial = variant === "editorial";

  return (
    <section
      className={`cg-conclusion${editorial ? " is-editorial" : ""}`}
      aria-labelledby="article-conclusion"
    >
      {editorial ? null : (
        <div className="cg-conclusion__heading-row">
          <span className="cg-conclusion__icon" aria-hidden="true">
            ✅
          </span>
          <h2 id="article-conclusion">
            <span>{heading}</span>
          </h2>
        </div>
      )}
      {editorial ? (
        <h2 id="article-conclusion">
          <span>{heading}</span>
        </h2>
      ) : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </section>
  );
}
