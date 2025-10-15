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
      {/* Background animation */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        {/* Animated gradient circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-300/30 shadow-2xl">
            
            {/* Main Heading */}
            <p
              className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var text-center ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tetra Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate
                  ? "fade-in-blur fade-in-blur-delay"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tetras are small, schooling egg-scatterers known for their bright colors and peaceful nature. Breeding them successfully requires soft, slightly acidic water, dim lighting, and careful separation of parents after spawning.
            </p>

            {/* Choosing the Breeding Pair */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Tetra Pair
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Select mature, healthy tetras—ideally around 8–12 months old. Males are typically slimmer and more colorful, while females appear rounder when carrying eggs. Ensure both are active and free of diseases or fin damage.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition the pair (or small group) for about a week on high-protein live foods like daphnia, mosquito larvae, and baby brine shrimp. Feed small amounts multiple times daily to prepare them for spawning.
            </p>

            {/* Tank Setup Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tank Setup
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Use a separate 10–15 gallon breeding tank. Keep the water soft (1–5 dGH), slightly acidic (pH 5.5–6.5), and warm (around 77–80°F or 25–27°C). Dim lighting and a dark substrate or black paper under the tank help reduce egg loss to light sensitivity.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Add fine-leaved plants such as Java moss, or use a spawning mop or mesh grid so eggs can fall through, preventing the adults from eating them. Gentle aeration and no filtration during spawning keep the water calm.
            </p>

            {/* Steps for Breeding Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Steps for Breeding
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li>
                <strong>Introduce the Pair at Night:</strong> Add the conditioned male and female (or small group) to the breeding tank in the evening.
              </li>
              <li>
                <strong>Spawning Begins at Dawn:</strong> Tetras usually spawn in the early morning hours. The male will chase the female, and she will scatter eggs among the plants or mop.
              </li>
              <li>
                <strong>Remove Adults:</strong> After spawning (usually lasting 1–2 hours), remove the parents immediately to prevent them from eating the eggs.
              </li>
              <li>
                <strong>Egg Care:</strong> Keep the tank dark for 24–48 hours. Eggs will hatch within 24–36 hours, depending on temperature.
              </li>
              <li>
                <strong>Free-Swimming Fry:</strong> Fry become free-swimming after 3–4 days. At this stage, begin feeding infusoria or liquid fry food several times daily.
              </li>
              <li>
                <strong>Growth and Water Changes:</strong> After a week, start feeding microworms or newly hatched brine shrimp. Maintain clean water with gentle aeration and small daily changes.
              </li>
            </ol>

            {/* Button */}
            <a
              href="/guide"
              className="inline-flex items-center justify-center mt-10 px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
            >
              Watch the video
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
