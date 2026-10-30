# Roadmap — DF Sabiku

Dokumen ini adalah peta kerja utama. Status hanya diubah setelah pekerjaan benar-benar dilakukan dan diverifikasi.

| Versi | Tahap | Cakupan | Status |
|---|---|---|---|
| v0.1.0 | Foundation | React/Vite/TS, layout dasar, bilingual, JSON profil, folder dokumen, workflow Pages | **Selesai** |
| v0.2.0 | Verification & content model | Build test, deploy test, metadata schema, konten awal terverifikasi | **Selesai untuk build/deploy awal**; audit konten/dokumen berlanjut |
| v0.3.0 | Academic research | Profil institusi, Scholar/SINTA/ORCID, publikasi, penelitian, teaching, community service | Riset awal dan data awal tersedia; perlu konfirmasi biodata dan pengayaan konten |
| v0.4.0 | Profile media | Cutout foto, optimasi PNG/WebP, fallback dan aksesibilitas | Menunggu konfirmasi foto dan izin penggunaan |
| v0.5.0 | Motion foundation | GSAP/ScrollTrigger atau Framer Motion (pilih satu), reduced motion, responsive polish | Planned |
| v0.6.0 | WebGL hero | Three.js/R3F, partikel benih, interaksi pointer, fallback statis | Planned |
| v0.7.0 | Scroll narrative | Imbibisi → radikula → plumula → bibit; kartu riset dan publikasi | Planned |
| v0.8.0 | Content integration | Arsip PDF/gambar, galeri, CV, academic IDs, kontak final | Planned |
| v1.0.0 | Release | QA desktop/mobile, aksesibilitas, performa, SEO, deployment stabil | Planned |

## Progress v0.2.7
- Added English display fields for activities and publication summaries/categories while preserving original scholarly titles, journal names, and author names.
- Localized activity cards, publication metadata labels, education program names, and research-interest labels.
- Deployment verification pending.

## Progress v0.2.6
- Fixed misleading empty archive placeholder: it now appears only when both activity and document lists are empty.
- Localized archive upload guidance for English mode.
- Deployment verification pending.

## Progress v0.2.5 — contact and media audit
- Removed the empty email link and surfaced existing academic profile links instead.
- Confirmed cup and pink handbag are to be excluded from the portrait composition.
- Automated cutout tests are not production-ready because staircase remnants remain; hero photo integration remains pending.

## Progress v0.2.4 — deployment verified
- GitHub Actions run #52 (commit `7ca77c5`) completed successfully.
- Initial GitHub Pages deployment pipeline is now green.
- Live URL: https://19am-lannnmmmm.github.io/df-sabiku/

## Progress v0.2.3 — TypeScript fix
- Added `src/vite-env.d.ts` with `/// <reference types="vite/client" />`.
- The change resolved the TypeScript `ImportMeta.env` type issue; validated by successful run #52.

## Progress v0.2.2 — workflow compatibility
- Removed npm cache configuration from `setup-node` because the repository had no lockfile.

## Progress v0.2.1 — data-driven content
- Publications: `public/data/publications.json`.
- Activities: `public/data/activities.json`.
- Academic profile: `src/data/profile.json`.
- Documents: `public/documents/{research,publications,community,teaching,other}/`, with adjacent `.meta.json` files.

## Prioritas berikutnya
1. Konfirmasi foto profil final dan izin penggunaannya; tentukan apakah gelas/tas ikut dihapus dari cutout.
2. Audit tampilan live pada desktop dan mobile, termasuk navigasi, bilingual, tautan, dan email kontak.
3. Audit schema metadata dan alur penambahan dokumen PDF/gambar dari folder sampai tampil di website.
4. Lengkapi konten teaching, penelitian, dan kegiatan hanya berdasarkan sumber/bukti yang tersedia.
5. Implementasikan motion foundation, lalu WebGL hero dan scroll narrative secara bertahap.

## Definition of done
Setiap versi harus memiliki ringkasan perubahan, daftar file/fitur, cara uji, hasil uji, known issues, dan commit SHA. Jangan tandai selesai hanya karena kode sudah ditulis.
