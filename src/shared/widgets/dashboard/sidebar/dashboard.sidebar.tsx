"use client";

import DashboardItems from "./dashboard.items";
import UserPlan from "./user.plan";

const DashboardSideBar = () => {
  return (
    <div className="h-full bg-[#0A1628] flex flex-col">
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-[#1E3A5F]/30">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <span className="text-white text-2xl font-bold tracking-tight">
          Sendlyx
        </span>
      </div>

      {/* Navigation - takes ~75% of space */}
      <div className="flex-[3] overflow-y-auto px-4 py-6 space-y-8">
        <DashboardItems />
        <UserPlan />
      </div>

      {/* Bottom Section - takes ~25% of space */}
      <div className="flex-1 border-t border-[#1E3A5F]/30 px-4 py-5 flex items-end">
        <DashboardItems bottomContent />
      </div>
    </div>
  );
};

export default DashboardSideBar;
