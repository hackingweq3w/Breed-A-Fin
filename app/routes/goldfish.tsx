"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Goldfish() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Goldfish Breeding Guide - Breed-A-Fin";
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
              Goldfish Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Goldfish are oviparous, egg-scattering fish. Spawning is seasonal and responds to temperature and photoperiod changes, with adults dispersing adhesive eggs over plants or mops.
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
              Select mature, healthy fish that exhibit the traits you wish to propagate (body shape, finnage, coloration). During breeding season, males often show breeding tubercles; females appear fuller with ripening eggs.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition breeders on a rich, varied diet: quality pellets, gel foods, live/frozen protein (brine shrimp, bloodworms), and vegetable matter (peas, spinach). Good conditioning improves egg viability and spawning vigor.
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
              Use a spacious tank with robust aeration and multiple spawning mops/plants to catch adhesive eggs. Maintain excellent filtration but diffuse currents to avoid egg damage.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Simulate spring by offering a cool period (mid 60s°F / ~18–19°C), then gradually warming to low 70s°F (~21–22°C) while increasing daylight. Stable, clean water and oxygenation are critical for egg development.
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
                <strong>Condition Adults:</strong> High-quality diet with greens and protein-rich foods.
              </li>
              <li>
                <strong>Temperature Cue:</strong> Provide cooler period, then gradual warm-up to induce spawn.
              </li>
              <li>
                <strong>Spawning Medium:</strong> Add mops/plants for eggs to adhere to.
              </li>
              <li>
                <strong>Remove Adults:</strong> After spawning, remove parents to prevent egg predation.
              </li>
              <li>
                <strong>Egg Care:</strong> Ensure aeration; optional antifungal (e.g., methylene blue) if fungus appears.
              </li>
              <li>
                <strong>Hatching:</strong> Eggs hatch in 2–7 days depending on temperature.
              </li>
              <li>
                <strong>First Foods:</strong> Infusoria or specialized fry foods until large enough for baby brine shrimp.
              </li>
              <li>
                <strong>Water Quality:</strong> Frequent small water changes; avoid strong currents.
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


