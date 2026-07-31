"use client";

/**
 * IdleLogout — auto-logout setelah IDLE_MS milidetik tanpa aktivitas.
 * Default: 30 menit (1_800_000 ms).
 *
 * Diletakkan di admin layout agar hanya aktif saat halaman admin dibuka.
 */

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const IDLE_MS = 30 * 60 * 1000; // 30 menit

const EVENTS = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"];

export function IdleLogout() {
  const router  = useRouter();
  const supabase = createClient();
  const timer   = useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetTimer() {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(logout, IDLE_MS);
  }

  async function logout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  useEffect(() => {
    // Mulai timer saat komponen mount
    resetTimer();

    // Reset timer setiap ada aktivitas pengguna
    EVENTS.forEach((event) => window.addEventListener(event, resetTimer, { passive: true }));

    return () => {
      if (timer.current) clearTimeout(timer.current);
      EVENTS.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, []); // eslint-disable-line

  // Komponen ini tidak merender apapun ke DOM
  return null;
}
