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
    { title: "Home", icon: <IconHome className="h-5 w-5 text-emerald-300" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-emerald-300" />, href: "introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-emerald-300" />, href: "guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-emerald-300" />, href: "ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-emerald-300" />, href: "about" },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🌑 DARK EMERALD GRADIENT BACKGROUND */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a1a0a] to-black z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">

          {/* Emerald glow nebula effects */}
          <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-emerald-700/40 rounded-full blur-[150px] animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-[900px] h-[900px] bg-emerald-500/45 rounded-full blur-[150px] animate-float-slow delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-emerald-600/35 rounded-full blur-[160px] animate-float-slow delay-300"></div>
        </div>
      </div>

      {/* 🌪 VORTEX EFFECT */}
      <Vortex
        backgroundColor="transparent"
        className="absolute inset-0 flex items-center justify-center w-full h-full z-10"
      >
        <div className="text-center px-4">

          {/* MAIN TITLE */}
          <h1 className="text-emerald-300 text-5xl md:text-7xl font-extrabold drop-shadow-[0_0_30px_rgba(0,255,150,0.4)] animate-fade-in">
            Breed-A-Fin
          </h1>
          
 


          {/* SUBTEXT */}
          <p className="text-white text-base md:text-2xl max-w-2xl mx-auto mt-6 drop-shadow-[0_0_15px_rgba(0,255,140,0.3)] animate-fade-in delay-300 ">
          <b>Your ultimate guide to fish breeding<br />
          and aquarium care, crafted for thriving aquatic life.</b>
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 animate-fade-in delay-600">
            <button
              className="
                px-6 py-3 
                bg-emerald-600/80 
                hover:bg-emerald-500 
                text-black 
                font-semibold 
                rounded-xl 
                shadow-lg shadow-emerald-600/40 
                transition-transform 
                hover:scale-110
              "
              onClick={() => navigate("introduction")}
            >
              Explore Now
            </button>
          </div>
        </div>
      </Vortex>

      {/* ⚓ FLOATING DOCK */}
      <FloatingDock
        items={dockItems.map(item => ({
          ...item,
          onClick: () => navigate(item.href),
          className: "transition-transform hover:scale-110 hover:text-emerald-300",
        }))}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />

      {/* 🌬 EXTRA ANIMATIONS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s forwards;
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
