"use client";
import React from "react";

export default function Barbs() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Barbs Breeding Guide - Breed-A-Fin";
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
              Barbs Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Barbs are lively schooling fish that spawn by scattering eggs among plants or over a substrate. They do not care for their eggs, so separating the adults after spawning is essential for fry survival.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Breeders</h3>
                <p className="text-white text-sm">
                  Select healthy, mature barbs around 6–8 months old. Males are slimmer with brighter colors, while females are rounder when filled with eggs.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition breeders with live or frozen foods like bloodworms, daphnia, and brine shrimp to stimulate spawning and ensure better egg production.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 15–20 gallon breeding tank at 77–80°F (25–27°C) with slightly acidic water (pH 6.5–7.0). Provide fine-leaved plants or spawning mops, and protect eggs using mesh or marbles on the bottom.
                </p>
                <p className="text-white text-sm mt-2">
                  Keep lighting dim and use gentle aeration. A sponge filter works best for clean water without harming eggs or fry.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature at 77–80°F (25–27°C), pH 6.5–7.0, and soft to moderately hard water. Keep ammonia and nitrite levels at 0 ppm and nitrate under 20 ppm.
                </p>
                <p className="text-white text-sm mt-2">
                  Regular small water changes (20–25% every 2–3 days) ensure stable conditions for eggs and fry survival.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed live and frozen foods daily for 1–2 weeks before spawning.</li>
                  <li><strong>Set Up Breeding Tank:</strong> Prepare a dimly lit tank with plants, spawning mops, or marbles.</li>
                  <li><strong>Introduce the Pair:</strong> Add one female with one or two males in the evening.</li>
                  <li><strong>Spawning:</strong> Eggs are scattered over plants or substrate, usually in the morning.</li>
                  <li><strong>Remove Adults:</strong> Remove parents immediately after spawning to prevent egg predation.</li>
                  <li><strong>Egg Care:</strong> Maintain gentle aeration; eggs hatch within 24–48 hours.</li>
                  <li><strong>Feeding Fry:</strong> Start with infusoria or liquid fry food, then baby brine shrimp once free-swimming.</li>
                  <li><strong>Water Quality:</strong> Keep water clean with small, regular changes; avoid strong currents.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Fungus:</strong> Poor water quality can lead to fungal growth on eggs.</li>
                  <li><strong>Parent Aggression:</strong> Adults may eat eggs; monitor closely.</li>
                  <li><strong>Weak Fry:</strong> Insufficient nutrition or unstable water can slow growth.</li>
                  <li><strong>Failed Spawning:</strong> Stress or improper tank setup can prevent breeding.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Barbs come in many colors and patterns. Select pairs to enhance desired traits, monitor offspring for quality, and maintain strong genetics and vibrant coloration.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <div className="mt-10">
              <a
                href="https://youtu.be/tQkYMIuqx-g?si=aN0E7d4gDiYFs30j"
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
