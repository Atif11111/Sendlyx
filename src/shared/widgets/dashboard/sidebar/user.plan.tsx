import { ICONS } from "@/shared/utils/icons";
import { Slider } from "@nextui-org/slider";
import { useRouter } from "next/navigation";

const UserPlan = () => {
  const router = useRouter();

  // Placeholder data
  const data = [];
  const loading = false;

  const membershipData = {
    plan: "GROW",
    stripeCustomerId: "",
  };

  const membershipLoading = false;

  const handleManage = async () => {
    // Placeholder action
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
    <div className="w-full rounded-xl bg-pink-50 p-4 border border-pink-100 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">
          {membershipLoading ? "..." : membershipData.plan} Plan
        </h5>

        <button
          onClick={handleManage}
          className="flex items-center gap-1 rounded-lg bg-pink-500 px-3 py-2 text-sm text-white hover:bg-pink-600 transition"
        >
          <span>{ICONS.electric}</span>
          <span>Upgrade</span>
        </button>
      </div>

      <p className="text-sm text-pink-800 mb-2">Total Subscribers</p>

      <Slider
        aria-label="Subscribers usage"
        hideThumb
        value={percentage}
        className="mb-2"
      />

      <p className="text-sm text-pink-800">
        {loading ? "..." : totalSubscribers} of {limit.toLocaleString()} added
      </p>
    </div>
  );
};

export default UserPlan;