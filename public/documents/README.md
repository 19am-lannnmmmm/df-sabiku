# Panduan unggah dokumen

Folder ini menjadi arsip file yang ditampilkan otomatis pada bagian **Dokumentasi & Kegiatan** website.

| Folder | Isi yang disarankan |
|---|---|
| `research/` | Laporan, poster, atau dokumentasi penelitian |
| `publications/` | Naskah artikel, prosiding, buku, atau luaran publikasi |
| `community/` | Foto dan laporan pengabdian kepada masyarakat |
| `teaching/` | Materi, modul, atau dokumentasi pembelajaran |
| `other/` | Dokumen akademik lain yang relevan |

## Format file
- Dokumen: `.pdf`
- Gambar: `.png`, `.jpg`, `.jpeg`, `.webp`
- Gunakan nama file singkat dan deskriptif, misalnya `pelatihan-krisan-2025.jpg`.
- Jangan unggah data pribadi, tanda tangan, nomor identitas, atau informasi internal yang belum disetujui untuk publikasi.
- Pastikan pemilik konten memiliki hak untuk memublikasikan file dan foto.

## Metadata opsional
Buat file JSON berdampingan dengan nama file ditambah akhiran `.meta.json`.

Contoh pasangan file: `laporan-biopriming.pdf` dan `laporan-biopriming.pdf.meta.json`.

Isi metadata:
```json
{
  "title": "Pengembangan Teknologi Biopriming pada Benih",
  "year": "2025",
  "description": "Laporan ringkas penelitian peningkatan mutu benih.",
  "language": "id"
}
```

Field yang didukung: `title`, `year`, `description`, dan `language` (`id` atau `en`).
ID, kategori, tipe, dan URL dibuat otomatis dari lokasi serta ekstensi file; jangan menaruh field tersebut di metadata.
Jika metadata tidak dibuat, judul diambil dari nama file dan tahun/deskripsi dibiarkan kosong.

## Cara menerbitkan
1. Buka folder kategori yang sesuai di repository GitHub.
2. Unggah file dan metadata pendamping jika digunakan.
3. Commit perubahan ke branch `main`.
4. Tunggu GitHub Actions selesai dengan status **success**.
5. Periksa kartu dan tautan dokumen pada website.

Indeks dibuat otomatis saat build. Jangan mengedit `public/data/document-index.json` secara manual.