/**
 * IndexNow 수동 제출 스크립트.
 * 배포 후에만 실행하세요. 빌드/배포 시 자동 실행되지 않습니다.
 *
 * Usage: npm run indexnow
 *
 * 키가 없으면 요청을 보내지 않고 안내 후 종료합니다.
 */

const HOST =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "").replace(
    /\/$/,
    "",
  ) || "lawfirmguide.co.kr";
const KEY = process.env.INDEXNOW_KEY?.trim() || "";
const KEY_LOCATION =
  process.env.INDEXNOW_KEY_LOCATION?.trim() ||
  (KEY ? `https://${HOST}/${KEY}.txt` : "");
const ENDPOINT = "https://api.indexnow.org/indexnow";

const URL_LIST = [
  `https://${HOST}/`,
  `https://${HOST}/협의이혼절차`,
  `https://${HOST}/이혼소송비용`,
  `https://${HOST}/상간녀소송변호사`,
  `https://${HOST}/이혼소송재산분할`,
  `https://${HOST}/이혼전문변호사후기`,
  `https://${HOST}/faq`,
];

function assertKeyConsistency() {
  if (!KEY || KEY.length < 32) {
    throw new Error(
      "INDEXNOW_KEY가 없거나 길이가 부족합니다. 환경변수를 설정한 뒤 다시 실행하세요.",
    );
  }
  if (!KEY_LOCATION.endsWith(`/${KEY}.txt`)) {
    throw new Error("INDEXNOW_KEY_LOCATION must end with /{key}.txt matching the key.");
  }
  if (!KEY_LOCATION.startsWith(`https://${HOST}/`)) {
    throw new Error("keyLocation host must match the submission host.");
  }
}

async function main() {
  if (!KEY) {
    console.log(
      "IndexNow key is not set (INDEXNOW_KEY). Skipping submission safely.",
    );
    return;
  }

  assertKeyConsistency();

  const urlList = Array.from(new Set(URL_LIST));

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`IndexNow submitting ${urlList.length} URLs to ${ENDPOINT}`);
  console.log(`keyLocation: ${KEY_LOCATION}`);

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
