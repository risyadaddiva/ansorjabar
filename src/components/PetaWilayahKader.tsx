import { MapPin, Building2, Network, Home, Users, Compass } from "lucide-react";

interface StatItem {
  id: string;
  angka: string;
  label: string;
  sublabel: string;
  deskripsi: string;
  icon: any;
  warnaBadge: string;
}

const statsKader: StatItem[] = [
  {
    id: "pc",
    angka: "27",
    label: "Pimpinan Cabang (PC)",
    sublabel: "Kabupaten & Kota",
    deskripsi: "Tersebar secara penuh di seluruh 27 Kabupaten/Kota se-Jawa Barat.",
    icon: Building2,
    warnaBadge: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border-emerald-500/30",
  },
  {
    id: "pac",
    angka: "± 600",
    label: "Pimpinan Anak Cabang (PAC)",
    sublabel: "Kecamatan",
    deskripsi: "Pengurus aktif di tingkat Kecamatan di wilayah Jawa Barat.",
    icon: Network,
    warnaBadge: "bg-blue-500/20 text-blue-600 dark:text-blue-300 border-blue-500/30",
  },
  {
    id: "ranting",
    angka: "± 5.000",
    label: "Pimpinan Ranting",
    sublabel: "Desa & Kelurahan",
    deskripsi: "Basis struktur kepengurusan terdepan di tingkat Desa/Kelurahan.",
    icon: Home,
    warnaBadge: "bg-gold-500/20 text-ansor-800 dark:text-gold-300 border-gold-500/30",
  },
  {
    id: "kader",
    angka: "40.000+",
    label: "Kader Terdaftar",
    sublabel: "Ansor & Banser",
    deskripsi: "Kader militan terbina siap mengabdi untuk agama dan negara.",
    icon: Users,
    warnaBadge: "bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30",
  },
];

export function PetaWilayahKader() {
  return (
    <section className="relative overflow-hidden bg-ansor-900 py-16 text-white dark:bg-ansor-950">
      {/* Glow Orbs & Islamic Grid Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-ansor-500/15 blur-3xl" />
        <div className="h-full w-full bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/15 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur-md">
            <Compass size={14} className="text-gold-400" />
            <span>JANGKAUAN STRUKTUR ORGANISASI</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Peta Wilayah &amp; Kekuatan Kader
          </h2>

          <p className="mt-3 text-sm text-ansor-200 sm:text-base leading-relaxed">
            Struktur kepemudaan Gerakan Pemuda Ansor yang kokoh dan mengakar hingga tingkat desa/kelurahan di seluruh Provinsi Jawa Barat.
          </p>
        </div>

        {/* Stat Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statsKader.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ansor-950/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/50 hover:bg-ansor-950/80"
              >
                {/* Icon Header */}
                <div className="mb-4 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${item.warnaBadge} shadow-inner`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider">
                    {item.sublabel}
                  </span>
                </div>

                {/* Big Stat Number */}
                <div className="mb-1 font-display text-3xl font-extrabold text-white group-hover:text-gold-300 transition-colors">
                  {item.angka}
                </div>

                {/* Label & Description */}
                <h3 className="text-base font-bold text-ansor-100">
                  {item.label}
                </h3>
                
                <p className="mt-2 text-xs text-ansor-300/80 leading-relaxed">
                  {item.deskripsi}
                </p>

                {/* Decorative Bottom Bar */}
                <div className="mt-4 h-1 w-full rounded-full bg-ansor-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-gold-400 to-emerald-400 transition-all duration-500 group-hover:w-full w-2/3" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-gold-400/30 bg-ansor-800/60 p-4 px-6 text-xs text-ansor-200">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-gold-400 shrink-0" />
            <span>
              Menjangkau 27 Kabupaten/Kota, 627 Kecamatan, dan ribuan desa/kelurahan se-Jawa Barat.
            </span>
          </div>
          <span className="font-semibold text-gold-300 shrink-0">
            PW GP Ansor Jawa Barat
          </span>
        </div>
      </div>
    </section>
  );
}
