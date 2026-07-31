"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { 
  Menu, X, ChevronDown, LogIn, 
  Home, User, Landmark, Newspaper, 
  FileText, Image as ImageIcon, PhoneCall, 
  Compass, Network, Building2 
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

// ── Menu Profil (dropdown) ────────────────────────────────────────────────────
const profilSubmenu = [
  { href: "/profil",               label: "Profil Organisasi",  icon: Building2 },
  { href: "/visi-misi",            label: "Visi & Misi",         icon: Compass },
  { href: "/struktur-organisasi",  label: "Struktur Organisasi", icon: Network },
];

// ── Menu utama ────────────────────────────────────────────────────────────────
const menu = [
  { href: "/",               label: "Beranda",        icon: Home,       dropdown: null },
  { href: "/profil",         label: "Profil",         icon: User,       dropdown: profilSubmenu },
  { href: "/badan-lembaga",  label: "Badan & Lembaga",icon: Landmark,   dropdown: null },
  { href: "/berita",         label: "Berita",         icon: Newspaper,  dropdown: null },
  { href: "/artikel",        label: "Artikel",        icon: FileText,   dropdown: null },
  { href: "/galeri",         label: "Galeri",         icon: ImageIcon,  dropdown: null },
  { href: "/kontak",         label: "Kontak",         icon: PhoneCall,  dropdown: null },
];

export function Navbar() {
  const [open, setOpen]             = useState(false);   // mobile menu
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
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
          {menu.map((item) => {
            const Icon = item.icon;
            return item.dropdown ? (
              // ── Dropdown Profil ──
              <div key={item.href} className="relative" ref={dropdownRef}>
                <button
                  id="nav-profil-btn"
                  type="button"
                  onClick={() => setProfilOpen((v) => !v)}
                  className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
                >
                  <Icon size={16} className="text-ansor-600 dark:text-ansor-400" />
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${profilOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {profilOpen && (
                  <div
                    id="nav-profil-dropdown"
                    className="absolute left-0 top-full mt-1 min-w-[210px] rounded-xl border border-ansor-100 bg-white py-1.5 shadow-xl dark:border-ansor-800 dark:bg-ansor-900"
                  >
                    {item.dropdown.map((sub) => {
                      const SubIcon = sub.icon;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setProfilOpen(false)}
                          className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-800 dark:hover:text-gold-400"
                        >
                          <SubIcon size={15} className="text-ansor-500 dark:text-ansor-400" />
                          <span>{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              // ── Link biasa ──
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-ansor-700 transition-colors hover:bg-ansor-50 hover:text-ansor-900 dark:text-ansor-200 dark:hover:bg-ansor-900 dark:hover:text-gold-400"
              >
                <Icon size={16} className="text-ansor-600 dark:text-ansor-400" />
                <span>{item.label}</span>
              </Link>
            );
          })}
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
        <nav className="border-t border-ansor-100 bg-white px-4 py-3 dark:border-ansor-800 dark:bg-ansor-950 lg:hidden">
          <div className="space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;
              return item.dropdown ? (
                <div key={item.href}>
                  <button
                    type="button"
                    onClick={() => setMobileProfilOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium text-ansor-700 hover:bg-ansor-50 dark:text-ansor-200 dark:hover:bg-ansor-900"
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={18} className="text-ansor-600 dark:text-ansor-400" />
                      {item.label}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${mobileProfilOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileProfilOpen && (
                    <div className="ml-4 space-y-1 border-l-2 border-ansor-200 pl-3 dark:border-ansor-700">
                      {item.dropdown.map((sub) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => { setOpen(false); setMobileProfilOpen(false); }}
                            className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-ansor-600 hover:bg-ansor-50 dark:text-ansor-300 dark:hover:bg-ansor-900"
                          >
                            <SubIcon size={16} className="text-ansor-500 dark:text-ansor-400" />
                            <span>{sub.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-ansor-700 hover:bg-ansor-50 dark:text-ansor-200 dark:hover:bg-ansor-900"
                >
                  <Icon size={18} className="text-ansor-600 dark:text-ansor-400" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      <div className="motif-divider" />
    </header>
  );
}

