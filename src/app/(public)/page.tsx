import { Hero } from "@/components/Hero";
import { SambutanKetua } from "@/components/SambutanKetua";
import { PetaWilayahKader } from "@/components/PetaWilayahKader";
import { NewsCard } from "@/components/NewsCard";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Berita, Artikel } from "@/types";

export const revalidate = 60;

export default async function HomePage() {
  const supabase = await createClient();

  const [{ data: berita }, { data: artikel }] = await Promise.all([
    supabase
      .from("berita")
      .select("*")
      .eq("status", "terbit")
      .order("dibuat_pada", { ascending: false })
      .limit(3),
    supabase
      .from("artikel")
      .select("*")
      .eq("status", "terbit")
      .order("dibuat_pada", { ascending: false })
      .limit(3),
  ]);

  return (
    <div>
      {/* ── 1. Hero Section ─────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. Sambutan Ketua PW GP Ansor Jawa Barat ────────────────────────── */}
      <SambutanKetua />

      {/* ── 3. Berita Terbaru Section ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-ansor-800 dark:text-ansor-50">
              Berita Terbaru
            </h2>
            <p className="text-xs text-ansor-600 dark:text-ansor-400">
              Kabar kegiatan dan warta resmi dari PW GP Ansor Jawa Barat.
            </p>
          </div>
          <Link href="/berita" className="text-sm font-semibold text-ansor-600 hover:underline dark:text-gold-400">
            Lihat semua →
          </Link>
        </div>

        {berita && berita.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {(berita as Berita[]).map((item) => (
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
          <p className="text-ansor-500 dark:text-ansor-400">
            Belum ada berita yang diterbitkan. Masuk ke halaman admin untuk menambahkan berita pertama.
          </p>
        )}
      </section>

      {/* ── 4. Peta Wilayah & Kekuatan Kader ────────────────────────────────── */}
      <PetaWilayahKader />

      {/* ── 5. Artikel & Opini Section ──────────────────────────────────────── */}
      <section className="bg-ansor-50 py-14 dark:bg-ansor-900/40">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-ansor-800 dark:text-ansor-50">
                Artikel &amp; Opini
              </h2>
              <p className="text-xs text-ansor-600 dark:text-ansor-400">
                Gagasan, pemikiran, dan tulisan kader Ansor Jawa Barat.
              </p>
            </div>
            <Link href="/artikel" className="text-sm font-semibold text-ansor-600 hover:underline dark:text-gold-400">
              Lihat semua →
            </Link>
          </div>

          {artikel && artikel.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {(artikel as Artikel[]).map((item) => (
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
            <p className="text-ansor-500 dark:text-ansor-400">
              Belum ada artikel yang diterbitkan.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
