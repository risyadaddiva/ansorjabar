"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LogIn } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError("Email atau kata sandi salah. Silakan coba lagi.");
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-ansor-50 px-4 dark:bg-ansor-950">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm rounded-xl border border-ansor-100 bg-white p-8 shadow-sm dark:border-ansor-800 dark:bg-ansor-900">
        <div className="mb-6 text-center">
          <Image
            src="/GP Ansor.svg"
            alt="GP Ansor Logo"
            width={56}
            height={56}
            className="mx-auto mb-3 h-14 w-auto object-contain"
            priority
          />
          <h1 className="font-display text-xl font-bold text-ansor-900 dark:text-ansor-50">
            Masuk Admin CMS
          </h1>
          <p className="text-sm text-ansor-500 dark:text-ansor-400">
            PW GP Ansor Jawa Barat
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-ansor-200 bg-white px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
              placeholder="admin@ansorjabar.or.id"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ansor-700 dark:text-ansor-200">
              Kata Sandi
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-ansor-200 bg-white px-3 py-2 text-sm dark:border-ansor-700 dark:bg-ansor-950 dark:text-ansor-50"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-md bg-maroon-500/10 px-3 py-2 text-sm text-maroon-600 dark:text-maroon-500">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-ansor-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ansor-600 disabled:opacity-60 dark:bg-ansor-600"
          >
            <LogIn size={16} />
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-ansor-400">
          Hubungi Admin PW GP Ansor Jawa Barat Untuk Informasi Lebih Lanjut
        </p>
      </div>
    </div>
  );
}
