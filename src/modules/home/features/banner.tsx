"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.svg"
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-[0.06]"
          priority
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#22D3EE] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#6366F1] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '-5s' }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0A1628 1px, transparent 1px), linear-gradient(90deg, #0A1628 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative SVG element - top right */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="180"
        fill="none"
        className="absolute top-10 right-10 md:top-20 md:right-20 opacity-20 animate-spin-slow"
        viewBox="0 0 214 214"
      >
        <path
          fill="#22D3EE"
          stroke="#3B82F6"
          strokeWidth="1.5"
          d="M177.711 31.85c2.435-2.017 5.683 1.232 3.667 3.666L136.329 89.9c-2.359 2.848-.567 7.175 3.115 7.52l70.309 6.601c3.148.296 3.148 4.89 0 5.185l-70.309 6.601c-3.682.346-5.474 4.673-3.115 7.521l45.049 54.383c2.016 2.435-1.232 5.683-3.667 3.667l-54.383-45.049c-2.848-2.359-7.175-.567-7.521 3.115l-6.601 70.309c-.295 3.148-4.889 3.148-5.185 0l-6.6-70.309c-.346-3.682-4.673-5.474-7.521-3.115l-54.384 45.049c-2.434 2.016-5.683-1.232-3.666-3.667l45.048-54.383c2.36-2.848.568-7.175-3.115-7.521l-70.309-6.601c-3.147-.295-3.147-4.889 0-5.185l70.31-6.6c3.681-.346 5.474-4.673 3.114-7.521L31.85 35.516c-2.017-2.434 1.232-5.683 3.666-3.666L89.9 76.898c2.848 2.36 7.175.568 7.52-3.115l6.601-70.309c.296-3.147 4.89-3.147 5.185 0l6.601 70.31c.346 3.681 4.673 5.474 7.521 3.114l54.383-45.048Z"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Badge */}
          <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/8 border border-[#3B82F6]/15 text-[#3B82F6] text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22D3EE]" />
            </span>
            Now in Public Beta — No Credit Card Required
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-in-up max-w-5xl text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-[#0A1628]">
            Turn Casual Readers Into
            <br />
            <span className="gradient-text">Loyal Subscribers</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-in max-w-2xl text-lg sm:text-xl md:text-2xl text-[#1E3A5F]/80 font-medium leading-relaxed delay-200">
            The all-in-one newsletter platform crafted by creators who've
            built audiences of millions. No complexity, just growth.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4 mt-4 delay-400">
            <Link
              href="/sign-up"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold text-white overflow-hidden shadow-2xl shadow-[#3B82F6]/30 hover:shadow-[#22D3EE]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#6366F1] bg-[length:200%_100%] animate-gradientShift" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">Launch Your Newsletter</span>
              <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <Link
              href="/features"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl text-lg font-bold text-[#3B82F6] border-2 border-[#3B82F6]/20 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Features
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Trust signal */}
          <div className="animate-fade-in flex flex-col items-center gap-3 mt-4 delay-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#22D3EE] to-[#3B82F6] ring-2 ring-[#F8FAFC] flex items-center justify-center text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-[#1E3A5F]/60 font-medium">
                Joined by 2,400+ creators this week
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-[#1E3A5F]/50">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#22D3EE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free 30-day trial
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#22D3EE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-[#22D3EE]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default Banner;