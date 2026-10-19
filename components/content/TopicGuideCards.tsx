import Link from "next/link";

import { TopicGuideCardMedia } from "@/components/content/TopicGuideCardMedia";
import { CONTENT_CARDS } from "@/lib/content-registry";

function formatCardDate(value?: string): string {
  if (!value) return "2026.07.28";
  if (/^\d{4}\.\d{2}\.\d{2}$/.test(value)) return value;
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) return `${match[1]}.${match[2]}.${match[3]}`;
  return value;
}

type TopicGuideCardsProps = {
  activeHref?: string;
  title?: string;
};

/**
 * HOME/허브 상단 6카드 — 서버 컴포넌트(SSR·ItemList 입력값 유지).
 * 이미지 지연만 TopicGuideCardMedia(client)에 위임. 링크·제목·설명은 SSR.
 */
export function TopicGuideCards({
  activeHref,
  title = "이혼 법률정보 핵심 안내",
}: TopicGuideCardsProps) {
  return (
    <section className="cg-topic-guide" aria-labelledby="topic-guide-title">
      <h2 id="topic-guide-title" className="sr-only">
        {title}
      </h2>
      <div className="cg-topic-guide__grid">
        {CONTENT_CARDS.map((card, index) => {
          const src = card.image?.src;
          if (!src) return null;

          return (
            <Link
              key={card.id}
              className={`cg-topic-guide__card${activeHref === card.href ? " is-active" : ""}`}
              href={card.href}
              scroll
              aria-current={activeHref === card.href ? "page" : undefined}
            >
              <TopicGuideCardMedia
                src={src}
                alt={card.image.alt}
                width={card.image.width || 800}
                height={card.image.height || 800}
                priority={index === 0}
              />
              <span className="cg-topic-guide__body">
                <strong className="cg-topic-guide__title">
                  {card.cardTitle || card.title}
                </strong>
                <time
                  className="cg-topic-guide__date"
                  dateTime={card.publishedAt}
                >
                  {formatCardDate(card.publishedAt)}
                </time>
                <span className="cg-topic-guide__desc">
                  {card.cardDescription || card.description}
                </span>
                <span className="cg-topic-guide__more">더 읽기 →</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
