"use client";
import React from "react";
import { BackgroundGradientAnimation } from "components/ui/background-gradient-animation";
import {
  IconHome,
  IconBook2,
  IconBrain,
  IconInfoCircle,
  IconTopologyStar,
} from "@tabler/icons-react";

export async function loader() {
  return null;
}

export default function Swordtail() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Swordtail Breeding Guide - Breed-A-Fin";
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
              Swordtail Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate
                  ? "fade-in-blur fade-in-blur-delay"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Swordtails are lively, hardy livebearers that are widely popular among aquarium enthusiasts. Recognizable by their long, sword-shaped tails, these fish are active and colorful, making them a centerpiece in community tanks. Breeding swordtails is both rewarding and educational, giving insights into livebearing behavior, genetics, and fry care. With proper tank conditions, feeding, and observation, even beginners can successfully raise healthy fry.
            </p>

            {/* Choosing the Swordtail Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Swordtail
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              Selecting healthy swordtails is essential for successful breeding. Look for fish that are active, alert, and free of visible diseases or injuries. Males display brighter colors and the characteristic sword-like tail, while females are larger, rounder, and develop a gravid spot near the tail when ready to breed. Obtaining fish from reputable breeders ensures strong genetics and reduces the risk of deformities or inbreeding.
            </p>

            {/* Tank Setup Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Tank Setup
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              A dedicated breeding tank or a well-planted community tank works well for swordtails. A 15–20 gallon tank provides sufficient space for fry and stable water conditions. Swordtails prefer slightly alkaline water with temperatures between 24–28°C. Include plenty of live or artificial plants to give fry hiding spots and reduce stress for females. Proper filtration, regular water changes, and monitoring water quality are key to maintaining a healthy environment.
            </p>

            {/* Steps for Breeding Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Steps for Breeding
            </h2>
            <ol className="text-base md:text-lg mt-4 text-white font-normal inter-var max-w-3xl mx-auto space-y-3 list-decimal list-inside">
              <li>
                <strong>Separate Males and Females:</strong> Keep sexes separate until ready to breed to avoid stress and uncontrolled mating.
              </li>
              <li>
                <strong>Condition the Fish:</strong> Feed high-quality live or frozen foods like daphnia, bloodworms, or brine shrimp to improve coloration and health.
              </li>
              <li>
                <strong>Introduce for Breeding:</strong> Place 1 male with 2–3 females in a breeding tank. Observe for signs of courtship and aggression.
              </li>
              <li>
                <strong>Provide Hiding Spots:</strong> Plants and breeding grass protect fry and reduce stress for females.
              </li>
              <li>
                <strong>Monitor Females:</strong> Gravid females carry fry for 24–30 days. Watch for the gravid spot darkening and swelling in the abdomen.
              </li>
              <li>
                <strong>Separate the Fry:</strong> Use a heavily planted area or a mesh breeder box to protect newborns from adult fish.
              </li>
              <li>
                <strong>Feed the Fry:</strong> Start with infusoria or liquid fry food, gradually introducing baby brine shrimp or finely crushed flakes as they grow.
              </li>
              <li>
                <strong>Maintain Water Quality:</strong> Regular water changes and stable temperature ensure fry develop healthy bodies and colors.
              </li>
            </ol>

            {/* Button */}
            <a
                href="https://youtu.be/xDismEixFjI?si=y6cwcyB1cE-h-kuj"
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
