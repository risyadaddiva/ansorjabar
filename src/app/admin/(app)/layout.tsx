import { AdminSidebar } from "@/components/AdminSidebar";
import { IdleLogout } from "@/components/IdleLogout";

export default function AdminAppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-ansor-50/40 dark:bg-ansor-950">
      {/* Auto-logout setelah 30 menit idle */}
      <IdleLogout />
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-6 md:p-10">{children}</main>
    </div>
  );
}
