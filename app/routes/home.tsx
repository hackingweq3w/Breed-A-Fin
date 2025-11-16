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
import { useNavigate } from "react-router";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    document.title = "Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-white" />, href: "home" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-white" />, href: "introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-white" />, href: "guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-white" />, href: "ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-white" />, href: "about" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Green Gradient Background (kept exactly as yours) */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700 z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500 animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500 animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000 animate-float-slow"></div>
        </div>
      </div>

      {/* Fullscreen Vortex Overlay */}
      <Vortex
        backgroundColor="transparent"
        className="absolute inset-0 flex items-center justify-center w-full h-full z-10"
      >
        <div className="text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold drop-shadow-xl animate-fade-in">
            Breed-A-Fin
          </h1>
          <p className="text-white text-base md:text-2xl max-w-2xl mx-auto mt-6 drop-shadow-md animate-fade-in delay-300">
            Your ultimate guide to fish breeding and aquarium care for healthy, thriving aquatic life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-fade-in delay-600">
            <button
              className="px-6 py-3 bg-green-900 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition transform hover:scale-105"
              onClick={() => navigate("introduction")}
            >
              Explore Now
            </button>
          </div>
        </div>
      </Vortex>

      {/* Floating Dock */}
      <FloatingDock
        items={dockItems.map(item => ({
          ...item,
          onClick: () => navigate(item.href),
          className: "transition-transform hover:scale-110 hover:text-green-300",
        }))}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />

      {/* Extra Tailwind Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s forwards;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fade-in.delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}
