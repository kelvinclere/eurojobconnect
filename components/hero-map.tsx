import Image from "next/image";
import { cn } from "@/lib/utils";

/** Decorative animated network map of Africa for brand hero sections. Its parent needs `relative overflow-hidden`. */
export function HeroMap({ className }: { className?: string }) {
  return <Image src="/brand/africa-network.svg" alt="" aria-hidden="true" width={775} height={798} priority className={cn("pointer-events-none absolute h-auto select-none", className)} />;
}
