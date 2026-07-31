import Link from "next/link";
import { BookOpen, Shield, Flag, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ansor-600 via-ansor-700 to-ansor-800 text-white py-12 sm:py-16 lg:py-20 xl:py-24 shadow-xl">
      {/* ── Ambient Glowing Green & Gold Background Orbs ─────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -top-20 h-[30rem] w-[30rem] rounded-full bg-gold-400/20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[35rem] w-[35rem] rounded-full bg-emerald-300/20 blur-[120px]" />
        <div className="h-full w-full bg-[radial-gradient(#d4af37_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* ── Left Column: Clean Typography & Call to Action ──────────────── */}
          <div className="lg:col-span-6 z-10">
            {/* Top Pill Tag with Ring Dot */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-gold-300/60 bg-gold-400/20 px-4 py-1.5 backdrop-blur-md shadow-md">
              <span className="flex h-2 w-2 rounded-full bg-gold-300 animate-ping" />
              <span className="text-xs font-bold text-gold-300 tracking-wide">
                PW GP ANSOR JAWA BARAT
              </span>
            </div>

            {/* Clean Bold Heading */}
            <h1 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.15] drop-shadow-md">
              Menjaga Islam <br />
              Ahlussunnah <br />
              <span className="text-gold-300">Dari Tanah Jawa Barat</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-sm sm:text-base text-ansor-50/95 leading-relaxed font-medium">
              Media informasi resmi PW GP Ansor Jawa Barat. Mengokohkan akidah keislaman, benteng NKRI, dan kaderisasi pemuda di seluruh 27 Kabupaten/Kota.
            </p>

            {/* Pill Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-ansor-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:bg-gold-300 hover:scale-105"
              >
                <span>Baca Berita</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/badan-lembaga"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:border-white/60"
              >
                <span>Badan &amp; Lembaga</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Concentric Orbit Rings & Floating Cards ──────── */}
          {/* DESKTOP VIEW (lg:flex) */}
          <div className="hidden lg:flex lg:col-span-6 relative items-center justify-center min-h-[480px]">
            {/* Concentric Orbit Rings */}
            <div className="absolute h-72 w-72 rounded-full border border-gold-300/30 animate-pulse-glow" />
            <div className="absolute h-[23rem] w-[23rem] rounded-full border border-white/25" />
            <div className="absolute h-[31rem] w-[31rem] rounded-full border border-gold-300/20" />

            {/* Floating Card 1: Top Right */}
            <div className="absolute top-2 right-2 w-64 rounded-2xl border border-white/30 bg-ansor-900/90 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-gold-300/70 hover:-translate-y-1.5 animate-float-slow">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/25 text-gold-300 ring-1 ring-gold-400/50">
                <BookOpen size={20} />
              </div>
              <h3 className="text-sm font-bold text-white">Keislaman &amp; Tradisi</h3>
              <p className="mt-1 text-xs text-ansor-100/90 leading-relaxed">
                MDS Rijalul Ansor &amp; amaliah dzikir sholawat An-Nahdliyah.
              </p>
            </div>

            {/* Floating Card 2: Middle Left */}
            <div className="absolute bottom-16 left-0 w-64 rounded-2xl border border-white/30 bg-ansor-900/90 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-sky-300/70 hover:-translate-y-1.5 animate-float-delayed">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/25 text-sky-300 ring-1 ring-sky-300/50">
                <Shield size={20} />
              </div>
              <h3 className="text-sm font-bold text-white">Infrastruktur &amp; Banser</h3>
              <p className="mt-1 text-xs text-ansor-100/90 leading-relaxed">
                Pengawalan ulama, toleransi, dan aksi tanggap bencana.
              </p>
            </div>

            {/* Floating Card 3: Bottom Right */}
            <div className="absolute bottom-0 right-4 w-64 rounded-2xl border border-white/30 bg-ansor-900/90 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/70 hover:-translate-y-1.5 animate-float-slow" style={{ animationDelay: "1s" }}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-300/50">
                <Flag size={20} />
              </div>
              <h3 className="text-sm font-bold text-white">Pemuda &amp; Pendidikan</h3>
              <p className="mt-1 text-xs text-ansor-100/90 leading-relaxed">
                Kaderisasi SDM pemuda 100% NKRI di seluruh Jawa Barat.
              </p>
            </div>
          </div>

          {/* MOBILE & TABLET VIEW (lg:hidden) ── Clean Responsive Grid Stack */}
          <div className="lg:hidden col-span-12 mt-4 grid gap-3.5 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/30 bg-ansor-900/90 p-4 shadow-lg backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500/25 text-gold-300 ring-1 ring-gold-400/50 shrink-0">
                  <BookOpen size={18} />
                </div>
                <h3 className="text-sm font-bold text-white">Keislaman &amp; Tradisi</h3>
              </div>
              <p className="text-xs text-ansor-100/90 leading-relaxed">
                MDS Rijalul Ansor &amp; amaliah dzikir sholawat An-Nahdliyah.
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-ansor-900/90 p-4 shadow-lg backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/25 text-sky-300 ring-1 ring-sky-300/50 shrink-0">
                  <Shield size={18} />
                </div>
                <h3 className="text-sm font-bold text-white">Infrastruktur &amp; Banser</h3>
              </div>
              <p className="text-xs text-ansor-100/90 leading-relaxed">
                Pengawalan ulama, toleransi, dan aksi tanggap bencana.
              </p>
            </div>

            <div className="rounded-2xl border border-white/30 bg-ansor-900/90 p-4 shadow-lg backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/25 text-emerald-300 ring-1 ring-emerald-300/50 shrink-0">
                  <Flag size={18} />
                </div>
                <h3 className="text-sm font-bold text-white">Pemuda &amp; Pendidikan</h3>
              </div>
              <p className="text-xs text-ansor-100/90 leading-relaxed">
                Kaderisasi SDM pemuda 100% NKRI di seluruh Jawa Barat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
