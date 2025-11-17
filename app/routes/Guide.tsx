"use client";
import React, { useEffect, useState, useId, useRef } from "react";
import { FloatingDock } from "components/ui/floating-dock";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "hooks/use-outside-click";
import { Link } from "react-router";
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

export default function Guide() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
    document.title = "Guide - Breed-A-Fin";
  }, []);

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-5 w-5 text-white" />, href: "/" },
    { title: "Introduction", icon: <IconBook2 className="h-5 w-5 text-white" />, href: "/introduction" },
    { title: "Guide", icon: <IconBrain className="h-5 w-5 text-white" />, href: "/guide" },
    { title: "AI Assistant", icon: <IconTopologyStar className="h-5 w-5 text-white" />, href: "/ai" },
    { title: "About", icon: <IconInfoCircle className="h-5 w-5 text-white" />, href: "#about" },
  ];

  return (
    <>
     <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-black via-[#0a1a0a] to-black z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">

          {/* Emerald glow nebula effects */}
          <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-emerald-700/40 rounded-full blur-[150px] animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-[900px] h-[900px] bg-emerald-500/45 rounded-full blur-[150px] animate-float-slow delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-emerald-600/35 rounded-full blur-[160px] animate-float-slow delay-300"></div>
        </div>
      </div>

      <div className="relative z-5 flex items-start justify-center pt-4 md:pt-6 pb-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-emerald-600/20 backdrop-blur-sm rounded-4xl p-8 md:p-12 border border-emerald-300/30 shadow-2xl">
            <p
              className={`text-2xl md:text-4xl lg:text-3xl text-white font-bold text-center ${
                animate ? "fade-in-blur" : "opacity-0 blur-[12px] translate-y-4"
              }`}
            >
              Fish Breeding Guide
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-0">
        <ExpandableCardDemo />
      </div>

      <FloatingDock
        items={dockItems}
        desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      />
    </>
  );
}

function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }
    document.body.style.overflow =
      active && typeof active === "object" ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-emerald-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base h-40 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-emerald-100 dark:hover:bg-emerald-800 rounded-xl cursor-pointer transition"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col items-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white dark:text-neutral-200 text-center text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-white dark:text-neutral-400 text-center text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

