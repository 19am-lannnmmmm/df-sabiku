# Changelog — DF Sabiku Portfolio

## [0.2.9] — 2026-10-30
### Added
- Panduan unggah dokumen pada `public/documents/README.md`, termasuk kategori, format, metadata sidecar, privasi, dan langkah publikasi.
- Template metadata reusable pada `docs/templates/document.meta.json.example`.
### Tested
- Fixture test generator lolos di GitHub Actions run #84 pada commit `c41015c`.
- Commit dokumentasi ini masih memerlukan verifikasi workflow tersendiri.

## [0.2.8] — 2026-10-30
- Intro dokumentasi diperbarui; metadata sidecar tidak dapat menimpa ID, kategori, tipe, atau URL.
- GitHub Actions run #82 sukses dan live page telah diperiksa.

## [0.2.7] — 2026-10-30
- Menambahkan terjemahan Inggris untuk ringkasan kegiatan/publikasi tanpa mengubah judul ilmiah, nama jurnal, dan penulis.
- Run #76 sukses.

## [0.2.6] — 2026-10-30
- Memperbaiki empty state arsip agar tidak muncul ketika data kegiatan atau dokumen tersedia.

## [0.2.5] — 2026-10-30
- Mengganti tautan email kosong dengan tautan akademik yang tersedia.
- Cutout foto belum layak; eksperimen masih menyisakan fragmen tangga dan tidak dipublikasikan.

## Foundation v0.1.0–v0.2.4
- Scaffold React/Vite/TypeScript, bilingual UI, data JSON, metadata generator, dan workflow GitHub Pages; run #52 sukses.