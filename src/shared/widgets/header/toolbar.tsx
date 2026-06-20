"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const Toolbar = () => {
  const { user } = useUser();

  return (
    <>
      <Link
        href="/sign-up"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base text-white bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#6366F1] bg-[length:200%_auto] hover:shadow-lg hover:shadow-[#3B82F6]/25 hover:-translate-y-0.5 transition-all duration-300"
      >
        Start Free Trial
      </Link>
      {user ? (
        <Link href="/dashboard" className="flex-shrink-0">
          <Image
            src={user?.imageUrl}
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full ring-2 ring-[#3B82F6]/20 hover:ring-[#3B82F6] transition-all duration-300"
          />
        </Link>
      ) : (
        <Link
          href="/sign-in"
          className="text-[15px] font-medium text-[#1E3A5F] hover:text-[#3B82F6] transition-colors duration-300"
        >
          Sign In
        </Link>
      )}
    </>
  );
};

export default Toolbar;