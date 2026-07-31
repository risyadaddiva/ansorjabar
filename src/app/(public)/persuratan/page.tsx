import Link from "next/link";
import { FileSpreadsheet, Download, Lock, Clock, FileText, CheckCircle2, Sparkles, FileCheck, ShieldAlert, ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Persuratan & Dokumen Resmi | PW GP Ansor Jawa Barat",
  description:
    "Pusat layanan persuratan, unduh berkas contoh surat permohonan, template proposal, dan panduan pengajuan TTD online PW GP Ansor Jawa Barat.",
};

interface DokumenItem {
  id: string;
  judul: string;
  kategori: string;
  format: string;
  ukuran: string;
  deskripsi: string;
  linkDownload: string;
}

const daftarDokumen: DokumenItem[] = [
  {
    id: "surat-permohonan",
    judul: "Template Surat Permohonan & Dispensasi",
    kategori: "Surat Resmi",
    format: "DOCX & PDF",
    ukuran: "45 KB",
    deskripsi: "Draft resmi permohonan narasumber, rekomendasi, dan permohonan dispensasi kegiatan kader.",
    linkDownload: "#",
  },
  {
    id: "template-sk",
    judul: "Draft Permohonan SK PC / PAC & Undangan",
    kategori: "Administrasi SK",
    format: "DOCX",
    ukuran: "52 KB",
    deskripsi: "Format standar kelengkapan permohonan Surat Keputusan (SK) kepengurusan Cabang & Anak Cabang.",
    linkDownload: "#",
  },
  {
    id: "proposal-lpj",
    judul: "Format Proposal & LPJ Kegiatan Ansor",
    kategori: "Proposal & LPJ",
    format: "DOCX",
    ukuran: "128 KB",
    deskripsi: "Template penyusunan proposal sponsorship, anggaran biaya, dan Laporan Pertanggungjawaban (LPJ).",
    linkDownload: "#",
  },
  {
    id: "berita-acara",
    judul: "Format Berita Acara & Daftar Hadir Rapat",
    kategori: "Notulensi & Presensi",
    format: "DOCX",
    ukuran: "38 KB",
    deskripsi: "Draft berita acara musyawarah, konferensi cabang/anak cabang, dan lembar daftar hadir kegiatan.",
    linkDownload: "#",
  },
];

