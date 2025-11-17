"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Swordtail() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Swordtail Breeding Guide - Breed-A-Fin";
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
              Swordtail Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Swordtails are lively, hardy livebearers with long, sword-shaped tails. Popular in community tanks, they offer a rewarding breeding experience for both beginners and advanced aquarists.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Swordtail */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing the Swordtail</h3>
                <p className="text-white text-sm">
                  Select healthy, active fish free of visible disease. Males have bright colors and sword-like tails; females are larger with a gravid spot when ready to breed. Obtain fish from reputable sources to ensure strong genetics.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a 15–20 gallon tank with plants and open swimming space. Swordtails prefer slightly alkaline water at 24–28°C. Provide hiding spots for fry and maintain stable water quality with filtration and regular changes.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 24–28°C (75–82°F), pH 7.0–8.0, and hardness 10–20 dGH. Keep ammonia and nitrites at 0 ppm and nitrates below 20 ppm. Swordtails tolerate slightly brackish water (up to 1–2 ppt) but prefer stable conditions.
                </p>
              </div>

              {/* Steps for Breeding */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Steps for Breeding</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Separate Males & Females:</strong> Avoid uncontrolled mating until ready.</li>
                  <li><strong>Condition Fish:</strong> Feed high-quality live or frozen foods.</li>
                  <li><strong>Introduce for Breeding:</strong> Place 1 male with 2–3 females and monitor behavior.</li>
                  <li><strong>Provide Hiding Spots:</strong> Dense plants reduce stress and protect fry.</li>
                  <li><strong>Monitor Females:</strong> Gravid females carry fry for 24–30 days.</li>
                  <li><strong>Separate Fry:</strong> Use breeder boxes or heavily planted areas.</li>
                  <li><strong>Feed Fry:</strong> Start with infusoria, then baby brine shrimp or crushed flakes.</li>
                  <li><strong>Maintain Water Quality:</strong> Regular changes and stable conditions are crucial.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Low Fry Survival:</strong> Overcrowding or lack of cover can reduce survival.</li>
                  <li><strong>Stress:</strong> Too many males or sudden water changes stress breeders.</li>
                  <li><strong>Slow Growth:</strong> Inadequate diet stunts fry development.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Swordtails come in multiple color morphs (red, green, veil-tail, etc.). Select robust, healthy breeders to enhance desired traits such as sword length, coloration, and fin shape. Rotate breeding stock to maintain genetic diversity and avoid inbreeding.
                </p>
              </div>

              {/* Watch Video Button */}
              <div className="mt-6">
                <a
                  href="https://youtu.be/xDismEixFjI?si=y6cwcyB1cE-h-kuj"
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
