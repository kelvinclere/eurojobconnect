import type { Audience } from "@/data/opportunities";

/**
 * Decorative scene that shows what kind of opportunity a card is about.
 * Drawn in SVG so it is crisp, lightweight and needs no external images.
 */
export type Theme = "agri" | "students" | "leaders" | "community" | "women" | "founders" | "tech" | "health";

export const audienceTheme: Record<Audience, Theme> = {
  agri: "agri", students: "students", researchers: "leaders", youth: "leaders", ngos: "community",
  women: "women", founders: "founders", tech: "tech", health: "health", creatives: "women",
};

export const themeLabel: Record<Theme, string> = {
  agri: "Climate & agriculture", students: "Study abroad", leaders: "Leadership & research", community: "Community impact",
  women: "Women in business", founders: "Startup growth", tech: "Tech & innovation", health: "Health innovation",
};

const bg: Record<Theme, [string, string]> = {
  agri: ["#fef3c7", "#bbf7d0"], students: ["#dbeafe", "#e0e7ff"], leaders: ["#ede9fe", "#c7d2fe"], community: ["#ffedd5", "#fecdd3"],
  women: ["#fce7f3", "#f5d0fe"], founders: ["#fef9c3", "#fed7aa"], tech: ["#cffafe", "#ccfbf1"], health: ["#dcfce7", "#cffafe"],
};

