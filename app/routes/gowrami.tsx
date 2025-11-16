"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Gourami() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Gourami Breeding Guide - Breed-A-Fin";
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
              Gourami Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Gouramis are labyrinth fish that thrive in calm waters with plenty of plants. With stable conditions and proper diet, they breed successfully and produce healthy fry.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Gourami
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Select healthy, active fish with vibrant colors and no signs of disease. Avoid stressed or damaged fish. A balanced male-to-female ratio improves breeding success.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition breeders for 1–2 weeks on varied foods: high-quality flakes, frozen/live protein like brine shrimp or daphnia, and vegetable matter for plant-eating species.
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
              Use a 20–30 gallon tank with lots of floating and rooted plants. Maintain warm, calm water (78–82°F / 25–28°C) and gentle filtration. Avoid strong currents as labyrinth fish prefer still water.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Provide hiding spots for the female and areas for the male to build bubble nests. Keep water clean with regular small changes.
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
                <strong>Condition Adults:</strong> Feed a varied diet of flakes, live/frozen foods, and vegetables.
              </li>
              <li>
                <strong>Bubble Nest:</strong> Males build bubble nests at the surface for eggs.
              </li>
              <li>
                <strong>Spawning:</strong> Female releases eggs into the nest; male fertilizes them.
              </li>
              <li>
                <strong>Remove Female:</strong> After spawning, remove female to prevent aggression.
              </li>
              <li>
                <strong>Fry Care:</strong> Feed infusoria or finely crushed flakes until large enough for baby brine shrimp.
              </li>
              <li>
                <strong>Maintain Water:</strong> Keep water clean, warm, and calm to support fry survival.
              </li>
            </ol>

            {/* Button */}
            <div className="mt-10">
              <a
                href="https://youtu.be/aTDTxplDyX0?si=4ECKy0gEEdHOteve"
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
