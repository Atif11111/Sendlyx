"use client";

import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { ICONS } from "@/shared/utils/icons";

const DashboardOverViewCard = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();

  const currentMonth =
    subscribersData?.last7Months?.[
      subscribersData.last7Months.length - 1
    ];

  const previousMonth =
    subscribersData?.last7Months?.[
      subscribersData.last7Months.length - 2
    ];

  let comparePercentage = 0;

  if (previousMonth?.count > 0) {
    comparePercentage =
      ((currentMonth.count - previousMonth.count) /
        previousMonth.count) *
      100;
  } else {
    comparePercentage = 100;
  }

  const stats = [
    {
      title: "Subscribers",
      value: loading ? "..." : currentMonth?.count || 0,
      percentage: `${comparePercentage.toFixed(0)}%`,
      positive: true,
    },
    {
      title: "Open Rate",
      value: "0%",
      percentage: "0%",
      positive: false,
    },
    {
      title: "Click Rate",
      value: "0%",
      percentage: "0%",
      positive: false,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, idx) => (
        <div
          key={stat.title}
          className="card animate-fade-in-up"
          style={{ animationDelay: `${idx * 100 + 100}ms` }}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500">
              {stat.title}
            </h3>

            <div
              className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${
                stat.positive
                  ? "bg-[#22D3EE]/10 text-[#22D3EE]"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {stat.positive ? ICONS.topArrow : "-"}
              <span>{stat.percentage}</span>
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-[#0A1628]">
            {stat.value}
          </h2>

          <p className="mt-2 text-xs text-gray-400">
            Compared to last 4 weeks
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverViewCard;