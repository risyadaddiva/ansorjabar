import { MapPin, ExternalLink } from "lucide-react";

interface LocationCardProps {
  title?: string;
  alamatLabel?: string;
  alamatText?: string;
  mapsUrl?: string;
  embedQuery?: string;
  whatsappNumber?: string;
  whatsappLink?: string;
  instagramHandle?: string;
  instagramLink?: string;
}

export function LocationCard({
  title = "Lokasi & Kontak",
  alamatLabel = "ALAMAT BASECAMP",
  alamatText = "Jalan Manisi, Kebon Terong, RT 05/RW 03, No. 150, Pasir Biru, Kec. Cibiru, Kota Bandung, Jawa Barat",
  mapsUrl = "https://maps.app.goo.gl/3sFLzeGxt6C4Pvnu6",
  embedQuery = "Kantor PW GP Ansor Jawa Barat, Kota Bandung",
  whatsappNumber = "(022) 000-0000",
  whatsappLink = "tel:022000000",
  instagramHandle = "@ansorjabarofficial",
  instagramLink = "https://www.instagram.com/ansorjabarofficial/",
}: LocationCardProps) {
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    embedQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mx-auto w-full max-w-md rounded-[32px] border border-[#EAE3D2] bg-white p-6 sm:p-8 shadow-xl shadow-stone-900/5 transition-all dark:border-ansor-800 dark:bg-ansor-900 dark:shadow-black/20">
      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F2E0D0] bg-[#FAF0E6] text-[#8B5029] dark:border-amber-900/40 dark:bg-amber-950/60 dark:text-amber-400">
          <MapPin className="h-5 w-5 stroke-[2.25]" />
        </div>
        <h2 className="font-display text-xl font-bold text-[#1B3B2B] sm:text-2xl dark:text-ansor-50">
          {title}
        </h2>
      </div>

      {/* Alamat Section */}
      <div className="space-y-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#A05A2C] dark:text-amber-400">
          {alamatLabel}
        </p>
        <p className="text-sm font-medium leading-relaxed text-[#2D3A32] sm:text-base dark:text-ansor-200">
          {alamatText}
        </p>
      </div>

      {/* Maps Section */}
      <div className="relative my-5 h-60 w-full overflow-hidden rounded-2xl border border-[#E2D9C8] shadow-sm sm:h-64 dark:border-ansor-700">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-stone-200/60 bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-md backdrop-blur-md transition-all hover:bg-white hover:shadow-lg dark:border-ansor-700 dark:bg-ansor-900/90 dark:text-blue-400"
        >
          <span>Maps</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <iframe
          title="Google Maps"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      {/* Whatsapp Section
      <div className="space-y-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#A05A2C] dark:text-amber-400">
          WHATSAPP
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-2xl border border-[#ECE3D4] bg-[#FAF7F2] px-4 py-3.5 text-center text-sm font-bold text-[#1B3B2B] shadow-sm transition-all hover:border-[#D4C3A3] hover:bg-[#F5EFE4] hover:shadow-md sm:text-base dark:border-ansor-700 dark:bg-ansor-800/80 dark:text-ansor-100 dark:hover:bg-ansor-800"
        >
          {whatsappNumber}
        </a>
      </div> */}

      {/* Instagram Section */}
      {/* <div className="mt-4 space-y-1.5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#A05A2C] dark:text-amber-400">
          INSTAGRAM
        </p>
        <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center rounded-2xl border border-[#ECE3D4] bg-[#FAF7F2] px-4 py-3.5 text-center text-sm font-bold text-[#1B3B2B] shadow-sm transition-all hover:border-[#D4C3A3] hover:bg-[#F5EFE4] hover:shadow-md sm:text-base dark:border-ansor-700 dark:bg-ansor-800/80 dark:text-ansor-100 dark:hover:bg-ansor-800"
        >
          {instagramHandle}
        </a>
      </div> */}
    </div>
  );
}
