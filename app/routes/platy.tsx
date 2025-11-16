"use client";
import React from "react";

export async function loader() {
  return null;
}

export default function Platy() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Platy Breeding Guide - Breed‑A‑Fin";
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
              Platies are livebearers — very beginner-friendly and prolific. With stable water conditions and good nutrition, breeding them is quite straightforward. Their fry are active and relatively easy to raise.
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
              Choose healthy platies: look for clear eyes, smooth scales, and active swimming. Avoid fish with sunken bellies. For breeding, aim for around **2–3 females per male** to reduce stress and chasing.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              A well-conditioned fish will have a plumper belly (in females) and a distinct anal fin in males (gonopodium), which helps in identifying sexes properly.
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
              Use a 15–20 gallon tank with dense plants or breeding grass for fry to hide. Maintain a gentle sponge filter and keep water temperature around **22–26°C (72–78°F)** with a pH around **7.2–8.0**.
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Regular small water changes help keep water quality stable, and moderate hardness supports healthy growth. Plants not only provide cover but also micro-organisms that baby platies can feed on.
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
              <li><strong>Condition Adults:</strong> Feed a mix of quality flakes, vegetables (like zucchini), and live/frozen foods to prepare for breeding.</li>
              <li><strong>Maintain Ratio:</strong> Keep ~1 male for 2–3 females to increase comfort and reduce stress.</li>
              <li><strong>Provide Hiding Spots:</strong> Plants or fine-leaved breeding grass protect fry from adults.</li>
              <li><strong>Gestation:</strong> Female carry fry for ~24–30 days. A plumper belly and dark gravid spot are signs of pregnancy.</li>
              <li><strong>Birthing:</strong> When the female looks ready, move her to a separate birthing tank or a breeder box, or insure dense plant cover in the main tank.</li>
              <li><strong>Feed Fry:</strong> Give powdered fry food or baby brine shrimp multiple times a day.</li>
              <li><strong>Maintenance:</strong> Do small, frequent water changes and use a gentle filter to avoid harming fry.</li>
            </ol>

            {/* Watch Video Button */}
            <div className="mt-10">
              <a
                href="https://www.youtube.com/watch?v=Hj5VRTnLC9I"  // Lazarus the fish boy video
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
