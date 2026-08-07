export type FaqUrgency = "low" | "medium" | "high";
export type FaqSearchType =
  | "short"
  | "conversational"
  | "longtail"
  | "local"
  | "ai-search";

export type FaqItem = {
  id: string;
  order: number;
  question: string;
  answer: string;
  relatedSlug?: string;
  relatedLabel?: string;
  categories: string[];
  /** 선택 필드 — 기존 렌더러 호환을 위해 모두 optional */
  aiSummary?: string;
  tags?: string[];
  related?: string[];
  intent?: string;
  category?: string;
  urgency?: FaqUrgency;
  searchType?: FaqSearchType;
  updatedAt?: string;
};