export default function PersuratanPage() {
  return (
    <div className="bg-ansor-50/50 pb-20 dark:bg-ansor-950/50">
      {/* ── Dynamic & Animated Banner Header ───────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ansor-600 via-ansor-700 to-ansor-800 py-16 lg:py-20 text-white shadow-xl">
        {/* Background Orbs Glow & Islamic Texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gold-300/25 blur-3xl animate-pulse-glow" />
          <div className="absolute -right-20 -bottom-20 h-[30rem] w-[30rem] rounded-full bg-emerald-300/25 blur-3xl animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
          <div className="h-full w-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px] opacity-15" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          {/* Top Pill Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-300/50 bg-gold-400/20 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur-md shadow-md">
            <span className="flex h-2 w-2 rounded-full bg-gold-300 animate-ping" />
            <FileSpreadsheet size={14} className="text-gold-300" />
            <span className="tracking-wide">PW GP ANSOR JAWA BARAT</span>
          </div>

          {/* Heading Title */}
          <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white drop-shadow-md">
            Layanan Persuratan &amp;{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent underline decoration-gold-400/50 decoration-wavy">
              Dokumen Resmi
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base text-ansor-50/90 sm:text-lg leading-relaxed font-medium">
            Pusat unduh template dokumen resmi, draft permohonan, serta panduan tata kelola administrasi surat-menyurat di lingkungan PW GP Ansor Jawa Barat.
          </p>

          {/* Quick Badges Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <FileText size={14} className="text-gold-300" />
              Template Surat Permohonan
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              <FileCheck size={14} className="text-gold-300" />
              Format SK &amp; LPJ
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-500/20 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur-md">
              <Lock size={13} className="text-gold-400" />
              Pengajuan TTD Online (Coming Soon)
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 1: Template Dokumen Yang Bisa Diunduh ───────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <div className="mb-8 flex items-center justify-between border-b border-ansor-200 pb-4 dark:border-ansor-800">
          <div>
            <h2 className="text-xl font-bold text-ansor-900 dark:text-ansor-50 flex items-center gap-2">
              <FileSpreadsheet className="text-ansor-600 dark:text-gold-400" size={22} />
              Unduh Template Dokumen Resmi
            </h2>
            <p className="text-xs text-ansor-600 dark:text-ansor-400">
              Silakan unduh file berkas standar untuk kebutuhan administrasi PC, PAC, dan Ranting.
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-lg bg-ansor-100 px-3 py-1 text-xs font-bold text-ansor-800 dark:bg-ansor-900 dark:text-gold-400">
            <Sparkles size={13} className="text-gold-500" />
            4 Berkas Siap Unduh
          </span>
        </div>

        {/* Dokumen Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {daftarDokumen.map((doc) => (
            <div
              key={doc.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ansor-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-ansor-800 dark:bg-ansor-900"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-ansor-100 px-3 py-1 text-[11px] font-bold text-ansor-800 dark:bg-ansor-800 dark:text-gold-300">
                    {doc.kategori}
                  </span>
                  <span className="text-[11px] font-semibold text-ansor-400">
                    {doc.format} • {doc.ukuran}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-bold text-ansor-900 dark:text-white group-hover:text-ansor-600 dark:group-hover:text-gold-400 transition-colors">
                  {doc.judul}
                </h3>

                <p className="text-xs text-ansor-600 dark:text-ansor-300 leading-relaxed mb-6">
                  {doc.deskripsi}
                </p>
              </div>

              <div className="pt-4 border-t border-ansor-100 dark:border-ansor-800 flex items-center justify-between">
                <span className="text-[11px] text-ansor-500 flex items-center gap-1 font-medium">
                  <CheckCircle2 size={13} className="text-emerald-500" /> Format Resmi PW Ansor Jabar
                </span>
                <a
                  href={doc.linkDownload}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Mengunduh file: ${doc.judul}`);
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-ansor-700 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-ansor-600 hover:shadow-md dark:bg-gold-500 dark:text-ansor-950 dark:hover:bg-gold-400"
                >
                  <Download size={14} />
                  <span>Unduh Dokumen</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Fitur Layanan Pengajuan Online (COMING SOON) ──────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="mb-8 border-b border-ansor-200 pb-4 dark:border-ansor-800">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-500/20 px-3 py-0.5 text-xs font-bold text-amber-700 dark:text-amber-300 border border-amber-500/30">
              COMING SOON
            </span>
            <h2 className="text-xl font-bold text-ansor-900 dark:text-ansor-50">
              Layanan Digital &amp; Pengajuan Online
            </h2>
          </div>
          <p className="mt-1 text-xs text-ansor-600 dark:text-ansor-400">
            Fitur digitalisasi persuratan dan pengajuan tanda tangan elektronik sedang dalam tahap pengembangan sistem.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Coming Soon Card 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-ansor-900 via-ansor-950 to-ansor-900 p-7 text-white shadow-xl">
            {/* Lock Badge */}
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-amber-500/10 blur-xl pointer-events-none" />
            
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400 ring-1 ring-amber-400/40">
                <FileCheck size={24} />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-300">
                <Clock size={13} className="animate-spin" style={{ animationDuration: '6s' }} />
                <span>SEDANG DIKEMBANGKAN</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Pengajuan Surat Online (E-Surat)
            </h3>
            <p className="text-xs text-ansor-200/90 leading-relaxed mb-6">
              Sistem verifikasi naskah dinas digital, penomoran otomatis, dan pengajuan surat keluar bagi Pimpinan Cabang &amp; Anak Cabang se-Jawa Barat.
            </p>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-ansor-200 backdrop-blur-md opacity-70 flex items-center justify-center gap-2"
            >
              <Lock size={15} />
              <span>Fitur Belum Tersedia (Segera Hadir)</span>
            </button>
          </div>

          {/* Coming Soon Card 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-br from-ansor-900 via-ansor-950 to-ansor-900 p-7 text-white shadow-xl">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold-500/10 blur-xl pointer-events-none" />

            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400 ring-1 ring-gold-400/40">
                <Lock size={24} />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-gold-500/20 px-3 py-1 text-xs font-bold text-gold-300">
                <Clock size={13} className="animate-spin" style={{ animationDuration: '6s' }} />
                <span>SEDANG DIKEMBANGKAN</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Pengajuan Tanda Tangan Elektronik (TTE)
            </h3>
            <p className="text-xs text-ansor-200/90 leading-relaxed mb-6">
              Layanan verifikasi dan pengesahan TTE resmi Ketua &amp; Sekretaris PW GP Ansor Jawa Barat dengan keamanan enkripsi dokumen terverifikasi.
            </p>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs font-bold text-ansor-200 backdrop-blur-md opacity-70 flex items-center justify-center gap-2"
            >
              <Lock size={15} />
              <span>Fitur Belum Tersedia (Segera Hadir)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Section 3: Panduan Tata Persuratan ───────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-16">
        <div className="rounded-2xl border border-ansor-200 bg-white p-8 shadow-lg dark:border-ansor-800 dark:bg-ansor-900">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ansor-100 text-ansor-800 dark:bg-ansor-800 dark:text-gold-400">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-ansor-900 dark:text-white">
                Panduan Pengajuan Persuratan Manual
              </h3>
              <p className="text-xs text-ansor-600 dark:text-ansor-300">
                Alur permohonan surat &amp; pengesahan SK sebelum sistem e-Surat resmi dirilis:
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-ansor-100 bg-ansor-50/60 p-4 dark:border-ansor-800 dark:bg-ansor-950/60">
              <span className="mb-2 inline-block rounded-md bg-ansor-800 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                Langkah 1
              </span>
              <h4 className="text-xs font-bold text-ansor-900 dark:text-white">Unduh Template Official</h4>
              <p className="mt-1 text-[11px] text-ansor-600 dark:text-ansor-400 leading-relaxed">
                Gunakan berkas template dokumen sesuai format baku organisasi PW GP Ansor Jabar.
              </p>
            </div>

            <div className="rounded-xl border border-ansor-100 bg-ansor-50/60 p-4 dark:border-ansor-800 dark:bg-ansor-950/60">
              <span className="mb-2 inline-block rounded-md bg-ansor-800 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                Langkah 2
              </span>
              <h4 className="text-xs font-bold text-ansor-900 dark:text-white">Lengkapi Berkas &amp; TTD PC</h4>
              <p className="mt-1 text-[11px] text-ansor-600 dark:text-ansor-400 leading-relaxed">
                Isi data naskah dinas dan bubuhi tanda tangan serta stempel Pimpinan Cabang setempat.
              </p>
            </div>

            <div className="rounded-xl border border-ansor-100 bg-ansor-50/60 p-4 dark:border-ansor-800 dark:bg-ansor-950/60">
              <span className="mb-2 inline-block rounded-md bg-ansor-800 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                Langkah 3
              </span>
              <h4 className="text-xs font-bold text-ansor-900 dark:text-white">Kirim ke Sekretariat PW</h4>
              <p className="mt-1 text-[11px] text-ansor-600 dark:text-ansor-400 leading-relaxed">
                Serahkan dokumen fisik atau PDF terstempel ke email / kontak Sekretariat PW Ansor Jabar.
              </p>
            </div>

            <div className="rounded-xl border border-ansor-100 bg-ansor-50/60 p-4 dark:border-ansor-800 dark:bg-ansor-950/60">
              <span className="mb-2 inline-block rounded-md bg-ansor-800 px-2 py-0.5 text-[10px] font-bold text-gold-400">
                Langkah 4
              </span>
              <h4 className="text-xs font-bold text-ansor-900 dark:text-white">Verifikasi &amp; Penerbitan</h4>
              <p className="mt-1 text-[11px] text-ansor-600 dark:text-ansor-400 leading-relaxed">
                Sekretariat PW memproses verifikasi dan melegalkan dokumen balasan / SK pengesahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Callout Bottom ────────────────────────────────────────────────────── */}
      <section className="mx-auto mt-16 max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl border border-ansor-200 bg-gradient-to-r from-ansor-700 via-ansor-800 to-ansor-700 p-8 text-white shadow-xl dark:border-ansor-700">
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Butuh Bantuan Administrasi Persuratan?
              </h3>
              <p className="mt-1 text-xs text-ansor-100 sm:text-sm">
                Tim Sekretariat PW GP Ansor Jawa Barat siap membantu konsultasi tata kelola naskah dinas.
              </p>
            </div>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold-400 px-5 py-3 text-sm font-bold text-ansor-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:scale-105"
            >
              <span>Hubungi Sekretariat</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
