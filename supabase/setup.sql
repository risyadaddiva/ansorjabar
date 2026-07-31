-- =========================================================
-- SETUP LENGKAP: PW GP ANSOR JAWA BARAT
-- Jalankan SELURUH file ini di:
--   Supabase Dashboard → SQL Editor → New query → Run (F5)
--
-- File ini berisi:
--   1. Pembuatan tabel (schema)
--   2. RLS policies
--   3. Storage bucket
--   4. Data dummy (seed)
-- =========================================================


-- ==========================================================
-- BAGIAN 1: SCHEMA
-- ==========================================================

create extension if not exists "uuid-ossp";

-- ENUM status publikasi
do $$ begin
  create type publish_status as enum ('draft', 'terbit');
exception
  when duplicate_object then null;
end $$;

-- TABEL BERITA
create table if not exists berita (
  id              uuid          primary key default uuid_generate_v4(),
  judul           text          not null,
  slug            text          unique not null,
  ringkasan       text,
  konten          text          not null,
  gambar_url      text,
  kategori        text          default 'Umum',
  status          publish_status not null default 'draft',
  penulis_id      uuid          references auth.users(id),
  dibuat_pada     timestamptz   not null default now(),
  diperbarui_pada timestamptz   not null default now()
);

-- TABEL ARTIKEL / OPINI
create table if not exists artikel (
  id              uuid          primary key default uuid_generate_v4(),
  judul           text          not null,
  slug            text          unique not null,
  ringkasan       text,
  konten          text          not null,
  gambar_url      text,
  nama_penulis    text,
  status          publish_status not null default 'draft',
  penulis_id      uuid          references auth.users(id),
  dibuat_pada     timestamptz   not null default now(),
  diperbarui_pada timestamptz   not null default now()
);

-- TABEL GALERI
create table if not exists galeri (
  id          uuid        primary key default uuid_generate_v4(),
  judul       text        not null,
  gambar_url  text        not null,
  deskripsi   text,
  dibuat_pada timestamptz not null default now()
);

-- TABEL PENGURUS (Struktur Organisasi)
create table if not exists pengurus (
  id          uuid        primary key default uuid_generate_v4(),
  nama        text        not null,
  jabatan     text        not null,
  urutan      int         default 0,
  foto_url    text,
  dibuat_pada timestamptz not null default now()
);

-- TRIGGER: auto-update diperbarui_pada
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


-- ==========================================================
-- BAGIAN 2: ROW LEVEL SECURITY
-- ==========================================================

alter table berita   enable row level security;
alter table artikel  enable row level security;
alter table galeri   enable row level security;
alter table pengurus enable row level security;

-- Hapus policy lama sebelum buat ulang (idempotent)
drop policy if exists "publik_baca_berita_terbit" on berita;
drop policy if exists "admin_kelola_berita"        on berita;
drop policy if exists "publik_baca_artikel_terbit" on artikel;
drop policy if exists "admin_kelola_artikel"       on artikel;
drop policy if exists "publik_baca_galeri"         on galeri;
drop policy if exists "admin_kelola_galeri"        on galeri;
drop policy if exists "publik_baca_pengurus"       on pengurus;
drop policy if exists "admin_kelola_pengurus"      on pengurus;

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

-- GALERI (publik boleh baca semua)
create policy "publik_baca_galeri" on galeri
  for select using (true);
create policy "admin_kelola_galeri" on galeri
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- PENGURUS (publik boleh baca semua)
create policy "publik_baca_pengurus" on pengurus
  for select using (true);
create policy "admin_kelola_pengurus" on pengurus
  for all using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');


-- ==========================================================
-- BAGIAN 3: STORAGE BUCKET
-- ==========================================================

insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "publik_baca_media"  on storage.objects;
drop policy if exists "admin_upload_media" on storage.objects;
drop policy if exists "admin_hapus_media"  on storage.objects;

