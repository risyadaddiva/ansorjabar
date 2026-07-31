import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";

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
      className="group flex flex-col overflow-hidden rounded-lg border border-ansor-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-ansor-800 dark:bg-ansor-900"
    >
      <div className="relative h-44 w-full bg-ansor-100 dark:bg-ansor-800">
        {gambar_url ? (
          <Image
            src={gambar_url}
            alt={judul}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ansor-400 dark:text-ansor-600">
            PW Ansor Jabar
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {label && (
          <span className="mb-2 inline-block w-fit rounded bg-ansor-50 px-2 py-0.5 text-xs font-semibold text-ansor-700 dark:bg-ansor-800 dark:text-gold-400">
            {label}
          </span>
        )}
        <h3 className="mb-2 line-clamp-2 font-display text-base font-bold text-ansor-900 group-hover:text-ansor-600 dark:text-ansor-50">
          {judul}
        </h3>
        {ringkasan && (
          <p className="mb-3 line-clamp-2 text-sm text-ansor-600 dark:text-ansor-300">
            {ringkasan}
          </p>
        )}
        <span className="mt-auto text-xs text-ansor-400 dark:text-ansor-500">
          {format(new Date(tanggal), "d MMMM yyyy", { locale: localeId })}
        </span>
      </div>
    </Link>
  );
}
