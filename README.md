# Website PW GP Ansor Jawa Barat

Website resmi Pimpinan Wilayah Gerakan Pemuda Ansor Provinsi Jawa Barat.
Dibangun dengan **Next.js 14 (App Router)**, **Supabase** (database, auth,
storage), **Tailwind CSS**, dan dukungan **tema gelap/terang**.

## Struktur halaman publik

Mengikuti pola situs `ansor.id`: Beranda, Profil, Visi & Misi, Struktur
Organisasi, Berita, Artikel, Galeri, dan Kontak — masing-masing sebagai
halaman terpisah dengan navigasi utama yang sama di setiap halaman.

- `/` — Beranda (hero + berita & artikel terbaru)
- `/profil` — Profil & sejarah organisasi
- `/visi-misi` — Visi & Misi
- `/struktur-organisasi` — Susunan pengurus (dari tabel `pengurus`)
- `/berita` dan `/berita/[slug]` — Daftar & detail berita
- `/artikel` dan `/artikel/[slug]` — Daftar & detail artikel/opini
- `/galeri` — Galeri foto kegiatan
- `/kontak` — Informasi kontak

## Admin CMS

- `/admin/login` — Login admin (Supabase Auth)
- `/admin/dashboard` — Ringkasan statistik konten
- `/admin/berita` — Kelola berita (tambah/sunting/hapus, draft/terbit)
- `/admin/artikel` — Kelola artikel (tambah/sunting/hapus, draft/terbit)

Semua halaman `/admin/*` (kecuali `/admin/login`) dilindungi oleh
`middleware.ts` — pengguna yang belum login otomatis diarahkan ke halaman
login.

## Cara menjalankan

### 1. Siapkan project Supabase

1. Buat project baru di [supabase.com](https://supabase.com).
2. Buka **SQL Editor** → jalankan seluruh isi file `supabase/schema.sql`.
   Skrip ini akan membuat tabel `berita`, `artikel`, `galeri`, `pengurus`,
   mengaktifkan Row Level Security, membuat bucket storage `media`, dan
   contoh data pengurus.
3. Buka **Authentication → Users** → tambahkan satu user admin (email +
   password) secara manual. Akun inilah yang dipakai login di
   `/admin/login`.

### 2. Konfigurasi environment

Salin `.env.local.example` menjadi `.env.local`, lalu isi dengan kredensial
dari **Project Settings → API**:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Install & jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` untuk situs publik, dan
`http://localhost:3000/admin/login` untuk masuk ke CMS.

## Tema gelap/terang

Toggle tema tersedia di navbar (ikon matahari/bulan) dan di sidebar admin,
menggunakan `next-themes` dengan strategi `class` pada Tailwind sehingga
seluruh palet warna (hijau NU/Ansor + aksen emas) otomatis menyesuaikan.

## Catatan desain

- Palet warna: hijau Ansor (`ansor-*`) sebagai warna utama, emas (`gold-*`)
  sebagai aksen, dan maroon untuk status/peringatan — merefleksikan warna
  khas identitas NU/Ansor.
- Motif garis diagonal hijau-emas (`.motif-divider`) dipakai sebagai
  pembatas antar-bagian, terinspirasi motif geometris khas ornamen
  pesantren/Islami.
- Struktur menu dan tata letak halaman mengikuti pola umum situs resmi
  organisasi GP Ansor (berita sebagai konten utama, halaman profil/struktur
  organisasi terpisah), namun seluruh salinan teks, logo, dan aset di sini
  original — bukan hasil menyalin konten/aset dari `ansor.id`.

## Pengembangan lanjutan yang disarankan

- Tambahkan halaman admin untuk mengelola **galeri** dan **pengurus**
  langsung dari UI (saat ini keduanya bisa dikelola lewat Supabase Table
  Editor).
- Tambahkan rich text editor (mis. Tiptap) untuk kolom konten agar bisa
  memformat teks, bukan hanya `textarea` polos.
- Tambahkan halaman pencarian & filter kategori berita.
