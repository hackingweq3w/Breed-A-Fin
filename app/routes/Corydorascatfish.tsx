"use client";
import React from "react";

export default function CorydorasCatfish() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Corydoras Catfish Breeding Guide - Breed-A-Fin";
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
              Corydoras Catfish Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Corydoras catfish are peaceful, bottom-dwelling fish that breed in groups. They are egg layers, often spawning after cool water changes that simulate the rainy season in their natural habitats.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Breeders</h3>
                <p className="text-white text-sm">
                  Select a healthy group of at least six Corydoras to allow natural pairing and group spawning. Males are slimmer, while females have broader bodies filled with eggs.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition them with sinking pellets and live or frozen foods like bloodworms, daphnia, or tubifex worms to ensure fertile, strong eggs.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 20+ gallon tank with soft sand substrate, gentle filtration, and good aeration (sponge filter recommended). Maintain soft, slightly acidic water (pH 6.5–7.0) at 74–78°F (23–26°C).
                </p>
                <p className="text-white text-sm mt-2">
                  Provide smooth surfaces like glass walls, plants, or spawning mops for egg adhesion. Performing cool water changes can trigger spawning by mimicking rainy conditions.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain 74–78°F (23–26°C), pH 6.5–7.0, and soft water. Keep ammonia and nitrite at 0 ppm and nitrate under 20 ppm. Regular small water changes help maintain ideal conditions for eggs and fry.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Group:</strong> Feed protein-rich foods for at least two weeks.</li>
                  <li><strong>Water Change Trigger:</strong> Perform a 30–50% cool water change to mimic rain.</li>
                  <li><strong>Spawning Behavior:</strong> Males chase females who use the “T-position” to fertilize eggs on surfaces.</li>
                  <li><strong>Egg Removal:</strong> Transfer eggs to a separate tank; adults may eat them.</li>
                  <li><strong>Egg Care:</strong> Provide gentle aeration and optional methylene blue to prevent fungus.</li>
                  <li><strong>Hatching:</strong> Eggs hatch within 3–5 days depending on temperature.</li>
                  <li><strong>Feeding Fry:</strong> Start with infusoria, then microworms and baby brine shrimp.</li>
                  <li><strong>Maintenance:</strong> Keep fry tank clean with small, frequent water changes.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Fungus:</strong> Caused by poor water quality; prevent with methylene blue.</li>
                  <li><strong>Parent Aggression:</strong> Adults may eat eggs; separate them promptly.</li>
                  <li><strong>Weak Fry:</strong> Poor nutrition or unstable water slows growth.</li>
                  <li><strong>Failed Spawning:</strong> Stress or wrong tank conditions can prevent breeding.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Corydoras come in many species and color variations. Select healthy pairs to enhance desired traits, maintain strong genetics, and ensure vibrant, healthy fry.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <div className="mt-10">
              <a
                href="https://youtu.be/03ZDjWXm_lQ?si=Mpud2EyMEsOAHoSx"
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
