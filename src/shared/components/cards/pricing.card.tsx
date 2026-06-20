"use client";

import React from "react";
import Link from "next/link";
import { freePlan, GrowPlan, scalePlan } from "@/app/configs/constants";
import { ICONS } from "@/shared/utils/icons";

interface PricingCardProps {
  active: string;
}

const plans = [
  {
    name: "Launch",
    planData: freePlan,
    priceMonthly: 0,
    priceYearly: 0,
    description: "No commitment",
    cta: "Get Started Free",
    href: "/sign-up",
    extra: "30-day free trial of Scale features, then free forever",
    featured: false,
  },
  {
    name: "Grow",
    planData: GrowPlan,
    priceMonthly: 49,
    priceYearly: 42,
    description: "Billed monthly",
    cta: "Start Growing",
    href: "/sign-up",
    extra: "30-day free trial, then billed monthly",
    featured: true,
  },
  {
    name: "Scale",
    planData: scalePlan,
    priceMonthly: 99,
    priceYearly: 84,
    description: "Billed monthly",
    cta: "Start Scaling",
    href: "/sign-up",
    extra: "30-day free trial, then billed monthly",
    featured: false,
  },
];

const PricingCard = ({ active }: PricingCardProps) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto pt-8">
      {plans.map((plan, index) => {
        const price =
          active === "Monthly"
            ? plan.priceMonthly
            : plan.priceYearly;

        const description =
          active === "Monthly"
            ? plan.description
            : "Billed yearly";

        const extra =
          active === "Yearly" && plan.name !== "Launch"
            ? `30-day free trial, then $${plan.priceYearly}/mo billed yearly`
            : plan.extra;

        return (
          <div
            key={index}
            className={`relative group rounded-2xl p-8 flex flex-col transition-all duration-700 ease-out hover:-translate-y-2 reveal ${
              plan.featured
                ? "bg-gradient-to-b from-[#0A1628] to-[#1E3A5F] text-white md:scale-105 shadow-2xl shadow-[#3B82F6]/20 border border-[#3B82F6]/30 z-10"
                : "bg-white border border-[#0A1628]/6 hover:border-[#3B82F6]/20 hover:shadow-2xl hover:shadow-[#0A1628]/10"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white shadow-lg shadow-[#22D3EE]/30 animate-pulse">
                  Most Popular
                </span>
              </div>
            )}

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${
                plan.featured
                  ? "bg-white/10"
                  : "bg-gradient-to-br from-[#22D3EE]/10 to-[#3B82F6]/10"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 36 33"
              >
                <path
                  fill={plan.featured ? "rgba(255,255,255,0.2)" : "#fff"}
                  stroke={plan.featured ? "#22D3EE" : "#3B82F6"}
                  strokeWidth="3"
                  d="M33.398 13.25a6.512 6.512 0 0 1 0 6.5l-4.887 8.487a6.512 6.512 0 0 1-5.643 3.263h-9.736a6.512 6.512 0 0 1-5.643-3.263L2.602 19.75a6.512 6.512 0 0 1 0-6.498l4.887-8.488A6.512 6.512 0 0 1 13.132 1.5h9.736a6.512 6.512 0 0 1 5.643 3.263l4.887 8.488Z"
                />
              </svg>
            </div>

            <h3
              className={`text-2xl font-extrabold mb-6 pb-6 border-b ${
                plan.featured
                  ? "border-white/15"
                  : "border-[#0A1628]/8 text-[#0A1628]"
              }`}
            >
              {plan.name}
            </h3>

            <div
              className={`mb-6 pb-6 border-b ${
                plan.featured
                  ? "border-white/15"
                  : "border-[#0A1628]/8"
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span
                  className={`text-4xl font-extrabold ${
                    plan.featured ? "text-white" : "text-[#0A1628]"
                  }`}
                >
                  {price === 0 ? "$0" : `$${price}`}
                </span>

                {price !== 0 && (
                  <span
                    className={`text-lg ${
                      plan.featured
                        ? "text-white/60"
                        : "text-[#1E3A5F]/50"
                    }`}
                  >
                    /month
                  </span>
                )}
              </div>

              <p
                className={`text-sm mt-1 ${
                  plan.featured
                    ? "text-white/50"
                    : "text-[#1E3A5F]/45"
                }`}
              >
                {description}
              </p>
            </div>

            <div className="flex-1 mb-8">
              <p
                className={`text-sm font-semibold mb-4 ${
                  plan.featured
                    ? "text-white/70"
                    : "text-[#1E3A5F]/60"
                }`}
              >
                {plan.name === "Launch"
                  ? "What's included..."
                  : `Everything in ${
                      plan.name === "Grow" ? "Launch" : "Grow"
                    }, plus...`}
              </p>

              <ul className="space-y-3">
                {plan.planData.map((item: PlanType, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="mt-0.5 flex-shrink-0 text-[#22D3EE] transition-transform duration-300 group-hover/item:scale-125">
                      {ICONS.right}
                    </span>

                    <span
                      className={`text-sm leading-tight ${
                        plan.featured
                          ? "text-white/80"
                          : "text-[#1E3A5F]/70"
                      }`}
                    >
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={plan.href}
              className={`block w-full text-center py-4 rounded-xl font-bold text-base transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white hover:shadow-[#22D3EE]/30"
                  : "bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white hover:shadow-[#3B82F6]/20"
              }`}
            >
              {plan.cta}
            </Link>

            <p
              className={`text-xs text-center mt-4 ${
                plan.featured
                  ? "text-white/40"
                  : "text-[#1E3A5F]/35"
              }`}
            >
              {extra}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCard;