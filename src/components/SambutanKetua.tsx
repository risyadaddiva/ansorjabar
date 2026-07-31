import Image from "next/image";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";

export function SambutanKetua() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ansor-50 via-white to-ansor-50/50 py-16 dark:from-ansor-950 dark:via-ansor-900 dark:to-ansor-950 border-y border-ansor-100 dark:border-ansor-800">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-ansor-500/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          {/* ── Left Column: Foto Ketua ────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer Glowing Border Effect */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-ansor-600 via-gold-400 to-ansor-700 opacity-75 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-lg" />

              <div className="relative overflow-hidden rounded-2xl border-2 border-gold-400/40 bg-ansor-900 shadow-2xl">
                {/* Foto Slot */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/ketua-ansor-jabar.png"
                    alt="Ketua PW GP Ansor Jawa Barat"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ansor-950 via-ansor-950/20 to-transparent" />
                </div>

                {/* Badge Identitas Nama & Jabatan */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-ansor-950 via-ansor-950/90 to-transparent text-white text-center">
                  {/* UBAH NAMA KETUA DI SINI */}
                  <h3 className="font-display text-lg font-bold text-gold-300 drop-shadow">
                    H. Subhan Fahmi
                  </h3>
                  <p className="mt-0.5 text-xs text-ansor-200 font-medium">
                    Ketua PW GP Ansor Jawa Barat
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-gold-500/20 border border-gold-400/30 px-3 py-0.5 text-[11px] font-semibold text-gold-300">
                    Masa Khidmat 2024 – 2029
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Teks Sambutan ───────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-ansor-200 bg-white px-3.5 py-1 text-xs font-bold text-ansor-800 dark:border-ansor-800 dark:bg-ansor-900 dark:text-gold-400 shadow-sm">
              <HeartHandshake size={14} className="text-ansor-600 dark:text-gold-400" />
              <span>SAMBUTAN KETUA PW GP ANSOR JABAR</span>
            </div>

            <h2 className="font-display text-2xl font-bold tracking-tight text-ansor-900 sm:text-3xl lg:text-4xl dark:text-white leading-tight">
              Selamat Datang di Portal Resmi <br className="hidden sm:block" />
              <span className="text-ansor-600 dark:text-gold-400">PW GP Ansor Jawa Barat</span>
            </h2>

            <div className="relative rounded-2xl border border-ansor-100 bg-white p-6 shadow-md dark:border-ansor-800 dark:bg-ansor-900/90">
              <Quote size={36} className="absolute -top-4 -left-2 text-gold-400/40 rotate-180" />

              <div className="relative z-10 space-y-3 text-sm text-ansor-700 dark:text-ansor-200 leading-relaxed font-normal italic">
                <p>
                  &ldquo;Assalamu&apos;alaikum Warahmatullahi Wabarakatuh. Puji syukur kehadirat Allah SWT, shalawat serta salam semoga senantiasa tercurah kepada Nabi Agung Muhammad SAW.&rdquo;
                </p>
                <p>
                  &ldquo;Gerakan Pemuda Ansor Jawa Barat berkomitmen penuh menjadi garda terdepan dalam menjaga syiar Islam Ahlussunnah wal Jama&apos;ah An-Nahdliyah, mengawal kiai dan ulama, serta merawat keutuhan Negara Kesatuan Republik Indonesia.&rdquo;
                </p>
                <p>
                  &ldquo;Melalui portal informasi digital ini, kami hadir untuk mempererat tali silaturahmi kader, mempublikasikan giat positif di seluruh cabang &amp; anak cabang, serta menggerakkan potensi pemuda menuju Jawa Barat yang berdaya dan bermartabat.&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-ansor-100 dark:border-ansor-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-ansor-800 dark:text-gold-300">
                  Wallahul Muwaffiq Ila Aqwamith Thariq
                </span>
                <span className="flex items-center gap-1 text-ansor-500 dark:text-ansor-400 font-medium">
                  <Sparkles size={13} className="text-gold-500" />
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
