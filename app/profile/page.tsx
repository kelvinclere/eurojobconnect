import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ProfileClient } from "@/components/profile-client";
export const metadata: Metadata = { title: "My local profile", description: "View jobs and preferences saved locally in your browser." };
export default function ProfilePage() { return <><PageHeading eyebrow="Your job search" title="Saved jobs & preferences" description="Keep a shortlist on this device. No account, backend or cloud profile is used." /><ProfileClient /></>; }
