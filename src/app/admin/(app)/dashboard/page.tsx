import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Newspaper, PenLine, ImageIcon, Users } from "lucide-react";

export const metadata = { title: "Dashboard Admin" };

export default async function DashboardPage() {
  const supabase = await createClient();

  const [{ count: totalBerita }, { count: totalArtikel }, { count: totalGaleri }, { count: totalPengurus }] =
    await Promise.all([
      supabase.from("berita").select("*", { count: "exact", head: true }),
      supabase.from("artikel").select("*", { count: "exact", head: true }),
      supabase.from("galeri").select("*", { count: "exact", head: true }),
      supabase.from("pengurus").select("*", { count: "exact", head: true }),
    ]);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const stats = [
    { label: "Berita", value: totalBerita ?? 0, icon: Newspaper, href: "/admin/berita" },
    { label: "Artikel", value: totalArtikel ?? 0, icon: PenLine, href: "/admin/artikel" },
    { label: "Foto Galeri", value: totalGaleri ?? 0, icon: ImageIcon, href: "/galeri" },
    { label: "Pengurus", value: totalPengurus ?? 0, icon: Users, href: "/struktur-organisasi" },
  ];

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
        Selamat datang, {user?.email}
      </h1>
      <p className="mb-8 text-sm text-ansor-500 dark:text-ansor-400">
        Ringkasan konten situs PW GP Ansor Jawa Barat.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="rounded-lg border border-ansor-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-ansor-800 dark:bg-ansor-900"
          >
            <Icon className="mb-3 text-ansor-600 dark:text-gold-400" size={22} />
            <p className="text-2xl font-bold text-ansor-900 dark:text-ansor-50">{value}</p>
            <p className="text-sm text-ansor-500 dark:text-ansor-400">{label}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/admin/berita/baru"
          className="rounded-md bg-ansor-700 px-4 py-2 text-sm font-semibold text-white hover:bg-ansor-600 dark:bg-ansor-600"
        >
          + Tulis Berita
        </Link>
        <Link
          href="/admin/artikel/baru"
          className="rounded-md border border-ansor-300 px-4 py-2 text-sm font-semibold text-ansor-700 hover:bg-ansor-50 dark:border-ansor-700 dark:text-ansor-200 dark:hover:bg-ansor-900"
        >
          + Tulis Artikel
        </Link>
      </div>
    </div>
  );
}
