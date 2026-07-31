"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Newspaper, PenLine, ExternalLink } from "lucide-react";
import { LogoutButton } from "./LogoutButton";
import { ThemeToggle } from "./ThemeToggle";

const items = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/berita", label: "Berita", icon: Newspaper },
  { href: "/admin/artikel", label: "Artikel", icon: PenLine },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-ansor-100 bg-white dark:border-ansor-800 dark:bg-ansor-950">
      <div className="flex items-center gap-3 border-b border-ansor-100 p-4 dark:border-ansor-800">
        <Image
          src="/GP Ansor.svg"
          alt="GP Ansor Logo"
          width={36}
          height={36}
          className="h-9 w-auto object-contain"
        />
        <div>
          <p className="font-display font-bold text-ansor-800 dark:text-ansor-50">Admin CMS</p>
          <p className="text-xs text-ansor-400">PW GP Ansor Jabar</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + "/");
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-ansor-700 text-white dark:bg-ansor-600"
                  : "text-ansor-600 hover:bg-ansor-50 dark:text-ansor-300 dark:hover:bg-ansor-900"
              }`}
            >
              <Icon size={16} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-2 border-t border-ansor-100 p-3 dark:border-ansor-800">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-ansor-500 hover:bg-ansor-50 dark:text-ansor-400 dark:hover:bg-ansor-900"
        >
          <ExternalLink size={16} /> Lihat situs publik
        </Link>
        <div className="flex items-center justify-between px-3">
          <span className="text-xs text-ansor-400">Tema</span>
          <ThemeToggle />
        </div>
        <LogoutButton />
      </div>
    </aside>
  );
}
