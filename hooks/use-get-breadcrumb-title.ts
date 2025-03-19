import { getBreadcrumbTitle } from "@/lib/utils";
import { useEffect, useState } from "react";

const useGetBreadcrumbTitle = (url: string) => {
  const [breadcrumbTitle, setBreadcrumbTitle] = useState<string | null>(null);

  useEffect(() => {
    if (url) {
      setBreadcrumbTitle(getBreadcrumbTitle(url));
    }
  }, [url]);

  return { breadcrumbTitle };
};

export default useGetBreadcrumbTitle;
