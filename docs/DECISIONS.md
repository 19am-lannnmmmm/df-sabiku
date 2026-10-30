# Architecture & Product Decisions

| ID | Tanggal | Keputusan | Alasan / catatan |
|---|---|---|---|
| D-001 | 2026-10-30 | Deploy awal melalui GitHub Pages | Hosting statis dari repository |
| D-002 | 2026-10-30 | Upload dokumentasi langsung lewat GitHub | Alur sederhana tanpa admin backend |
| D-003 | 2026-10-30 | Folder otomatis + metadata JSON | File ditambahkan ke folder, indeks dibuat saat build |
| D-004 | 2026-10-30 | Foto cutout di tengah dikelilingi partikel | Hero visual utama |
| D-005 | 2026-10-30 | Animasi maksimal tetapi elegan | Harus tetap menghormati performa dan reduced-motion |
| D-006 | 2026-10-30 | Versi dasar lebih dahulu, WebGL menyusul | Mengurangi risiko kompleksitas awal |
| D-007 | 2026-10-30 | Bilingual Indonesia/Inggris | Target pembaca akademik lokal dan internasional |
| D-008 | 2026-10-30 | Konten dipisahkan dari komponen | Pemeliharaan konten tanpa mengubah layout |
| D-009 | 2026-10-30 | Canvas WebGL di belakang, konten DOM | SEO, aksesibilitas, dan teks tetap bisa dipilih |

| D-010 | 2026-10-30 | Gelas dan tas pink dihilangkan dari komposisi hero | Konfirmasi eksplisit pengguna; gunakan crop/segmentasi tanpa mengubah wajah atau identitas |

## Pending decisions
- Pilih satu sistem animasi UI: GSAP + ScrollTrigger (Lenis opsional) atau Framer Motion.
- Tentukan email publik dan academic profile links.
- Konfirmasi foto yang akan ditampilkan dan ruang lingkup retouch/cutout.
- Tentukan apakah semua publikasi akan ditampilkan atau pilihan utama.
