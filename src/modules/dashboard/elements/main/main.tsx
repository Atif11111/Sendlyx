"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import toast from "react-hot-toast";

import DashboardOverViewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { ICONS } from "@/shared/utils/icons";

const Main = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);

  const subscribeLink = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=${user?.username}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(subscribeLink);
    setCopied(true);
    toast.success("Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="animate-fade-in-down">
        <h1 className="text-3xl font-bold text-[#0A1628]">
          Hi {user?.fullName} <span className="inline-block animate-float">👋</span>
        </h1>
        <p className="text-gray-500 mt-1">
          Here's how your publication is doing.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          <div className="animate-fade-in-up delay-100">
            <DashboardOverViewCard />
          </div>
          <div className="animate-fade-in-up delay-200">
            <SubscribersChart />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Start Writing */}
          <div className="flex justify-end animate-fade-in-up delay-300">
            <Link
              href="/dashboard/write"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#22D3EE]/20 hover:shadow-xl hover:shadow-[#22D3EE]/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-lg transition-transform group-hover:scale-110">
                {ICONS.write}
              </span>
              <span>Start Writing</span>
            </Link>
          </div>

          {/* Resources Card */}
          <div className="card animate-fade-in-up delay-400">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#22D3EE]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <span className="text-sm">{ICONS.copy}</span>
              </div>
              <h3 className="font-semibold text-[#0A1628]">Resources</h3>
            </div>

            <p className="text-sm text-gray-500 mb-3">
              Your subscription page
            </p>

            <div
              onClick={handleCopy}
              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50/50 p-3.5 cursor-pointer hover:border-[#22D3EE]/30 hover:bg-gradient-to-r hover:from-[#22D3EE]/5 hover:to-[#3B82F6]/5 transition-all duration-200"
            >
              <span className="truncate text-sm text-gray-600 group-hover:text-[#0A1628] transition-colors">
                {subscribeLink}
              </span>

              <span className="flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
                <span>{ICONS.copy}</span>
                {copied ? "Copied!" : "Copy"}
              </span>
            </div>
          </div>

          {/* Tutorials Card */}
          <div className="card animate-fade-in-up delay-500">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#22D3EE]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <span className="text-sm">{ICONS.electric}</span>
              </div>
              <h3 className="font-semibold text-[#0A1628]">Tutorials</h3>
            </div>

            <p className="text-sm text-gray-500 mb-5">
              Learn how to use all platform features and grow your newsletter.
            </p>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6366F1]/10 to-[#3B82F6]/10 px-4 py-2.5 text-sm font-medium text-[#6366F1] hover:from-[#6366F1]/20 hover:to-[#3B82F6]/20 transition-all duration-200"
            >
              Explore Tutorials
              <span className="transition-transform group-hover:translate-x-0.5">
                {ICONS.link}
              </span>
            </Link>
          </div>

          {/* Help Card */}
          <div className="card animate-fade-in-up delay-600">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#22D3EE]/20 to-[#3B82F6]/20 flex items-center justify-center">
                <span className="text-sm">?</span>
              </div>
              <h3 className="font-semibold text-[#0A1628]">Need Help?</h3>
            </div>

            <div className="flex flex-col gap-1.5">
              {[
                { label: "Knowledge Base", href: "/" },
                { label: "API Documentation", href: "/" },
                { label: "Blog", href: "/" },
                { label: "FAQ", href: "/" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/30 px-4 py-2.5 hover:border-[#3B82F6]/20 hover:bg-gradient-to-r hover:from-[#3B82F6]/5 hover:to-[#6366F1]/5 transition-all duration-200"
                >
                  <span className="text-sm text-gray-600 group-hover:text-[#0A1628] transition-colors font-medium">
                    {item.label}
                  </span>
                  <span className="text-gray-400 group-hover:text-[#3B82F6] transition-colors">
                    {ICONS.link}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
