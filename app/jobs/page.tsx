import type { Metadata } from "next";
import { Suspense } from "react";
import { JobsExplorer } from "@/components/jobs-explorer";

export const metadata: Metadata = { title: "Jobs in Europe", description: "Search and filter European job opportunities by country, category, experience and visa sponsorship status." };

export default function JobsPage() { return <Suspense fallback={<JobsLoading />}><JobsExplorer /></Suspense>; }

function JobsLoading() { return <div className="container-page py-14"><div className="skeleton h-10 w-64 rounded-lg" /><div className="mt-8 grid gap-6 lg:grid-cols-[250px_1fr]"><div className="skeleton h-96 rounded-xl" /><div className="space-y-4">{[1,2,3].map((x) => <div key={x} className="skeleton h-56 rounded-xl" />)}</div></div></div>; }
