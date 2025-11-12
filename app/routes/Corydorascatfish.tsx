"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function CorydorasCatfish() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Corydoras Catfish Breeding Guide - Breed-A-Fin";
  }, []);

  return (
    <>
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
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Corydoras Catfish Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Corydoras catfish are peaceful bottom-dwelling fish that breed in groups. They are egg layers, often spawning after cool water changes that simulate the rainy season in their natural habitats.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing Breeders
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Choose a healthy group of at least six Corydoras to allow natural pairing and group spawning behavior. Males are usually slimmer and smaller, while females have broader bodies filled with eggs when ready to spawn.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition them with high-quality sinking pellets and a mix of live or frozen foods like bloodworms, daphnia, and tubifex worms. Good conditioning ensures stronger, more fertile eggs.
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
              Set up a soft, sandy-bottom tank of at least 20 gallons with gentle filtration and good aeration. Use a sponge filter to protect the fry. Maintain soft, slightly acidic water (pH 6.5–7.0) and a temperature of 74–78°F (23–26°C).
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Add smooth surfaces like glass walls, plant leaves, or spawning mops where eggs can adhere. Performing cool water changes often encourages spawning by mimicking rain.
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
                <strong>Condition Group:</strong> Feed a varied, protein-rich diet for at least two weeks.
              </li>
              <li>
                <strong>Water Change Trigger:</strong> Perform a large (30–50%) cool water change to simulate rain and lower temperature slightly.
              </li>
              <li>
                <strong>Spawning Behavior:</strong> Males chase females, who collect sperm in their mouth (T-position) and place eggs on glass or plants.
              </li>
              <li>
                <strong>Egg Removal:</strong> Parents may eat eggs, so transfer them to a separate tank after spawning.
              </li>
              <li>
                <strong>Egg Care:</strong> Use gentle aeration and add a few drops of methylene blue to prevent fungus.
              </li>
              <li>
                <strong>Hatching:</strong> Eggs hatch within 3–5 days depending on temperature.
              </li>
              <li>
                <strong>Feeding Fry:</strong> Start with infusoria or liquid fry food, then offer microworms and baby brine shrimp.
              </li>
              <li>
                <strong>Maintenance:</strong> Keep the fry tank clean with small, frequent water changes.
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
