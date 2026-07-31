import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-ansor-100 bg-ansor-800 text-ansor-50 dark:border-ansor-900 dark:bg-ansor-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/GP Ansor.svg"
              alt="GP Ansor Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <h3 className="font-display text-lg font-bold text-gold-400">PW GP ANSOR JABAR</h3>
          </div>
          <p className="mt-3 text-sm text-ansor-200">
            Pimpinan Wilayah Gerakan Pemuda Ansor Provinsi Jawa Barat — barisan
            kader muda NU yang menjaga Islam Ahlussunnah wal Jama&apos;ah dan
            Negara Kesatuan Republik Indonesia.
          </p>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Tautan</h4>
          <ul className="space-y-2 text-sm text-ansor-200">
            <li><Link href="/profil" className="hover:text-gold-400">Profil</Link></li>
            <li><Link href="/badan-lembaga" className="hover:text-gold-400">Badan &amp; Lembaga</Link></li>
            <li><Link href="/struktur-organisasi" className="hover:text-gold-400">Struktur Organisasi</Link></li>
            <li><Link href="/berita" className="hover:text-gold-400">Berita</Link></li>
            <li><Link href="/artikel" className="hover:text-gold-400">Artikel</Link></li>
            <li><Link href="/persuratan" className="hover:text-gold-400">Persuratan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Kontak</h4>
          <ul className="space-y-2 text-sm text-ansor-200">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a
                href="https://maps.app.goo.gl/gvEwConZrLfTcMrB8"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 hover:underline"
              >
                Kantor PW GP Ansor Jawa Barat, Kota Bandung
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" /> (022) 000-0000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" /> info@ansorjabar.or.id
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold text-white">Media Sosial</h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/ansorjabarofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-ansor-700 p-2 transition-colors hover:bg-gold-500 hover:text-ansor-900"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/@AnsorJabarChannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="rounded-full bg-ansor-700 p-2 transition-colors hover:bg-gold-500 hover:text-ansor-900"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="motif-divider" />
      <div className="px-4 py-4 text-center text-xs text-ansor-300">
        © {tahun} PW GP Ansor Jawa Barat. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
