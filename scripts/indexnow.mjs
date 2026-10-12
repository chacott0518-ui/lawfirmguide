/**
 * IndexNow 수동 제출 스크립트.
 * 배포 후에만 실행하세요. 빌드/배포 시 자동 실행되지 않습니다.
 *
 * Usage:
 *   npm run indexnow
 *   npm run indexnow -- --dry-run
 *
 * 키 우선순위:
 *   1) INDEXNOW_KEY env
 *   2) public/{32hex}.txt (파일명=내용 일치) 자동 탐지
 *
 * 키가 없으면 요청을 보내지 않고 안내 후 종료합니다.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");

const HOST =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "").replace(
    /\/$/,
    "",
  ) || "lawfirmguide.co.kr";

const ENDPOINT = "https://api.indexnow.org/indexnow";
const DRY_RUN = process.argv.includes("--dry-run");

/** HOME + 현재 주요 카드/클러스터 URL (sitemap 핵심만) */
const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/faq`,
  `https://${HOST}/협의이혼절차`,
  `https://${HOST}/이혼소송재산분할`,
  `https://${HOST}/양육권-상담-전-확인사항`,
  `https://${HOST}/상간녀소송변호사`,
  `https://${HOST}/이혼소송비용`,
  `https://${HOST}/이혼전문변호사후기`,
  `https://${HOST}/법률정보`,
  `https://${HOST}/rss.xml`,
  `https://${HOST}/feed.xml`,
];

/**
 * public 루트의 32자 hex key.txt를 안전하게 탐지한다.
 * 파일명과 내용이 일치할 때만 사용한다. 새 키를 생성하지 않는다.
 */
function detectPublicKeyFile() {
  let names;
  try {
    names = readdirSync(PUBLIC_DIR);
  } catch {
    return null;
  }

  for (const name of names) {
    if (!/^[a-f0-9]{32}\.txt$/i.test(name)) continue;
    const key = name.slice(0, -4).toLowerCase();
    const full = join(PUBLIC_DIR, name);
    let body;
    try {
      body = readFileSync(full, "utf8").trim().toLowerCase();
    } catch {
      continue;
    }
    if (body === key) {
      return { key, file: name };
    }
  }
  return null;
}

function resolveKey() {
  const fromEnv = process.env.INDEXNOW_KEY?.trim() || "";
  if (fromEnv) {
    return {
      key: fromEnv,
      source: "env:INDEXNOW_KEY",
      keyLocation:
        process.env.INDEXNOW_KEY_LOCATION?.trim() ||
        `https://${HOST}/${fromEnv}.txt`,
    };
  }

  const detected = detectPublicKeyFile();
  if (detected) {
    return {
      key: detected.key,
      source: `public/${detected.file}`,
      keyLocation:
        process.env.INDEXNOW_KEY_LOCATION?.trim() ||
        `https://${HOST}/${detected.key}.txt`,
    };
  }

  return null;
}

function assertKeyConsistency(key, keyLocation) {
  if (!key || key.length < 32) {
    throw new Error(
      "INDEXNOW_KEY가 없거나 길이가 부족합니다. env 또는 public/{key}.txt를 확인하세요.",
    );
  }
  if (!keyLocation.endsWith(`/${key}.txt`)) {
    throw new Error(
      "INDEXNOW_KEY_LOCATION must end with /{key}.txt matching the key.",
    );
  }
  if (!keyLocation.startsWith(`https://${HOST}/`)) {
    throw new Error("keyLocation host must match the submission host.");
  }
}

async function main() {
  const resolved = resolveKey();
  if (!resolved) {
    console.log(
      "IndexNow key not found (INDEXNOW_KEY env / public/*.txt). Skipping submission safely.",
    );
    return;
  }

  const { key, source, keyLocation } = resolved;
  assertKeyConsistency(key, keyLocation);

  const urlList = Array.from(new Set(URL_LIST));
  const body = {
    host: HOST,
    key,
    keyLocation,
    urlList,
  };

  console.log(`IndexNow key source: ${source}`);
  console.log(`keyLocation: ${keyLocation}`);
  console.log(`URLs (${urlList.length}):`);
  for (const url of urlList) console.log(`  - ${url}`);

  if (DRY_RUN) {
    console.log("Dry-run: no IndexNow request sent.");
    return;
  }

  console.log(`IndexNow submitting ${urlList.length} URLs to ${ENDPOINT}`);

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text().catch(() => "");
    console.log(`HTTP ${response.status} ${response.statusText}`);
    if (text) {
      console.log(text);
    }

    if (!response.ok) {
      process.exitCode = 1;
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`IndexNow request failed: ${message}`);
    process.exitCode = 1;
  }
}

main();
