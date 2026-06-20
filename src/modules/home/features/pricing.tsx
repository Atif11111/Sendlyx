"use client";

import PricingCard from "@/shared/components/cards/pricing.card";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("Monthly");

  return (
    <section
      className="w-full py-24 md:py-32 bg-[#F8FAFC] flex flex-col items-center"
      id="pricing"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Section Header */}
        <div className="w-full text-center mb-12 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/8 border border-[#3B82F6]/15 text-[#3B82F6] text-sm font-semibold mb-6">
            Simple Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1628] leading-[1.1] max-w-3xl mx-auto">
            Choose the{" "}
            <span className="gradient-text">Perfect Plan</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[#1E3A5F]/60 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="w-full flex justify-center mb-14 reveal">
          <div className="inline-flex items-center p-1.5 bg-white rounded-2xl border border-[#0A1628]/6 shadow-sm">
            <button
              onClick={() => setActive("Monthly")}
              className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                active === "Monthly"
                  ? "bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20"
                  : "text-[#1E3A5F] hover:text-[#3B82F6]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setActive("Yearly")}
              className={`px-8 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                active === "Yearly"
                  ? "bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/20"
                  : "text-[#1E3A5F] hover:text-[#3B82F6]"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-[#22D3EE]/20 text-[#3B82F6] px-2 py-0.5 rounded-full font-medium">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <PricingCard active={active} />
      </div>
    </section>
  );
};

export default Pricing;