-- =========================================================
-- SEED DATA: PW GP ANSOR JAWA BARAT
-- Jalankan di Supabase SQL Editor (Project > SQL Editor > New query)
-- Data ini akan di-insert jika belum ada (on conflict do nothing)
-- =========================================================

-- ── PENGURUS (Struktur Organisasi) ────────────────────────────────────────────
truncate table pengurus restart identity cascade;

insert into pengurus (nama, jabatan, urutan, foto_url) values
  ('KH. Ahmad Mujahid Ridwan, S.Ag., M.Si.',  'Ketua PW GP Ansor Jawa Barat',          1,  null),
  ('H. Farhan Nugraha, S.H.',                  'Wakil Ketua Bidang Organisasi',          2,  null),
  ('H. Rizky Ramadhan, M.Pd.',                 'Wakil Ketua Bidang Kaderisasi',          3,  null),
  ('H. Dendi Sutrisna, S.T.',                  'Wakil Ketua Bidang Ekonomi',             4,  null),
  ('H. Irfan Maulana, S.Pd.I.',                'Wakil Ketua Bidang Dakwah',              5,  null),
  ('Hj. Neng Siti Fatimah, M.Ag.',             'Sekretaris PW GP Ansor Jawa Barat',     6,  null),
  ('H. Reza Fauzan, S.E.',                     'Wakil Sekretaris',                       7,  null),
  ('H. Budi Santoso, S.E., M.M.',              'Bendahara PW GP Ansor Jawa Barat',      8,  null),
  ('H. Agus Firmansyah, S.E.',                 'Wakil Bendahara',                        9,  null),
  ('Ust. Deden Sopyan, S.Ag.',                 'Ketua Dept. Pendidikan & Dakwah',       10,  null),
  ('H. Wahyu Setiawan, S.T.',                  'Ketua Dept. Pengembangan Ekonomi',      11,  null),
  ('Cecep Mulyadi, S.H.',                      'Ketua Dept. Hukum & HAM',               12,  null),
  ('Yudi Permana, M.Kom.',                     'Ketua Dept. Teknologi & Informasi',     13,  null),
  ('Ahmad Fauzi, S.Sos.',                      'Ketua Dept. Kepemudaan & Olahraga',     14,  null),
  ('Hj. Neneng Rahmawati, S.Pd.',              'Ketua Dept. Pemberdayaan Perempuan',    15,  null);

-- ── BERITA ───────────────────────────────────────────────────────────────────
truncate table berita restart identity cascade;

insert into berita (judul, slug, ringkasan, konten, gambar_url, kategori, status, dibuat_pada) values

(
  'PW GP Ansor Jawa Barat Gelar Rapat Koordinasi Wilayah 2026',
  'pw-gp-ansor-jabar-gelar-rakor-2026',
  'Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat menggelar Rapat Koordinasi Wilayah (Rakorwil) yang dihadiri seluruh Pimpinan Cabang se-Jawa Barat.',
  '<p>Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat sukses menggelar Rapat Koordinasi Wilayah (Rakorwil) 2026 di Aula Gedung PWNU Jawa Barat, Kota Bandung. Kegiatan ini dihadiri oleh seluruh Ketua Pimpinan Cabang se-Jawa Barat.</p>
<p>Rakorwil kali ini mengangkat tema <strong>"Penguatan Kader Ansor Menuju Indonesia Emas 2045"</strong>. Dalam sambutannya, Ketua PW GP Ansor Jawa Barat KH. Ahmad Mujahid Ridwan menegaskan pentingnya sinergi antara pengurus wilayah dan cabang dalam memperkuat organisasi.</p>
<p>Beberapa agenda strategis yang dibahas antara lain: program kaderisasi Pelatihan Kepemimpinan Dasar (PKD), penguatan ekonomi kader melalui koperasi Ansor, serta koordinasi penyelenggaraan Hari Lahir GP Ansor ke-92.</p>
<p>"Ansor Jawa Barat harus menjadi garda terdepan dalam menjaga nilai-nilai Ahlussunnah wal Jamaah di tengah arus perubahan zaman," tegas Ketua PW dalam sambutan penutup.</p>',
  'https://picsum.photos/seed/rakorwil/800/500',
  'Organisasi',
  'terbit',
  now() - interval '2 days'
),

