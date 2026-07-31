#!/usr/bin/env node
/**
 * Seed script untuk PW GP Ansor Jawa Barat
 *
 * Gunakan:
 *   SUPABASE_SERVICE_ROLE_KEY=<key> node supabase/seed.js
 *
 * Service Role Key bisa ditemukan di:
 *   Supabase Dashboard > Project Settings > API > service_role (secret)
 *
 * PENTING: Jangan commit service_role key ke git!
 */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://astbrxmbyhnytxldnrll.supabase.co";
const SERVICE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_KEY) {
  console.error("❌  Set env SUPABASE_SERVICE_ROLE_KEY terlebih dahulu.");
  console.error("   Contoh: SUPABASE_SERVICE_ROLE_KEY=eyJ... node supabase/seed.js");
  process.exit(1);
}

const headers = {
  "apikey": SERVICE_KEY,
  "Authorization": `Bearer ${SERVICE_KEY}`,
  "Content-Type": "application/json",
  "Prefer": "resolution=merge-duplicates",
};

async function upsert(table, rows) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
    method: "POST",
    headers: { ...headers, Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify(rows),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[${table}] ${res.status}: ${text}`);
  }
  console.log(`✅  ${table}: ${rows.length} baris di-upsert`);
}

async function truncate(table) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?id=neq.00000000-0000-0000-0000-000000000000`, {
    method: "DELETE",
    headers,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`[truncate ${table}] ${res.status}: ${text}`);
  }
  console.log(`🗑️   ${table}: di-truncate`);
}

// ── Data ──────────────────────────────────────────────────────────────────────

const pengurus = [
  { nama: "KH. Ahmad Mujahid Ridwan, S.Ag., M.Si.", jabatan: "Ketua PW GP Ansor Jawa Barat",     urutan: 1 },
  { nama: "H. Farhan Nugraha, S.H.",                jabatan: "Wakil Ketua Bidang Organisasi",     urutan: 2 },
  { nama: "H. Rizky Ramadhan, M.Pd.",               jabatan: "Wakil Ketua Bidang Kaderisasi",     urutan: 3 },
  { nama: "H. Dendi Sutrisna, S.T.",                jabatan: "Wakil Ketua Bidang Ekonomi",        urutan: 4 },
  { nama: "H. Irfan Maulana, S.Pd.I.",              jabatan: "Wakil Ketua Bidang Dakwah",         urutan: 5 },
  { nama: "Hj. Neng Siti Fatimah, M.Ag.",           jabatan: "Sekretaris PW GP Ansor Jawa Barat", urutan: 6 },
  { nama: "H. Reza Fauzan, S.E.",                   jabatan: "Wakil Sekretaris",                  urutan: 7 },
  { nama: "H. Budi Santoso, S.E., M.M.",            jabatan: "Bendahara PW GP Ansor Jawa Barat", urutan: 8 },
  { nama: "H. Agus Firmansyah, S.E.",               jabatan: "Wakil Bendahara",                   urutan: 9 },
  { nama: "Ust. Deden Sopyan, S.Ag.",               jabatan: "Ketua Dept. Pendidikan & Dakwah",  urutan: 10 },
  { nama: "H. Wahyu Setiawan, S.T.",                jabatan: "Ketua Dept. Pengembangan Ekonomi", urutan: 11 },
  { nama: "Cecep Mulyadi, S.H.",                    jabatan: "Ketua Dept. Hukum & HAM",           urutan: 12 },
  { nama: "Yudi Permana, M.Kom.",                   jabatan: "Ketua Dept. Teknologi & Informasi", urutan: 13 },
  { nama: "Ahmad Fauzi, S.Sos.",                    jabatan: "Ketua Dept. Kepemudaan & Olahraga", urutan: 14 },
  { nama: "Hj. Neneng Rahmawati, S.Pd.",            jabatan: "Ketua Dept. Pemberdayaan Perempuan", urutan: 15 },
];

const now = new Date();
const daysAgo = (d) => new Date(now - d * 86400000).toISOString();

