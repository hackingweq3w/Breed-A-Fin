"use client";
import React from "react";
import { FloatingDock } from "components/ui/floating-dock";
import {
  IconHome,
  IconBook2,
  IconBrain,
  IconInfoCircle,
  IconTopologyStar,
} from "@tabler/icons-react";

export async function loader() {
  return null;
}

export default function Introduction() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Introduction - Breed-A-Fin";
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
      {/* 🌑 DARK EMERALD BACKGROUND */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a1a0a] to-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-emerald-700/40 rounded-full blur-[150px] animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-emerald-600/40 rounded-full blur-[150px] animate-float-slow delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-emerald-500/35 rounded-full blur-[150px] animate-float-slow delay-300"></div>
        </div>
      </div>

      {/* 📜 CONTENT */}
      <div className="relative z-10 min-h-[140vh] flex items-start justify-center pt-20 md:pt-32 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-emerald-400/20 shadow-xl shadow-emerald-900/40">

            {/* TITLE */}
            <p
              className={`text-4xl md:text-6xl font-extrabold text-emerald-300 drop-shadow-[0_0_20px_rgba(0,255,100,0.35)] ${
                animate ? "fade-in-blur" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Introduction to Fish Breeding
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Explore the amazing world of fish breeding! Learn how to create the perfect aquarium
              environment, understand breeding behavior, and raise healthy fry. From tank setup and
              water chemistry to advanced genetics and selective breeding — everything is covered in a
              simple, beginner-friendly way.
            </p>

            {/* FEATURE GRID */}
            <div
              className={`mt-10 grid md:grid-cols-2 gap-6 ${
                animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Getting Started</h3>
                <p className="text-white text-sm">
                  Learn tank setup, parameters, cycling, and how to pick your first breeding pair.
                </p>
              </div>

              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Basics</h3>
                <p className="text-white text-sm">
                  Understand spawning behavior, fry care, and how to increase breeding success.
                </p>
              </div>
            </div>

            {/* START GUIDE BUTTON */}
            <a
              href="/guide"
              className="inline-flex items-center justify-center mt-10 px-8 py-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-600/40 transition-transform hover:scale-110"
            >
              Start the Guide
            </a>

          </div>
        </div>
      </div>

      {/* ⚓ FLOATING DOCK */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />

      {/* ✨ EXTRA ANIMATIONS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-25px);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        @keyframes fade-in-blur {
          0% {
            opacity: 0;
            filter: blur(18px);
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
            transform: translateY(0px);
          }
        }

        .fade-in-blur {
          animation: fade-in-blur 1s forwards;
        }

        .fade-in-blur-delay {
          animation-delay: 0.3s;
        }

        .fade-in-blur-delay-2 {
          animation-delay: 0.6s;
        }
      `}</style>
    </>
  );
}