(
  'Ansor Jabar Luncurkan Program 1000 Hafidz Qur''an untuk Kader Muda',
  'ansor-jabar-program-1000-hafidz-quran',
  'PW GP Ansor Jawa Barat secara resmi meluncurkan program beasiswa tahfidz Al-Quran bagi kader muda NU di seluruh Jawa Barat.',
  '<p>Dalam rangka memperkuat basis keilmuan dan spiritual kader, Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat secara resmi meluncurkan Program <strong>"1000 Hafidz Qur''an"</strong>. Program ini menargetkan seribu kader muda yang akan mendapatkan beasiswa pendidikan tahfidz Al-Quran selama dua tahun.</p>
<p>Program ini digagas sebagai bentuk nyata komitmen Ansor dalam mencetak generasi Islam yang tidak hanya cakap secara organisatoris, tetapi juga kuat secara spiritual dan keilmuan agama.</p>
<p>Peserta yang terpilih akan ditempatkan di pesantren-pesantren mitra Ansor Jawa Barat yang tersebar di berbagai kabupaten/kota. Seleksi dilakukan secara ketat melalui tes membaca Al-Quran dan wawancara motivasi.</p>',
  'https://picsum.photos/seed/hafidz/800/500',
  'Program',
  'terbit',
  now() - interval '5 days'
),

(
  'GP Ansor Jabar Gelar Aksi Sosial Bantu Korban Bencana di Cianjur',
  'gp-ansor-jabar-aksi-sosial-cianjur',
  'Ribuan relawan GP Ansor Jawa Barat turun langsung ke lokasi bencana di Cianjur untuk memberikan bantuan logistik dan layanan kesehatan gratis.',
  '<p>Merespons bencana banjir bandang yang melanda sejumlah kecamatan di Kabupaten Cianjur, Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat mengerahkan ribuan relawan dari Banser (Barisan Ansor Serbaguna) untuk terjun langsung ke lokasi terdampak.</p>
<p>Posko induk didirikan di Kecamatan Pacet dan Cugenang, menyediakan layanan distribusi logistik berupa sembako, pakaian layak pakai, obat-obatan, serta layanan kesehatan gratis bagi warga terdampak.</p>
<p>"Ini adalah bentuk nyata Islam rahmatan lil alamin yang kami praktikkan. Tidak ada sekat-sekat suku, agama, maupun golongan — kami hadir untuk semua," ujar Koordinator Relawan Ansor Cianjur, Mas Abdul Karim.</p>
<p>Total bantuan yang terhimpun dari donasi anggota dan simpatisan mencapai lebih dari Rp 500 juta yang disalurkan secara transparan dan akuntabel.</p>',
  'https://picsum.photos/seed/sosial/800/500',
  'Sosial',
  'terbit',
  now() - interval '8 days'
),

(
  'Pelatihan Kewirausahaan Ansor: Cetak 500 Pengusaha Muda NU di Jabar',
  'pelatihan-kewirausahaan-ansor-500-pengusaha',
  'PW GP Ansor Jabar bekerja sama dengan Dinas Koperasi Jawa Barat menyelenggarakan pelatihan kewirausahaan bagi kader muda NU.',
  '<p>Bekerja sama dengan Dinas Koperasi dan UKM Provinsi Jawa Barat, Pimpinan Wilayah GP Ansor Jawa Barat menyelenggarakan <strong>Pelatihan Kewirausahaan Kader Ansor 2026</strong> yang berlangsung selama tiga hari di Hotel Grand Preanger, Bandung.</p>
<p>Program ini diikuti oleh 500 kader pilihan dari 27 Pimpinan Cabang se-Jawa Barat. Peserta mendapatkan materi meliputi: mindset entrepreneurship, manajemen keuangan dasar, digital marketing, serta akses permodalan melalui KUR (Kredit Usaha Rakyat).</p>
<p>Kepala Dinas Koperasi dan UKM Provinsi Jawa Barat dalam sambutannya menyambut positif sinergi dengan Ansor, menyebut kader Ansor sebagai aset potensial pembangunan ekonomi daerah.</p>',
  'https://picsum.photos/seed/wirausaha/800/500',
  'Ekonomi',
  'terbit',
  now() - interval '12 days'
),

