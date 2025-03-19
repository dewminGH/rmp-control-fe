import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBreadcrumbTitle(url: string) {
  const splitURL = url.split("/");
  if (splitURL.length) {
    const title = splitURL[splitURL.length - 1]
      .replaceAll("-", " ")
      .split(" ")
      .map(
        (titleWord) =>
          titleWord.charAt(0).toUpperCase() +
          titleWord.slice(1, titleWord.length)
      )
      .join(" ");
    return title;
  }
  return "";
}
