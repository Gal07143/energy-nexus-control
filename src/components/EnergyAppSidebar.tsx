
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { 
  Battery, 
  Car, 
  ChartLine, 
  Cloud, 
  Gauge, 
  House, 
  Settings, 
  Zap 
} from "lucide-react";
import { cn } from "@/lib/utils";

export function EnergyAppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-4">
        <div className="flex items-center gap-2 px-4">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Energy Nexus</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Monitoring</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="/" className={cn("flex items-center gap-3", {
                    "text-primary font-medium": true,
                  })}>
                    <Gauge className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <ChartLine className="h-5 w-5" />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Energy Sources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <Cloud className="h-5 w-5" />
                    <span>Solar</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <Battery className="h-5 w-5" />
                    <span>Battery</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <Car className="h-5 w-5" />
                    <span>EV Charging</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <House className="h-5 w-5" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex items-center gap-3">
                  <a href="#" className="flex items-center gap-3">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
