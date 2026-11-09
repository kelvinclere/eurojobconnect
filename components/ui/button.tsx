import { cn } from "@/lib/utils";
import * as React from "react";

export const buttonVariants = ({ variant = "default", size = "default", className }: { variant?: "default" | "outline" | "ghost" | "light" | "danger"; size?: "default" | "sm" | "lg" | "icon"; className?: string } = {}) => cn(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold transition-colors disabled:pointer-events-none disabled:opacity-50",
  variant === "default" && "bg-teal text-white shadow-sm hover:bg-[#066d69]",
  variant === "outline" && "border border-line bg-white text-navy hover:border-teal hover:bg-teal-light",
  variant === "ghost" && "text-navy hover:bg-slate-100",
  variant === "light" && "bg-white text-navy shadow-sm hover:bg-slate-100",
  variant === "danger" && "bg-red-50 text-red-700 hover:bg-red-100",
  size === "default" && "h-11 px-5",
  size === "sm" && "h-9 px-3.5 text-xs",
  size === "lg" && "h-12 px-6 text-base",
  size === "icon" && "h-10 w-10",
  className,
);

export function Button({ className, variant, size, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost" | "light" | "danger"; size?: "default" | "sm" | "lg" | "icon" }) {
  return <button className={buttonVariants({ variant, size, className })} {...props} />;
}