create policy "publik_baca_media" on storage.objects
  for select using (bucket_id = 'media');
create policy "admin_upload_media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');
create policy "admin_hapus_media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');


-- ==========================================================
-- BAGIAN 4: DATA DUMMY (SEED)
-- ==========================================================

-- ── PENGURUS ─────────────────────────────────────────────
delete from pengurus;

insert into pengurus (nama, jabatan, urutan, foto_url) values
  ('KH. Ahmad Mujahid Ridwan, S.Ag., M.Si.', 'Ketua PW GP Ansor Jawa Barat',          1, null),
  ('H. Farhan Nugraha, S.H.',                 'Wakil Ketua Bidang Organisasi',          2, null),
  ('H. Rizky Ramadhan, M.Pd.',                'Wakil Ketua Bidang Kaderisasi',          3, null),
  ('H. Dendi Sutrisna, S.T.',                 'Wakil Ketua Bidang Ekonomi',             4, null),
  ('H. Irfan Maulana, S.Pd.I.',               'Wakil Ketua Bidang Dakwah',              5, null),
  ('Hj. Neng Siti Fatimah, M.Ag.',            'Sekretaris PW GP Ansor Jawa Barat',     6, null),
  ('H. Reza Fauzan, S.E.',                    'Wakil Sekretaris',                       7, null),
  ('H. Budi Santoso, S.E., M.M.',             'Bendahara PW GP Ansor Jawa Barat',      8, null),
  ('H. Agus Firmansyah, S.E.',                'Wakil Bendahara',                        9, null),
  ('Ust. Deden Sopyan, S.Ag.',                'Ketua Dept. Pendidikan & Dakwah',       10, null),
  ('H. Wahyu Setiawan, S.T.',                 'Ketua Dept. Pengembangan Ekonomi',      11, null),
  ('Cecep Mulyadi, S.H.',                     'Ketua Dept. Hukum & HAM',               12, null),
  ('Yudi Permana, M.Kom.',                    'Ketua Dept. Teknologi & Informasi',     13, null),
  ('Ahmad Fauzi, S.Sos.',                     'Ketua Dept. Kepemudaan & Olahraga',     14, null),
  ('Hj. Neneng Rahmawati, S.Pd.',             'Ketua Dept. Pemberdayaan Perempuan',    15, null);

-- ── BERITA ───────────────────────────────────────────────
delete from berita;

insert into berita (judul, slug, ringkasan, konten, gambar_url, kategori, status, dibuat_pada, diperbarui_pada) values

('PW GP Ansor Jawa Barat Gelar Rapat Koordinasi Wilayah 2026',
 'pw-gp-ansor-jabar-gelar-rakor-2026',
 'PW GP Ansor Jawa Barat menggelar Rakorwil yang dihadiri seluruh Pimpinan Cabang se-Jawa Barat.',
 '<p>Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat sukses menggelar Rapat Koordinasi Wilayah (Rakorwil) 2026 di Aula Gedung PWNU Jawa Barat, Kota Bandung.</p><p>Rakorwil kali ini mengangkat tema <strong>"Penguatan Kader Ansor Menuju Indonesia Emas 2045"</strong>. Beberapa agenda strategis yang dibahas antara lain: program kaderisasi PKD, penguatan ekonomi kader melalui koperasi Ansor, serta koordinasi penyelenggaraan Hari Lahir GP Ansor ke-92.</p>',
 'https://picsum.photos/seed/rakorwil/800/500',
 'Organisasi', 'terbit',
 now() - interval '2 days', now() - interval '2 days'),

