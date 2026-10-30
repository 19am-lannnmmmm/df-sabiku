# Changelog — DF Sabiku Portfolio

Semua perubahan penting proyek dicatat di sini. Format versi mengikuti Semantic Versioning selama tahap pengembangan.

## [0.2.0] — 2026-10-30
Status: **Riset awal dan evidence log; build/deployment masih belum diverifikasi**

### Added
- Riset web melalui Firecrawl pada profil Google Scholar, SINTA, repositori SIPORA, penerbit jurnal, dan situs resmi Politeknik Negeri Jember.
- Identifikasi Google Scholar profile ID `16NBQ3MAAAAJ` dan SINTA author ID `6935628`; keduanya menunjukkan afiliasi Politeknik Negeri Jember.
- Temuan awal publikasi 2019–2026 dan kegiatan pengabdian/edukasi yang disebut dalam berita resmi Polije.
- Evidence log diperbarui dengan tautan sumber, tanggal akses, confidence, dan catatan perbedaan cakupan indeks.
- Project status diperbarui untuk mencerminkan riset dan pekerjaan yang masih tertunda.

### Important notes
- Google Scholar menampilkan 8 rekam artikel; SINTA menampilkan ringkasan 8 artikel Google Scholar dan metrik saat akses. Angka tersebut merupakan snapshot, bukan klaim total publikasi sepanjang karier.
- SIPORA creator browse menampilkan satu item untuk nama persis tersebut. Perbedaan indeks perlu dipertahankan secara transparan.
- ORCID personal belum berhasil dikonfirmasi; jangan pasang tautan/ikon ORCID sebelum ada bukti.
- Beberapa rekam publikasi masih memerlukan validasi author order, DOI, volume/issue, dan halaman.
- Build, deployment, foto publik, dan implementasi WebGL tetap belum diverifikasi/selesai.

### Next
- Lanjutkan verifikasi metadata publikasi di halaman penerbit/DOI.
- Verifikasi biodata, pendidikan, jabatan fungsional, dan pengalaman melalui dokumen resmi atau konfirmasi pemilik.
- Siapkan data konten terstruktur setelah validasi.
- Jalankan build dan cek GitHub Pages.

## [0.1.0] — 2026-10-30
Status: **Fondasi awal / belum production-verified**

### Added
- Scaffold React + Vite + TypeScript.
- Tema awal hijau botani, layout responsif, navigasi bilingual ID/EN.
- Data identitas dan pendidikan dipisahkan ke `src/data/profile.json`.
- Section Hero, About, Education, Research Interests, Documentation, Publications, Contact.
- Folder dokumentasi per kategori.
- Script indeks dokumen otomatis dan metadata `.meta.json`.
- GitHub Actions workflow untuk GitHub Pages.
- README berisi instruksi lokal dan tata cara unggah dokumentasi.

### Known limitations
- Build belum diverifikasi dengan menjalankan pipeline penuh.
- Deployment GitHub Pages belum diverifikasi.
- Foto cutout belum dipasang.
- Konten riset, publikasi, pengajaran, dan pengabdian belum lengkap diverifikasi.
- Bagian kontak masih placeholder `mailto:`.
- WebGL/Three.js, scroll choreography, dan animasi partikel tingkat lanjut belum dimulai.
