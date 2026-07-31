export type StatusPublikasi = "draft" | "terbit";

export interface Berita {
  id: string;
  judul: string;
  slug: string;
  ringkasan: string | null;
  konten: string;
  gambar_url: string | null;
  kategori: string;
  status: StatusPublikasi;
  penulis_id: string | null;
  dibuat_pada: string;
  diperbarui_pada: string;
}

export interface Artikel {
  id: string;
  judul: string;
  slug: string;
  ringkasan: string | null;
  konten: string;
  gambar_url: string | null;
  nama_penulis: string | null;
  status: StatusPublikasi;
  penulis_id: string | null;
  dibuat_pada: string;
  diperbarui_pada: string;
}

export interface GaleriItem {
  id: string;
  judul: string;
  gambar_url: string;
  deskripsi: string | null;
  dibuat_pada: string;
}

export interface Pengurus {
  id: string;
  nama: string;
  jabatan: string;
  urutan: number;
  foto_url: string | null;
  dibuat_pada: string;
}
