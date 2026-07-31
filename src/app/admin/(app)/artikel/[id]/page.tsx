import { createClient } from "@/lib/supabase/server";
import { ArtikelForm } from "@/components/ArtikelForm";
import type { Artikel } from "@/types";
import { notFound } from "next/navigation";

export const metadata = { title: "Sunting Artikel — Admin" };

export default async function ArtikelEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("artikel").select("*").eq("id", id).single();

  if (!data) return notFound();

  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
        Sunting Artikel
      </h1>
      <ArtikelForm initialData={data as Artikel} />
    </div>
  );
}
