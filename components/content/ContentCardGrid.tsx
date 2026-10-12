import { ContentCard } from "@/components/content/ContentCard";
import { PageTocCards } from "@/components/content/PageTocCards";
import { CONTENT_CARDS } from "@/lib/content-registry";

type ContentCardGridProps = {
  activeHref?: string;
  showIntro?: boolean;
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ContentCardGrid({
  activeHref,
  showIntro = false,
  eyebrow = "CONTENT GUIDE",
  title = "이혼 법률정보 핵심 안내",
  description =
    "상담 전 확인사항, 이혼 절차·준비서류, 재산분할, 양육권·친권, 위자료·상간, 소송 전 체크리스트를 주제별로 정리했습니다.",
}: ContentCardGridProps) {
  return (
    <section className="cg-card-grid" aria-labelledby="content-card-grid-title">
      {showIntro ? (
        <div className="cg-section-intro">
          <p className="cg-section-intro__eyebrow">{eyebrow}</p>
          <h2 id="content-card-grid-title">{title}</h2>
          <p>{description}</p>
        </div>
      ) : (
        <h2 id="content-card-grid-title" className="sr-only">
          {title}
        </h2>
      )}
      <div className="cg-card-grid__list">
        {CONTENT_CARDS.map((card, index) => (
          <ContentCard
            key={card.id}
            card={card}
            active={activeHref === card.href}
            priority={index < 2}
          />
        ))}
      </div>
    </section>
  );
}

/** 메인 상단 목차 — PageTocCards와 동일한 콘텐츠형 카드 */
export function HomeContentCards() {
  return <PageTocCards />;
}
