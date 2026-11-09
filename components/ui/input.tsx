import { cn } from "@/lib/utils";
import * as React from "react";
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("h-11 w-full rounded-lg border border-line bg-white px-3.5 text-sm text-navy placeholder:text-slate-400 hover:border-slate-300 focus:border-teal focus:outline-none focus:ring-3 focus:ring-teal/10", className)} {...props} />; }
