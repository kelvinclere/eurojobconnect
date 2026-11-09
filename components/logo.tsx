import Link from "next/link";
import { Icon } from "./icons";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" aria-label="EuroJob Connect home" className="flex items-center gap-2.5 font-extrabold tracking-[-.03em]">
    <span className={`grid h-9 w-9 place-items-center rounded-lg ${inverse ? "bg-white text-navy" : "bg-navy text-white"}`}><Icon name="briefcase" size={19} /></span>
    <span className={`text-[19px] ${inverse ? "text-white" : "text-navy"}`}>EuroJob <span className={inverse ? "text-[#68d2c8]" : "text-teal"}>Connect</span></span>
  </Link>;
}
