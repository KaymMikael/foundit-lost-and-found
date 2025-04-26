import * as React from "react";
import { Briefcase, LayoutDashboard, PawPrint } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import useUser from "@/hooks/useUser";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Main",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Create Report",
          url: "/create-report",
        },
      ],
    },
    {
      title: "Items",
      url: "#",
      icon: Briefcase,
      items: [
        {
          title: "Lost",
          url: "/lost-items",
        },
        {
          title: "Found",
          url: "/found-items",
        },
      ],
    },
    {
      title: "Pets",
      url: "#",
      icon: PawPrint,
      items: [
        {
          title: "Lost",
          url: "/lost-pets",
        },
        {
          title: "Found",
          url: "/found-pets",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{/* <TeamSwitcher teams={data.teams} /> */}</SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
