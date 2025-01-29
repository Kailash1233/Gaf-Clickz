"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { useRouter } from 'next/navigation';


const SkeletonOne = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/nature')} className="cursor-pointer">
      <p className="font-bold md:text-4xl text-xl text-white">
        Nature
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};


const SkeletonTwo = () => {
  const router = useRouter();
  
  return (
    <div onClick={() => router.push('/fashion')} className="cursor-pointer">
      <p className="font-bold md:text-4xl text-xl text-white">
        Fashion
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It's a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/animals')} className="cursor-pointer">
      <p className="font-bold md:text-4xl text-xl text-white">
        Animals
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/celebrity')} className="cursor-pointer">
      <p className="font-bold md:text-4xl text-xl text-white">
        Celebrity Clicks
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/Travel.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/Fashion.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/Animals.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "/images/Celebrity.jpg",
  },
];

export function Gallery() {
  return (
    <div className="bg-gradient-to-b from-white-100 via-slate-50 to-slate-300">
    <div className="bg-white text-black p-8 rounded-lg ">
    <h1 className="text-5xl font-extrabold text-center mt-4">
    Gallery
    </h1>
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  </div>
  </div>
  );
}