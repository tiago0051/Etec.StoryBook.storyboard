import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const twMerge = extendTailwindMerge({
    prefix: "eteg-",
  });
  return twMerge(clsx(inputs));
}