const berita = [
  {
    judul: "PW GP Ansor Jawa Barat Gelar Rapat Koordinasi Wilayah 2026",
    slug: "pw-gp-ansor-jabar-gelar-rakor-2026",
    ringkasan: "PW GP Ansor Jawa Barat menggelar Rakorwil yang dihadiri seluruh Pimpinan Cabang se-Jawa Barat.",
    konten: "<p>Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat sukses menggelar Rapat Koordinasi Wilayah (Rakorwil) 2026 di Aula Gedung PWNU Jawa Barat, Kota Bandung. Kegiatan ini dihadiri oleh seluruh Ketua Pimpinan Cabang se-Jawa Barat.</p><p>Rakorwil kali ini mengangkat tema <strong>\"Penguatan Kader Ansor Menuju Indonesia Emas 2045\"</strong>.</p>",
    gambar_url: "https://picsum.photos/seed/rakorwil/800/500",
    kategori: "Organisasi",
    status: "terbit",
    dibuat_pada: daysAgo(2),
    diperbarui_pada: daysAgo(2),
  },
  {
    judul: "Ansor Jabar Luncurkan Program 1000 Hafidz Qur'an untuk Kader Muda",
    slug: "ansor-jabar-program-1000-hafidz-quran",
    ringkasan: "PW GP Ansor Jawa Barat meluncurkan program beasiswa tahfidz Al-Quran bagi kader muda NU.",
    konten: "<p>Pimpinan Wilayah GP Ansor Jawa Barat secara resmi meluncurkan Program <strong>\"1000 Hafidz Qur'an\"</strong>. Program ini menargetkan seribu kader muda yang akan mendapatkan beasiswa pendidikan tahfidz Al-Quran selama dua tahun.</p>",
    gambar_url: "https://picsum.photos/seed/hafidz/800/500",
    kategori: "Program",
    status: "terbit",
    dibuat_pada: daysAgo(5),
    diperbarui_pada: daysAgo(5),
  },
  {
    judul: "GP Ansor Jabar Gelar Aksi Sosial Bantu Korban Bencana di Cianjur",
    slug: "gp-ansor-jabar-aksi-sosial-cianjur",
    ringkasan: "Ribuan relawan GP Ansor Jawa Barat turun ke lokasi bencana di Cianjur memberikan bantuan logistik.",
    konten: "<p>Merespons bencana banjir bandang yang melanda sejumlah kecamatan di Kabupaten Cianjur, PW GP Ansor Jawa Barat mengerahkan ribuan relawan Banser untuk terjun langsung ke lokasi terdampak.</p>",
    gambar_url: "https://picsum.photos/seed/sosial/800/500",
    kategori: "Sosial",
    status: "terbit",
    dibuat_pada: daysAgo(8),
    diperbarui_pada: daysAgo(8),
  },
  {
    judul: "Pelatihan Kewirausahaan Ansor: Cetak 500 Pengusaha Muda NU di Jabar",
    slug: "pelatihan-kewirausahaan-ansor-500-pengusaha",
    ringkasan: "PW GP Ansor Jabar bekerja sama dengan Dinas Koperasi Jawa Barat menyelenggarakan pelatihan kewirausahaan.",
    konten: "<p>Bekerja sama dengan Dinas Koperasi dan UKM Provinsi Jawa Barat, PW GP Ansor Jawa Barat menyelenggarakan <strong>Pelatihan Kewirausahaan Kader Ansor 2026</strong> yang berlangsung selama tiga hari di Hotel Grand Preanger, Bandung.</p>",
    gambar_url: "https://picsum.photos/seed/wirausaha/800/500",
    kategori: "Ekonomi",
    status: "terbit",
    dibuat_pada: daysAgo(12),
    diperbarui_pada: daysAgo(12),
  },
  {
    judul: "Musyawarah Wilayah GP Ansor Jawa Barat Resmi Dibuka",
    slug: "musyawarah-wilayah-gp-ansor-jabar",
    ringkasan: "Musyawarah Wilayah GP Ansor Jawa Barat resmi dibuka oleh Gubernur Jawa Barat.",
    konten: "<p>Musyawarah Wilayah (Muswil) Gerakan Pemuda Ansor Jawa Barat periode 2026–2031 resmi dibuka oleh Gubernur Jawa Barat di Gedung Sate, Kota Bandung. Muswil dihadiri lebih dari 1.200 peserta dari seluruh penjuru Jawa Barat.</p>",
    gambar_url: "https://picsum.photos/seed/muswil/800/500",
    kategori: "Organisasi",
    status: "terbit",
    dibuat_pada: daysAgo(15),
    diperbarui_pada: daysAgo(15),
  },
  {
    judul: "Ansor Jabar Ikuti Apel Akbar Hari Lahir GP Ansor ke-92 di Jakarta",
    slug: "ansor-jabar-apel-akbar-harlah-92",
    ringkasan: "Ribuan kader GP Ansor Jawa Barat mengikuti Apel Akbar Hari Lahir GP Ansor ke-92 di GBK.",
    konten: "<p>Ribuan kader dan simpatisan GP Ansor dari seluruh Jawa Barat memenuhi Stadion Utama Gelora Bung Karno (SUGBK), Jakarta, dalam rangka Apel Akbar Hari Lahir (Harlah) GP Ansor ke-92.</p>",
    gambar_url: "https://picsum.photos/seed/harlah/800/500",
    kategori: "Nasional",
    status: "terbit",
    dibuat_pada: daysAgo(20),
    diperbarui_pada: daysAgo(20),
  },
];

