"use client";

import React, { useEffect, useState } from "react";
import { FloatingDock } from "components/ui/floating-dock";
import {
  IconHome,
  IconBook2,
  IconBrain,
  IconInfoCircle,
  IconTopologyStar,
} from "@tabler/icons-react";
import { Vortex } from "components/ui/Vortex";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    document.title = "Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-white" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-white" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-white" />, href: "/Guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-white" />, href: "/ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-white" />, href: "/about" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Green Gradient Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700 z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Fullscreen Vortex Overlay */}
      <Vortex
        backgroundColor="transparent"
        className="absolute inset-0 flex items-center justify-center w-full h-full z-10"
      >
        <div className="text-center px-4">
          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Breed-A-Fin
          </h2>
          <p className="text-white text-base md:text-2xl max-w-2xl mx-auto mt-6">
            Your ultimate guide to fish breeding and aquarium care for healthy, thriving aquatic life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Explore Now
            </button>
            
          </div>
        </div>
      </Vortex>

      {/* Floating Dock on Top */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />
    </div>
  );
}
