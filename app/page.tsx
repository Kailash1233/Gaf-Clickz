// const testimonials = [
//   {
//     quote:
//       "The photos captured were nothing short of magical. Each moment was beautifully framed, and the emotions were perfectly captured. Truly talented!",
//     name: "Ananya Mehra",
//     role: "Creative Director",
//     imgSrc: "https://i.pravatar.cc/120?img=4",
//   },
//   {
//     quote:
//       "I am in awe of the pictures! The attention to detail and the lighting were perfect. The photographer really brought out the best in the setting and in me.",
//     name: "Ravi Kumar",
//     role: "Actor",
//     imgSrc: "https://i.pravatar.cc/120?img=5",
//   },
//   {
//     quote:
//       "I was looking for someone to capture the essence of my business, and the photos turned out to be beyond what I could have imagined. Highly recommended!",
//     name: "Priya Sharma",
//     role: "Entrepreneur",
//     imgSrc: "https://i.pravatar.cc/120?img=6",
//   },
//   {
//     quote:
//       "The photographer was professional and friendly, making the entire experience so enjoyable. The photos were stunning, and I couldn't be happier with the results.",
//     name: "Amit Patel",
//     role: "Wedding Planner",
//     imgSrc: "https://i.pravatar.cc/120?img=7",
//   },
//   {
//     quote:
//       "Incredible photography skills! The photos perfectly captured the essence of our event. I will definitely be hiring again for future shoots.",
//     name: "Sanya Desai",
//     role: "Event Coordinator",
//     imgSrc: "https://i.pravatar.cc/120?img=8",
//   },
//   {
//     quote:
//       "Every shot was a work of art. The photographer really understood the vibe and captured everything just as I envisioned. Couldn't be happier!",
//     name: "Rohit Singh",
//     role: "Fashion Designer",
//     imgSrc: "https://i.pravatar.cc/120?img=9",
//   },
//   {
//     quote:
//       "The photoshoot was a fun and seamless experience. The photographer was patient and really took the time to understand what I wanted. The final results were amazing!",
//     name: "Neha Gupta",
//     role: "Model",
//     imgSrc: "https://i.pravatar.cc/120?img=10",
//   },
// ];

"use client";

import { useState, useEffect } from "react";
import { HeroParallaxDemo } from "@/components/Parallax";
import Gallery from "@/components/Gallery";
import Head from "next/head";
import About from "@/components/About";
import Packages from "@/components/Packages";
import Navbar from "@/components/navbar";
import EnquireForm from "@/components/enquire-form";
import ContactPage from "@/components/contact-page";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getImageSrc = () =>
        window.innerWidth < 768 ? "/GafClickz1.jpg" : "/GafClickz.jpg";

      const handleResize = () => setImageSrc(getImageSrc());

      // Set initial image source after mount
      handleResize();

      // Listen for window resize events
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <Head>
        <title>Gafclickz</title>
        <meta
          name="description"
          content="I transform ordinary scenes into extraordinary works of art, drawing viewers into my world and encouraging them to discover new perspectives through my lens."
        />
        <meta
          name="google-site-verification"
          content="yPe0RyV5gBivZ0tYEoO_Nl_JEQoWq2JNPzwr6yX_9CM"
        />
      </Head>

      <main className="relative bg-black text-white">
        <Navbar />
        {imageSrc && (
          <div className="absolute inset-0 z-10 h-screen w-full">
            <img
              src={imageSrc}
              alt="Gaf Clickz Landing"
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div id="hero" className="relative z-0">
          <HeroParallaxDemo />
        </div>

        <div id="gallery">
          <Gallery />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="packages">
          <Packages />
        </div>
        <div id="contact">
          <EnquireForm />
        </div>

        <div id="Footer">
          <ContactPage />
        </div>
      </main>
    </>
  );
}
