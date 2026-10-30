# Changelog — DF Sabiku Portfolio

## [0.2.1] — 2026-10-30
Status: **Data-driven content integration; build/deployment not yet verified**

### Added
- Added public/data/publications.json with six publisher-checked publication records.
- Added public/data/activities.json with three official Polije outreach/news records.
- Updated the React app to fetch and render publication and activity cards from JSON.
- Added responsive card styles for publication and activity sections.
- Added academic profile links to src/data/profile.json, including ORCID 0009-0009-9278-1855.
- Corrected ORCID research note: public profile is abbreviated as Dewi F Sabiku, lists Politeknik Negeri Jember employment and verified polije.ac.id domain, and the same ORCID is linked from a publisher author record.

### Maintenance model
- Routine publication/activity additions or removals are JSON-only changes; UI components do not need editing.
- Documents remain folder-based with optional adjacent .meta.json metadata.
- No admin/CMS interface exists; content updates are committed through GitHub.

### Validation
- Publisher pages checked for six publications and author affiliation.
- Code changes committed, but full npm build and Pages deployment are still pending.

## [0.2.0] — 2026-10-30
- Initial academic research discovery and evidence log.
- Matched Google Scholar and SINTA profiles and recorded official Polije activity sources.
- Added bilingual portfolio content draft and project tracking updates.

## [0.1.0] — 2026-10-30
- React/Vite/TypeScript scaffold, initial bilingual portfolio UI, profile JSON, document folders, metadata index generator, GitHub Pages workflow and README.
- Build/deployment not verified.
