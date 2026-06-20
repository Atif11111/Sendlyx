"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useUser } from "@clerk/nextjs";
import DashboardSidebar from "@/shared/widgets/dashboard/sidebar/dashboard.sidebar";

interface ProviderProps {
  children: ReactNode;
}

export default function Providers({ children }: ProviderProps) {
  const pathname = usePathname();

  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  return pathname !== "/dashboard/new-email" &&
    pathname !== "/" &&
    pathname !== "/sign-up" &&
    pathname !== "/subscribe" &&
    pathname !== "/sign-in" ? (
    <div className="w-full flex">
      <div className="w-[290px] h-screen overflow-y-scroll">
        <DashboardSidebar />
      </div>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}