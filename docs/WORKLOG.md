## 2026-10-30 — v0.2.2 — GitHub Actions workflow compatibility\n- Inspected repository root and confirmed there is no package-lock.json.\n- Found `actions/setup-node` configured with `cache: npm`, which expects a dependency lockfile.\n- Removed npm cache configuration while retaining Node 22 and `npm install`.\n- Triggered a fresh GitHub Pages workflow run; build/deployment result is pending and must be checked before marking validation complete.\n\n# Worklog

## 2026-10-30 — v0.2.1 — Verified records and JSON content integration
- Checked publisher landing pages for six records; each lists the exact full author name Dewi Fatmawaty Sabiku and Politeknik Negeri Jember affiliation.
- Verified ORCID 0009-0009-9278-1855: public name abbreviated as Dewi F Sabiku, employment at Politeknik Negeri Jember, verified email domain polije.ac.id; same ORCID is linked from publisher author record on the sugarcane-seed paper.
- Added public/data/publications.json (six entries) and public/data/activities.json (three official Polije activities).
- Updated src/App.tsx to fetch/render publication and activity records from JSON.
- Added responsive CSS for those cards.
- Added academic profile URLs to src/data/profile.json.
- Updated research evidence, content draft, status and changelog.
- Routine content changes can now be done by editing the JSON files; no admin panel/CMS is implemented.
- Build/deployment remains untested.

## 2026-10-30 — v0.2.0 — Research discovery
- Firecrawl search/scrape used for Google Scholar, SINTA, SIPORA, journal publishers, ORCID and official Polije pages.
- Identified matching Scholar and SINTA profiles and three official institutional news items.
- Recorded source URLs, confidence and index-coverage discrepancies.
- Build/deployment still unverified.

## 2026-10-30 — v0.1.0 — Foundation scaffold
- React/Vite/TypeScript foundation and initial portfolio layout.
- Bilingual UI and initial profile content model.
- Document folders and metadata-index generation.
- GitHub Pages workflow and project documentation.
- Build/deployment validation pending.
