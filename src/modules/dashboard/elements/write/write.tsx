"use client";

import { deleteEmail } from "@/actions/delete.email";
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

    router.push(`/dashboard/new-email?subject=${formattedTitle}`);
  };

  useEffect(() => {
    if (user?.id) {
      findEmails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const findEmails = async () => {
    try {
      const res = await getEmails({
        newsLetterOwnerId: user?.id!,
      });

      setEmails(res);
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
    <div className="min-h-screen w-full bg-gray-50 p-6">
      <div className="flex flex-wrap gap-5">
        {/* Create New Card */}
        <div
          onClick={() => setOpen(true)}
          className="group w-56 h-56 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col items-center justify-center"
        >
          <span className="text-4xl text-blue-600 mb-3 transition-transform group-hover:scale-110">
            {ICONS.plus}
          </span>

          <h2 className="text-lg font-semibold text-gray-800">
            Create New Email
          </h2>

          <p className="text-sm text-gray-500 mt-1">
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
              className="relative w-56 h-56 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center p-4"
            >
              <button
                onClick={() => deleteHandler(email?._id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                {ICONS.delete}
              </button>

              <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-center text-gray-800 font-medium hover:text-blue-600 transition-colors break-words"
              >
                {email.title}
              </Link>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-6">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
            >
              {ICONS.cross}
            </button>

            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Create Email
            </h3>

            <p className="text-gray-500 mb-5">
              Enter a subject for your email campaign.
            </p>

            <input
              type="text"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
              placeholder="Weekly Newsletter"
              className="w-full h-11 px-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
            />

            <Button
              color="primary"
              className="mt-5 rounded-lg font-medium"
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;