(
  'Musyawarah Wilayah GP Ansor Jawa Barat Resmi Dibuka',
  'musyawarah-wilayah-gp-ansor-jabar',
  'Musyawarah Wilayah GP Ansor Jawa Barat resmi dibuka oleh Gubernur Jawa Barat, menandai momentum penting pergantian kepemimpinan organisasi.',
  '<p>Musyawarah Wilayah (Muswil) Gerakan Pemuda Ansor Jawa Barat periode 2026–2031 resmi dibuka oleh Gubernur Jawa Barat di Gedung Sate, Kota Bandung. Muswil dihadiri lebih dari 1.200 peserta dari seluruh penjuru Jawa Barat.</p>
<p>Muswil menjadi forum tertinggi organisasi untuk mengevaluasi kinerja kepengurusan periode sebelumnya, menetapkan program kerja lima tahun ke depan, serta memilih Ketua dan Pengurus Wilayah yang baru melalui mekanisme musyawarah mufakat.</p>',
  'https://picsum.photos/seed/muswil/800/500',
  'Organisasi',
  'terbit',
  now() - interval '15 days'
),

(
  'Ansor Jabar Ikuti Apel Akbar Hari Lahir GP Ansor ke-92 di Jakarta',
  'ansor-jabar-apel-akbar-harlah-92',
  'Ribuan kader GP Ansor Jawa Barat mengikuti Apel Akbar Hari Lahir GP Ansor ke-92 yang dipusatkan di Gelora Bung Karno, Jakarta.',
  '<p>Ribuan kader dan simpatisan GP Ansor dari seluruh Jawa Barat memenuhi Stadion Utama Gelora Bung Karno (SUGBK), Jakarta, dalam rangka Apel Akbar Hari Lahir (Harlah) GP Ansor ke-92.</p>
<p>Kontingen Jawa Barat tampil membanggakan dengan mengerahkan 15.000 kader yang datang dengan tertib menggunakan ratusan bus dari berbagai daerah. Ansor Jawa Barat mendapat apresiasi dari PP GP Ansor sebagai kontingen terbesar dan paling disiplin.</p>',
  'https://picsum.photos/seed/harlah/800/500',
  'Nasional',
  'terbit',
  now() - interval '20 days'
);

-- ── ARTIKEL / OPINI ───────────────────────────────────────────────────────────
truncate table artikel restart identity cascade;

insert into artikel (judul, slug, ringkasan, konten, gambar_url, nama_penulis, status, dibuat_pada) values

(
  'Islam Wasathiyyah: Jalan Tengah Kader Ansor di Era Polarisasi',
  'islam-wasathiyyah-jalan-tengah-kader-ansor',
  'Polarisasi sosial yang semakin tajam menuntut kader Ansor untuk konsisten berdiri di atas prinsip Islam wasathiyyah — Islam yang moderat, toleran, dan membumi.',
  '<p>Di tengah arus polarisasi sosial yang semakin mengkhawatirkan, kader Gerakan Pemuda Ansor dituntut untuk hadir sebagai agen perdamaian dan perekat kebangsaan. Prinsip Islam wasathiyyah bukan sekadar jargon, melainkan panduan hidup yang harus diinternalisasi dan dipraktikkan dalam kehidupan sehari-hari.</p>
<p>Islam wasathiyyah berarti Islam yang moderat, yang tidak condong ke ekstrem kanan maupun ekstrem kiri. Kader Ansor perlu memahami bahwa keberagaman adalah sunnatullah yang harus dirawat, bukan dijadikan bahan bakar konflik.</p>
<p>Dalam konteks kebangsaan, wasathiyyah berarti menempatkan kepentingan bangsa dan negara di atas kepentingan golongan sempit. NKRI bagi Ansor adalah harga mati yang tidak boleh ditawar oleh siapapun.</p>',
  'https://picsum.photos/seed/wasathiyyah/800/500',
  'KH. Ahmad Mujahid Ridwan',
  'terbit',
  now() - interval '3 days'
),

