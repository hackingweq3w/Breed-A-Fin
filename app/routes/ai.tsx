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

export default function Introduction() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "AI Assistant - Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-white" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-white" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-white" />, href: "/guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-white" />, href: "/ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-white" />, href: "/about" },
  ];  

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        {/* Animated gradient circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Chatbase iframe inside styled container */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-5xl w-full mx-auto px-4">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-green-300/30 shadow-2xl">
          <p className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Breed-A-Fin AI Assistant
            </p>
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/oiAkKE3rzsYRyt9Pmx0lZ"
              width="100%"
              style={{ height: "30vh", minHeight: "600px" }}
              frameBorder="0"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />
    </>
  );
}
