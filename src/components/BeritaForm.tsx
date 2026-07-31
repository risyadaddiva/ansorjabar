"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import slugify from "slugify";
import type { Berita } from "@/types";
import { Loader2, UploadCloud } from "lucide-react";

interface BeritaFormProps {
  initialData?: Berita;
}

export function BeritaForm({ initialData }: BeritaFormProps) {
  const router = useRouter();
  const supabase = createClient();
  const isEdit = Boolean(initialData);

  const [judul, setJudul] = useState(initialData?.judul ?? "");
  const [kategori, setKategori] = useState(initialData?.kategori ?? "Umum");
  const [ringkasan, setRingkasan] = useState(initialData?.ringkasan ?? "");
  const [konten, setKonten] = useState(initialData?.konten ?? "");
  const [gambarUrl, setGambarUrl] = useState(initialData?.gambar_url ?? "");
  const [status, setStatus] = useState<"draft" | "terbit">(initialData?.status ?? "draft");
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);

    const path = `berita/${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from("media").upload(path, file);

    if (uploadError) {
      setError("Gagal mengunggah gambar: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("media").getPublicUrl(path);
    setGambarUrl(data.publicUrl);
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const slug = slugify(judul, { lower: true, strict: true });

    const payload = {
      judul,
      slug,
      kategori,
      ringkasan,
      konten,
      gambar_url: gambarUrl || null,
      status,
    };

    const { error: dbError } = isEdit
      ? await supabase.from("berita").update(payload).eq("id", initialData!.id)
      : await supabase.from("berita").insert(payload);

    setSaving(false);

    if (dbError) {
      setError("Gagal menyimpan: " + dbError.message);
      return;
    }

    router.push("/admin/berita");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Judul Berita
        </label>
        <input
          required
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full rounded-md border border-ansor-200 px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
          placeholder="Contoh: PW GP Ansor Jabar Gelar Bakti Sosial"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Kategori
        </label>
        <input
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="w-full rounded-md border border-ansor-200 px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
          placeholder="Kegiatan, Organisasi, dsb."
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Ringkasan
        </label>
        <textarea
          rows={2}
          value={ringkasan}
          onChange={(e) => setRingkasan(e.target.value)}
          className="w-full rounded-md border border-ansor-200 px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
          placeholder="Ringkasan singkat untuk kartu berita"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Gambar Utama
        </label>
        <div className="flex items-center gap-3">
          <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-ansor-300 px-4 py-2 text-sm text-ansor-600 hover:bg-ansor-50 dark:border-ansor-700 dark:text-ansor-300 dark:hover:bg-ansor-900">
            <UploadCloud size={16} />
            {uploading ? "Mengunggah..." : "Unggah gambar"}
            <input type="file" accept="image/*" className="hidden" onChange={handleUpload} />
          </label>
          {gambarUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={gambarUrl} alt="Pratinjau" className="h-12 w-12 rounded object-cover" />
          )}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Konten
        </label>
        <textarea
          required
          rows={10}
          value={konten}
          onChange={(e) => setKonten(e.target.value)}
          className="w-full rounded-md border border-ansor-200 px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
          placeholder="Isi lengkap berita..."
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as "draft" | "terbit")}
          className="rounded-md border border-ansor-200 px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
        >
          <option value="draft">Draft</option>
          <option value="terbit">Terbit</option>
        </select>
      </div>

      {error && (
        <p className="rounded-md bg-maroon-500/10 px-3 py-2 text-sm text-maroon-600 dark:text-maroon-500">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={saving || uploading}
        className="flex items-center gap-2 rounded-md bg-ansor-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ansor-600 disabled:opacity-60 dark:bg-ansor-600"
      >
        {saving && <Loader2 size={16} className="animate-spin" />}
        {isEdit ? "Simpan Perubahan" : "Publikasikan Berita"}
      </button>
    </form>
  );
}
