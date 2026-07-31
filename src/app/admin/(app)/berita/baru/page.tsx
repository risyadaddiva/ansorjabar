import { BeritaForm } from "@/components/BeritaForm";

export const metadata = { title: "Berita Baru — Admin" };

export default function BeritaBaruPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
        Tulis Berita Baru
      </h1>
      <BeritaForm />
    </div>
  );
}
