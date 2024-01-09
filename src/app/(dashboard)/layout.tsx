
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { sidebarNav } from '@/constants';

interface DashboardLayoutProps {
    children: React.ReactNode;
}


export default async function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-7">
            <aside className="lg:self-start lg:sticky lg:top-0 lg:col-span-1 hidden md:hidden lg:block fixed h-screen overflow-y-auto">
                <SidebarNav items={sidebarNav} className="py-[16px] px-[10px]" />
            </aside>

            <main className="lg:col-span-6 col-span-1 overflow-y-auto">
                {children}
            </main>
        </div>
    );
}
