export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ansor-700 text-white dark:bg-ansor-900">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_30%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="mb-3 inline-block rounded-full bg-gold-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300">
          Pimpinan Wilayah Gerakan Pemuda Ansor
        </p>
        <h1 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
          Menjaga Islam Ahlussunnah wal Jama&apos;ah dan NKRI dari Tanah Pasundan
        </h1>
        <p className="mt-4 max-w-xl text-ansor-100">
          Media informasi resmi PW GP Ansor Provinsi Jawa Barat: berita
          kegiatan, artikel, dan agenda organisasi di seluruh cabang dan
          anak cabang Jawa Barat.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/berita"
            className="rounded-md bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ansor-900 transition-colors hover:bg-gold-400"
          >
            Baca Berita Terbaru
          </a>
          <a
            href="/profil"
            className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Tentang Kami
          </a>
        </div>
      </div>
    </section>
  );
}
