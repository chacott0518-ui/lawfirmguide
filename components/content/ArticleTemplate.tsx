import Image from "next/image";
import type { CSSProperties } from "react";

import "@/styles/home-editorial.css";
import { PartnershipCTA } from "@/components/advertising/AdInquiryBanner";
import { ArticleBody } from "@/components/content/ArticleBody";
import { ArticleConclusion } from "@/components/content/ArticleConclusion";
import { ArticleIntro } from "@/components/content/ArticleIntro";
import { FaqAccordion } from "@/components/content/FaqList";
import { KeySummaryCards } from "@/components/content/KeySummaryCards";
import { LongGuideImage } from "@/components/content/LongGuideImage";
import { OfficialSourcesAccordion } from "@/components/content/OfficialSourcesAccordion";
import {
  PageTocCards,
  SectionTocCards,
} from "@/components/content/PageTocCards";
import { RelatedArticleLink } from "@/components/content/RelatedArticleLink";
import {
  HOME_CONTEXT_ANCHOR,
  RelatedPages,
} from "@/components/content/RelatedPages";
import { ClinicMap } from "@/components/contact/ClinicMap";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FEATURE_IMAGE } from "@/config/media";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";
import { getFaqsByIds, getPageFaqs } from "@/lib/content-registry";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/schema";
import type { ContentImage, ContentPage } from "@/types/content";

type ArticleTemplateProps = {
  page: ContentPage;
};

function PageSquareThumb({
  image,
  priority = false,
}: {
  image: ContentImage;
  priority?: boolean;
}) {
  return (
    <figure className="cg-page-thumb">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width || 1254}
        height={image.height || 1254}
        sizes="(max-width: 768px) calc(100vw - 32px), 560px"
        quality={90}
        priority={priority}
        className="cg-page-thumb__img"
        style={{ objectFit: "contain" }}
      />
    </figure>
  );
}

/**
 * 상단 썸네일 → 목차카드 → 콘텐츠 제휴 배너 → 보조 썸네일 → 본문 이미지 → 지도
 * → H1 → 직접답변 → 핵심요약 → 번호 목차 → 본문 → FAQ → 결론 → 관련 → CTA
 */
export function ArticleTemplate({ page }: ArticleTemplateProps) {
  const pageFaqs = getPageFaqs(page);
  const sectionFaqIds = page.sections.flatMap(
    (section) => section.faqIds ?? [],
  );
  const schemaFaqs =
    pageFaqs.length > 0 ? pageFaqs : getFaqsByIds(sectionFaqIds);

  const showContentCards = page.showContentCards !== false;
  const faqNumberLabel = String(page.sections.length + 1).padStart(2, "0");
  const displayH1 = page.h1 || page.navLabel || page.heading;
  const breadcrumbLabel = page.breadcrumbLabel || displayH1;
  const squareThumb = page.thumbnail?.src ? page.thumbnail : null;
  const subThumb = {
    src: HOME_FEATURE_IMAGE.src,
    alt: `${displayH1} 보조 썸네일`,
    width: HOME_FEATURE_IMAGE.width,
    height: HOME_FEATURE_IMAGE.height,
  };
  const bodyImage = page.bodyImage?.src ? page.bodyImage : null;
  const isFaqCanonical = page.id === "faq";

  const tocItems = [
    ...page.sections.map((section) => ({
      id: section.id,
      numberLabel: section.numberLabel,
      label: section.heading,
      description: page.tocDescriptions?.[section.id],
    })),
    ...(pageFaqs.length > 0
      ? [
          {
            id: "faq",
            numberLabel: faqNumberLabel,
            label: page.faqTitle,
          },
        ]
      : []),
  ];

  const schemas = [
    webPageJsonLd({
      name: displayH1,
      description: page.seo.description,
      path: page.href,
      image: page.seo.socialImage || page.seo.ogImage,
      type: "WebPage",
    }),
    breadcrumbJsonLd([
      { name: SITE.shortName, path: "/" },
      { name: breadcrumbLabel, path: page.href },
    ]),
    ...(isFaqCanonical ? [] : [articleJsonLd(page)]),
    ...(schemaFaqs.length > 0
      ? [faqPageJsonLd(schemaFaqs, page.href)]
      : []),
  ];

  const accentStyle = {
    "--page-accent": page.accentColor,
    "--page-accent-hover": page.accentHoverColor,
  } as CSSProperties;

  return (
    <>
      <article
        className="cg-page cg-page--enter cg-article-page"
        style={accentStyle}
      >
        <div className="cg-container">
          {squareThumb ? (
            <section className="cg-article-visual" aria-label={`${displayH1} 상단 썸네일`}>
              <figure className="cg-page-thumb">
                <Image
                  src={squareThumb.src}
                  alt={squareThumb.alt}
                  width={squareThumb.width || 1254}
                  height={squareThumb.height || 1254}
                  sizes="(max-width: 768px) 100vw, 1120px"
                  className="cg-page-thumb__img"
                  priority
                  style={{ objectFit: "cover" }}
                />
              </figure>
            </section>
          ) : null}

          {showContentCards ? (
            <PageTocCards activeHref={page.href} />
          ) : null}

          {showContentCards ? (
            <div className="cg-article-mid-cta">
              <PartnershipCTA variant="top" />
            </div>
          ) : null}

          {squareThumb ? (
            <PageSquareThumb image={subThumb} priority={false} />
          ) : null}

          {bodyImage ? (
            <LongGuideImage image={bodyImage} priority={false} />
          ) : null}

          <ClinicMap />

          <div className="home-editorial">
            <header className="cg-article-start cg-home-page-intro">
              {page.categoryLabel ? (
                <p className="cg-home-page-intro__eyebrow">
                  {page.categoryLabel}
                </p>
              ) : null}
              <h1 className="cg-home-page-intro__h1">{displayH1}</h1>
            </header>

            <ArticleIntro paragraphs={page.intro} />

            <RelatedArticleLink
              href={ROUTES.home}
              label={HOME_CONTEXT_ANCHOR[page.id]}
              variant="editorial"
            />

            {page.keySummary && page.keySummary.length > 0 ? (
              <KeySummaryCards
                title="핵심요약"
                items={page.keySummary}
                variant="editorial"
              />
            ) : null}

            {tocItems.length > 0 ? (
              <SectionTocCards items={tocItems} variant="editorial" />
            ) : null}

            <div className="cg-article-mobile-enhanced" data-article-body="true">
              <ArticleBody sections={page.sections} variant="editorial" />

              {pageFaqs.length > 0 ? (
                <FaqAccordion
                  items={pageFaqs}
                  title={page.faqTitle}
                  id="faq"
                  numberLabel={faqNumberLabel}
                  className="cg-page-faq"
                  variant="editorial"
                />
              ) : null}

              {page.conclusion ? (
                <ArticleConclusion
                  body={page.conclusion}
                  heading={`${displayH1}, 마지막으로 확인할 점`}
                  variant="editorial"
                />
              ) : null}

              <OfficialSourcesAccordion
                sources={page.sources}
                variant="editorial"
              />

              <RelatedPages currentId={page.id} variant="editorial" />

              <PartnershipCTA variant="bottom" />
            </div>
          </div>
        </div>
      </article>
      <JsonLd data={schemas} />
    </>
  );
}

/** @deprecated 호환용 — ArticleTemplate 사용 */
export const ContentPageView = ArticleTemplate;
