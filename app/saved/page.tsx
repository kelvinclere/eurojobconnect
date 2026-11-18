import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { SavedClient } from "@/components/saved-client";

export const metadata: Metadata = { title: "Saved opportunities", description: "Your shortlist of saved grants, fellowships and competitions.", robots: { index: false, follow: true } };

export default function SavedPage() {
  return <><PageHeading eyebrow="Your shortlist" title="Saved opportunities" description="Keep track of the programmes you plan to apply for. Open each one on the official site to check the latest deadline." /><SavedClient /></>;
}
