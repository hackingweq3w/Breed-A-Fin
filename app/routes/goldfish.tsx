"use client";
import React from "react";

export default function Goldfish() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Goldfish Breeding Guide - Breed-A-Fin";
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
              Goldfish Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Goldfish are hardy, long-lived, and beautiful aquarium fish. With proper care and attention to water quality, breeding goldfish can be a rewarding experience. This guide covers everything from selecting breeders to fry care.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Your Breeding Goldfish</h3>
                <p className="text-white text-sm">
                  Select healthy, mature goldfish with vibrant colors and smooth scales. Males develop small white breeding tubercles on gill covers and fins, while females appear fuller due to eggs. Avoid weak or sick individuals.
                </p>
              </div>

              {/* Ideal Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Ideal Tank Setup</h3>
                <p className="text-white text-sm">
                  Use a separate shallow tank for breeding. Keep the bottom bare for easy egg collection. Spawning mops or soft plants gently hold eggs.
                </p>
                <p className="text-white text-sm mt-2">
                  Maintain gentle aeration and stable water temperature. Slightly cooler water initially stimulates egg and sperm readiness.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature at <strong>20–24°C (68–75°F)</strong>, pH <strong>7.0–8.0</strong>, and moderate hardness. Perform regular water changes and avoid sudden fluctuations to reduce stress.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed high-quality protein foods, live/frozen foods, and vegetables.</li>
                  <li><strong>Collect Eggs:</strong> Gently strip eggs from females into a clean container.</li>
                  <li><strong>Collect Sperm:</strong> Gently strip milt from males into a separate container.</li>
                  <li><strong>Fertilize:</strong> Mix eggs and sperm carefully to ensure proper fertilization.</li>
                  <li><strong>Transfer Eggs:</strong> Place fertilized eggs onto spawning mops or plants in a hatching tank.</li>
                  <li><strong>Hatch & Care:</strong> Eggs hatch in 4–7 days. Remove unfertilized or dead eggs to prevent fungus. Feed fry small meals like infusoria or baby brine shrimp.</li>
                  <li><strong>Maintain Water Quality:</strong> Frequent small water changes and gentle aeration are key.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Low Fertilization:</strong> Often due to poorly conditioned breeders or insufficient milt.</li>
                  <li><strong>Fungal Growth:</strong> Remove dead eggs promptly; keep water clean.</li>
                  <li><strong>Weak Fry:</strong> Caused by inadequate nutrition or improper water conditions.</li>
                  <li><strong>Overcrowding:</strong> Too many eggs or fry can lead to stunted growth.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Goldfish come in many varieties: comet, fantail, ryukin, oranda, and more. Select breeding pairs to enhance desired traits. Keep records of lineage to avoid inbreeding and maintain strong colors and healthy body shapes.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <a
              href="https://www.youtube.com/watch?v=c_XnMwhAI4I"
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
