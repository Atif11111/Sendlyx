"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ICONS } from "@/shared/utils/icons";

const EmailEditor = dynamic(
  () => import("@/shared/components/editor/email.editor"),
  {
    ssr: false,
  }
);

const Page = () => {
  const searchParams = useSearchParams();

  const subject = searchParams.get("subject") || "";
  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-sm border border-slate-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <Link
            href="/dashboard/write"
            className="flex items-center gap-2 text-slate-600 transition hover:text-slate-900"
          >
            <span>{ICONS.backArrow}</span>
            <span className="font-medium">Back</span>
          </Link>

          <h1 className="text-lg font-semibold capitalize text-slate-800">
            {subjectTitle}
          </h1>
        </div>

        {/* Editor */}
        <div className="p-6">
          <EmailEditor subjectTitle={subjectTitle} />
        </div>
      </div>
    </main>
  );
};

export default Page;