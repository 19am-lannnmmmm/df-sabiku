# Roadmap — DF Sabiku

Dokumen ini adalah peta kerja utama. Status hanya diubah setelah pekerjaan benar-benar dilakukan dan diverifikasi.

| Versi | Tahap | Cakupan | Status |
|---|---|---|---|
| v0.1.0 | Foundation | React/Vite/TS, layout dasar, bilingual, JSON profil, folder dokumen, workflow Pages | Scaffold dibuat; build/deploy belum diverifikasi |
| v0.2.0 | Verification & content model | Build test, deploy test, metadata schema, validasi link/aset, konten awal terverifikasi | **Berjalan sebagian:** evidence log akademik dibuat; build/deploy dan validasi konten masih terbuka |
| v0.3.0 | Academic research | Profil institusi, Scholar/SINTA/ORCID, publikasi, penelitian, teaching, community service | **Riset awal ditemukan:** Scholar + SINTA teridentifikasi, beberapa publikasi dan berita Polije tercatat; metadata final masih perlu audit |
| v0.4.0 | Profile media | Cutout foto, optimasi PNG/WebP, fallback dan aksesibilitas | Menunggu konfirmasi foto dan izin penggunaan |
| v0.5.0 | Motion foundation | GSAP/ScrollTrigger atau Framer Motion (pilih satu), reduced motion, responsive polish | Planned |
| v0.6.0 | WebGL hero | Three.js/R3F, partikel benih, interaksi pointer, fallback statis | Planned |
| v0.7.0 | Scroll narrative | Imbibisi → radikula → plumula → bibit; kartu riset dan publikasi | Planned |
| v0.8.0 | Content integration | Arsip PDF/gambar, galeri, CV, academic IDs, kontak final | Planned |
| v1.0.0 | Release | QA desktop/mobile, aksesibilitas, performa, SEO, deployment stabil | Planned |

## Progress v0.2.3\n- Run #47 menunjukkan `npm install` berhasil tetapi `tsc -b` gagal karena deklarasi `vite/client` belum tersedia di source.\n- Menambahkan `src/vite-env.d.ts`; tunggu dan periksa run setelah commit ini.\n\n## Progress v0.2.2\n- Menghapus `cache: npm` dari GitHub Actions karena belum tersedia `package-lock.json`; workflow baru dipicu ulang.\n- Menunggu hasil build dan deployment sebelum checklist verifikasi ditutup.\n\n## Progress v0.2.1
- Data publikasi berada di `public/data/publications.json`.
- Data kegiatan berada di `public/data/activities.json`.
- Profil akademik berada di `src/data/profile.json`.
- Kartu publikasi dan kegiatan sudah dirender dari JSON oleh aplikasi.
- Penambahan/penghapusan item cukup melalui perubahan JSON dan commit GitHub; belum ada panel admin.

## Prioritas berikutnya
1. Audit metadata publikasi dari halaman penerbit/DOI dan lengkapi bukti.
2. Konfirmasi data pendidikan, jabatan fungsional, serta identitas/izin foto.
3. Integrasikan hanya konten yang telah tervalidasi ke JSON website.
4. Periksa hasil run GitHub Actions setelah deklarasi tipe Vite ditambahkan; pastikan build, artifact upload, dan deploy berhasil.
5. Uji deployment dan tautan dokumen.

## Aturan perubahan versi
- Patch (mis. 0.1.1): bug fix tanpa perubahan fitur besar.
- Minor (mis. 0.2.0): fitur/section baru yang kompatibel.
- Major (mis. 1.0.0): rilis publik stabil atau perubahan besar.

## Definition of done
Setiap versi harus memiliki: ringkasan perubahan, daftar file/fitur, cara uji, hasil uji, known issues, dan commit SHA. Jangan tandai selesai hanya karena kode sudah ditulis.
