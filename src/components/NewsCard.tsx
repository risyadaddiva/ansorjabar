import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  href: string;
  judul: string;
  ringkasan?: string | null;
  gambar_url?: string | null;
  tanggal: string;
  label?: string;
}

export function NewsCard({ href, judul, ringkasan, gambar_url, tanggal, label }: NewsCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ansor-200/80 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-ansor-400 dark:border-ansor-800 dark:bg-ansor-900 dark:hover:border-gold-400/50"
    >
      <div className="relative h-48 w-full overflow-hidden bg-ansor-950">
        {gambar_url ? (
          <Image
            src={gambar_url}
            alt={judul}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center font-display text-sm font-bold text-ansor-400 dark:text-ansor-600">
            PW GP ANSOR JABAR
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ansor-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

        {label && (
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full border border-gold-400/30 bg-ansor-900/90 px-3 py-1 text-[11px] font-bold text-gold-300 backdrop-blur-md shadow-md">
              {label}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2.5 line-clamp-2 font-display text-base font-bold text-ansor-900 transition-colors group-hover:text-ansor-600 dark:text-white dark:group-hover:text-gold-300">
          {judul}
        </h3>

        {ringkasan && (
          <p className="mb-4 line-clamp-2 text-xs leading-relaxed text-ansor-600 dark:text-ansor-300">
            {ringkasan}
          </p>
        )}

        <div className="mt-auto flex items-center gap-1.5 border-t border-ansor-100 pt-3 text-[11px] font-medium text-ansor-500 dark:border-ansor-800 dark:text-ansor-400">
          <Calendar size={13} className="text-ansor-600 dark:text-gold-400" />
          <span>{format(new Date(tanggal), "d MMMM yyyy", { locale: localeId })}</span>
        </div>
      </div>
    </Link>
  );
}
