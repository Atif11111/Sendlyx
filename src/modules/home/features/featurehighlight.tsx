"use client";

import Image from "next/image";
import Link from "next/link";

const FeatureHighlight = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-[#F8FAFC] flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header - Centered */}
        <div className="w-full text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/8 border border-[#3B82F6]/15 text-[#3B82F6] text-sm font-semibold mb-6">
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A1628] leading-[1.1] max-w-3xl mx-auto">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Newsletter</span>
          </h2>
        </div>

        {/* Single Feature Row - Centered */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 reveal">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE]/20 to-[#3B82F6]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/homepage/Publish.png"
                alt="Write Without Limits"
                width={600}
                height={400}
                className="relative w-full rounded-2xl shadow-2xl shadow-[#0A1628]/10 group-hover:shadow-[#3B82F6]/20 transition-shadow duration-500"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1628] mb-4 leading-tight">
              Write Without Limits
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-[#3B82F6] mb-4">
              The most powerful editing and design tools in email.
            </p>
            <p className="text-lg text-[#1E3A5F]/60 leading-relaxed mb-8 max-w-lg">
              A writing experience unlike anything you've ever encountered — craft beautiful newsletters with drag-and-drop simplicity.
            </p>
            <Link
              href="/dashboard/write"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#6366F1] bg-[length:200%_auto] animate-gradientShift hover:shadow-xl hover:shadow-[#3B82F6]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Writing
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
