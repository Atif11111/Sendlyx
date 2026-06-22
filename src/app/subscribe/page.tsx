"use client";

import { subscribe } from "@/actions/add.subscribe";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import toast from "react-hot-toast";

const SubscribeContent = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const username: string = searchParams.get("username") || "My";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await subscribe({
        email: value,
        username,
      });

      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success("You are successfully subscribed!");
        setValue("");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-3 capitalize">
          {username} Newsletter
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Subscribe to get the latest updates delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4"><p className="text-gray-500">Loading...</p></div>}>
      <SubscribeContent />
    </Suspense>
  );
};

export default Page;
