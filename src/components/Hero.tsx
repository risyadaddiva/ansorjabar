import Link from "next/link";
import { Sparkles, ShieldCheck, ArrowRight, Flame, Landmark, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ansor-950 via-ansor-900 to-ansor-950 text-white py-16 lg:py-24">
      {/* ── Dynamic Background Glowing Orbs & Islamic Pattern Grid ───────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow 1: Top-Left Gold */}
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl animate-pulse-glow" />
        {/* Glow 2: Bottom-Right Emerald */}
        <div className="absolute -right-20 -bottom-20 h-[30rem] w-[30rem] rounded-full bg-emerald-500/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        {/* Glow 3: Center Highlight */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-80 w-80 rounded-full bg-ansor-500/10 blur-2xl" />

        {/* Geometric Islamic Grid Texture */}
        <div className="h-full w-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* ── Left Column: Heading & Messaging ─────────────────────────────── */}
          <div className="lg:col-span-7">
            {/* Top Pill Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-ansor-800/80 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur-md shadow-lg shadow-gold-950/20">
              <Sparkles size={15} className="text-gold-400 animate-pulse" />
              <span className="tracking-wide">ISLAM AN-NAHDLIYAH • BENTENG NKRI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl tracking-tight text-white drop-shadow-md">
              Menjaga{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200 bg-clip-text text-transparent underline decoration-gold-500/40 decoration-wavy">
                Islam Ahlussunnah
              </span>{" "}
              wal Jama&apos;ah dan{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-gold-300 to-amber-200 bg-clip-text text-transparent">
                NKRI
              </span>{" "}
              dari Tanah Pasundan
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-2xl text-base text-ansor-100/90 sm:text-lg leading-relaxed">
              Media informasi resmi Pimpinan Wilayah Gerakan Pemuda Ansor Provinsi Jawa Barat — mengokohkan akidah keislaman, spirit kebangsaan, dan pemberdayaan pemuda di seluruh Jawa Barat.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/berita"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-amber-400 px-6 py-3.5 text-sm font-bold text-ansor-950 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-gold-500/30"
              >
                {/* Shimmer Overlay */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                <span>Baca Berita Terbaru</span>
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/badan-lembaga"
                className="inline-flex items-center gap-2 rounded-xl border border-gold-400/40 bg-ansor-900/60 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-gold-400 hover:bg-white/10 hover:shadow-lg"
              >
                <Landmark size={17} className="text-gold-400" />
                <span>Badan &amp; Lembaga</span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: 3 Interactive Animated Feature Cards ───────────── */}
          <div className="lg:col-span-5 space-y-4">
            {/* Card 1: Keislaman */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-ansor-900/90 to-ansor-800/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 animate-float-slow">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-ansor-800 text-gold-300 shadow-md ring-2 ring-gold-400/30">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                      Keislaman
                    </span>
                    <span className="text-xs text-gold-400 font-semibold">Amaliah NU</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    Akidah Islam An-Nahdliyah
                  </h3>
                  <p className="mt-1 text-xs text-ansor-200/90 leading-relaxed">
                    MDS Rijalul Ansor mensyiarkan dzikir, sholawat, dan ajaran Islam rahmatan lil &apos;alamin.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Nasionalisme */}
            <div className="group relative overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-r from-ansor-900/90 to-ansor-800/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 animate-float-delayed">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-ansor-800 text-white shadow-md ring-2 ring-red-400/30">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold text-red-300 uppercase tracking-wider">
                      Nasionalisme
                    </span>
                    <span className="text-xs text-gold-400 font-semibold">100% NKRI</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    Benteng Kiai &amp; NKRI
                  </h3>
                  <p className="mt-1 text-xs text-ansor-200/90 leading-relaxed">
                    BANSER siap siaga menjaga marwah ulama, toleransi, dan keutuhan Negara Kesatuan Republik Indonesia.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Keberdayaan Pemuda */}
            <div className="group relative overflow-hidden rounded-2xl border border-gold-500/30 bg-gradient-to-r from-ansor-900/90 to-ansor-800/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/60 animate-float-slow" style={{ animationDelay: "1s" }}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-ansor-800 text-gold-300 shadow-md ring-2 ring-gold-400/30">
                  <Flame size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-gold-500/20 px-2 py-0.5 text-[10px] font-bold text-gold-300 uppercase tracking-wider">
                      Kepemudaan
                    </span>
                    <span className="text-xs text-gold-400 font-semibold">Tanah Pasundan</span>
                  </div>
                  <h3 className="mt-1 font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors">
                    Kaderisasi Pemuda Sunda
                  </h3>
                  <p className="mt-1 text-xs text-ansor-200/90 leading-relaxed">
                    Mencetak kiai muda, pemimpin visioner, dan wirausaha di seluruh 27 Kabupaten/Kota Jawa Barat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
