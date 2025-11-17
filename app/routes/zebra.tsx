import React from "react";

export async function loader() {
  return null;
}

export default function ZebraDanio() {
  const [animate, setAnimate] = React.useState(false);

  React.useEffect(() => {
    setAnimate(true);
    document.title = "Zebra Danio Breeding Guide - Breed-A-Fin";
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
              Zebra Danio Breeding Guide
            </p>

            {/* DESCRIPTION */}
            <p
              className={`text-white text-base md:text-lg mt-6 leading-relaxed ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-xl translate-y-4"
              }`}
            >
              Zebra Danios are hardy, fast-breeding egg scatterers ideal for beginners. They thrive in groups, spawn readily in cool, oxygen-rich water, and are known for their active nature and striped appearance.
            </p>

            {/* SECTIONS */}
            <div className={`mt-10 grid md:grid-cols-1 gap-6 ${
              animate ? "fade-in-blur fade-in-blur-delay-2" : "opacity-0 blur-xl translate-y-4"
            }`}>

              {/* Choosing the Pair */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Choosing the Breeding Pair</h3>
                <p className="text-white text-sm">
                  Choose healthy, mature fish—about 6 months old. Males are slender with brighter stripes, while females appear plumper, especially when filled with eggs. Select active, responsive fish showing courtship behavior like chasing and circling.
                </p>
                <p className="text-white text-sm mt-2">
                  Condition them for 1–2 weeks with high-quality live or frozen foods such as daphnia, mosquito larvae, and brine shrimp. Feed small, frequent meals and maintain stable water to ensure the female produces healthy eggs.
                </p>
              </div>

              {/* Tank Setup */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Tank Setup</h3>
                <p className="text-white text-sm">
                  Set up a shallow 10–15 gallon breeding tank with a mesh divider or marbles at the bottom to protect the eggs. Maintain a temperature of 74–78°F (23–26°C), slightly soft water (5–10 dGH), and a neutral pH around 7.0.
                </p>
                <p className="text-white text-sm mt-2">
                  Provide gentle aeration, no strong currents, and dim lighting. Add fine-leaved plants or spawning mops for egg deposition. Avoid bright light, as Zebra Danio eggs are light-sensitive.
                </p>
              </div>

              {/* Water Parameters */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Water Parameters</h3>
                <p className="text-white text-sm">
                  Maintain temperature 23–26°C (74–78°F), pH 6.5–7.5, and hardness 5–10 dGH. Keep ammonia and nitrites at 0 ppm, nitrates below 20 ppm. Stable, clean water ensures healthy eggs and fry.
                </p>
              </div>

              {/* Breeding Steps */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Breeding Steps</h3>
                <ol className="text-white text-sm list-decimal list-inside space-y-1">
                  <li><strong>Introduce the Pair at Night:</strong> Place conditioned male and female (or small group) into the breeding tank in the evening.</li>
                  <li><strong>Spawning in the Morning:</strong> Spawning usually occurs at sunrise. Males chase females, scattering eggs among plants or over substrate.</li>
                  <li><strong>Remove Adults:</strong> Remove the adults after 1–2 hours to prevent egg predation.</li>
                  <li><strong>Egg Incubation:</strong> Eggs hatch in 2–3 days. Keep lighting dim and water gently aerated.</li>
                  <li><strong>Fry Care:</strong> Fry are free-swimming after 2–3 days. Feed infusoria or liquid fry food multiple times daily.</li>
                  <li><strong>Growth:</strong> Introduce microworms or freshly hatched brine shrimp after 1 week. Maintain clean water with small daily changes.</li>
                </ol>
              </div>

              {/* Common Problems */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Common Problems</h3>
                <ul className="text-white text-sm list-disc list-inside space-y-1">
                  <li><strong>Egg Predation:</strong> Adults may eat eggs if not removed promptly.</li>
                  <li><strong>Water Fluctuations:</strong> Zebra Danios are sensitive to sudden pH, temperature, or hardness changes, affecting egg hatching.</li>
                  <li><strong>Slow Fry Growth:</strong> Insufficient nutrition or poor water quality can slow fry development.</li>
                </ul>
              </div>

              {/* Selective Breeding & Genetics */}
              <div className="bg-black/30 border border-emerald-300/25 rounded-xl p-6 shadow-lg shadow-emerald-900/50 backdrop-blur-md">
                <h3 className="text-emerald-300 text-xl font-semibold mb-3">Selective Breeding & Genetics</h3>
                <p className="text-white text-sm">
                  Zebra Danios have wild-type stripes and various color morphs (albino, golden, longfin). Select vibrant, healthy breeders for desired traits. Avoid inbreeding by rotating stock and keeping genetic diversity to maintain robust offspring.
                </p>
              </div>

              {/* Watch Video Button */}
              <div className="mt-6">
                <a
                  href="https://youtu.be/2ty2BBQYm0A?si=vUm8xEw6thbbhToM"
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
