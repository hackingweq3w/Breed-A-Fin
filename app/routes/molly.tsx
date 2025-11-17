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
              Molly Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Mollies are live-bearers that tolerate slightly brackish, alkaline water. With stable parameters and good conditioning, they breed readily and produce robust fry.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Molly */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing the Molly</h3>
                <p className="text-white text-sm">
                  Select active, well-conditioned fish with smooth scales and full bellies. Avoid clamped fins, white spots, or frayed tails. Keep more females than males to reduce stress.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition breeders for 1–2 weeks on a varied diet: quality flakes, algae-based foods, and live/frozen protein (daphnia, brine shrimp). Stable water and ample grazing improve brood size and health.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 20-gallon tank with plants and open swimming space. Maintain alkaline water; optional low salinity (1–2 ppt) benefits some strains but avoid abrupt changes. Keep temperature 75–80°F (24–27°C) with gentle sponge filtration.
                </p>
                <p className="text-white text-sm mt-2">
                  Provide hardscape and floating plants for fry refuge. Regular small water changes and good surface agitation help oxygenation without stressing fry.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 75–80°F (24–27°C), pH 7.0–8.5, and moderate hardness (10–25 dGH). Keep ammonia and nitrite at 0 ppm and nitrates below 20 ppm. Slightly brackish conditions (1–2 ppt) are tolerated by some strains.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Steps for Breeding</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed high-quality flakes, algae-based foods, and live/frozen treats.</li>
                  <li><strong>Group Ratio:</strong> 1 male with multiple females reduces stress.</li>
                  <li><strong>Gestation:</strong> Pregnancy typically 28–35 days; females may store sperm for multiple broods.</li>
                  <li><strong>Provide Cover:</strong> Dense plants protect fry; alternatively use breeder boxes/tanks.</li>
                  <li><strong>Fry Care:</strong> Feed finely crushed flakes or baby brine shrimp several times daily.</li>
                  <li><strong>Water Quality:</strong> Frequent small changes; avoid sudden salinity swings.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Low Fry Survival:</strong> Overcrowding or lack of cover can reduce survival rates.</li>
                  <li><strong>Stress:</strong> Too many males or sudden water changes can stress breeders.</li>
                  <li><strong>Fungal Infection:</strong> Eggs or fry may develop fungus in poor water conditions.</li>
                  <li><strong>Slow Growth:</strong> Insufficient or inappropriate diet stunts fry development.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Mollies exist in multiple strains (black, sailfin, dalmatian, etc.). Select strong, healthy pairs to enhance desired traits such as color, fin shape, and size. Rotate breeding stock to maintain genetic diversity and avoid inbreeding.
                </p>
              </div>

              {/* Watch Video Button */}
              <div className="mt-6">
                <a
                  href="https://youtu.be/SKd-livGtvU?si=vOOu4yzR7HyKNZQH"
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
