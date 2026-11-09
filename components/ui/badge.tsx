import { cn } from "@/lib/utils";

export function Badge({ children, tone = "slate", className }: { children: React.ReactNode; tone?: "slate" | "teal" | "green" | "amber" | "red" | "blue"; className?: string }) {
  const tones = { slate: "bg-slate-100 text-slate-700", teal: "bg-teal-light text-[#086b67]", green: "bg-emerald-50 text-emerald-700", amber: "bg-amber-50 text-amber-800", red: "bg-red-50 text-red-700", blue: "bg-blue-50 text-blue-700" };
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold leading-none", tones[tone], className)}>{children}</span>;
}
