import Image from "next/image";
import Link from "next/link";
import { Landmark, Shield, BookOpen, Anchor, Activity, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badan & Lembaga Otonom | PW GP Ansor Jawa Barat",
  description:
    "Daftar Badan dan Lembaga Otonom di lingkungan Pimpinan Wilayah Gerakan Pemuda Ansor Jawa Barat: MDS Rijalul Ansor, BARITIM, BANSER, BANAAR, dan BALANTAS.",
};

interface LembagaItem {
  id: string;
  namaShort: string;
  namaLengkap: string;
  kategori: string;
  deskripsi: string;
  gambar: string;
  icon: any;
  warnaBadge: string;
  tugasUtama: string[];
}

const daftarLembaga: LembagaItem[] = [
  {
    id: "mds-rijalul-ansor",
    namaShort: "MDS RIJALUL ANSOR",
    namaLengkap: "Majelis Dzikir dan Sholawat Rijalul Ansor",
    kategori: "Lembaga Keagamaan & Amaliah",
    deskripsi:
      "Majelis Dzikir dan Sholawat yang bertugas menjaga, melestarikan, dan mensyiarkan tradisi keagamaan Islam Ahlussunnah wal Jama'ah An-Nahdliyah di seluruh lapisan kader Gerakan Pemuda Ansor Jawa Barat.",
    gambar: "/badan-lembaga/mds-rijalul-ansor.png",
    icon: BookOpen,
    warnaBadge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
    tugasUtama: [
      "Penyelenggaraan pengajian rutin dan majelis dzikir sholawat kader",
      "Kaderisasi da'i muda dan penceramah An-Nahdliyah",
      "Penguatan nilai spiritualitas dan tradisi amaliah keagamaan NU",
    ],
  },
  {
    id: "baritim",
    namaShort: "BARITIM",
    namaLengkap: "Barisan Ansor Serbaguna Maritim",
    kategori: "Satuan Khusus Banser Kelautan",
    deskripsi:
      "Satuan khusus BANSER yang memiliki kualifikasi dan keahlian di bidang maritim, pengamanan kawasan perairan, kelautan, serta aksi kemanusiaan & SAR perairan di Jawa Barat.",
    gambar: "/badan-lembaga/baritim.png",
    icon: Anchor,
    warnaBadge: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    tugasUtama: [
      "Pengamanan dan pengawasan wilayah maritim dan perairan",
      "Tim Reaksi Cepat Pencarian dan Pertolongan (SAR) Bencana Air",
      "Pemberdayaan potensi ekonomi & sosial masyarakat pesisir",
    ],
  },
  {
    id: "banser",
    namaShort: "BANSER",
    namaLengkap: "Barisan Ansor Serbaguna",
    kategori: "Badan Otonom Pengamanan & Kemanusiaan",
    deskripsi:
      "Tenaga inti Gerakan Pemuda Ansor sebagai kader inti pengamanan, benteng kiai dan ulama, penjaga keutuhan NKRI, serta pelopor aksi sosial-kemanusiaan di masyarakat.",
    gambar: "/badan-lembaga/banser.png",
    icon: Shield,
    warnaBadge: "bg-ansor-100 text-ansor-900 dark:bg-ansor-900 dark:text-gold-400 border-ansor-300 dark:border-ansor-700",
    tugasUtama: [
      "Pengamanan kegiatan keagamaan, ulama, dan marwah organisasi",
      "Satuan Tanggap Bencana (BAGANA) dan aksi relawan kemanusiaan",
      "Menjaga kerukunan, toleransi, dan kedaulatan Negara Kesatuan Republik Indonesia",
    ],
  },
  {
    id: "banaar",
    namaShort: "BANAAR",
    namaLengkap: "Badan Ansor Anti Narkoba",
    kategori: "Badan Pencegahan & Edukasi Kesehatan",
    deskripsi:
      "Badan khusus yang dibentuk GP Ansor untuk mengedukasi, mencegah, dan membentengi generasi muda serta masyarakat Jawa Barat dari ancaman penyalahgunaan Narkoba.",
    gambar: "/badan-lembaga/banaar.png",
    icon: Activity,
    warnaBadge: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300 dark:border-amber-800",
    tugasUtama: [
      "Sosialisasi dan penyuluhan bahaya Narkoba di sekolah dan pesantren",
      "Pembentukan Duta Pemuda Anti Narkoba tingkat daerah",
      "Pendampingan dan edukasi preventif untuk pemulihan generasi muda",
    ],
  },
  {
    id: "balantas",
    namaShort: "BALANTAS",
    namaLengkap: "Barisan Ansor Serbaguna Lalu Lintas",
    kategori: "Satuan Khusus Pengaturan Lalu Lintas",
    deskripsi:
      "Satuan tugas khusus Banser yang secara profesional dilatih untuk mengatur ketertiban, pengawalan, dan kelancaran arus lalu lintas pada acara-acara besar dan momen pelayanan publik.",
    gambar: "/badan-lembaga/balantas.png",
    icon: Compass,
    warnaBadge: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300 border-yellow-300 dark:border-yellow-800",
    tugasUtama: [
      "Pengaturan & kelancaran lalu lintas di agenda besar keagamaan",
      "Posko Pelayanan & Pengamanan Arus Mudik / Balik Lebaran",
      "Pengawalan dan asistensi mobilitas ulama dan kiai",
    ],
  },
];

