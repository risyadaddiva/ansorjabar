import { LocationCard } from "@/components/LocationCard";
import { Globe, Phone, Mail, Instagram, Youtube, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

export const metadata = { title: "Lokasi & Kontak — PW GP Ansor Jawa Barat" };

// ── Social media items ────────────────────────────────────────────────────────
const mediaSosial = [
  {
    label: "Instagram",
    handle: "@ansorjabarofficial",
    href: "https://www.instagram.com/ansorjabarofficial/",
    icon: <Instagram className="h-5 w-5 text-[#1BA37A]" />,
    aksi: "Kunjungi",
  },
  {
    label: "Youtube",
    handle: "@AnsorJabarChannel",
    href: "https://www.youtube.com/@AnsorJabarChannel",
    icon: <Youtube className="h-5 w-5 text-[#1BA37A]" />,
    aksi: "Kunjungi",
  },
];

// ── Direct contact items ──────────────────────────────────────────────────────
const kontakLangsung = [
  {
    label: "Nomor Telepon",
    value: "(022) 000-0000",
    href: "tel:0220000000",
    icon: <Phone className="h-5 w-5 text-[#1BA37A]" />,
    aksi: "Hubungi",
  },
  {
    label: "Email",
    value: "info@ansorjabar.or.id",
    href: "mailto:info@ansorjabar.or.id",
    icon: <Mail className="h-5 w-5 text-[#1BA37A]" />,
    aksi: "Kirim Email",
  },
];

// ── Reusable card row ─────────────────────────────────────────────────────────
function ContactRow({
  icon,
  label,
  value,
  href,
  aksi,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  aksi: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-stone-100 bg-white px-5 py-4 shadow-sm transition-all hover:border-[#1BA37A]/30 hover:shadow-md dark:border-ansor-800 dark:bg-ansor-900 dark:hover:border-emerald-700/40"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/50">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold text-[#1B2B26] dark:text-ansor-100">{label}</p>
          <p className="text-xs text-stone-500 dark:text-ansor-400">{value}</p>
        </div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-[#1BA37A] transition-all group-hover:gap-1.5 dark:text-emerald-400">
        {aksi}
        <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function KontakPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      {/* Page heading */}
      <div className="mb-8">
        <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
          Lokasi &amp; Kontak
        </h1>
        <div className="motif-divider w-24" />
      </div>

      {/* ── Map card ─────────────────────────────────────────────────── */}
      <div className="mb-12 flex justify-center">
        <LocationCard
          title="Lokasi & Kontak"
          alamatLabel="ALAMAT KANTOR"
          alamatText="Kantor PW GP Ansor Jawa Barat, Kota Bandung, Jawa Barat"
          mapsUrl="https://maps.app.goo.gl/3sFLzeGxt6C4Pvnu6"
          embedQuery="Kantor PW GP Ansor Jawa Barat, Kota Bandung"
        />
      </div>

      {/* ── Media Sosial & Kontak Langsung ───────────────────────────── */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Media Sosial */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b-2 border-[#1BA37A] pb-2">
            <Globe className="h-5 w-5 text-[#1BA37A]" />
            <h2 className="font-display text-lg font-bold text-[#1B2B26] dark:text-ansor-50">
              Media Sosial
            </h2>
          </div>
          <div className="space-y-3">
            {mediaSosial.map((item) => (
              <ContactRow
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.handle}
                href={item.href}
                aksi={item.aksi}
              />
            ))}
          </div>
        </div>

        {/* Kontak Langsung */}
        <div>
          <div className="mb-4 flex items-center gap-2 border-b-2 border-[#1BA37A] pb-2">
            <Phone className="h-5 w-5 text-[#1BA37A]" />
            <h2 className="font-display text-lg font-bold text-[#1B2B26] dark:text-ansor-50">
              Kontak Langsung
            </h2>
          </div>
          <div className="space-y-3">
            {kontakLangsung.map((item) => (
              <ContactRow
                key={item.label}
                icon={item.icon}
                label={item.label}
                value={item.value}
                href={item.href}
                aksi={item.aksi}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
