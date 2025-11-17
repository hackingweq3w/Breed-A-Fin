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
      {/* Background Gradient + Animated Blobs */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-green-400/60 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-[1000px] h-[1000px] bg-green-300/70 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-[1400px] h-[1400px] bg-green-500/55 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[900px] h-[900px] bg-green-600/65 rounded-full blur-3xl animate-pulse delay-1500"></div>
          <div className="absolute top-1/3 right-1/3 w-[1100px] h-[1100px] bg-green-400/60 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[120vh] flex items-start justify-center pt-16 md:pt-24 pb-40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-green-800/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-green-300/30 shadow-2xl">

            {/* Main Heading */}
            <p
              className={`text-2xl md:text-4xl lg:text-6xl text-white font-bold inter-var ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Platy Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var max-w-3xl mx-auto ${
                animate ? "fade-in-blur fade-in-blur-delay" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Platies are colorful, peaceful, and extremely hardy livebearers—perfect for beginners and experienced aquarists alike. They breed readily with stable water conditions, making them one of the easiest freshwater fish to reproduce in captivity.
            </p>

            {/* Choosing Section */}
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold inter-var mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing Your Breeding Platies
            </h2>

            <p className="text-base md:text-lg mt-4 text-white max-w-3xl mx-auto">
              Select active, healthy platies with smooth scales, clear eyes, and no signs of disease. Avoid thin or lethargic individuals.
            </p>

            <p className="text-base md:text-lg mt-4 text-white max-w-3xl mx-auto">
              Males have a narrow, pointed anal fin called a <strong>gonopodium</strong>, while females have a fan-shaped anal fin and a rounder belly.
            </p>

            {/* Tank Setup */}
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold inter-var mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Ideal Tank Setup
            </h2>

            <p className="text-base md:text-lg mt-4 text-white max-w-3xl mx-auto">
              A 15–20 gallon tank is ideal for a small breeding group. Add dense plants, moss, or breeding grass to give fry places to hide.
            </p>

            <p className="text-base md:text-lg mt-4 text-white max-w-3xl mx-auto">
              Maintain <strong>22–26°C (72–78°F)</strong> and a pH between <strong>7.2–8.0</strong>. A sponge filter helps keep fry safe while maintaining stable water quality.
            </p>

            {/* Breeding Steps */}
            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold inter-var mt-12 ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Steps for Successful Breeding
            </h2>

            <ol className="text-base md:text-lg mt-4 text-white max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li>
                <strong>Condition the Adults:</strong> Provide high-quality flakes, vegetables, and frozen/live foods to improve breeding health.
              </li>
              <li>
                <strong>Use a Proper Ratio:</strong> Keep about <strong>1 male for every 2–3 females</strong> to minimize stress.
              </li>
              <li>
                <strong>Add Hiding Spots:</strong> Plants protect fry from hungry adults.
              </li>
              <li>
                <strong>Watch for Pregnancy:</strong> Females develop a larger belly and a dark gravid spot. Gestation lasts <strong>24–30 days</strong>.
              </li>
              <li>
                <strong>Birth Time:</strong> When close to giving birth, move the female to a breeding box—or ensure plenty of plants in the main tank.
              </li>
              <li>
                <strong>Feeding Fry:</strong> Use powdered fry food, baby brine shrimp, or crushed flakes several times daily.
              </li>
              <li>
                <strong>Maintain Water Quality:</strong> Perform small, frequent water changes and keep filtration gentle.
              </li>
            </ol>

            {/* Video Button */}
            <div className="mt-10">
              <a
                href="https://www.youtube.com/watch?v=Hj5VRTnLC9I"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-green-500/80 hover:bg-green-500 text-white font-medium border border-green-300/50 shadow-lg shadow-green-500/30 transition-colors"
              >
                Watch the Video
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
