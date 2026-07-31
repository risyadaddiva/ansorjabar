import { MapPin, Building2, Network, Home, Users, Compass, Sparkles } from "lucide-react";

interface StatItem {
  id: string;
  angka: string;
  label: string;
  sublabel: string;
  deskripsi: string;
  icon: any;
  warnaBadge: string;
  warnaAngka: string;
  barColor: string;
}

const statsKader: StatItem[] = [
  {
    id: "pc",
    angka: "27",
    label: "Pimpinan Cabang (PC)",
    sublabel: "Kabupaten & Kota",
    deskripsi: "Tersebar secara penuh di seluruh 27 Kabupaten/Kota se-Jawa Barat.",
    icon: Building2,
    warnaBadge: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
    warnaAngka: "text-emerald-700 dark:text-emerald-400",
    barColor: "from-emerald-500 to-ansor-600",
  },
  {
    id: "pac",
    angka: "± 600",
    label: "Pimpinan Anak Cabang (PAC)",
    sublabel: "Kecamatan",
    deskripsi: "Pengurus aktif di tingkat Kecamatan di wilayah Jawa Barat.",
    icon: Network,
    warnaBadge: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800",
    warnaAngka: "text-blue-700 dark:text-blue-400",
    barColor: "from-blue-500 to-indigo-600",
  },
  {
    id: "ranting",
    angka: "± 5.000",
    label: "Pimpinan Ranting",
    sublabel: "Desa & Kelurahan",
    deskripsi: "Basis struktur kepengurusan terdepan di tingkat Desa/Kelurahan.",
    icon: Home,
    warnaBadge: "bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
    warnaAngka: "text-amber-700 dark:text-gold-300",
    barColor: "from-amber-400 to-gold-500",
  },
  {
    id: "kader",
    angka: "40.000+",
    label: "Kader Terdaftar",
    sublabel: "Ansor & Banser",
    deskripsi: "Kader militan terbina siap mengabdi untuk agama dan negara.",
    icon: Users,
    warnaBadge: "bg-ansor-50 text-ansor-800 dark:bg-ansor-900 dark:text-gold-400 border border-ansor-200 dark:border-ansor-700",
    warnaAngka: "text-ansor-700 dark:text-gold-300",
    barColor: "from-ansor-500 to-gold-400",
  },
];

export function PetaWilayahKader() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-ansor-50/60 to-white py-16 text-ansor-950 dark:from-ansor-950 dark:via-ansor-900 dark:to-ansor-950 dark:text-white border-y border-ansor-100 dark:border-ansor-800">
      {/* Ambient Orbs & Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-10 top-0 h-80 w-80 rounded-full bg-ansor-500/10 blur-3xl animate-pulse-glow" />
        <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="h-full w-full bg-[radial-gradient(#0a5738_1px,transparent_1px)] dark:bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header Section (Dominan Putih/Clean) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-ansor-200 bg-white px-4 py-1.5 text-xs font-bold text-ansor-800 dark:border-ansor-800 dark:bg-ansor-900 dark:text-gold-400 shadow-sm">
            <Compass size={14} className="text-ansor-600 dark:text-gold-400" />
            <span className="tracking-wide">JANGKAUAN STRUKTUR ORGANISASI</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-ansor-900 sm:text-4xl lg:text-5xl dark:text-white">
            Peta Wilayah &amp;{" "}
            <span className="bg-gradient-to-r from-ansor-700 via-ansor-600 to-ansor-800 bg-clip-text text-transparent dark:from-gold-300 dark:to-gold-400">
              Kekuatan Kader
            </span>
          </h2>

          <p className="mt-4 text-sm text-ansor-600 dark:text-ansor-300 sm:text-base leading-relaxed">
            Struktur kepemudaan Gerakan Pemuda Ansor yang kokoh, solid, dan mengakar hingga tingkat desa/kelurahan di seluruh 27 Kabupaten/Kota Jawa Barat.
          </p>
        </div>

        {/* Clean White Stat Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsKader.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-ansor-200/80 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-ansor-400 dark:border-ansor-800 dark:bg-ansor-900 dark:hover:border-gold-400/50"
              >
                <div>
                  {/* Icon Header & Sublabel Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.warnaBadge} shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-ansor-50 px-2.5 py-0.5 text-[10px] font-bold text-ansor-700 dark:bg-ansor-800 dark:text-gold-300 border border-ansor-100 dark:border-ansor-700 uppercase tracking-wider">
                      {item.sublabel}
                    </span>
                  </div>

                  {/* Big Stat Number */}
                  <div className={`mb-1 font-display text-4xl font-extrabold ${item.warnaAngka}`}>
                    {item.angka}
                  </div>

                  {/* Label & Description */}
                  <h3 className="text-base font-bold text-ansor-900 dark:text-white mb-1.5">
                    {item.label}
                  </h3>
                  
                  <p className="text-xs text-ansor-600 dark:text-ansor-300 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>

                {/* Animated Bottom Bar */}
                <div className="mt-5 h-1.5 w-full rounded-full bg-ansor-100 dark:bg-ansor-800 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.barColor} transition-all duration-500 group-hover:w-full w-3/4`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note (Clean White Card with Ansor Border) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-ansor-200 bg-white p-5 px-6 text-xs text-ansor-700 shadow-md dark:border-ansor-800 dark:bg-ansor-900 dark:text-ansor-200">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ansor-100 text-ansor-800 dark:bg-ansor-800 dark:text-gold-400 shrink-0">
              <MapPin size={18} />
            </div>
            <span className="font-medium">
              Menjangkau <strong className="text-ansor-900 dark:text-white">27 Kabupaten/Kota</strong>, <strong className="text-ansor-900 dark:text-white">627 Kecamatan</strong>, dan ribuan desa/kelurahan se-Jawa Barat.
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-bold text-ansor-800 dark:text-gold-300 shrink-0">
            <Sparkles size={14} className="text-gold-500" />
            PW GP Ansor Jawa Barat
          </span>
        </div>
      </div>
    </section>
  );
}
