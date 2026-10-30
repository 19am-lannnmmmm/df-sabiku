# Changelog — DF Sabiku Portfolio

## [0.2.5] — 2026-10-30
### Fixed
- Removed the empty `mailto:` action, which had no recipient and could not contact the profile owner.
- Replaced it with the existing Google Scholar, SINTA, ORCID, and SIPORA profile links; added responsive link layout.
### Media status
- User confirmed the cup and pink handbag should be excluded from the hero portrait composition.
- Automated GrabCut experiments still leave staircase fragments and damage edge details; no draft cutout has been committed or deployed. Preserve the original face and pixels; obtain a cleaner segmentation before integration.



## [0.2.4] — 2026-10-30
Status: **GitHub Actions and GitHub Pages deployment successful**

### Verified
- GitHub Actions run #52 completed with conclusion `success`.
- The workflow completed after adding the Vite environment type declaration.
- Live deployment target: https://19am-lannnmmmm.github.io/df-sabiku/

## [0.2.3] — 2026-10-30
Status: **Fixed and validated by run #52**

### Fixed
- Added `src/vite-env.d.ts` referencing `vite/client`; this resolves the observed TypeScript error for `import.meta.env.BASE_URL`.
- Run #47 exposed the missing declaration; run #52 subsequently completed successfully.

## [0.2.2] — 2026-10-30
### Fixed
- Removed `setup-node` npm cache configuration because the repository has no lockfile yet; dependency installation continues with `npm install`.

## [0.2.1] — 2026-10-30
### Added
- Added `public/data/publications.json` with six publisher-checked publication records.
- Added `public/data/activities.json` with three official Polije outreach/news records.
- Updated the React app to fetch and render publication and activity cards from JSON.
- Added responsive card styles for publication and activity sections.
- Added academic profile links to `src/data/profile.json`, including ORCID 0009-0009-9278-1855.
- Routine publication/activity additions or removals are JSON-only changes; UI components do not need editing.
- Documents remain folder-based with optional adjacent `.meta.json` metadata. No admin/CMS interface exists.

## [0.2.0] — 2026-10-30
- Initial academic research discovery and evidence log.
- Matched Google Scholar and SINTA profiles and recorded official Polije activity sources.
- Added bilingual portfolio content draft and project tracking updates.

## [0.1.0] — 2026-10-30
- React/Vite/TypeScript scaffold, initial bilingual portfolio UI, profile JSON, document folders, metadata index generator, GitHub Pages workflow and README.
