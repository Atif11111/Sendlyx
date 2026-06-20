"use client";

import { ICONS } from "@/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import DashboardItems from "./dashboard.items";
import UserPlan from "./user.plan";

const DashboardSideBar = () => {
  const { user } = useUser();

  return (
    <div className="p-4">
      <div className="flex items-center gap-2 rounded-md bg-gray-100 p-3">
        <span className="text-xl">{ICONS.home}</span>
        <h5 className="capitalize">
          {user?.username} Newsletter
        </h5>
      </div>

      <div className="mt-4">
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent />
      </div>
    </div>
  );
};

export default DashboardSideBar;