# Project Status — DF Sabiku Portfolio

**Last updated:** 2026-10-30
**Latest commits:** `ca269a5`, `cd3fd9f`, `0964305` — add English translations for activity and publication cards; deployment retry queued after rapid pushes cancelled earlier runs
**Current work:** v0.2.7 — bilingual academic card content; profile cutout still under preparation  
**Current version:** v0.2.4 (GitHub Pages deployment verified)  
**Branch:** main  
**Repository:** https://github.com/19am-lannnmmmm/df-sabiku  
**Live site:** https://19am-lannnmmmm.github.io/df-sabiku/

## Posisi saat ini
Fondasi React/Vite/TypeScript, tema botani bilingual, model konten JSON, dan workflow GitHub Pages sudah tersedia. GitHub Actions run **#52** (commit `7ca77c5`) berstatus **completed / success** pada 2026-10-30. Ini mengonfirmasi pipeline build dan deploy workflow berhasil. Website dapat ditinjau di URL Pages di atas.

## Pekerjaan selesai
- [x] English mode now translates activity titles, locations, roles, summaries, publication categories and summaries; original scholarly publication titles and author names remain unchanged.
- [x] Education program labels and research-interest labels are localized in English mode.
- [x] Scaffold React + Vite + TypeScript, tema botani, bilingual.
- [x] Profil utama memakai nama persis **Dewi Fatmawaty Sabiku**.
- [x] Profil akademik: Google Scholar ID 16NBQ3MAAAAJ, SINTA ID 6935628.
- [x] ORCID teridentifikasi: 0009-0009-9278-1855; record menampilkan Dewi F Sabiku, employment Politeknik Negeri Jember, verified email domain polije.ac.id, dan ID yang sama tertaut di laman penulis artikel bibit tebu. Konfirmasi pemilik tetap disarankan.
- [x] Enam publikasi diperiksa di halaman penerbit/DOI; nama lengkap Dewi Fatmawaty Sabiku dan afiliasi Politeknik Negeri Jember tercantum.
- [x] Tiga kegiatan/berita resmi Polije dicatat dengan peran hati-hati sebagai anggota tim.
- [x] Data publikasi dan kegiatan disimpan terpisah dalam JSON dan dirender otomatis.
- [x] Kartu publikasi/kegiatan diberi styling responsif.
- [x] GitHub Actions build dan GitHub Pages deployment berhasil pada run #52.
- [x] Evidence log, content draft, changelog, roadmap, worklog diperbarui.

## Struktur konten yang mudah dirawat
- `src/data/profile.json` — identitas, pendidikan, minat, tautan akademik.
- `public/data/publications.json` — daftar publikasi; tambah/hapus/edit objek data.
- `public/data/activities.json` — daftar kegiatan; tambah/hapus/edit objek data.
- `public/documents/{research,publications,community,teaching,other}/` — unggah file; metadata berdampingan memakai `.meta.json`; indeks dibuat oleh script.

Belum ada panel admin/CMS. Perubahan data dilakukan dengan mengedit JSON dan commit ke GitHub; dokumen ditambahkan ke folder sesuai kategori dengan metadata pendamping.

## Masih terbuka
- [ ] Audit link dan metadata dokumen setelah penambahan file nyata.
- [ ] Verify v0.2.7 deployment and manually test Indonesian/English toggle across all cards.
- [ ] Konfirmasi pemilik atas ORCID, jabatan fungsional, pendidikan, serta isi biodata.
- [ ] Konfirmasi foto publik dan arahan penghapusan gelas/tas.
- [ ] Tambahkan pengalaman mengajar, mata kuliah, hibah, pembimbingan, penghargaan jika ada bukti.
- [ ] Implementasi animasi scroll dan WebGL sesuai roadmap.
- [ ] QA visual di desktop/mobile dan pemeriksaan aksesibilitas/performa.

## Perbaikan teknis v0.2.3
- Run #47 mengungkap error `TS2339: Property 'env' does not exist on type 'ImportMeta'` di `src/App.tsx`.
- Menambahkan `src/vite-env.d.ts` dengan referensi `vite/client`.
- Perbaikan tervalidasi oleh run #52 yang completed dengan conclusion success.

## Deployment
- Workflow: [GitHub Actions run #52](https://github.com/19am-lannnmmmm/df-sabiku/actions/runs/41003026478)
- Status run: completed / success.
- Live URL: https://19am-lannnmmmm.github.io/df-sabiku/

## Temuan akademik (snapshot 2026-10-30)
- Google Scholar: 8 artikel, 3 sitasi, h-index 1, i10-index 0 (snapshot saat akses).
- SINTA ID 6935628: Score Overall 46; Score 3Yr 45.
- Enam artikel memiliki dukungan metadata publisher/DOI yang menyebut nama lengkap dan afiliasi yang sama.
- SIPORA author browse menampilkan satu item sementara Google Scholar menampilkan delapan rekam; perbedaan cakupan indeks tidak disamakan menjadi total publikasi.

Rincian sumber dan batas verifikasi: `docs/RESEARCH_SOURCES.md`. Draft konten: `docs/PORTFOLIO_CONTENT_DRAFT.md`.

## Aturan kelanjutan
Setiap sesi wajib memperbarui status, changelog, worklog, dan issue relevan. Jangan klaim build/deployment berhasil tanpa hasil pipeline yang sukses.
