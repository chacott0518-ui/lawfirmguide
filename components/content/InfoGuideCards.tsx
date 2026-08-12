import Link from "next/link";

import { ROUTES } from "@/config/routes";
import { HOME_INFO_GUIDE_CARDS } from "@/content/info";
import type { InfoGuideCard } from "@/types/content";

function formatCardDate(isoDate: string): string {
  const [y, m, d] = isoDate.split("-");
  if (!y || !m || !d) return isoDate;
  return `${y}.${m}.${d}`;
}

type InfoGuideCardsProps = {
  cards?: InfoGuideCard[];
};

/**
 * 메인 핵심 카드 밖의 ‘이혼 법률 관련 정보’ 레이어.
 * GNB/CONTENT_CARDS와 분리되어 데이터 추가만으로 카드가 늘어난다.
 * 스타일은 로펌가이드 editorial(navy/gold) 토큰을 사용한다.
 */
export function InfoGuideCards({
  cards = HOME_INFO_GUIDE_CARDS,
}: InfoGuideCardsProps) {
  if (cards.length === 0) return null;

  return (
    <section
      className="lg-info-guides"
      aria-labelledby="info-guides-heading"
    >
      <header className="lg-info-guides__header">
        <p className="lg-info-guides__eyebrow">법률정보</p>
        <h2 id="info-guides-heading" className="lg-info-guides__title">
          이혼 법률 관련 정보
        </h2>
        <p className="lg-info-guides__subtitle">
          이혼 절차와 상담 전에 확인할 법률정보를 주제별로 정리합니다.
        </p>
      </header>

      <ul className="lg-info-guides__list">
        {cards.map((card) => (
          <li key={card.id}>
            <Link className="lg-info-guides__card" href={card.href} scroll>
              <span className="lg-info-guides__label">{card.topicLabel}</span>
              <span className="lg-info-guides__card-title">{card.title}</span>
              <span className="lg-info-guides__desc">{card.description}</span>
              <span className="lg-info-guides__meta">
                {formatCardDate(card.publishedAt)} · {card.topicName}
              </span>
              <span className="lg-info-guides__more">
                자세히 보기
                <span aria-hidden="true"> →</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link href={ROUTES.infoHub} className="lg-info-guides__all">
        이혼 법률정보 전체보기 →
      </Link>
    </section>
  );
}
