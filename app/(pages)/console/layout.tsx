import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, ShadcnDynamicBreadcrumb } from "../../components";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger className="-ml-2 bg-sidebar-accent mt-16 cursor-pointer" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <div style={{ paddingTop: "74px" }}>
        <ShadcnDynamicBreadcrumb />
        <div className="pt-6">{children}</div>
      </div>
    </SidebarProvider>
  );
}

// className="rounded-full bg-gray-600 cursor-pointer md:-ml-12 z-50 mt-7 -ml-0"
