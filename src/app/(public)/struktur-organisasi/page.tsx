import { createClient } from "@/lib/supabase/server";
import Image from "next/image";
import type { Pengurus } from "@/types";
import { UserRound } from "lucide-react";

export const metadata = { title: "Struktur Organisasi — PW GP Ansor Jawa Barat" };
export const revalidate = 60;

export default async function StrukturPage() {
  const supabase = await createClient();
  const { data: pengurus } = await supabase
    .from("pengurus")
    .select("*")
    .order("urutan", { ascending: true });

  const list = (pengurus ?? []) as Pengurus[];

  return (
    <div className="mx-auto max-w-5xl px-4 py-14">
      <h1 className="mb-2 font-display text-3xl font-bold text-ansor-800 dark:text-ansor-50">
        Struktur Organisasi
      </h1>
      <div className="motif-divider mb-8 w-24" />
      <p className="mb-8 max-w-2xl text-ansor-600 dark:text-ansor-300">
        Susunan Pengurus Pimpinan Wilayah Gerakan Pemuda Ansor Provinsi Jawa
        Barat masa khidmat berjalan.
      </p>

      {list.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {list.map((p) => (
            <div
              key={p.id}
              className="flex flex-col items-center rounded-lg border border-ansor-100 bg-white p-6 text-center shadow-sm dark:border-ansor-800 dark:bg-ansor-900"
            >
              <div className="mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-ansor-100 dark:bg-ansor-800">
                {p.foto_url ? (
                  <Image src={p.foto_url} alt={p.nama} width={80} height={80} className="object-cover" />
                ) : (
                  <UserRound className="text-ansor-400 dark:text-ansor-500" size={32} />
                )}
              </div>
              <h3 className="font-display font-bold text-ansor-900 dark:text-ansor-50">{p.nama}</h3>
              <p className="text-sm text-ansor-500 dark:text-gold-400">{p.jabatan}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-ansor-500 dark:text-ansor-400">
          Data pengurus belum ditambahkan. Silakan tambahkan melalui Supabase
          (tabel <code>pengurus</code>) atau lengkapi halaman admin untuk
          mengelolanya.
        </p>
      )}
    </div>
  );
}
