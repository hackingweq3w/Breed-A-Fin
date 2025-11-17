"use client";
import React from "react";

export default function Guppy() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Guppy Breeding Guide - Breed-A-Fin";
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
              Guppy Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Guppies are colorful, active livebearers that reproduce easily in captivity. Breeding them involves proper selection of males and females, a stable tank environment, and careful care of fry. This guide walks you through every step, from choosing breeders to ensuring healthy offspring.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Your Breeding Guppies</h3>
                <p className="text-white text-sm">
                  Select healthy males with vibrant colors and active behavior. Females should be larger with a rounded belly and gravid spot. Avoid weak or sick individuals to ensure strong fry.
                </p>
              </div>

              {/* Ideal Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Ideal Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a separate breeding tank of at least 10–20 gallons. Include plants or breeding grass for fry to hide. Ensure gentle filtration and stable temperature around 24–28°C (75–82°F).
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 24–28°C (75–82°F), pH 7.0–8.0, and moderate hardness. Regular water changes and avoiding sudden fluctuations are key to healthy fry and adults.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Separate Sexes:</strong> Keep males and females apart until conditioning.</li>
                  <li><strong>Condition Adults:</strong> Feed high-quality live/frozen foods.</li>
                  <li><strong>Introduce Breeding Pair:</strong> Place 1 male with 2–3 females in breeding tank.</li>
                  <li><strong>Gestation:</strong> Females carry fry 21–30 days; monitor gravid spot.</li>
                  <li><strong>Fry Protection:</strong> Provide plants or breeder boxes to protect fry.</li>
                  <li><strong>Feed Fry:</strong> Start with infusoria or liquid fry food, progress to baby brine shrimp.</li>
                  <li><strong>Maintain Water Quality:</strong> Regular water changes and gentle filtration.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Low Fry Survival:</strong> Overcrowding or poor water quality can reduce fry survival.</li>
                  <li><strong>Stress:</strong> Sudden changes in temperature or water parameters stress adults and fry.</li>
                  <li><strong>Weak Fry:</strong> Inadequate nutrition leads to slow growth and deformities.</li>
                  <li><strong>Overbreeding:</strong> Too many fry can cause competition and stunted growth.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Guppies come in many colors and tail shapes. Select breeding pairs to enhance desired traits. Maintain records to avoid inbreeding and ensure vibrant colors and healthy body shapes.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <a
              href="https://www.youtube.com/watch?v=xAqdZh-upho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-10 px-8 py-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 text-black font-semibold shadow-lg shadow-emerald-600/40 transition-transform hover:scale-110"
            >
              Watch the Video
            </a>

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
