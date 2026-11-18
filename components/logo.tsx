import Image from "next/image";
import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" aria-label="EuroJob Connect home" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-extrabold tracking-[-.03em]">
    <Image src={inverse ? "/brand/logo-mark-light.svg" : "/brand/logo-mark.svg"} alt="" width={38} height={38} priority className={inverse ? "h-10 w-10" : "h-[38px] w-[38px] rounded-[9px] shadow-sm"} />
    <span className={`text-[19px] ${inverse ? "text-white" : "text-navy"}`}>EuroJob <span className={inverse ? "text-[#fcd34d]" : "text-teal"}>Connect</span></span>
  </Link>;
}
