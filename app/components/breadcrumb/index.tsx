"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useGetBreadcrumbTitle from "@/hooks/use-get-breadcrumb-title";
import { ROUTES } from "@/lib/route.config";
import { usePathname } from "next/navigation";

const DynamicBreadcrumb = () => {
  const Prams = usePathname();
  const { breadcrumbTitle } = useGetBreadcrumbTitle(Prams);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href={ROUTES.DASHBOARD_ROOT_URL}>
              Building Your Application
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{breadcrumbTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default DynamicBreadcrumb;
