"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Tetra() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Tetra Breeding Guide - Breed-A-Fin";
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
              Tetra Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Tetras are small, peaceful, schooling fish known for their vibrant colors. Breeding them requires soft, slightly acidic water, careful pair selection, and protection of eggs and fry.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing the Pair */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing the Tetra Pair</h3>
                <p className="text-white text-sm">
                  Select mature, healthy tetras aged 8–12 months. Males are slimmer and more colorful, females are rounder when carrying eggs. Ensure fish are active and free of disease or fin damage.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition the pair or small group for a week on high-protein live foods like daphnia, mosquito larvae, or baby brine shrimp, feeding small amounts multiple times per day.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 10–15 gallon breeding tank. Maintain soft water (1–5 dGH), slightly acidic pH 5.5–6.5, and temperature 25–27°C. Dim lighting and dark substrate reduce stress and egg loss.
                </p>
                <p className="text-white text-sm mt-2">
                  Add fine-leaved plants like Java moss or a spawning mop so eggs can fall through. Gentle aeration helps oxygenate eggs without disturbing them.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 25–27°C (77–80°F), pH 5.5–6.5, hardness 1–5 dGH. Keep ammonia and nitrites at 0 ppm, nitrates below 20 ppm. Stable, clean water is critical for egg and fry survival.
                </p>
              </div>

              {/* Steps for Breeding */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Steps for Breeding</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Introduce Pair at Night:</strong> Add conditioned fish in the evening.</li>
                  <li><strong>Spawning at Dawn:</strong> Males chase females and eggs are scattered among plants or mop.</li>
                  <li><strong>Remove Adults:</strong> After 1–2 hours to prevent egg predation.</li>
                  <li><strong>Egg Care:</strong> Keep tank dark for 24–48 hours; eggs hatch in 24–36 hours.</li>
                  <li><strong>Free-Swimming Fry:</strong> Begin feeding infusoria or liquid fry food after 3–4 days.</li>
                  <li><strong>Growth & Water Changes:</strong> Feed microworms or baby brine shrimp after a week. Maintain clean water with gentle daily changes.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Predation:</strong> Adults may eat eggs if not removed promptly.</li>
                  <li><strong>Water Fluctuations:</strong> Sensitive to pH or temperature swings, leading to poor hatching.</li>
                  <li><strong>Slow Fry Growth:</strong> Inadequate nutrition or poor water quality.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Tetras offer various color morphs (neon, cardinal, glowlight, etc.). Select healthy, vibrant breeders to emphasize color and size. Maintain genetic diversity by rotating breeding stock and avoiding inbreeding.
                </p>
              </div>

              {/* Watch Video Button */}
              <div className="mt-6">
                <a
                  href="https://youtu.be/SKWNyXCxBIk?si=Hk0OX9gTOi8u4qU-"
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
