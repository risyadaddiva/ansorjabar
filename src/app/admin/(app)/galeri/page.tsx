"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { Trash2, Plus, Upload, X, ImageIcon } from "lucide-react";
import type { GaleriItem } from "@/types";

export default function AdminGaleriPage() {
  const supabase = createClient();
  const fileRef = useRef<HTMLInputElement>(null);

  const [list, setList]         = useState<GaleriItem[]>([]);
  const [loading, setLoading]   = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview]   = useState<string | null>(null);
  const [file, setFile]         = useState<File | null>(null);
  const [judul, setJudul]       = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [error, setError]       = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function fetchList() {
    setLoading(true);
    const { data } = await supabase
      .from("galeri")
      .select("*")
      .order("dibuat_pada", { ascending: false });
    setList((data ?? []) as GaleriItem[]);
    setLoading(false);
  }

  useEffect(() => { fetchList(); }, []); // eslint-disable-line

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!file && !judul) {
      setError("Judul dan gambar wajib diisi.");
      return;
    }

    setUploading(true);
    let gambar_url = "";

    if (file) {
      const ext  = file.name.split(".").pop();
      const path = `galeri/${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("media")
        .upload(path, file, { upsert: true });

      if (upErr) {
        setError("Gagal upload gambar: " + upErr.message);
        setUploading(false);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from("media")
        .getPublicUrl(path);

      gambar_url = publicUrl;
    }

    const { error: insErr } = await supabase
      .from("galeri")
      .insert({ judul, gambar_url, deskripsi: deskripsi || null });

    if (insErr) {
      setError("Gagal menyimpan: " + insErr.message);
    } else {
      setJudul("");
      setDeskripsi("");
      setFile(null);
      setPreview(null);
      setShowForm(false);
      fetchList();
    }
    setUploading(false);
  }

  async function handleDelete(item: GaleriItem) {
    if (!confirm(`Hapus foto "${item.judul}"?`)) return;
    setDeleting(item.id);

    // Hapus file dari storage jika berasal dari bucket media
    if (item.gambar_url.includes("/storage/v1/object/public/media/")) {
      const path = item.gambar_url.split("/storage/v1/object/public/media/")[1];
      await supabase.storage.from("media").remove([path]);
    }

    await supabase.from("galeri").delete().eq("id", item.id);
    setDeleting(null);
    fetchList();
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
            Galeri Kegiatan
          </h1>
          <p className="text-sm text-ansor-500 dark:text-ansor-400">
            {list.length} foto tersimpan
          </p>
        </div>
        <button
          type="button"
          id="galeri-tambah-btn"
          onClick={() => { setShowForm(true); setError(null); }}
          className="inline-flex items-center gap-2 rounded-md bg-ansor-700 px-4 py-2 text-sm font-semibold text-white hover:bg-ansor-600 dark:bg-ansor-600"
        >
          <Plus size={16} /> Tambah Foto
        </button>
      </div>

      {/* Form Tambah */}
      {showForm && (
        <div className="mb-8 rounded-xl border border-ansor-100 bg-white p-6 shadow-sm dark:border-ansor-800 dark:bg-ansor-900">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-ansor-900 dark:text-ansor-50">Tambah Foto Baru</h2>
            <button type="button" onClick={() => { setShowForm(false); setPreview(null); setFile(null); }}>
              <X size={18} className="text-ansor-400 hover:text-ansor-700" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
                Judul Foto *
              </label>
              <input
                type="text"
                required
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Contoh: Rakorwil GP Ansor 2026"
                className="w-full rounded-md border border-ansor-200 bg-white px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
                Deskripsi
              </label>
              <textarea
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                rows={2}
                placeholder="Opsional — keterangan singkat foto"
                className="w-full rounded-md border border-ansor-200 bg-white px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
                Gambar *
              </label>
              <div
                className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-ansor-200 bg-ansor-50 py-8 transition-colors hover:border-ansor-400 dark:border-ansor-700 dark:bg-ansor-900/50"
                onClick={() => fileRef.current?.click()}
              >
                {preview ? (
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image src={preview} alt="preview" fill className="object-contain" />
                  </div>
                ) : (
                  <>
                    <Upload size={28} className="text-ansor-400" />
                    <p className="text-sm text-ansor-500 dark:text-ansor-400">Klik untuk pilih gambar</p>
                    <p className="text-xs text-ansor-400">JPG, PNG, WebP — maks 5MB</p>
                  </>
                )}
              </div>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </div>

            {error && (
              <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400">
                {error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={uploading}
                className="inline-flex items-center gap-2 rounded-md bg-ansor-700 px-5 py-2 text-sm font-semibold text-white hover:bg-ansor-600 disabled:opacity-60 dark:bg-ansor-600"
              >
                <Upload size={14} />
                {uploading ? "Mengupload..." : "Simpan Foto"}
              </button>
              <button
                type="button"
                onClick={() => { setShowForm(false); setPreview(null); setFile(null); }}
                className="rounded-md border border-ansor-200 px-4 py-2 text-sm text-ansor-600 hover:bg-ansor-50 dark:border-ansor-700 dark:text-ansor-300"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Grid Foto */}
      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-xl bg-ansor-100 dark:bg-ansor-800" />
          ))}
        </div>
      ) : list.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-ansor-200 py-20 dark:border-ansor-700">
          <ImageIcon size={40} className="text-ansor-300 dark:text-ansor-700" />
          <p className="text-sm text-ansor-500 dark:text-ansor-400">Belum ada foto. Klik "Tambah Foto" untuk mulai.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-ansor-100 dark:bg-ansor-800"
            >
              <Image
                src={item.gambar_url}
                alt={item.judul}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between bg-black/0 p-2 transition-all group-hover:bg-black/50">
                <button
                  type="button"
                  disabled={deleting === item.id}
                  onClick={() => handleDelete(item)}
                  className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-red-700 disabled:opacity-50"
                >
                  <Trash2 size={13} />
                </button>
                <p className="line-clamp-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.judul}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
