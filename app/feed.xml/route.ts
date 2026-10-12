import { rssResponse } from "@/lib/rss";

/** /rss.xml과 동일 RSS XML을 반환하는 alias */
export function GET() {
  return rssResponse();
}
