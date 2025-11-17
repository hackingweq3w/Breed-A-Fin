"use client";
import React from "react";
import {
  IconHome,
  IconBook2,
  IconBrain,
  IconInfoCircle,
  IconTopologyStar,
} from "@tabler/icons-react";

export default function Platy() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Platy Breeding Guide - Breed-A-Fin";
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
              Platy Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Platies are colorful, hardy livebearers, ideal for beginners. With proper care, breeding platies is simple and rewarding. This guide covers everything: selecting breeders, tank setup, water parameters, breeding tips, fry care, and genetics.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing Breeders */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing Your Breeding Platies</h3>
                <p className="text-white text-sm">
                  Select active, healthy fish with smooth scales, clear eyes, and no signs of disease. Avoid thin or lethargic individuals. Males have a narrow, pointed anal fin called a <strong>gonopodium</strong>, while females have a fan-shaped anal fin and rounder belly.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Ideal Tank Setup</h3>
                <p className="text-white text-sm">
                  A 15–20 gallon tank is ideal for a small breeding group. Add dense plants, moss, or breeding grass to give fry hiding spots. Use gentle filtration (sponge filter recommended) to prevent fry from being sucked in.
                </p>
                <p className="text-white text-sm mt-2">
                  Include driftwood or smooth rocks to mimic natural habitats. Bright lighting encourages plant growth but avoid overexposure to reduce stress.
                </p>
              </div>

              {/* Water Conditions */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature at <strong>22–26°C (72–78°F)</strong>, pH <strong>7.2–8.0</strong>, and soft-to-moderate hardness. Perform regular small water changes (20–25% weekly) and avoid sudden fluctuations to prevent stress.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Condition Adults:</strong> Feed high-quality flakes, vegetables, frozen/live foods.</li>
                  <li><strong>Maintain Proper Ratio:</strong> 1 male per 2–3 females minimizes stress.</li>
                  <li><strong>Provide Hiding Spots:</strong> Plants protect fry from adults.</li>
                  <li><strong>Monitor Pregnancy:</strong> Females develop a dark gravid spot and rounded belly.</li>
                  <li><strong>Birth:</strong> Use breeding boxes if needed or ensure dense plants.</li>
                  <li><strong>Feed Fry:</strong> Powdered fry food, baby brine shrimp, or crushed flakes several times daily.</li>
                  <li><strong>Maintain Water Quality:</strong> Small, frequent water changes help fry thrive.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Fry Predation:</strong> Adults may eat fry if plants are sparse.</li>
                  <li><strong>Overcrowding:</strong> Can reduce growth and stress fish.</li>
                  <li><strong>Water Fluctuations:</strong> Sudden pH or temp changes can cause illness.</li>
                  <li><strong>Disease:</strong> Watch for fungal infections, fin rot, and parasites.</li>
                </ul>
              </div>

              {/* Genetics Tips */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Platies come in many color morphs: red, yellow, blue, variegated, and more. Select breeding pairs to enhance desired traits. Keep detailed records of lineage to avoid inbreeding and maintain vibrant colors.
                </p>
              </div>

            </div>

            {/* WATCH VIDEO BUTTON */}
            <a
              href="https://www.youtube.com/watch?v=Hj5VRTnLC9I"
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
