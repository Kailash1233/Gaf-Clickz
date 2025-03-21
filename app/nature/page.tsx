"use client";
import React from "react";
import Image from "next/image";
import Dock from "@/components/Dock";

export default function NaturePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/Travel.jpg"
          alt="Nature Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Nature Photography</h1>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {natureItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={500}
                className="object-cover w-full h-[400px] transition-transform "
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-4">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
                <Dock />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const natureItems = [
  {
    title: "Mountain Peaks",
    description: "Majestic mountain landscapes",
    image: "/images/Travel.jpg"
  },
  {
    title: "Waterfalls",
    description: "Stunning water cascades",
    image: "/images/Travel.jpg"
  },
  {
    title: "Forests",
    description: "Dense woodland scenes",
    image: "/images/Travel.jpg"
  },
  {
    title: "Beaches",
    description: "Coastal beauty",
    image: "/images/Travel.jpg"
  },
  {
    title: "Sunsets",
    description: "Golden hour captures",
    image: "/images/Travel.jpg"
  },
  {
    title: "Wildlife",
    description: "Nature in its habitat",
    image: "/images/Travel.jpg"
  }
];
