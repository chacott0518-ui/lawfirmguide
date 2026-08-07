import type { ContentClusterId, ContentImage } from "@/types/content";

export type MenuIconKey = ContentClusterId | "home";

export type TopicMedia = {
  id: ContentClusterId;
  thumbnail: ContentImage;
  secondaryImage: ContentImage;
  imageAlt: string;
  secondaryImageAlt: string;
  accentColor: string;
  accentHoverColor: string;
  mobileCardDescription: string;
};

function img(src: string, alt: string, w: number, h: number): ContentImage {
  return { src, alt, width: w, height: h };
}

const THUMB = "/images/로펌가이드/썸네일";
const EMOJI = "/images/로펌가이드/이모티콘";
const CARD_W = 1254;
const CARD_H = 1254;

const ACCENT = "#D3A62B";
const ACCENT_HOVER = "#B98A18";

/**
 * 재산분할 전용 썸네일 파일이 썸네일 폴더에 없어
 * 메인 정사각 썸네일을 임시 연결한다. (이모티콘은 전용 파일 존재)
 */
const PROPERTY_THUMB_FALLBACK = `${THUMB}/메인-이혼전문변호사-정사각썸네일.webp`;

export const TOPIC_MEDIA: Record<ContentClusterId, TopicMedia> = {
  cost: {
    id: "cost",
    imageAlt: "협의이혼 절차 안내 썸네일",
    secondaryImageAlt: "협의이혼 절차 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "서류·합의·숙려기간 확인",
    thumbnail: img(
      `${THUMB}/협의이혼절차-썸네일.webp`,
      "협의이혼 절차 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/협의이혼절차-썸네일.webp`,
      "협의이혼 절차 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  recovery: {
    id: "recovery",
    imageAlt: "이혼소송 비용 안내 썸네일",
    secondaryImageAlt: "이혼소송 비용 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "비용 항목 확인 기준",
    thumbnail: img(
      `${THUMB}/이혼소송비용-썸네일.webp`,
      "이혼소송 비용 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/이혼소송비용-썸네일.webp`,
      "이혼소송 비용 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  precautions: {
    id: "precautions",
    imageAlt: "상간소송 변호사 안내 썸네일",
    secondaryImageAlt: "상간소송 변호사 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "증거·절차 확인 기준",
    thumbnail: img(
      `${THUMB}/상간녀소송변호사-썸네일.webp`,
      "상간소송 변호사 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/상간녀소송변호사-썸네일.webp`,
      "상간소송 변호사 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  hospital: {
    id: "hospital",
    imageAlt: "이혼 재산분할 안내 썸네일",
    secondaryImageAlt: "이혼 재산분할 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "재산분할 확인 기준",
    thumbnail: img(
      PROPERTY_THUMB_FALLBACK,
      "이혼 재산분할 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      PROPERTY_THUMB_FALLBACK,
      "이혼 재산분할 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  reviews: {
    id: "reviews",
    imageAlt: "이혼전문변호사 후기 확인 안내 썸네일",
    secondaryImageAlt: "이혼전문변호사 후기 확인 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "후기 확인 포인트",
    thumbnail: img(
      `${THUMB}/이혼전문변호사후기-썸네일.webp`,
      "이혼전문변호사 후기 확인 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/이혼전문변호사후기-썸네일.webp`,
      "이혼전문변호사 후기 확인 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  faq: {
    id: "faq",
    imageAlt: "이혼전문변호사 FAQ 안내 썸네일",
    secondaryImageAlt: "이혼전문변호사 FAQ 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "상담·선임 전 확인할 질문 모음",
    thumbnail: img(
      `${THUMB}/이혼-FAQ-썸네일.webp`,
      "이혼전문변호사 FAQ 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/이혼-FAQ-썸네일.webp`,
      "이혼전문변호사 FAQ 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
  faqHub: {
    id: "faqHub",
    imageAlt: "이혼전문변호사 FAQ 안내 썸네일",
    secondaryImageAlt: "이혼전문변호사 FAQ 본문 이미지",
    accentColor: ACCENT,
    accentHoverColor: ACCENT_HOVER,
    mobileCardDescription: "상담·선임 전 확인할 질문 모음",
    thumbnail: img(
      `${THUMB}/이혼-FAQ-썸네일.webp`,
      "이혼전문변호사 FAQ 안내 썸네일",
      CARD_W,
      CARD_H,
    ),
    secondaryImage: img(
      `${THUMB}/이혼-FAQ-썸네일.webp`,
      "이혼전문변호사 FAQ 본문 이미지",
      CARD_W,
      CARD_H,
    ),
  },
};

/** 메인 와이드 대표 이미지 */
export const HOME_WIDE_IMAGE: ContentImage = img(
  `${THUMB}/메인-이혼전문변호사-와이드.webp`,
  "이혼 절차와 비용 안내를 담은 와이드 대표 이미지",
  1731,
  909,
);

/** 메인·상세 정사각 대표 썸네일 */
export const HOME_FEATURE_IMAGE: ContentImage = img(
  `${THUMB}/메인-이혼전문변호사-정사각썸네일.webp`,
  "이혼 법률정보 정사각 대표 썸네일",
  CARD_W,
  CARD_H,
);

/** 카카오톡/OG 공유 대표 이미지 (실제 파일 크기 1731x909) */
export const HOME_OG_IMAGE: ContentImage = img(
  `${THUMB}/메인-이혼전문변호사-와이드.webp`,
  "이혼전문변호사, 어떤 기준으로 확인해야 할까요? | 로펌가이드",
  1731,
  909,
);

/** 메뉴·카드 이모티콘 (장식용) */
export const MENU_ICON_IMAGES: Record<MenuIconKey, ContentImage> = {
  home: img(
    `${EMOJI}/메인-이혼전문변호사-이모티콘.webp`,
    "",
    512,
    512,
  ),
  cost: img(`${EMOJI}/협의이혼절차-이모티콘.webp`, "", 512, 512),
  recovery: img(`${EMOJI}/이혼소송비용-이모티콘.webp`, "", 512, 512),
  precautions: img(`${EMOJI}/상간녀소송변호사-이모티콘.webp`, "", 512, 512),
  hospital: img(`${EMOJI}/이혼소송재산분할-이모티콘.webp`, "", 512, 512),
  reviews: img(`${EMOJI}/이혼전문변호사후기-이모티콘.webp`, "", 512, 512),
  faq: img(`${EMOJI}/이혼-FAQ-이모티콘.webp`, "", 512, 512),
  faqHub: img(`${EMOJI}/이혼-FAQ-이모티콘.webp`, "", 512, 512),
};

export function getTopicMedia(id: ContentClusterId): TopicMedia {
  return TOPIC_MEDIA[id];
}
