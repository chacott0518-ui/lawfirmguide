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
      <h2 id="article-conclusion">
        {editorial ? null : (
          <span className="cg-conclusion__icon" aria-hidden="true">
            ✅
          </span>
        )}
        <span>{heading}</span>
      </h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </section>
  );
}
