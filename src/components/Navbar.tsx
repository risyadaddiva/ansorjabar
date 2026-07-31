"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/visi-misi", label: "Visi & Misi" },
  { href: "/struktur-organisasi", label: "Struktur Organisasi" },
  { href: "/berita", label: "Berita" },
  { href: "/artikel", label: "Artikel" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ansor-100 bg-white/95 backdrop-blur dark:border-ansor-800 dark:bg-ansor-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/GP Ansor.svg"
            alt="GP Ansor Logo"
            width={44}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold text-ansor-800 dark:text-ansor-50">
              PW GP ANSOR
            </span>
            <span className="block text-xs text-ansor-500 dark:text-ansor-300">
              Provinsi Jawa Barat
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md border border-ansor-200 p-2 dark:border-ansor-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ansor-100 bg-white px-4 py-2 dark:border-ansor-800 dark:bg-ansor-950 lg:hidden">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-ansor-700 hover:bg-ansor-50 dark:text-ansor-200 dark:hover:bg-ansor-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

      <div className="motif-divider" />
    </header>
  );
}
