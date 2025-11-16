"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Betta() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Betta Breeding Guide - Breed‑A‑Fin";
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500" />
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500" />
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>
      </div>

      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-300/30 shadow-2xl">
            <p className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Betta Breeding Guide
            </p>

            <p className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
              animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Bettas are natural bubble-nesters. With proper conditioning, the male builds a bubble nest, and guards the eggs until they hatch and fry become free-swimming.
            </p>

            <h2 className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Choosing the Betta Pair
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Select a healthy, active male with good finnage, and a receptive, well‑conditioned female. Avoid fish with fin damage, signs of stress, or illness. Watching their natural display and flaring can help confirm compatibility.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition both for 1–2 weeks on a varied diet: live or frozen foods like daphnia or brine shrimp plus quality pellets. Maintain stable water parameters and warm temperature.
            </p>

            <h2 className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Tank Setup
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Use a 5–10 gallon tank with a tight lid to preserve humid air. Gentle sponge filtration and warm water (78–82°F / 25.5–28°C) help support nest building.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Add floating plants or a spawning aid to support the bubble nest, and provide a hiding spot for the female. Stable water is essential for successful spawning.
            </p>

            <h2 className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
              animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
            }`}>
              Steps for Natural Breeding
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li><strong>Condition the Pair:</strong> Feed live/frozen food for 1–2 weeks.</li>
              <li><strong>Introduce the Female:</strong> Use a divider or jar so the male builds a nest first.</li>
              <li><strong>Spawn:</strong> Remove the barrier when ready — embrace happens, eggs are released and placed in the nest.</li>
              <li><strong>Remove the Female:</strong> After spawning, remove her to prevent stress or aggression.</li>
              <li><strong>Male Guards:</strong> The male tends the nest and cares for the eggs (usually 24–36 hrs).</li>
              <li><strong>Free‑Swimming Fry:</strong> When fry are free-swimming (~2–3 days), remove the male.</li>
              <li><strong>Feed the Fry:</strong> Start with infusoria or liquid fry food, then you can move to microworms or baby brine shrimp.</li>
              <li><strong>Maintain Water:</strong> Do small, frequent water changes to keep things clean and stable.</li>
            </ol>

            <div className="mt-10">
              <a
                href="https://youtu.be/4LhnOx_qgF0"
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
