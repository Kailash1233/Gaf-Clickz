"use client";
import React from "react";
import Image from "next/image";
import Dock from "@/components/Dock";

export default function FashionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/images/Fashion.jpg"
          alt="Fashion Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Fashion Gallery</h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fashionItems.map((item, index) => (
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

const fashionItems = [
  {
    title: "Street Style",
    description: "Urban fashion at its finest",
    image: "/images/Fashion1.jpg"
  },
  {
    title: "Haute Couture",
    description: "Exclusive designer pieces",
    image: "/images/Fashion1.jpg"
  },
  {
    title: "Vintage Collection",
    description: "Timeless classic pieces",
    image: "/images/Fashion1.jpg"
  },
  {
    title: "Summer Trends",
    description: "Latest summer collections",
    image: "/images/Fashion1.jpg"
  },
  {
    title: "Accessories",
    description: "Complete your look",
    image: "/images/Fashion1.jpg"
  },
  {
    title: "Runway Looks",
    description: "Straight from fashion week",
    image: "/images/Fashion1.jpg"
  }
  
];
