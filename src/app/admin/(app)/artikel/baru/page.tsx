import { ArtikelForm } from "@/components/ArtikelForm";

export const metadata = { title: "Artikel Baru — Admin" };

export default function ArtikelBaruPage() {
  return (
    <div>
      <h1 className="mb-6 font-display text-2xl font-bold text-ansor-900 dark:text-ansor-50">
        Tulis Artikel Baru
      </h1>
      <ArtikelForm />
    </div>
  );
}
