    "use client";
    import React from "react";

    export async function loader() {
      return null;
    }

    export default function Betta() {
      const [animate, setAnimate] = React.useState(false);
      React.useEffect(() => {
        setAnimate(true);
        document.title = "Betta Breeding Guide - Breed-A-Fin";
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
                    animate
                      ? "fade-in-blur"
                      : "opacity-0 blur-[12px] translate-y-2"
                  }`}
                >
                  Betta Breeding Guide
                </p>

                {/* Intro Paragraph */}
                <p
                  className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                    animate
                      ? "fade-in-blur fade-in-blur-delay"
                      : "opacity-0 blur-[12px] translate-y-2"
                  }`}
                >
                  Bettas are oviparous bubble-nesters. With proper conditioning, a calm male will build a bubble nest and care for eggs until they hatch and fry become free-swimming.
                </p>

                {/* Choosing Section */}
                <h2
                  className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                    animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
                  }`}
                >
                  Choosing the Betta Pair
                </h2>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
                  Select a healthy, active male with symmetrical finnage and a receptive, robust female with a visible ovipositor. Avoid clamped fins, torn edges, fin rot, velvet, or lethargy. Look for responsive fish that flare and display naturally.
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
                  Condition both fish for 1–2 weeks on a high-quality diet: rotate baby brine shrimp, daphnia, blackworms (rinsed), and quality pellets. Maintain pristine water and stable warmth to promote gamete development. A conditioned pair is far more likely to spawn peacefully and produce viable eggs.
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
                  Use a shallow 5–10 gallon tank with a tight lid to preserve humid air for the labyrinth organ. Keep gentle filtration (sponge filter), warm temperature 78–82°F (25.5–28°C), and very calm surface agitation for bubble nest stability.
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
                  Add floating plants (Salvinia, frogbit) or a spawning aid (almond leaf, polystyrene cup half) to anchor the nest. Provide visual barriers and hiding spots for the female. Soft, slightly acidic to neutral water often encourages spawning, but stability matters most.
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
                    <strong>Condition the Pair:</strong> Feed live/frozen foods (daphnia, brine shrimp) for 1–2 weeks.
                  </li>
                  <li>
                    <strong>Introduce Carefully:</strong> Use a divider or jar the female. Allow the male to build a bubble nest.
                  </li>
                  <li>
                    <strong>Spawning Embrace:</strong> The male wraps the female; eggs fall and are placed into the nest by the male.
                  </li>
                  <li>
                    <strong>Remove the Female:</strong> After spawning, remove the female to prevent injury.
                  </li>
                  <li>
                    <strong>Male Care:</strong> The male guards the nest and tends eggs until hatching (24–48 hours typically).
                  </li>
                  <li>
                    <strong>Free-Swimming Fry:</strong> Once fry are free-swimming (2–3 days post-hatch), remove the male.
                  </li>
                  <li>
                    <strong>First Foods:</strong> Start with infusoria or commercial liquid fry food, progressing to microworms and baby brine shrimp.
                  </li>
                  <li>
                    <strong>Water Quality:</strong> Perform small, frequent water changes and maintain warm, stable conditions.
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


