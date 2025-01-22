"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/images/Celebrity.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/images/Travel.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/images/Events3.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/images/Celebrity2.jpg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/images/Events2.jpg",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/images/Events.jpg",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/images/Fashion.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/images/Events4.jpg",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/images/Wedding1.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/images/Family.jpg",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/images/Animals.jpg",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/images/PreWedding.jpg",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/images/Kids.jpg",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/images/Nature.jpg",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/images/Celebrity3.jpg",
  },
];
