"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Artikel } from "@/types";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";

export default function AdminArtikelListPage() {
  const supabase = createClient();
  const [list, setList] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data } = await supabase
      .from("artikel")
      .select("*")
      .order("dibuat_pada", { ascending: false });
    setList((data ?? []) as Artikel[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Hapus artikel ini? Tindakan ini tidak bisa dibatalkan.")) return;
    await supabase.from("artikel").delete().eq("id", id);
    load();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
          Kelola Artikel
        </h1>
        <Link
          href="/admin/artikel/baru"
          className="flex items-center gap-2 rounded-md bg-ansor-700 px-4 py-2 text-sm font-semibold text-white hover:bg-ansor-600 dark:bg-ansor-600"
        >
          <Plus size={16} /> Artikel Baru
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-ansor-500">Memuat...</p>
      ) : list.length === 0 ? (
        <p className="text-sm text-ansor-500">Belum ada artikel. Tulis artikel pertama kamu.</p>
      ) : (
        <div className="overflow-hidden rounded-lg border border-ansor-100 bg-white dark:border-ansor-800 dark:bg-ansor-900">
          <table className="w-full text-left text-sm">
            <thead className="bg-ansor-50 text-ansor-500 dark:bg-ansor-800/50 dark:text-ansor-400">
              <tr>
                <th className="px-4 py-3">Judul</th>
                <th className="px-4 py-3">Penulis</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Tanggal</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => (
                <tr key={item.id} className="border-t border-ansor-100 dark:border-ansor-800">
                  <td className="max-w-xs truncate px-4 py-3 font-medium text-ansor-900 dark:text-ansor-50">
                    {item.judul}
                  </td>
                  <td className="px-4 py-3 text-ansor-500 dark:text-ansor-400">
                    {item.nama_penulis || "-"}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                        item.status === "terbit"
                          ? "bg-ansor-100 text-ansor-700 dark:bg-ansor-800 dark:text-gold-400"
                          : "bg-ansor-50 text-ansor-400 dark:bg-ansor-900 dark:text-ansor-500"
                      }`}
                    >
                      {item.status === "terbit" ? "Terbit" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-ansor-500 dark:text-ansor-400">
                    {format(new Date(item.dibuat_pada), "d MMM yyyy", { locale: localeId })}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/artikel/${item.id}`}
                        className="rounded-md p-2 text-ansor-600 hover:bg-ansor-50 dark:text-ansor-300 dark:hover:bg-ansor-800"
                        aria-label="Sunting"
                      >
                        <Pencil size={16} />
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="rounded-md p-2 text-maroon-600 hover:bg-maroon-500/10"
                        aria-label="Hapus"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
