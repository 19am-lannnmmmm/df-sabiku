## 2026-10-30 — v0.2.7 — Bilingual academic content
- Added English-language fields to the activity and publication JSON records.
- Updated React rendering so English mode localizes activity cards, publication categories/summaries, education program labels, and research-interest labels.
- Kept scholarly publication titles, journal names, and author names unchanged to preserve their published bibliographic form.
- Commits: `ca269a5` (publication translations), `cd3fd9f` (activity translations), `0964305` (bilingual rendering).
- Deployment verification pending.

# Worklog — DF Sabiku Portfolio

## 2026-10-30 — v0.2.6 — Documentation archive empty state
- Live audit showed the archive's “Konten akan ditambahkan” placeholder remained visible even while three activity entries were displayed.
- Updated `src/App.tsx` so the empty-state card appears only when there are no activities and no documents.
- Localized the upload instruction for English mode.
- Commit: `f7ad848`.



## 2026-10-30 — v0.2.5 — Contact link repair and profile media audit
- Replaced the nonfunctional empty `mailto:` anchor with Google Scholar, SINTA, ORCID, and SIPORA links already present in `profile.json`.
- Added responsive layout for the academic profile links.
- User confirmed the cup and pink handbag should be excluded from the portrait composition.
- Tested an OpenCV GrabCut cutout against the original upload. Staircase fragments remained around the hijab and shoulder, so the generated PNG was rejected and not committed or deployed. Preserve identity and source pixels; cutout remains open.
- Commits: `592365d` (App contact links), `3342ddd` (contact link styles).



## 2026-10-30 — v0.2.4 — GitHub Pages deployment verified
- Rechecked GitHub Actions run #52: run ID `41003026478`, head commit `7ca77c576d4dc07331f29115937082a52435a264`.
- Workflow status is `completed` and conclusion is `success`.
- This validates the workflow after the Vite type declaration fix; the initial Pages deployment pipeline is now green.
- Live deployment URL: https://19am-lannnmmmm.github.io/df-sabiku/
- Updated project status, changelog, and roadmap to reflect the verified result.
- Next: audit the deployed UI and validate the folder/metadata document publishing workflow.

## 2026-10-30 — v0.2.3 — TypeScript Vite environment declaration
- Run #47 showed `npm install` succeeded (72 packages, 0 vulnerabilities), but `tsc -b` failed at `src/App.tsx(21,30)` with `TS2339: Property 'env' does not exist on type 'ImportMeta'`.
- Confirmed `src/vite-env.d.ts` was absent. Added it with `/// <reference types="vite/client" />`.
- Run #47 uploaded no Pages artifact and the deploy job was skipped. The fix was subsequently validated by successful run #52.

## 2026-10-30 — v0.2.2 — GitHub Actions workflow compatibility
- Confirmed there was no `package-lock.json` while `setup-node` was configured with `cache: npm`.
- Removed npm cache configuration while retaining Node 22 and `npm install`.

## 2026-10-30 — v0.2.1 — Verified records and JSON content integration
- Checked publisher landing pages for six records; each lists the exact full author name Dewi Fatmawaty Sabiku and Politeknik Negeri Jember affiliation.
- Verified ORCID 0009-0009-9278-1855: public name abbreviated as Dewi F Sabiku, employment at Politeknik Negeri Jember, verified email domain polije.ac.id; same ORCID is linked from publisher author record on the sugarcane-seed paper.
- Added `public/data/publications.json` (six entries) and `public/data/activities.json` (three official Polije activities).
- Updated `src/App.tsx` to fetch/render publication and activity records from JSON.
- Added responsive CSS for those cards and academic profile URLs to `src/data/profile.json`.
- Routine content updates are JSON-based; no admin/CMS panel is implemented.

## 2026-10-30 — v0.2.0 — Research discovery
- Identified Google Scholar and SINTA profiles and three official Polije activity sources.
- Recorded source URLs, confidence and index-coverage discrepancies in the research evidence log.

## 2026-10-30 — v0.1.0 — Foundation scaffold
- React/Vite/TypeScript foundation and initial portfolio layout.
- Bilingual UI and initial profile content model.
- Document folders and metadata-index generation.
- GitHub Pages workflow and project documentation.
