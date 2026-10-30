# Changelog — DF Sabiku Portfolio

Semua perubahan penting proyek dicatat di sini. Format versi mengikuti Semantic Versioning selama tahap pengembangan.

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
- Foto cutout belum dipasang; sumber foto masih perlu diproses.
- Data riset, publikasi, pengajaran, dan pengabdian belum diverifikasi dari sumber publik.
- Bagian kontak masih placeholder `mailto:`.
- WebGL/Three.js, scroll choreography, dan animasi partikel tingkat lanjut belum dimulai.

### Next
- Verifikasi build dan deployment.
- Riset profil akademik dan publikasi dengan tautan sumber.
- Siapkan aset foto cutout.
- Lengkapi konten berbasis bukti sebelum dipublikasikan.
- Implementasi WebGL bertahap.
