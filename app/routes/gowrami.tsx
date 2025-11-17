"use client";
import React from "react";

export default function Gourami() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Gourami Breeding Guide - Breed-A-Fin";
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
              Gourami Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Gouramis are labyrinth fish that thrive in calm waters with plenty of plants. With stable conditions and proper diet, they breed successfully and produce healthy fry.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Gouramis */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing the Gourami</h3>
                <p className="text-white text-sm">
                  Select healthy, active fish with vibrant colors and no signs of disease. Avoid stressed or damaged fish. A balanced male-to-female ratio improves breeding success.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition breeders for 1–2 weeks on varied foods: high-quality flakes, frozen/live protein like brine shrimp or daphnia, and vegetable matter for plant-eating species.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 20–30 gallon tank with lots of floating and rooted plants. Maintain warm, calm water (78–82°F / 25–28°C) and gentle filtration. Avoid strong currents as labyrinth fish prefer still water.
                </p>
                <p className="text-white text-sm mt-2">
                  Provide hiding spots for the female and areas for the male to build bubble nests. Keep water clean with regular small changes.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain water temperature between 78–82°F (25–28°C), pH 6.0–7.5, and soft to moderately hard water. Keep ammonia and nitrite at 0 ppm and nitrates under 20 ppm. Gentle aeration is sufficient for oxygenation.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed a varied diet of flakes, live/frozen foods, and vegetables.</li>
                  <li><strong>Bubble Nest:</strong> Males build bubble nests at the surface for eggs.</li>
                  <li><strong>Spawning:</strong> Female releases eggs into the nest; male fertilizes them.</li>
                  <li><strong>Remove Female:</strong> After spawning, remove female to prevent aggression.</li>
                  <li><strong>Fry Care:</strong> Feed infusoria or finely crushed flakes until large enough for baby brine shrimp.</li>
                  <li><strong>Maintain Water:</strong> Keep water clean, warm, and calm to support fry survival.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Failure:</strong> Eggs may not hatch if water temperature or pH fluctuates.</li>
                  <li><strong>Male Aggression:</strong> Males may attack females or fry; provide hiding spaces.</li>
                  <li><strong>Fungal Infections:</strong> Poor water quality can lead to fungus on eggs or fry; maintain cleanliness and gentle aeration.</li>
                  <li><strong>Stunted Fry:</strong> Inadequate diet or overcrowding slows growth.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Gouramis come in multiple species and color variations. Selecting strong, healthy pairs enhances desired traits like color, size, and behavior. Regularly rotate breeding stock to maintain genetic diversity and healthy fry.
                </p>
              </div>

              {/* Watch Video Button */}
              <div className="mt-6">
                <a
                  href="https://youtu.be/aTDTxplDyX0?si=4ECKy0gEEdHOteve"
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
