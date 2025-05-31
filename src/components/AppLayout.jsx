// app/AppLayout.tsx
"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    // provider só cuida do estado aberto/fechado
    <SidebarProvider defaultOpen={false}>
      {/* grid wrapper */}
      <div
        className="
          w-full
          h-screen
          grid
          grid-rows-[auto_1fr]
          grid-cols-[auto_1fr]
          bg-alpha-blue-10
          
        "
      >
        {/* Sidebar */}
        <aside className="row-span-2 col-start-1 ">
          <AppSidebar />
        </aside>

        {/* Header */}
        <header className="row-start-1 col-start-2 flex bg-white items-center">
          <SidebarTrigger className="rounded transition" />
          <Header />
        </header>

        {/* Conteúdo */}
        <main className="row-start-2 col-start-2 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
