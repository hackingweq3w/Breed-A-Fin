"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Angelfish() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Angelfish Breeding Guide - Breed-A-Fin";
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
              Angelfish Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Angelfish are graceful freshwater cichlids known for their tall, triangular bodies and strong pair bonds. They are egg-laying fish that spawn on vertical surfaces and provide excellent parental care.
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
              Select healthy, mature angelfish that have formed a natural pair. Forced pairings often fail, as angelfish are selective and establish bonds through social interaction and territory defense.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition the breeding pair with a protein-rich diet of live or frozen foods like bloodworms, brine shrimp, and quality pellets. A nutritious diet ensures strong eggs and good fry survival rates.
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
              Use a tall 20–30 gallon tank with soft, slightly acidic water (pH 6.5–7.0) and a temperature of 80–82°F (26–28°C). Provide vertical spawning surfaces like broad leaves, slate, or filter pipes for egg laying.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Gentle filtration and stable water conditions are vital. A sponge filter is ideal to protect the fry while maintaining oxygenation. Avoid strong currents that may disturb the eggs or fry.
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
                <strong>Pair Formation:</strong> Allow a bonded pair to form naturally in a community tank before isolating them.
              </li>
              <li>
                <strong>Conditioning:</strong> Feed high-protein foods and maintain excellent water quality for two weeks.
              </li>
              <li>
                <strong>Breeding Tank:</strong> Move the pair to a dedicated breeding tank with a vertical spawning surface.
              </li>
              <li>
                <strong>Spawning:</strong> The pair will clean a surface, lay eggs, and fertilize them together.
              </li>
              <li>
                <strong>Parental Care:</strong> Parents fan and guard the eggs; if they eat them, eggs can be artificially incubated.
              </li>
              <li>
                <strong>Hatching:</strong> Eggs hatch within 2–3 days; fry become free-swimming after 4–5 more days.
              </li>
              <li>
                <strong>Feeding Fry:</strong> Begin with infusoria or liquid fry food, then switch to baby brine shrimp as they grow.
              </li>
              <li>
                <strong>Water Quality:</strong> Keep temperature stable and perform small, frequent water changes.
              </li>
            </ol>

            {/* Button */}
            <a
                href="https://youtu.be/jgqG6xRUAmg?si=EgVRrFBqO5wzHJvQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
              >
                Watch the video
              </a>
          </div>
        </div>
      </div>
    </>
  );
}