function Scene({ theme }: { theme: Theme }) {
  switch (theme) {
    case "agri": return <>
      <circle cx="330" cy="52" r="26" fill="#fbbf24" />
      <g stroke="#fbbf24" strokeWidth="4" strokeLinecap="round">{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => <line key={a} x1={330 + Math.cos(a * Math.PI / 180) * 34} y1={52 + Math.sin(a * Math.PI / 180) * 34} x2={330 + Math.cos(a * Math.PI / 180) * 44} y2={52 + Math.sin(a * Math.PI / 180) * 44} />)}</g>
      <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round"><line x1="70" y1="60" x2="70" y2="140" /><path d="M70 60 l-22 -10 M70 60 l20 -16 M70 60 l4 26" /></g>
      <circle cx="70" cy="60" r="4" fill="#fff" />
      <path d="M0 150 C80 115 160 120 240 140 S360 150 400 130 V200 H0Z" fill="#4ade80" />
      <path d="M0 170 C90 145 200 150 280 165 S370 170 400 160 V200 H0Z" fill="#16a34a" />
      <g stroke="#15803d" strokeWidth="2.5" opacity=".6">{[30, 70, 110, 150, 190, 230, 270, 310, 350].map((x) => <line key={x} x1={x} y1="182" x2={x + 24} y2="200" />)}</g>
      <g transform="translate(200 102)"><path d="M0 60 V8" stroke="#166534" strokeWidth="5" strokeLinecap="round" /><path d="M0 30 C-30 26 -36 6 -34 -4 C-14 -2 -2 10 0 30Z" fill="#22c55e" /><path d="M0 18 C26 14 34 -8 32 -16 C12 -14 2 -2 0 18Z" fill="#4ade80" /></g>
    </>;
    case "students": return <>
      <path d="M40 60 C120 20 240 20 330 58" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 7" />
      <path d="M330 58 l-16 -4 l6 -6 l14 8 l8 -12 l6 2 l-6 14 l12 6 l-3 5 l-15 -4z" fill="#4f46e5" />
      <g transform="translate(110 118)"><rect width="150" height="18" rx="3" fill="#2563eb" /><rect x="8" y="-18" width="136" height="18" rx="3" fill="#f59e0b" /><rect x="-4" y="-36" width="142" height="18" rx="3" fill="#10b981" /><rect y="18" width="150" height="18" rx="3" fill="#7c3aed" /></g>
      <g transform="translate(185 52)"><path d="M-62 24 L0 -4 L62 24 L0 52Z" fill="#1e293b" /><path d="M-36 36 V56 C-20 70 20 70 36 56 V36 L0 52Z" fill="#334155" /><path d="M48 30 V60" stroke="#fbbf24" strokeWidth="4" /><circle cx="48" cy="64" r="6" fill="#fbbf24" /></g>
      <g transform="translate(300 128) rotate(-12)"><rect width="70" height="42" rx="6" fill="#fff" stroke="#c7d2fe" strokeWidth="3" /><line x1="12" y1="14" x2="58" y2="14" stroke="#a5b4fc" strokeWidth="3" /><line x1="12" y1="24" x2="46" y2="24" stroke="#a5b4fc" strokeWidth="3" /><circle cx="54" cy="32" r="6" fill="#f59e0b" /></g>
    </>;
    case "leaders": return <>
      <g transform="translate(110 96)"><circle r="62" fill="#818cf8" /><circle r="62" fill="none" stroke="#e0e7ff" strokeWidth="2.5" /><ellipse rx="26" ry="62" fill="none" stroke="#e0e7ff" strokeWidth="2.5" /><line x1="-62" x2="62" stroke="#e0e7ff" strokeWidth="2.5" /><path d="M-56 -26 H56 M-56 26 H56" stroke="#e0e7ff" strokeWidth="2" /></g>
      <g fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeDasharray="5 6"><path d="M150 50 C210 10 280 20 310 70" /><path d="M160 140 C220 170 290 160 320 120" /></g>
      <g fill="#fbbf24"><circle cx="150" cy="50" r="6" /><circle cx="310" cy="70" r="6" /><circle cx="160" cy="140" r="6" /><circle cx="320" cy="120" r="6" /></g>
      <g transform="translate(300 112)"><circle cy="-34" r="14" fill="#1e1b4b" /><path d="M-24 22 C-24 -6 24 -6 24 22Z" fill="#4338ca" /><rect x="-34" y="22" width="68" height="44" rx="4" fill="#312e81" /><rect x="-20" y="34" width="40" height="6" rx="3" fill="#fbbf24" /></g>
    </>;
    case "community": return <>
      <path d="M200 46 C200 30 178 24 170 40 C162 24 140 30 140 46 C140 66 170 80 170 80 C170 80 200 66 200 46Z" transform="translate(30 -6)" fill="#f43f5e" />
      {[[110, "#ea580c"], [200, "#0f766e"], [290, "#7c3aed"]].map(([x, c]) => <g key={x as number} transform={`translate(${x} 120)`}><circle cy="-30" r="16" fill="#7c2d12" opacity=".85" /><path d="M-30 46 C-30 0 30 0 30 46Z" fill={c as string} /></g>)}
      <path d="M134 148 H176 M224 148 H266" stroke="#7c2d12" strokeWidth="7" strokeLinecap="round" opacity=".85" />
      <g transform="translate(26 120)" fill="#fdba74"><path d="M0 30 L24 8 L48 30 V70 H0Z" /><rect x="18" y="44" width="12" height="26" fill="#c2410c" /></g>
      <g transform="translate(330 128)" fill="#fda4af"><path d="M0 24 L20 6 L40 24 V62 H0Z" /><rect x="15" y="38" width="10" height="24" fill="#be123c" /></g>
      <rect y="186" width="400" height="14" fill="#fb923c" opacity=".35" />
    </>;
    case "women": return <>
      <g fill="#fbbf24">{[[60, 40], [340, 36], [360, 150], [44, 150]].map(([x, y]) => <path key={x} d={`M${x} ${y - 10} L${x + 3} ${y - 3} L${x + 10} ${y} L${x + 3} ${y + 3} L${x} ${y + 10} L${x - 3} ${y + 3} L${x - 10} ${y} L${x - 3} ${y - 3}Z`} />)}</g>
      <g transform="translate(140 110)"><circle cx="0" cy="-60" r="13" fill="#831843" /><circle cy="-40" r="22" fill="#7c2d12" /><path d="M-22 -44 C-22 -70 22 -70 22 -44 C16 -56 -16 -56 -22 -44Z" fill="#831843" /><path d="M-40 70 C-40 0 40 0 40 70Z" fill="#db2777" /></g>
      <g transform="translate(232 76)"><rect width="120" height="78" rx="6" fill="#1f2937" /><rect x="8" y="8" width="104" height="62" rx="3" fill="#fdf2f8" /><path d="M-10 78 H130 L120 90 H0Z" fill="#374151" />
        <g fill="#ec4899"><rect x="20" y="46" width="12" height="16" rx="2" /><rect x="40" y="36" width="12" height="26" rx="2" /><rect x="60" y="26" width="12" height="36" rx="2" /><rect x="80" y="16" width="12" height="46" rx="2" fill="#a21caf" /></g></g>
    </>;
    case "founders": return <>
      <g fill="#fdba74">{[[40, 160, 26], [76, 140, 46], [112, 120, 66], [148, 96, 90]].map(([x, y, h]) => <rect key={x} x={x} y={y} width="26" height={h} rx="4" />)}</g>
      <path d="M30 150 L80 124 L118 108 L160 74" fill="none" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" /><path d="M160 74 l-14 2 M160 74 l-2 14" stroke="#ea580c" strokeWidth="4" strokeLinecap="round" />
      <g transform="translate(286 92) rotate(35)"><path d="M0 -70 C26 -44 26 10 16 30 H-16 C-26 10 -26 -44 0 -70Z" fill="#f8fafc" stroke="#1e293b" strokeWidth="3" /><circle cy="-22" r="11" fill="#38bdf8" stroke="#1e293b" strokeWidth="3" /><path d="M-16 6 L-34 30 L-16 30Z M16 6 L34 30 L16 30Z" fill="#ef4444" /><path d="M-10 32 C-10 54 0 70 0 70 C0 70 10 54 10 32Z" fill="#f59e0b" /></g>
      <g fill="#fbbf24" stroke="#d97706" strokeWidth="2.5"><ellipse cx="226" cy="176" rx="18" ry="7" /><ellipse cx="226" cy="168" rx="18" ry="7" /><ellipse cx="262" cy="180" rx="18" ry="7" /></g>
    </>;
    case "tech": return <>
      <g stroke="#14b8a6" strokeWidth="2.5" fill="none" opacity=".7"><path d="M20 40 H90 V90 H130" /><path d="M20 160 H70 V120 H130" /><path d="M380 50 H320 V96 H280" /><path d="M380 150 H330 V120 H280" /></g>
      <g fill="#0d9488">{[[20, 40], [20, 160], [380, 50], [380, 150]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="6" />)}</g>
      <g transform="translate(130 46)"><rect width="150" height="96" rx="8" fill="#0f172a" /><rect x="9" y="9" width="132" height="78" rx="4" fill="#134e4a" /><path d="M-14 96 H164 L152 110 H-2Z" fill="#334155" />
        <text x="75" y="58" textAnchor="middle" fontFamily="monospace" fontSize="30" fontWeight="700" fill="#5eead4">{"</>"}</text></g>
    </>;
    case "health": return <>
      <path d="M0 110 H120 L138 72 L160 150 L182 92 L196 110 H400" fill="none" stroke="#10b981" strokeWidth="4" strokeLinejoin="round" />
      <g transform="translate(286 96)"><path d="M0 -62 L52 -42 V0 C52 34 26 54 0 64 C-26 54 -52 34 -52 0 V-42Z" fill="#0f766e" /><rect x="-10" y="-30" width="20" height="60" rx="3" fill="#fff" /><rect x="-30" y="-10" width="60" height="20" rx="3" fill="#fff" /></g>
      <g transform="translate(70 50)" fill="#f43f5e"><path d="M0 8 C0 -4 -16 -8 -20 4 C-24 -8 -40 -4 -40 8 C-40 22 -20 32 -20 32 C-20 32 0 22 0 8Z" /></g>
    </>;
  }
}

export function ThemeIllustration({ theme, className }: { theme: Theme; className?: string }) {
  const [a, b] = bg[theme];
  const id = `bg-${theme}`;
  return <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" className={className}>
    <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
    <rect width="400" height="200" fill={`url(#${id})`} />
    <circle cx="370" cy="190" r="70" fill="#fff" opacity=".25" /><circle cx="20" cy="10" r="50" fill="#fff" opacity=".3" />
    <Scene theme={theme} />
  </svg>;
}
