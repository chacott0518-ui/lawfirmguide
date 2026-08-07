export const ROUTES = {
  home: "/",
  cost: "/협의이혼절차",
  recovery: "/이혼소송비용",
  precautions: "/상간녀소송변호사",
  hospital: "/이혼소송재산분할",
  reviews: "/이혼전문변호사후기",
  faq: "/faq",
} as const;

/** 신규 프로젝트이므로 레거시 URL 리다이렉트는 두지 않는다. */
export const LEGACY_REDIRECTS: Record<string, string> = {};

export type RouteKey = keyof typeof ROUTES;