const cards = [
  {
    description: "Live-bearer",
    title: "Guppy",
    src: "guppy.jpg",
    ctaText: "Learn More",
    ctaLink: "/guppy",
    content: () => (
      <p>
        Guppies are among the easiest aquarium fish to breed and require only simple care.
        A 10–20 gallon breeding tank with plants provides space and cover for fry.
        Maintain clean, stable water and a higher female-to-male ratio for best results.
      </p>
    ),
  },
  {
    description: "Live-bearer",
    title: "Platy",
    src: "Platy.png",
    ctaText: "Learn More",
    ctaLink: "/platy",
    content: () => (
      <p>
        Platys are hardy, peaceful livebearers. Use a 15–20 gallon tank with plants for fry cover.
        Keep a 2–3 female to 1 male ratio, maintain slightly alkaline water, and feed small, frequent meals to condition breeders.
      </p>
    ),
  },
  {
    description: "Oviparous",
    title: "Goldfish",
    src: "goldfish.jpg",
    ctaText: "Learn More",
    ctaLink: "/goldfish",
    content: () => (
      <p>
        Goldfish are oviparous egg scatterers. Simulate spring conditions with cool water changes followed by gradual warming.
        Provide spawning mops or plants. Remove adults post-spawn to protect eggs; hatch time varies with temperature.
      </p>
    ),
  },
  {
    description: "Oviparous",
    title: "Betta",
    src: "betta.png",
    ctaText: "Learn More",
    ctaLink: "/betta",
    content: () => (
      <p>
        Bettas breed via bubble nests. Use a shallow, warm tank (78–82°F/25.5–28°C) with gentle filtration and cover.
        Introduce a conditioned pair, remove the female after spawning, and let the male tend eggs until fry are free-swimming.
      </p>
    ),
  },
  {
    description: "Live-bearer",
    title: "Molly",
    src: "molly.png",
    ctaText: "Learn More",
    ctaLink: "/molly",
    content: () => (
      <p>
        Mollies prefer slightly brackish, alkaline water and do well in a 20-gallon setup with plants.
        Maintain a higher female-to-male ratio, separate fry after birth, and feed newly hatched brine shrimp or finely crushed flakes.
      </p>
    ),
  },
  {
    description: "Oviparous – Schooling Fish",
    title: "Tetra",
    src: "tetra.jpg",
    ctaText: "Learn More",
    ctaLink: "/tetra",
    content: () => (
      <p>
        Tetra are small, colorful schooling fish that thrive in groups of six or more.
        Keep them in a well-planted tank of at least 20 gallons with soft, slightly acidic water (pH 6.0–7.0).
        For breeding, condition a pair with high-quality food, provide a spawning mop or fine plants,
        and remove adults after spawning to prevent egg predation.
      </p>
    ),
  },
  {
    description: "Egg Scatterer",
    title: "Zebra Danio",
    src: "zebra.jpg",
    ctaText: "Learn More",
    ctaLink: "/zebra-danio",
    content: () => (
      <p>
        Zebra Danios are hardy, fast-moving fish ideal for beginners.
        They spawn readily in cooler temperatures (around 72°F/22°C).
        Use marbles or mesh on the tank bottom so eggs fall through safely.
        Remove adults post-spawn. Fry hatch within 2–3 days and can be fed infusoria or powdered food.
      </p>
    ),
  },
  {
    description: "Oviparous – Cichlid",
    title: "Angelfish",
    src: "angel.jpg",
    ctaText: "Learn More",
    ctaLink: "/angelfish",
    content: () => (
      <p>
        Angelfish are elegant cichlids that form breeding pairs.
        Keep them in tall aquariums (at least 20 gallons per pair) with warm water (80°F/27°C).
        Provide broad leaves or a spawning cone. Parents may guard eggs and fry;
        however, if they eat them, consider artificial incubation.
      </p>
    ),
  },
  {
    description: "Egg Layer – Bottom Dweller",
    title: "Corydoras Catfish",
    src: "catfish1.jpg ",
    ctaText: "Learn More",
    ctaLink: "/corydoras",
    content: () => (
      <p>
        Corydoras are peaceful, schooling catfish that lay sticky eggs on glass or plants.
        Use soft, cool water changes to trigger spawning. Feed high-protein live or frozen food to condition breeders.
        Remove adults after eggs appear and feed fry infusoria or micro worms.
      </p>
    ),
  },
  {
    description: "Oviparous – Active Swimmers",
    title: "Barbs",
    src: "barbs.jpg",
    ctaText: "Learn More",
    ctaLink: "/rainbowfish",
    content: () => (
      <p>
        Barbs are lively, colorful schooling fish that thrive in groups of six or more.
        They prefer spacious, well-oxygenated tanks of at least 25–30 gallons with moderate water flow.
        Maintain warm, slightly acidic to neutral water (74–80°F / 23–27°C) and provide plenty of plants or spawning mops for egg laying.
        Barbs scatter eggs among plants; remove adults post-spawn to prevent them from eating the eggs.
        Fry hatch in about two days and can be fed infusoria or finely crushed flakes once free-swimming.
      </p>
    ),
  },
  {
    description: "Live-bearer",
    title: "Swordtail",
    src: "sword.jpg",
    ctaText: "Learn More",
    ctaLink: "/swordtail",
    content: () => (
      <p>
        Swordtails are colorful, hardy livebearers closely related to Platys.
        Keep them in 20+ gallon tanks with plants and mild current.
        Maintain a 3:1 female-to-male ratio. Fry are free-swimming at birth and should be separated for best survival.
      </p>
    ),
  },
  {
    description: "Oviparous",
    title: "Gowrami",
    src: "gowrami.jpg",
    ctaText: "Learn More",
    ctaLink: "/gowrami",
    content: () => (
      <p>
       Gouramis are colorful labyrinth fish with long, flowing fins and a peaceful temperament. They display interesting behaviors such as bubble nest building and gentle courtship. Males are more vibrant, while females are slightly smaller and paler.
      </p>
    ),
  },
];


