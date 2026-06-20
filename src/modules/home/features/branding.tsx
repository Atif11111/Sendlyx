"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { partners } from "@/app/configs/constants";

const Branding = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center">
      <Marquee className="w-full flex justify-around" speed={40} pauseOnHover>
        {partners.map((i: PartnersTypes) => (
          <Image
            src={i.url}
            key={i.url}
            width={200}
            height={200}
            alt="partner"
            className="md:mx-8 w-[150px] md:w-[180px] mx-3"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;