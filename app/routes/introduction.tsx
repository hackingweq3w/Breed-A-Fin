"use client";
import React from "react";
import { BackgroundGradientAnimation } from "components/ui/background-gradient-animation"
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
    { title: "Home", icon: <IconHome className="h-5 w-5 text-white" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-white" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-white" />, href: "/Guide" },
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

      {/* Scrollable content */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-300/30 shadow-2xl">
            <p className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Welcome to Fish Breeding
            </p>
            <p className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
              animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Discover the fascinating world of fish breeding and aquarium care. Learn about different species, breeding techniques, and how to create the perfect environment for your aquatic friends to thrive and reproduce. From understanding water chemistry and temperature control to mastering feeding schedules and tank maintenance, we cover every essential aspect. Explore advanced topics like selective breeding, genetic diversity, and creating optimal spawning conditions. Whether you're interested in livebearers, egg-layers, or rare tropical species, our comprehensive guides will help you succeed in every step of your fish breeding journey.
            </p>

            <div className={`mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              <div className="bg-green-800/20 backdrop-blur-sm rounded-lg p-6 border border-green-300/30">
                <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
                <p className="text-green-100 text-sm">
                  Essential knowledge for beginners: tank setup, water parameters, and choosing your first breeding pair.
                </p>
              </div>
              <div className="bg-green-800/20 backdrop-blur-sm rounded-lg p-6 border border-green-300/30">
                <h3 className="text-xl font-semibold text-white mb-3">Breeding Basics</h3>
                <p className="text-green-100 text-sm">
                  Understanding fish behavior, spawning conditions, and caring for fry during their early development.
                </p>

              </div>
            </div>
            <a
              href="/guide"
              className="inline-flex items-center justify-center mt-10 px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
            >
              Start the Guide
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