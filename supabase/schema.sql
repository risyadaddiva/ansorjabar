-- =========================================================
-- SKEMA DATABASE: PW GP ANSOR JAWA BARAT
-- Jalankan di Supabase SQL Editor (Project > SQL Editor > New query)
-- =========================================================

create extension if not exists "uuid-ossp";

-- ---------- ENUM STATUS PUBLIKASI ----------
do $$ begin
  create type publish_status as enum ('draft', 'terbit');
exception
  when duplicate_object then null;
end $$;

-- ---------- TABEL BERITA ----------
create table if not exists berita (
  id uuid primary key default uuid_generate_v4(),
  judul text not null,
  slug text unique not null,
  ringkasan text,
  konten text not null,
  gambar_url text,
  kategori text default 'Umum',
  status publish_status not null default 'draft',
  penulis_id uuid references auth.users(id),
  dibuat_pada timestamptz not null default now(),
  diperbarui_pada timestamptz not null default now()
);

-- ---------- TABEL ARTIKEL / OPINI ----------
create table if not exists artikel (
  id uuid primary key default uuid_generate_v4(),
  judul text not null,
  slug text unique not null,
  ringkasan text,
  konten text not null,
  gambar_url text,
  nama_penulis text,
  status publish_status not null default 'draft',
  penulis_id uuid references auth.users(id),
  dibuat_pada timestamptz not null default now(),
  diperbarui_pada timestamptz not null default now()
);

-- ---------- TABEL GALERI ----------
create table if not exists galeri (
  id uuid primary key default uuid_generate_v4(),
  judul text not null,
  gambar_url text not null,
  deskripsi text,
  dibuat_pada timestamptz not null default now()
);

-- ---------- TABEL PENGURUS (Struktur Organisasi) ----------
create table if not exists pengurus (
  id uuid primary key default uuid_generate_v4(),
  nama text not null,
  jabatan text not null,
  urutan int default 0,
  foto_url text,
  dibuat_pada timestamptz not null default now()
);

-- ---------- TRIGGER updated_at ----------
create or replace function set_diperbarui_pada()
returns trigger as $$
begin
  new.diperbarui_pada = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_berita_updated on berita;
create trigger trg_berita_updated before update on berita
for each row execute function set_diperbarui_pada();

drop trigger if exists trg_artikel_updated on artikel;
create trigger trg_artikel_updated before update on artikel
for each row execute function set_diperbarui_pada();

-- =========================================================
-- ROW LEVEL SECURITY
-- Publik: hanya boleh membaca konten berstatus 'terbit'
-- Admin (user login lewat Supabase Auth): boleh CRUD penuh
-- =========================================================

alter table berita enable row level security;
alter table artikel enable row level security;
alter table galeri enable row level security;
alter table pengurus enable row level security;

-- BERITA
create policy "publik_baca_berita_terbit" on berita
  for select using (status = 'terbit' or auth.role() = 'authenticated');

create policy "admin_kelola_berita" on berita
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ARTIKEL
create policy "publik_baca_artikel_terbit" on artikel
  for select using (status = 'terbit' or auth.role() = 'authenticated');

create policy "admin_kelola_artikel" on artikel
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- GALERI (publik boleh baca semua, admin kelola)
create policy "publik_baca_galeri" on galeri
  for select using (true);

create policy "admin_kelola_galeri" on galeri
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- PENGURUS (publik boleh baca semua, admin kelola)
create policy "publik_baca_pengurus" on pengurus
  for select using (true);

create policy "admin_kelola_pengurus" on pengurus
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- =========================================================
-- STORAGE BUCKET untuk gambar (jalankan sekali)
-- Buat lewat dashboard: Storage > New bucket > "media" > public
-- Atau lewat SQL berikut:
-- =========================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

create policy "publik_baca_media" on storage.objects
  for select using (bucket_id = 'media');

create policy "admin_upload_media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');

create policy "admin_hapus_media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');

-- =========================================================
-- CONTOH DATA (opsional, boleh dihapus)
-- =========================================================
insert into pengurus (nama, jabatan, urutan) values
  ('KH. Contoh Nama', 'Ketua PW GP Ansor Jawa Barat', 1),
  ('H. Contoh Sekretaris', 'Sekretaris', 2),
  ('H. Contoh Bendahara', 'Bendahara', 3)
on conflict do nothing;