(
  'Peran Strategis Pemuda NU dalam Menjaga Stabilitas Demokrasi Indonesia',
  'peran-strategis-pemuda-nu-demokrasi',
  'Pemuda NU memiliki peran strategis sebagai pilar penjaga demokrasi yang sehat dan bermartabat, jauh dari praktik politik identitas yang memecah belah.',
  '<p>Demokrasi Indonesia sedang berada dalam persimpangan yang menentukan. Di satu sisi, partisipasi politik masyarakat terus meningkat. Di sisi lain, praktik politik identitas yang memecah belah semakin mengancam kohesi sosial.</p>
<p>Dalam situasi inilah pemuda Nahdlatul Ulama, khususnya kader GP Ansor, harus tampil sebagai penjaga nilai-nilai demokrasi yang sehat. Ansor memiliki modal sosial yang luar biasa: jaringan yang tersebar di 27 kabupaten/kota, kedekatan dengan akar rumput, serta tradisi musyawarah mufakat yang sudah mengakar.</p>
<p>Kader Ansor harus melek politik, aktif berpartisipasi, namun selalu menjaga independensi organisasi dari kepentingan politik partisan yang sesaat. Inilah yang membedakan Ansor sebagai organisasi kepemudaan Islam yang matang.</p>',
  'https://picsum.photos/seed/demokrasi/800/500',
  'H. Farhan Nugraha, S.H.',
  'terbit',
  now() - interval '6 days'
),

(
  'Kader Ansor dan Literasi Digital: Benteng Melawan Hoaks',
  'kader-ansor-literasi-digital-melawan-hoaks',
  'Di era banjir informasi, kader Ansor perlu membekali diri dengan kemampuan literasi digital agar tidak menjadi bagian dari rantai penyebaran hoaks.',
  '<p>Era digital telah mengubah cara manusia berkomunikasi dan memperoleh informasi secara fundamental. Namun di balik kemudahan itu, tersembunyi ancaman serius: banjir hoaks dan disinformasi yang merusak tatanan sosial.</p>
<p>Kader Ansor, sebagai kelompok pemuda Muslim yang terdidik dan terorganisir, memiliki tanggung jawab moral untuk menjadi garda terdepan dalam perang melawan hoaks. Ini bukan sekadar tugas teknis, melainkan bagian dari amar makruf nahi munkar di era digital.</p>
<p>Langkah praktis yang bisa dilakukan: (1) verifikasi informasi sebelum menyebarkan, (2) gunakan sumber-sumber terpercaya, (3) laporkan konten hoaks ke platform digital, dan (4) aktif mengedukasi lingkungan sekitar tentang bahaya hoaks.</p>',
  'https://picsum.photos/seed/digital/800/500',
  'Yudi Permana, M.Kom.',
  'terbit',
  now() - interval '9 days'
),

(
  'Ekonomi Pesantren: Model Kemandirian yang Perlu Diadopsi Kader Ansor',
  'ekonomi-pesantren-model-kemandirian',
  'Model ekonomi pesantren yang berbasis kemandirian dan kegotong-royongan dapat menjadi inspirasi bagi kader Ansor dalam membangun ekosistem ekonomi mandiri.',
  '<p>Pesantren di Indonesia telah lama membuktikan diri sebagai lembaga yang tidak hanya mencetak ulama, tetapi juga wirausahawan tangguh. Konsep ekonomi pesantren yang berbasis pada kemandirian, keberkahan, dan kegotong-royongan adalah model yang relevan untuk diadopsi secara lebih luas oleh kader Ansor.</p>
<p>Koperasi Ansor, jika dikelola dengan prinsip-prinsip ini, berpotensi menjadi kekuatan ekonomi yang signifikan. Bayangkan jika setiap dari 500 PC GP Ansor di Indonesia memiliki koperasi yang sehat — ini bisa menjadi ekosistem ekonomi berbasis nilai yang luar biasa.</p>',
  'https://picsum.photos/seed/ekonomi/800/500',
  'H. Wahyu Setiawan, S.T.',
  'terbit',
  now() - interval '13 days'
),

(
  'Urgensi Kaderisasi Berkelanjutan dalam Menjaga Eksistensi Ansor',
  'urgensi-kaderisasi-berkelanjutan-ansor',
  'Kaderisasi adalah jantung sebuah organisasi. Tanpa kader yang bermutu dan berkarakter, Ansor hanya akan menjadi nama tanpa ruh.',
  '<p>Imam Al-Ghazali pernah mengatakan bahwa ilmu tanpa amal adalah pohon tanpa buah. Dalam konteks organisasi, kader tanpa karakter adalah anggota tanpa jiwa. Inilah mengapa kaderisasi bukan sekadar formalitas administrasi, melainkan investasi jangka panjang keberlangsungan organisasi.</p>
<p>PW GP Ansor Jawa Barat berkomitmen untuk menjalankan sistem kaderisasi yang berkelanjutan, terstruktur, dan berbasis kompetensi. Pelatihan Kepemimpinan Dasar (PKD), Pelatihan Kepemimpinan Menengah (PKM), hingga Pelatihan Kepemimpinan Tingkat Tinggi (PKTT) adalah jenjang yang harus dilalui setiap kader secara serius.</p>',
  'https://picsum.photos/seed/kaderisasi/800/500',
  'H. Rizky Ramadhan, M.Pd.',
  'terbit',
  now() - interval '17 days'
);

-- ── GALERI ────────────────────────────────────────────────────────────────────
truncate table galeri restart identity cascade;

insert into galeri (judul, gambar_url, deskripsi, dibuat_pada) values
  ('Rakorwil PW GP Ansor Jabar 2026',         'https://picsum.photos/seed/g1/800/600',  'Rapat Koordinasi Wilayah PW GP Ansor Jawa Barat 2026 di Aula PWNU Jabar.',          now() - interval '2 days'),
  ('Apel Akbar Harlah GP Ansor ke-92',        'https://picsum.photos/seed/g2/800/600',  'Kontingen Ansor Jawa Barat dalam Apel Akbar Hari Lahir GP Ansor ke-92 di GBK.',     now() - interval '5 days'),
  ('Aksi Sosial Bencana Cianjur',             'https://picsum.photos/seed/g3/800/600',  'Relawan Banser Ansor Jabar mendistribusikan logistik untuk korban bencana Cianjur.', now() - interval '8 days'),
  ('Pelatihan Kewirausahaan Kader',           'https://picsum.photos/seed/g4/800/600',  'Sesi pelatihan kewirausahaan bagi 500 kader terpilih se-Jawa Barat.',               now() - interval '12 days'),
  ('Launching Program 1000 Hafidz',           'https://picsum.photos/seed/g5/800/600',  'Peluncuran resmi Program 1000 Hafidz Qur''an untuk kader muda NU Jawa Barat.',      now() - interval '15 days'),
  ('Musyawarah Wilayah 2026',                 'https://picsum.photos/seed/g6/800/600',  'Momen bersejarah Musyawarah Wilayah GP Ansor Jawa Barat 2026 di Gedung Sate.',      now() - interval '18 days'),
  ('Upacara Hari Santri Nasional',            'https://picsum.photos/seed/g7/800/600',  'Kader Ansor dan Banser menghadiri upacara Hari Santri Nasional di Alun-Alun Bandung.', now() - interval '22 days'),
  ('Dialog Kebangsaan Ansor Jabar',           'https://picsum.photos/seed/g8/800/600',  'Dialog kebangsaan bertema "Ansor dan NKRI" bersama tokoh-tokoh lintas agama.',      now() - interval '25 days'),
  ('PKD Angkatan I Ansor Jabar 2026',         'https://picsum.photos/seed/g9/800/600',  'Peserta Pelatihan Kepemimpinan Dasar (PKD) Angkatan I PW Ansor Jabar 2026.',        now() - interval '30 days'),
  ('Santunan Yatim Piatu Ramadan',            'https://picsum.photos/seed/g10/800/600', 'Program santunan 1.000 anak yatim piatu se-Jawa Barat dalam rangka Ramadan.',       now() - interval '35 days'),
  ('Pelantikan Pengurus Cabang Baru',         'https://picsum.photos/seed/g11/800/600', 'Pelantikan tiga Pimpinan Cabang baru GP Ansor yang resmi terbentuk di Jabar.',       now() - interval '40 days'),
  ('Lomba Kreatifitas Kader Ansor Jabar',     'https://picsum.photos/seed/g12/800/600', 'Peserta lomba kreativitas kader dari berbagai cabang unjuk bakat di Bandung.',       now() - interval '45 days');
