import { createClient } from "@/lib/supabase/server";
import { NewsCard } from "@/components/NewsCard";
import type { Berita } from "@/types";

export const metadata = { title: "Berita — PW GP Ansor Jawa Barat" };
export const revalidate = 60;

export default async function BeritaListPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("berita")
    .select("*")
    .eq("status", "terbit")
    .order("dibuat_pada", { ascending: false });

  const list = (data ?? []) as Berita[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
        Berita
      </h1>
      <div className="motif-divider mb-8 w-24" />

      {list.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {list.map((item) => (
            <NewsCard
              key={item.id}
              href={`/berita/${item.slug}`}
              judul={item.judul}
              ringkasan={item.ringkasan}
              gambar_url={item.gambar_url}
              tanggal={item.dibuat_pada}
              label={item.kategori}
            />
          ))}
        </div>
      ) : (
        <p className="text-ansor-500 dark:text-ansor-400">Belum ada berita yang diterbitkan.</p>
      )}
    </div>
  );
}
