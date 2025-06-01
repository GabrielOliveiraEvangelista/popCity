import logo from "../assets/logo.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { IconDashboard } from "@/components/IconDashboard";
import { IconFolder } from "@/components/IconFolder";
import { IconMessage } from "@/components/IconMessage";
import { IconNotification } from "@/components/IconNotification";
import { IconUser } from "@/components/IconUser";
import { IconSettings } from "@/components/IconSettings";

// Ícones que irão para o rodapé
import { IconHelp } from "@/components/IconHelp";
import { IconCustomerService } from "@/components/IconCustomer";
import { IconLogout } from "@/components/IconLogout";

// ---------- Itens principais (topo) ----------
const items = [
  { title: "Dashboard", url: "#", icon: IconDashboard },
  { title: "Folder", url: "#", icon: IconFolder },
  { title: "Message", url: "#", icon: IconMessage },
  { title: "Notification", url: "#", icon: IconNotification },
  { title: "User", url: "#", icon: IconUser },
  { title: "Settings", url: "#", icon: IconSettings },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-none" collapsible="icon">
      <SidebarContent className="border-0">
        {/* Container flex vertical para empurrar rodapé */}
        <div className="flex flex-col h-full">
          {/* ---------- Grupo principal (logo + itens) ---------- */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Logo fixo no topo */}
                <SidebarMenuItem className="my-4">
                  <SidebarMenuButton
                    className="bg-neutral-200 flex items-center gap-2 px-4 py-2"
                    asChild
                  >
                    <a href="/" className="flex items-center gap-2">
                      <img src={logo} alt="Pop City" className="h-6 w-6" />
                      <span className="font-bold">Pop City</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Itens principais mapeados */}
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-2 px-4 py-2"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ---------- Espaçador que empurra o rodapé para baixo ---------- */}
          <div className="flex-1" />

          {/* ---------- Rodapé com 3 itens iguais aos do topo ---------- */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {/* Ícone de Help */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <IconHelp className="h-5 w-5" />
                      <span>Help</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Ícone de Customer Service */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <IconCustomerService className="h-5 w-5" />
                      <span>Support</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {/* Ícone de Logout */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#" className="flex items-center gap-2 px-4 py-2">
                      <IconLogout className="h-5 w-5" />
                      <span>Logout</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
