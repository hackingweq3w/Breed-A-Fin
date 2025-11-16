"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Molly() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Molly Breeding Guide - Breed-A-Fin";
  }, []);

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
            {/* Main Heading */}
            <p
              className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Molly Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Mollies are live-bearers that tolerate slightly brackish, alkaline water. With stable parameters and good conditioning, they breed readily and produce robust fry.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Molly
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Select active, well-conditioned fish with smooth scales and full bellies. Avoid clamped fins, white spots, or frayed tails. Keep more females than males to reduce stress.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition breeders for 1–2 weeks on a varied diet: quality flakes, algae-based foods, and live/frozen protein (daphnia, brine shrimp). Stable water and ample grazing improve brood size and health.
            </p>

            {/* Tank Setup Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tank Setup
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Use a 20-gallon tank with plants and open swimming space. Maintain alkaline water; optional low salinity (1–2 ppt) benefits some strains but avoid abrupt changes. Keep temperature 75–80°F (24–27°C) with gentle sponge filtration.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Provide hardscape and floating plants for fry refuge. Regular small water changes and good surface agitation help oxygenation without stressing fry.
            </p>

            {/* Steps for Breeding Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Steps for Breeding
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li>
                <strong>Condition Adults:</strong> Feed high-quality flakes, algae-based foods, and live/frozen treats.
              </li>
              <li>
                <strong>Group Ratio:</strong> 1 male with multiple females reduces stress.
              </li>
              <li>
                <strong>Gestation:</strong> Pregnancy typically 28–35 days; females may store sperm for multiple broods.
              </li>
              <li>
                <strong>Provide Cover:</strong> Dense plants protect fry; alternatively use breeder boxes/tanks.
              </li>
              <li>
                <strong>Fry Care:</strong> Feed finely crushed flakes or baby brine shrimp several times daily.
              </li>
              <li>
                <strong>Water Quality:</strong> Frequent small changes; avoid sudden salinity swings.
              </li>
            </ol>

            {/* Button */}
            <div className="mt-10">
              <a
                href="https://youtu.be/SKd-livGtvU?si=vOOu4yzR7HyKNZQH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
              >
                Watch the video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


