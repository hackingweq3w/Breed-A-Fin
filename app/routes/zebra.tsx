"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function ZebraDanio() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Zebra Danio Breeding Guide - Breed-A-Fin";
  }, []);

  return (
    <>
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-300/30 shadow-2xl">
            
            {/* Main Heading */}
            <p
              className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Zebra Danio Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate
                  ? "fade-in-blur fade-in-blur-delay"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Zebra Danios are hardy, fast-breeding egg scatterers ideal for beginners. They thrive in groups, spawn readily in cool, oxygen-rich water, and are known for their active nature and striped appearance.
            </p>

            {/* Choosing the Pair */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Breeding Pair
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Choose healthy, mature fish—about 6 months old. Males are slender with brighter stripes, while females appear plumper, especially when filled with eggs. Select active, responsive fish showing courtship behavior like chasing and circling.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition them for 1–2 weeks with high-quality live or frozen foods such as daphnia, mosquito larvae, and brine shrimp. Feed small, frequent meals and maintain stable water to ensure the female produces healthy eggs.
            </p>

            {/* Tank Setup */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tank Setup
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Set up a shallow 10–15 gallon breeding tank with a mesh divider or marbles at the bottom to protect the eggs. Maintain a temperature of 74–78°F (23–26°C), slightly soft water (5–10 dGH), and a neutral pH around 7.0.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Provide gentle aeration, no strong currents, and dim lighting. Add fine-leaved plants or spawning mops for egg deposition. Avoid bright light, as Zebra Danio eggs are light-sensitive.
            </p>

            {/* Breeding Steps */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Steps for Breeding
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li>
                <strong>Introduce the Pair at Night:</strong> Place the conditioned male and female (or a small group of 2 males and 3 females) into the breeding tank in the evening.
              </li>
              <li>
                <strong>Spawning in the Morning:</strong> Spawning usually begins at sunrise. Males chase females, who scatter eggs among plants or over the substrate.
              </li>
              <li>
                <strong>Remove Adults:</strong> Once spawning is complete (after 1–2 hours), remove the adults to prevent them from eating the eggs.
              </li>
              <li>
                <strong>Egg Incubation:</strong> Eggs hatch in about 2–3 days. Keep lighting dim and water gently aerated during this period.
              </li>
              <li>
                <strong>Fry Care:</strong> Fry become free-swimming after another 2–3 days. Start feeding infusoria or commercial liquid fry food several times a day.
              </li>
              <li>
                <strong>Growth:</strong> After one week, introduce microworms or freshly hatched brine shrimp. Maintain excellent water quality with small daily changes.
              </li>
            </ol>

            {/* Button */}
            <a
              href="/guide"
              className="inline-flex items-center justify-center mt-10 px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
            >
              Watch the video
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
