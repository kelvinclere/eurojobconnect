import { cn } from "@/lib/utils";
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn("rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(13,37,63,.04)]", className)} {...props} />; }
