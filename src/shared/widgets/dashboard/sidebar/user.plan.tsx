import { ICONS } from "@/shared/utils/icons";
import { useRouter } from "next/navigation";

const UserPlan = () => {
  const router = useRouter();

  const data = [];
  const loading = false;

  const membershipData = {
    plan: "GROW",
    stripeCustomerId: "",
  };

  const membershipLoading = false;

  const handleManage = async () => {
    router.push("/pricing");
  };

  const totalSubscribers = data.length;

  const limit =
    membershipData.plan === "LAUNCH"
      ? 2500
      : membershipData.plan === "SCALE"
      ? 10000
      : 100000;

  const percentage = Math.min((totalSubscribers / limit) * 100, 100);

  return (
    <div className="rounded-xl bg-gradient-to-br from-[#1E3A5F]/40 to-[#0A1628] border border-[#22D3EE]/10 p-5 transition-all duration-300 hover:border-[#22D3EE]/30 hover:shadow-lg hover:shadow-[#22D3EE]/10 hover:from-[#1E3A5F]/50 hover:to-[#0A1628]/80">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-base font-bold text-gray-200 uppercase tracking-wider">
          {membershipLoading ? "..." : membershipData.plan} Plan
        </h5>

        <button
          onClick={handleManage}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] px-4 py-2 text-sm font-semibold text-white hover:shadow-xl hover:shadow-[#22D3EE]/30 hover:scale-105 transition-all duration-200"
        >
          <span className="text-base">{ICONS.electric}</span>
          <span>Upgrade</span>
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400 font-medium">Subscribers</p>
          <p className="text-sm text-gray-200 font-semibold">
            {loading ? "..." : totalSubscribers.toLocaleString()} / {limit.toLocaleString()}
          </p>
        </div>

        {/* Progress bar */}
        <div className="h-3 w-full rounded-full bg-[#1E3A5F]/50 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] transition-all duration-500 relative"
            style={{ width: `${percentage}%` }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPlan;
