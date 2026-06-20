"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A1628] text-white pt-10 flex flex-col items-center">
      <div className="w-[95%] md:flex m-auto py-5">
        <div className="w-full md:w-[40%] flex flex-col items-center md:items-start">
          <Link href={"/"} className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/logo-monochrome-white (1).svg"
              alt="Sendlyx Logo"
              width={180}
              height={55}
              className="h-12 w-auto object-contain mb-2"
            />
          </Link>
          <p className="text-2xl py-2 text-gray-300 text-center md:text-left">
            Get Sendlyx updates delivered directly to your inbox.
          </p>
          <div className="flex items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full md:w-[50%] border border-gray-500 h-[42px] px-2 rounded rounded-r-[0] outline-none focus:border-[#22D3EE] transition-colors"
            />
            <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-gradient-to-r from-[#22D3EE] to-[#3B82F6] text-white text-xl font-medium outline-none hover:opacity-90 transition-opacity">
              submit
            </button>
          </div>
          <br />
          <p className="text-xs text-gray-500 text-center md:text-left">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </p>
        </div>
        <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
          <div className="md:w-[60%] flex justify-around gap-16">
            <div>
              <h4 className="text-sm font-semibold text-[#22D3EE] uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-3">
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/features">Features</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/dashboard/write">Write</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/dashboard/grow">Grow</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#22D3EE] uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-3">
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/">About</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/">Careers</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/">Contact</Link>
                </li>
                <li className="hover:text-[#22D3EE] transition-all duration-300 transform hover:translate-x-1 cursor-pointer">
                  <Link href="/">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg text-center pb-10 text-gray-400 w-full">
        © 2026 Sendlyx, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
