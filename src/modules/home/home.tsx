"use client";

import Header from "@/shared/widgets/header/header";
import React, { useEffect } from "react";
import Banner from "./features/banner";
import Branding from "./features/branding";
import Benefits from "./features/benefits";
import FeatureHighlights from "./features/featurehighlight";
import Pricing from "./features/pricing";
import Footer from "@/shared/widgets/footer/footer";

const Home = () => {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#F8FAFC] min-h-screen">
      <Header />
      <main className="flex flex-col items-center">
        <Banner />
        <Branding />
        <Benefits />
        <FeatureHighlights />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Home;