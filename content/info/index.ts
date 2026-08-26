import { AFFAIR_CASE_FACTS_PREP_PAGE } from "@/content/info/affair-case-facts-prep";
import { AFFAIR_EVIDENCE_CAUTION_PAGE } from "@/content/info/affair-evidence-caution";
import { ALIMONY_CONSULT_CHECK_PAGE } from "@/content/info/alimony-consult-check";
import { ANSWER_BRIEF_PREP_PAGE } from "@/content/info/answer-brief-prep";
import { CASE_HANDLING_SYSTEM_CHECK_PAGE } from "@/content/info/case-handling-system-check";
import { CASE_TIMELINE_CHECK_PAGE } from "@/content/info/case-timeline-check";
import { CHILD_ENVIRONMENT_DOCS_PAGE } from "@/content/info/child-environment-docs";
import { CHILD_SUPPORT_PREP_PAGE } from "@/content/info/child-support-prep";
import { COMPLAINT_SERVICE_RESPONSE_PAGE } from "@/content/info/complaint-service-response";
import { CONSULTATION_QUESTIONS_PAGE } from "@/content/info/consultation-questions";
import { CONSULT_METHOD_COMPARE_PAGE } from "@/content/info/consult-method-compare";
import { CUSTODY_CONSULT_CHECK_PAGE } from "@/content/info/custody-consult-check";
import { DEBT_DIVISION_CHECK_PAGE } from "@/content/info/debt-division-check";
import { DURATION_FACTORS_PAGE } from "@/content/info/duration-factors";
import { EVIDENCE_ORGANIZING_PAGE } from "@/content/info/evidence-organizing";
import { FACT_CONVEY_CHECK_PAGE } from "@/content/info/fact-convey-check";
import { FAMILY_RELATION_DOCS_CHECK_PAGE } from "@/content/info/family-relation-docs-check";
import { LAWYER_SELECTION_CHECK_PAGE } from "@/content/info/lawyer-selection-check";
import { LITIGATION_PROCESS_PAGE } from "@/content/info/litigation-process";
import { MEDIATION_PROCESS_PAGE } from "@/content/info/mediation-process";
import { MESSAGE_EVIDENCE_CHECK_PAGE } from "@/content/info/message-evidence-check";
import { POST_JUDGMENT_PROCESS_PAGE } from "@/content/info/post-judgment-process";
import { PREMARITAL_PROPERTY_CHECK_PAGE } from "@/content/info/premarital-property-check";
import { PROCEDURE_COMPARISON_PAGE } from "@/content/info/procedure-comparison";
import { PROPERTY_LIST_PREP_PAGE } from "@/content/info/property-list-prep";
import { REAL_ESTATE_DIVISION_DOCS_PAGE } from "@/content/info/real-estate-division-docs";
import { RECORDING_EVIDENCE_CHECK_PAGE } from "@/content/info/recording-evidence-check";
import { RETAINER_AGREEMENT_CHECK_PAGE } from "@/content/info/retainer-agreement-check";
import { SCHEDULE_COMPARE_CHECK_PAGE } from "@/content/info/schedule-compare-check";
import { VISITATION_CONSULT_CHECK_PAGE } from "@/content/info/visitation-consult-check";
import { CONSULT_PREP_PAGE } from "@/content/pages/consult-prep";
import type { ContentPage, InfoGuideCard, InfoGuideId } from "@/types/content";

/** 핵심 6카드·GNB 밖의 법률정보 가이드 */
export const INFO_GUIDE_PAGES: ContentPage[] = [
  CONSULT_PREP_PAGE,
  CONSULTATION_QUESTIONS_PAGE,
  CASE_TIMELINE_CHECK_PAGE,
  FACT_CONVEY_CHECK_PAGE,
  PROCEDURE_COMPARISON_PAGE,
  MEDIATION_PROCESS_PAGE,
  LITIGATION_PROCESS_PAGE,
  COMPLAINT_SERVICE_RESPONSE_PAGE,
  ANSWER_BRIEF_PREP_PAGE,
  POST_JUDGMENT_PROCESS_PAGE,
  PROPERTY_LIST_PREP_PAGE,
  PREMARITAL_PROPERTY_CHECK_PAGE,
  REAL_ESTATE_DIVISION_DOCS_PAGE,
  DEBT_DIVISION_CHECK_PAGE,
  CUSTODY_CONSULT_CHECK_PAGE,
  CHILD_SUPPORT_PREP_PAGE,
  VISITATION_CONSULT_CHECK_PAGE,
  CHILD_ENVIRONMENT_DOCS_PAGE,
  ALIMONY_CONSULT_CHECK_PAGE,
  AFFAIR_CASE_FACTS_PREP_PAGE,
  AFFAIR_EVIDENCE_CAUTION_PAGE,
  EVIDENCE_ORGANIZING_PAGE,
  MESSAGE_EVIDENCE_CHECK_PAGE,
  RECORDING_EVIDENCE_CHECK_PAGE,
  FAMILY_RELATION_DOCS_CHECK_PAGE,
  DURATION_FACTORS_PAGE,
  SCHEDULE_COMPARE_CHECK_PAGE,
  LAWYER_SELECTION_CHECK_PAGE,
  CONSULT_METHOD_COMPARE_PAGE,
  CASE_HANDLING_SYSTEM_CHECK_PAGE,
  RETAINER_AGREEMENT_CHECK_PAGE,
];

function toInfoCard(page: ContentPage): InfoGuideCard {
  return {
    id: page.id as InfoGuideCard["id"],
    href: page.href,
    topicLabel: page.infoTopicLabel || page.navLabel,
    title: page.h1,
    description: page.infoCardDescription || page.seo.description,
    publishedAt: page.publishedAt,
    topicName: page.infoTopicLabel || page.navLabel,
  };
}

/** 홈 '이혼 법률 관련 정보' 섹션 대표 4개 (전체 목록은 /법률정보 허브) */
const HOME_INFO_GUIDE_IDS: InfoGuideId[] = [
  "consultPrep",
  "consultationQuestions",
  "litigationProcess",
  "lawyerSelectionCheck",
];

export const HOME_INFO_GUIDE_CARDS: InfoGuideCard[] = HOME_INFO_GUIDE_IDS
  .map((id) => INFO_GUIDE_PAGES.find((page) => page.id === id))
  .filter((page): page is ContentPage => Boolean(page))
  .map(toInfoCard);

/** 전체 InfoGuide 카드 (필요 시 참고용) */
export const INFO_GUIDE_CARDS: InfoGuideCard[] = INFO_GUIDE_PAGES.map(toInfoCard);
