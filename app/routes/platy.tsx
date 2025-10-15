"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Platy() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Platy Breeding Guide - Breed-A-Fin";
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
              Platy Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Platys are live-bearers, well-suited for beginners. With stable water and proper conditioning, they readily produce healthy fry in community or breeding setups.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Platy
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Pick active, well-shaped fish with clear eyes, smooth scales, and intact fins. Avoid sunken bellies or clamped fins. Females are typically larger with a fuller abdomen; males often have a more pointed anal fin (gonopodium).
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Aim for a 2–3 female to 1 male ratio to minimize harassment. Condition adults for a week or more using varied foods: quality flakes, blanched vegetables (zucchini, spinach), and small live/frozen foods for protein.
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
              Use a 15–20 gallon tank with dense plants or breeding grass for fry refuge. Maintain gentle sponge filtration and stable temperature 72–78°F (22–26°C) with slightly alkaline water (pH ~7.2–8.0).
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Provide moderate hardness (GH) and regular small water changes. Good lighting supports plant growth, which in turn improves fry survival by offering microfauna and cover.
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
                <strong>Condition Adults:</strong> Feed varied foods (quality flakes, veggies, brine shrimp) for a week.
              </li>
              <li>
                <strong>Group Ratio:</strong> Keep 1 male with 2–3 females.
              </li>
              <li>
                <strong>Provide Cover:</strong> Dense plants or breeding grass protect newborn fry from adults.
              </li>
              <li>
                <strong>Gestation:</strong> Pregnancy lasts ~24–30 days; watch for squarer abdomen near birth.
              </li>
              <li>
                <strong>Separate or Heavily Plant:</strong> Move pregnant females to a breeder/birthing tank or ensure heavy planting.
              </li>
              <li>
                <strong>Fry Foods:</strong> Offer powdered fry food or baby brine shrimp several times daily.
              </li>
              <li>
                <strong>Maintenance:</strong> Small, frequent water changes; avoid strong suction.
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


