import { ROUTES } from "@/lib/route.config";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

// Menu items.
export const menuItems = [
  {
    title: "Home",
    url: ROUTES.DASHBOARD_ROOT_URL,
    icon: Home,
  },
  {
    title: "Live Data",
    url: ROUTES.DASHBOARD_LIVE_DATA_URL,
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