('Ansor Jabar Luncurkan Program 1000 Hafidz Qur''an untuk Kader Muda',
 'ansor-jabar-program-1000-hafidz-quran',
 'PW GP Ansor Jawa Barat meluncurkan program beasiswa tahfidz Al-Quran bagi kader muda NU se-Jawa Barat.',
 '<p>PW GP Ansor Jawa Barat secara resmi meluncurkan Program <strong>"1000 Hafidz Qur''an"</strong> yang menargetkan seribu kader muda mendapatkan beasiswa pendidikan tahfidz Al-Quran selama dua tahun.</p><p>Peserta yang terpilih akan ditempatkan di pesantren-pesantren mitra Ansor Jawa Barat yang tersebar di berbagai kabupaten/kota.</p>',
 'https://picsum.photos/seed/hafidz/800/500',
 'Program', 'terbit',
 now() - interval '5 days', now() - interval '5 days'),

('GP Ansor Jabar Gelar Aksi Sosial Bantu Korban Bencana di Cianjur',
 'gp-ansor-jabar-aksi-sosial-cianjur',
 'Ribuan relawan GP Ansor Jawa Barat turun ke lokasi bencana di Cianjur memberikan bantuan logistik.',
 '<p>Merespons bencana banjir bandang di Cianjur, PW GP Ansor Jawa Barat mengerahkan ribuan relawan Banser untuk terjun langsung ke lokasi terdampak.</p><p>Total bantuan yang terhimpun mencapai lebih dari Rp 500 juta yang disalurkan secara transparan dan akuntabel.</p>',
 'https://picsum.photos/seed/sosial/800/500',
 'Sosial', 'terbit',
 now() - interval '8 days', now() - interval '8 days'),

('Pelatihan Kewirausahaan Ansor: Cetak 500 Pengusaha Muda NU di Jabar',
 'pelatihan-kewirausahaan-ansor-500-pengusaha',
 'PW GP Ansor Jabar bekerja sama dengan Dinas Koperasi Jawa Barat menyelenggarakan pelatihan kewirausahaan.',
 '<p>Bekerja sama dengan Dinas Koperasi dan UKM Provinsi Jawa Barat, PW GP Ansor Jawa Barat menyelenggarakan <strong>Pelatihan Kewirausahaan Kader Ansor 2026</strong> selama tiga hari di Hotel Grand Preanger, Bandung.</p><p>Program ini diikuti oleh 500 kader pilihan dari 27 Pimpinan Cabang se-Jawa Barat.</p>',
 'https://picsum.photos/seed/wirausaha/800/500',
 'Ekonomi', 'terbit',
 now() - interval '12 days', now() - interval '12 days'),

('Musyawarah Wilayah GP Ansor Jawa Barat Resmi Dibuka',
 'musyawarah-wilayah-gp-ansor-jabar',
 'Musyawarah Wilayah GP Ansor Jawa Barat resmi dibuka oleh Gubernur Jawa Barat.',
 '<p>Musyawarah Wilayah (Muswil) Gerakan Pemuda Ansor Jawa Barat periode 2026–2031 resmi dibuka oleh Gubernur Jawa Barat di Gedung Sate, Kota Bandung. Muswil dihadiri lebih dari 1.200 peserta dari seluruh penjuru Jawa Barat.</p>',
 'https://picsum.photos/seed/muswil/800/500',
 'Organisasi', 'terbit',
 now() - interval '15 days', now() - interval '15 days'),

('Ansor Jabar Ikuti Apel Akbar Hari Lahir GP Ansor ke-92 di Jakarta',
 'ansor-jabar-apel-akbar-harlah-92',
 'Ribuan kader GP Ansor Jawa Barat mengikuti Apel Akbar Hari Lahir GP Ansor ke-92 di GBK Jakarta.',
 '<p>Ribuan kader dan simpatisan GP Ansor dari seluruh Jawa Barat memenuhi Stadion Utama Gelora Bung Karno (SUGBK), Jakarta, dalam rangka Apel Akbar Hari Lahir (Harlah) GP Ansor ke-92.</p><p>Kontingen Jawa Barat mendapat apresiasi dari PP GP Ansor sebagai kontingen terbesar dan paling disiplin.</p>',
 'https://picsum.photos/seed/harlah/800/500',
 'Nasional', 'terbit',
 now() - interval '20 days', now() - interval '20 days');

