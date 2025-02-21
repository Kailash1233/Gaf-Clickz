"use client";
import React from "react";
import Image from "next/image";

const packages = [
  {
    title: "Wedding Photography",
    description:
      "Capture your special day with our professional wedding photography services. Relive every moment with stunning, high-quality images.",
    image: "/images/Wedding1.jpg",
  },
  {
    title: "Maternity Shoot",
    description:
      "Preserve the beauty of motherhood with a heartwarming maternity photoshoot. Perfect for capturing this precious phase of life.",
    image: "/images/PreWedding.jpg",
  },
  {
    title: "Event Photoshoot",
    description:
      "From birthdays to corporate events, we cover it all with professional-grade photography to make your event unforgettable.",
    image: "/images/events.jpg",
  },
  {
    title: "Fashion Photoshoot",
    description:
      "Get a high-end fashion photoshoot experience with expert lighting and posing guidance to bring out your best look.",
    image: "/images/fashion.jpg",
  },
  {
    title: "Product Photography",
    description:
      "Showcase your products in the best light with high-quality, professionally edited images for eCommerce and marketing.",
    image: "/images/product.jpg",
  },
  {
    title: "Portfolio Shoot",
    description:
      "Create a stunning portfolio for your modeling or acting career with professionally curated photoshoots.",
    image: "/images/Celebrity.jpg",
  },
];

export function Packages() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">
          Photography Packages
        </h1>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore our wide range of photography services designed to capture
          your special moments with creativity and precision.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-gray-400"
            >
              <div className="w-full h-64">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  width={400}
                  height={256}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  unoptimized
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold">{pkg.title}</h2>
                <p className="text-gray-700 text-sm mt-2">{pkg.description}</p>
                <button className="mt-4 bg-black text-white font-bold py-2 px-4 rounded-full hover:bg-gray-800 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
