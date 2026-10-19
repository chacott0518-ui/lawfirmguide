"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TopicGuideCardMediaProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** 첫 카드(LCP)만 true — 즉시 high priority로 전달 */
  priority?: boolean;
};

/**
 * 카드 미디어만 클라이언트화.
 * — 카드 DOM·텍스트·링크는 서버 TopicGuideCards가 SSR 유지
 * — 가로 레일에서 native lazy가 형제 이미지를 전부 당겨 오는 문제를
 *   IntersectionObserver로 이미지 src 장착 시점에만 제한
 */
export function TopicGuideCardMedia({
  src,
  alt,
  width,
  height,
  priority = false,
}: TopicGuideCardMediaProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [load, setLoad] = useState(priority);

  useEffect(() => {
    if (load) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setLoad(true);
      return;
    }

    const rail = node.closest(".cg-topic-guide__grid");
    const root = rail instanceof HTMLElement ? rail : null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoad(true);
          observer.disconnect();
        }
      },
      {
        root,
        // 다음 카드 peek(~40px)만으로는 미장전; 스와이프 접근 시 소폭 prefetch
        rootMargin: "0px 56px 0px 0px",
        threshold: 0.35,
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [load]);

  return (
    <span ref={ref} className="cg-topic-guide__media">
      {load ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1023px) 85vw, 160px"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "low"}
          style={{ objectFit: "contain" }}
        />
      ) : (
        <>
          <span className="cg-topic-guide__media-ph" aria-hidden="true" />
          <noscript>
            {/* 검색 크롤러·JS 비활성: 동일 URL·ALT 보존 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </noscript>
        </>
      )}
    </span>
  );
}
