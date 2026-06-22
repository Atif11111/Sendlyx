"use client";

import { deleteEmail } from "@/actions/delete.emails";
import { getEmails } from "@/actions/get.emails";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const { user } = useClerk();

  const handleCreate = () => {
    if (!emailTitle.trim()) {
      toast.error("Enter the email subject to continue!");
      return;
    }

    const formattedTitle = emailTitle
      .replace(/\s+/g, "-")
      .replace(/&/g, "-");

    router.push(`/dashboard/email?subject=${formattedTitle}`);
  };

  useEffect(() => {
    if (user?.id) {
      findEmails();
    }
  }, [user]);

  const findEmails = async () => {
    try {
      const res = await getEmails({
        newsLetterOwnerId: user?.id!,
      });

      if (res) {
        setEmails(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id: string) => {
    try {
      await deleteEmail({ emailId: id });
      findEmails();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="animate-fade-in-down">
        <h1 className="text-3xl font-bold text-[#0A1628]">
          Your Emails
        </h1>
        <p className="text-gray-500 mt-1">
          Create and manage your email campaigns
        </p>
      </div>

      <div className="flex flex-wrap gap-5 animate-fade-in-up delay-100">
        {/* Create New Card */}
        <div
          onClick={() => setOpen(true)}
          className="group w-56 h-56 bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-[#22D3EE]/40 shadow-sm hover:shadow-lg hover:shadow-[#22D3EE]/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center hover:-translate-y-1"
        >
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#22D3EE]/20 to-[#3B82F6]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <span className="text-2xl bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
              {ICONS.plus}
            </span>
          </div>

          <h2 className="text-lg font-semibold text-[#0A1628]">
            Create New Email
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Start a new campaign
          </p>
        </div>

        {/* Saved Emails */}
        {emails?.map((email: any) => {
          const formattedTitle = email?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");

          return (
            <div
              key={email?._id}
              className="relative w-56 h-56 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 flex items-center justify-center p-4 hover:-translate-y-1 group"
            >
              <button
                onClick={() => deleteHandler(email?._id)}
                className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                {ICONS.delete}
              </button>

              {/* Gradient accent line */}
              <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <Link
                href={`/dashboard/email?subject=${formattedTitle}`}
                className="text-center text-gray-700 font-medium hover:bg-gradient-to-br hover:from-[#22D3EE] hover:to-[#3B82F6] hover:bg-clip-text hover:text-transparent transition-all duration-200 break-words"
              >
                {email.title}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1628]/60 backdrop-blur-sm px-4 animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#0A1628] transition-colors"
            >
              {ICONS.cross}
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] flex items-center justify-center">
                <span className="text-white text-lg">{ICONS.write}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1628]">
                  Create Email
                </h3>
                <p className="text-sm text-gray-500">
                  Enter a subject for your email campaign
                </p>
              </div>
            </div>

            <input
              type="text"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
              placeholder="Weekly Newsletter"
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50/50 text-[#0A1628] placeholder-gray-400 focus:border-[#22D3EE] focus:ring-2 focus:ring-[#22D3EE]/10 outline-none transition-all duration-200"
            />

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 h-11 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="flex-1 h-11 rounded-xl bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white font-medium hover:shadow-lg hover:shadow-[#22D3EE]/20 transition-all duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;