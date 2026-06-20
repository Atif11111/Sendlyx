"use client";

import React from "react";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Lightning-Fast Editor",
    description: "Write, format, and publish with an editor that feels like magic. Zero lag, pure flow.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Advanced Analytics",
    description: "Track opens, clicks, and subscriber growth with real-time dashboards that give you clarity.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    title: "Subscriber Magnet Tools",
    description: "Built-in referral programs, landing pages, and embeddable forms to grow your list effortlessly.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#22D3EE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Deliverability Engine",
    description: "Industry-leading email deliverability so your messages land in inboxes, not spam folders.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Smart Automations",
    description: "Set up welcome sequences, drip campaigns, and behavioral triggers that run on autopilot.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#6366F1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description: "Invite your team, assign roles, and create together with real-time collaborative editing.",
  },
];

const Benefits = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header - Centered */}
        <div className="w-full text-center mb-16 md:mb-20 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#22D3EE]/8 border border-[#22D3EE]/20 text-[#1E3A5F] text-sm font-semibold mb-6">
            Everything You Need
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1628] leading-[1.1] max-w-3xl mx-auto">
            The Complete Toolkit for{" "}
            <span className="gradient-text">Newsletter Creators</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#1E3A5F]/60 max-w-2xl mx-auto">
            Every tool you need to write, grow, and monetize your audience — all in one beautifully designed platform.
          </p>
        </div>

        {/* Benefits Grid - Centered */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="w-full card group reveal flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#22D3EE]/10 to-[#3B82F6]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[#1E3A5F]/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
