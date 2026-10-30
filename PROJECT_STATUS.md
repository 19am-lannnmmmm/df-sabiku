# Project Status — DF Sabiku Portfolio

**Last updated:** 2026-10-30
**Current version:** v0.2.9 — panduan arsip dokumen dan template metadata disiapkan; CI untuk commit dokumentasi menunggu verifikasi.
**Branch:** main
**Repository:** https://github.com/19am-lannnmmmm/df-sabiku
**Live site:** https://19am-lannnmmmm.github.io/df-sabiku/

## Posisi saat ini
Fondasi React/Vite/TypeScript, tema botani bilingual, model konten JSON, dan workflow GitHub Pages tersedia. GitHub Actions run #84 pada commit `c41015c` completed dengan conclusion `success`; fixture test generator dijalankan sebelum build.

## Struktur konten
- `src/data/profile.json` — identitas, pendidikan, minat, tautan akademik.
- `public/data/publications.json` — daftar publikasi.
- `public/data/activities.json` — daftar kegiatan.
- `public/documents/{research,publications,community,teaching,other}/` — arsip PDF/gambar dan metadata `.meta.json`.
- `public/documents/README.md` — panduan unggah dan publikasi dokumen.
- `docs/templates/document.meta.json.example` — contoh metadata.

Belum ada panel admin/CMS. Data diperbarui melalui GitHub; indeks dokumen dibuat otomatis saat build.

## Pekerjaan terverifikasi
- [x] Enam publikasi dan tiga kegiatan awal dimasukkan dari sumber publik.
- [x] Bilingual UI dan kartu berbasis JSON.
- [x] Generator indeks menetapkan ID, kategori, tipe, dan URL kanonis.
- [x] Fixture test metadata konflik lolos pada GitHub Actions run #84.
- [x] Panduan unggah dan template metadata disiapkan pada v0.2.9.

## Masih terbuka
- [ ] Verifikasi CI dan live deployment untuk commit panduan v0.2.9.
- [ ] Uji satu dokumen nyata yang disetujui: metadata, URL, dan kartu website.
- [ ] Konfirmasi biodata, jabatan fungsional, pendidikan, dan tautan ORCID kepada pemilik.
- [ ] Finalisasi foto asli tanpa mengubah wajah/piksel identitas; gelas dan tas dikecualikan.
- [ ] Lengkapi pengalaman mengajar, hibah, pembimbingan, dan penghargaan jika ada bukti.
- [ ] Implementasi motion/WebGL dan QA desktop/mobile.

## Deployment
- Run #84: https://github.com/19am-lannnmmmm/df-sabiku/actions/runs/41008411810 — success pada commit `c41015c`.
- Commit panduan dokumen ini memerlukan workflow sendiri sebelum dinyatakan ter-deploy.

## Aturan
Jangan klaim build/deployment berhasil tanpa hasil pipeline sukses. Perbarui status, changelog, worklog, dan roadmap pada setiap sesi.