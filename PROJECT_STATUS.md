# Project Status — DF Sabiku Portfolio

**Last updated:** 2026-10-30  
**Current version:** v0.2.0 (research discovery & content verification in progress)  
**Branch:** main  
**Repository:** https://github.com/19am-lannnmmmm/df-sabiku  
**Deployment target:** https://19am-lannnmmmm.github.io/df-sabiku/

## Posisi saat ini
Fondasi frontend dan struktur konten sudah ada di repository. Riset sumber publik kini sudah dimulai dan menghasilkan profil akademik yang cocok serta beberapa publikasi dan kegiatan resmi kampus. Website belum dinyatakan lolos build atau sudah ter-deploy.

## Status pekerjaan

### Fondasi teknis
- [x] React + Vite + TypeScript scaffold
- [x] Tema visual awal dan layout responsif
- [x] Toggle bahasa Indonesia/Inggris
- [x] Profil dan pendidikan dipisahkan ke JSON
- [x] Folder dokumen per kategori dan generator indeks
- [x] Workflow GitHub Actions untuk Pages
- [ ] Jalankan build dan perbaiki sampai lulus
- [ ] Verifikasi deployment GitHub Pages
- [ ] Verifikasi tautan dokumen dan metadata

### Riset dan konten
- [x] Temukan Google Scholar profile yang cocok (ID 16NBQ3MAAAAJ; afiliasi Politeknik Negeri Jember)
- [x] Temukan SINTA profile yang cocok (ID 6935628; D4 Teknik Produksi Benih)
- [x] Temukan rekam publikasi melalui Scholar, SIPORA, DOI/publisher pages
- [x] Temukan tiga berita resmi Polije yang menyebut Dewi sebagai anggota tim kegiatan/pengabdian
- [x] Buat evidence log dengan URL, tanggal akses, confidence, dan catatan perbedaan indeks
- [ ] Verifikasi metadata final seluruh publikasi (author order, DOI, issue/pages)
- [ ] Konfirmasi ORCID (belum ditemukan profil personal yang cocok)
- [ ] Verifikasi jabatan fungsional, riwayat pendidikan, dan CV dengan dokumen resmi/pemilik
- [ ] Lengkapi daftar pengajaran, riset, hibah, pembimbingan, dan kegiatan lain
- [ ] Ubah data terverifikasi menjadi konten JSON yang digunakan website

### Media dan motion
- [ ] Konfirmasi foto yang diunggah boleh dipakai sebagai foto publik
- [ ] Buat aset cutout sesuai arahan (gelas/tas belum dikonfirmasi)
- [ ] Implementasi animasi DOM/GSAP atau Framer Motion (pilihan belum final)
- [ ] Implementasi WebGL/Three.js dan scroll narrative

## Temuan akademik awal (snapshot 2026-10-30)
- Google Scholar: 8 artikel terdaftar, 3 sitasi, h-index 1, i10-index 0.
- SINTA ID 6935628: SINTA Score Overall 46; SINTA Score 3Yr 45. Profil menampilkan D4 Teknik Produksi Benih, Politeknik Negeri Jember.
- Rekam yang didukung sumber penerbit/repositori antara lain artikel hidroponik (DOI 10.29303/abdiinsani.v12i5.2404), artikel usahatani bibit tebu (DOI 10.37149/jimdp.v10i3.2123), serta beberapa rekam jurnal 2025–2026 yang masih perlu pemeriksaan metadata final.
- Berita resmi Polije yang ditemukan: pemberdayaan petani Klungkung (2025), pelatihan budidaya krisan SDN Kemuning Lor 3 (2025), dan Green Education sayuran organik (2026).
- SIPORA author browse page hanya menampilkan satu item untuk nama creator tersebut, sedangkan Google Scholar menampilkan delapan rekam artikel. Perbedaan cakupan indeks dicatat; jangan mengklaim satu angka sebagai total publikasi final.

Rincian dan semua URL sumber ada di `docs/RESEARCH_SOURCES.md`.

## Catatan foto
Foto unggahan dalam percakapan belum dipasang ke repository dan belum dikonfirmasi sebagai aset publik. Konfirmasi identitas/izin penggunaan dan apakah gelas serta tas dihapus masih diperlukan.

## Aturan kelanjutan
Setiap sesi wajib memperbarui status, changelog, worklog, dan issue yang relevan. Jangan klaim build/deployment berhasil sebelum pipeline benar-benar diuji.
