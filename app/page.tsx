import Image from "next/image";

import "@/styles/home-editorial.css";
import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { Breadcrumb } from "@/components/content/Breadcrumb";
import { HomeContentCards } from "@/components/content/ContentCardGrid";
import { FaqAccordion } from "@/components/content/FaqList";
import { InfoGuideCards } from "@/components/content/InfoGuideCards";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { OfficialSourcesAccordion } from "@/components/content/OfficialSourcesAccordion";
import { PageTocCards } from "@/components/content/PageTocCards";
import { RelatedPages } from "@/components/content/RelatedPages";
import { ClinicMap } from "@/components/contact/ClinicMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FEATURE_IMAGE, TOPIC_MEDIA } from "@/config/media";
import { getFaqsByIds } from "@/content/faqs";
import {
  HOME_CONCLUSION,
  HOME_CONCLUSION_HEADING,
  HOME_FAQ_IDS,
  HOME_INTRO,
  HOME_SECTIONS,
  HOME_SEO,
  HOME_SOURCES,
  HOME_TOC,
} from "@/content/pages/home";
import {
  faqPageJsonLd,
  homeBreadcrumbJsonLd,
  itemListJsonLd,
  organizationJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

/** sitemap/RSS·JSON-LD published 기준일 — publishedAt 변경 금지 */
const HOME_DATE_PUBLISHED = "2026-07-31";
/** 이번 본문·DOM 최적화 반영일 */
const HOME_DATE_MODIFIED = "2026-10-19";

export default function HomePage() {
  const faqs = getFaqsByIds([...HOME_FAQ_IDS]);
  const heroImage = HOME_INTRO.featureImage;
  const editorialImages = [
    {
      src: HOME_FEATURE_IMAGE.src,
      alt: HOME_FEATURE_IMAGE.alt,
      width: HOME_FEATURE_IMAGE.width,
      height: HOME_FEATURE_IMAGE.height,
    },
    {
      src: TOPIC_MEDIA.cost.thumbnail.src,
      alt: TOPIC_MEDIA.cost.thumbnail.alt,
      width: TOPIC_MEDIA.cost.thumbnail.width,
      height: TOPIC_MEDIA.cost.thumbnail.height,
    },
  ];

  return (
    <>
      <div className="cg-home cg-page--enter">
        <div className="cg-container">
          <div className="home-editorial">
            <header className="cg-home-page-intro">
              <Breadcrumb items={[{ label: HOME_INTRO.h1 }]} />
              <p className="cg-home-page-intro__eyebrow">로펌가이드</p>
              <h1 id="home-hero-title" className="cg-home-page-intro__h1">
                {HOME_INTRO.h1}
              </h1>
              <p className="cg-home-page-intro__subtitle">
                {HOME_INTRO.subtitle}
              </p>
            </header>

            {/* 네이버 목차카드 입력값 — H1 직후, 인트로 안내문보다 위 */}
            <HomeContentCards />

            <div className="cg-home-intro-card">
              <div className="cg-home-intro-card__main">
                <header className="cg-page__header cg-home__header">
                  <h2 className="cg-home__question">{HOME_INTRO.heading}</h2>
                </header>

                <section className="cg-home-lead">
                  {HOME_INTRO.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </section>
              </div>

              <aside
                className="cg-home-intro-card__index"
                aria-label="본문 주제 인덱스"
              >
                <p className="cg-home-intro-card__index-label">
                  먼저 확인할 주제
                </p>
                <ul className="cg-home-intro-card__index-list">
                  {/* 본문 섹션 앵커 6개(home-*) — FAQ(#faq)는 아래 PageTocCards·FaqAccordion에서 연결 */}
                  {HOME_TOC.filter((item) => item.id.startsWith("home-")).map(
                    (item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>
                          {item.numberLabel ? (
                            <span className="cg-home-intro-card__index-num">
                              {item.numberLabel}
                            </span>
                          ) : null}
                          <span className="cg-home-intro-card__index-label-text">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </aside>
            </div>

            {HOME_INTRO.keySummary ? (
              <KeySummaryCards
                items={HOME_INTRO.keySummary}
                variant="editorial"
                description={HOME_INTRO.summary}
              />
            ) : null}

            <PageTocCards items={HOME_TOC} variant="editorial" />

            <ArticleBody sections={HOME_SECTIONS} variant="editorial" />

            <FaqAccordion
              items={faqs}
              title="이혼변호사에게 자주 묻는 질문"
              id="faq"
              numberLabel="07"
              className="cg-main-faq"
              variant="editorial"
            />

            <ArticleConclusion
              heading={HOME_CONCLUSION_HEADING}
              body={HOME_CONCLUSION}
              variant="editorial"
            />

            <OfficialSourcesAccordion sources={HOME_SOURCES} variant="editorial" />

            <RelatedPages showAll variant="editorial" />
          </div>

          <InfoGuideCards />

          <div className="cg-article-mid-cta">
            <PartnershipCTA variant="top" />
          </div>

          {heroImage?.src ? (
            <section className="cg-home-hero" aria-label="로펌가이드 대표 이미지">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 1120px"
                className="cg-home-hero__img"
              />
            </section>
          ) : null}

          <section
            className="cg-editorial-grid"
            aria-label="이혼 법률정보 보조 이미지"
          >
            {editorialImages.map((image) => (
              <figure key={image.src} className="cg-editorial-grid__item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="cg-editorial-grid__img"
                />
              </figure>
            ))}
          </section>

          <ClinicMap />

          <PartnershipCTA variant="bottom" />
        </div>
      </div>

      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          webPageJsonLd({
            name: HOME_INTRO.h1,
            description: HOME_SEO.description,
            path: "/",
            image: "/icon.svg",
            type: "WebPage",
            datePublished: HOME_DATE_PUBLISHED,
            dateModified: HOME_DATE_MODIFIED,
          }),
          itemListJsonLd(),
          homeBreadcrumbJsonLd(),
          faqPageJsonLd(faqs, "/"),
        ]}
      />
    </>
  );
}