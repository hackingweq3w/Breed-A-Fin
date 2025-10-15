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

export default function Introduction() {
  const [animate, setAnimate] = React.useState(false);
  React.useEffect(() => {
    setAnimate(true);
    document.title = "Guppy Breeding Guide - Breed-A-Fin";
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
              Guppy Breeding Guide
            </p>

            {/* Intro Paragraph */}
            <p
              className={`text-base md:text-lg mt-6 text-white font-normal inter-var text-center max-w-3xl mx-auto ${
                animate
                  ? "fade-in-blur fade-in-blur-delay"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Guppy breeding is one of the most fascinating and rewarding aspects
              of fishkeeping. Known as livebearers, guppies give birth to
              free-swimming fry instead of laying eggs, making the process easy
              to observe and manage for both beginners and experienced
              aquarists. Their vibrant colors, playful behavior, and high
              reproductive rate have made them a popular choice among fish
              breeders worldwide. With the right tank setup, water conditions,
              and proper care, guppy breeding can not only increase the beauty
              of an aquarium but also provide valuable learning about fish life
              cycles and genetics.
            </p>

            {/* Choosing the Guppy Section */}
            <h2
              className={`text-2xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center mt-12 ${
                animate
                  ? "fade-in-blur"
                  : "opacity-0 blur-[12px] translate-y-2"
              }`}
            >
              Choosing the Guppy
            </h2>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center max-w-3xl mx-auto">
              When starting guppy breeding, selecting the right guppies is the
              most important step. Healthy guppies should be active, alert, and
              free from any visible diseases such as torn fins, white spots, or
              dull coloration. Males are usually smaller, slimmer, and display
              brighter, more vibrant colors, while females are larger with
              rounder bodies and a visible gravid spot near the tail. It is
              recommended to choose guppies from a trusted source to ensure
              strong genetics and reduce the risk of inbreeding. Breeders often
              select guppies based on specific traits such as color patterns,
              tail shapes, or size to create desired strains, making careful
              selection the foundation of a successful breeding project.
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
              A separate breeding tank is highly recommended for guppies to
              protect the fry from being eaten by the adult fish. A 10–20 gallon
              tank is ideal for breeding purposes. The larger the tank, the more
              stable the water parameters will be and the more space the fry
              will have to grow. Make sure the tank has plenty of plants (live
              or artificial) or breeding grass to provide hiding spots for the
              fry. If you are planning to breed multiple females at once, go for
              the higher end (20 gallons) to avoid overcrowding.
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
                <strong>Separate Males and Females:</strong> Keep males and females in separate tanks until ready to breed.
              </li>
              <li>
                <strong>Condition the Fish:</strong> Feed high-quality live or frozen foods like brine shrimp or daphnia to enhance health and coloration.
              </li>
              <li>
                <strong>Introduce for Breeding:</strong> Place 1 male with 2–3 females in a breeding tank to reduce stress and aggression.
              </li>
              <li>
                <strong>Provide Hiding Spots:</strong> Add plants or breeding grass so that fry can hide from adults after birth.
              </li>
              <li>
                <strong>Monitor the Female:</strong> Gravid females carry fry for 21–30 days; watch for the gravid spot darkening.
              </li>
              <li>
                <strong>Separate the Fry:</strong> Once born, either leave the female in a heavily planted tank or move her to a tank with a mesh breeder box to protect fry.
              </li>
              <li>
                <strong>Feed the Fry:</strong> Start with infusoria or liquid fry food, then move to baby brine shrimp as they grow.
              </li>
              <li>
                <strong>Maintain Water Quality:</strong> Perform regular water changes and monitor temperature (24–28°C) to ensure healthy growth.
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
