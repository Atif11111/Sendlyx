"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import toast from "react-hot-toast";
import { Button } from "@nextui-org/react";

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

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">
          Hi {user?.fullName} 👋
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Here's how your publication is doing.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          <DashboardOverViewCard />
          <SubscribersChart />
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {/* Start Writing */}
          <div className="flex justify-end">
            <Button className="bg-black text-white">
              {ICONS.write}
              <span className="ml-2">Start Writing</span>
            </Button>
          </div>

          {/* Resources */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Resources</h3>

            <p className="text-sm text-gray-500 mb-2">
              Your subscription page
            </p>

            <div
              onClick={handleCopy}
              className="flex items-center justify-between rounded-lg border p-3 cursor-pointer hover:bg-gray-50"
            >
              <span className="truncate text-sm">
                {subscribeLink}
              </span>

              <span className="flex items-center gap-1 text-sm font-medium">
                {ICONS.copy}
                {copied ? "Copied" : "Copy"}
              </span>
            </div>
          </div>

          {/* Tutorials */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-2">Tutorials</h3>

            <p className="text-sm text-gray-500 mb-4">
              Learn how to use all platform features and grow your newsletter.
            </p>

            <Button className="bg-pink-100 text-pink-700">
              Tutorials {ICONS.link}
            </Button>
          </div>

          {/* Help */}
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold mb-3">Need Help?</h3>

            <div className="flex flex-col gap-2">
              {[
                "Knowledge Base",
                "API Documentation",
                "Blog",
                "FAQ",
              ].map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="flex items-center justify-between rounded-lg border px-3 py-2 hover:bg-gray-50"
                >
                  <span className="text-sm">{item}</span>
                  {ICONS.link}
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