const artikel = [
  {
    judul: "Islam Wasathiyyah: Jalan Tengah Kader Ansor di Era Polarisasi",
    slug: "islam-wasathiyyah-jalan-tengah-kader-ansor",
    ringkasan: "Polarisasi sosial yang semakin tajam menuntut kader Ansor untuk konsisten berdiri di atas prinsip Islam wasathiyyah.",
    konten: "<p>Di tengah arus polarisasi sosial yang semakin mengkhawatirkan, kader Gerakan Pemuda Ansor dituntut untuk hadir sebagai agen perdamaian dan perekat kebangsaan. Prinsip Islam wasathiyyah bukan sekadar jargon, melainkan panduan hidup yang harus diinternalisasi dan dipraktikkan.</p>",
    gambar_url: "https://picsum.photos/seed/wasathiyyah/800/500",
    nama_penulis: "KH. Ahmad Mujahid Ridwan",
    status: "terbit",
    dibuat_pada: daysAgo(3),
    diperbarui_pada: daysAgo(3),
  },
  {
    judul: "Peran Strategis Pemuda NU dalam Menjaga Stabilitas Demokrasi Indonesia",
    slug: "peran-strategis-pemuda-nu-demokrasi",
    ringkasan: "Pemuda NU memiliki peran strategis sebagai pilar penjaga demokrasi yang sehat dan bermartabat.",
    konten: "<p>Demokrasi Indonesia sedang berada dalam persimpangan yang menentukan. Dalam situasi inilah pemuda Nahdlatul Ulama, khususnya kader GP Ansor, harus tampil sebagai penjaga nilai-nilai demokrasi yang sehat.</p>",
    gambar_url: "https://picsum.photos/seed/demokrasi/800/500",
    nama_penulis: "H. Farhan Nugraha, S.H.",
    status: "terbit",
    dibuat_pada: daysAgo(6),
    diperbarui_pada: daysAgo(6),
  },
  {
    judul: "Kader Ansor dan Literasi Digital: Benteng Melawan Hoaks",
    slug: "kader-ansor-literasi-digital-melawan-hoaks",
    ringkasan: "Di era banjir informasi, kader Ansor perlu membekali diri dengan kemampuan literasi digital.",
    konten: "<p>Era digital telah mengubah cara manusia berkomunikasi secara fundamental. Kader Ansor, sebagai kelompok pemuda Muslim yang terdidik dan terorganisir, memiliki tanggung jawab moral untuk menjadi garda terdepan dalam perang melawan hoaks.</p>",
    gambar_url: "https://picsum.photos/seed/digital/800/500",
    nama_penulis: "Yudi Permana, M.Kom.",
    status: "terbit",
    dibuat_pada: daysAgo(9),
    diperbarui_pada: daysAgo(9),
  },
  {
    judul: "Ekonomi Pesantren: Model Kemandirian yang Perlu Diadopsi Kader Ansor",
    slug: "ekonomi-pesantren-model-kemandirian",
    ringkasan: "Model ekonomi pesantren yang berbasis kemandirian dapat menjadi inspirasi kader Ansor dalam membangun ekosistem ekonomi mandiri.",
    konten: "<p>Pesantren di Indonesia telah lama membuktikan diri sebagai lembaga yang tidak hanya mencetak ulama, tetapi juga wirausahawan tangguh. Konsep ekonomi pesantren yang berbasis pada kemandirian, keberkahan, dan kegotong-royongan adalah model yang relevan untuk diadopsi kader Ansor.</p>",
    gambar_url: "https://picsum.photos/seed/ekonomi/800/500",
    nama_penulis: "H. Wahyu Setiawan, S.T.",
    status: "terbit",
    dibuat_pada: daysAgo(13),
    diperbarui_pada: daysAgo(13),
  },
  {
    judul: "Urgensi Kaderisasi Berkelanjutan dalam Menjaga Eksistensi Ansor",
    slug: "urgensi-kaderisasi-berkelanjutan-ansor",
    ringkasan: "Kaderisasi adalah jantung sebuah organisasi. Tanpa kader bermutu dan berkarakter, Ansor hanya nama tanpa ruh.",
    konten: "<p>Kaderisasi bukan sekadar formalitas administrasi, melainkan investasi jangka panjang keberlangsungan organisasi. PW GP Ansor Jawa Barat berkomitmen menjalankan sistem kaderisasi yang berkelanjutan, terstruktur, dan berbasis kompetensi.</p>",
    gambar_url: "https://picsum.photos/seed/kaderisasi/800/500",
    nama_penulis: "H. Rizky Ramadhan, M.Pd.",
    status: "terbit",
    dibuat_pada: daysAgo(17),
    diperbarui_pada: daysAgo(17),
  },
];

