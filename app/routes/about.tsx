"use client";
import React from "react";
import { FloatingDock } from "components/ui/floating-dock";
import {
  IconHome,
  IconBook2,
  IconBrain,
  IconInfoCircle,
  IconTopologyStar
} from "@tabler/icons-react";

export async function loader() {
  return null;
}

export default function About() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "About - Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-emerald-300" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-emerald-300" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-emerald-300" />, href: "/Guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-emerald-300" />, href: "/ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-emerald-300" />, href: "/about" },
  ];

  return (
    <>
      {/* DARK OUTSIDE BACKGROUND */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a1a0a] to-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          
          {/* Soft emerald glowing circles */}
          <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-emerald-700/40 rounded-full blur-[150px] animate-pulse"></div>

          <div className="absolute top-2/3 right-1/3 w-[900px] h-[900px] bg-emerald-500/40 rounded-full blur-[150px] animate-pulse delay-1000"></div>

          <div className="absolute bottom-1/4 left-1/2 w-[1100px] h-[1100px] bg-emerald-600/30 rounded-full blur-[160px] animate-pulse delay-1500"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">

          {/* CARD — DARK GLASS PREMIUM */}
          <div className="
            bg-black/40 
            backdrop-blur-xl 
            rounded-2xl 
            p-8 md:p-12 
            border border-emerald-600/30 
            shadow-[0_0_40px_-10px_rgba(0,255,140,0.4)]
          ">

            {/* TITLE */}
            <p
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-300 inter-var ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              About Breed-A-Fin
            </p>

            {/* DESC */}
            <p
              className={`text-base md:text-lg mt-6 text-emerald-100/90 font-normal inter-var max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Breed-A-Fin is a community-driven hub focused on fish breeding, aquarium care, and
              creating thriving aquatic habitats — combining science with real-world experience.
            </p>

            {/* TWO CARDS */}
            <div
              className={`mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              {/* CARD 1 */}
              <div className="
                bg-emerald-900/20 
                rounded-lg 
                p-6 
                border border-emerald-600/40 
                backdrop-blur-lg
              ">
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">Our Mission</h3>
                <p className="text-emerald-100/80 text-sm">
                  Making fish breeding accessible, ethical, and rewarding through modern guides,
                  science-backed insights, and powerful tools.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="
                bg-emerald-900/20 
                rounded-lg 
                p-6 
                border border-emerald-600/40 
                backdrop-blur-lg
              ">
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">What We Offer</h3>
                <p className="text-emerald-100/80 text-sm">
                  Step-by-step species guides, fry care strategies, water parameter advice,
                  and an AI assistant that helps you plan setups.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="/guide"
              className="
                inline-flex items-center justify-center mt-10 px-6 py-3
                rounded-full
                bg-emerald-600/80 hover:bg-emerald-500
                text-black font-semibold
                shadow-lg shadow-emerald-600/40
                transition-all
              "
            >
              Explore the Guide
            </a>
          </div>
        </div>
      </div>

      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />
    </>
  );
}
