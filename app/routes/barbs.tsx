"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Barbs() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Barbs Breeding Guide - Breed-A-Fin";
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
              Barbs Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Barbs are lively schooling fish that spawn by scattering eggs among plants or over a substrate. They do not care for their eggs, so separating the adults after spawning is essential for fry survival.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing Breeders
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Select healthy, mature barbs around 6–8 months old. Males are usually slimmer with brighter coloration, while females are rounder when filled with eggs. Choose active and disease-free fish for best results.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition breeders with a varied diet rich in live and frozen foods such as bloodworms, daphnia, and brine shrimp. This helps stimulate spawning behavior and ensures better egg production.
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
              Use a separate 15–20 gallon breeding tank with a temperature of 77–80°F (25–27°C) and slightly acidic water (pH 6.5–7.0). Provide fine-leaved plants or a spawning mop for the eggs to fall into, and use a mesh or marbles on the bottom to protect them from being eaten.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Keep the lighting dim, and use gentle aeration. A sponge filter works best for maintaining clean, stable water without harming eggs or fry.
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
                <strong>Condition Adults:</strong> Feed live and frozen foods daily for 1–2 weeks before spawning.
              </li>
              <li>
                <strong>Set Up Breeding Tank:</strong> Prepare a dimly lit tank with plants, spawning mops, or marbles.
              </li>
              <li>
                <strong>Introduce the Pair:</strong> Add one female with one or two males in the evening.
              </li>
              <li>
                <strong>Spawning:</strong> Spawning usually occurs early morning; eggs are scattered over plants or substrate.
              </li>
              <li>
                <strong>Remove Adults:</strong> After spawning, remove the parents immediately to prevent them from eating the eggs.
              </li>
              <li>
                <strong>Egg Care:</strong> Maintain gentle aeration; eggs hatch within 24–48 hours depending on temperature.
              </li>
              <li>
                <strong>Feeding Fry:</strong> Feed infusoria or liquid fry food initially, then baby brine shrimp once free-swimming.
              </li>
              <li>
                <strong>Water Quality:</strong> Keep water clean with small, regular water changes and avoid strong currents.
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
