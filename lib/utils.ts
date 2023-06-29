import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paramToPath(param: string | string[] | undefined) {
  // Possible slug value types:
  const slug = Array.isArray(param)
    ? // - ["multiple", "paths"]
      param.join("/")
    : // - "single-path"
      param ||
      // - undefined -> default to "/"
      "/";
  return slug;
}
