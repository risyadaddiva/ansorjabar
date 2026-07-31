import { createClient } from "@/lib/supabase/server";
import { BeritaForm } from "@/components/BeritaForm";
import type { Berita } from "@/types";
import { notFound } from "next/navigation";

export const metadata = { title: "Sunting Berita — Admin" };

export default async function BeritaEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("berita").select("*").eq("id", id).single();

  if (!data) return notFound();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
        Sunting Berita
      </h1>
      <BeritaForm initialData={data as Berita} />
    </div>
  );
}
