import Image from "next/image";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";

export function SambutanKetua() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ansor-50/80 via-white to-ansor-50/40 py-16 dark:from-ansor-950 dark:via-ansor-900 dark:to-ansor-950 border-y border-ansor-100/80 dark:border-ansor-800/80">
      {/* Dynamic Background Glow Orbs */}
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-ansor-500/10 blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* ── Left Column: Foto / Poster Ketua ──────────────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Animated Glow Halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-ansor-600 via-gold-400 to-ansor-500 opacity-60 blur-md transition-all duration-500 group-hover:opacity-90 group-hover:blur-lg" />

              <div className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-ansor-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Poster Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/ketua-ansor-jabar.png"
                    alt="H. Subhan Fahmi - Ketua PW GP Ansor Jawa Barat"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Teks Sambutan Minimalis & Enerjik ─────────────────── */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ansor-200/80 bg-ansor-50 px-4 py-1.5 text-xs font-bold text-ansor-800 dark:border-ansor-800 dark:bg-ansor-900 dark:text-gold-400 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-ansor-600 dark:bg-gold-400 animate-ping" />
              <HeartHandshake size={15} className="text-ansor-600 dark:text-gold-400" />
              <span className="tracking-wide">SAMBUTAN KETUA PW GP ANSOR JABAR</span>
            </div>

            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ansor-900 sm:text-3xl lg:text-4xl dark:text-white leading-snug">
              Selamat Datang di Portal Resmi <br />
              <span className="bg-gradient-to-r from-ansor-600 via-ansor-700 to-ansor-800 bg-clip-text text-transparent dark:from-gold-300 dark:to-gold-400">
                PW GP Ansor Jawa Barat
              </span>
            </h2>

            <div className="relative rounded-2xl border border-ansor-200/80 bg-white p-7 shadow-xl dark:border-ansor-800 dark:bg-ansor-900/90 backdrop-blur-md transition-all duration-300 hover:shadow-2xl">
              <Quote size={40} className="absolute -top-5 -left-3 text-ansor-500/20 dark:text-gold-400/30 rotate-180" />

              <div className="relative z-10 space-y-4 text-sm text-ansor-800 dark:text-ansor-200 leading-relaxed font-normal italic">
                <p className="font-medium text-ansor-900 dark:text-gold-300 not-italic">
                  &ldquo;Assalamu&apos;alaikum Warahmatullahi Wabarakatuh.&rdquo;
                </p>
                <p>
                  &ldquo;Gerakan Pemuda Ansor Jawa Barat berkomitmen penuh menjadi garda terdepan dalam menjaga syiar Islam Ahlussunnah wal Jama&apos;ah An-Nahdliyah, mengawal kiai dan ulama, serta merawat keutuhan Negara Kesatuan Republik Indonesia.&rdquo;
                </p>
                <p>
                  &ldquo;Melalui portal informasi digital ini, kami hadir untuk mempererat tali silaturahmi kader, mempublikasikan giat positif di seluruh cabang &amp; anak cabang, serta menggerakkan potensi pemuda menuju Jawa Barat yang berdaya dan bermartabat.&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ansor-100 dark:border-ansor-800 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-ansor-600 dark:bg-gold-400" />
                  <span className="font-bold text-ansor-900 dark:text-gold-300">
                    H. Subhan Fahmi
                  </span>
                  <span className="text-ansor-500 dark:text-ansor-400">| Ketua PW GP Ansor Jawa Barat</span>
                </div>
                <span className="flex items-center gap-1 text-ansor-600 dark:text-gold-400 font-semibold">
                  <Sparkles size={14} className="text-gold-500" />
                  Salam Ansor &amp; Banser
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
