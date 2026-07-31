"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ubah ke tema terang" : "Ubah ke tema gelap"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-ansor-200 bg-white text-ansor-700 transition-colors hover:bg-ansor-50 dark:border-ansor-700 dark:bg-ansor-900 dark:text-gold-400 dark:hover:bg-ansor-800"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
