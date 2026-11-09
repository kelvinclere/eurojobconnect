export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-KE", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${value}T12:00:00Z`));
}

export function formatSalary(min?: number, max?: number, currency?: string, period?: string) {
  if (!min || !currency) return "Salary not supplied";
  const nf = new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-KE", { style: "currency", currency, maximumFractionDigits: 0 });
  const payPeriod = period === "hour" ? " per hour" : period ? ` / ${period}` : "";
  return `${nf.format(min)}${max ? `–${nf.format(max)}` : "+"}${payPeriod}`;
}

export function relativePostingDate(value: string) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(`${value}T12:00:00Z`).getTime()) / 86400000));
  if (days === 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  return `Posted ${days} days ago`;
}
