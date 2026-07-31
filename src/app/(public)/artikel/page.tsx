import { createClient } from "@/lib/supabase/server";
import { NewsCard } from "@/components/NewsCard";
import type { Artikel } from "@/types";

export const metadata = { title: "Artikel — PW GP Ansor Jawa Barat" };
export const revalidate = 60;

export default async function ArtikelListPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("artikel")
    .select("*")
    .eq("status", "terbit")
    .order("dibuat_pada", { ascending: false });

  const list = (data ?? []) as Artikel[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
        Artikel &amp; Opini
      </h1>
      <div className="motif-divider mb-8 w-24" />

      {list.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {list.map((item) => (
            <NewsCard
              key={item.id}
              href={`/artikel/${item.slug}`}
              judul={item.judul}
              ringkasan={item.ringkasan}
              gambar_url={item.gambar_url}
              tanggal={item.dibuat_pada}
              label={item.nama_penulis ?? undefined}
            />
          ))}
        </div>
      ) : (
        <p className="text-ansor-500 dark:text-ansor-400">Belum ada artikel yang diterbitkan.</p>
      )}
    </div>
  );
}
