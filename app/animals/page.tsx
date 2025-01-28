"use client";
import React from "react";
import Image from "next/image";
import Dock from "@/components/Dock";

export default function AnimalsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/Animals.jpg"
          alt="Animals Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Wildlife Gallery</h1>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animalItems.map((item, index) => (
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

const animalItems = [
  {
    title: "Big Cats",
    description: "Lions, tigers, and leopards",
    image: "/images/Animals.jpg"
  },
  {
    title: "Marine Life",
    description: "Ocean creatures",
    image: "/images/Animals.jpg"
  },
  {
    title: "Birds",
    description: "Exotic and local species",
    image: "/images/Animals.jpg"
  },
  {
    title: "Safari Animals",
    description: "African wildlife",
    image: "/images/Animals.jpg"
  },
  {
    title: "Reptiles",
    description: "Cold-blooded creatures",
    image: "/images/Animals.jpg"
  },
  {
    title: "Endangered Species",
    description: "Rare and protected animals",
    image: "/images/Animals.jpg"
  }
];
