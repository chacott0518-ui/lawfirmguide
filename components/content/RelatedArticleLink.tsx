import Link from "next/link";

import { LineArrow } from "@/components/icons/EditorialMarks";

type RelatedArticleLinkProps = {
  href: string;
  label: string;
  variant?: "editorial";
};

export function RelatedArticleLink({
  href,
  label,
  variant,
}: RelatedArticleLinkProps) {
  return (
    <p className={`cg-related-link${variant === "editorial" ? " is-editorial" : ""}`}>
      <Link className="cg-related-link__a" href={href}>
        <span className="cg-related-link__text">{label}</span>
        <span className="cg-related-link__arrow" aria-hidden="true">
          {variant === "editorial" ? <LineArrow /> : "→"}
        </span>
      </Link>
    </p>
  );
}
