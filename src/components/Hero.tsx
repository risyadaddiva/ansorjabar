import Link from "next/link";
import { BookOpen, Shield, Flag, ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ansor-600 via-ansor-700 to-ansor-800 text-white py-14 sm:py-18 lg:py-24 shadow-xl">
      {/* ── Ambient Glowing Green & Gold Background Orbs & Concentric Rings ───── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 -top-24 -translate-x-1/2 h-[32rem] w-[32rem] rounded-full bg-gold-400/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-10 bottom-0 h-[30rem] w-[30rem] rounded-full bg-emerald-300/20 blur-[120px]" />
        
        {/* Concentric Orbit Rings in Background Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full border border-gold-300/20 animate-pulse-glow" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[42rem] w-[42rem] rounded-full border border-white/15" />
        
        <div className="h-full w-full bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* ── Top Pill Badge ─────────────────────────────────────────────────── */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold-300/60 bg-gold-400/20 px-4.5 py-1.5 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-105">
          <span className="flex h-2 w-2 rounded-full bg-gold-300 animate-ping" />
          <Sparkles size={14} className="text-gold-300" />
          <span className="text-xs font-bold text-gold-300 tracking-wide">
            PW GP ANSOR JAWA BARAT
          </span>
        </div>

        {/* ── Clean & Wide Heading ────────────────────────────────────────────── */}
        <h1 className="mx-auto max-w-4xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.18] drop-shadow-md">
          Menjaga Islam Ahlussunnah <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent">
            Dari Tanah Jawa Barat
          </span>
        </h1>

        {/* ── Subtitle Description ────────────────────────────────────────────── */}
        <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base lg:text-lg text-ansor-50/95 leading-relaxed font-medium">
          Media informasi resmi PW GP Ansor Jawa Barat. Mengokohkan akidah keislaman, benteng NKRI, dan kaderisasi pemuda di seluruh 27 Kabupaten/Kota.
        </p>

        {/* ── Centered CTA Buttons ────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-xs sm:text-sm font-bold text-ansor-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:bg-gold-300 hover:scale-105"
          >
            <span>Baca Berita</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/badan-lembaga"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-7 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:border-white/60"
          >
            <span>Badan &amp; Lembaga</span>
          </Link>
        </div>

        {/* ── 3 Feature Cards Positioned Elegantly Below ─────────────────────── */}
        <div className="mt-12 lg:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto text-left">
          {/* Card 1 */}
          <div className="group rounded-2xl border border-white/30 bg-ansor-900/85 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-gold-300/70 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/25 text-gold-300 ring-1 ring-gold-400/50 transition-transform duration-300 group-hover:scale-110">
              <BookOpen size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
              Keislaman &amp; Tradisi
            </h3>
            <p className="mt-1.5 text-xs text-ansor-100/90 leading-relaxed">
              MDS Rijalul Ansor &amp; amaliah dzikir sholawat An-Nahdliyah.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border border-white/30 bg-ansor-900/85 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-sky-300/70 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/25 text-sky-300 ring-1 ring-sky-300/50 transition-transform duration-300 group-hover:scale-110">
              <Shield size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
              Infrastruktur &amp; Banser
            </h3>
            <p className="mt-1.5 text-xs text-ansor-100/90 leading-relaxed">
              Pengawalan ulama, toleransi, dan aksi tanggap bencana.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-white/30 bg-ansor-900/85 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/70 hover:-translate-y-1.5 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-300/50 transition-transform duration-300 group-hover:scale-110">
              <Flag size={20} />
            </div>
            <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
              Pemuda &amp; Pendidikan
            </h3>
            <p className="mt-1.5 text-xs text-ansor-100/90 leading-relaxed">
              Kaderisasi SDM pemuda 100% NKRI di seluruh Jawa Barat.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
