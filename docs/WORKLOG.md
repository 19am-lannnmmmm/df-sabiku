# Worklog — DF Sabiku Portfolio

## 2026-10-30 — v0.2.10 — Accessibility polish\n- Added a skip link to main content, localized navigation labels, menu `aria-expanded`/`aria-controls`, and a localized accessible label for the hero illustration.\n- Added keyboard-visible focus styles and declared CSS variables `--text` and `--sage` referenced by publication card styles.\n- User requested that PDF and activity-photo upload testing be noted and deferred while other development continues.\n- CI for this commit must be checked before deployment claims.\n\n## 2026-10-30 — v0.2.9 — Panduan unggah dokumen
- Memeriksa folder arsip; kelima kategori saat ini hanya berisi `.gitkeep`, belum ada dokumen nyata.
- Menambahkan `public/documents/README.md` berisi kategori, format file, metadata sidecar, pengingat privasi/hak publikasi, dan langkah commit.
- Menambahkan `docs/templates/document.meta.json.example`.
- Memeriksa kontrak metadata pada renderer: title, year, description tampil di kartu; language tersimpan pada indeks tetapi belum digunakan untuk terjemahan kartu dokumen.
- GitHub Actions run #84 (`41008411810`) sukses pada commit `c41015c`; fixture test lolos.
- Perubahan panduan pada sesi ini perlu workflow tersendiri.
- Berikutnya: unggah satu file nyata yang disetujui dan periksa indeks, URL, serta kartu website.

## 2026-10-30 — v0.2.8 — Metadata hardening
- Generator menetapkan ID, kategori, tipe, URL setelah metadata; run #82 sukses dan live scrape terverifikasi.

## 2026-10-30 — v0.2.7 — Bilingual content
- Menambahkan field Inggris untuk ringkasan publikasi/kegiatan; judul ilmiah asli, jurnal, dan nama penulis dipertahankan.
- Run #76 sukses.

## Riwayat sebelumnya
- v0.2.6: memperbaiki empty state dokumentasi.
- v0.2.5: memperbaiki tautan kontak; cutout foto ditolak karena artefak tangga.
- v0.2.4: Pages workflow run #52 sukses.
- v0.2.3: menambahkan deklarasi tipe Vite.
- v0.2.2: menghapus konfigurasi npm cache tanpa lockfile.
- v0.2.1: integrasi publikasi dan kegiatan berbasis JSON.
- v0.1.0: scaffold React/Vite/TypeScript, bilingual, data profil, folder dokumen, dan workflow.