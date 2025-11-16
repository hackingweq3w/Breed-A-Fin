"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Goldfish() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Hand Breeding Goldfish - Breed‑A‑Fin";
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
              Hand Breeding Goldfish
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Hand breeding goldfish is a precise method to control reproduction and improve fry quality. In this technique, eggs and milt are manually collected and fertilized, ensuring a higher success rate than natural spawning.
            </p>

            {/* Choosing Breeders */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Selecting Breeders
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Choose healthy, mature goldfish with good body shape and vibrant colors. Males develop small white breeding tubercles on their gill covers and fins, while females appear fuller due to eggs.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Condition them for 2–3 weeks with a high-protein diet (live/frozen foods like bloodworms, brine shrimp) along with vegetables such as peas or spinach. Well-conditioned breeders produce stronger eggs and sperm.
            </p>

            {/* Tank Setup */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tank Preparation
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Use a separate, shallow tank for hand breeding with gentle aeration. The bottom should be free of gravel to simplify egg collection. Provide spawning mops or soft-leaved plants to gently hold eggs once fertilized.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Maintain clean water, stable temperature, and proper oxygenation. Hand breeding works best in slightly cooler water, gradually warming to trigger egg and sperm readiness.
            </p>

            {/* Steps for Hand Breeding */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Hand Breeding Steps
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li><strong>Prepare Breeders:</strong> Condition males and females for 2–3 weeks with a high-protein diet.</li>
              <li><strong>Collect Eggs:</strong> Gently strip eggs from the female into a clean container using a soft touch.</li>
              <li><strong>Collect Milt:</strong> Gently strip sperm from the male into a separate container.</li>
              <li><strong>Fertilize:</strong> Mix eggs and milt carefully, ensuring all eggs are coated for fertilization.</li>
              <li><strong>Transfer Eggs:</strong> Place fertilized eggs onto spawning mops or plants in a separate hatching tank with gentle aeration.</li>
              <li><strong>Monitor Hatching:</strong> Eggs typically hatch within 4–7 days depending on temperature. Remove unfertilized or dead eggs to prevent fungus.</li>
              <li><strong>Feed Fry:</strong> Start with infusoria or liquid fry food, then gradually introduce baby brine shrimp and finely crushed high-quality flakes.</li>
              <li><strong>Maintain Water Quality:</strong> Perform frequent small water changes, avoid strong currents, and monitor water parameters carefully.</li>
            </ol>

            {/* Watch Video Button */}
            <div className="mt-10">
              <a
                href="https://www.youtube.com/watch?v=c_XnMwhAI4I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
              >
                Watch the video
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
