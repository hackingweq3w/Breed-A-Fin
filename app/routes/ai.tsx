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

export default function AiAssistant() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "AI Assistant - Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-emerald-300" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-emerald-300" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-emerald-300" />, href: "/guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-emerald-300" />, href: "/ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-emerald-300" />, href: "/about" },
  ];

  return (
    <>
      {/* 🌑 Dark Emerald Gradient Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a1a0a] to-black">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-emerald-700/40 blur-[150px] rounded-full animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-[900px] h-[900px] bg-emerald-500/40 blur-[130px] rounded-full animate-float-slow delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-[1300px] h-[1300px] bg-emerald-600/40 blur-[150px] rounded-full animate-float-slow delay-700"></div>
        </div>
      </div>

      {/* 📌 AI Assistant Container */}
      <div className="relative z-10 min-h-[130vh] flex items-start justify-center pt-20 md:pt-28 pb-40">
        <div className="w-full max-w-5xl mx-auto px-4">

          <div className="bg-black/40 backdrop-blur-xl border border-emerald-400/25 shadow-xl shadow-emerald-900/50 rounded-2xl p-6 md:p-10">

            {/* Title */}
            <h1
              className={`text-4xl md:text-6xl font-extrabold text-emerald-300 text-center drop-shadow-[0_0_20px_rgba(0,255,130,0.4)] ${
                animate ? "fade-in-blur" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Breed-A-Fin AI Assistant
            </h1>

            {/* Iframe */}
            <div
              className={`mt-8 ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/oiAkKE3rzsYRyt9Pmx0lZ"
                width="100%"
                style={{ height: "30vh", minHeight: "600px" }}
                frameBorder="0"
                className="rounded-xl border border-emerald-300/20 shadow-lg shadow-emerald-800/40 bg-black/30"
              ></iframe>
            </div>

          </div>
        </div>
      </div>

      {/* ⚓ Floating Dock */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />

      {/* ✨ Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        @keyframes fade-in-blur {
          0% {
            opacity: 0;
            filter: blur(15px);
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
        .fade-in-blur {
          animation: fade-in-blur 1s forwards;
        }
        .fade-in-blur-delay {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}
