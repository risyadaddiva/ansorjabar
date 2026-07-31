"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// ── Menu Profil (dropdown) ────────────────────────────────────────────────────
const profilSubmenu = [
  { href: "/profil",               label: "Profil Organisasi" },
  { href: "/visi-misi",            label: "Visi & Misi" },
  { href: "/struktur-organisasi",  label: "Struktur Organisasi" },
];

// ── Menu utama ────────────────────────────────────────────────────────────────
const menu = [
  { href: "/",        label: "Beranda",   dropdown: null },
  { href: "/profil",  label: "Profil",    dropdown: profilSubmenu },
  { href: "/berita",  label: "Berita",    dropdown: null },
  { href: "/artikel", label: "Artikel",   dropdown: null },
  { href: "/galeri",  label: "Galeri",    dropdown: null },
  { href: "/kontak",  label: "Kontak",    dropdown: null },
];

export function Navbar() {
  const [open, setOpen]         = useState(false);   // mobile menu
  const [profilOpen, setProfilOpen] = useState(false); // desktop dropdown
  const [mobileProfilOpen, setMobileProfilOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfilOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ansor-100 bg-white/95 backdrop-blur dark:border-ansor-800 dark:bg-ansor-950/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
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

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {menu.map((item) =>
            item.dropdown ? (
              // ── Dropdown Profil ──
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  id="nav-profil-btn"
                  type="button"
                  onClick={() => setProfilOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${profilOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profilOpen && (
                  <div
                    id="nav-profil-dropdown"
                    className="absolute left-0 top-full mt-1 min-w-[200px] rounded-xl border border-ansor-100 bg-white py-1 shadow-xl dark:border-ansor-800 dark:bg-ansor-900"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setProfilOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-800 dark:hover:text-gold-400"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // ── Link biasa ──
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Icon Login Admin */}
          <Link
            href="/admin/dashboard"
            id="nav-admin-login"
            title="Masuk Admin"
            className="rounded-md border border-ansor-200 p-2 text-ansor-600 transition-colors hover:border-ansor-400 hover:bg-ansor-50 hover:text-ansor-900 dark:border-ansor-700 dark:text-ansor-300 dark:hover:border-ansor-500 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
          >
            <LogIn size={18} />
          </Link>

          {/* Hamburger mobile */}
          <button
            type="button"
            id="nav-mobile-menu-btn"
            className="rounded-md border border-ansor-200 p-2 dark:border-ansor-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ansor-100 bg-white px-4 py-2 dark:border-ansor-800 dark:bg-ansor-950 lg:hidden">
          {menu.map((item) =>
            item.dropdown ? (
              <div key={item.href}>
                <button
                  type="button"
                  onClick={() => setMobileProfilOpen((v) => !v)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-ansor-700 hover:bg-ansor-50 dark:text-ansor-200 dark:hover:bg-ansor-900"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${mobileProfilOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileProfilOpen && (
                  <div className="ml-3 space-y-0.5 border-l border-ansor-100 pl-3 dark:border-ansor-800">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => { setOpen(false); setMobileProfilOpen(false); }}
                        className="block rounded-md px-3 py-2 text-sm text-ansor-600 hover:bg-ansor-50 dark:text-ansor-300 dark:hover:bg-ansor-900"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-ansor-700 hover:bg-ansor-50 dark:text-ansor-200 dark:hover:bg-ansor-900"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}

      <div className="motif-divider" />
    </header>
  );
}
