"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Breadcrumb } from "@/components/content/Breadcrumb";
import { FaqAccordion } from "@/components/content/FaqList";
import { INFO_HUB_EXTRA_FAQS } from "@/content/faqs/info-hub-extra";
import { getInfoHubEntries, INFO_HUB_CATEGORIES } from "@/content/info/hub";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";

const ALL_TAB_ID = "all" as const;

export function InfoHubTemplate() {
  const entries = useMemo(() => getInfoHubEntries(), []);
  const [activeCategory, setActiveCategory] =
    useState<(typeof INFO_HUB_CATEGORIES)[number]["id"] | typeof ALL_TAB_ID>(
      ALL_TAB_ID,
    );

  const visibleEntries =
    activeCategory === ALL_TAB_ID
      ? entries
      : entries.filter((entry) => entry.categoryId === activeCategory);

  const hubFaqs = INFO_HUB_EXTRA_FAQS;

  return (
    <article className="cg-page cg-page--enter cg-article-page">
      <div className="cg-container">
        <Breadcrumb
          items={[{ label: SITE.shortName, href: "/" }, { label: "이혼 법률정보" }]}
        />

        <div className="cg-info-hub-page">
          <header className="cg-info-hub-page__header">
            <p className="cg-info-hub-page__eyebrow">법률정보 탐색</p>
            <h1 className="cg-info-hub-page__h1">이혼 법률정보</h1>
            <p className="cg-info-hub-page__lead">
              상담·준비부터 협의·조정·소송, 재산·금전, 자녀·양육, 위자료·상간,
              증거·서류, 변호사 선택까지 주제별로 정리한 이혼 법률정보
              탐색 허브입니다.
            </p>
          </header>

          <nav className="cg-info-hub-page__tabs" aria-label="법률정보 카테고리">
            <div className="cg-info-hub-page__tabs-track">
              <button
                type="button"
                className={`cg-info-hub-page__tab${activeCategory === ALL_TAB_ID ? " is-active" : ""}`}
                aria-pressed={activeCategory === ALL_TAB_ID}
                onClick={() => setActiveCategory(ALL_TAB_ID)}
              >
                전체
              </button>
              {INFO_HUB_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={`cg-info-hub-page__tab${activeCategory === category.id ? " is-active" : ""}`}
                  aria-pressed={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span aria-hidden="true">{category.emoji}</span> {category.label}
                </button>
              ))}
            </div>
            <span className="cg-info-hub-page__tabs-fade" aria-hidden="true" />
          </nav>

          <ul className="cg-info-hub-page__grid">
            {visibleEntries.map((entry) => (
              <li key={entry.id}>
                <Link href={entry.href} className="cg-info-hub-page__card">
                  <span className="cg-info-hub-page__card-title">{entry.title}</span>
                  <span className="cg-info-hub-page__card-desc">{entry.description}</span>
                </Link>
              </li>
            ))}
          </ul>

          {hubFaqs.length > 0 ? (
            <FaqAccordion
              items={hubFaqs}
              title="이혼 법률정보 자주 묻는 질문"
              id="info-hub-faq"
              className="cg-info-hub-page__faq"
            />
          ) : null}

          <nav className="cg-info-hub-page__back" aria-label="메인으로 이동">
            <Link href={ROUTES.home}>← 이혼전문변호사</Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