-- ── ARTIKEL ──────────────────────────────────────────────
delete from artikel;

insert into artikel (judul, slug, ringkasan, konten, gambar_url, nama_penulis, status, dibuat_pada, diperbarui_pada) values

('Islam Wasathiyyah: Jalan Tengah Kader Ansor di Era Polarisasi',
 'islam-wasathiyyah-jalan-tengah-kader-ansor',
 'Polarisasi sosial yang semakin tajam menuntut kader Ansor konsisten berdiri di atas prinsip Islam wasathiyyah.',
 '<p>Di tengah arus polarisasi sosial yang semakin mengkhawatirkan, kader Gerakan Pemuda Ansor dituntut hadir sebagai agen perdamaian dan perekat kebangsaan. Prinsip Islam wasathiyyah bukan sekadar jargon, melainkan panduan hidup yang harus diinternalisasi dan dipraktikkan.</p><p>NKRI bagi Ansor adalah harga mati yang tidak boleh ditawar oleh siapapun.</p>',
 'https://picsum.photos/seed/wasathiyyah/800/500',
 'KH. Ahmad Mujahid Ridwan', 'terbit',
 now() - interval '3 days', now() - interval '3 days'),

('Peran Strategis Pemuda NU dalam Menjaga Stabilitas Demokrasi Indonesia',
 'peran-strategis-pemuda-nu-demokrasi',
 'Pemuda NU memiliki peran strategis sebagai pilar penjaga demokrasi yang sehat dan bermartabat.',
 '<p>Demokrasi Indonesia sedang berada dalam persimpangan yang menentukan. Kader Ansor harus tampil sebagai penjaga nilai-nilai demokrasi yang sehat, melek politik, aktif berpartisipasi, namun selalu menjaga independensi organisasi dari kepentingan politik partisan yang sesaat.</p>',
 'https://picsum.photos/seed/demokrasi/800/500',
 'H. Farhan Nugraha, S.H.', 'terbit',
 now() - interval '6 days', now() - interval '6 days'),

('Kader Ansor dan Literasi Digital: Benteng Melawan Hoaks',
 'kader-ansor-literasi-digital-melawan-hoaks',
 'Di era banjir informasi, kader Ansor perlu membekali diri dengan kemampuan literasi digital.',
 '<p>Kader Ansor, sebagai kelompok pemuda Muslim yang terdidik dan terorganisir, memiliki tanggung jawab moral untuk menjadi garda terdepan dalam perang melawan hoaks di era digital. Verifikasi informasi sebelum menyebarkan adalah kewajiban moral, bukan pilihan.</p>',
 'https://picsum.photos/seed/digital/800/500',
 'Yudi Permana, M.Kom.', 'terbit',
 now() - interval '9 days', now() - interval '9 days'),

('Ekonomi Pesantren: Model Kemandirian yang Perlu Diadopsi Kader Ansor',
 'ekonomi-pesantren-model-kemandirian',
 'Model ekonomi pesantren yang berbasis kemandirian dapat menjadi inspirasi kader Ansor dalam membangun ekosistem ekonomi mandiri.',
 '<p>Pesantren di Indonesia telah lama membuktikan diri sebagai lembaga yang tidak hanya mencetak ulama, tetapi juga wirausahawan tangguh. Koperasi Ansor berpotensi menjadi kekuatan ekonomi yang signifikan jika dikelola dengan prinsip kemandirian dan keberkahan.</p>',
 'https://picsum.photos/seed/ekonomi/800/500',
 'H. Wahyu Setiawan, S.T.', 'terbit',
 now() - interval '13 days', now() - interval '13 days'),

