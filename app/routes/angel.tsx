"use client";
import React from "react";

export default function Angelfish() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Angelfish Breeding Guide - Breed-A-Fin";
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
              Angelfish Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Angelfish are graceful freshwater cichlids known for their tall, triangular bodies and strong pair bonds. They are egg-layers that spawn on vertical surfaces and provide excellent parental care.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Breeders</h3>
                <p className="text-white text-sm">
                  Select healthy, mature angelfish that have naturally paired. Forced pairings often fail, as angelfish form bonds through social interaction and territory defense.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition the pair with protein-rich live or frozen foods like bloodworms, brine shrimp, and quality pellets to ensure strong eggs and fry survival.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a tall 20–30 gallon tank with soft, slightly acidic water (pH 6.5–7.0) and temperature 80–82°F (26–28°C). Provide vertical spawning surfaces like broad leaves, slate, or filter pipes.
                </p>
                <p className="text-white text-sm mt-2">
                  Gentle filtration and stable water are vital. A sponge filter protects fry while maintaining oxygenation. Avoid strong currents that may disturb eggs or fry.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 80–82°F (26–28°C), pH 6.5–7.0, and soft water. Regular water changes ensure stable conditions and fry survival.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Pair Formation:</strong> Allow a bonded pair to form naturally before isolation.</li>
                  <li><strong>Conditioning:</strong> Feed high-protein foods and maintain excellent water quality for two weeks.</li>
                  <li><strong>Breeding Tank:</strong> Move the pair to a dedicated breeding tank with vertical spawning surfaces.</li>
                  <li><strong>Spawning:</strong> The pair cleans a surface, lays eggs, and fertilizes them together.</li>
                  <li><strong>Parental Care:</strong> Parents fan and guard the eggs; if they eat them, eggs can be incubated artificially.</li>
                  <li><strong>Hatching:</strong> Eggs hatch in 2–3 days; fry free-swimming after 4–5 days.</li>
                  <li><strong>Feeding Fry:</strong> Start with infusoria or liquid fry food, then baby brine shrimp as they grow.</li>
                  <li><strong>Water Quality:</strong> Keep temperature stable and perform small, frequent water changes.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Fungus:</strong> Poor water quality or stress can lead to fungal growth on eggs.</li>
                  <li><strong>Parent Aggression:</strong> Sometimes parents eat eggs or fry; monitor carefully.</li>
                  <li><strong>Weak Fry:</strong> Insufficient nutrition or unstable water conditions can slow growth.</li>
                  <li><strong>Failed Spawning:</strong> Stress, inappropriate surfaces, or unsuitable water parameters can prevent breeding.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Angelfish come in various colors and patterns. Select pairs carefully to enhance desired traits like marble, veiltail, or koi patterns. Track offspring to maintain strong genetics, color vibrancy, and finnage.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <div className="mt-10">
              <a
                href="https://youtu.be/jgqG6xRUAmg?si=EgVRrFBqO5wzHJvQ"
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
