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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl bg-[#0A1628] border border-[#22D3EE]/20 shadow-xl px-4 py-3">
        <p className="text-white text-sm font-medium">{label}</p>
        <p className="text-[#22D3EE] text-lg font-bold">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const SubscribersChart = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();

  const data =
    subscribersData?.last7Months?.map((item: any) => ({
      month: item.month,
      count: Number(item.count),
    })) || [];

  const latestCount = data[data.length - 1]?.count || 0;

  return (
    <div className="card h-[420px] animate-fade-in-up">
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-gray-500">Active Subscribers</p>
        <h2 className="text-3xl font-bold bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] bg-clip-text text-transparent">
          {loading ? "..." : latestCount.toLocaleString()}
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Last 7 months subscriber growth
        </p>
      </div>

      {loading ? (
        <div className="h-[280px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-[#22D3EE] border-t-transparent animate-spin" />
            <span className="text-sm text-gray-400">Loading chart...</span>
          </div>
        </div>
      ) : data.length === 0 ? (
        <div className="h-[280px] flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-gray-400">No subscriber data yet</p>
            <p className="text-xs text-gray-500 mt-1">
              Data will appear once you have subscribers
            </p>
          </div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height="75%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#22D3EE" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="count"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{ r: 4, fill: "#22D3EE", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 6, fill: "#3B82F6", strokeWidth: 2, stroke: "#fff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SubscribersChart;