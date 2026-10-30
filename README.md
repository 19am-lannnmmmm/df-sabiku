# DF Sabiku — Academic Portfolio

Portfolio akademik Dewi Fatmawaty Sabiku, S.P., M.Si. Dibangun dengan React, Vite, dan TypeScript; disiapkan untuk GitHub Pages.

## Menjalankan secara lokal
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Menambahkan dokumentasi
Unggah PDF atau gambar langsung melalui GitHub ke folder:
- `public/documents/research/`
- `public/documents/publications/`
- `public/documents/community/`
- `public/documents/teaching/`
- `public/documents/other/`

Metadata opsional diletakkan berdampingan dengan file, dengan akhiran `.meta.json`. Contoh untuk `laporan-biopriming.pdf`: `laporan-biopriming.pdf.meta.json`.
```json
{
  "title": "Pengembangan Teknologi Biopriming pada Benih",
  "year": "2025",
  "description": "Dokumentasi kegiatan dan hasil penelitian.",
  "language": "id"
}
```
Indeks dibuat otomatis saat build. Commit ke branch `main` memicu workflow GitHub Actions.

## Foto profil
Letakkan cutout PNG final di `public/assets/profile/dewi-profile.png`. Foto belum disertakan pada tahap scaffold ini.

## GitHub Pages
Repository: https://github.com/19am-lannnmmmm/df-sabiku
URL target: https://19am-lannnmmmm.github.io/df-sabiku/

Di GitHub buka **Settings → Pages**, lalu pilih **GitHub Actions** sebagai Build and deployment source.
