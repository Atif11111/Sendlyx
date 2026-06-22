"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ICONS } from "@/shared/utils/icons";

const EmailEditor = dynamic(
  () => import("@/shared/components/edit/email.editor"),
  {
    ssr: false,
  }
);

const EmailContent = () => {
  const searchParams = useSearchParams();

  const subject = searchParams.get("subject") || "";
  const subjectTitle = subject.replace(/-/g, " ");

  return (
    <div className="animate-fade-in space-y-6">
      <div className="animate-fade-in-down">
        <Link
          href="/dashboard/write"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0A1628] transition-colors mb-4"
        >
          <span>{ICONS.backArrow}</span>
          <span>Back to emails</span>
        </Link>
      </div>

      <div className="card animate-fade-in-up delay-100 p-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] flex items-center justify-center">
              <span className="text-white text-sm">{ICONS.write}</span>
            </div>
            <h1 className="text-lg font-bold text-[#0A1628] capitalize">
              {subjectTitle}
            </h1>
          </div>
        </div>

        {/* Editor */}
        <div className="p-6">
          <EmailEditor subjectTitle={subjectTitle} />
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-[50vh]"><p className="text-slate-500">Loading...</p></div>}>
      <EmailContent />
    </Suspense>
  );
};

export default Page;