const galeri = [
  { judul: "Rakorwil PW GP Ansor Jabar 2026",       gambar_url: "https://picsum.photos/seed/g1/800/600",  deskripsi: "Rapat Koordinasi Wilayah PW GP Ansor Jawa Barat 2026.",              dibuat_pada: daysAgo(2) },
  { judul: "Apel Akbar Harlah GP Ansor ke-92",      gambar_url: "https://picsum.photos/seed/g2/800/600",  deskripsi: "Kontingen Ansor Jawa Barat dalam Apel Akbar di GBK Jakarta.",       dibuat_pada: daysAgo(5) },
  { judul: "Aksi Sosial Bencana Cianjur",           gambar_url: "https://picsum.photos/seed/g3/800/600",  deskripsi: "Relawan Banser mendistribusikan logistik untuk korban bencana.",    dibuat_pada: daysAgo(8) },
  { judul: "Pelatihan Kewirausahaan Kader",         gambar_url: "https://picsum.photos/seed/g4/800/600",  deskripsi: "Sesi pelatihan kewirausahaan bagi 500 kader terpilih se-Jabar.",    dibuat_pada: daysAgo(12) },
  { judul: "Launching Program 1000 Hafidz",         gambar_url: "https://picsum.photos/seed/g5/800/600",  deskripsi: "Peluncuran resmi Program 1000 Hafidz Qur'an kader muda NU Jabar.", dibuat_pada: daysAgo(15) },
  { judul: "Musyawarah Wilayah 2026",               gambar_url: "https://picsum.photos/seed/g6/800/600",  deskripsi: "Momen bersejarah Muswil GP Ansor Jawa Barat 2026 di Gedung Sate.", dibuat_pada: daysAgo(18) },
  { judul: "Upacara Hari Santri Nasional",          gambar_url: "https://picsum.photos/seed/g7/800/600",  deskripsi: "Kader Ansor dan Banser di upacara Hari Santri di Alun-Alun Bandung.", dibuat_pada: daysAgo(22) },
  { judul: "Dialog Kebangsaan Ansor Jabar",         gambar_url: "https://picsum.photos/seed/g8/800/600",  deskripsi: "Dialog kebangsaan bersama tokoh-tokoh lintas agama dan budaya.",    dibuat_pada: daysAgo(25) },
  { judul: "PKD Angkatan I Ansor Jabar 2026",       gambar_url: "https://picsum.photos/seed/g9/800/600",  deskripsi: "Peserta Pelatihan Kepemimpinan Dasar Angkatan I 2026.",             dibuat_pada: daysAgo(30) },
  { judul: "Santunan Yatim Piatu Ramadan",          gambar_url: "https://picsum.photos/seed/g10/800/600", deskripsi: "Program santunan 1.000 anak yatim piatu se-Jawa Barat.",            dibuat_pada: daysAgo(35) },
  { judul: "Pelantikan Pengurus Cabang Baru",       gambar_url: "https://picsum.photos/seed/g11/800/600", deskripsi: "Pelantikan tiga Pimpinan Cabang baru GP Ansor di Jawa Barat.",      dibuat_pada: daysAgo(40) },
  { judul: "Lomba Kreatifitas Kader Ansor Jabar",  gambar_url: "https://picsum.photos/seed/g12/800/600", deskripsi: "Peserta lomba kreativitas kader dari berbagai cabang unjuk bakat.", dibuat_pada: daysAgo(45) },
];

// ── Main ──────────────────────────────────────────────────────────────────────
(async () => {
  try {
    console.log("🌱  Memulai seeding database PW GP Ansor Jawa Barat...\n");

    await truncate("galeri");
    await truncate("artikel");
    await truncate("berita");
    await truncate("pengurus");

    await upsert("pengurus", pengurus);
    await upsert("berita", berita);
    await upsert("artikel", artikel);
    await upsert("galeri", galeri);

    console.log("\n✅  Seeding selesai!");
  } catch (err) {
    console.error("\n❌  Error:", err.message);
    process.exit(1);
  }
})();
