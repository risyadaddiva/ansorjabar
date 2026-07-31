import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import type { GaleriItem } from "@/types";

export const metadata = { title: "Galeri — PW GP Ansor Jawa Barat" };
export const revalidate = 60;

export default async function GaleriPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("galeri")
    .select("*")
    .order("dibuat_pada", { ascending: false });

  const list = (data ?? []) as GaleriItem[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
        Galeri Kegiatan
      </h1>
      <div className="motif-divider mb-8 w-24" />

      {list.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {list.map((item) => (
            <figure
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-ansor-100 dark:bg-ansor-800"
            >
              <Image
                src={item.gambar_url}
                alt={item.judul}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.judul}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p className="text-ansor-500 dark:text-ansor-400">
          Belum ada foto kegiatan. Tambahkan lewat tabel <code>galeri</code> di Supabase.
        </p>
      )}
    </div>
  );
}
