"use client";
import React from "react";

export default function Betta() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Betta Breeding Guide - Breed-A-Fin";
  }, []);

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
      <div className="relative z-10 min-h-[160vh] flex items-start justify-center pt-20 md:pt-32 pb-40">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-emerald-400/20 shadow-xl shadow-emerald-900/40">

            {/* TITLE */}
            <p
              className={`text-4xl md:text-6xl font-extrabold text-emerald-300 drop-shadow-[0_0_20px_rgba(0,255,100,0.35)] ${
                animate ? "fade-in-blur" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Betta Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Bettas are bubble-nesters. With proper conditioning, the male builds a nest, guards the eggs, and cares for fry until they are free-swimming. This guide covers tank setup, breeding steps, and caring for fry.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Your Betta Pair</h3>
                <p className="text-white text-sm">
                  Select a healthy male with full fins and vibrant color, and a well-conditioned female. Avoid fish with fin damage, stress, or illness. Observe flaring and courtship behavior to confirm compatibility.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition both for 1–2 weeks with high-quality live or frozen foods, like brine shrimp or daphnia. Maintain stable water temperature for best results.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  A 5–10 gallon tank with a lid is ideal. Use gentle sponge filtration and maintain warm water (78–82°F / 25.5–28°C). Floating plants or a spawning mop support bubble nest building.
                </p>
                <p className="text-white text-sm mt-2">
                  Provide a hiding spot for the female and ensure water is stable to prevent stress and nest disturbance.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Keep temperature 78–82°F (25.5–28°C), pH 6.5–7.5, and soft to moderately hard water. Regular small water changes help maintain water quality and fry survival.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed live/frozen food for 1–2 weeks.</li>
                  <li><strong>Introduce Female:</strong> Use a divider so the male builds a nest first.</li>
                  <li><strong>Spawning:</strong> Remove divider; embrace occurs and eggs are placed in the nest.</li>
                  <li><strong>Remove Female:</strong> After spawning, remove her to prevent stress.</li>
                  <li><strong>Male Guards Eggs:</strong> Male tends the nest for 24–36 hours.</li>
                  <li><strong>Free-Swimming Fry:</strong> When fry are swimming (~2–3 days), remove the male.</li>
                  <li><strong>Feed Fry:</strong> Start with infusoria or liquid fry food, then transition to baby brine shrimp or microworms.</li>
                  <li><strong>Maintain Water:</strong> Frequent small water changes keep fry healthy.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Fungus:</strong> Poor water quality or disturbed nests can lead to fungal growth on eggs.</li>
                  <li><strong>Male Aggression:</strong> Overly aggressive males may harm fry if left too long.</li>
                  <li><strong>Weak Fry:</strong> Insufficient nutrition or poor water quality leads to slow growth.</li>
                  <li><strong>Failed Nesting:</strong> Stress or unstable conditions can prevent bubble nest formation.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Bettas have a variety of colors and tail shapes. Select pairs to enhance desired traits, avoiding inbreeding. Keep track of offspring to maintain vibrant colors, finnage, and overall health.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <div className="mt-10">
              <a
                href="https://youtu.be/4LhnOx_qgF0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-600/40 transition-transform hover:scale-110"
              >
                Watch the Video
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ✨ ANIMATIONS */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }

        @keyframes fade-in-blur {
          0% { opacity: 0; filter: blur(18px); transform: translateY(10px); }
          100% { opacity: 1; filter: blur(0px); transform: translateY(0px); }
        }
        .fade-in-blur { animation: fade-in-blur 1s forwards; }
        .fade-in-blur-delay { animation-delay: 0.3s; }
        .fade-in-blur-delay-2 { animation-delay: 0.6s; }
      `}</style>
    </>
  );
}
