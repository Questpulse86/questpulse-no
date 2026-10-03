#!/usr/bin/env python3
"""Non-mutating website health audit for QuestPulse."""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

USER_AGENT = "QuestPulse-SiteHealth/1.0 (+https://questpulse.no)"
MAX_PAGES = 25
TIMEOUT = 20


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.title = ""
        self.meta: dict[str, str] = {}
        self.links: list[str] = []
        self.images: list[dict[str, str]] = []
        self.lang = ""
        self._in_title = False

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        data = {k.lower(): (v or "") for k, v in attrs}
        if tag == "html":
            self.lang = data.get("lang", "")
        elif tag == "title":
            self._in_title = True
        elif tag == "meta":
            key = (data.get("name") or data.get("property") or "").lower()
            if key:
                self.meta[key] = data.get("content", "")
        elif tag == "a" and data.get("href"):
            self.links.append(data["href"])
        elif tag == "img":
            self.images.append({"src": data.get("src", ""), "alt": data.get("alt", "")})

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self._in_title = False

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title += data.strip()


def fetch(url: str, method: str = "GET") -> tuple[int, str, str]:
    request = Request(url, method=method, headers={"User-Agent": USER_AGENT, "Accept": "text/html,*/*"})
    with urlopen(request, timeout=TIMEOUT) as response:
        body = response.read().decode(response.headers.get_content_charset() or "utf-8", errors="replace")
        return response.status, response.geturl(), body


def same_site(url: str, base_url: str) -> bool:
    return urlparse(url).netloc in ("", urlparse(base_url).netloc)


def absolute(url: str, current: str) -> str:
    return urljoin(current, url.split("#")[0])


def check_page(url: str, base_url: str) -> dict:
    page = {"url": url, "issues": [], "links": []}
    try:
        status, resolved_url, body = fetch(url)
        page["status"] = status
        page["resolved_url"] = resolved_url
    except (HTTPError, URLError, TimeoutError) as error:
        page["status"] = getattr(error, "code", None)
        page["issues"].append({"severity": "critical", "rule": "unreachable", "detail": str(error)})
        return page

    parser = PageParser()
    parser.feed(body)
    page["title"] = parser.title
    page["description"] = parser.meta.get("description", "")
    page["has_ga4"] = bool(re.search(r"(G-[A-Z0-9]{6,}|googletagmanager\\.com|gtag\\()", body))
    page["lang"] = parser.lang

    if not parser.title:
        page["issues"].append({"severity": "high", "rule": "missing-title", "detail": "Mangler <title>."})
    elif len(parser.title) > 60:
        page["issues"].append({"severity": "medium", "rule": "long-title", "detail": f"Tittel er {len(parser.title)} tegn (mål: 50–60)."})
    if not page["description"]:
        page["issues"].append({"severity": "high", "rule": "missing-description", "detail": "Mangler meta description."})
    elif len(page["description"]) > 160:
        page["issues"].append({"severity": "medium", "rule": "long-description", "detail": f"Meta description er {len(page['description'])} tegn (mål: 120–160)."})
    if not parser.meta.get("og:title") or not parser.meta.get("og:description") or not parser.meta.get("og:image"):
        page["issues"].append({"severity": "medium", "rule": "incomplete-open-graph", "detail": "Mangler én eller flere av og:title, og:description eller og:image."})
    if not parser.lang:
        page["issues"].append({"severity": "medium", "rule": "missing-language", "detail": "Mangler lang-attributt på <html>."})
    if not page["has_ga4"]:
        page["issues"].append({"severity": "high", "rule": "ga4-not-detected", "detail": "Fant ikke en synlig GA4-/GTM-tag i HTML."})

    missing_alt = [image["src"] for image in parser.images if image["src"] and not image["alt"].strip()]
    if missing_alt:
        page["issues"].append({"severity": "medium", "rule": "missing-image-alt", "detail": f"{len(missing_alt)} bilde(r) mangler alt-tekst."})

    page["links"] = [absolute(link, resolved_url) for link in parser.links if same_site(absolute(link, resolved_url), base_url)]
    return page


def write_markdown(report: dict, output: Path) -> None:
    counts = report["counts"]
    lines = [
        "# QuestPulse – nettstedskontroll",
        "",
        f"**Kontrollert:** {report['checked_at']}",
        f"**Nettside:** {report['site_url']}",
        "",
        f"## Resultat: {counts['critical']} kritisk · {counts['high']} høy · {counts['medium']} middels",
        "",
    ]
    for page in report["pages"]:
        lines.extend([f"## {page['url']}", ""])
        if not page["issues"]:
            lines.append("Ingen avvik funnet i denne basis-sjekken.")
        for issue in page["issues"]:
            lines.append(f"- **{issue['severity'].upper()} — {issue['rule']}**: {issue['detail']}")
        lines.append("")
    output.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default=os.getenv("SITE_URL", "https://questpulse.no"))
    parser.add_argument("--output-dir", default="site-health-report")
    args = parser.parse_args()

    root_url = args.url.rstrip("/") + "/"
    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    checked: set[str] = set()
    queue = [root_url]
    pages: list[dict] = []
    while queue and len(pages) < MAX_PAGES:
        url = queue.pop(0)
        if url in checked:
            continue
        checked.add(url)
        page = check_page(url, root_url)
        pages.append(page)
        for link in page.get("links", []):
            parsed = urlparse(link)
            if parsed.scheme in ("http", "https") and link not in checked and len(queue) < MAX_PAGES:
                queue.append(link)

    issues = [issue for page in pages for issue in page["issues"]]
    counts = {level: sum(issue["severity"] == level for issue in issues) for level in ("critical", "high", "medium")}
    report = {
        "site_url": root_url,
        "checked_at": os.getenv("GITHUB_RUN_ID", "local run"),
        "pages": pages,
        "counts": counts,
        "issue_count": len(issues),
    }
    (output_dir / "report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    write_markdown(report, output_dir / "report.md")
    print(json.dumps({"issue_count": len(issues), **counts}))
    return 1 if counts["critical"] else 0


if __name__ == "__main__":
    sys.exit(main())