('Urgensi Kaderisasi Berkelanjutan dalam Menjaga Eksistensi Ansor',
 'urgensi-kaderisasi-berkelanjutan-ansor',
 'Kaderisasi adalah jantung sebuah organisasi. Tanpa kader bermutu dan berkarakter, Ansor hanya nama tanpa ruh.',
 '<p>Kaderisasi bukan sekadar formalitas administrasi, melainkan investasi jangka panjang keberlangsungan organisasi. PW GP Ansor Jawa Barat berkomitmen menjalankan sistem kaderisasi berkelanjutan melalui PKD, PKM, hingga PKTT secara serius dan terstruktur.</p>',
 'https://picsum.photos/seed/kaderisasi/800/500',
 'H. Rizky Ramadhan, M.Pd.', 'terbit',
 now() - interval '17 days', now() - interval '17 days');

-- ── GALERI ───────────────────────────────────────────────
delete from galeri;

insert into galeri (judul, gambar_url, deskripsi, dibuat_pada) values
  ('Rakorwil PW GP Ansor Jabar 2026',        'https://picsum.photos/seed/g1/800/600',  'Rapat Koordinasi Wilayah PW GP Ansor Jawa Barat 2026 di Aula PWNU Jabar.',             now() - interval '2 days'),
  ('Apel Akbar Harlah GP Ansor ke-92',       'https://picsum.photos/seed/g2/800/600',  'Kontingen Ansor Jawa Barat dalam Apel Akbar Hari Lahir GP Ansor ke-92 di GBK.',        now() - interval '5 days'),
  ('Aksi Sosial Bencana Cianjur',            'https://picsum.photos/seed/g3/800/600',  'Relawan Banser mendistribusikan logistik untuk korban bencana di Cianjur.',             now() - interval '8 days'),
  ('Pelatihan Kewirausahaan Kader',          'https://picsum.photos/seed/g4/800/600',  'Sesi pelatihan kewirausahaan bagi 500 kader terpilih se-Jawa Barat.',                  now() - interval '12 days'),
  ('Launching Program 1000 Hafidz',          'https://picsum.photos/seed/g5/800/600',  'Peluncuran resmi Program 1000 Hafidz Qur''an untuk kader muda NU Jawa Barat.',         now() - interval '15 days'),
  ('Musyawarah Wilayah 2026',                'https://picsum.photos/seed/g6/800/600',  'Momen bersejarah Musyawarah Wilayah GP Ansor Jawa Barat 2026 di Gedung Sate.',         now() - interval '18 days'),
  ('Upacara Hari Santri Nasional',           'https://picsum.photos/seed/g7/800/600',  'Kader Ansor dan Banser menghadiri upacara Hari Santri Nasional di Alun-Alun Bandung.',  now() - interval '22 days'),
  ('Dialog Kebangsaan Ansor Jabar',          'https://picsum.photos/seed/g8/800/600',  'Dialog kebangsaan bertema "Ansor dan NKRI" bersama tokoh-tokoh lintas agama.',         now() - interval '25 days'),
  ('PKD Angkatan I Ansor Jabar 2026',        'https://picsum.photos/seed/g9/800/600',  'Peserta Pelatihan Kepemimpinan Dasar (PKD) Angkatan I PW Ansor Jabar 2026.',           now() - interval '30 days'),
  ('Santunan Yatim Piatu Ramadan',           'https://picsum.photos/seed/g10/800/600', 'Program santunan 1.000 anak yatim piatu se-Jawa Barat dalam rangka Ramadan.',          now() - interval '35 days'),
  ('Pelantikan Pengurus Cabang Baru',        'https://picsum.photos/seed/g11/800/600', 'Pelantikan tiga Pimpinan Cabang baru GP Ansor yang resmi terbentuk di Jawa Barat.',    now() - interval '40 days'),
  ('Lomba Kreatifitas Kader Ansor Jabar',   'https://picsum.photos/seed/g12/800/600', 'Peserta lomba kreativitas kader dari berbagai cabang unjuk bakat di Bandung.',         now() - interval '45 days');
