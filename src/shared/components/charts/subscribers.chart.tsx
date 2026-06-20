"use client";

import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const SubscribersChart = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();

  const data =
    subscribersData?.last7Months?.map((item) => ({
      month: item.month,
      count: Number(item.count),
    })) || [];

  const latestCount = data[data.length - 1]?.count || 0;

  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm h-[420px]">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Active Subscribers</p>
        <h2 className="text-3xl font-bold text-gray-900">
          {latestCount.toLocaleString()}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Last 7 months subscriber growth
        </p>
      </div>

      {loading ? (
        <div className="h-[280px] flex items-center justify-center text-gray-500">
          Loading...
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="75%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="count"
              stroke="#EC4899"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SubscribersChart;