export default function BadanLembagaPage() {
  return (
    <div className="bg-ansor-50/50 pb-20 dark:bg-ansor-950/50">
      {/* ── Banner Header ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ansor-900 via-ansor-800 to-ansor-950 py-16 text-white shadow-lg">
        {/* Hiasan background */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold text-gold-300 backdrop-blur-sm">
            <Landmark size={14} className="text-gold-400" />
            <span>PW GP ANSOR JAWA BARAT</span>
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            Badan &amp; Lembaga Otonom
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-ansor-200 sm:text-lg">
            Sayap organisasi dan satuan khusus Gerakan Pemuda Ansor Jawa Barat yang bergerak di bidang keagamaan, pengamanan, kemaritiman, pencegahan narkoba, dan ketertiban lalu lintas.
          </p>
        </div>
      </section>

      {/* ── Content Grid Cards ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-12">
        <div className="mb-8 flex items-center justify-between border-b border-ansor-200 pb-4 dark:border-ansor-800">
          <div>
            <h2 className="text-xl font-bold text-ansor-900 dark:text-ansor-50">
              Daftar 5 Badan &amp; Lembaga
            </h2>
            <p className="text-xs text-ansor-600 dark:text-ansor-400">
              Masing-masing memiliki tugas khusus untuk khidmat kepada masyarakat dan organisasi.
            </p>
          </div>
          <span className="rounded-lg bg-ansor-100 px-3 py-1 text-xs font-bold text-ansor-800 dark:bg-ansor-900 dark:text-gold-400">
            5 Lembaga Active
          </span>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {daftarLembaga.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ansor-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl dark:border-ansor-800 dark:bg-ansor-900"
              >
                {/* Header Foto Card */}
                <div className="relative h-48 w-full overflow-hidden bg-ansor-950">
                  <Image
                    src={item.gambar}
                    alt={item.namaLengkap}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ansor-950 via-ansor-950/20 to-transparent" />
                  
                  {/* Badge Nama Short */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ansor-800 text-gold-400 shadow-md ring-2 ring-gold-400/30">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight text-white drop-shadow">
                        {item.namaShort}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content Card */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Kategori Badge */}
                  <div className="mb-3">
                    <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${item.warnaBadge}`}>
                      {item.kategori}
                    </span>
                  </div>

                  <h4 className="mb-2 text-base font-bold text-ansor-900 dark:text-ansor-100">
                    {item.namaLengkap}
                  </h4>

                  <p className="mb-4 flex-1 text-xs leading-relaxed text-ansor-600 dark:text-ansor-300">
                    {item.deskripsi}
                  </p>

                  {/* Tugas Utama List */}
                  <div className="mt-auto border-t border-ansor-100 pt-3 dark:border-ansor-800">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-ansor-500 dark:text-ansor-400">
                      Fokus &amp; Peran Utama:
                    </p>
                    <ul className="space-y-1.5">
                      {item.tugasUtama.map((tugas, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-xs text-ansor-700 dark:text-ansor-300">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-ansor-600 dark:text-gold-400" />
                          <span>{tugas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Callout Bottom ────────────────────────────────────────────────────── */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-ansor-200 bg-gradient-to-r from-ansor-800 to-ansor-900 p-8 text-white shadow-xl dark:border-ansor-700">
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Tertarik Bergabung atau Mengadakan Kegiatan Bersama?
              </h3>
              <p className="mt-1 text-xs text-ansor-200 sm:text-sm">
                Hubungi Pengurus Wilayah GP Ansor Jawa Barat untuk informasi pendaftaran dan sinergi kegiatan.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-bold text-ansor-950 transition-all hover:bg-gold-300 hover:shadow-lg"
            >
              <span>Hubungi Kami</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
