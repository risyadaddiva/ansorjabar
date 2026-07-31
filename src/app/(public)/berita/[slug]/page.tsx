import { createClient } from "@/lib/supabase/server";
import type { Berita } from "@/types";
import Image from "next/image";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("berita")
    .select("judul, ringkasan")
    .eq("slug", slug)
    .single();

  return {
    title: data ? `${data.judul} — PW GP Ansor Jawa Barat` : "Berita — PW GP Ansor Jawa Barat",
    description: data?.ringkasan ?? undefined,
  };
}

export default async function BeritaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data } = await supabase
    .from("berita")
    .select("*")
    .eq("slug", slug)
    .eq("status", "terbit")
    .single();

  if (!data) return notFound();
  const berita = data as Berita;

  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <span className="mb-3 inline-block rounded bg-ansor-50 px-3 py-1 text-xs font-semibold text-ansor-700 dark:bg-ansor-800 dark:text-gold-400">
        {berita.kategori}
      </span>
      <h1 className="mb-3 font-display text-3xl font-bold leading-tight text-ansor-900 dark:text-ansor-50">
        {berita.judul}
      </h1>
      <p className="mb-6 text-sm text-ansor-400 dark:text-ansor-500">
        {format(new Date(berita.dibuat_pada), "d MMMM yyyy, HH:mm", { locale: localeId })} WIB
      </p>

      {berita.gambar_url && (
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
          <Image src={berita.gambar_url} alt={berita.judul} fill className="object-cover" />
        </div>
      )}

      <div className="prose-konten whitespace-pre-line">{berita.konten}</div>
    </article>
  );
}
